import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ProsjektStatus = "Aktiv" | "Prototype" | "Idé";

export interface ProsjektFrontmatter {
  title: string;
  tag: string;
  status: ProsjektStatus;
  slug: string;
  ingress: string;
}

export interface Prosjekt extends ProsjektFrontmatter {
  content: string;
}

const contentDir = path.join(process.cwd(), "src/content/prosjekter");

export function getAllProsjekter(): Prosjekt[] {
  const filer = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

  return filer
    .map((fil) => {
      const raw = fs.readFileSync(path.join(contentDir, fil), "utf-8");
      const { data, content } = matter(raw);
      return { ...(data as ProsjektFrontmatter), content } as Prosjekt;
    })
    .sort((a, b) => a.title.localeCompare(b.title, "nb"));
}

export function getProsjekt(slug: string): Prosjekt | undefined {
  return getAllProsjekter().find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return getAllProsjekter().map((p) => p.slug);
}
