# Iskra Svjetlosti Website

Official website frontend for Udruga Iskra Svjetlosti.

## Technology

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Bun

## Development

Install dependencies:

    bun install

Start the development server:

    bun run dev

Create a production build:

    bun run build

Run tests:

    bun run test

Run linting:

    bun run lint

## Deployment

The production website is hosted on PrimeLink's Contabo infrastructure and served as a static React SPA through Caddy.

Production staging domain:

    https://iskra.primelink.com.hr

The generated production files are located in:

    dist/

The deployed Caddy site directory is:

    /opt/primelink/infrastructure/caddy/sites/iskra.primelink.com.hr

## Integrations

Workshop and volunteer forms currently use a frontend integration layer prepared for a future backend or CRM endpoint.

The donation page redirects to the existing Iskra Svjetlosti donation system.

## Ownership

Developed and maintained by PrimeLink d.o.o.
