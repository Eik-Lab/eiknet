import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/animations/reveal";
import { Hero } from "@/components/home/hero";
import { Muligheter } from "@/components/home/muligheter";
import { Cta } from "@/components/home/cta";
import { getAllArrangementer } from "@/lib/arrangementer";
import { getAllProsjekter } from "@/lib/prosjekter";
import Link from "next/link";

export default function Home() {
  const prosjekter = getAllProsjekter().slice(0, 3);
  const arrangementer = getAllArrangementer().slice(0, 3);

  const tagColors: Record<string, string> = {
    Miljø: "bg-eik-80",
    Digital: "bg-hav-70",
    "Deep tech": "bg-plomme-60",
    Sensor: "bg-klementin-60",
    Bærekraft: "bg-eik-70",
    Edtech: "bg-solgul-60",
  };

  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-hidden">
        <Hero />

        {/* ── About: Hva er Eik Lab? ─────────────────────────── */}
        <section className="px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="tag-s-bold uppercase tracking-widest text-black/60">
                Om Eik Lab
              </p>
              <h2 className="title-xs mt-3 text-black lg:title-m">
                Hva er<br />Eik Lab?
              </h2>
              <p className="text-m mt-6 max-w-3xl text-black/75 lg:text-l">
                Eik Lab er et senter for studentinnovasjon ved NMBU. Vi er et
                fellesskap av engasjerte studenter som skaper, eksperimenterer
                og bygger fremtidens løsninger.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Projects: Prosjekter ───────────────────────────── */}
        <section className="px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="tag-s-bold uppercase tracking-widest text-black/60">
                Prosjekter
              </p>
              <h2 className="title-xs mt-3 mb-12 text-black lg:title-m">
                Hva studentene bygger
              </h2>
            </Reveal>
            <Reveal
              stagger={0.1}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {prosjekter.map((p) => (
                <Link
                  key={p.slug}
                  href={`/prosjekter/${p.slug}`}
                  className={`group flex min-h-[260px] flex-col justify-between p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${tagColors[p.tag] || "bg-eik-80"}`}
                >
                  <div>
                    <span className="inline-block rounded-full border border-white/30 px-3 py-1 tag-xs text-white/70">
                      {p.tag}
                    </span>
                    <h3 className="tag-l mt-4 font-bold text-white">{p.title}</h3>
                    <p className="text-s mt-3 text-white/80">{p.ingress}</p>
                    {p.mentorer && p.mentorer.length > 0 && (
                      <p className="tag-xs mt-3 text-white/50">
                        Mentorer: {p.mentorer.join(", ")}
                      </p>
                    )}
                  </div>
                  <span className="tag-s mt-6 flex items-center gap-2 font-semibold text-white/90 transition-all group-hover:gap-3">
                    Les mer →
                  </span>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── Opportunities: Muligheter ─────────────────────── */}
        <section className="bg-storm-5 px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="tag-s-bold uppercase tracking-widest text-black/60">
                Muligheter
              </p>
              <h2 className="title-xs mt-3 mb-12 text-black lg:title-m">
                Hva får du her?
              </h2>
            </Reveal>
            <Muligheter />
          </div>
        </section>

        {/* ── Events: Arrangementer ─────────────────────────── */}
        <section className="px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="tag-s-bold uppercase tracking-widest text-black/60">
                Arrangementer
              </p>
              <h2 className="title-xs mt-3 mb-12 text-black lg:title-m">
                Kommende arrangementer
              </h2>
            </Reveal>
            <Reveal stagger={0.08} className="flex flex-col gap-4">
              {arrangementer.map((a) => (
                <Link
                  key={a.slug}
                  href={`/arrangementer/${a.slug}`}
                  className="group flex flex-col gap-4 bg-white px-8 py-6 shadow-s transition-all duration-300 hover:-translate-y-0.5 hover:shadow-m hover:bg-eik-70 sm:flex-row sm:items-center sm:gap-8"
                >
                  <span className="tag-l-bold w-24 shrink-0 text-eik-70 group-hover:text-eik-30">
                    {a.date}
                  </span>
                  <span className="tag-l-bold flex-1 text-black group-hover:text-white">
                    {a.title}
                  </span>
                  <span className="tag-s text-black/60 group-hover:text-white/60">
                    Eik Lab, Ås
                  </span>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>

        <Cta />
      </main>

      <Footer />
    </>
  );
}
