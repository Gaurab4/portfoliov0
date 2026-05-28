#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "→ Running lint..."
npm run lint

echo "→ Running typecheck..."
npm run typecheck

echo "→ Running production build..."
npm run build

echo "✓ All checks passed. Safe to push."
