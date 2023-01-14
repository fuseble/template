# Create a VPC
resource "aws_vpc" "vpc" {
  cidr_block = var.aws_vpc.cidr_block
  tags = {
    Name = var.aws_vpc.tags.Name
  }
}

# Create Private Subnets
resource "aws_subnet" "private_subnets" {
  count                   = 1
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = cidrsubnet(aws_vpc.vpc.cidr_block, 8, count.index)
  availability_zone       = var.aws_subnet.availability_zone[count.index]
  map_public_ip_on_launch = false
  tags = {
    Name = "${var.aws_subnet.private_subnet.Name}${count.index + 1}"
  }
}

locals {
  public_subnets_count = var.aws_instance.count <= 1 ? 2 : var.aws_instance.count
  private_subnets_count = length(aws_subnet.private_subnets)
}

# Create Public Subnets
resource "aws_subnet" "public_subnets" {
  count                   = local.public_subnets_count
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = cidrsubnet(aws_vpc.vpc.cidr_block, 8, count.index + local.public_subnets_count)
  availability_zone       = var.aws_subnet.availability_zone[count.index % length(var.aws_subnet.availability_zone)]
  map_public_ip_on_launch = true
  tags = {
    Name = "${var.aws_subnet.public_subnet.Name}${count.index + 1}"
  }
}

# Internet Gateway for Public Subnet
resource "aws_internet_gateway" "internet_gateway" {
  vpc_id = aws_vpc.vpc.id
  tags = {
    Name = var.aws_internet_gateway.tags.Name
  }
}

# Route the Public Subnet Traffic through the Internet Gateway
resource "aws_route" "route" {
  route_table_id         = aws_vpc.vpc.main_route_table_id
  destination_cidr_block = var.aws_route.destination_cidr_block
  gateway_id             = aws_internet_gateway.internet_gateway.id
}

# Create a NAT gateway with an Elastic IP for each Private Subnet to get Internet Connect
resource "aws_eip" "eip" {
  count      = local.public_subnets_count
  vpc        = var.aws_eip.vpc
  depends_on = [aws_internet_gateway.internet_gateway]
  tags = {
    Name = "${var.name}-eip-${count.index + 1}"
  }
}

resource "aws_nat_gateway" "nat_gateway" {
  count         = local.public_subnets_count
  subnet_id     = element(aws_subnet.public_subnets.*.id, count.index)
  allocation_id = element(aws_eip.eip.*.id, count.index)
}

# Create a New Route Table for Private Subnets, make it route non-local traffic through the NAT gateway to the internet
resource "aws_route_table" "route_table" {
  count  = local.private_subnets_count
  vpc_id = aws_vpc.vpc.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = element(aws_nat_gateway.nat_gateway.*.id, count.index)
  }
  tags = {
    Name = "${var.name}-route-table-${count.index + 1}"
  }
}

# Explicitly associate the Private Subnets with the Private Route Table
resource "aws_route_table_association" "private_route_table_association" {
  count          = local.private_subnets_count
  subnet_id      = element(aws_subnet.private_subnets.*.id, count.index)
  route_table_id = element(aws_route_table.route_table.*.id, count.index)
}