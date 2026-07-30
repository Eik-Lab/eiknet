import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllSlugs, getProsjekt } from "@/lib/prosjekter";
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
  const prosjekt = getProsjekt(slug);
  if (!prosjekt) return {};
  return {
    title: `${prosjekt.title} | Eik Lab`,
    description: prosjekt.ingress,
  };
}

const statusStyles: Record<string, string> = {
  Aktiv: "bg-eik-10 text-eik-70",
  Prototype: "bg-solgul-5 text-solgul-60",
  Idé: "bg-storm-5 text-storm-60",
};

export default async function ProsjektSide({ params }: Props) {
  const { slug } = await params;
  const prosjekt = getProsjekt(slug);

  if (!prosjekt) notFound();

  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-hidden">
        <section className="bg-gradient-to-b from-eik-5 to-krem px-6 pt-36 pb-20">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/prosjekter"
              className="tag-s text-black/60 hover:text-black transition-colors"
            >
              ← Tilbake til prosjekter
            </Link>
            <div className="flex items-center gap-3 mt-6">
              <span className="tag-s-bold rounded-full bg-eik-5 px-4 py-1.5 text-eik-70">
                {prosjekt.tag}
              </span>
              <span
                className={`tag-xs-bold rounded-full px-3 py-1 ${statusStyles[prosjekt.status] || "bg-storm-5 text-storm-60"}`}
              >
                {prosjekt.status}
              </span>
            </div>
            <h1 className="title-xs mt-6 text-black lg:title-m">
              {prosjekt.title}
            </h1>
            <p className="text-xl mt-4 text-storm-70">{prosjekt.ingress}</p>
            {prosjekt.mentorer && prosjekt.mentorer.length > 0 && (
              <p className="tag-s mt-6 text-storm-60">
                Mentorer: {prosjekt.mentorer.join(", ")}
              </p>
            )}
          </div>
        </section>

        <section className="bg-krem px-6 py-24">
          <div className="prose prose-lg mx-auto max-w-3xl prose-headings:font-sans prose-headings:text-black prose-headings:mt-10 prose-headings:mb-4 prose-p:text-storm-70 prose-p:leading-relaxed prose-ul:text-storm-70 prose-li:leading-relaxed">
            <ReactMarkdown>{prosjekt.content}</ReactMarkdown>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
