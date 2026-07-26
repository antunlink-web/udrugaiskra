#!/usr/bin/env bash

set -Eeuo pipefail

APP_DIR="/opt/primelink/apps/iskra-svjetlosti"
SITE_DIR="/opt/primelink/infrastructure/caddy/sites/iskra.primelink.com.hr"
BACKUP_DIR="/opt/primelink/infrastructure/backups/iskra-svjetlosti/deployments"
CADDY_CONTAINER="primelink-caddy"
TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
RELEASE_DIR="${BACKUP_DIR}/${TIMESTAMP}"

echo "==> Moving to application directory"
cd "$APP_DIR"

echo "==> Checking repository state"
if [[ -n "$(git status --porcelain)" ]]; then
  echo "Error: repository contains uncommitted changes."
  git status --short
  exit 1
fi

echo "==> Pulling latest code"
git pull --ff-only

echo "==> Installing dependencies"
bun install --frozen-lockfile

echo "==> Building production frontend"
rm -rf dist
bun run build

test -f dist/index.html || {
  echo "Error: dist/index.html was not created."
  exit 1
}

echo "==> Creating deployment backup"
sudo mkdir -p "$RELEASE_DIR"
sudo cp -a "$SITE_DIR/." "$RELEASE_DIR/"

echo "==> Deploying new build"
sudo find "$SITE_DIR" -mindepth 1 -maxdepth 1 -exec rm -rf {} +
sudo cp -a dist/. "$SITE_DIR/"

echo "==> Validating Caddy configuration"
sudo docker exec "$CADDY_CONTAINER" caddy validate \
  --config /etc/caddy/Caddyfile

echo "==> Reloading Caddy"
sudo docker exec "$CADDY_CONTAINER" caddy reload \
  --config /etc/caddy/Caddyfile

echo "==> Testing website"
curl --fail --silent --show-error \
  --retry 5 \
  --retry-delay 2 \
  --output /dev/null \
  https://iskra.primelink.com.hr/

curl --fail --silent --show-error \
  --retry 5 \
  --retry-delay 2 \
  --output /dev/null \
  https://iskra.primelink.com.hr/radionice

echo
echo "Deployment completed successfully."
echo "Backup: $RELEASE_DIR"
