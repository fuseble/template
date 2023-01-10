resource "aws_instance" "instance" {
  ami = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  vpc_security_group_ids = [aws_security_group.public_security_group.id]
  key_name = var.key_name

  root_block_device {
    tags = {
      Name = var.name
      KeyName = var.key_name
    }
    delete_on_termination = true
  }
}