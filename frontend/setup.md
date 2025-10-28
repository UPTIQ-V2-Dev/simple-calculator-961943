# Setup Instructions

This project uses pnpm for package management. If you encounter the error "pnpm ENOENT", follow these steps:

## Option 1: Install pnpm globally
```bash
npm install -g pnpm
pnpm install
pnpm build
```

## Option 2: Use npx (temporary solution)
```bash
npx pnpm install
npx pnpm build
```

## Option 3: Use npm directly
```bash
rm pnpm-lock.yaml
npm install
npm run build
```

## The project should work with any of these approaches.