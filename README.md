# MATES Cafe

The website for **MATES**, a community-focused cafe in Tanjong Malim, Perak. Built with Astro 7, Tailwind CSS v4 and Preline UI.

The site is designed around three things: great coffee, a student volunteer programme that teaches barista skills, and a bi-monthly art space where local artists and makers sell their work.

## Pages

| Route        | What it is                                                       |
| ------------ | ---------------------------------------------------------------- |
| `/`          | Splash hero, signature matcha, volunteer programme and art space |
| `/menu`      | Matcha, coffee and food menus with prices                        |
| `/community` | The volunteer programme and the bi-monthly art space             |
| `/about`     | The MATES story, mission, programmes and values                  |
| `/contact`   | Address, opening hours, contact form and directions              |

## Getting started

```bash
pnpm install
pnpm dev
```

The dev server prints the local URL. Other useful commands:

```bash
pnpm build        # astro check + server (Vercel) build
pnpm build:pages  # static GitHub Pages build
pnpm test         # vitest
pnpm format:fix   # prettier
```

## Where things live

- `src/site.ts` – cafe name, description, address, phone, email and Instagram. Update the phone and email here with the cafe's real details before launch.
- `src/navigation.ts` – mega menus, top-level links and the images used in the navbar cards.
- `src/pages/` – the five public pages plus API routes.
- `src/components/sections/` – navbar, hero, homepage sections, footer.
- `src/components/ui/` – buttons, form fields and icons.
- `src/assets/images/` – all photography, optimised by `astro:assets`.
- `src/assets/styles/global.css` – Tailwind theme, including the MATES colours.
- `src/forms/declarations.ts` – contact and newsletter form definitions.

## Brand

The palette is sampled from the cafe's own material:

- **Matcha** – `#7e9f0c`, a vivid yellow-green taken from `matcha.png`.
- **MATES blue** – `#406aff`, the logo blue.

Both are exposed as Tailwind colour scales (`matcha-50…950`, `mates-blue-50…950`) in `global.css`. The older `teal-*` utilities are aliased to matcha so reusable components stay on brand.

## Forms

The contact form posts JSON to `/api/contact`. Without a delivery target configured it runs in demo mode: submissions are validated and logged but not sent anywhere. To deliver real email, set `FORMSPREE_CONTACT_ENDPOINT` or `FORM_WEBHOOK_CONTACT` (see `.env.template`).

## Deployment

The public site is deployed to GitHub Pages at
<https://furanon.github.io/mates-cafe/> by the
`.github/workflows/deploy-pages.yml` workflow. Every push to `main` builds a
static copy with `pnpm build:pages` and publishes it.

GitHub Pages cannot run server endpoints, so the static build hides the contact
form and shows email and Instagram links instead. The API routes remain in the
repository for the optional Vercel deployment.

To deploy the server version instead, push the repository to Vercel (or run
`pnpm build`) and set any environment variables you need from `.env.template`.
Keystatic admin routes can be disabled in production with `SKIP_KEYSTATIC=1`.
