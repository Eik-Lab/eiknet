import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { validerMentorer } from "@/lib/mentorer";

export type ProsjektStatus = "Aktiv" | "Prototype" | "Idé";

export interface ProsjektFrontmatter {
  title: string;
  tag: string;
  status: ProsjektStatus;
  fremhevet?: boolean;
  /** Vis prosjektet på landingssidens «Prosjektene»-seksjon. */
  landing?: boolean;
  slug: string;
  ingress: string;
  mentorer?: string[];
  /** Lenke til en YouTube-video som kan spilles av på prosjektsiden. */
  youtube?: string;
  /** Stier til CAD-filer (.stl/.glb/.gltf) i public/cad/, vises som 3D-visning. */
  cad?: string[];
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
      const frontmatter = data as ProsjektFrontmatter;
      if (frontmatter.mentorer) {
        validerMentorer(frontmatter.mentorer);
      }
      return { ...frontmatter, content } as Prosjekt;
    })
    .sort((a, b) => {
      // Fremhevet først (blir det store kortet), så landing-prosjekter,
      // så alfabetisk.
      if (a.fremhevet && !b.fremhevet) return -1;
      if (!a.fremhevet && b.fremhevet) return 1;
      if (a.landing && !b.landing) return -1;
      if (!a.landing && b.landing) return 1;
      return a.title.localeCompare(b.title, "nb");
    });
}

export function getProsjekt(slug: string): Prosjekt | undefined {
  return getAllProsjekter().find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return getAllProsjekter().map((p) => p.slug);
}
