import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { getAllArrangementer } from "@/lib/arrangementer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arrangementer | Eik Lab",
  description:
    "Kommende arrangementer ved Eik Lab — workshops, hackathons, gjesteforelesninger og åpen lab.",
};

const typeColors: Record<string, string> = {
  Workshop: "bg-eik-5 text-eik-70",
  Forelesning: "bg-hav-5 text-hav-70",
  Hackathon: "bg-klementin-5 text-klementin-60",
  Presentasjon: "bg-plomme-5 text-plomme-60",
};

export default function ArrangementerPage() {
  const arrangementer = getAllArrangementer();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-eik-5 to-krem px-6 pt-36 pb-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="tag-s-bold uppercase tracking-widest text-black/60">
              Arrangementer
            </p>
            <h1 className="title-xs mt-4 text-black sm:title-s lg:title-l">
              Kommende arrangementer
            </h1>
            <p className="text-xl mt-6 max-w-2xl text-storm-70">
              Workshops, hackathons, gjesteforelesninger og åpen lab — det
              skjer noe på Eik Lab nesten hver uke.
            </p>
          </div>
        </section>

        <section className="bg-krem px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6">
              {arrangementer.map((arr, index) => (
                <Link
                  key={arr.slug}
                  href={`/arrangementer/${arr.slug}`}
                  className={`group rounded-3xl bg-white p-8 shadow-s transition-all hover:-translate-y-0.5 hover:shadow-m ${
                    index === 0 ? "ring-2 ring-eik-50" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span
                          className={`tag-s-bold rounded-full px-4 py-1.5 ${typeColors[arr.type] || "bg-eik-5 text-eik-70"}`}
                        >
                          {arr.type}
                        </span>
                        {index === 0 && (
                          <span className="tag-xs-bold rounded-full bg-eik-50 px-3 py-1 text-white">
                            Neste
                          </span>
                        )}
                      </div>
                      <h2 className="text-l-bold mt-4 text-black transition-colors group-hover:text-eik-50 lg:title-xs">
                        {arr.title}
                      </h2>
                      <p className="text-m mt-3 text-storm-70">
                        {arr.ingress}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="tag-m-bold text-eik-70">{arr.date}</p>
                      <p className="tag-s text-storm-60">{arr.time}</p>
                    </div>
                  </div>
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
