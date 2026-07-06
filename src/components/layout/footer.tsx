import { BuildingMark } from "./building-mark";

export function Footer() {
  return (
    <footer className="mt-auto bg-eik-90 text-krem">
      <div className="mx-auto max-w-6xl px-6 pt-16">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <p className="tag-l-bold">Eik Lab</p>
            <p className="text-s mt-2 text-krem/80">Kajaveien 7, 1433 Ås</p>
            <a
              href="mailto:post@eiklab.no"
              className="text-s text-krem/90 underline-offset-4 hover:underline"
            >
              post@eiklab.no
            </a>
          </div>
          <nav className="flex flex-col gap-1">
            <a href="#" className="tag-s text-krem/80 hover:text-krem">Om oss</a>
            <a href="#" className="tag-s text-krem/80 hover:text-krem">Prosjekter</a>
            <a href="#" className="tag-s text-krem/80 hover:text-krem">Muligheter</a>
            <a href="#" className="tag-s text-krem/80 hover:text-krem">Kontakt</a>
          </nav>
        </div>
      </div>

      {/* Bygningstegning */}
      <div className="mx-auto mt-10 max-w-4xl px-6">
        <BuildingMark className="w-full" />
      </div>

      <div className="border-t border-krem/15">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <p className="text-xs text-krem/60">
            © {new Date().getFullYear()} Eik Lab · NMBU
          </p>
        </div>
      </div>
    </footer>
  );
}
