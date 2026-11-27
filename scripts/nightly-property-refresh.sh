#!/usr/bin/env bash
# Nightly: regenerate Malang snapshot after lelang ingest, commit, push, then
# deploy out/ via wrangler using the proven global-key auth. GitHub Actions is
# currently unavailable (account billing lock), so local deploy is the active
# path; the committed workflow remains for when Actions is re-enabled.
set -euo pipefail
REPO=/home/openclaw/projects/1ai-berkahkarya-website
LOG=/tmp/bk-property-refresh.log
STAMP=$(date -u +%Y-%m-%dT%H:%M:%SZ)

cd "$REPO"

exec 9>/tmp/bk-property-refresh.lock
flock -n 9 || { echo "[$STAMP] another refresh running; skip" >> "$LOG"; exit 0; }

echo "[$STAMP] refresh start" >> "$LOG"

hash_content() {
  python3 -c '
import json,sys
d=json.load(sys.stdin); d.pop("generatedAt",None)
print(json.dumps(d,sort_keys=True))
'
}
OLD_HASH=$(git show HEAD:public/data/malang-assets.json 2>/dev/null | hash_content || echo "")
OLD_HASH=${OLD_HASH//[[:space:]]/}

python3 scripts/generate-malang-assets.py >> "$LOG" 2>&1 || {
  echo "[$STAMP] generator failed; aborting" >> "$LOG"; exit 1; }
NEW_HASH=$(hash_content < public/data/malang-assets.json)
NEW_HASH=${NEW_HASH//[[:space:]]/}

if [ "$OLD_HASH" = "$NEW_HASH" ]; then
  echo "[$STAMP] snapshot content unchanged; skip" >> "$LOG"
  exit 0
fi

git add public/data/malang-assets.json
git commit -m "chore(property): nightly Malang snapshot $STAMP" >> "$LOG" 2>&1 || {
  echo "[$STAMP] commit failed; aborting" >> "$LOG"; exit 1; }

git push origin HEAD:main >> "$LOG" 2>&1 || echo "[$STAMP] git push failed (deploy continues)" >> "$LOG"

npm run build >> "$LOG" 2>&1 || {
  echo "[$STAMP] build failed; not deploying" >> "$LOG"; exit 1; }

EMAIL=$(grep -oP 'email\s*=\s*"\K[^"]+' ~/.wrangler/config/default.toml)
APIKEY=$(grep -oP 'api_key\s*=\s*"\K[^"]+' ~/.wrangler/config/default.toml)
unset CLOUDFLARE_API_TOKEN
export CLOUDFLARE_EMAIL="$EMAIL"
export CLOUDFLARE_API_KEY="$APIKEY"
npx wrangler pages deploy out --project-name=berkahkarya-site --branch=main --commit-dirty=true >> "$LOG" 2>&1 || {
  echo "[$STAMP] deploy failed" >> "$LOG"; exit 1; }

echo "[$STAMP] refresh done (pushed + deployed)" >> "$LOG"
