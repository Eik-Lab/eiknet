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
              Kontakt
            </Link>
          </div>
          <div className="hidden shrink-0 lg:block">
            <BuildingMark className="h-[88px] w-auto opacity-30" />
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-black/10 pt-4">
          <div className="flex items-center gap-5">
            <a
              aria-label="Eik Lab på Facebook"
              href="https://www.facebook.com/eiklab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-storm-60 transition-colors hover:text-black"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              aria-label="Eik Lab på Instagram"
              href="https://www.instagram.com/eiklab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-storm-60 transition-colors hover:text-black"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              aria-label="Eik Lab på YouTube"
              href="https://www.youtube.com/@eiklab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-storm-60 transition-colors hover:text-black"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
          </div>
          <p className="text-xs text-storm-50">
            &copy; {new Date().getFullYear()} Eik Lab
          </p>
        </div>
      </div>
    </footer>
  );
}
