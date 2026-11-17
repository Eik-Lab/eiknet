import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Foto } from "@/components/media/foto";
import { getAllProsjekter } from "@/lib/prosjekter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prosjekter",
  alternates: { canonical: "/prosjekter" },
  description:
    "Utforsk studentprosjekter ved Eik Lab. Fra miljøteknologi og deep tech til digitale tjenester.",
};

export default function ProsjekterPage() {
  const prosjekter = getAllProsjekter();
  const [fremhevet, ...resten] = prosjekter;

  return (
    <>
      <Header />
      <main id="hovedinnhold" className="flex-1">
        <section className="px-6 pt-36 lg:px-16">
          <div className="mx-auto max-w-6xl">
            {/* <p className="kicker text-black/50">Prosjekter</p> */}
            <h1 className="title-xs mt-4 max-w-2xl text-black sm:title-s lg:title-l">
              Nåværende prosjekter
            </h1>
            <p className="text-xl mt-6 max-w-2xl pb-10 text-storm-70 border-b border-black/15 lg:text-xxl">
              EIK LAB har prosjekter innenfor mange disipliner. Ta en titt!
            </p>
          </div>
        </section>

        <section className="px-6 py-14 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <Link
              href={`/prosjekter/${fremhevet.slug}`}
              className="group grid items-center gap-8 lg:grid-cols-12"
            >
              <Foto
                navn={`prosjekt-${fremhevet.slug}`}
                alt={fremhevet.title}
                ratio="3/2"
                sizes="(min-width: 1280px) 640px, 100vw"
                className="lg:col-span-7"
              />
              <div className="lg:col-span-5">
                <p className="kicker text-eik-60">Fremhevet</p>
                <h2 className="text-xl-bold mt-3 text-black transition-colors group-hover:text-eik-60 lg:text-xxl-bold">
                  {fremhevet.title}
                </h2>
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

            <ul className="mt-16 border-t border-black/15">
              {resten.map((p, i) => (
                <li key={p.slug} className="border-b border-black/15">
                  <Link
                    href={`/prosjekter/${p.slug}`}
                    className="group grid gap-x-8 gap-y-1 px-2 py-6 transition-colors hover:bg-white sm:grid-cols-[56px_1fr_auto] sm:items-baseline"
                  >
                    <span className="text-l-italic text-storm-40 transition-colors group-hover:text-eik-60">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="text-l-bold block text-black transition-colors group-hover:text-eik-60">
                        {p.title}
                      </span>
                      <span className="text-s mt-1 block max-w-2xl text-storm-70">
                        {p.ingress}
                      </span>
                      <span className="kicker mt-2 block text-black/40">
                        {p.tag} &middot; {p.status}
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
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
