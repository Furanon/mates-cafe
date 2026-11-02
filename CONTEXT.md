# MATES Cafe

A community cafe site for MATES in Tanjong Malim, Perak. This glossary names the concepts the code is organised around.

## Pages

**Home**: The splash page. A full-bleed photograph of the bar, the MATES crew below it, then the signature matcha feature, the volunteer programme, the art space and a closing invitation.

**Menu**: Three menu sections – matcha, coffee and food – each pairing a photo with a price list.

**Community**: The two programmes that define MATES: the student volunteer programme (`#volunteer`) and the bi-monthly art space (`#art-space`).

**About**: The long-form story, mission, programmes and values.

**Visit Us**: The contact page. Address, hours, Instagram and a form, followed by directions.

## Content

**Site Details**: The single object in `src/site.ts` holding the cafe's name, description, address, phone, email and Instagram. The footer, contact page and schema.org metadata read from it.

**Navigation Tree**: The typed object in `src/navigation.ts` holding every mega menu, top-level link and breadcrumb root. Menus can render as `list` (icon + title + description) or `cards` (image per link).

**Menu Card**: One link in a `cards` mega menu. It carries a title, description, href and an `ImageMetadata` imported from `src/assets/images`.

## Design

**Matcha**: The brand green sampled from `matcha.png` and exposed as `matcha-50…950` in `src/assets/styles/global.css`.

**MATES Blue**: The logo blue sampled from `logo_mates_cafe.png` and exposed as `mates-blue-50…950`. Blue is deliberately used sparingly: calls to action, small accents and the Instagram mark, while matcha carries the cafe feeling.

**Splash**: `splash.jpeg`, the portrait photograph of the bar. It is the full-bleed hero on the home page.

**The Crew**: `groupshot.png`, the photograph of the team behind the counter. It is featured directly below the hero, in the volunteer section and in the community page hero.

**Art Space**: The bi-monthly programme described on `/community#art-space`. The language is always "twice a month" or "bi-monthly", never a fixed date, because dates are announced on Instagram.

## Forms

**Form Declaration**: The single description of a form – fields, which are required, where it posts and where submissions go – from which both the markup and server-side validation are produced. Contact and newsletter forms live in `src/forms/declarations.ts`.

**Demo Mode**: The state of a form with no delivery target configured: submissions are validated and logged but go nowhere, so the site works before any credentials exist.
