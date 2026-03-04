# CORE Attorneys – Website

Website für [CORE Attorneys](https://www.core-attorneys.com), gebaut mit Astro.js, Tailwind CSS und Keystatic CMS.

## Tech Stack

- **Framework**: [Astro.js](https://astro.build) (statischer Output)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **CMS**: [Keystatic](https://keystatic.com) (Git-basiert)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com)
- **Analytics**: Cloudflare Web Analytics (kein Cookie)

## Erste Schritte

### Voraussetzungen

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Entwicklungsserver starten

```bash
npm run dev
```

Die Website ist unter `http://localhost:4321` verfügbar.

Das Keystatic CMS ist unter `http://localhost:4321/keystatic` verfügbar (im Entwicklungsmodus ohne GitHub OAuth).

### Build erstellen

```bash
npm run build
```

### Build lokal testen

```bash
npm run preview
```

## Projektstruktur

```
src/
├── components/       # Wiederverwendbare Komponenten
│   ├── layout/       # Header, Footer, Navigation
│   ├── sections/     # Seitenabschnitte (Hero, etc.)
│   ├── cards/        # Karten-Komponenten
│   ├── ui/           # UI-Elemente
│   └── seo/          # SEO-Komponenten
├── content/          # Inhaltsdateien (MDX, YAML)
│   ├── blog/         # Blog-Artikel (de/ und en/)
│   ├── team/         # Team-Mitglieder (YAML)
│   ├── jobs/         # Stellenausschreibungen (de/ und en/)
│   └── expertise/    # Tätigkeitsbereiche (de/ und en/)
├── i18n/             # Übersetzungsdateien (de.ts, en.ts)
├── pages/            # Seiten (de/ und en/)
├── styles/           # Globale CSS-Datei
└── utils/            # Hilfsfunktionen (i18n.ts)
```

## CMS (Keystatic)

### Lokal (Entwicklung)

Im Entwicklungsmodus speichert Keystatic Änderungen direkt im lokalen Dateisystem. Kein GitHub OAuth erforderlich.

### Produktion (GitHub OAuth)

1. GitHub OAuth App erstellen:
   - GitHub → Settings → Developer Settings → OAuth Apps → New OAuth App
   - Homepage URL: `https://www.core-attorneys.com`
   - Callback URL: `https://www.core-attorneys.com/api/keystatic/github/oauth/callback`

2. Cloudflare Environment Variables setzen:
   - `KEYSTATIC_GITHUB_CLIENT_ID`
   - `KEYSTATIC_GITHUB_CLIENT_SECRET`
   - `KEYSTATIC_SECRET` (zufälliger String, z.B. `openssl rand -hex 32`)

3. `keystatic.config.ts`: `YOUR_GITHUB_ORG` und `core-attorneys` durch tatsächliche Werte ersetzen.

## Cloudflare Pages Deployment

1. Cloudflare Dashboard → Pages → New Project → GitHub-Repo verbinden
2. Build-Konfiguration:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: `20`
3. Cloudflare Web Analytics: Dashboard → Analytics → Web Analytics → Enable

## Fonts

Die Fonts (Spinnaker, Arimo) müssen als WOFF2-Dateien in `public/fonts/` abgelegt werden:

- `public/fonts/spinnaker-regular.woff2`
- `public/fonts/arimo-variable.woff2`

Download-Quellen:
- [Spinnaker on Google Fonts](https://fonts.google.com/specimen/Spinnaker) → "Download family"
- [Arimo on Google Fonts](https://fonts.google.com/specimen/Arimo) → "Download family"

Nach dem Download die TTF/OTF-Dateien mit einem Tool wie [Fontsquirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator) in WOFF2 konvertieren.

## Analytics Token

In `src/components/seo/SEOHead.astro` den Platzhalter `YOUR_CF_ANALYTICS_TOKEN` durch den tatsächlichen Cloudflare Web Analytics Token ersetzen.

## LinkedIn Feed (Walls.io)

In `keystatic.config.ts` (Singleton `site_settings`) die Walls.io Widget-ID eintragen. Die Widget-ID findet sich im Walls.io Embed-Code.
