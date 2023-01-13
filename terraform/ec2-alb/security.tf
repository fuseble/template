resource "aws_security_group" "private_security_group" {
  name        = var.aws_security_group.private.name
  description = var.aws_security_group.private.description
  vpc_id      = aws_vpc.vpc.id

  dynamic "ingress" {
    for_each = var.aws_security_group.private.ingress
    content {
      from_port   = ingress.value.from_port
      to_port     = ingress.value.to_port
      protocol    = ingress.value.protocol
      cidr_blocks = ingress.value.cidr_blocks
    }
  }

  dynamic "egress" {
    for_each = var.aws_security_group.private.egress
    content {
      from_port   = egress.value.from_port
      to_port     = egress.value.to_port
      protocol    = egress.value.protocol
      cidr_blocks = egress.value.cidr_blocks
    }
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_security_group" "public_security_group" {
  name        = var.aws_security_group.public.name
  description = var.aws_security_group.public.description
  vpc_id      = aws_vpc.vpc.id

  dynamic "ingress" {
    for_each = var.aws_security_group.private.ingress
    content {
      from_port   = ingress.value.from_port
      to_port     = ingress.value.to_port
      protocol    = ingress.value.protocol
      cidr_blocks = ingress.value.cidr_blocks
    }
  }

  dynamic "egress" {
    for_each = var.aws_security_group.private.egress
    content {
      from_port   = egress.value.from_port
      to_port     = egress.value.to_port
      protocol    = egress.value.protocol
      cidr_blocks = egress.value.cidr_blocks
    }
  }

  ingress {
    protocol    = "tcp"
    from_port   = 80
    to_port     = 80
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol    = "tcp"
    from_port   = 443
    to_port     = 443
    cidr_blocks = ["0.0.0.0/0"]
  }

  lifecycle {
    create_before_destroy = true
  }
}