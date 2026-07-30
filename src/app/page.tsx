import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllArrangementer } from "@/lib/arrangementer";
import { getAllProsjekter } from "@/lib/prosjekter";
import MuxPlayer from "@mux/mux-player-react";
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
        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="relative bg-krem lg:min-h-screen">
          {/* Green organic blob */}
          <div
            className="pointer-events-none absolute"
            style={{ top: -250, left: -400, width: 1200, height: 900, zIndex: 0 }}
            aria-hidden="true"
          >
            <svg width="100%" height="100%" viewBox="0 0 1200 900" preserveAspectRatio="none" overflow="visible">
              <defs>
                <filter id="blob-green" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="80" result="blur" />
                </filter>
              </defs>
              <path
                d="M 550,180 C 750,120 950,150 1020,300 C 1090,450 1050,580 900,670 C 750,760 500,750 300,680 C 100,610 50,450 100,300 C 150,150 300,90 400,130 C 470,160 500,200 550,180 Z"
                fill="#55BCAB"
                opacity="0.45"
                filter="url(#blob-green)"
              />
            </svg>
          </div>

          {/* Blue organic blob */}
          <div
            className="pointer-events-none absolute"
            style={{ bottom: -200, right: -200, width: 800, height: 800, zIndex: 0 }}
            aria-hidden="true"
          >
            <svg width="100%" height="100%" viewBox="0 0 800 800" preserveAspectRatio="none" overflow="visible">
              <defs>
                <filter id="blob-blue" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="60" result="blur" />
                </filter>
              </defs>
              <path
                d="M 400,120 C 540,80 660,160 710,280 C 760,400 660,540 540,610 C 420,680 220,660 140,540 C 60,420 80,280 140,190 C 200,100 280,80 340,100 C 360,110 380,120 400,120 Z"
                fill="#6DAAC3"
                opacity="0.45"
                filter="url(#blob-blue)"
              />
            </svg>
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-4 pb-8 pt-28 sm:gap-8 sm:pb-20 lg:gap-16 lg:pt-58">
            
            <div className="flex flex-col items-center text-center">
              <h1 className="title-xs text-black sm:title-s lg:title-xl">
                EIK LAB
              </h1>
              <p className="tag-l mt-4 text-black/80 lg:tag-xl">
                Senter for studentinnovasjon
              </p>
              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href="/om"
                  className="tag-s rounded-[50px] border-2 border-black px-7 py-3 font-bold text-black transition-colors hover:bg-black hover:text-krem"
                >
                  Bli med
                </Link>
                <Link
                  href="/prosjekter"
                  className="tag-s rounded-[50px] border-2 border-black px-7 py-3 font-bold text-black transition-colors hover:bg-black hover:text-krem"
                >
                  Prosjekter
                </Link>
              </div>
            </div>
            <div className="w-full">
              <MuxPlayer
                streamType="on-demand"
                playbackId={process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID!}
                className="aspect-video w-full rounded-2xl sm:rounded-[32px] [--controls:none]"
                autoPlay
                muted
                loop
              />
            </div>
          </div>
        </section>

        {/* ── About: Hva er Eik Lab? ─────────────────────────── */}
        <section className="px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="title-xs text-black lg:title-m">
              Hva er<br />Eik Lab?
            </h2>
            <p className="text-m mt-6 max-w-3xl text-black/75 lg:text-l">
              Eik Lab er et senter for studentinnovasjon ved NMBU. Vi er et
              fellesskap av engasjerte studenter som skaper, eksperimenterer
              og bygger fremtidens løsninger.
            </p>
          </div>
        </section>

        {/* ── Projects: Prosjekter ───────────────────────────── */}
        <section className="px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="title-xs mb-12 text-black lg:title-m">Prosjekter</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {prosjekter.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/prosjekter/${p.slug}`}
                  className={`group flex min-h-[260px] flex-col justify-between rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${tagColors[p.tag] || "bg-eik-80"}`}
                  style={{ animationDelay: `${i * 100}ms` }}
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
            </div>
          </div>
        </section>

        {/* ── Opportunities: Muligheter ─────────────────────── */}
        <section className="bg-storm-5 px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="title-xs mb-12 text-black lg:title-m">Muligheter</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Workshops",
                  desc: "Lær nye ferdigheter fra eksperter og medstudenter.",
                },
                {
                  title: "Mentorskap",
                  desc: "Få veiledning fra erfarne gründere og fagfolk.",
                },
                {
                  title: "Nettverk",
                  desc: "Bygg relasjoner på tvers av fag og årganger.",
                },
                {
                  title: "Finansiering",
                  desc: "Støtte til å realisere dine idéer og prosjekter.",
                },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-3xl bg-white p-8 shadow-s">
                  <h3 className="tag-l-bold text-eik-70">{title}</h3>
                  <p className="text-m mt-3 text-black/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Events: Arrangementer ─────────────────────────── */}
        <section className="px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="title-xs mb-12 text-black lg:title-m">
              Arrangementer
            </h2>
            <div className="flex flex-col gap-4">
              {arrangementer.map((a) => (
                <Link
                  key={a.slug}
                  href={`/arrangementer/${a.slug}`}
                  className="group flex flex-col gap-4 rounded-3xl bg-white px-8 py-6 shadow-s transition-all duration-300 hover:-translate-y-0.5 hover:shadow-m hover:bg-eik-70 sm:flex-row sm:items-center sm:gap-8"
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
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
