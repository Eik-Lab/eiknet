export interface Mentor {
  name: string;
  field: string;
  url: string;
  bio: string;
}

export const mentorer: Mentor[] = [
  {
    name: "Håkon Bekken",
    field: "Anvendt robotikk - Robotdesign",
    url: "https://www.nmbu.no/studier/master-5-aar/anvendt-robotikk",
    bio: "Student ved NMBU med fokus på robotdesign og CAD. Jobber med å gjøre robotteknologi tilgjengelig for studentprosjekter på tvers av fagfelt.",
  },
  {
    name: "Jørgen Asmundvaag",
    field: "Anvendt robotikk - Robotprogrammering",
    url: "https://www.nmbu.no/studier/master-5-aar/anvendt-robotikk",
    bio: "Student og designinteressert. Bistår prosjekter med mekatronikk, UI og UX.",
  },
  {
    name: "Ludvik Høibjerg-Aslaksen",
    field: "Anvendt robotikk - Robotprogrammering",
    url: "https://www.nmbu.no/studier/master-5-aar/anvendt-robotikk",
    bio: "Engasjert i robotikk og elektronikk. Veileder studenter innen maskinlæring for robotstyring og prototyping.",
  },
  {
    name: "Christopher Ljosland Strand",
    field: "Anvendt robotikk - Robotprogrammering",
    url: "https://www.nmbu.no/studier/master-5-aar/anvendt-robotikk",
    bio: "Student med lidenskap for robotikk og programmering. Hjelper andre studenter med å komme i gang med hardware-prosjekter og robotplattformer.",
  },
  {
    name: "Frederic Ljosland Strand",
    field: "Anvendt robotikk - Robotprogrammering",
    url: "https://www.nmbu.no/studier/master-5-aar/anvendt-robotikk",
    bio: "Studentmedarbeider med erfaring innen robotikk og systemintegrasjon. Veileder prosjekter fra idé til fungerende prototype.",
  },
  {
    name: "Ivar Eftedal",
    field: "Indøk data",
    url: "https://www.nmbu.no/studier/master-5-aar/industriell-okonomi",
    bio: "Industriell økonomi-student med interesse for forretningsutvikling og innovasjonsledelse. Hjelper team med å strukturere prosjektene sine.",
  },
  {
    name: "Sania Minaipour",
    field: "Indøk data",
    url: "https://www.nmbu.no/studier/master-5-aar/industriell-okonomi",
    bio: "Student i industriell økonomi. Bistår med forretningsmodellering, markedsanalyse og prosjektstyring.",
  },
  {
    name: "Milad Tootoonchi",
    field: "Datavitenskap",
    url: "https://www.nmbu.no/studier/master-5-aar/datavitenskap",
    bio: "Datavitenskapsstudent med kompetanse innen maskinlæring, dataanalyse og fintech. Veileder team som trenger teknisk spissing.",
  },
  {
    name: "Victor Moneta",
    field: "Indøk maskin",
    url: "https://www.nmbu.no/studier/master-5-aar/industriell-okonomi",
    bio: "Indøk-student med erfaring fra CAD og studententreprenørskap. Hjelper team med å validere idéer og finne veien til markedet.",
  },
];

const mentorNavn = new Set(mentorer.map((m) => m.name));

/**
 * Resolver prosjektets mentor-navn mot den kjente mentor-lista. Ukjente navn
 * beholdes slik de står, men logger et tydelig varsel om mulig stavefeil.
 */
export function validerMentorer(navn: string[]): string[] {
  for (const n of navn) {
    if (!mentorNavn.has(n)) {
      console.warn(`Ukjent mentornavn i prosjekt-frontmatter: "${n}"`);
    }
  }
  return navn;
}
