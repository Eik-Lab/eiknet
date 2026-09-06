import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import {
  getKommendeArrangementer,
  getTidligereArrangementer,
  parseDato,
} from "@/lib/arrangementer";
import Link from "next/link";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Arrangementer",
  alternates: { canonical: "/arrangementer" },
  description:
    "Kommende arrangementer ved Eik Lab: workshops, hackathons, gjesteforelesninger og åpen lab.",
};

export default function ArrangementerPage() {
  const kommende = getKommendeArrangementer();
  const tidligere = getTidligereArrangementer();

  return (
    <>
      <Header />
      <main id="hovedinnhold" className="flex-1">
        <section className="px-6 pt-36 lg:px-16">
          <div className="mx-auto max-w-6xl">
            {/* <p className="kicker text-black/50">Arrangementer</p> */}
            <h1 className="title-xs mt-4 max-w-3xl text-black sm:title-s lg:title-l">
              Framover
            </h1>
            <p className="text-xl mt-6 max-w-2xl pb-10 text-storm-70 border-b border-black/15 lg:text-xxl">
              Vi har workshops, prosjekter og åpne dager. Se hva som skjer på Eik Lab!
            </p>
          </div>
        </section>

        <section className="px-6 py-14 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            {kommende.length === 0 ? (
              <p className="text-s-italic text-storm-50">
                Ingen planlagte ennå. Følg med, eller send oss en mail.
              </p>
            ) : (
              <ul>
                {kommende.map((arr, index) => {
                  const dato = parseDato(arr.date);
                  return (
                    <li
                      key={arr.slug}
                      className="border-b border-black/15 first:border-t"
                    >
                      <Link
                        href={`/arrangementer/${arr.slug}`}
                        className="group grid gap-x-8 gap-y-1 px-2 py-7 transition-colors hover:bg-white sm:grid-cols-[110px_1fr_auto] sm:items-baseline"
                      >
                        {dato ? (
                          <span className="flex items-baseline gap-2 sm:flex-col sm:items-start sm:gap-0.5">
                            <span className="text-xl-bold tabular-nums leading-none text-black">
                              {index === 0 && (
                                <span
                                  aria-hidden="true"
                                  className="mr-2 inline-block h-2 w-2 rounded-full bg-eik-50 align-middle"
                                  title="Neste arrangement"
                                />
                              )}
                              {dato.dag}.
                            </span>
                            <span className="kicker uppercase text-black/50">
                              {dato.maaned}
                              {dato.aar ? ` ${dato.aar}` : ""}
                            </span>
                          </span>
                        ) : (
                          <span className="tag-m-bold text-black">{arr.date}</span>
                        )}
                        <span>
                          <span className="text-l-bold block text-black transition-colors group-hover:text-eik-60">
                            {arr.title}
                          </span>
                          <span className="text-s mt-1 block max-w-2xl text-storm-70">
                            {arr.ingress}
                          </span>
                          <span className="kicker mt-2 block tabular-nums text-black/40">
                            {arr.type} &middot; {arr.time}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className="hidden text-l text-storm-40 transition-all group-hover:translate-x-1 group-hover:text-eik-60 sm:block"
                        >
                          &rarr;
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}

            {tidligere.length > 0 && (
              <section className="mt-20" aria-labelledby="tidligere-arrangementer">
                <h2
                  id="tidligere-arrangementer"
                  className="title-xs border-y border-black/15 py-4 text-black sm:title-s"
                >
                  Gjennomført
                </h2>
                <ul>
                  {tidligere.map((arr) => {
                    const dato = parseDato(arr.date);
                    return (
                      <li
                        key={arr.slug}
                        className="border-b border-black/15"
                      >
                        <Link
                          href={`/arrangementer/${arr.slug}`}
                          className="group grid gap-x-8 gap-y-1 px-2 py-7 transition-colors hover:bg-white sm:grid-cols-[110px_1fr_auto] sm:items-baseline"
                        >
                          <span className="tag-m-bold text-storm-50">
                            {dato
                              ? `${dato.dag}. ${dato.maaned} ${dato.aar}`
                              : arr.date}
                          </span>
                          <span>
                            <span className="text-l-bold block text-storm-70 transition-colors group-hover:text-eik-60">
                              {arr.title}
                            </span>
                            <span className="kicker mt-2 block text-black/40">
                              {arr.type} &middot; Gjennomført
                            </span>
                          </span>
                          <span
                            aria-hidden="true"
                            className="hidden text-l text-storm-40 transition-all group-hover:translate-x-1 group-hover:text-eik-60 sm:block"
                          >
                            &rarr;
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
