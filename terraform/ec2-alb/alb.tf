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
  count            = var.aws_instance.count
  target_group_arn = aws_alb_target_group.alb_target_group.arn
  target_id        = aws_instance.instance[count.index].private_ip
  port             = 80
}

resource "aws_alb_listener" "alb_listener_http" {
  count             = length(var.aws_alb_listener.http)
  load_balancer_arn = aws_alb.alb.id
  port              = var.aws_alb_listener.http[count.index].port

  lifecycle {
    create_before_destroy = true
  }

  default_action {
    type = var.aws_alb_listener.http[count.index].default_action.type

    redirect {
      port        = var.aws_alb_listener.http[count.index].default_action.redirect.port
      protocol    = var.aws_alb_listener.http[count.index].default_action.redirect.protocol
      status_code = var.aws_alb_listener.http[count.index].default_action.redirect.status_code
    }
  }
}

resource "aws_alb_listener" "alb_listener_https" {
  count             = length(var.aws_alb_listener.https)
  load_balancer_arn = aws_alb.alb.id
  port              = var.aws_alb_listener.https[count.index].port
  protocol          = var.aws_alb_listener.https[count.index].protocol
  ssl_policy        = var.aws_alb_listener.https[count.index].ssl_policy
  certificate_arn   = data.aws_acm_certificate.acm_certificate.arn

  lifecycle {
    create_before_destroy = true
  }

  default_action {
    type             = var.aws_alb_listener.https[count.index].default_action.type
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