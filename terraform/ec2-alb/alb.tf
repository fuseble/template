locals {
  aws_alb_target_group_attachment = {
    totalCount = var.aws_instance.count * length(var.aws_alb_target_group_attachment.ports)

    result = flatten([
      for i in range(var.aws_instance.count) : [
        for port in var.aws_alb_target_group_attachment.ports : {
          target_group_arn = aws_alb_target_group.alb_target_group.arn
          target_id        = aws_instance.instance[i].private_ip
          port             = port
        }
      ]
    ])
  }

  aws_alb_listener = {

  }
}

resource "aws_alb" "alb" {
  name            = var.aws_alb.name
  subnets         = aws_subnet.public_subnets.*.id
  security_groups = [aws_security_group.public_security_group.id]
}

resource "aws_alb_target_group" "alb_target_group" {
  name        = var.aws_alb_target_group.name
  port        = var.aws_alb_target_group.port
  protocol    = var.aws_alb_target_group.protocol
  target_type = var.aws_alb_target_group.target_type
  vpc_id      = aws_vpc.vpc.id
}

resource "aws_alb_target_group_attachment" "alb_target_group_attachment" {
  count = local.aws_alb_target_group_attachment.totalCount

  target_group_arn = local.aws_alb_target_group_attachment.result[count.index].target_group_arn
  target_id        = local.aws_alb_target_group_attachment.result[count.index].target_id
  port             = local.aws_alb_target_group_attachment.result[count.index].port
}

resource "aws_alb_listener" "redirect_http" {
  count = length(var.aws_alb_listener.redirect_http)

  load_balancer_arn = aws_alb.alb.arn
  port = var.aws_alb_listener.redirect_http[count.index][0]
  protocol = "HTTP"

  lifecycle {
    create_before_destroy = true
  }

  default_action {
    type = "redirect"

    redirect {
      port = "${var.aws_alb_listener.redirect_http[count.index][1]}"
      protocol = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

resource "aws_alb_listener" "origin_http" {
  count = length(var.aws_alb_listener.origin_http)
  load_balancer_arn = aws_alb.alb.id
  port = var.aws_alb_listener.origin_http[count.index]
  protocol = "HTTP"

  default_action {
    type = "forward"
    target_group_arn = aws_alb_target_group.alb_target_group.arn
  }
}

resource "aws_alb_listener" "origin_https" {
  count  = length(var.aws_alb_listener.origin_https)
  load_balancer_arn = aws_alb.alb.id
  port = var.aws_alb_listener.origin_https[count.index]
  protocol = "HTTPS"
  ssl_policy = "ELBSecurityPolicy-2016-08"
  certificate_arn = data.aws_acm_certificate.acm_certificate.arn

  lifecycle {
    create_before_destroy = true
  }

  default_action {
    type = "forward"
    target_group_arn = aws_alb_target_group.alb_target_group.arn
  }
}

resource "aws_route53_record" "route53" {
  name    = var.aws_route53_record.name
  type    = var.aws_route53_record.type
  zone_id = data.aws_route53_zone.route53_zone.zone_id

  alias {
    name                   = aws_alb.alb.dns_name
    zone_id                = aws_alb.alb.zone_id
    evaluate_target_health = false
  }
}