import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Foto } from "@/components/media/foto";
import { getAllProsjekter, getProsjekt } from "@/lib/prosjekter";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProsjekter().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prosjekt = getProsjekt(slug);
  if (!prosjekt) return {};
  return {
    title: `${prosjekt.title} | Eik Lab`,
    description: prosjekt.ingress,
  };
}

export default async function ProsjektSide({ params }: Props) {
  const { slug } = await params;
  const prosjekter = getAllProsjekter();
  const index = prosjekter.findIndex((p) => p.slug === slug);
  const prosjekt = prosjekter[index];

  if (!prosjekt) notFound();

  const forrige = prosjekter[(index - 1 + prosjekter.length) % prosjekter.length];
  const neste = prosjekter[(index + 1) % prosjekter.length];

  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="px-6 pt-36 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/prosjekter"
              className="text-s text-storm-50 transition-colors hover:text-black"
            >
              &larr; Alle prosjektene
            </Link>
            <p className="kicker mt-8 text-eik-60">
              {prosjekt.tag} &middot; {prosjekt.status}
            </p>
            <h1 className="title-xs mt-4 text-black lg:title-m">
              {prosjekt.title}
            </h1>
            <p className="text-xl mt-5 text-storm-70">{prosjekt.ingress}</p>
            {prosjekt.mentorer && prosjekt.mentorer.length > 0 && (
              <p className="text-s mt-6 border-b border-black/15 pb-8 text-storm-50">
                Mentorer: {prosjekt.mentorer.join(", ")}
              </p>
            )}
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <Foto
              navn={`prosjekt-${prosjekt.slug}`}
              alt={prosjekt.title}
              ratio="16/9"
              priority
              plassholderTekst={`${prosjekt.title} under arbeid`}
            />
          </div>

          <div className="prose prose-lg mx-auto max-w-3xl py-14 prose-headings:font-sans prose-headings:text-black prose-headings:mt-10 prose-headings:mb-4 prose-p:text-storm-70 prose-p:leading-relaxed prose-ul:text-storm-70 prose-li:leading-relaxed">
            <ReactMarkdown>{prosjekt.content}</ReactMarkdown>
          </div>
        </article>

        <nav
          aria-label="Flere prosjekter"
          className="border-t border-black/15 px-6 py-8 lg:px-16"
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row sm:justify-between">
            <Link
              href={`/prosjekter/${forrige.slug}`}
              className="tag-s-bold text-black underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
            >
              &larr; {forrige.title}
            </Link>
            <Link
              href={`/prosjekter/${neste.slug}`}
              className="tag-s-bold text-black underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60 sm:text-right"
            >
              {neste.title} &rarr;
            </Link>
          </div>
        </nav>
      </main>
      <Footer />
    </>
  );
}
