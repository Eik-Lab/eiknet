# Eik Lab — Senter for studentinnovasjon ved NMBU

Nettsiden for Eik Lab, senter for studentinnovasjon ved Norges miljø- og biovitenskapelige universitet (NMBU) på Ås.

## Tech stack

- [Next.js](https://nextjs.org) — App Router
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [Mux](https://www.mux.com) — videoavspilling
- Markdown + gray-matter — prosjekt- og arrangementsinnhold

## Kom i gang

```bash
npm install
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000).

## Bygg

```bash
npm run build
```

## Før produksjonssetting

1. Sett `NEXT_PUBLIC_SITE_URL=https://eiklab.no` og
   `NEXT_PUBLIC_MUX_PLAYBACK_ID` i Vercel for produksjonsmiljøet.
2. Legg `eiklab.no` og `www.eiklab.no` til under **Settings → Domains** i
   Vercel. Bruk DNS-postene Vercel oppgir, og la eventuelle Cloudflare-poster
   stå som **DNS only**.
3. Kontroller og godkjenn teksten på `/personvern` med ansvarlig hos Eik/NMBU.
4. Kjør `npm run check` og bekreft at preview-deployen ikke viser CSP-brudd i
   nettleserkonsollen. Preview bruker rapportmodus; produksjon håndhever CSP.
