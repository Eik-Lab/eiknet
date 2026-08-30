import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Foto } from "@/components/media/foto";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Eik Lab er senter for studentinnovasjon ved NMBU på Ås. Vi gir studenter verktøy, veiledning og et tverrfaglig miljø for å utforske og realisere idéer.",
};

export default function OmPage() {
  return (
    <>
      <Header />
      <main id="hovedinnhold" className="flex-1">
        <section className="px-6 pt-36 lg:px-16">
          <div className="mx-auto max-w-6xl">
            {/* <p className="kicker text-black/50">Om oss</p> */}
            <h1 className="title-xs mt-4 max-w-3xl text-black sm:title-s lg:title-l">
              Et verksted, ikke et kontor
            </h1>
            <p className="text-xl mt-6 max-w-3xl pb-10 text-storm-70 border-b border-black/15 lg:text-xxl">
              Eik Lab er et tverrfaglig innovasjonsmiljø for studenter ved
              NMBU. Du får verktøyene, veiledningen og folka du trenger for å
              utforske en idé.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-16 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="tag-m-bold text-black">Hva vi gjør</h2>
              <p className="text-m mt-4 text-storm-70">
                Vi holder et åpent lab-miljø i TF2-204 der studenter fra alle
                fakulteter kan jobbe med prosjekter, delta på workshops og
                få hjelp av erfarne studentmentorer.
                <br></br>
                Eik Lab har 3 hovedtilbud til studenter; workshops, hackathons og prosjekter. 
              </p>
              <h2 className="tag-m-bold mt-12 text-black">Tilbud til studenter</h2>
              <p className="text-m mt-4 text-storm-70">
                Eik Lab er en satsing på studentdreven innovasjon og entreprenørskap. Målet er å 
                gjøre studentene attraktive på arbeidsmarkedet gjennom økt arbeidslivsrelevans. Vi 
                driver hovedsakelig med teknisk utvikling, og aktivitetene våre inkluderer for 
                eksempel prototyping, elektronikk, programmering, design, 3D-tegning, simuleringer og markedsanalyse. 
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
                navn="lodding"
                alt="Eik Lab gjennom årene"
                ratio="4/5"
              />
              
            </figure>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
