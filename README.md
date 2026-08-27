# Ifiok Ettang — Website

Next.js (App Router + TypeScript + Tailwind) build of the Figma design, with
the **Fieldnotes** section wired to **Sanity** so blog posts are managed as
content, not code.

## What's included

- `app/page.tsx` — homepage: Nav, Hero ("King of Vultures"), featured
  stories grid, "Now" (current projects), Fieldnotes, About, Contact, Footer.
- `app/fieldnotes/page.tsx` — index of all Field Notes.
- `app/fieldnotes/[slug]/page.tsx` — single Field Note (Portable Text body).
- `app/studio/[[...tool]]/page.tsx` — Sanity Studio embedded at `/studio`.
- `sanity/schemaTypes/fieldNote.ts` — the content model: title, slug,
  category, excerpt, cover image, published date, rich-text body.
- `components/` — every section as its own component, matching the Figma
  layout, colors and type scale.

## 1. Install dependencies

```bash
npm install
```

## 2. Create a Sanity project

If you don't have one already:

```bash
npm create sanity@latest -- --project-plan free
```

Or reuse an existing project — you just need its **Project ID** and
**dataset name** (usually `production`).

## 3. Set environment variables

Copy the example file and fill in your project details:

```bash
cp .env.local.example .env.local
```

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-06-01
```

## 4. Run it

```bash
npm run dev
```

- Site: http://localhost:3000
- Studio (write Field Notes here): http://localhost:3000/studio

Publish a "Field Note" document in the Studio and it will immediately show
up in the Fieldnotes section on the homepage and at `/fieldnotes`.

## 5. Add your real images

Figma's exported image URLs expire after 7 days, so this handoff uses
placeholder `<img>` paths under `public/images/` instead of pointing at
Figma's temporary CDN. See `public/images/README.md` for the exact file
list to drop in (hero still, story thumbnails, "Now" project shots, your
portrait for About).

## Notes on the build

- Fonts are loaded via `next/font/google` in `app/layout.tsx`: Poppins and
  Inter for UI/body text, Rock Salt for the wordmark, and the seven
  decorative display faces used per story card in Figma (Jaro, Joan, Jaini
  Purva, Karantina, Medula One, Italiana, Jacques Francois).
- Colors, spacing and copy are pulled directly from the Figma file's design
  tokens (`#0b0d10` background, `#eb5454` red accent, `#ffd738` yellow,
  `#e8a317` amber, `#b2b2b2` muted text).
- The Figma layout used large fixed pixel positions (it's a single
  1920px-wide canvas); this build re-implements each section with a
  responsive, mobile-first layout that preserves the same visual rhythm and
  hierarchy rather than pixel-matching a fixed-width canvas.
- `FieldnotesSection` fails gracefully with a placeholder card if Sanity
  env vars aren't set yet or a fetch fails, so the homepage never breaks
  before you've created your first Field Note.
