# Droplet SSH KEYS

```shell
curl -X GET \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_TOKEN" \
"https://api.digitalocean.com/v2/account/keys" | \
jq .ssh_keys
```

```shell
curl -X GET \
-H "Content-Type: application/json" \
-H "Authorization: Bearer dop_v1_f94eb4a8955f76798f80e7c3d32b9de8e304fe91c65949b1bc85a780c9d161a1" \
"https://api.digitalocean.com/v2/account/keys"
```

## Default variables

```json
{
  "droplet_count": 1,
  "droplet_size": "s-1vcpu-1gb",
  "droplet_region": "sgp1",
  "project_name": "test-project",
  "remote_execs": [
    "sudo apt-get update",
    "curl -fsSL get.docker.com -o get-docker.sh",
    "sh get-docker.sh",
    "docker -v"
  ]
}
```