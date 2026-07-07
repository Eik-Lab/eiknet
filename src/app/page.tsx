import { Header } from "@/components/layout/header";
import { BuildingMark } from "@/components/layout/building-mark";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="relative min-h-screen overflow-hidden bg-krem">
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
            style={{ bottom: -80, right: -200, width: 700, height: 700, zIndex: 0 }}
            aria-hidden="true"
          >
            <svg width="100%" height="100%" viewBox="0 0 700 700" preserveAspectRatio="none" overflow="visible">
              <defs>
                <filter id="blob-blue" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="60" result="blur" />
                </filter>
              </defs>
              <path
                d="M 350,100 C 480,70 580,140 620,250 C 660,360 580,480 480,540 C 380,600 200,580 120,480 C 40,380 60,250 120,170 C 180,90 250,70 300,90 C 330,100 340,110 350,100 Z"
                fill="#6DAAC3"
                opacity="0.45"
                filter="url(#blob-blue)"
              />
            </svg>
          </div>

          <div className="absolute bottom-32 left-8 z-10 lg:left-16">
            <p className="tag-m-bold text-black lg:tag-l-bold">Av studenter</p>
            <p className="tag-m-bold text-black lg:tag-l-bold">For studenter</p>
          </div>

          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-32 pt-40 text-center">
            <h1 className="title-xs text-black sm:title-s lg:title-xl">
              EIK LAB
            </h1>
            <p className="tag-l mt-4 text-black/80 lg:tag-xl">
              Senter for studentinnovasjon
            </p>
            <div className="mt-10 flex items-center gap-4">
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
        </section>

        {/* ── About: Hva er Eik Lab? ─────────────────────────── */}
        <section className="px-6 py-24 lg:px-16">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="title-xs text-black lg:title-m">
                Hva er<br />Eik Lab?
              </h2>
              <p className="text-m mt-6 text-black/75 lg:text-l">
                Eik Lab er et senter for studentinnovasjon ved NMBU. Vi er et
                fellesskap av engasjerte studenter som skaper, eksperimenterer
                og bygger fremtidens løsninger — sammen.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "200+", label: "Aktive studenter" },
                { num: "30+", label: "Pågående prosjekter" },
                { num: "5", label: "Faglige spor" },
                { num: "2019", label: "Etablert" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 rounded-3xl bg-white p-6 shadow-s"
                >
                  <span className="tag-l-bold text-eik-70">{num}</span>
                  <span className="tag-xs text-black/70">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects: Prosjekter ───────────────────────────── */}
        <section className="px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="title-xs mb-12 text-black lg:title-m">Prosjekter</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "AgroTech",
                  desc: "Smarte sensorer og IoT-løsninger for bærekraftig landbruk.",
                  tag: "Teknologi",
                  bg: "bg-eik-80",
                },
                {
                  title: "GreenBox",
                  desc: "Gjenbrukbar emballasje som reduserer plastforsøpling.",
                  tag: "Bærekraft",
                  bg: "bg-eik-60",
                },
                {
                  title: "FoodBridge",
                  desc: "Kobler studenter med lokale matvareprodusenters overskudd.",
                  tag: "Samfunn",
                  bg: "bg-black",
                },
              ].map(({ title, desc, tag, bg }) => (
                <div
                  key={title}
                  className={`flex min-h-[260px] flex-col justify-between rounded-3xl p-8 transition-transform hover:-translate-y-1 ${bg}`}
                >
                  <div>
                    <span className="inline-block rounded-full border border-white/30 px-3 py-1 tag-xs text-white/70">
                      {tag}
                    </span>
                    <h3 className="tag-l mt-4 font-bold text-white">{title}</h3>
                    <p className="text-s mt-3 text-white/80">{desc}</p>
                  </div>
                  <Link
                    href="/prosjekter"
                    className="tag-s mt-6 flex items-center gap-2 font-semibold text-white/90 hover:text-white"
                  >
                    Les mer →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Opportunities: Muligheter ─────────────────────── */}
        <section className="bg-storm-5 px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-[1200px]">
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
          <div className="mx-auto max-w-[1200px]">
            <h2 className="title-xs mb-12 text-black lg:title-m">
              Arrangementer
            </h2>
            <div className="flex flex-col gap-4">
              {[
                { date: "15. aug", title: "Kick-off høst 2025", loc: "Eik Lab, Ås" },
                { date: "22. aug", title: "Idé-workshop", loc: "Eik Lab, Ås" },
                { date: "5. sep", title: "Demo Day", loc: "NMBU campus" },
              ].map(({ date, title, loc }) => (
                <Link
                  key={title}
                  href="/arrangementer"
                  className="group flex flex-col gap-4 rounded-3xl bg-white px-8 py-6 shadow-s transition-colors hover:bg-eik-70 sm:flex-row sm:items-center sm:gap-8"
                >
                  <span className="tag-l-bold w-24 shrink-0 text-eik-70 group-hover:text-eik-30">
                    {date}
                  </span>
                  <span className="tag-l-bold flex-1 text-black group-hover:text-white">
                    {title}
                  </span>
                  <span className="tag-s text-black/60 group-hover:text-white/60">
                    {loc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="px-6 pb-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-10 rounded-[25px] bg-eik-60 px-8 py-14 lg:flex-row lg:items-center lg:px-10 lg:py-16">
          <div className="flex flex-col gap-1">
            <span className="tag-l-bold text-white">EIK LAB</span>
            <span className="tag-xs text-white/60">
              Senter for studentinnovasjon
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="tag-m font-semibold text-white">Kajaveien 7</span>
            <span className="tag-m font-semibold text-white">1433 Ås</span>
          </div>
          <Link
            href="/kontakt"
            className="tag-m font-semibold text-white transition-colors hover:text-white/70"
          >
            Kontakt
          </Link>
          <div
            className="hidden shrink-0 opacity-40 lg:block"
            style={{ width: 260, height: 200 }}
          >
            <BuildingMark className="size-full" />
          </div>
        </div>
      </footer>
    </>
  );
}
