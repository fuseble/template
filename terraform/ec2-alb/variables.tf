variable "name" {
  type = string
}

variable "key_name" {
  type = string
  default = "root"
}

variable "aws_profile" {
  type    = string
  default = "default"
}

variable "aws_provider" {
  type = object({
    region  = string
    profile = string
  })
}

// ACM
variable "aws_acm_certificate" {
  type = object({
    domain = string
  })
}

// Route53
variable "aws_route" {
  type = object({
    destination_cidr_block = string
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

// NAT 게이트웨이
variable "aws_nat_gateway" {
  type = object({
    count = number
  })
}

// 라우팅 테이블
variable "aws_route_table" {
  type = object({
    count = number
    route = object({
      cidr_block = string
    })
  })
}

// 라우팅 테이블 연결
variable "aws_route_table_association" {
  type = object({
    count = number
  })
}

// 보안 그룹
variable "aws_security_group" {
  type = object({
    public = object({
      name        = string
      description = string
      container_ingress = object({
        from_port   = number
        to_port     = number
        protocol    = string
        cidr_blocks = list(string)
      })
      database_ingress = object({
        from_port   = number
        to_port     = number
        protocol    = string
        cidr_blocks = list(string)
      })
      egress = object({
        from_port   = number
        to_port     = number
        protocol    = string
        cidr_blocks = list(string)
      })
      lifecycle = object({
        create_before_destroy = bool
      })
    })
    private = object({
      name        = string
      description = string
      container_ingress = object({
        from_port   = number
        to_port     = number
        protocol    = string
        cidr_blocks = list(string)
      })
      database_ingress = object({
        from_port   = number
        to_port     = number
        protocol    = string
        cidr_blocks = list(string)
      })
      egress = object({
        from_port   = number
        to_port     = number
        protocol    = string
        cidr_blocks = list(string)
      })
      lifecycle = object({
        create_before_destroy = bool
      })
    })
  })
}

// Application LoadBalancer
variable "aws_alb" {
  type = object({
    name = string
  })
}

// ALB Target Group
variable "aws_alb_target_group" {
  type = object({
    name        = string
    port        = number
    protocol    = string
    target_type = string
    health_check = object({
      path                = string
      protocol            = string
      interval            = string
      timeout             = string
      healthy_threshold   = string
      unhealthy_threshold = string
      matcher             = string
    })
  })
}

// ALB Listener
variable "aws_alb_listener" {
  type = object({
    http = object({
      port     = string
      protocol = string
      default_action = object({
        type = string
        redirect = object({
          port        = string
          protocol    = string
          status_code = string
        })
      })
    })
    https = object({
      port       = string
      protocol   = string
      ssl_policy = string
      lifecycle = object({
        create_before_destroy = bool
      })
      default_action = object({
        type = string
      })
    })
  })
}