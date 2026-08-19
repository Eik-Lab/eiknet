import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Reveal } from "@/components/animations/reveal";

export const metadata: Metadata = {
  title: "Om oss | Eik Lab",
  description:
    "Eik Lab er senter for studentinnovasjon ved NMBU på Ås. Vi gir studenter verktøy, veiledning og et tverrfaglig miljø for å utforske og realisere idéer.",
};

const team = [
  { name: "Kristian Omberg", role: "Daglig leder" },
  { name: "Ola Omberg", role: "Daglig leder" },
];

export default function OmPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-eik-5 to-krem px-6 pt-36 pb-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="tag-s-bold uppercase tracking-widest text-black/60">
                Om oss
              </p>
              <h1 className="title-xs mt-4 text-black sm:title-s lg:title-l">
                Senter for studentinnovasjon
              </h1>
              <p className="text-xl mt-6 max-w-3xl text-storm-70">
                Eik Lab er et tverrfaglig innovasjonssenter for studenter ved
                NMBU. Vi gir deg verktøyene, veiledningen og miljøet du trenger
                for å utforske nye idéer, bygge prototyper og skape noe som
                betyr noe.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-krem px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16">
              <Reveal>
                <div>
                  <h2 className="title-xs text-black sm:title-s lg:title-m">Hva vi gjør</h2>
                  <p className="text-xl mt-4 text-storm-70">
                    Vi tilbyr et åpent lab-miljø der studenter fra alle
                    fakulteter kan jobbe med egne prosjekter, delta på workshops
                    og få mentoring fra erfarne veiledere. Vår filosofi er enkel:
                    de beste idéene oppstår når nysgjerrighet, tverrfaglig
                    samarbeid og tilgang på verktøy møtes.
                  </p>
                  <h2 className="title-xs mt-14 text-black sm:title-s lg:title-m">Historien</h2>
                  <p className="text-xl mt-4 text-storm-70">
                    Eik Lab ble etablert som et svar på studenters ønske om et
                    fysisk sted for innovasjon og prototyping på campus Ås. Siden
                    oppstarten har vi vært vert for alt fra miljøteknologi til
                    digitale tjenester — alltid med studenten i førersetet.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="tag-s-bold uppercase tracking-widest text-black/60">
                Teamet
              </p>
              <h2 className="title-s mt-3 text-black">Folka bak Eik Lab</h2>
            </Reveal>
            <Reveal stagger={0.1} className="mt-12 grid gap-6 sm:grid-cols-2">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-krem p-6 shadow-s"
                >
                  <div className="mb-4 h-20 w-20 rounded-full bg-eik-5" />
                  <h3 className="tag-m-bold text-black">{member.name}</h3>
                  <p className="text-s text-storm-70">{member.role}</p>
                </div>
              ))}
            </Reveal>
            <Reveal className="mt-8 bg-eik-5 p-8 shadow-s">
              <h3 className="tag-l-bold text-eik-70">Studenter</h3>
              <p className="text-m mt-3 text-storm-70">
                Eik Lab drives av en engasjert gjeng studentmentorer fra
                ulike studier ved NMBU. Sammen skaper de et miljø der
                innovasjon og tverrfaglig samarbeid blomstrer.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
