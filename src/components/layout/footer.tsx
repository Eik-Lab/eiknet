import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 pb-6 lg:px-10">
      <div className="flex flex-col items-start justify-between gap-10 rounded-[25px] bg-eik-60 px-8 py-14 lg:flex-row lg:items-center lg:px-10 lg:py-16">
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
          <img
            src="/greyEik.svg"
            alt="Eik Lab"
            className="h-[120px] w-auto opacity-40"
          />
        </div>
      </div>
    </footer>
  );
}
