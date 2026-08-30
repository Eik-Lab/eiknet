import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ArrangementType =
  | "Workshop"
  | "Forelesning"
  | "Hackathon"
  | "Presentasjon";

export interface ArrangementFrontmatter {
  title: string;
  date: string;
  time: string;
  type: ArrangementType;
  slug: string;
  ingress: string;
  facebookUrl?: string;
  pameldingUrl?: string;
}

export interface Arrangement extends ArrangementFrontmatter {
  content: string;
}

const contentDir = path.join(process.cwd(), "src/content/arrangementer");

/** Deler «2. okt 2026» inn i deler for magasin-stil datovisning. */
export function parseDato(dato: string): {
  dag: string;
  maaned: string;
  aar?: string;
} | null {
  const parts = dato.match(/(\d+)\.\s*(\w+)\s*(\d{4})?/);
  if (!parts) return null;
  return { dag: parts[1], maaned: parts[2].toLowerCase(), aar: parts[3] };
}

function tilSorterbarDato(d: string): number {
  const parsed = parseDato(d);
  if (!parsed) return 0;
  const months: Record<string, number> = {
    jan: 1, feb: 2, mar: 3, apr: 4, mai: 5, jun: 6,
    jul: 7, aug: 8, sep: 9, okt: 10, nov: 11, des: 12,
  };
  const maned = months[parsed.maaned] || 0;
  const ar = parsed.aar
    ? Number.parseInt(parsed.aar)
    : new Date().getFullYear();
  return ar * 10000 + maned * 100 + Number.parseInt(parsed.dag);
}

export function getAllArrangementer(): Arrangement[] {
  const filer = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

  return filer
    .map((fil) => {
      const raw = fs.readFileSync(path.join(contentDir, fil), "utf-8");
      const { data, content } = matter(raw);
      return { ...(data as ArrangementFrontmatter), content } as Arrangement;
    })
    .sort(
      (a, b) => tilSorterbarDato(a.date) - tilSorterbarDato(b.date)
    );
}

export function getArrangement(slug: string): Arrangement | undefined {
  return getAllArrangementer().find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return getAllArrangementer().map((a) => a.slug);
}
