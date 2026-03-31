# Accentricity Website — Setup & Deployment Guide

## Prerequisites
- Node.js v18 or higher (download from nodejs.org)
- npm (comes with Node.js)
- Git (optional, for deployment)

## Step 1 — Install dependencies
Open terminal in the project folder and run:
```
npm install
```

## Step 2 — Add logo files
Place your logo files in /src/assets/:
- logo-white.png (white version — for dark backgrounds)
- logo-dark.png (dark version — for light backgrounds)

## Step 3 — Run locally
```
npm run dev
```
Open http://localhost:5173 in your browser.

## Step 4 — Build for production
```
npm run build
```
This creates a /dist folder with the optimised site.

## Step 5 — Deploy to Vercel (recommended)

**Option A — Vercel CLI:**
1. `npm install -g vercel`
2. `vercel login`
3. `vercel`
4. Follow the prompts — framework: Vite, output: dist

**Option B — Vercel Dashboard:**
1. Push your code to a GitHub repository
2. Go to vercel.com and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Framework preset: Vite (auto-detected)
6. Build command: `npm run build`
7. Output directory: `dist`
8. Click Deploy

## Step 6 — Connect your domain (accentricity.co)
1. In Vercel dashboard → your project → Settings → Domains
2. Add: `accentricity.co` and `www.accentricity.co`
3. In your domain registrar (GoDaddy / Namecheap / etc):
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.21.21`
4. Wait 5–30 minutes for DNS propagation
5. Vercel auto-provisions SSL certificate (HTTPS) — no setup needed

## Step 7 — Update WhatsApp number (if needed)
Edit `src/components/WhatsAppBlock.jsx`
Change the phone number in the wa.me link.

## Checklist before going live
- [ ] Logo files added to /src/assets/
- [ ] WhatsApp number verified: +916309882002
- [ ] All "Book a Free Call" buttons link to /contact
- [ ] Test on mobile (Chrome DevTools device mode)
- [ ] Test all page routes work correctly
- [ ] Verify form shows success message on submit
- [ ] Check all animations run smoothly
