import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { directions } from "./directions";
import styles from "./designretninger.module.css";

export const metadata: Metadata = {
  title: "Designretninger | Eik Lab",
  description:
    "Sammenlign flere visuelle retninger for ny eiklab.no.",
};

const cardGradients = [
  "radial-gradient(circle at 35% 12%, rgba(0,154,129,.32), transparent 14rem), linear-gradient(135deg, rgba(13,26,24,.1), rgba(0,106,150,.12))",
  "radial-gradient(circle at 72% 10%, rgba(232,161,60,.34), transparent 14rem), linear-gradient(135deg, rgba(247,244,239,.8), rgba(251,230,220,.5))",
  "radial-gradient(circle at 54% 18%, rgba(59,122,79,.28), transparent 14rem), linear-gradient(135deg, rgba(212,238,234,.7), rgba(247,244,239,.86))",
  "radial-gradient(circle at 70% 12%, rgba(232,102,46,.3), transparent 14rem), linear-gradient(135deg, rgba(250,236,216,.74), rgba(236,229,239,.52))",
];

export default function DesignDirectionsPage() {
  return (
    <>
      <Header />
      <main className={`${styles.indexPage} flex-1`}>
        <section className={styles.indexHero}>
          <div className={styles.indexWrap}>
            <p className="tag-s-bold uppercase tracking-wide text-eik-60">
              Sammenligning
            </p>
            <h1 className={styles.indexTitle}>Fire mulige veier for Eik Lab.</h1>
            <p className={styles.indexLead}>
              Klikk deg inn i hver retning for å kjenne på uttrykket. Målet er
              ikke at én er fasit, men at det blir lettere å velge hva vi vil
              blande videre.
            </p>
          </div>
        </section>

        <section className={styles.directionGrid}>
          {directions.map((direction, index) => (
            <Link
              key={direction.slug}
              href={`/designretninger/${direction.slug}`}
              className={styles.directionCard}
              style={
                {
                  "--card-gradient": cardGradients[index],
                } as React.CSSProperties
              }
            >
              <div>
                <p className="tag-xs-bold uppercase tracking-wide text-eik-70">
                  {direction.eyebrow}
                </p>
                <h2>{direction.title}</h2>
                <p>{direction.intro}</p>
                <div className={styles.paletteRow}>
                  {direction.palette.map((color) => (
                    <span
                      key={color}
                      className={styles.swatch}
                      style={{ background: color }}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.tagWrap}>
                {direction.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
