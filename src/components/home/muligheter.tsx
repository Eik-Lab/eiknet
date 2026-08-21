import Link from "next/link";

const muligheter = [
  {
    tittel: "Workshops",
    tekst: "Praktiske kvelder i alt fra design thinking til elektronikk — holdt av studenter og gjester.",
    href: "/arrangementer",
  },
  {
    tittel: "Mentorer",
    tekst: "Ni studentmentorer innen robotikk, data og indøk som selv har vært gjennom prosjektarbeid.",
    href: "/mentorer",
  },
  {
    tittel: "Nettverk",
    tekst: "Studenter på tvers av fag og årganger, med NMBU-miljøet rett utenfor døra.",
    href: "/om",
  },
  {
    tittel: "Finansiering",
    tekst: "Støtte til materialer og utstyr, slik at en god idé ikke stopper på budsjettet.",
    href: "/kontakt",
  },
];

export function Muligheter() {
  return (
    <ul className="border-t border-black/15">
      {muligheter.map(({ tittel, tekst, href }, i) => (
        <li key={tittel} className="border-b border-black/15">
          <Link
            href={href}
            className="group grid gap-1 px-2 py-7 transition-colors hover:bg-white sm:grid-cols-[72px_1fr_auto] sm:items-baseline sm:gap-8 lg:py-8"
          >
            <span className="text-l-italic text-storm-40 transition-colors group-hover:text-eik-60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>
              <span className="tag-l-bold text-black">{tittel}</span>
              <span className="text-s mt-1 block max-w-xl text-storm-70">
                {tekst}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="hidden text-m text-storm-40 transition-all group-hover:translate-x-1 group-hover:text-eik-60 sm:block"
            >
              &rarr;
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
