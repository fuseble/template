variable "droplet_count" {
  type    = number
  default = 1
}

variable "droplet_size" {
  type = string
  default = "s-1vcpu-1gb"
}

variable "droplet_region" {
  type = string
  default = "sgp1"
}

variable "project_name" {
  type = string
  default = "test-project"
}

variable "remote_execs" {
  type = list(string)
  default = [
    "sudo apt-get update",
    "curl -fsSL get.docker.com -o get-docker.sh",
    "sh get-docker.sh",
    "docker -v",
  ]
}