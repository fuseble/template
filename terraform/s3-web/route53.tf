data "aws_route53_zone" "route53_zone" {
  name = var.route53_zone.name
}

resource "aws_route53_record" "route53_record" {
  name = var.route53_record.name
  type = var.route53_record.type
  zone_id = data.aws_route53_zone.route53_zone.zone_id

  alias {
    name = aws_cloudfront_distribution.cloudfront_distribution.domain_name
    zone_id = aws_cloudfront_distribution.cloudfront_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}
