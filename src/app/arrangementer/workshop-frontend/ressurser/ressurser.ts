interface WorkshopRessurs {
  tittel: string;
  beskrivelse: string;
  url: string | null;
  status: "kommer" | "tilgjengelig";
}

// Legg inn URL og sett status til «tilgjengelig» når en ressurs er klar.
export const ressurser: WorkshopRessurs[] = [
  {
    tittel: "Figma-mal",
    beskrivelse: "Startdesign og eksempel du kan bruke i workshopen.",
    url: null,
    status: "kommer",
  },
  {
    tittel: "React-startprosjekt",
    beskrivelse: "GitHub-repository med React, Vite og nødvendig prosjektstruktur.",
    url: null,
    status: "kommer",
  },
  {
    tittel: "Oppgaver",
    beskrivelse: "Steg-for-steg-oppgaver fra design til fungerende nettside.",
    url: null,
    status: "kommer",
  },
  {
    tittel: "AI-prompter",
    beskrivelse: "Eksempler på hvordan du kan bruke AI til frontend-utvikling.",
    url: null,
    status: "kommer",
  },
  {
    tittel: "Presentasjon",
    beskrivelse: "Lysbildene fra workshopen.",
    url: null,
    status: "kommer",
  },
  {
    tittel: "Ferdig løsning",
    beskrivelse: "Eksempel på ferdig React-implementasjon.",
    url: null,
    status: "kommer",
  },
];
