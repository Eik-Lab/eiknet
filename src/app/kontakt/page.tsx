import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

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
        <section className="bg-gradient-to-b from-eik-5 to-krem px-6 pt-36 pb-20">
          <div className="mx-auto max-w-6xl">
            <p className="tag-s-bold uppercase tracking-widest text-black/60">
              Kontakt
            </p>
            <h1 className="title-l mt-4 text-black">
              Kom i kontakt med oss
            </h1>
            <p className="text-xl mt-6 max-w-2xl text-storm-70">
              Har du en idé du vil utforske? Eller lurer du på hvordan du kan
              bli involvert? Ta gjerne kontakt.
            </p>
          </div>
        </section>

        <section className="bg-krem px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-3xl bg-white p-8 shadow-s">
                <h2 className="title-xs text-black">Send oss en melding</h2>
                <form className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="tag-s-bold mb-2 block text-storm-70"
                    >
                      Navn
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full rounded-xl border border-storm-10 bg-krem px-4 py-3 text-m text-black outline-none focus:border-eik-50"
                      placeholder="Ola Nordmann"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="tag-s-bold mb-2 block text-storm-70"
                    >
                      E-post
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-xl border border-storm-10 bg-krem px-4 py-3 text-m text-black outline-none focus:border-eik-50"
                      placeholder="ola@nmbu.no"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="tag-s-bold mb-2 block text-storm-70"
                    >
                      Melding
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-xl border border-storm-10 bg-krem px-4 py-3 text-m text-black outline-none focus:border-eik-50"
                      placeholder="Hei! Jeg har en idé jeg vil diskutere..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-full bg-eik-50 px-8 py-4 tag-l-bold text-white shadow-m transition-transform hover:scale-105"
                  >
                    Send
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="rounded-3xl bg-white p-8 shadow-s">
                  <h3 className="tag-l-bold text-eik-70">Besøk oss</h3>
                  <address className="text-l mt-4 not-italic text-storm-70">
                    <p>Kajaveien 7</p>
                    <p>1433 Ås</p>
                  </address>
                </div>

                <div className="rounded-3xl bg-white p-8 shadow-s">
                  <h3 className="tag-l-bold text-eik-70">E-post</h3>
                  <a
                    href="mailto:post@eiklab.no"
                    className="text-l mt-4 inline-block text-eik-60 underline-offset-4 hover:underline"
                  >
                    post@eiklab.no
                  </a>
                </div>

                <div className="rounded-3xl bg-white p-8 shadow-s">
                  <h3 className="tag-l-bold text-eik-70">Åpningstider</h3>
                  <p className="text-l mt-4 text-storm-70">
                    Man–fre: 09:00–17:00
                  </p>
                  <p className="text-l text-storm-70">
                    Lør–søn: Etter avtale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
