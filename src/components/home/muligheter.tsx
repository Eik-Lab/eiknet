import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import {
  IconFinansiering,
  IconMentoring,
  IconNettverk,
  IconPilHøyre,
  IconWorkshop,
} from "@/components/icons";

const muligheter = [
  {
    title: "Workshops",
    desc: "Lær nye ferdigheter fra eksperter og medstudenter.",
    icon: IconWorkshop,
    href: "/arrangementer",
  },
  {
    title: "Mentorskap",
    desc: "Få veiledning fra erfarne gründere og fagfolk.",
    icon: IconMentoring,
    href: "/mentorer",
  },
  {
    title: "Nettverk",
    desc: "Bygg relasjoner på tvers av fag og årganger.",
    icon: IconNettverk,
    href: "/om",
  },
  {
    title: "Finansiering",
    desc: "Støtte til å realisere dine idéer og prosjekter.",
    icon: IconFinansiering,
    href: "/kontakt",
  },
];

export function Muligheter() {
  return (
    <Reveal
      stagger={0.1}
      className="grid gap-px overflow-hidden border border-storm-10 bg-storm-10 shadow-s sm:grid-cols-2"
    >
      {muligheter.map(({ title, desc, icon: Icon, href }) => (
        <Link
          key={title}
          href={href}
          className="group flex flex-col items-start gap-5 bg-white p-8 transition-colors hover:bg-eik-5/60 lg:p-10"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-eik-5 text-eik-70 transition-all group-hover:bg-eik-50 group-hover:text-white">
            <Icon className="h-7 w-7" />
          </div>
          <h3 className="tag-l-bold text-black">{title}</h3>
          <p className="text-m text-storm-70">{desc}</p>
          <span className="tag-s mt-auto flex items-center gap-2 font-semibold text-eik-60">
            Les mer
            <IconPilHøyre className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </Reveal>
  );
}
