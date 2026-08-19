import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Reveal } from "@/components/animations/reveal";

export const metadata: Metadata = {
  title: "Kontakt | Eik Lab",
  description:
    "Kontakt Eik Lab — senter for studentinnovasjon ved NMBU. Finn oss i Kajaveien 7 på Ås.",
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-eik-5 to-krem px-6 pt-36 pb-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="tag-s-bold uppercase tracking-widest text-black/60">
                Kontakt
              </p>
              <h1 className="title-xs mt-4 text-black sm:title-s lg:title-l">
                Kom i kontakt med oss
              </h1>
              <p className="text-xl mt-6 max-w-2xl text-storm-70">
                Har du en idé du vil utforske? Eller lurer du på hvordan du kan
                bli involvert? Ta gjerne kontakt. 
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-krem px-6 py-32 lg:px-16">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
            <Reveal>
              <a
                href="mailto:christopher.ljosland.strand@nmbu.no,sania.minaipour@nmbu.no?subject=Interessert i Eik&cc=eiklab@nmbu.no"
                className="inline-block bg-eik-50 px-12 py-5 tag-l-bold text-white shadow-m transition-transform hover:scale-105"
              >
                Ta kontakt!
              </a>
            </Reveal>
            <Reveal className="flex w-full flex-col gap-2 text-center sm:flex-row sm:justify-center sm:gap-8">
              <p className="text-l text-storm-70">
                Eller kom innom oss på Eik Lab på TF2-204
              </p>
              <address className="text-l not-italic text-storm-70">
                Kajaveien 7, 1430 Ås
              </address>
              <a
                href="mailto:eiklab@nmbu.no"
                className="text-l text-eik-60 underline-offset-4 hover:underline"
              >
                eiklab@nmbu.no
              </a>
            </Reveal>
            <Reveal className="w-full overflow-hidden shadow-s">
              <iframe
                width="100%"
                height="280"
                className="sm:h-[420px]"
                title="Kart over Eik Lab ved NMBU"
                style={{ border: 0, display: "block" }}
                allow="geolocation"
                src="https://use.mazemap.com/embed.html#v=1&campusid=241&zlevel=2&center=10.776958,59.665759&zoom=22&sharepoitype=identifier&sharepoi=TF fløy2-TF2-204&utm_medium=iframe"
              />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
