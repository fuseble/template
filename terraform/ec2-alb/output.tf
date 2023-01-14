output "aws_instance" {
  value = aws_instance.instance.*.id
}

output "aws_vpc" {
  value = aws_vpc.vpc.*.id
}

output "aws_public_subnet" {
  value = aws_subnet.public_subnets.*.id
}

output "aws_private_subnet" {
  value = aws_subnet.private_subnets.*.id
}