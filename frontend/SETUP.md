# Calculator App Setup

## Quick Start

This project has been configured to use **npm** to avoid pnpm dependency issues.

### Install and Run

```bash
npm install
npm run build
npm run preview
```

### Development

```bash
npm install
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run eslint` - Run ESLint
- `npm run prettier` - Format code

## Project Structure

- Built with React 19, TypeScript, Vite, and Tailwind CSS
- Uses shadcn/ui components
- Fully functional calculator with all arithmetic operations
- Responsive design with dark/light theme support

## Troubleshooting

If you encounter any pnpm-related errors:

1. Delete `pnpm-lock.yaml` if it exists
2. Delete `node_modules` if it exists  
3. Run `npm install`
4. Run `npm run build`

The project is now configured to work exclusively with npm.