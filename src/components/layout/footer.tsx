import Link from "next/link";
import { BuildingMark } from "./building-mark";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="bg-eik-60 px-6 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-1">
          <span className="tag-l-bold text-white">EIK LAB</span>
          <span className="tag-xs text-white/60">
            Senter for studentinnovasjon
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="tag-m font-semibold text-white">Kajaveien 7</span>
          <span className="tag-m font-semibold text-white">1433 Ås</span>
        </div>
        <Link
          href="/kontakt"
          className="tag-m font-semibold text-white transition-colors hover:text-white/70"
        >
          Kontakt
        </Link>
        <div className="hidden shrink-0 lg:block">
          <BuildingMark className="h-[120px] w-auto opacity-40" />
        </div>
      </div>
      </div>
    </footer>
  );
}
