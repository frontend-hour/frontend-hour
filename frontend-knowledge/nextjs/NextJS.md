
# Next.js — Performance Overview

Next.js improves initial load performance by reducing client work and delivering pre-rendered HTML, optimized assets, and smarter data fetching.

## Key Features

- **Server-Side Rendering (SSR) & Static Site Generation (SSG):** Pre-renders pages on the server or at build time so the browser receives ready-to-display HTML, improving time-to-first-meaningful-paint.

- **Automatic Code Splitting:** Splits JavaScript into page-specific bundles so users only download the code they need.

- **Image Optimization:** The `next/image` component resizes, lazy-loads, and serves modern formats (WebP/AVIF) when supported to reduce page weight.

- **Optimized Data Fetching:** `getServerSideProps` and `getStaticProps` fetch data at request or build time so pages render with required data already available.

- **Fast Refresh:** Instant feedback during development without full reloads, speeding iteration and leading to better final quality.

- **File System Routing:** Predictable routing and asset loading derived from the project file structure.

## Benefits

- Faster first meaningful paint and improved perceived performance.
- Lower initial JavaScript payloads and reduced client CPU work.
- Improved SEO and shareable static pages when using SSG.
- Better developer experience and faster iteration with Fast Refresh.
