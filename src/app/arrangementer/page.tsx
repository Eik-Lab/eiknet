import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Arrangementer | Eik Lab",
  description:
    "Kommende arrangementer ved Eik Lab — workshops, hackathons, gjesteforelesninger og åpen lab.",
};

const events = [
  {
    title: "Åpen lab — prototyping",
    date: "10. sep 2026",
    time: "14:00–17:00",
    type: "Workshop",
    description:
      "Ta med idéen din og få hjelp til å bygge en prototype. Vi har 3D-printere, loddeutstyr og veiledere på plass.",
  },
  {
    title: "Gjesteforelesning: Fra idé til marked",
    date: "18. sep 2026",
    time: "13:00–14:30",
    type: "Forelesning",
    description:
      "Tidligere Eik Lab-student og nå gründer deler sin reise fra prototype til etablert selskap.",
  },
  {
    title: "Hackathon: Bærekraftig campus",
    date: "2.–3. okt 2026",
    time: "Hele dagen",
    type: "Hackathon",
    description:
      "48 timer med intens prototyping rundt bærekraftige løsninger for campus.",
  },
  {
    title: "Workshop: Design Thinking",
    date: "12. okt 2026",
    time: "10:00–15:00",
    type: "Workshop",
    description:
      "Lær metoder for å forstå brukerbehov, idéutvikling og rask prototyping.",
  },
  {
    title: "Eik Lab Presenterer",
    date: "24. okt 2026",
    time: "17:00–19:00",
    type: "Presentasjon",
    description:
      "Høstens studentprosjekter presenteres for næringsliv, akademia og andre studenter.",
  },
  {
    title: "Åpen lab — elektronikk",
    date: "5. nov 2026",
    time: "14:00–17:00",
    type: "Workshop",
    description:
      "Fokussession på elektronikk og IoT. Lær å bruke Arduino, sensorer og kretsskjemaer.",
  },
];

const typeColors: Record<string, string> = {
  Workshop: "bg-eik-5 text-eik-70",
  Forelesning: "bg-hav-5 text-hav-70",
  Hackathon: "bg-klementin-5 text-klementin-60",
  Presentasjon: "bg-plomme-5 text-plomme-60",
};

export default function ArrangementerPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-eik-5 to-krem px-6 pt-36 pb-20">
          <div className="mx-auto max-w-6xl">
            <p className="tag-s-bold uppercase tracking-widest text-black/60">
              Arrangementer
            </p>
            <h1 className="title-l mt-4 text-black">
              Kommende arrangementer
            </h1>
            <p className="text-xl mt-6 max-w-2xl text-storm-70">
              Workshops, hackathons, gjesteforelesninger og åpen lab — det
              skjer noe på Eik Lab nesten hver uke.
            </p>
          </div>
        </section>

        <section className="bg-krem px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6">
              {events.map((event, index) => (
                <article
                  key={event.title}
                  className={`rounded-3xl bg-white p-8 shadow-s ${
                    index === 0 ? "ring-2 ring-eik-50" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`tag-s-bold rounded-full px-4 py-1.5 ${typeColors[event.type] || "bg-eik-5 text-eik-70"}`}
                        >
                          {event.type}
                        </span>
                        {index === 0 && (
                          <span className="tag-xs-bold rounded-full bg-eik-50 px-3 py-1 text-white">
                            Neste
                          </span>
                        )}
                      </div>
                      <h2 className="title-xs mt-4 text-black">
                        {event.title}
                      </h2>
                      <p className="text-m mt-3 text-storm-70">
                        {event.description}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="tag-m-bold text-eik-70">{event.date}</p>
                      <p className="tag-s text-storm-60">{event.time}</p>
                    </div>
                  </div>
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
