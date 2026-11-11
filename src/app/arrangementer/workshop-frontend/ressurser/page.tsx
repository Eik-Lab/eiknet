import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ressurser } from "./ressurser";
import { Sjekkliste } from "./sjekkliste";

export const metadata: Metadata = {
  title: "Forberedelser & ressurser – Webdesign & utvikling",
  description:
    "Gjør deg klar til Eik Labs workshop i webdesign og utvikling 19. november 2026. Installasjonsguide, sjekkliste og ressurser for Figma, React og AI.",
  alternates: { canonical: "/arrangementer/workshop-frontend/ressurser" },
};

const steg = [
  {
    tittel: "Opprett Figma-konto",
    status: "Nødvendig",
    avsnitt: [
      "Figma er designverktøyet vi skal bruke for å lage brukergrensesnittet til nettsiden vår.",
      "Opprett en gratis konto før workshopen. Du kan bruke Figma direkte i nettleseren eller installere skrivebordsappen.",
    ],
    lenker: [
      { tekst: "Opprett Figma-konto", url: "https://www.figma.com/" },
      { tekst: "Last ned Figma-appen (valgfritt)", url: "https://www.figma.com/downloads/" },
    ],
  },
  {
    tittel: "Figma Education",
    status: "Anbefalt · ikke påkrevd",
    avsnitt: [
      "Som student kan du søke om gratis Figma Education-tilgang, som gir tilgang til flere funksjoner.",
      "Vi anbefaler å søke med studenteposten din, men dette er ikke nødvendig for å delta på workshopen. En vanlig gratiskonto fungerer også.",
      "Du kan bli bedt om å verifisere studentstatus når du søker.",
    ],
    lenker: [{ tekst: "Søk om Figma Education", url: "https://www.figma.com/education/" }],
  },
  {
    tittel: "Installer Visual Studio Code",
    status: "Nødvendig",
    avsnitt: [
      "Visual Studio Code (VS Code) er kodeeditoren vi skal bruke til frontend-utvikling.",
      "Last ned og installer programmet før workshopen. Velg nedlastingen for operativsystemet ditt og følg installasjonsveiviseren.",
    ],
    lenker: [{ tekst: "Last ned VS Code", url: "https://code.visualstudio.com/" }],
  },
  {
    tittel: "Installer Node.js",
    status: "Nødvendig",
    avsnitt: [
      "Node.js gjør det mulig å kjøre utviklingsverktøyene vi trenger for React-prosjektet.",
      "Installer en oppdatert LTS-versjon som er kompatibel med prosjektets Vite-versjon. Velg LTS på Node.js-nettsiden og følg installasjonsveiviseren. npm følger med.",
      "Vites gjeldende minstekrav er Node.js 20.19+ eller 22.12+. Velg en fortsatt støttet LTS-versjon på 22.12 eller nyere. Start terminalen på nytt etter installasjon, og kjør kommandoene under. Begge skal vise et versjonsnummer.",
    ],
    lenker: [{ tekst: "Last ned Node.js LTS", url: "https://nodejs.org/" }],
    kommando: "node -v\nnpm -v",
  },
  {
    tittel: "Git og GitHub",
    status: "Anbefalt · ikke påkrevd",
    avsnitt: [
      "Git er et verktøy for versjonskontroll, mens GitHub brukes til å lagre og dele kode.",
      "Vi anbefaler at du installerer Git og oppretter en GitHub-konto. Dette vil også være nyttig i fremtidige prosjekter.",
      "Følg installasjonsinstruksjonene for operativsystemet ditt. Åpne deretter en ny terminal og kontroller installasjonen. Kommandoen skal vise et versjonsnummer.",
    ],
    lenker: [
      { tekst: "Installer Git", url: "https://git-scm.com/install/" },
      { tekst: "Opprett GitHub-konto", url: "https://github.com/" },
    ],
    kommando: "git --version",
  },
  {
    tittel: "AI-assistent",
    status: "Anbefalt · gratis tilgang holder",
    avsnitt: [
      "Vi skal utforske hvordan AI kan hjelpe oss med å gjøre et design om til fungerende frontend-kode.",
      "Sørg gjerne for at du har tilgang til en AI-assistent, for eksempel ChatGPT. Det er ikke nødvendig å betale for et abonnement.",
    ],
    lenker: [{ tekst: "Åpne ChatGPT", url: "https://chatgpt.com/" }],
  },
];

