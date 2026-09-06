import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { getAllAlumni } from "@/lib/alumni";

export const metadata: Metadata = {
  title: "Alumni",
  alternates: { canonical: "/alumni" },
  description:
    "Tidligere prosjekter fra Eik Lab som har blitt til egne bedrifter.",
};

export default function AlumniPage() {
  const alumni = getAllAlumni();

  return (
    <>
      <Header />
      <main id="hovedinnhold" className="flex-1">
        <section className="px-6 pt-36 lg:px-16">
          <div className="mx-auto max-w-6xl">
            {/* <p className="kicker text-black/50">Alumni</p> */}
            <h1 className="title-xs mt-4 max-w-3xl text-black sm:title-s lg:title-l">
              Fra studentprosjekt til selskap
            </h1>
            <p className="text-xl mt-6 max-w-2xl pb-10 text-storm-70 border-b border-black/15 lg:text-xxl">
              Flere studenter har startet egne, vellykkede bedrifter hos oss. For eksempel Sensorita, Soundsensing og LiTech, som alle bruker banebrytende teknologi til å løse store miljø- og samfunnsmessige utfordringer. Hvis du har en god idé, kan du også få mulighet til å utvikle den som en del av masteroppgaven din. 
            </p>
          </div>
        </section>

        <section className="px-6 py-14 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <ul>
              {alumni.map((a) => (
                <li
                  key={a.slug}
                  className="border-b border-black/15 first:border-t"
                >
                  <article className="grid gap-x-8 gap-y-2 px-2 py-8 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div>
                      <p className="kicker text-black/40">{a.tag}</p>
                      <h2 className="text-xl-bold mt-2 text-black lg:text-xxl-bold">
                        {a.spinOff}
                      </h2>
                      {/* <p className="text-s mt-2 text-storm-50">
                        Startet som prosjektet &laquo;{a.title}&raquo; på Eik
                        Lab.
                      </p> */}
                      <p className="text-m mt-3 max-w-2xl text-storm-70">
                        {a.ingress}
                      </p>
                    </div>
                    {a.url ? (
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tag-s-bold justify-self-start text-eik-60 underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-70 sm:justify-self-end"
                      >
                        Besøk {a.spinOff} &rarr;
                      </a>
                    ) : (
                      <span className="tag-s-bold justify-self-start text-storm-40 sm:justify-self-end">
                        {a.spinOff}
                      </span>
                    )}
                  </article>
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
