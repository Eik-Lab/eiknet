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
    url: "https://github.com/RealHaakon",
    bio: "Jeg kan veilede innen CAD og 3D-design, særlig i Fusion 360 og Autodesk Inventor. Jeg har også erfaring med PCB-design og kan bistå med grunnleggende utvikling og layout av kretskort. I tillegg kan jeg hjelpe med laserkutter, fra klargjøring av designfiler til praktisk bruk av maskinen, samt med prosjekter som bruker AI Fusion Kit.",
  },
  {
    name: "Jørgen Asmundvaag",
    field: "Anvendt robotikk - Robotprogrammering",
    url: "https://github.com/joasmund",
    bio: "Student og designinteressert. Bistår prosjekter med mekatronikk, UI og UX.",
  },
  {
    name: "Ludvik Høibjerg-Aslaksen",
    field: "Anvendt robotikk - Robotprogrammering",
    url: "https://github.com/LudvikHA",
    bio: "Robotikk student med spesialisering innenfor mekatronikk. Jobber mest med elektronikk, hardware, firmware og programmering innenfor ROS2.",
  },
  {
    name: "Christopher Ljosland Strand",
    field: "Anvendt robotikk - Robotprogrammering",
    url: "https://github.com/ChristopherStrand",
    bio: "Student med lidenskap for robotikk og programmering. Hjelper andre studenter med å komme i gang med hardware-prosjekter og robotplattformer.",
  },
  {
    name: "Frederic Ljosland Strand",
    field: "Anvendt robotikk - Robotprogrammering",
    url: "https://github.com/fredericstrand",
    bio: "Studerer Anvendt Robotikk med fordypning i robotprogrammering og maskinlæring, og brenner for maskinlæring/dyplæring med en spesiell interesse for maskinsyn. Ta gjerne kontakt om du har spørsmål!",
  },
  {
    name: "Ivar Eftedal",
    field: "Indøk data",
    url: "https://github.com/ioeftedal",
    bio: "Interesse innen ressurseffektiv programmering og optimalisering. Bruker nix og neovim btw.",
  },
  {
    name: "Sania Minaipour",
    field: "Indøk data",
    url: "https://github.com/Saniami",
    bio: "Student i industriell økonomi. Bistår med forretningsmodellering, markedsanalyse og prosjektstyring.",
  },
  {
    name: "Milad Tootoonchi",
    field: "Datavitenskap",
    url: "https://github.com/MiladTootoonchi",
    bio: "Datavitenskapsstudent med kompetanse innen maskinlæring, dataanalyse og fintech. Veileder team som trenger teknisk spissing.",
  },
  {
    name: "Victor Moneta",
    field: "Indøk maskin",
    url: "https://github.com/VictMo11",
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