const nyttigeLenker = [
  { kategori: "Design", lenker: [
    { tekst: "Figma", url: "https://www.figma.com/" },
    { tekst: "Figma Help Center", url: "https://help.figma.com/" },
    { tekst: "Figma Community", url: "https://www.figma.com/community" },
  ] },
  { kategori: "Frontend", lenker: [
    { tekst: "React", url: "https://react.dev/learn" },
    { tekst: "Vite", url: "https://vite.dev/guide/" },
    { tekst: "MDN Web Docs", url: "https://developer.mozilla.org/" },
  ] },
  { kategori: "Inspirasjon", lenker: [
    { tekst: "Dribbble", url: "https://dribbble.com/" },
    { tekst: "Behance", url: "https://www.behance.net/" },
    { tekst: "Google Fonts", url: "https://fonts.google.com/" },
  ] },
];

const lenkestil = "tag-s-bold inline-block py-2 text-eik-70 underline decoration-eik-50 underline-offset-4 transition-colors hover:text-black";

export default function WorkshopRessurserPage() {
  return (
    <>
      <Header />
      <main id="hovedinnhold" className="flex-1 px-6 pb-20 pt-36 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Link href="/arrangementer/workshop-frontend" className={lenkestil}>
            ← Tilbake til arrangementet
          </Link>
          <p className="kicker mt-8 text-eik-60">Webdesign &amp; utvikling · Workshop</p>
          <h1 className="title-xs mt-4 sm:title-s lg:title-m">Forberedelser &amp; ressurser</h1>
          <p className="text-l mt-6 max-w-2xl text-storm-70 sm:text-xl">
            Alt du trenger før, under og etter workshopen i webdesign og utvikling.
          </p>
          <nav aria-label="På denne siden" className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-y border-black/15 py-4">
            <a className={lenkestil} href="#for-workshopen">Før workshopen</a>
            <a className={lenkestil} href="#sjekkliste">Sjekkliste</a>
            <a className={lenkestil} href="#ressurser">Ressurser</a>
            <a className={lenkestil} href="#nyttige-lenker">Nyttige lenker</a>
          </nav>

          <section aria-labelledby="introduksjon" className="grid gap-8 py-14 lg:grid-cols-[2fr_1fr] lg:gap-16 lg:py-20">
            <div>
              <h2 id="introduksjon" className="title-xs">Gjør deg klar til workshopen</h2>
              <div className="text-m mt-6 space-y-4 text-storm-70">
                <p>19. november skal vi gå fra en idé til en fungerende nettside ved hjelp av Figma, React og AI-assistert utvikling.</p>
                <p>For at vi skal bruke mest mulig tid på å designe og bygge, anbefaler vi at du gjør noen enkle forberedelser på forhånd.</p>
                <p>Du trenger ingen forkunnskaper. Vi går gjennom det grunnleggende sammen!</p>
              </div>
            </div>
            <dl className="grid content-start grid-cols-2 gap-6 border border-black/15 bg-white p-6">
              {[
                ["Dato", "19. november 2026"],
                ["Tid", "17:00–19:00"],
                ["Sted", "Eik Lab, TF2-204, NMBU"],
                ["Ta med", "Laptop og mus"],
              ].map(([tittel, verdi]) => (
                <div key={tittel}>
                  <dt className="kicker text-storm-70">{tittel}</dt>
                  <dd className="text-m mt-2">{verdi}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="for-workshopen" aria-labelledby="for-tittel" className="scroll-mt-28 border-t border-black/15 py-14 lg:py-20">
            <p className="kicker text-eik-60">01 · Forberedelser</p>
            <h2 id="for-tittel" className="title-xs mt-3">Før workshopen</h2>
            <p className="text-m mt-4 max-w-2xl text-storm-70">Start med Figma, VS Code og Node.js. Stegene merket «Anbefalt» er ikke påkrevd for å delta.</p>
            <ol className="mt-10 grid gap-6 md:grid-cols-2">
              {steg.map((steg, indeks) => (
                <li key={steg.tittel} className="border border-black/15 bg-white p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span aria-hidden="true" className="tag-m-bold flex h-10 w-10 shrink-0 items-center justify-center bg-eik-5 text-eik-70">{indeks + 1}</span>
                    <span className="tag-xs-bold text-eik-70">{steg.status}</span>
                  </div>
                  <h3 className="tag-l-bold mt-5">{steg.tittel}</h3>
                  <div className="text-m mt-4 space-y-3 text-storm-70">
                    {steg.avsnitt.map((tekst) => <p key={tekst}>{tekst}</p>)}
                  </div>
                  {steg.kommando && (
                    <pre className="mt-5 overflow-x-auto bg-krem p-4 text-base text-black"><code>{steg.kommando}</code></pre>
                  )}
                  <ul className="mt-4">
                    {steg.lenker.map((lenke) => (
                      <li key={lenke.url}><a className={lenkestil} href={lenke.url}>{lenke.tekst} →</a></li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

          <section id="sjekkliste" aria-labelledby="sjekkliste-tittel" className="scroll-mt-28 border-t border-black/15 py-14 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="kicker text-eik-60">02 · Sjekk at alt fungerer</p>
                <h2 id="sjekkliste-tittel" className="title-xs mt-3">Er du klar?</h2>
                <p className="text-m mt-4 text-storm-70">Kryss av etter hvert som du blir ferdig. Du kan komme tilbake til listen før workshopen.</p>
                <aside className="mt-8 border-l-4 border-eik-60 bg-eik-5 p-6">
                  <h3 className="tag-m-bold">Vi hjelper deg i gang</h3>
                  <p className="text-m mt-3">Får du ikke installert alt? Ingen problem! Vi hjelper deg i gang under workshopen. Det vil også være mulig å jobbe med et nettleserbasert utviklingsmiljø.</p>
                </aside>
              </div>
              <Sjekkliste />
            </div>
          </section>

          <section id="ressurser" aria-labelledby="ressurser-tittel" className="scroll-mt-28 border-t border-black/15 py-14 lg:py-20">
            <p className="kicker text-eik-60">03 · Under og etter workshopen</p>
            <h2 id="ressurser-tittel" className="title-xs mt-3">Ressurser til workshopen</h2>
            <p className="text-m mt-4 max-w-2xl text-storm-70">Her finner du filer, oppgaver og eksempler som vi bruker under workshopen. Ressursene blir tilgjengelige når de er klare.</p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ressurser.map((ressurs) => (
                <li key={ressurs.tittel} className="flex flex-col border border-black/15 p-6">
                  <h3 className="tag-l-bold">{ressurs.tittel}</h3>
                  <p className="text-m mb-6 mt-3 text-storm-70">{ressurs.beskrivelse}</p>
                  <div className="mt-auto">
                    {ressurs.url && ressurs.status === "tilgjengelig" ? (
                      <a className={lenkestil} href={ressurs.url}>Åpne {ressurs.tittel.toLowerCase()} →</a>
                    ) : (
                      <span className="tag-xs-bold inline-block bg-storm-5 px-3 py-2 text-storm-70">Kommer snart</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section id="nyttige-lenker" aria-labelledby="lenker-tittel" className="scroll-mt-28 border-t border-black/15 py-14 lg:py-20">
            <p className="kicker text-eik-60">04 · Utforsk videre</p>
            <h2 id="lenker-tittel" className="title-xs mt-3">Nyttige lenker</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {nyttigeLenker.map((gruppe) => (
                <div key={gruppe.kategori}>
                  <h3 className="tag-l-bold border-b border-black/15 pb-4">{gruppe.kategori}</h3>
                  <ul className="mt-3">
                    {gruppe.lenker.map((lenke) => <li key={lenke.url}><a className={lenkestil} href={lenke.url}>{lenke.tekst} →</a></li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="sporsmal-tittel" className="border-t border-black/15 pt-14">
            <h2 id="sporsmal-tittel" className="title-xs">Spørsmål?</h2>
            <p className="text-m mt-4 max-w-2xl text-storm-70">Har du spørsmål om forberedelsene eller problemer med installasjon? Du kan også ta med spørsmålene dine til workshopen, så hjelper vi deg i gang.</p>
            <Link href="/arrangementer/workshop-frontend" className="tag-s-bold mt-8 inline-block bg-eik-60 px-8 py-3.5 text-white transition-colors hover:bg-eik-70">Tilbake til arrangementet →</Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
