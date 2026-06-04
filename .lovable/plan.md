## Auralystic — Medical Conference Graphic Design Portfolio

A refined, editorial single-page site that positions Auralystic as a premium graphic design studio for medical conferences across South India. Off-white paper background, deep navy typography, gold accents — clinical trust meets luxury editorial.

### Pages & sections (single route: `/`)

1. **Header / Nav** — wordmark "Auralystic", links to Work · Services · About · Contact, gold "Get a Quote" button.
2. **Hero** — Large serif headline ("Design for medicine, made memorable"), subtitle naming Flex · Arch · Stage Backdrop · Brochure, small kicker "Graphic design studio · Thanjavur, South India".
3. **Showcase (the centerpiece)**
   - Filter tabs: **All · Flex · Arch · Stage Backdrop · Brochure**
   - Masonry/grid of 10+ design thumbnails with category label + project title on hover
   - Click any tile → **fullscreen lightbox** with:
     - Large image
     - Title, category badge, client/conference name, year
     - Explanation paragraph (concept, palette, deliverables)
     - Prev / Next arrows + keyboard ← → and Esc
     - Counter "03 / 12"
4. **Services** — 4 cards: Flex Banners, Entrance Arches, Stage Backdrops, Brochures & Collaterals (each with 1-line description).
5. **About** — Short story: Thanjavur-based studio specializing in medical conferences (APICON, IMA chapters, CME events, etc.), emphasis on accuracy, hierarchy, and stage-scale visual impact.
6. **Contact** — Email `info@auralystic.com`, Phone/WhatsApp `+91 90807 73449`, Location `Thanjavur, Tamil Nadu`, simple inquiry form (name, email, event, message).
7. **Footer** — Wordmark, contact repeat, copyright.

### Showcase data (seeded with 12 placeholder projects)

Mix across categories so filters feel populated:
- 4 × Flex (e.g., "Cardiology Summit 2024 Flex", "Pediatric Conclave Welcome Flex"…)
- 2 × Arch (e.g., "APICON Entrance Arch", "Neuro Summit Arch")
- 3 × Stage Backdrop (e.g., "Oncology Congress Mainstage", "Diabetes Forum Backdrop"…)
- 3 × Brochure (e.g., "Surgical Symposium Brochure", "CME Program Booklet"…)

Each entry has: `title`, `category`, `client`, `year`, `image`, `description` (2-3 sentences explaining concept + deliverable). User can swap real images/copy after handoff.

### Design system (Clinical Elegance)

- Background `#f5f3ee` (paper), Foreground `#0c2340` (deep navy), Muted `#e8e4dd`, Accent `#c9a84c` (gold).
- Typography pair: **Cormorant Garamond** (display serif, hero + section titles) + **Inter** (body + UI). Tight tracking on display.
- Generous whitespace, thin hairline dividers, subtle gold underlines on links, soft shadows on lightbox.
- Restrained motion: gentle fade/scale on tile hover, smooth lightbox transitions (framer-motion).

### Technical notes

- TanStack Start, single route `src/routes/index.tsx`; sections as components under `src/components/portfolio/`.
- Tokens defined in `src/styles.css` (oklch) — overwrite the default blue/gray palette with the Clinical Elegance palette and register Cormorant + Inter via Google Fonts in `__root.tsx` head.
- Lightbox built with shadcn `Dialog` + `framer-motion` for transitions, keyboard nav via `useEffect`.
- Filter state local (`useState`); filtered list memoized.
- Projects seeded in `src/data/projects.ts` so the user can edit one file to add/replace work.
- Placeholder images: generated medical-conference themed visuals (navy/gold/cream tones) saved under `src/assets/` until the user supplies real artwork.
- SEO: route `head()` with title "Auralystic — Medical Conference Graphic Design, Thanjavur" + description + og tags.

### Out of scope (can add later)

- CMS / admin to edit projects
- Multi-page case studies
- Contact form backend (form will be UI-only unless Lovable Cloud is enabled later)
- Real client images (placeholders shipped; user replaces)
