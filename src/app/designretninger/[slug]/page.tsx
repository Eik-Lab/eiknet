import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { directions, getDirection } from "../directions";
import styles from "../designretninger.module.css";

const styleClassBySlug: Record<string, string> = {
  "tech-gradient": styles.tech,
  "varm-lab": styles.warm,
  "nmbu-campus": styles.campus,
  "student-editorial": styles.editorial,
};

export function generateStaticParams() {
  return directions.map((direction) => ({ slug: direction.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const direction = getDirection(slug);

  if (!direction) {
    return {};
  }

  return {
    title: `${direction.title} | Eik Lab`,
    description: direction.intro,
  };
}

export default async function DirectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const direction = getDirection(slug);

  if (!direction) {
    notFound();
  }

  const pageClassName = styleClassBySlug[direction.slug];

  return (
    <>
      <Header />
      <main className={`${styles.directionPage} ${pageClassName} flex-1`}>
        <section className={styles.directionHero}>
          <div className={styles.directionWrap}>
            <div>
              <p className="tag-s-bold uppercase tracking-wide text-eik-60">
                {direction.eyebrow}
              </p>
              <h1 className={styles.directionTitle}>{direction.headline}</h1>
              <p className={`${styles.directionIntro} text-xl mt-7 max-w-2xl`}>
                {direction.intro}
              </p>
              <div className={styles.tagWrap}>
                {direction.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.directionPreview}>
              <div className={styles.previewNav}>
                <span>Eik Lab</span>
                <span>{direction.title}</span>
              </div>
              <div className={styles.previewCore}>
                <div className={styles.previewPanel}>
                  <h2>{direction.title}</h2>
                  <p>{direction.mood}</p>
                </div>
              </div>
              <span className={styles.floatingChip}>{direction.tags[0]}</span>
              <span className={styles.floatingChip}>{direction.tags[1]}</span>
              <span className={styles.floatingChip}>{direction.tags[2]}</span>
            </div>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.contentGrid}>
            <aside className={styles.notes}>
              <h2>Når passer denne?</h2>
              <dl>
                <div>
                  <dt>Best for</dt>
                  <dd>{direction.bestFor}</dd>
                </div>
                <div>
                  <dt>Risiko</dt>
                  <dd>{direction.risk}</dd>
                </div>
                <div>
                  <dt>Følelse</dt>
                  <dd>{direction.mood}</dd>
                </div>
              </dl>
              <div className={styles.paletteRow}>
                {direction.palette.map((color) => (
                  <span
                    key={color}
                    className={styles.swatch}
                    style={{ background: color }}
                  />
                ))}
              </div>
            </aside>

            <div className={styles.moduleGrid}>
              {direction.modules.map((module) => (
                <article key={module.title} className={styles.moduleCard}>
                  <h3>{module.title}</h3>
                  <p>{module.text}</p>
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
