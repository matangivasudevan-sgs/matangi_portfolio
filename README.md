# Matangi V — Personal Portfolio

A modern, minimal, and responsive single-page portfolio built with **React + Vite + Tailwind CSS + Lucide React**.

## Run locally

```bash
npm install
npm run dev      # dev server at http://localhost:5173
```

## Build for production

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Add your resume (required for the Download Resume buttons)

Place your resume PDF at:

```
public/Matangi_V_Resume.pdf
```

The file name must match exactly. All "Download Resume" buttons link to
`/Matangi_V_Resume.pdf` (see `src/data/content.js` → `RESUME_URL`).

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On [vercel.com](https://vercel.com), click **Add New → Project** and import the repo.
3. Vercel auto-detects Vite — keep the defaults:
   - Framework: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. Every future `git push` to `main` redeploys automatically.

## Deploy to Netlify

1. Drag-and-drop the project folder on [app.netlify.com](https://app.netlify.com/drop), **or** connect the GitHub repo.
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy.

## Project structure

```
public/                 → static assets (resume PDF goes here)
src/
  data/content.js       → ALL site content (edit this to update copy)
  components/           → reusable React components
  App.jsx               → page composition
  index.css             → design tokens + shared styles
```

No router is used — the site is a single page with smooth-scroll anchor navigation.
