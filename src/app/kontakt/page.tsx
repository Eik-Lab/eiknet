import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Kontakt",
  alternates: { canonical: "/kontakt" },
  description:
    "Kontakt Eik Lab, senter for studentinnovasjon ved NMBU. Finn oss i Kajaveien 7 på Ås.",
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main id="hovedinnhold" className="flex-1">
        <section className="px-6 pt-36 lg:px-16">
          <div className="mx-auto max-w-6xl">
           {/* <p className="kicker text-black/50">Kontakt</p> */}
            <h1 className="title-xs mt-4 max-w-2xl text-black sm:title-s lg:title-l">
              Kontakt oss, eller kom innom!
            </h1>
            <p className="text-xl mt-6 max-w-2xl pb-10 text-storm-70 border-b border-black/15 lg:text-xxl">
              Har du en idé, et spørsmål eller bare lyst til å se hva som
              skjer? Se arrangementssiden for oppdatert påmeldingsstatus,
              eller send oss en e-post.
            </p>
          </div>
        </section>

        <section className="px-6 py-14 lg:px-16 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="kicker text-black/40">Skriv til oss</p>
              <a
                href="mailto:christopher.ljosland.strand@nmbu.no,sania.minaipour@nmbu.no?subject=Interessert i Eik&cc=eiklab@nmbu.no"
                className="text-l-bold mt-3 block break-words text-black underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
              >
                Send en mail &rarr;
              </a>
              <p className="text-s mt-2 text-storm-50">
                Eller rett til{" "}
                <a
                  href="mailto:eiklab@nmbu.no"
                  className="underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
                >
                  eiklab@nmbu.no
                </a>
              </p>

              <p className="kicker mt-10 text-black/40">Finn frem</p>
              <address className="text-m mt-3 not-italic leading-relaxed text-storm-70">
                Eik Lab, TF2-204
                <br />
                Kajaveien 7, 1433 Ås
              </address>
              <p className="text-s mt-2 text-storm-50">
                Døra er på andre etasje i TF-bygget. Er den låst, spør en av
                mentorene.
              </p>
            </div>

            <div className="w-full overflow-hidden border border-black/15 lg:col-span-7">
              <iframe
                width="100%"
                height="280"
                className="block h-[280px] w-full sm:h-[420px]"
                title="Kart over Eik Lab ved NMBU"
                style={{ border: 0 }}
                allow="geolocation"
                src="https://use.mazemap.com/embed.html#v=1&campusid=241&zlevel=2&center=10.776958,59.665759&zoom=22&sharepoitype=identifier&sharepoi=TF fløy2-TF2-204&utm_medium=iframe"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
