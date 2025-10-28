#!/bin/bash

# Install pnpm if not available
if ! command -v pnpm &> /dev/null; then
    echo "pnpm not found, installing..."
    npm install -g pnpm
fi

# Install dependencies
echo "Installing dependencies..."
pnpm install

echo "Dependencies installed successfully!"