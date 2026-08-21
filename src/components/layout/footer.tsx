import Link from "next/link";
import { BuildingMark } from "./building-mark";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/15">
      <div className="px-6 py-12 lg:px-16 lg:py-14">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
          <div>
            <p className="tag-m-bold text-black">EIK LAB</p>
            <p className="text-s mt-1 text-storm-60">
              Senter for studentinnovasjon ved NMBU
            </p>
          </div>
          <div>
            <p className="kicker text-black/40">Besøksadresse</p>
            <address className="text-s mt-2 not-italic text-storm-70">
              TF2-204, Kajaveien 7
              <br />
              1433 Ås
            </address>
          </div>
          <div>
            <p className="kicker text-black/40">Kontakt</p>
            <a
              href="mailto:eiklab@nmbu.no"
              className="text-s mt-2 block text-storm-70 underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
            >
              eiklab@nmbu.no
            </a>
            <Link
              href="/kontakt"
              className="text-s mt-1 block text-storm-70 underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
            >
              Kontakt siden
            </Link>
          </div>
          <div className="hidden shrink-0 lg:block">
            <BuildingMark className="h-[88px] w-auto opacity-30" />
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-baseline justify-between gap-x-6 border-t border-black/10 pt-4">
          <p className="text-xs-italic text-storm-50">
            Drevet av studenter ved NMBU.
          </p>
          <p className="text-xs text-storm-50">
            &copy; {new Date().getFullYear()} Eik Lab
          </p>
        </div>
      </div>
    </footer>
  );
}
