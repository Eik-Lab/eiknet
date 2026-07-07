import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Prosjekter | Eik Lab",
  description:
    "Utforsk studentprosjekter ved Eik Lab — fra miljøteknologi og deep tech til digitale tjenester.",
};

const projects = [
  {
    title: "Sensorita",
    tag: "Miljø",
    status: "Aktiv",
    description:
      "Sensorbasert overvåking av avfallshåndtering. Teamet har utviklet en prototype som måler fyllingsgrader i sanntid.",
  },
  {
    title: "Soundsensing",
    tag: "Sensor",
    status: "Aktiv",
    description:
      "Akustisk analyse for smarte bygg. Maskinlæringsmodeller som gjenkjenner lyder og mønstre i bygningsmiljøer.",
  },
  {
    title: "LiTech",
    tag: "Deep tech",
    status: "Prototype",
    description:
      "Neste generasjons batteriteknologi. Studentene utforsker nye materialer og produksjonsmetoder for mer bærekraftige batterier.",
  },
  {
    title: "Campus Kart",
    tag: "Digital",
    status: "Aktiv",
    description:
      "Et interaktivt kart over NMBU-campus bygget av studenter, for studenter. Inneholder ruteplanlegging og informasjon om bygg.",
  },
  {
    title: "Drivhuslab",
    tag: "Bærekraft",
    status: "Idé",
    description:
      "Automatisert drivhus for urban dyrking. Prosjektet kombinerer IoT, sensorer og bærekraftig matproduksjon.",
  },
  {
    title: "Språktrening",
    tag: "Edtech",
    status: "Prototype",
    description:
      "En app for språktrening som bruker taleanalyse for å gi tilbakemelding på uttale og flyt.",
  },
];

export default function ProsjekterPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-eik-5 to-krem px-6 pt-36 pb-20">
          <div className="mx-auto max-w-6xl">
            <p className="tag-s-bold uppercase tracking-widest text-black/60">
              Prosjekter
            </p>
            <h1 className="title-l mt-4 text-black">
              Studentdrevne innovasjonsprosjekter
            </h1>
            <p className="text-xl mt-6 max-w-2xl text-storm-70">
              Utforsk hva studenter ved Eik Lab jobber med akkurat nå.
            </p>
          </div>
        </section>

        <section className="bg-krem px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-3xl bg-white p-8 shadow-s"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="tag-s-bold rounded-full bg-eik-5 px-4 py-1.5 text-eik-70">
                      {project.tag}
                    </span>
                    <span
                      className={`tag-xs-bold rounded-full px-3 py-1 ${
                        project.status === "Aktiv"
                          ? "bg-eik-10 text-eik-70"
                          : project.status === "Prototype"
                            ? "bg-solgul-5 text-solgul-60"
                            : "bg-storm-5 text-storm-60"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h2 className="title-xs mt-6 text-black">
                    {project.title}
                  </h2>
                  <p className="text-m mt-3 text-storm-70">
                    {project.description}
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
