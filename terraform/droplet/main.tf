

resource "digitalocean_droplet" "droplets" {
  count = var.droplet_count
  image     = "ubuntu-20-04-x64"
  name      = "${var.project_name}-${var.droplet_size}-${count.index + 1}"
  region    = var.droplet_region
  size      = var.droplet_size
  ssh_keys = [digitalocean_ssh_key.default.fingerprint]
  monitoring = true

  connection {
    user        = "root"
    type        = "ssh"
    private_key = file("~/.ssh/id_rsa")
    host        = self.ipv4_address
    timeout     = "2m"
  }

  provisioner "remote-exec" {
    inline = var.remote_execs
  }
}

resource "digitalocean_project" "project" {
  name = var.project_name
  resources = digitalocean_droplet.droplets.*.urn
  description = "DigitalOcean Project ${var.project_name} by Terraform"
}