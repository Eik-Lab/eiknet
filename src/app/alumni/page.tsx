import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { getAllAlumni } from "@/lib/alumni";

export const metadata: Metadata = {
  title: "Alumni | Eik Lab",
  description:
    "Tidligere prosjekter fra Eik Lab som har blitt til egne bedrifter.",
};

export default function AlumniPage() {
  const alumni = getAllAlumni();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-eik-5 to-krem px-6 pt-36 pb-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
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
          </div>
        </section>

        <section className="bg-krem px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {alumni.map((a) => (
                <article
                  key={a.slug}
                  className="rounded-3xl bg-white p-8 shadow-s"
                >
                  <span className="tag-s-bold inline-block rounded-full bg-eik-5 px-4 py-1.5 text-eik-70">
                    {a.tag}
                  </span>
                  <h2 className="text-l-bold mt-4 text-black lg:title-xs">
                    {a.title}
                  </h2>
                  <p className="text-m mt-3 text-storm-70">{a.ingress}</p>
                  <p className="tag-s-bold mt-6 text-eik-60">
                    → {a.spinOff}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
