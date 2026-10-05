# K&P Sales Academy – Website plan

## 1. Doel & uitgangspunten

- **Hoofddoel:** recruitment. Elke sectie leidt naar één actie: *solliciteren* (laagdrempelig, < 30 sec).
- **Tone of voice:** toegankelijk, energiek en eerlijk, maar met de uitstraling van een *academy*: hier word je opgeleid, hier groei je.
- **Toekomstbestendig:** vandaag "een team binnen Sales Club", morgen een eigen kantoor, later meerdere vestigingen of een los bedrijf. Merk, structuur en code moeten dat zonder herbouw aankunnen.
- **Referentie:** sales-club.nl (Webflow + GSAP + SplitText + Swiper). Overnemen: korte, krachtige koppen, de opbouw van de one-pager, scroll-animaties en het simpele formulier. Ons onderscheid: premium/academy-gevoel in navy en goud in plaats van alleen hype.

## 2. Merk & thema

### Concept: "Academy of Winners"
Klassiek en betrouwbaar (serif, navy, goud, fijne lijnen zoals in het logo), gecombineerd met jonge energie (grote typografie, beweging, echte teamfoto's en video).

### Kleuren (afgeleid van het logo)

| Token | Hex | Gebruik |
|---|---|---|
| `navy-900` | `#06152A` | donkere secties, footer |
| `navy-800` | `#0B2341` | primaire merkkleur, koppen, knoppen |
| `navy-600` | `#1E3A5F` | hover, randen op donker |
| `gold-500` | `#C9A13B` | accent, CTA, lijnen, `&`-detail |
| `gold-300` | `#E2C77A` | gold op donkere achtergrond, highlights |
| `ivory-50` | `#FAF8F3` | lichte achtergrond (warmer dan wit) |
| `stone-200` | `#E7E2D8` | scheidingslijnen, kaarten |
| `ink-700` | `#3A4556` | bodytekst |

Verhouding ongeveer 60% ivoor/wit, 30% navy, 10% goud. Goud is alleen een accent (CTA's, lijnen, kleine details), anders wordt het snel "goedkoop".
Contrast: goud op wit haalt geen AA voor kleine tekst, dus goud alleen voor grote koppen, iconen, lijnen of op navy.

### Typografie
- **Display/koppen:** *Cormorant Garamond* of *Playfair Display* (sluit aan op de serif van het logo). Grote koppen in deels cursief goud ("Verdien goed *terwijl je bouwt aan jezelf*").
- **Labels/eyebrows:** uppercase met ruime letterspacing (zoals "SALES ACADEMY" in het logo), bijv. *Inter* 500, `tracking-[0.3em]`.
- **Body/UI:** *Inter* of *Manrope*, leesbaar en modern.
- Fonts self-hosted via `@fontsource` (AVG-proof, geen Google-requests).

### Visuele elementen
- Het **kader uit het logo** (open rechthoek met lijnen) terugbrengen als lijst rond koppen en foto's.
- De **gouden lijn met ruit** als sectiescheiding.
- Echte foto's/video van het team (geen stockfoto's), met een lichte navy duotone voor rust.
- Subtiele grain-textuur op donkere secties voor een premium gevoel.

### Logo-assets (actie nodig)
Het aangeleverde logo is een JPG op witte achtergrond. Nodig:
1. **SVG** (vector, laten overtrekken of opnieuw opbouwen)
2. Varianten: volledig, compact (alleen "K&P" in kader), **wit/goud voor donkere achtergrond**, favicon/app-icon.

## 3. Tech stack

| Onderdeel | Keuze | Waarom |
|---|---|---|
| Framework | **Astro 5** (TypeScript) | Vooral statische marketingsite, dus razendsnel (goed voor ads en SEO), weinig JS. Later makkelijk uitbreidbaar met pagina's per vestiging. |
| Styling | **Tailwind CSS v4** | Design tokens hierboven als theme, snelle bouw, consistent. |
| Animaties | **GSAP + ScrollTrigger + SplitText** (sinds 2025 gratis) | Zelfde techniek als Sales Club: tekst-reveals, gepinde secties, counters. |
| Smooth scroll | **Lenis** | Het "boterzachte" scrollgevoel, gekoppeld aan ScrollTrigger. |
| Slider | **Swiper** of Embla | Testimonials en social content. |
| Content | **Astro Content Collections** (Markdown/JSON), later **Keystatic** CMS | Testimonials, FAQ, vacatures en vestigingen als data. Met Keystatic kun je zelf teksten aanpassen zonder code. |
| Formulier | **Netlify Forms** (mail-notificatie naar jou) + honeypot tegen spam | Lead komt direct binnen, geen extra tool nodig. Later koppelbaar aan een ATS/CRM. |
| Hosting | **Netlify** | Gratis tier volstaat, automatische deploys via GitHub, preview-links. |
| Analytics | **Plausible** of GA4 + Meta/TikTok-pixel (achter cookie-consent) | Meten welke advertentie sollicitaties oplevert (UTM, "hoe ben je bij ons gekomen?"). |
| Code | GitHub-repo, Prettier, ESLint | |

*Alternatief:* Webflow (zoals Sales Club) is sneller voor niet-developers, maar heeft maandelijkse kosten, minder controle en is lastiger op te schalen naar meerdere vestigingen of een eigen platform. Met Astro + Keystatic houd je zelf het eigendom én kun je zelf content beheren.

## 4. Sitemap

**Fase 1 (launch)**
- `/` Home (one-pager, recruitment-funnel)
- `/solliciteren` aparte, gefocuste sollicitatiepagina (landingspagina voor ads)
- `/privacy`, `/cookies`
- `/bedankt` (conversiemeting voor ads)

**Fase 2 (groei)**
- `/over-ons` het verhaal van K&P, de founders, de missie
- `/vacatures/[slug]` per rol (Sales Representative, Teamleader)
- `/vestigingen/[stad]` per kantoor: adres, team, eigen testimonials en een formulier dat automatisch de juiste vestiging meekrijgt
- `/werkwijze` of `/academy` met het opleidingstraject in detail

De datastructuur voor vestigingen zit er vanaf dag één in (ook als er nu maar één is), zodat een nieuw kantoor = één nieuw contentbestand.

## 5. Homepage, sectie voor sectie

| # | Sectie | Inhoud | Animatie |
|---|---|---|---|
| 1 | **Hero** | Eyebrow `K&P SALES ACADEMY`, kop bijv. *"Leer verkopen. Verdien goed. Bouw aan jezelf."*, subtekst "Geen ervaring nodig, wel ambitie.", knoppen **Solliciteer in 30 sec** en *Bekijk hoe het werkt* | Achtergrondvideo team (muted loop), SplitText regel-voor-regel reveal, kader uit logo "tekent" zichzelf |
| 2 | **Trust bar** | "Onderdeel van Sales Club", aantal vestigingen/teamleden, merken waarvoor we verkopen | Counters tellen op |
| 3 | **Waarom de Academy** (3 pijlers) | *Verdien terwijl je leert*, *Groei door te doen*, *Winnen doe je samen* | Gepinde sectie, pijlers schuiven één voor één in beeld |
| 4 | **In 3 stappen naar je eerste sale** | 01 Kennismaking, 02 Training, 03 Je eerste sale | Horizontale scroll of tijdlijn met gouden lijn die meegroeit |
| 5 | **Groeipad** *(onderscheidend)* | Sales Rep → Leader → Teamleader → Office Manager / eigen vestiging. Laat zien dat je hier carrière maakt. | Ladder/trap die zich opbouwt bij scrollen |
| 6 | **Een dag bij de Academy** | Tijdlijn 10:00 meeting, training, op pad, coaching, afsluiten met team. Eerlijk en concreet, zodat de verwachting klopt. | Fade-in per tijdstip |
| 7 | **Stories from the Academy** | Testimonials met foto, naam, rol en vestiging (eventueel korte video's) | Swiper, quote met SplitText |
| 8 | **Content / socials** | Instagram- en TikTok-embeds of -thumbnails | Marquee |
| 9 | **FAQ** | Locatie, verdiensten, ervaring nodig?, training, werkdag, leeftijd/uren, contractvorm | Accordion |
| 10 | **CTA + formulier** | *"Join de Academy"*: naam, telefoon, e-mail, "hoe ken je ons?" + optioneel WhatsApp-knop | Gouden kader-animatie, succesmelding |
| 11 | **Footer** | Logo, contact, socials, "K&P Sales Academy, onderdeel van Sales Club", privacy | |

Daarnaast: een **sticky "Solliciteer"-knop** op mobiel (de meeste traffic komt via Instagram/TikTok op mobiel).

## 6. Copy-richtlijnen
- Spreek de lezer aan met *je/jij*, korte zinnen, actieve werkwoorden.
- Koppen in 2 regels met één woord of deel in cursief goud.
- Geen jargon. "Commissie" uitleggen als "hoe meer je verkoopt, hoe meer je verdient".
- **Eerlijkheid:** benoem duidelijk wat het werk is (bijv. deur-tot-deur/field sales) en hoe de beloning werkt. Verdienclaims alleen met realistische, controleerbare voorbeelden. Dat voorkomt afhakers na het eerste gesprek en misleidende-reclame-risico's.
- Afstemmen met Sales Club wat je over hun merk, merken/klanten en cijfers mag communiceren.

## 7. Performance, SEO, toegankelijkheid & AVG
- Lighthouse 95+ op mobiel; hero-video als geoptimaliseerde MP4/WebM met poster; afbeeldingen via `astro:assets` (AVIF/WebP).
- `prefers-reduced-motion`: animaties uitzetten of vereenvoudigen.
- SEO: titels/meta per pagina, Open Graph-afbeelding, `JobPosting` structured data (Google for Jobs!) en `Organization`/`LocalBusiness` per vestiging.
- AVG: privacyverklaring, cookie-consent vóór pixels, formulier met duidelijke doelbinding, bewaartermijn voor sollicitatiegegevens (bijv. 4 weken, of 1 jaar met toestemming).

## 8. Implementatieplan

### Fase 0: Voorbereiding (jij + dev)
- [ ] Domein kiezen (bijv. `kp-salesacademy.nl`)
- [ ] Logo als SVG + varianten
- [ ] Fotoshoot/video met het team (hero-video, portretten, sfeer)
- [ ] Teksten en testimonials verzamelen, FAQ-antwoorden
- [ ] Bepalen waar leads heen gaan (e-mail, Sheet, WhatsApp)
- [ ] Afstemming met Sales Club over merkgebruik

### Fase 1: Fundament (dag 1–2)
- [ ] Astro + Tailwind v4 + TypeScript project, GitHub-repo, Vercel-koppeling
- [ ] Dev-server op **poort 4330** (4321 is al bezet door een ander project): `server: { port: 4330 }` in `astro.config.mjs` + `.claude/launch.json`
- [ ] Design tokens (kleuren, fonts, spacing), basiscomponenten: `Button`, `Container`, `Section`, `Eyebrow`, `FramedHeading` (logo-kader), `GoldDivider`
- [ ] Layout: header (transparant → solid bij scroll), mobiel menu, footer
- [ ] Lenis + GSAP/ScrollTrigger setup met herbruikbare helpers (`reveal`, `splitReveal`, `counter`, `pin`)

### Fase 2: Homepage (dag 3–6)
- [ ] Secties 1–11 als losse componenten, content uit collections (`testimonials`, `faq`, `steps`, `locations`)
- [ ] Animaties per sectie, plus reduced-motion fallback
- [ ] Responsive afwerking (mobile-first), sticky CTA

### Fase 3: Sollicitatie-flow (dag 7–8)
- [ ] Formuliercomponent (herbruikbaar op home en `/solliciteren`), validatie (Zod), Turnstile
- [ ] API-route: Resend-mail + opslag (Sheet/Airtable), UTM-parameters en vestiging meesturen
- [ ] `/bedankt` met conversie-events; optioneel automatische bevestigingsmail aan de kandidaat

### Fase 4: Juridisch & tracking (dag 9)
- [ ] Privacy- en cookiepagina, consent-banner
- [ ] Analytics + Meta/TikTok-pixel achter consent
- [ ] SEO: meta, OG-images, sitemap, robots, JobPosting-schema

### Fase 5: QA & launch (dag 10)
- [ ] Testen op iOS/Android/desktop, Lighthouse, toegankelijkheid (toetsenbord, contrast)
- [ ] Formulier end-to-end testen
- [ ] Domein + DNS + SSL, Google Search Console
- [ ] Launch 🚀

### Fase 6: Na de launch
- [ ] Keystatic CMS, zodat je zelf teksten, testimonials en vacatures beheert
- [ ] Pagina's per vestiging en per vacature
- [ ] A/B-test van hero-kop en CTA, optimaliseren op basis van sollicitatiecijfers
- [ ] Eventueel later: kandidaat-portal of koppeling met een ATS

## 9. Projectstructuur (voorstel)

```
src/
  assets/            logo (svg), foto's, video
  components/
    ui/              Button, Eyebrow, FramedHeading, GoldDivider
    sections/        Hero, Pillars, Steps, CareerPath, DayInLife, Stories, Social, Faq, ApplyCta
    forms/           ApplyForm
  content/
    testimonials/    *.md
    faq/             *.md
    locations/       utrecht.json, ...
    vacancies/       *.md
  layouts/           BaseLayout.astro
  lib/               animations.ts, lenis.ts, analytics.ts
  pages/
    index.astro
    solliciteren.astro
    bedankt.astro
    privacy.astro
    api/apply.ts
  styles/            global.css (tailwind theme tokens)
```
