import Link from "next/link";
import { Foto } from "@/components/media/foto";

export function Hero() {
  return (
    <section className="relative">
      <div className="border-b border-black/15 px-6 pt-28 pb-3.5 lg:px-16">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <p className="kicker text-black/60">
            Senter for studentinnovasjon ved NMBU
          </p>
          <p className="kicker text-black/40">Campus Ås &middot; TF2-204</p>
        </div>
      </div>

      <div className="px-6 pt-10 pb-9 lg:px-16 lg:pt-14">
        <h1 className="title-xs text-black sm:title-s lg:title-xl-black">
          EIK&nbsp;LAB
        </h1>
        <div className="mt-5 flex flex-col gap-6 border-b border-black/15 pb-8 sm:flex-row sm:items-end sm:justify-between lg:mt-7">
          <p className="text-m-italic max-w-xl text-storm-70 lg:text-xl-italic">
            Studentenes verksted på campus Ås. Kom med en idé — her blir den
            skisset, prototypet og testet på ordentlig.
          </p>
          <nav
            aria-label="Hovedhandlinger"
            className="flex shrink-0 items-center gap-7"
          >
            <Link
              href="/kontakt"
              className="tag-s-bold underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
            >
              Bli med &rarr;
            </Link>
            <Link
              href="/prosjekter"
              className="tag-s-bold underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
            >
              Se prosjektene
            </Link>
          </nav>
        </div>

        <div className="pt-8">
          <Foto
            navn="hero"
            alt="Studenter i verkstedet på Eik Lab"
            ratio="16/7"
            priority
            sizes="100vw"
            plassholderTekst="studenter i arbeid på labben"
          />
          <p className="text-xs-italic mt-2.5 text-storm-50">
            Verkstedet i TF2-204 står åpent for alle studenter ved NMBU.
          </p>
        </div>
      </div>
    </section>
  );
}
