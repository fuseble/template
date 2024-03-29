resource "aws_cloudwatch_log_group" "this" {
  name_prefix       = "hello_world-"
  retention_in_days = 1
}

resource "aws_ecr_repository" "ecr_repository" {
  name = "hello_world"
}

resource "aws_ecs_task_definition" "this" {
  family = "hello_world"

  container_definitions = jsonencode([
    {
      name  = "hello_world"
      image = "${aws_ecr_repository.ecr_repository.repository_url}:latest"
      cpu   = 256
      memory = 512
      essential = true
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = aws_cloudwatch_log_group.this.name
          "awslogs-region"        = "${aws_cloudwatch_log_group.this.name}"
          "awslogs-stream-prefix" = "ec2"
        }
      }
      portMappings = [
        {
          containerPort = 8000
          hostPort      = 80
        },
        {
          containerPort = 443
          hostPort = 443
        }
      ]
    }
  ])

#  container_definitions = <<EOF
#[
#  {
#    "name": "hello_world",
#    "image": "hello-world",
#    "cpu": 0,
#    "memory": 128,
#    "logConfiguration": {
#      "logDriver": "awslogs",
#      "options": {
#        "awslogs-region": "eu-west-1",
#        "awslogs-group": "${aws_cloudwatch_log_group.this.name}",
#        "awslogs-stream-prefix": "ec2"
#      }
#    }
#  }
#]
#EOF
}

resource "aws_ecs_service" "this" {
  name            = "hello_world"
  cluster         = var.cluster_id
  task_definition = aws_ecs_task_definition.this.arn

  desired_count = 1

  deployment_maximum_percent         = 100
  deployment_minimum_healthy_percent = 0
}