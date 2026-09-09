import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Personvern",
  description: "Informasjon om personvern og eksterne tjenester på eiklab.no.",
  alternates: { canonical: "/personvern" },
};

export default function PersonvernPage() {
  return (
    <>
      <Header />
      <main id="hovedinnhold" className="flex-1">
        <article className="px-6 pb-20 pt-36 lg:px-16 lg:pb-28">
          <div className="mx-auto max-w-3xl">
            <h1 className="title-xs text-black sm:title-s lg:title-l">
              Personvern
            </h1>
            <p className="text-xl mt-6 border-b border-black/15 pb-10 text-storm-70">
              Denne siden forklarer hvilke eksterne tjenester eiklab.no bruker,
              og hvilke tekniske opplysninger som kan behandles når du besøker
              nettsiden.
            </p>

            <div className="mt-12 space-y-10 text-storm-70">
              <section>
                <h2 className="text-l-bold text-black">Vercel Analytics</h2>
                <p className="text-m mt-3">
                  Vi bruker Vercel Analytics for å forstå overordnet trafikk og
                  bruk av nettsiden. Tjenesten kan behandle tekniske
                  besøksopplysninger som sidevisninger, tidspunkt, nettleser,
                  enhetstype og omtrentlig geografisk område. Opplysningene
                  brukes til å forbedre nettsiden og oppdage tekniske problemer.
                </p>
                <a
                  href="https://vercel.com/legal/privacy-notice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tag-s-bold mt-3 inline-block underline decoration-eik-50 decoration-2 underline-offset-4 hover:text-eik-60"
                >
                  Les Vercels personvernerklæring &rarr;
                </a>
              </section>

              <section>
                <h2 className="text-l-bold text-black">Mux-video</h2>
                <p className="text-m mt-3">
                  Videoen på forsiden leveres av Mux. Når videoen lastes eller
                  spilles av, kan Mux motta tekniske opplysninger som IP-adresse,
                  enhets- og nettleserinformasjon og informasjon om avspillingen.
                  Dette er nødvendig for å levere videoen og følge opp kvalitet
                  og feil i avspillingen.
                </p>
                <a
                  href="https://www.mux.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tag-s-bold mt-3 inline-block underline decoration-eik-50 decoration-2 underline-offset-4 hover:text-eik-60"
                >
                  Les Mux sin personvernerklæring &rarr;
                </a>
              </section>

              <section>
                <h2 className="text-l-bold text-black">MazeMap-kart</h2>
                <p className="text-m mt-3">
                  Kontaktsiden inneholder et kart fra MazeMap. Kartet lastes fra
                  MazeMap når kontaktsiden åpnes. MazeMap kan da motta tekniske
                  opplysninger som IP-adresse og nettleserinformasjon. Dersom du
                  velger å dele posisjonen din med kartet, kan posisjonsdata også
                  behandles.
                </p>
                <a
                  href="https://mazemap.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tag-s-bold mt-3 inline-block underline decoration-eik-50 decoration-2 underline-offset-4 hover:text-eik-60"
                >
                  Les MazeMaps personvernerklæring &rarr;
                </a>
              </section>

              <section className="border-t border-black/15 pt-8">
                <h2 className="text-l-bold text-black">Spørsmål og rettigheter</h2>
                <p className="text-m mt-3">
                  Har du spørsmål om personvern på eiklab.no, eller ønsker du å
                  be om innsyn, retting eller sletting, kan du kontakte oss på{" "}
                  <a
                    href="mailto:eiklab@nmbu.no"
                    className="underline decoration-eik-50 decoration-2 underline-offset-4 hover:text-eik-60"
                  >
                    eiklab@nmbu.no
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
