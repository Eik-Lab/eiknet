import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Reveal } from "@/components/animations/reveal";
import { mentorer } from "@/lib/mentorer";

export const metadata: Metadata = {
  title: "Mentorer | Eik Lab",
  description:
    "Mentorer og veiledere ved Eik Lab — fagpersoner fra akademia og næringsliv som støtter studentenes innovasjonsprosjekter.",
};

export default function MentorerPage() {
  const mentors = mentorer;
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-eik-5 to-krem px-6 pt-36 pb-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="tag-s-bold uppercase tracking-widest text-black/60">
              Mentorer
            </p>
            <h1 className="title-xs mt-4 text-black sm:title-s lg:title-l">
              Veiledere fra akademia og næringsliv
            </h1>
            <p className="text-xl mt-6 max-w-2xl text-storm-70">
              Våre mentorer gir deg faglig spissing, praktisk erfaring og
              nettverket du trenger for å lykkes med prosjektet ditt.
            </p>
          </div>
        </section>

        <section className="bg-krem px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <Reveal
              stagger={0.08}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {mentors.map((mentor) => (
                <article
                  key={mentor.name}
                  className="bg-white p-8 shadow-s"
                >
                  <div className="mb-5 h-16 w-16 rounded-full bg-eik-5" />
                  <a
                    href={mentor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag-s-bold text-eik-60 underline-offset-2 hover:underline"
                  >
                    {mentor.field}
                  </a>
                  <h2 className="text-l-bold mt-2 text-black lg:title-xs">{mentor.name}</h2>
                  <p className="text-m mt-3 text-storm-70">{mentor.bio}</p>
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
