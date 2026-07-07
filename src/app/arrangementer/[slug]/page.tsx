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

const typeColors: Record<string, string> = {
  Workshop: "bg-eik-5 text-eik-70",
  Forelesning: "bg-hav-5 text-hav-70",
  Hackathon: "bg-klementin-5 text-klementin-60",
  Presentasjon: "bg-plomme-5 text-plomme-60",
};

export default async function ArrangementSide({ params }: Props) {
  const { slug } = await params;
  const arr = getArrangement(slug);

  if (!arr) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-eik-5 to-krem px-6 pt-36 pb-20">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/arrangementer"
              className="tag-s text-black/60 hover:text-black transition-colors"
            >
              ← Tilbake til arrangementer
            </Link>
            <div className="flex items-center gap-3 mt-6">
              <span
                className={`tag-s-bold rounded-full px-4 py-1.5 ${typeColors[arr.type] || "bg-eik-5 text-eik-70"}`}
              >
                {arr.type}
              </span>
            </div>
            <h1 className="title-xs mt-6 text-black lg:title-m">
              {arr.title}
            </h1>
            <p className="text-xl mt-4 text-storm-70">{arr.ingress}</p>

            <div className="flex flex-wrap gap-6 mt-8">
              <div>
                <p className="tag-xs font-bold uppercase tracking-wider text-black/50">
                  Dato
                </p>
                <p className="tag-m-bold text-black mt-1">{arr.date}</p>
              </div>
              <div>
                <p className="tag-xs font-bold uppercase tracking-wider text-black/50">
                  Tid
                </p>
                <p className="tag-m-bold text-black mt-1">{arr.time}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {arr.pameldingUrl && (
                <a
                  href={arr.pameldingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-eik-50 px-8 py-3.5 tag-s-bold text-white shadow-m transition-transform hover:scale-105"
                >
                  Meld deg på
                </a>
              )}
              {arr.facebookUrl && (
                <a
                  href={arr.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border-2 border-black px-8 py-3.5 tag-s-bold text-black transition-colors hover:bg-black hover:text-krem"
                >
                  Se på Facebook
                </a>
              )}
            </div>
          </div>
        </section>

        <section className="bg-krem px-6 py-24">
          <div className="prose prose-lg mx-auto max-w-3xl prose-headings:font-sans prose-headings:text-black prose-headings:mt-10 prose-headings:mb-4 prose-p:text-storm-70 prose-p:leading-relaxed prose-ul:text-storm-70 prose-li:leading-relaxed">
            <ReactMarkdown>{arr.content}</ReactMarkdown>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
