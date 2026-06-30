# OWNDAYS x MELLER Product Page

A Next.js product listing page for the OWNDAYS x MELLER collaboration. The app fetches product data from the Meller API and renders an interactive product grid with image carousels, color swatches, and responsive navigation.

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm (included with Node.js)

## Setup

1. Clone the repository and enter the project directory:

   ```bash
   git clone <repository-url>
   cd OWNDAYS-x-MELLER-Product-Page
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a local environment file from the example:

   ```bash
   cp .env.example .env.local
   ```

   On Windows (PowerShell):

   ```powershell
   Copy-Item .env.example .env.local
   ```

4. Update `.env.local` if you need to point at a different API or asset host. The defaults in `.env.example` work for local development.

## Environment variables

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_MELLER_API_BASE_URL` | Base URL for the Meller products API |
| `NEXT_PUBLIC_OWNDAYS_ASSET_BASE_URL` | Base URL for OWNDAYS product and media assets |

Both variables are required. The app will fail at startup if either is missing.

## Run locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production build

Build the app:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

The production server also serves the app at [http://localhost:3000](http://localhost:3000) by default.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint and apply auto-fixes |
| `npm run format` | Format the codebase with Prettier |
| `npm run format:check` | Check formatting without writing files |

## Deploy on Vercel

This project is configured for [Vercel](https://vercel.com/) deployment.

1. Import the repository into Vercel.
2. Add the environment variables from `.env.example` under **Project Settings → Environment Variables** for Production, Preview, and Development.
3. Deploy. Vercel will run `npm run build` automatically.

Security headers (`X-Content-Type-Options: nosniff`) are configured in both `next.config.ts` and `vercel.json`.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Embla Carousel](https://www.embla-carousel.com/) for product image carousels
