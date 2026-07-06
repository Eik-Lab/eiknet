# Eik — oppsettsfiler

Disse filene legges inn i Next.js-prosjektet ditt (det du scaffoldet med
`create-next-app` med flaggene: --ts --tailwind --app --eslint --src-dir).

## 1. Installer ekstra pakker

```bash
npm install clsx tailwind-merge
```

## 2. Legg filene på riktig plass

| Fil i denne pakka            | Plassering i prosjektet            |
|------------------------------|------------------------------------|
| globals.css                  | src/app/globals.css   (overskriv)  |
| layout.tsx                   | src/app/layout.tsx    (overskriv)  |
| page.tsx                     | src/app/page.tsx      (overskriv)  |
| components/layout/header.tsx | src/components/layout/header.tsx   |
| components/layout/footer.tsx | src/components/layout/footer.tsx   |
| lib/utils.ts                 | src/lib/utils.ts                   |

(Opprett mappene src/components/layout og src/lib om de ikke finnes.)

## 3. Kjør

```bash
npm run dev
```

Åpne http://localhost:3000

## Hva som er satt opp

- Alle Eik-farger som Tailwind-tokens: bg-eik-50, text-hav-70, border-storm-10,
  bg-krem, text-black, osv. (10-trinns skalaer for eik/storm/hav/solgul/
  klementin/plomme + semantikk: suksess/advarsel/feil/info).
- Alle 7 skygger: shadow-xs … shadow-3xl.
- Skrifter via next/font: Archivo (font-sans) + Source Serif 4 (font-serif).
- Tekststiler som klasser: title-*, text-*, tag-* (med bold/italic-varianter).
  Bruk f.eks. <h1 className="title-m">.

## Merk

- Dynamiske klassenavn som `bg-${farge}-50` fungerer IKKE i Tailwind v4 —
  bruk en eksplisitt mapping (se eksempel i page.tsx).
