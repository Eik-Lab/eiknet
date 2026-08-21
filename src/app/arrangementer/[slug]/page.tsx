import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllSlugs, getArrangement } from "@/lib/arrangementer";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const arr = getArrangement(slug);
  if (!arr) return {};
  return {
    title: `${arr.title} | Eik Lab`,
    description: arr.ingress,
  };
}

export default async function ArrangementSide({ params }: Props) {
  const { slug } = await params;
  const arr = getArrangement(slug);

  if (!arr) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="px-6 pt-36 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/arrangementer"
              className="text-s text-storm-50 transition-colors hover:text-black"
            >
              &larr; Alle arrangementene
            </Link>
            <p className="kicker mt-8 text-eik-60">
              {arr.type} &middot; {arr.date} &middot; {arr.time}
            </p>
            <h1 className="title-xs mt-4 text-black lg:title-m">{arr.title}</h1>
            <p className="text-xl mt-5 border-b border-black/15 pb-8 text-storm-70">
              {arr.ingress}
            </p>

            <div className="flex flex-wrap gap-4 pt-8">
              {arr.pameldingUrl && (
                <a
                  href={arr.pameldingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tag-s-bold bg-eik-50 px-8 py-3.5 text-white transition-colors hover:bg-eik-40"
                >
                  Meld deg på
                </a>
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

          <div className="prose prose-lg mx-auto max-w-3xl py-14 prose-headings:font-sans prose-headings:text-black prose-headings:mt-10 prose-headings:mb-4 prose-p:text-storm-70 prose-p:leading-relaxed prose-ul:text-storm-70 prose-li:leading-relaxed">
            <ReactMarkdown>{arr.content}</ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
