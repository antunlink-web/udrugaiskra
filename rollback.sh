#!/usr/bin/env bash

set -Eeuo pipefail

SITE_DIR="/opt/primelink/infrastructure/caddy/sites/iskra.primelink.com.hr"
BACKUP_DIR="/opt/primelink/infrastructure/backups/iskra-svjetlosti/deployments"
CADDY_CONTAINER="primelink-caddy"

BACKUP="${1:-}"

if [[ -z "$BACKUP" ]]; then
  BACKUP="$(sudo find "$BACKUP_DIR" \
    -mindepth 1 \
    -maxdepth 1 \
    -type d \
    | sort \
    | tail -n 1)"
fi

if [[ -z "$BACKUP" || ! -d "$BACKUP" ]]; then
  echo "Error: no valid deployment backup was found."
  echo "Usage: ./rollback.sh /full/path/to/backup"
  exit 1
fi

echo "Restoring backup:"
echo "$BACKUP"

sudo find "$SITE_DIR" -mindepth 1 -maxdepth 1 -exec rm -rf {} +
sudo cp -a "$BACKUP/." "$SITE_DIR/"

sudo docker exec "$CADDY_CONTAINER" caddy validate \
  --config /etc/caddy/Caddyfile

sudo docker exec "$CADDY_CONTAINER" caddy reload \
  --config /etc/caddy/Caddyfile

curl --fail --silent --show-error \
  --retry 5 \
  --retry-delay 2 \
  --output /dev/null \
  https://iskra.primelink.com.hr/

echo "Rollback completed successfully."
