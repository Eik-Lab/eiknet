import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Foto } from "@/components/media/foto";

export const metadata: Metadata = {
  title: "Om oss | Eik Lab",
  description:
    "Eik Lab er senter for studentinnovasjon ved NMBU på Ås. Vi gir studenter verktøy, veiledning og et tverrfaglig miljø for å utforske og realisere idéer.",
};

const team = [
  {
    name: "Kristian Omberg",
    role: "Daglig leder",
    foto: "team-kristian",
    alt: "Portrett av Kristian Omberg",
  },
  {
    name: "Ola Omberg",
    role: "Daglig leder",
    foto: "team-ola",
    alt: "Portrett av Ola Omberg",
  },
];

export default function OmPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="px-6 pt-36 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="kicker text-black/50">Om oss</p>
            <h1 className="title-xs mt-4 max-w-3xl text-black sm:title-s lg:title-l">
              Et verksted, ikke et kontor
            </h1>
            <p className="text-xl mt-6 max-w-3xl pb-10 text-storm-70 border-b border-black/15 lg:text-xxl">
              Eik Lab er et tverrfaglig innovasjonsmiljø for studenter ved
              NMBU. Du får verktøyene, veiledningen og folka du trenger for å
              utforske en idé — og bygge den.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-16 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="tag-m-bold text-black">Hva vi gjør</h2>
              <p className="text-m mt-4 text-storm-70">
                Vi holder et åpent lab-miljø i TF2-204 der studenter fra alle
                fakulteter kan jobbe med egne prosjekter, delta på workshops og
                få mentoring av erfarne studentmentorer. Filosofien er enkel:
                de beste idéene oppstår når nysgjerrighet, tverrfaglig
                samarbeid og tilgang på verktøy møtes.
              </p>
              <h2 className="tag-m-bold mt-12 text-black">Historien</h2>
              <p className="text-m mt-4 text-storm-70">
                Eik Lab ble etablert fordi studenter manglet et fysisk sted for
                innovasjon og prototyping på campus Ås. Siden oppstarten har vi
                hatt alt fra miljøteknologi til digitale tjenester på benken —
                alltid med studenten i førersetet. Flere prosjekter har vokst
                til egne selskaper.
              </p>
            </div>
            <figure className="lg:col-span-5">
              <Foto
                navn="om-historie"
                alt="Eik Lab gjennom årene"
                ratio="4/5"
                plassholderTekst="bilde fra labben gjennom årene"
              />
              <figcaption className="text-xs-italic mt-2.5 text-storm-50">
                Labben har flyttet seg, idéene har blitt værende.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-white px-6 py-16 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 border-b border-black/15 pb-4">
              <h2 className="title-xs text-black sm:title-s">Folka bak</h2>
              <p className="text-s-italic text-storm-50">
                Stiller gjerne opp på en kaffe.
              </p>
            </div>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:max-w-3xl">
              {team.map((member) => (
                <figure key={member.name}>
                  <Foto
                    navn={member.foto}
                    alt={member.alt}
                    ratio="3/4"
                    sizes="(min-width: 640px) 384px, 100vw"
                    plassholderTekst={`portrett av ${member.name.split(" ")[0]}`}
                  />
                  <figcaption className="mt-3">
                    <p className="tag-m-bold text-black">{member.name}</p>
                    <p className="text-s text-storm-60">{member.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-14 max-w-3xl border-l-4 border-eik-50 pl-6 lg:pl-8">
              <h3 className="tag-m-bold text-eik-70">Studentmentorene</h3>
              <p className="text-m mt-3 text-storm-70">
                I tillegg drives labben av ni studentmentorer fra robotikk,
                indøk og datavitenskap. De sitter på faget, har vært gjennom
                prosjektarbeidet selv og stiller opp som sparrekler —{" "}
                <a
                  href="/mentorer"
                  className="underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
                >
                  bli kjent med dem her
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
