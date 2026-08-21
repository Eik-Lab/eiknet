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

export default function ArrangementerPage() {
  const arrangementer = getAllArrangementer();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="px-6 pt-36 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="kicker text-black/50">Arrangementer</p>
            <h1 className="title-xs mt-4 max-w-3xl text-black sm:title-s lg:title-l">
              Framover
            </h1>
            <p className="text-xl mt-6 max-w-2xl pb-10 text-storm-70 border-b border-black/15 lg:text-xxl">
              Workshops, hackathons og åpen lab — som regel noe å finne på
              hver uke. Meld deg på, eller bare dukk opp.
            </p>
          </div>
        </section>

        <section className="px-6 py-14 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <ul>
              {arrangementer.map((arr, index) => (
                <li key={arr.slug} className="border-b border-black/15 first:border-t">
                  <Link
                    href={`/arrangementer/${arr.slug}`}
                    className="group grid gap-x-8 gap-y-1 px-2 py-7 transition-colors hover:bg-white sm:grid-cols-[150px_1fr_auto] sm:items-baseline"
                  >
                    <span className="tag-m-bold flex items-center gap-2 text-black">
                      {index === 0 && (
                        <span
                          aria-hidden="true"
                          className="inline-block h-2 w-2 rounded-full bg-eik-50"
                          title="Neste arrangement"
                        />
                      )}
                      {arr.date}
                    </span>
                    <span>
                      <span className="text-l-bold block text-black transition-colors group-hover:text-eik-60">
                        {arr.title}
                      </span>
                      <span className="text-s mt-1 block max-w-2xl text-storm-70">
                        {arr.ingress}
                      </span>
                      <span className="kicker mt-2 block text-black/40">
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
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
