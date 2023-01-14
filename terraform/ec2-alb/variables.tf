variable "name" {
  type = string
}

variable "key_name" {
  type    = string
  default = "root"
}

variable "aws_region" {
  type    = string
  default = "ap-northeast-2"
}

variable "aws_profile" {
  type    = string
  default = "default"
}

variable "aws_instance" {
  type = object({
    ami           = string
    instance_type = string
    count         = number
  })
}

// ACM
variable "aws_acm_certificate" {
  type = object({
    domain = string
  })
}

// Route53 Zone
variable "aws_route53_zone" {
  type = object({
    name = string
  })
}

// Route53 Record
variable "aws_route53_record" {
  type = object({
    name = string
    type = string
    alias = object({
      evaluate_target_health = bool
    })
  })
}

// VPC
variable "aws_vpc" {
  type = object({
    cidr_block           = string
    enable_dns_hostnames = bool
    enable_dns_support   = bool
    instance_tenancy     = string
    tags = object({
      Name = string
    })
  })
}

// 서브넷
variable "aws_subnet" {
  type = object({
    count             = number
    availability_zone = list(string)
    private_subnet = object({
      Name = string
    })
    public_subnet = object({
      Name = string
    })
  })
}

// 인터넷 게이트웨이
variable "aws_internet_gateway" {
  type = object({
    tags = object({
      Name = string
    })
  })
}

// Elastic IP
variable "aws_eip" {
  type = object({
    count = number
    vpc   = bool
    tags = object({
      Name = string
    })
  })
}

// 보안 그룹
variable "aws_security_group" {
  type = object({
    public = object({
      name        = string
      description = string
      ingress     = list(number)
    })
    private = object({
      name        = string
      description = string
    })
  })
}

// Application LoadBalancer
variable "aws_alb" {
  type = object({
    name = string
  })
}

variable "aws_alb_target_group" {
  type = object({
    name        = string
    port        = number
    protocol    = string
    target_type = string
  })
}

variable "aws_alb_target_group_attachment" {
  type = object({
    ports = list(number)
  })
}

variable "aws_alb_listener" {
  type = object({
    redirect_http = list(list(number))
    origin_http = list(number)
    origin_https = list(number)
  })
}