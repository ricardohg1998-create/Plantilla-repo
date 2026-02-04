#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TEMPLATE_DIR="$ROOT_DIR/docs/_templates"
DOCS_DIR="$ROOT_DIR/docs"

for template in "$TEMPLATE_DIR"/*.template.md; do
  base_name="$(basename "$template" .template.md)"
  target="$DOCS_DIR/$base_name.md"

  if [[ ! -f "$target" ]] || ! cmp -s "$template" "$target"; then
    cp "$template" "$target"
  fi
done
