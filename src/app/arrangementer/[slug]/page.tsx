import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Prose } from "@/components/content/prose";
import {
  formaterDato,
  getAllSlugs,
  getArrangement,
  getPameldingVisning,
} from "@/lib/arrangementer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { canonicalUrl } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const arr = getArrangement(slug);
  if (!arr) return {};
  return {
    title: arr.title,
    description: arr.ingress,
    alternates: { canonical: canonicalUrl(`/arrangementer/${arr.slug}`) },
  };
}

export default async function ArrangementSide({ params }: Props) {
  const { slug } = await params;
  const arr = getArrangement(slug);

  if (!arr) notFound();

  const pamelding = getPameldingVisning(arr);

  return (
    <>
      <Header />
      <main id="hovedinnhold" className="flex-1">
        <article className="px-6 pt-36 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/arrangementer"
              className="text-s text-storm-50 transition-colors hover:text-black"
            >
              &larr; Alle arrangementene
            </Link>
            <p className="kicker mt-8 tabular-nums text-eik-60">
              {arr.type} &middot; {formaterDato(arr.date)} &middot; {arr.time}
            </p>
            <h1 className="title-xs mt-4 text-black lg:title-m">{arr.title}</h1>
            <p className="text-xl mt-5 border-b border-black/15 pb-8 text-storm-70">
              {arr.ingress}
            </p>

            <div className="flex flex-wrap gap-4 pt-8">
              {pamelding.aktiv && pamelding.url ? (
                <a
                  href={pamelding.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tag-s-bold bg-eik-50 px-8 py-3.5 text-white transition-colors hover:bg-eik-40"
                >
                  {pamelding.tekst}
                </a>
              ) : (
                <p className="tag-s-bold border-2 border-black/15 px-8 py-3.5 text-storm-60">
                  {pamelding.tekst}
                </p>
              )}
              {arr.facebookUrl && (
                <a
                  href={arr.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tag-s-bold border-2 border-black px-8 py-3.5 text-black transition-colors hover:bg-black hover:text-krem"
                >
                  Se på Facebook
                </a>
              )}
            </div>
          </div>

          <Prose>{arr.content}</Prose>
        </article>
      </main>
      <Footer />
    </>
  );
}
