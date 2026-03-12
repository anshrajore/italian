## Italian Ecstasy – Restaurant Website

Modern single-page marketing site for **Italian Ecstasy**, a premium Italian quick-service restaurant on College Road in Nashik.  
Built with **React + Vite + TypeScript + Tailwind CSS**, optimized for performance, SEO, and high‑conversion ordering flows.

---

### Tech Stack

- **Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS + utility components
- **Animations**: Framer Motion
- **Routing**: React Router DOM (SPA with client‑side routes)
- **Forms / UI**: Radix UI primitives, custom components
- **State / Data**: React Query

---

### Features

- **Hero & Storytelling**
  - Hero image + headline focused on “Ecstasy in Every Bite”.
  - Brand story timeline and “Why Choose Us” sections tuned for conversions.

- **SEO‑Optimized Menu**
  - Structured menu data (`src/data/menuData.ts`) for pastas, mac & cheese, ravioli, lasagna, sides, desserts, beverages.
  - High‑quality photos mapped to all key dishes.
  - Filters for veg / non‑veg / bestseller / spicy and categories like *Classic Pastas*, *Mac & Cheese*, *Ravioli*, etc.

- **Location & Local SEO**
  - Contact section with address, phone numbers, email, and opening hours.
  - Embedded Google Maps iframe and **Get Directions** CTA.

- **Ordering**
  - Prominent **Order Now** buttons linking to Zomato deep link.

- **Responsive UI**
  - Fully responsive on mobile, tablet, and desktop.
  - Navigation with anchor links and dedicated `/menu` route.

---

### SEO & Metadata

SEO is centralized and configurable for production deployments.

- **SEO config** – `src/config/seo.ts`
  - `seoConfig` contains:
    - `siteUrl`, brand name and tagline.
    - Restaurant address (College Road, Nashik), geo coordinates.
    - Phone numbers, email, opening hours.
    - Social profiles and default OG image URL.
  - `getRestaurantJsonLd()` returns `Restaurant` + `LocalBusiness` JSON‑LD.

- **Reusable `<SEO />` component** – `src/components/SEO.tsx`
  - Props: `title`, `description`, `canonicalPath`, `ogImage`, `ogType`, `noindex`, `includeJsonLd`, `jsonLd`.
  - Injects:
    - `<title>` and meta description.
    - Canonical URL.
    - Open Graph tags (for Facebook / WhatsApp / LinkedIn).
    - Twitter Card tags.
    - JSON‑LD scripts for structured data (optional on a per‑page basis).

- **Pages using SEO**
  - `Index.tsx` (home): targets “best Italian restaurant in Nashik”, pasta/lasagna keywords.
  - `Menu.tsx`: long‑tail keywords for menu, categories, and ordering.
  - `NotFound.tsx`: marked `noindex` and **does not** include restaurant JSON‑LD.

- **Static head tags** – `index.html`
  - Baseline meta title/description + full JSON‑LD graph for Restaurant + LocalBusiness.
  - Open Graph and Twitter Card using the production domain.

- **Robots & Sitemap**
  - `public/robots.txt` – allows major bots and points to sitemap:
    - `Sitemap: https://www.italianecstasy.com/sitemap.xml`
  - `public/sitemap.xml` – static sitemap including:
    - `/` (homepage)
    - `/menu` (full menu)

> **Important:** Replace `https://www.italianecstasy.com` with your actual production domain if it differs, in `index.html`, `robots.txt`, and `sitemap.xml`.

---

### Environment Configuration

Create an `.env` file at the project root (or configure in your hosting provider) based on `.env.example`:

```bash
VITE_SITE_URL=https://www.italianecstasy.com
```

- `VITE_SITE_URL` is used by `seoConfig` for canonical URLs, OG URLs, and JSON‑LD.

---

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Lint
npm run lint

# Production build
npm run build

# Preview production build locally
npm run preview
```

The app runs at `http://localhost:8080` (as configured in `vite.config.ts`).

---

### Routing & Deployment Notes

- Client‑side routes:
  - `/` – homepage (landing + sections)
  - `/menu` – full menu page
  - `*` – `NotFound` fallback
- Because this is a SPA, **Vercel** is configured via `vercel.json`:
  - Rewrites all unmatched paths to `/index.html` to support direct access to `/menu` and refreshing on nested routes.

---

### Project Structure (high‑level)

- `src/pages`
  - `Index.tsx` – main landing page.
  - `Menu.tsx` – full menu with filters and grid of menu cards.
  - `NotFound.tsx` – 404 page.
- `src/components`
  - `Navigation`, `HeroSection`, `StorySection`, `MenuSection`, `DailySpecialSection`, `WhyChooseSection`, `MissionVisionSection`, `FranchiseSection`, `TestimonialsSection`, `ContactSection`, `Footer`, etc.
  - `SEO.tsx` – SEO component.
- `src/data`
  - `menuData.ts` – menu categories and items with pricing, veg/non‑veg flags, spice levels, and image mappings.
- `public`
  - `robots.txt`, `sitemap.xml`, `favicon.png`, and optional `og-image.jpg`.

---

### Production Checklist

- [ ] Set `VITE_SITE_URL` to the live domain.
- [ ] Add a 1200×630px OG image at `public/og-image.jpg` (or update the URL in `seoConfig` and meta tags).
- [ ] Verify `robots.txt` and `sitemap.xml` use the correct domain.
- [ ] Confirm Google Maps embed URL in `ContactSection` points to the final restaurant location.
- [ ] Test social sharing (WhatsApp, Instagram DM, Facebook, LinkedIn) to validate title, description, and image.

