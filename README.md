# K&P Sales Academy – website

Astro 7 + Tailwind v4 + GSAP (ScrollTrigger, SplitText) + Lenis. Hosting: Netlify (volledig statisch). Domein: kp-salesacademy.nl.

## Lokaal draaien

```bash
npm install
npm run dev
```

Draait op **http://localhost:4330** (4321 is bezet door een ander project).

> Let op: door het `&`-teken in de mapnaam ("K&P Group") werken de npm-shims (`npx astro`) niet op Windows. De scripts in `package.json` roepen Astro daarom direct aan via `node node_modules/astro/bin/astro.mjs`.

## Waar pas je wat aan?

| Wat | Bestand |
|---|---|
| Contactgegevens, socials, vestigingen | `src/data/site.ts` |
| Alle teksten (pijlers, stappen, groeipad, FAQ, testimonials) | `src/data/content.ts` |
| Kleuren & fonts | `src/styles/global.css` (`@theme`) |
| Animaties | `src/lib/animations.ts` |
| Hero-video | `src/components/sections/Hero.astro` (`video`) |

Testimonials (alleen quote + functie) staan in `testimonials` in `src/data/content.ts`.

## Sollicitaties (Netlify Forms)

Het formulier (`sollicitatie`) wordt automatisch door Netlify herkend bij de deploy. Inzendingen staan in Netlify onder **Forms**.

Mail ontvangen: Netlify > Site > **Forms > Form notifications > Add notification > Email notification**, kies formulier `sollicitatie` en vul je e-mailadres in.

Lokaal (`npm run dev`) wordt een inzending alleen in de browserconsole gelogd.

WhatsApp-nummer staat in `src/data/site.ts` (`whatsapp`).