import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { Muligheter } from "@/components/home/muligheter";
import { Cta } from "@/components/home/cta";
import { Foto } from "@/components/media/foto";
import { formaterDatoIntervall, getKommendeArrangementer } from "@/lib/arrangementer";
import { getAllProsjekter } from "@/lib/prosjekter";
import Link from "next/link";

export const revalidate = 3600;

export default function Home() {
  const prosjekter = getAllProsjekter();
  const [fremhevet, ...resten] = prosjekter;
  const andreProsjekter = resten.filter((p) => p.landing);
  const arrangementer = getKommendeArrangementer().slice(0, 3);
  return (
    <>
      <Header />
      <main id="hovedinnhold" className="flex-1">
        <Hero />

        {/* ── Om ─────────────────────────────────────────────── */}
        <section className="px-6 py-20 lg:px-16 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <p className="kicker text-black/50 lg:sticky lg:top-32">
                Om Eik Lab
              </p>
            </div>
            <div className="lg:col-span-9">
              <p className="text-l mt-7 max-w-4xl text-storm-70 lg:text-l">
                Eik Lab er en satsing på studentdreven innovasjon og entreprenørskap. Målet er å gjøre studentene attraktive på arbeidsmarkedet gjennom økt arbeidslivsrelevans. Vi driver hovedsakelig med teknisk utvikling, og aktivitetene våre inkluderer for eksempel prototyping, elektronikk, programmering, design, 3D-tegning, simuleringer og markedsanalyse.
              </p>
              <p className="text-m mt-7 max-w-4xl text-storm-70 lg:text-l">
                Studenter fra alle fakulteter jobber her med egne prosjekter,
                fra eksoskjelett og antidrone-turret til tradingbot og
                agritech. Studentmentorene våre veileder innen robotikk, data
                og indøk, og du trenger ikke være ferdigstuderert eller ha en
                forretningsplan for å komme i gang.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl items-end gap-x-5 gap-y-8 sm:grid-cols-12">
            <figure className="sm:col-span-5">
              <Foto
                navn="verksted"
                alt="Verkstedet på Eik Lab"
                ratio="3/4"
              />
              <figcaption className="text-xs-italic mt-2.5 text-storm-50">
                Garasjen.
              </figcaption>
            </figure>
            <figure className="sm:col-span-3">
              <Foto
                navn="folka"
                alt="Studenter på Eik Lab"
                ratio="1/1"
              />
              <figcaption className="text-xs-italic mt-2.5 text-storm-50">
                Kontoret.
              </figcaption>
            </figure>
            <figure className="sm:col-span-4">
              <Foto
                navn="workshop"
                alt="Workshop på Eik Lab"
                ratio="3/2"
              />
              <figcaption className="text-xs-italic mt-2.5 text-storm-50">
                Workshop med studentmentorene.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── Prosjekter ─────────────────────────────────────── */}
        <section className="px-6 pb-20 lg:px-16 lg:pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 border-y border-black/15 py-4">
              <h2 className="title-xs text-black sm:title-s">Prosjektene</h2>
              <Link
                href="/prosjekter"
                className="tag-s-bold underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
              >
                Alle prosjektene &rarr;
              </Link>
            </div>

            <Link
              href={`/prosjekter/${fremhevet.slug}`}
              className="group mt-10 grid items-center gap-8 lg:grid-cols-12"
            >
              <Foto
                navn={`prosjekt-${fremhevet.slug}`}
                alt={fremhevet.title}
                ratio="3/2"
                sizes="(min-width: 1280px) 640px, 100vw"
                className="lg:col-span-7"
              />
              <div className="lg:col-span-5">
                <p className="kicker text-eik-60">Fremhevet prosjekt</p>
                <h3 className="text-xl-bold mt-3 text-black transition-colors group-hover:text-eik-60 lg:text-xxl-bold">
                  {fremhevet.title}
                </h3>
                <p className="text-m mt-4 text-storm-70">{fremhevet.ingress}</p>
                <p className="text-s mt-4 text-storm-50">
                  {fremhevet.tag} &middot; {fremhevet.status}
                  {fremhevet.mentorer?.length
                    ? ` · Mentorer: ${fremhevet.mentorer.join(", ")}`
                    : ""}
                </p>
                <span className="tag-s-bold mt-6 inline-block text-black underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors group-hover:text-eik-60">
                  Les mer &rarr;
                </span>
              </div>
            </Link>

            <ul className="mt-12 border-t border-black/15">
              {andreProsjekter.map((p) => (
                <li key={p.slug} className="border-b border-black/15">
                  <Link
                    href={`/prosjekter/${p.slug}`}
                    className="group flex items-center gap-6 px-2 py-5 transition-colors hover:bg-white sm:gap-8"
                  >
                    <Foto
                      navn={`prosjekt-${p.slug}`}
                      alt={p.title}
                      ratio="1/1"
                      sizes="128px"
                      className="w-24 shrink-0 sm:w-32"
                    />
                    <span className="min-w-0">
                      <span className="text-m-bold block truncate text-black transition-colors group-hover:text-eik-60 lg:text-l-bold">
                        {p.title}
                      </span>
                      <span className="text-s mt-1 line-clamp-2 text-storm-70">
                        {p.ingress}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-l ml-auto shrink-0 text-storm-40 opacity-0 transition-all group-hover:translate-x-1 group-hover:text-eik-60 group-hover:opacity-100"
                    >
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Muligheter ─────────────────────────────────────── */}
        <section className="px-6 pb-20 lg:px-16 lg:pb-28">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <p className="kicker text-black/50">Hva får du her?</p>
            </div>
            <div className="lg:col-span-9">
              <Muligheter />
            </div>
          </div>
        </section>

        {/* ── Arrangementer ──────────────────────────────────── */}
        <section className="px-6 pb-20 lg:px-16 lg:pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 border-y border-black/15 py-4">
              <h2 className="title-xs text-black sm:title-s">
                Det skjer på Eik Lab
              </h2>
              <Link
                href="/arrangementer"
                className="tag-s-bold underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
              >
                Alle arrangementene &rarr;
              </Link>
            </div>
            <ul>
              {arrangementer.length === 0 ? (
                <li className="border-b border-black/15">
                  <p className="text-s-italic px-2 py-5 text-storm-50">
                    Ingen planlagte ennå. Følg med, eller send oss en mail.
                  </p>
                </li>
              ) : (
                arrangementer.map((a, i) => (
                  <li key={a.slug} className="border-b border-black/15">
                    <Link
                      href={`/arrangementer/${a.slug}`}
                      className="group grid gap-x-8 gap-y-0.5 px-2 py-5 transition-colors hover:bg-white sm:grid-cols-[150px_1fr_auto] sm:items-baseline"
                    >
                      <span className="tag-m-bold flex items-center gap-2 tabular-nums text-black">
                        {i === 0 && (
                          <span
                            aria-hidden="true"
                            className="inline-block h-2 w-2 rounded-full bg-eik-50"
                          />
                        )}
                        {formaterDatoIntervall(a.date, a.endDate)}
                      </span>
                      <span className="text-m-bold text-black transition-colors group-hover:text-eik-60">
                        {a.title}
                      </span>
                      <span className="kicker text-black/40">{a.type}</span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </section>

        {/* ── Foto ──────────────────────────────────────────── */}
        <section className="px-6 pb-20 lg:px-16 lg:pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 border-b border-black/15 pb-3">
              {/* <p className="kicker text-black/50">Labben i bevegelse</p>
              <p className="text-xs-italic text-storm-50">
                Et lite glimt fra hverdagen.
              </p> */}
            </div>
            <div className="mt-8">
              <Foto
                navn="hero"
                alt="Studenter i verkstedet på Eik Lab"
                ratio="3/2"
                sizes="100vw"
                behandlet={false}
              />
            </div>
          </div>
        </section>

        <Cta />
      </main>

      <Footer />
    </>
  );
}
