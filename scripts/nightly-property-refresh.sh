#!/usr/bin/env bash
# Nightly: regenerate Malang snapshot after lelang ingest, commit on real content
# change, push to main. The GitHub workflow (push -> CF Pages deploy) is the
# only deploy path; this script must not double-deploy.
set -euo pipefail
REPO=/home/openclaw/projects/1ai-berkahkarya-website
LOG=/tmp/bk-property-refresh.log
STAMP=$(date -u +%Y-%m-%dT%H:%M:%SZ)

cd "$REPO"

# Serialize with any other refresh run. Caller wraps ingest lock too.
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

# Regenerate from current DB (no-op + keeps snapshot if DB missing).
python3 scripts/generate-malang-assets.py >> "$LOG" 2>&1 || {
  echo "[$STAMP] generator failed; aborting" >> "$LOG"; exit 1; }
NEW_HASH=$(hash_content < public/data/malang-assets.json)
NEW_HASH=${NEW_HASH//[[:space:]]/}

if [ "$OLD_HASH" = "$NEW_HASH" ]; then
  echo "[$STAMP] snapshot content unchanged; skip commit" >> "$LOG"
  exit 0
fi

# Commit real change (fail hard; deploy is CI's job).
git add public/data/malang-assets.json
git commit -m "chore(property): nightly Malang snapshot $STAMP" >> "$LOG" 2>&1 || {
  echo "[$STAMP] commit failed; aborting" >> "$LOG"; exit 1; }

git push origin HEAD:main >> "$LOG" 2>&1 || {
  echo "[$STAMP] git push failed; aborting" >> "$LOG"; exit 1; }

echo "[$STAMP] pushed; workflow deploys" >> "$LOG"
