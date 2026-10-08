#!/usr/bin/env bash
# Prepares media from the Mac's archive for the site, within the size limits in AGENTS.md.
# Requires ffmpeg (brew install ffmpeg).
#
#   scripts/prepare-media.sh image <source> <name> [folder]
#       Resize to at most 1600px wide JPEG -> assets/img/<folder>/<name>.jpg
#   scripts/prepare-media.sh clip  <source> <name> <start-seconds> [length=8] [folder]
#       Silent, looping web clip (H.264, crf 28, max 1280px) -> assets/video/<folder>/<name>.mp4
#       plus a poster frame -> assets/img/<folder>/<name>-poster.jpg
#   scripts/prepare-media.sh audio <source> <name> <start-seconds> [length=30] [folder]
#       Short AAC excerpt -> assets/audio/<folder>/<name>.m4a
#
# Paths with spaces or Hebrew must be quoted. Example:
#   scripts/prepare-media.sh clip "/Users/adibrill/Desktop/Adi/Ai Work/Heart - Osher cohen/osher.mp4" heart-osher 12 8 work
set -euo pipefail
cd "$(dirname "$0")/.."

kind="${1:-}"; src="${2:-}"; name="${3:-}"
[[ -z "$kind" || -z "$src" || -z "$name" ]] && { sed -n '2,15p' "$0"; exit 1; }
[[ -f "$src" ]] || { echo "Source not found: $src" >&2; exit 1; }

check_size() {
  local f="$1" bytes
  bytes=$(wc -c < "$f" | tr -d ' ')
  if (( bytes > 10*1024*1024 )); then
    echo "Too big for the repo ($((bytes/1024/1024))MB, limit 10MB): $f" >&2
    rm -f "$f"; exit 1
  fi
  echo "ok  $f  $((bytes/1024))KB"
}

case "$kind" in
  image)
    folder="${4:-work}"; out="assets/img/$folder/$name.jpg"; mkdir -p "$(dirname "$out")"
    ffmpeg -v error -y -i "$src" -vf "scale='min(1600,iw)':-2" -q:v 3 "$out"
    check_size "$out" ;;
  clip)
    start="${4:?start seconds}"; len="${5:-8}"; folder="${6:-work}"
    out="assets/video/$folder/$name.mp4"; poster="assets/img/$folder/$name-poster.jpg"
    mkdir -p "$(dirname "$out")" "$(dirname "$poster")"
    ffmpeg -v error -y -ss "$start" -t "$len" -i "$src" -an \
      -vf "scale='min(1280,iw)':-2,fps=30" -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -movflags +faststart "$out"
    ffmpeg -v error -y -ss 0.5 -i "$out" -frames:v 1 -q:v 3 "$poster"
    check_size "$out"; check_size "$poster" ;;
  audio)
    start="${4:?start seconds}"; len="${5:-30}"; folder="${6:-work}"
    out="assets/audio/$folder/$name.m4a"; mkdir -p "$(dirname "$out")"
    ffmpeg -v error -y -ss "$start" -t "$len" -i "$src" -vn -c:a aac -b:a 128k \
      -af "afade=t=in:d=1,afade=t=out:st=$((len-2)):d=2" -movflags +faststart "$out"
    check_size "$out" ;;
  *) echo "Unknown kind: $kind (image | clip | audio)" >&2; exit 1 ;;
esac
