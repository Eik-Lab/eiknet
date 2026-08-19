import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Reveal } from "@/components/animations/reveal";
import { IconPilHøyre } from "@/components/icons";
import { getAllAlumni } from "@/lib/alumni";

export const metadata: Metadata = {
  title: "Alumni | Eik Lab",
  description:
    "Tidligere prosjekter fra Eik Lab som har blitt til egne bedrifter.",
};

const tagColors: Record<string, string> = {
  Miljø: "bg-eik-5 text-eik-70",
  Sensor: "bg-klementin-5 text-klementin-60",
  "Deep tech": "bg-plomme-5 text-plomme-60",
};

export default function AlumniPage() {
  const alumni = getAllAlumni();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-eik-5 to-krem px-6 pt-36 pb-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="tag-s-bold uppercase tracking-widest text-black/60">
                Alumni
              </p>
              <h1 className="title-xs mt-4 text-black sm:title-s lg:title-l">
                Fra studentprosjekt til bedrift
              </h1>
              <p className="text-xl mt-6 max-w-2xl text-storm-70">
                Flere av prosjektene som har startet på Eik Lab har vokst seg til
                egne selskaper. Her er noen av dem.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-krem px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <Reveal
              stagger={0.12}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {alumni.map((a) => (
                <article
                  key={a.slug}
                  className="group flex flex-col bg-white p-8 shadow-s transition-all duration-300 hover:-translate-y-1 hover:shadow-m"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-gradient-to-br from-eik-40 to-eik-70 text-white">
                      <span className="tag-xl-bold">{a.title.charAt(0)}</span>
                    </div>
                    <span
                      className={`tag-s-bold rounded-full px-4 py-1.5 ${tagColors[a.tag] || "bg-eik-5 text-eik-70"}`}
                    >
                      {a.tag}
                    </span>
                  </div>
                  <h2 className="title-xs mt-6 text-black">{a.title}</h2>
                  <p className="text-m mt-3 text-storm-70">{a.ingress}</p>
                  <div className="mt-auto pt-6">
                    {a.url ? (
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tag-s-bold inline-flex items-center gap-2 text-eik-60 transition-colors hover:text-eik-50"
                      >
                        {a.spinOff}
                        <IconPilHøyre className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    ) : (
                      <span className="tag-s-bold inline-flex items-center gap-2 text-eik-60">
                        {a.spinOff}
                        <IconPilHøyre className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
