export type Direction = {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  intro: string;
  mood: string;
  bestFor: string;
  risk: string;
  palette: string[];
  tags: string[];
  modules: Array<{
    title: string;
    text: string;
  }>;
};

export const directions: Direction[] = [
  {
    slug: "tech-gradient",
    title: "Tech gradient",
    eyebrow: "Premium / digital lab",
    headline: "Eik Lab som et tydelig innovasjonsstudio.",
    intro:
      "Mørkere, mer teknologisk og mer launch-følelse. Passer hvis siden skal signalisere ambisjon, startups og digital prototyping.",
    mood: "Futuristisk, selvsikker, høy kontrast",
    bestFor: "Hero, prosjektcaser, partnerseksjoner og animert scrollytelling.",
    risk: "Kan bli for generisk tech hvis vi mister studentvarmen.",
    palette: ["#0d1a18", "#0a3a32", "#009a81", "#006a96", "#e8662e"],
    tags: ["gradient mesh", "dark hero", "node map", "launch"],
    modules: [
      {
        title: "Signalnett",
        text: "Abstrakte noder og linjer viser ideer som kobles til folk, fag og prototyper.",
      },
      {
        title: "Startup cards",
        text: "Prosjektene får mørke, glassaktige kort med tydelige statuspunkter.",
      },
      {
        title: "CTA som produkt",
        text: "Bli med-knappen føles som en aktiv handling i et system, ikke bare en lenke.",
      },
    ],
  },
  {
    slug: "varm-lab",
    title: "Varm lab",
    eyebrow: "Taktile prototyper",
    headline: "Et sted der ideer blir fysiske fort.",
    intro:
      "Krem, eikgrønn og varme aksenter. Mindre tech-show, mer arbeidsbord, notater, komponenter og lav terskel.",
    mood: "Menneskelig, praktisk, inviterende",
    bestFor: "Forside, workshops, åpen lab og rekruttering av studenter.",
    risk: "Kan bli for snilt hvis vi ikke gir typografi og moduler nok punch.",
    palette: ["#f7f4ef", "#1a2e2b", "#009a81", "#faecd8", "#e8662e"],
    tags: ["cream base", "prototype table", "warm cards", "hands-on"],
    modules: [
      {
        title: "Lab notes",
        text: "Kort og tags oppfører seg som notater på en arbeidsbenk.",
      },
      {
        title: "Workshop-flow",
        text: "Aktiviteter grupperes som praktiske innganger: lær, bygg, test.",
      },
      {
        title: "Myke illustrasjoner",
        text: "Enkle former og linjer kan erstatte store bilder uten å bli kaldt.",
      },
    ],
  },
  {
    slug: "nmbu-campus",
    title: "NMBU campus",
    eyebrow: "Ås / natur / faglighet",
    headline: "Studentinnovasjon med røtter på Ås.",
    intro:
      "Lys, grønn og mer institusjonell. Dette uttrykket gir troverdighet, bærekraft og kobling til campus uten å kopiere NMBU-brandet.",
    mood: "Rolig, akademisk, naturforankret",
    bestFor: "Samarbeid, om oss, bærekraftscaser og kontakt med eksterne aktører.",
    risk: "Kan bli for universitetsbrosjyre hvis vi bruker for lite energi og studentstemme.",
    palette: ["#f7f4ef", "#0a3a32", "#3b7a4f", "#d4eeea", "#e8a13c"],
    tags: ["campus green", "field grid", "institutional", "trust"],
    modules: [
      {
        title: "Feltmønster",
        text: "Subtile linjer inspirert av kart, jordlapper og faglige systemer.",
      },
      {
        title: "Troværdige flater",
        text: "Store, luftige seksjoner gjør innholdet lett å stole på.",
      },
      {
        title: "Grønn innovasjon",
        text: "Prosjekter kan kobles tydeligere til bærekraft, biovitenskap og samfunn.",
      },
    ],
  },
  {
    slug: "student-editorial",
    title: "Student editorial",
    eyebrow: "Energi / miljø / bevegelse",
    headline: "Studenter som bygger ting sammen.",
    intro:
      "Mer kampanje, mer magasin, mer studentmiljø. Sterk typografi, kortere copy, eventfølelse og tydelig sosial energi.",
    mood: "Uredd, sosial, leken",
    bestFor: "Workshops, events, SoMe-kampanjer og forsideseksjoner for rekruttering.",
    risk: "Kan føles mindre seriøst for næringsliv hvis vi ikke balanserer med struktur.",
    palette: ["#f7f4ef", "#1a2e2b", "#e8662e", "#e8a13c", "#90649c"],
    tags: ["editorial", "event ticker", "big type", "student pulse"],
    modules: [
      {
        title: "Event ticker",
        text: "Aktiviteter vises som levende programflate, nesten som festivalplakat.",
      },
      {
        title: "Store utsagn",
        text: "Korte, tydelige overskrifter gjør miljøet lettere å forstå raskt.",
      },
      {
        title: "Modul-collage",
        text: "Kort, tags og små statusfelt kan skape energi uten store foto.",
      },
    ],
  },
];

export function getDirection(slug: string) {
  return directions.find((direction) => direction.slug === slug);
}
