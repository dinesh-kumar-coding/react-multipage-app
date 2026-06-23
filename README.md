# 🛍️ Multi-Page Product Catalog (React Router)

A multi-page React application demonstrating client-side routing. Browse a list of products and click any one to view its detail page on its own URL. Built to practice the list-to-detail navigation pattern that powers most real websites.

🔗 **Live demo:** https://react-multipage-app-din-dev.vercel.app/products

---

## Features

- **Multiple pages** with real URLs (Home, Products, Product Detail, 404)
- **Persistent navbar** for navigation between pages — no full page reloads
- **List-to-detail flow:** the products list links to individual product pages
- **Dynamic routes** (`/products/:id`) — one route handles every product
- **404 page** for unmatched URLs
- Sleek, modern dark UI

## Built with

- **React** (functional components + hooks)
- **React Router** (`react-router-dom`) for client-side routing
- **Vite** (build tooling)
- Deployed on **Vercel** (with `vercel.json` rewrite config for SPA routing)

## What I learned / React concepts used

- **Client-side routing** with `BrowserRouter`, `Routes`, and `Route`
- **Navigation** with `<Link>` (instant, no page reload — preserving the single-page app benefit)
- **Dynamic routes** with URL parameters (`/products/:id`) and reading them with `useParams`
- Finding a specific item from the URL parameter (and handling the string-vs-number conversion)
- A **catch-all 404 route** and the "specific routes first, catch-all last" convention
- **Deploying a routed SPA** — adding a rewrite rule (`vercel.json`) so that directly visiting or refreshing a route URL doesn't 404

## Running locally

```bash
npm install
npm run dev
```

## SPA routing note

Single-page apps need the server to serve `index.html` for *any* route, so React Router can handle routing in the browser. This repo includes a `vercel.json` with a rewrite rule for that — without it, refreshing on a deep route like `/products/2` would return a 404.
