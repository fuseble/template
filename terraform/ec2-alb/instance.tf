data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical
}

resource "aws_instance" "instance" {
  ami                         = data.aws_ami.ubuntu.id
  count                       = var.aws_instance.count
  instance_type               = var.aws_instance.instance_type
  key_name                    = var.key_name
  vpc_security_group_ids      = [aws_security_group.public_security_group.id]
  subnet_id                   = aws_subnet.public_subnets[count.index].id
  associate_public_ip_address = true

  tags = {
    Name = "${var.name}-${count.index + 1}"
  }
}
