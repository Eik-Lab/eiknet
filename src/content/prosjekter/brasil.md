---
title: Brasil-prosjekter
tag: Landbruk
status: Aktiv
slug: brasil
ingress: Fem prosjekter i feltdata, maskinstyring og bildeanalyse – et samlet grunnlag for mer bærekraftig og presis landbruk i Brasil.
---

## Om prosjektet

Et samarbeid om landbruksteknologi i Brasil, der fem prosjekter dekker hele arbeidsflyten fra styring av maskiner i felt til analyse av biomasse og jord. Til sammen gir prosjektene et sammenhengende grunnlag for å knytte målinger i felt sammen til beslutningsgrunnlag.

Datagrunnlaget ble kartlagt 28. september 2026, og for alle fem prosjektene er datagrunnlag tilgjengelig.

## Prosjekter

### Sampler control

Styringslogikk for prøvetaking i felt, pakket som et eget kontrollarkiv. Materialet peker mot en liten, avgrenset programvarekomponent som kan inngå i en større maskin- eller sensorflyt.

**Datagrunnlag:** `ZAIT_UFMT_Sampler_Control.zip` – komprimert arkiv på 5 kB, sist endret 23. juni.

### Path planning for komplekse felt

Ruteplanlegging kobler maskinbevegelse til faktiske feltgrenser og forsøksparseller. Et GIS-basert grunnlag for å planlegge kjøreruter gjennom uregelmessige eller oppdelte felt.

**Datagrunnlag:** `ZAIT_UFMT_Path_planning.zip` (3,2 MB), GOBBI-data for maisfeltene T01-C3 og T01-C4, samt shapefile-komponenter (SHP, SHX, DBF, PRJ og CPG).

### Seed spacing

Et bildedatasett for å analysere plassering, avstand og stabilitet i såprosessen. Mappestrukturen skiller mellom veksttype og testoppsett.

**Datagrunnlag:** Bildeserier merket 3 km, 5 km og 6 km, T-testsett for soyabønner og et eget hastighetstestsett for mais.

### Plant count from drone images

Dronebilder danner grunnlaget for automatisk telling av planter på flere felt og delområder. Oppdelingen legger til rette for trening, validering og sammenligning mellom feltområder.

**Datagrunnlag:** DJI-bilder på omtrent 4,6–5,1 MB, organisert i GOBBI og delområdene 1–4. Bildene er samlet i flere feltøkter i februar.

### Corn stover and soil data

Feltgrenser, jordprøver og regneark samles for analyse av maisrester og jordforhold. Et kombinert analysegrunnlag med laboratorie- eller jordprøver, parsellgeometri og tabulære feltdata, som støtter kobling mellom sted og måling.

**Datagrunnlag:** Excel-fil for INPASA AGROINDUSTRIAL SA, `soil_sample_results.zip` (9 MB) og KML-filer for parsellene T01-C3 og T01-C4.

## Arbeidsflyten

Prosjektene dekker en sammenhengende kjøre fra felt til beslutningsgrunnlag:

1. **Styre** – Sampler control
2. **Planlegge** – Path planning
3. **Måle** – Seed spacing
4. **Telle** – Plant count
5. **Analysere** – Corn stover

## Felles neste steg

Standardisere filnavn og metadata, dokumentere målvariabler og koble hvert datasett til én tydelig evalueringsmetode.

## Team

Studenter med interesse for agronomi, maskinstyring, GIS og bildeanalyse.
