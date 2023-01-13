data "aws_acm_certificate" "acm_certificate" {
  domain = var.aws_acm_certificate.domain
}

data "aws_route53_zone" "route53_zone" {
  name = var.aws_route53_zone.name
}

data "aws_elb_hosted_zone_id" "elb_hosted_zone_id" {}