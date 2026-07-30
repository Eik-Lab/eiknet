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

export function getAllArrangementer(): Arrangement[] {
  const filer = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

  return filer
    .map((fil) => {
      const raw = fs.readFileSync(path.join(contentDir, fil), "utf-8");
      const { data, content } = matter(raw);
      return { ...(data as ArrangementFrontmatter), content } as Arrangement;
    })
    .sort((a, b) => {
      const parseDate = (d: string) => {
        const parts = d.match(/(\d+)\.\s*(\w+)\s*(\d{4})?/);
        if (!parts) return 0;
        const months: Record<string, number> = {
          jan: 1, feb: 2, mar: 3, apr: 4, mai: 5, jun: 6,
          jul: 7, aug: 8, sep: 9, okt: 10, nov: 11, des: 12,
        };
        const dag = Number.parseInt(parts[1]);
        const maned = months[parts[2].toLowerCase()] || 0;
        const ar = parts[3] ? Number.parseInt(parts[3]) : 2026;
        return ar * 10000 + maned * 100 + dag;
      };
      return parseDate(a.date) - parseDate(b.date);
    });
}

export function getArrangement(slug: string): Arrangement | undefined {
  return getAllArrangementer().find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return getAllArrangementer().map((a) => a.slug);
}
