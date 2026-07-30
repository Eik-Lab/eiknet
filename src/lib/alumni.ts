import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface AlumniFrontmatter {
  title: string;
  tag: string;
  slug: string;
  ingress: string;
  spinOff: string;
}

export interface Alumni extends AlumniFrontmatter {
  content: string;
}

const contentDir = path.join(process.cwd(), "src/content/alumni");

export function getAllAlumni(): Alumni[] {
  const filer = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

  return filer
    .map((fil) => {
      const raw = fs.readFileSync(path.join(contentDir, fil), "utf-8");
      const { data, content } = matter(raw);
      return { ...(data as AlumniFrontmatter), content } as Alumni;
    })
    .sort((a, b) => a.title.localeCompare(b.title, "nb"));
}
