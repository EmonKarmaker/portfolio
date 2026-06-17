# Emon Karmoker — Portfolio

Single-page developer portfolio. Next.js 15 (App Router) · TypeScript · Tailwind CSS · lucide-react.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset auto-detects **Next.js** — leave defaults and Deploy.

No environment variables needed.

## Editing content
All text, projects, experience, and publications live in **`data/content.ts`**.
Add a project by appending to the `projects` array; set `featured: true` to put it in the top row.

## Theme
Colors and fonts are defined in `tailwind.config.ts` and `app/globals.css`
(matches the "radical" dark palette: magenta #FE428E, cyan #5BCDEC).
