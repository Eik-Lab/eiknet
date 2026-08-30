import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { mentorer } from "@/lib/mentorer";

export const metadata: Metadata = {
  title: "Mentorer",
  description:
    "Mentorer og veiledere ved Eik Lab: fagpersoner fra akademia og næringsliv som støtter studentenes innovasjonsprosjekter.",
};

export default function MentorerPage() {
  return (
    <>
      <Header />
      <main id="hovedinnhold" className="flex-1">
        <section className="px-6 pt-36 lg:px-16">
          <div className="mx-auto max-w-6xl">
            {/* <p className="kicker text-black/50">Mentorene</p> */}
            <h1 className="title-xs mt-4 max-w-3xl text-black sm:title-s lg:title-l">
              Mentorene
            </h1>
            <p className="text-xl mt-6 max-w-2xl pb-10 text-storm-70 border-b border-black/15 lg:text-xxl">
              Studenter innen robotikk, indøk og datavitenskap stiller som
              mentorer. De hjelper deg med å komme i gang, og komme deg videre 
              hvis du står fast.
            </p>
          </div>
        </section>

        <section className="px-6 py-14 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <ul>
              {mentorer.map((mentor) => (
                <li
                  key={mentor.name}
                  className="border-b border-black/15 first:border-t"
                >
                  <a
                    href={mentor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid gap-x-8 gap-y-1 px-2 py-6 transition-colors hover:bg-white sm:grid-cols-[280px_1fr_auto] sm:items-baseline"
                  >
                    <span className="text-l-bold text-black transition-colors group-hover:text-eik-60">
                      {mentor.name}
                    </span>
                    <span>
                      <span className="kicker block text-black/40">
                        {mentor.field}
                      </span>
                      <span className="text-s mt-1 block max-w-2xl text-storm-70">
                        {mentor.bio}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="hidden text-l text-storm-40 transition-all group-hover:translate-x-1 group-hover:text-eik-60 sm:block"
                    >
                      &rarr;
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-s-italic mt-8 max-w-2xl text-storm-50">
              Vil du bli mentor? Send noen linjer til{" "}
              <a
                href="mailto:eiklab@nmbu.no"
                className="underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
              >
                eiklab@nmbu.no
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
