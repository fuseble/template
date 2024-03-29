output "droplets_ip_address" {
  value = digitalocean_droplet.droplets.*.ipv4_address
  description = "The public IP address of your Droplet application."
}