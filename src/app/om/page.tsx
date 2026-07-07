import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Om oss | Eik Lab",
  description:
    "Eik Lab er senter for studentinnovasjon ved NMBU på Ås. Vi gir studenter verktøy, veiledning og et tverrfaglig miljø for å utforske og realisere idéer.",
};

const team = [
  { name: "Kari Nordmann", role: "Daglig leder" },
  { name: "Ola Nordmann", role: "Faglig veileder" },
  { name: "Maria Solberg", role: "Prosjektleder" },
  { name: "Andre Berg", role: "Teknisk ansvarlig" },
];

export default function OmPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-eik-5 to-krem px-6 pt-36 pb-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="tag-s-bold uppercase tracking-widest text-black/60">
              Om oss
            </p>
            <h1 className="title-l mt-4 text-black">
              Senter for studentinnovasjon
            </h1>
            <p className="text-xl mt-6 max-w-3xl text-storm-70">
              Eik Lab er et tverrfaglig innovasjonssenter for studenter ved
              NMBU. Vi gir deg verktøyene, veiledningen og miljøet du trenger
              for å utforske nye idéer, bygge prototyper og skape noe som
              betyr noe.
            </p>
          </div>
        </section>

        <section className="bg-krem px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h2 className="title-m text-black">Hva vi gjør</h2>
                <p className="text-xl mt-4 text-storm-70">
                  Vi tilbyr et åpent lab-miljø der studenter fra alle
                  fakulteter kan jobbe med egne prosjekter, delta på workshops
                  og få mentoring fra erfarne veiledere. Vår filosofi er enkel:
                  de beste idéene oppstår når nysgjerrighet, tverrfaglig
                  samarbeid og tilgang på verktøy møtes.
                </p>
                <h2 className="title-m mt-14 text-black">Historien</h2>
                <p className="text-xl mt-4 text-storm-70">
                  Eik Lab ble etablert som et svar på studenters ønske om et
                  fysisk sted for innovasjon og prototyping på campus Ås. Siden
                  oppstarten har vi vært vert for alt fra miljøteknologi til
                  digitale tjenester — alltid med studenten i førersetet.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-8 shadow-s">
                <h3 className="tag-l-bold text-eik-70">Kontakt</h3>
                <address className="text-l mt-6 not-italic text-storm-70">
                  <p>Kajaveien 7</p>
                  <p>1433 Ås</p>
                  <a
                    href="mailto:post@eiklab.no"
                    className="mt-4 inline-block text-eik-60 underline-offset-4 hover:underline"
                  >
                    post@eiklab.no
                  </a>
                </address>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="tag-s-bold uppercase tracking-widest text-black/60">
              Teamet
            </p>
            <h2 className="title-s mt-3 text-black">Folka bak Eik Lab</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl bg-krem p-6 shadow-s"
                >
                  <div className="mb-4 h-20 w-20 rounded-full bg-eik-5" />
                  <h3 className="tag-m-bold text-black">{member.name}</h3>
                  <p className="text-s text-storm-70">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
