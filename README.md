# Muhammad Umar Abid — Portfolio Website

Personal portfolio built with Vite, React, TypeScript, and Tailwind CSS v3.

**Requires Node.js 18+** (Node 20+ recommended for best tooling support).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |

## Editing content

All copy lives in `src/data/`:

- `profile.ts` — name, summary, contact details, LinkedIn URL
- `skills.ts`, `experience.ts`, `projects.ts`, `education.ts`, `certifications.ts`

Replace `public/Muhammad-Umar-Abid-CV.pdf` when you update your CV.

## Email contact form (optional)

By default, submitting the contact dialog opens the visitor’s email client with a pre-filled message (`mailto:`).

To send messages in the browser without opening an email client:

1. Create a free form at [Formspree](https://formspree.io) pointing to your inbox.
2. Copy the form ID from the endpoint URL (`https://formspree.io/f/YOUR_ID`).
3. Create `.env` from `.env.example` and set:

   ```
   VITE_FORMSPREE_FORM_ID=your_form_id
   ```

4. Restart `npm run dev`.

## Deploy

### Option A — GitHub Pages (free, repo already on GitHub)

1. Merge your branch into `main` and push.
2. On GitHub: **Settings → Pages → Build and deployment → Source:** **GitHub Actions**.
3. After the workflow runs, the site is at [https://uumarabid.github.io/PortfolioWebsite/](https://uumarabid.github.io/PortfolioWebsite/).

The workflow in `.github/workflows/deploy.yml` builds with `VITE_BASE_PATH=/PortfolioWebsite/` and deploys `dist/`.

### Option B — Vercel (simplest, custom domain friendly)

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **Import** `uumarabid/PortfolioWebsite`.
3. Build: `npm run build`, output: `dist` (defaults are fine). `vercel.json` handles SPA routes.
4. Deploy — no `base` path change needed.

### Option C — Netlify

Same as Vercel: connect repo, build `npm run build`, publish `dist`, add a redirect `/* /index.html 200` for client routes.

## Routes

- `/` — Home (about, skills, experience, projects, education)
- `/contact` — Contact details and email dialog
- `/contact?email=1` — Opens the email dialog on load
