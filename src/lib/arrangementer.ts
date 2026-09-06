import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ArrangementType =
  | "Workshop"
  | "Forelesning"
  | "Hackathon"
  | "Presentasjon";

export type PameldingStatus = "kommer" | "åpen" | "drop-in" | "stengt";

export interface ArrangementFrontmatter {
  title: string;
  date: string;
  time: string;
  type: ArrangementType;
  slug: string;
  ingress: string;
  facebookUrl?: string;
  pameldingStatus: PameldingStatus;
  pameldingUrl?: string;
}

export interface Arrangement extends ArrangementFrontmatter {
  content: string;
}

export interface PameldingVisning {
  tekst: string;
  url?: string;
  aktiv: boolean;
}

const contentDir = path.join(process.cwd(), "src/content/arrangementer");

const maaneder = [
  "jan",
  "feb",
  "mar",
  "apr",
  "mai",
  "jun",
  "jul",
  "aug",
  "sep",
  "okt",
  "nov",
  "des",
] as const;

const isoDatoMonster = /^(\d{4})-(\d{2})-(\d{2})$/;

/** Deler en ISO-dato inn i deler for magasin-stil datovisning. */
export function parseDato(dato: string): {
  dag: string;
  maaned: string;
  aar: string;
} | null {
  const parts = dato.match(isoDatoMonster);
  if (!parts) return null;
  const aar = Number.parseInt(parts[1]);
  const maaned = Number.parseInt(parts[2]);
  const dag = Number.parseInt(parts[3]);
  const kontroll = new Date(Date.UTC(aar, maaned - 1, dag));

  if (
    kontroll.getUTCFullYear() !== aar ||
    kontroll.getUTCMonth() !== maaned - 1 ||
    kontroll.getUTCDate() !== dag
  ) {
    return null;
  }

  return {
    dag: String(dag),
    maaned: maaneder[maaned - 1],
    aar: String(aar),
  };
}

/** Formaterer en gyldig ISO-dato som «15. sep 2026». */
export function formaterDato(dato: string): string {
  const parsed = parseDato(dato);
  if (!parsed) return dato;
  return `${parsed.dag}. ${parsed.maaned} ${parsed.aar}`;
}

/** Gir kalenderdatoen i Oslo som ISO-dato, uavhengig av serverens tidssone. */
export function osloDato(referansetid: Date = new Date()): string {
  const deler = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Oslo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(referansetid);
  const verdi = Object.fromEntries(deler.map((del) => [del.type, del.value]));
  return `${verdi.year}-${verdi.month}-${verdi.day}`;
}

function validerArrangement(arrangement: Arrangement): Arrangement {
  if (!parseDato(arrangement.date)) {
    throw new Error(
      `Ugyldig arrangementsdato for "${arrangement.slug}": bruk YYYY-MM-DD.`
    );
  }
  if (arrangement.pameldingStatus === "åpen" && !arrangement.pameldingUrl) {
    throw new Error(
      `Arrangementet "${arrangement.slug}" må ha pameldingUrl når påmeldingen er åpen.`
    );
  }
  return arrangement;
}

export function getAllArrangementer(): Arrangement[] {
  const filer = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

  return filer
    .map((fil) => {
      const raw = fs.readFileSync(path.join(contentDir, fil), "utf-8");
      const { data, content } = matter(raw);
      return validerArrangement({
        ...(data as ArrangementFrontmatter),
        content,
      } as Arrangement);
    })
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getKommendeArrangementer(
  referansetid: Date = new Date()
): Arrangement[] {
  const iDag = osloDato(referansetid);
  return getAllArrangementer().filter((arrangement) => arrangement.date >= iDag);
}

export function getTidligereArrangementer(
  referansetid: Date = new Date()
): Arrangement[] {
  const iDag = osloDato(referansetid);
  return getAllArrangementer()
    .filter((arrangement) => arrangement.date < iDag)
    .reverse();
}

export function erTidligereArrangement(
  arrangement: Pick<Arrangement, "date">,
  referansetid: Date = new Date()
): boolean {
  return arrangement.date < osloDato(referansetid);
}

export function getPameldingVisning(
  arrangement: Pick<
    Arrangement,
    "date" | "pameldingStatus" | "pameldingUrl"
  >,
  referansetid: Date = new Date()
): PameldingVisning {
  if (erTidligereArrangement(arrangement, referansetid)) {
    return { tekst: "Arrangementet er gjennomført", aktiv: false };
  }

  switch (arrangement.pameldingStatus) {
    case "åpen":
      return {
        tekst: "Meld deg på",
        url: arrangement.pameldingUrl,
        aktiv: true,
      };
    case "drop-in":
      return { tekst: "Drop-in – ingen påmelding", aktiv: false };
    case "stengt":
      return { tekst: "Påmeldingen er stengt", aktiv: false };
    case "kommer":
      return { tekst: "Påmelding kommer", aktiv: false };
  }
}

export function getArrangement(slug: string): Arrangement | undefined {
  return getAllArrangementer().find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return getAllArrangementer().map((a) => a.slug);
}
