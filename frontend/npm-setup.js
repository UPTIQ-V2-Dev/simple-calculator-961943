#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Setting up npm as package manager...');

// Remove pnpm-lock.yaml if it exists
const pnpmLockPath = path.join(__dirname, 'pnpm-lock.yaml');
if (fs.existsSync(pnpmLockPath)) {
  fs.unlinkSync(pnpmLockPath);
  console.log('Removed pnpm-lock.yaml');
}

// Update package.json to remove pnpm-specific fields
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Remove pnpm-specific fields
delete packageJson.packageManager;
if (packageJson.engines) {
  delete packageJson.engines.pnpm;
}

// Update scripts to remove pnpm-specific scripts
if (packageJson.scripts) {
  delete packageJson.scripts.preinstall;
  delete packageJson.scripts.prepare;
}

// Remove pnpm from devDependencies
if (packageJson.devDependencies && packageJson.devDependencies.pnpm) {
  delete packageJson.devDependencies.pnpm;
}

// Write updated package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('Updated package.json for npm usage');

// Install dependencies with npm
console.log('Installing dependencies with npm...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('Dependencies installed successfully!');
} catch (error) {
  console.error('Error installing dependencies:', error.message);
}

console.log('Setup complete! You can now use npm commands.');