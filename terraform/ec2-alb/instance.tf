resource "aws_instance" "instance" {
  ami                         = var.aws_instance.ami
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
