import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Reveal } from "@/components/animations/reveal";
import { getAllProsjekter } from "@/lib/prosjekter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prosjekter | Eik Lab",
  description:
    "Utforsk studentprosjekter ved Eik Lab — fra miljøteknologi og deep tech til digitale tjenester.",
};

const statusStyles: Record<string, string> = {
  Aktiv: "bg-eik-10 text-eik-70",
  Prototype: "bg-solgul-5 text-solgul-60",
  Idé: "bg-storm-5 text-storm-60",
};

export default function ProsjekterPage() {
  const prosjekter = getAllProsjekter();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-eik-5 to-krem px-6 pt-36 pb-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="tag-s-bold uppercase tracking-widest text-black/60">
                Prosjekter
              </p>
              <h1 className="title-xs mt-4 text-black sm:title-s lg:title-l">
                Studentdrevne innovasjonsprosjekter
              </h1>
              <p className="text-xl mt-6 max-w-2xl text-storm-70">
                Utforsk hva studenter ved Eik Lab jobber med akkurat nå.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-krem px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <Reveal
              stagger={0.08}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {prosjekter.map((prosjekt) => (
                <Link
                  key={prosjekt.slug}
                  href={`/prosjekter/${prosjekt.slug}`}
                  className="group bg-white p-8 shadow-s transition-all hover:-translate-y-1 hover:shadow-m"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="tag-s-bold rounded-full bg-eik-5 px-4 py-1.5 text-eik-70">
                      {prosjekt.tag}
                    </span>
                    <span
                      className={`tag-xs-bold rounded-full px-3 py-1 ${statusStyles[prosjekt.status] || "bg-storm-5 text-storm-60"}`}
                    >
                      {prosjekt.status}
                    </span>
                  </div>
                  <h2 className="text-l-bold mt-6 text-black transition-colors group-hover:text-eik-50 lg:title-xs">
                    {prosjekt.title}
                  </h2>
                  <p className="text-m mt-3 text-storm-70">
                    {prosjekt.ingress}
                  </p>
                  {prosjekt.mentorer && prosjekt.mentorer.length > 0 && (
                    <p className="tag-xs mt-4 text-storm-50">
                      Mentorer: {prosjekt.mentorer.join(", ")}
                    </p>
                  )}
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
