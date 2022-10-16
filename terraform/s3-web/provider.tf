provider "aws" {
  region = var.aws_provider.region
  profile = var.aws_provider.profile
}

provider "aws" {
  alias = "us_east_1"
  region = "us-east-1"
  profile = var.aws_provider.profile
}