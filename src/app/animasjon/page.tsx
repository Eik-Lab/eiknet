import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import styles from "./animasjon.module.css";

export const metadata: Metadata = {
  title: "Animasjonsforslag | Eik Lab",
  description:
    "Forslag til GSAP- og Motion-effekter for en varm, levende Eik Lab-nettside.",
};

const animationConcepts = [
  {
    title: "Fra idé til prototype",
    label: "Hero signatur",
    stack: "GSAP timeline",
    color: "bg-eik-50",
    description:
      "Heroen starter med løse begreper som idé, problem og test. Ved scroll samles de til en konkret prototype og ender i CTA-en Bli med.",
    details: [
      "Animer store ord, koblingslinjer og små lab-elementer inn i ett system.",
      "Bruk én kontrollert timeline på forsiden, ikke mange konkurrerende effekter.",
      "På mobil kjøres dette som en kort intro uten scroll-scrub.",
    ],
  },
  {
    title: "Pinned lab-benk",
    label: "Scrollytelling",
    stack: "GSAP ScrollTrigger",
    color: "bg-solgul-40",
    description:
      "En seksjon låses mens brukeren scroller gjennom stegene: kom med nysgjerrighet, bygg en prototype, test og vis frem.",
    details: [
      "Pin kun på desktop/tablet for å unngå tung mobilopplevelse.",
      "La scrollen drive fremdriften med scrub, men behold normal sideflyt etter seksjonen.",
      "Bruk Eik-farger som statuspunkter fremfor generisk tech-glow.",
    ],
  },
  {
    title: "Prosjektkort som våkner",
    label: "Case-visning",
    stack: "GSAP batch",
    color: "bg-klementin-50",
    description:
      "Sensorita, Soundsensing og LiTech kan komme inn som lapper på en labvegg, med små løft, tagger og koblinger når de blir synlige.",
    details: [
      "Batch inn kortene for ytelse og konsistent timing.",
      "Bruk subtile rotasjoner og skygger for fysisk verkstedfølelse.",
      "Hold hover-effektene tilgjengelige og rolige.",
    ],
  },
  {
    title: "Knapper og mikrointeraksjoner",
    label: "UI-polish",
    stack: "Motion eller CSS",
    color: "bg-hav-60",
    description:
      "Små reaksjoner på CTA-er, kort og mobilmeny gjør siden mer levende uten å stjele oppmerksomheten fra innholdet.",
    details: [
      "Motion passer godt til state-baserte hover/tap-effekter i React.",
      "CSS holder for enkle farge-, skygge- og transform-overganger.",
      "Alle interaksjoner må respektere prefers-reduced-motion.",
    ],
  },
];

const roadmap = [
  "Bygg statisk side og layout først.",
  "Legg på GSAP hero-intro som første signatur.",
  "Utvid med pinned lab-benk når innholdet er låst.",
  "Legg på mikrointeraksjoner til slutt.",
];

function HeroTimelinePreview() {
  return (
    <div className={`${styles.previewStage} ${styles.heroPreview}`}>
      <div className={styles.heroWordCloud} aria-hidden="true">
        <span>idé</span>
        <span>problem</span>
        <span>test</span>
        <span>prototype</span>
      </div>
      <div className={styles.prototypeBoard}>
        <span className={styles.boardLine} />
        <span className={styles.boardNode} />
        <span className={styles.boardNode} />
        <span className={styles.boardNode} />
        <strong>Bli med</strong>
      </div>
    </div>
  );
}

function LabBenchPreview() {
  return (
    <div className={`${styles.previewStage} ${styles.benchPreview}`}>
      <div className={styles.benchRail} aria-hidden="true" />
      {["Nysgjerrighet", "Prototype", "Testing", "Fellesskap"].map(
        (step, index) => (
          <div
            key={step}
            className={styles.benchStep}
            style={{ "--step-index": index } as React.CSSProperties}
          >
            <span>{index + 1}</span>
            <strong>{step}</strong>
          </div>
        ),
      )}
    </div>
  );
}

function ProjectCardsPreview() {
  return (
    <div className={`${styles.previewStage} ${styles.cardsPreview}`}>
      {["Sensorita", "Soundsensing", "LiTech"].map((project, index) => (
        <div
          key={project}
          className={styles.wakeCard}
          style={{ "--card-index": index } as React.CSSProperties}
        >
          <span>{index === 0 ? "Miljø" : index === 1 ? "Sensor" : "Deep tech"}</span>
          <strong>{project}</strong>
        </div>
      ))}
    </div>
  );
}

function MicroInteractionsPreview() {
  return (
    <div className={`${styles.previewStage} ${styles.microPreview}`}>
      <button className={styles.motionButton}>Bli med</button>
      <div className={styles.motionCard}>
        <span />
        <strong>Hover, tap og fokus</strong>
      </div>
    </div>
  );
}

