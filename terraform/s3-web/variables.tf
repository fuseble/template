variable aws_provider {
  type = object({
    region = string
    profile = string
  })

  default = {
    region = "ap-northeast-2"
    profile = "default"
  }
}

variable "s3_bucket" {
  type = object({
    bucket = string
  })
}

variable "route53_zone" {
  type = object({
    name = string
  })
}

variable "route53_record" {
  type = object({
    name = string
    type = string
    ttl = number
  })
}

variable "cloudfront_distribution" {
  type = object({
    comment = string
  })
}