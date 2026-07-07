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
    name: "Professor Lars Andersen",
    field: "Maskinteknikk",
    bio: "Professor ved REALTEK med lang erfaring fra produktutvikling og prototyping. Veileder flere studentteam innen hardware.",
  },
  {
    name: "Ingrid Nygaard",
    field: "Bærekraft",
    bio: "Miljørådgiver og tidligere student ved Eik Lab. Hjelper nye team med å definere problemstillinger og finne bærekraftige løsninger.",
  },
  {
    name: "Dr. Erik Solheim",
    field: "AI / Maskinlæring",
    bio: "Forsker og gründer med bakgrunn fra deep tech. Veileder studentprosjekter innen maskinlæring og dataanalyse.",
  },
  {
    name: "Mona Kvam",
    field: "Design Thinking",
    bio: "Designer og innovasjonskonsulent. Fasiliterer workshops og hjelper team med å komme fra idé til prototype.",
  },
  {
    name: "Christian Moe",
    field: "Entreprenørskap",
    bio: "Seriegründer og investor. Gir råd om forretningsutvikling, markedsføring og veien fra studentprosjekt til startup.",
  },
  {
    name: "Tone Haugen",
    field: "Bioteknologi",
    bio: "Postdoktor ved BIOVIT med forskningsinteresse innen syntetisk biologi. Veileder prosjekter i grenselandet mellom biologi og teknologi.",
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
            <h1 className="title-l mt-4 text-black">
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
                  <span className="tag-s-bold text-eik-60">
                    {mentor.field}
                  </span>
                  <h2 className="title-xs mt-2 text-black">{mentor.name}</h2>
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