function ConceptPreview({ title }: { title: string }) {
  if (title === "Fra idé til prototype") return <HeroTimelinePreview />;
  if (title === "Pinned lab-benk") return <LabBenchPreview />;
  if (title === "Prosjektkort som våkner") return <ProjectCardsPreview />;
  return <MicroInteractionsPreview />;
}

export default function AnimationPage() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-hidden">
        <section className="bg-krem px-6 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="tag-s-bold uppercase tracking-wide text-eik-60">
                GSAP / Motion-retning
              </p>
              <h1 className="mt-5 max-w-4xl font-sans text-5xl font-black leading-[0.98] text-black sm:text-7xl">
                Levende lab-benk, ikke flashy tech-demo.
              </h1>
              <p className="text-xl mt-7 max-w-2xl text-storm-70">
                Målet er at animasjonene skal forklare Eik Lab: folk kommer
                inn med nysgjerrighet, bygger noe konkret, tester det og finner
                et miljø rundt ideen.
              </p>
            </div>

            <div className="rounded-3xl bg-eik-5 p-6 shadow-l">
              <HeroTimelinePreview />
              <div className="rounded-2xl bg-white p-5 shadow-s">
                <p className="tag-s-bold text-eik-70">Anbefalt stack</p>
                <div className="mt-5 grid gap-3">
                  {["GSAP til scroll og timelines", "Motion/CSS til microinteractions", "Reduced motion som standard hensyn"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-eik-10 bg-krem px-4 py-3"
                      >
                        <span className="h-3 w-3 rounded-full bg-eik-50" />
                        <span className="tag-s text-black">{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-18">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="tag-s-bold uppercase tracking-wide text-klementin-50">
                  Konsepter
                </p>
                <h2 className="mt-3 font-sans text-4xl font-bold text-black sm:text-5xl">
                  Fire effekter som faktisk passer Eik Lab
                </h2>
              </div>
              <p className="text-m max-w-md text-storm-70">
                Start med én sterk signatur. Resten skal støtte innholdet, ikke
                gjøre siden tyngre enn den trenger å være.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {animationConcepts.map((concept) => (
                <article
                  key={concept.title}
                  className="rounded-3xl border border-eik-10 bg-krem p-6 shadow-s"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="tag-xs-bold uppercase tracking-wide text-storm-60">
                        {concept.label}
                      </p>
                      <h3 className="mt-3 font-sans text-3xl font-bold text-black">
                        {concept.title}
                      </h3>
                    </div>
                    <span
                      className={`h-12 w-12 shrink-0 rounded-2xl ${concept.color}`}
                    />
                  </div>
                  <p className="text-m mt-5 text-storm-70">
                    {concept.description}
                  </p>
                  <div className="mt-6">
                    <ConceptPreview title={concept.title} />
                  </div>
                  <p className="tag-s-bold mt-6 text-eik-70">
                    {concept.stack}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {concept.details.map((detail) => (
                      <li key={detail} className="text-s flex gap-3 text-storm-70">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-eik-50" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-eik-80 px-6 py-20 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="tag-s-bold uppercase tracking-wide text-eik-10">
                Scrollfortelling
              </p>
              <h2 className="mt-4 font-sans text-4xl font-bold sm:text-5xl">
                Slik kan lab-benken bevege seg
              </h2>
              <p className="text-l mt-6 text-eik-5">
                Denne sekvensen er best som GSAP ScrollTrigger på desktop:
                rolig, forklarende og tydelig knyttet til Eik Labs arbeidsform.
              </p>
            </div>

            <div className="rounded-3xl bg-eik-90 p-6 shadow-xl">
              <div className="relative grid gap-4">
                {["Nysgjerrighet", "Prototype", "Testing", "Fellesskap"].map(
                  (step, index) => (
                    <div
                      key={step}
                      className="relative flex items-center gap-4 rounded-2xl bg-krem p-4 text-black"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-eik-50 font-sans text-lg font-bold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <p className="tag-m-bold">{step}</p>
                        <p className="text-s text-storm-70">
                          {index === 0 && "Brukeren scroller inn i historien."}
                          {index === 1 && "Elementer samles til noe konkret."}
                          {index === 2 && "Linjer, punkter og kort kobles sammen."}
                          {index === 3 && "CTA-en får mening: Bli med."}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-krem px-6 py-18">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-s">
              <p className="tag-s-bold uppercase tracking-wide text-eik-60">
                Implementeringsrekkefølge
              </p>
              <ol className="mt-6 space-y-4">
                {roadmap.map((item, index) => (
                  <li key={item} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-eik-70 font-sans text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-m text-storm-70">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl bg-solgul-5 p-8 shadow-s">
              <p className="tag-s-bold uppercase tracking-wide text-klementin-50">
                Prinsipper
              </p>
              <h2 className="mt-4 font-sans text-4xl font-bold text-black">
                Kul betyr kontrollert.
              </h2>
              <p className="text-l mt-5 text-storm-70">
                Animasjonene bør føles som prototyping og skaperglede. De skal
                aldri gjøre innholdet vanskeligere å lese, og mobilopplevelsen
                bør være lettere enn desktop-opplevelsen.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
