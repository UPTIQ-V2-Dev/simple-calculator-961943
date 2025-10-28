#!/bin/bash

echo "Converting project from pnpm to npm..."

# Remove pnpm files
if [ -f "pnpm-lock.yaml" ]; then
    rm pnpm-lock.yaml
    echo "Removed pnpm-lock.yaml"
fi

# Remove node_modules if it exists
if [ -d "node_modules" ]; then
    rm -rf node_modules
    echo "Removed node_modules"
fi

# Install with npm
echo "Installing dependencies with npm..."
npm install

echo "Conversion complete! You can now use npm commands:"
echo "  npm run build"
echo "  npm run dev"
echo "  npm run preview"