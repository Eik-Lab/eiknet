import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Mentorer | Eik Lab",
  description:
    "Mentorer og veiledere ved Eik Lab — fagpersoner fra akademia og næringsliv som støtter studentenes innovasjonsprosjekter.",
};

const mentors = [
  {
    name: "Håkon Bekken",
    field: "Anvendt robotikk - Robotdesign",
    url: "https://www.nmbu.no/studier/master-5-aar/anvendt-robotikk",
    bio: "Student ved NMBU med fokus på robotdesign og CAD. Jobber med å gjøre robotteknologi tilgjengelig for studentprosjekter på tvers av fagfelt.",
  },
  {
    name: "Jørgen Asmundvaag",
    field: "Anvendt robotikk - Robotprogrammering",
    url: "https://www.nmbu.no/studier/master-5-aar/anvendt-robotikk",
    bio: "Student og robotikk-entusiast. Bistår prosjekter med mekatronikk, sensorintegrering og automasjon.",
  },
  {
    name: "Ludvik Høibjerg-Aslaksen",
    field: "Anvendt robotikk - Robotprogrammering",
    url: "https://www.nmbu.no/studier/master-5-aar/anvendt-robotikk",
    bio: "Engasjert i robotikk og elektronikk. Veileder studenter innen maskinlæring for robotstyring og prototyping.",
  },
  {
    name: "Christopher Ljosland Strand",
    field: "Anvendt robotikk - Robotprogrammering",
    url: "https://www.nmbu.no/studier/master-5-aar/anvendt-robotikk",
    bio: "Student med lidenskap for robotikk. Hjelper andre studenter med å komme i gang med hardware-prosjekter og robotplattformer.",
  },
  {
    name: "Frederic Ljosland Strand",
    field: "Anvendt robotikk - Robotprogrammering",
    url: "https://www.nmbu.no/studier/master-5-aar/anvendt-robotikk",
    bio: "Studentmedarbeider med erfaring innen robotikk og systemintegrasjon. Veileder prosjekter fra idé til fungerende prototype.",
  },
  {
    name: "Ivar Eftedal",
    field: "Indøk data",
    url: "https://www.nmbu.no/studier/master-5-aar/industriell-okonomi",
    bio: "Industriell økonomi-student med interesse for forretningsutvikling og innovasjonsledelse. Hjelper team med å strukturere prosjektene sine.",
  },
  {
    name: "Sania Minaipour",
    field: "Indøk data",
    url: "https://www.nmbu.no/studier/master-5-aar/industriell-okonomi",
    bio: "Student i industriell økonomi. Bistår med forretningsmodellering, markedsanalyse og prosjektstyring.",
  },
  {
    name: "Milad Tootoonchi",
    field: "Datavitenskap",
    url: "https://www.nmbu.no/studier/master-5-aar/datavitenskap",
    bio: "Datavitenskapsstudent med kompetanse innen maskinlæring, dataanalyse og programvareutvikling. Veileder team som trenger teknisk spissing.",
  },
  {
    name: "Victor Moneta",
    field: "Indøk maskin",
    url: "https://www.nmbu.no/studier/master-5-aar/industriell-okonomi",
    bio: "Indøk-student med erfaring fra CAD og studententreprenørskap. Hjelper team med å validere idéer og finne veien til markedet.",
  },
];

export default function MentorerPage() {
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
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mentors.map((mentor) => (
                <article
                  key={mentor.name}
                  className="rounded-3xl bg-white p-8 shadow-s"
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
