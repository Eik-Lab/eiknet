import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import styles from "./liquid-glass.module.css";

export const metadata: Metadata = {
  title: "Liquid glass-retning | Eik Lab",
  description:
    "En visuell prototype for eiklab.no med liquid glass, gradienter og mindre bildebruk.",
};

const signals = ["Idé", "Prototype", "Test", "Team"];

const cards = [
  {
    title: "Workshops",
    text: "Lavterskel inngang til kode, design, elektronikk og prototyping.",
    tone: styles.mint,
  },
  {
    title: "Prosjekter",
    text: "Flytende prosjektkort som føles mer som levende labstatus enn statiske artikler.",
    tone: styles.orange,
  },
  {
    title: "Samarbeid",
    text: "Glassflater kan gjøre partnerinnhold tydelig uten at siden blir corporate.",
    tone: styles.blue,
  },
];

const flow = [
  "Kom inn",
  "Finn folk",
  "Bygg noe",
  "Vis frem",
];

export default function LiquidGlassPage() {
  return (
    <>
      <Header />
      <main className={`${styles.page} flex-1`}>
        <section className={styles.hero}>
          <div className={styles.mesh} aria-hidden="true" />
          <div className={styles.orbOne} aria-hidden="true" />
          <div className={styles.orbTwo} aria-hidden="true" />

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className="tag-s-bold uppercase tracking-wide text-eik-60">
                Eik Lab uten store bilder
              </p>
              <h1 className={styles.heroTitle}>
                Liquid glass for ideer i bevegelse.
              </h1>
              <p className="text-xl mt-7 max-w-2xl text-storm-70">
                En retning der siden føles levende gjennom gradienter,
                glasspaneler, statuskort og små flytende signaler. Mer digital
                lab, mindre tradisjonell fotoside.
              </p>
              <div className={styles.ctaRow}>
                <a className={styles.primaryButton} href="#system">
                  Se systemet
                </a>
                <a className={styles.secondaryButton} href="#sections">
                  Utforsk uttrykket
                </a>
              </div>
            </div>

            <div className={styles.heroPanel}>
              <div className={styles.glassHeader}>
                <span>Eik Lab OS</span>
                <span>live prototype</span>
              </div>
              <div className={styles.signalMap}>
                {signals.map((signal, index) => (
                  <div
                    key={signal}
                    className={styles.signalChip}
                    style={{ "--chip-index": index } as React.CSSProperties}
                  >
                    <span />
                    {signal}
                  </div>
                ))}
                <div className={styles.connectionLine} />
                <div className={styles.prototypeCore}>
                  <span>build</span>
                  <strong>00:42</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="system" className={styles.systemSection}>
          <div className={styles.sectionIntro}>
            <p className="tag-s-bold uppercase tracking-wide text-klementin-50">
              Visuell retning
            </p>
            <h2 className={styles.sectionTitle}>
              Glass, gradients og struktur nok til at det fortsatt føles Eik.
            </h2>
          </div>

          <div className={styles.cardGrid}>
            {cards.map((card) => (
              <article key={card.title} className={`${styles.glassCard} ${card.tone}`}>
                <span className={styles.cardGlow} />
                <p className="tag-xs-bold uppercase tracking-wide text-storm-60">
                  modul
                </p>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="sections" className={styles.darkSection}>
          <div className={styles.darkCopy}>
            <p className="tag-s-bold uppercase tracking-wide text-eik-10">
              Scrollytelling
            </p>
            <h2 className={styles.darkTitle}>
              En flytende lab-benk kan erstatte klassisk hero-bilde.
            </h2>
            <p className="text-l mt-6 text-eik-5">
              I stedet for ett stort foto kan forsiden bruke et glasslag som
              viser prosessen: komme inn, finne folk, bygge noe og vise det
              frem.
            </p>
          </div>

          <div className={styles.flowBoard}>
            <div className={styles.flowTrack} />
            {flow.map((step, index) => (
              <div
                key={step}
                className={styles.flowStep}
                style={{ "--flow-index": index } as React.CSSProperties}
              >
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.showcaseSection}>
          <div className={styles.wideGlass}>
            <div>
              <p className="tag-s-bold uppercase tracking-wide text-eik-60">
                Første viewport
              </p>
              <h2>
                Mindre foto, mer produktfølelse.
              </h2>
              <p>
                Dette kan gi eiklab.no et mer distinkt webuttrykk: store ord,
                glasskort, prosjektstatus og gradienter som beveger seg rolig.
              </p>
            </div>
            <div className={styles.miniDashboard}>
              <div className={styles.metric}>
                <span>aktive ideer</span>
                <strong>18</strong>
              </div>
              <div className={styles.metric}>
                <span>åpen lab</span>
                <strong>tors</strong>
              </div>
              <div className={styles.metric}>
                <span>neste steg</span>
                <strong>test</strong>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
