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

## Deploy later

- **Vercel / Netlify:** connect the repo; build command `npm run build`, output `dist`.
- **GitHub Pages:** set `base: '/PortfolioWebsite/'` in `vite.config.ts` if using a project URL, then deploy `dist`.

## Routes

- `/` — Home (about, skills, experience, projects, education)
- `/contact` — Contact details and email dialog
- `/contact?email=1` — Opens the email dialog on load
