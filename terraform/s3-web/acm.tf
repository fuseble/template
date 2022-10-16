data "aws_acm_certificate" "acm_certificate" {
    domain   = var.route53_zone.name
    statuses = ["ISSUED"]
    provider = aws.us_east_1
}