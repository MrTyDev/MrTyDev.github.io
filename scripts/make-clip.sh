#!/usr/bin/env bash
# Turn a GIF (or any video) into a small looping clip for the site.
#   scripts/make-clip.sh path/to/input.gif skarven-tracking
# writes public/media/skarven-tracking.{mp4,webm,jpg}
# Then set in the project's front matter:  clip: { src: /media/skarven-tracking, alt: "..." }
set -euo pipefail
in="$1"; name="$2"; out="public/media"
mkdir -p "$out"
# Even dimensions are required by H.264; cap the width at 960 px.
vf="scale='min(960,iw)':-2:flags=lanczos,format=yuv420p"
ffmpeg -y -loglevel error -i "$in" -vf "$vf" -c:v libx264 -crf 26 -preset slow -movflags +faststart -an "$out/$name.mp4"
ffmpeg -y -loglevel error -i "$in" -vf "$vf" -c:v libvpx-vp9 -crf 38 -b:v 0 -an "$out/$name.webm"
ffmpeg -y -loglevel error -i "$in" -vf "scale='min(960,iw)':-2" -frames:v 1 -q:v 3 "$out/$name.jpg"
ls -la "$out/$name".*
