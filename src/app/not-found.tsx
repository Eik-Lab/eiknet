import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="hovedinnhold" className="flex-1 px-6 pt-36 pb-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="kicker text-black/50">Feil 404</p>
          <h1 className="title-xs mt-4 max-w-3xl text-black sm:title-s lg:title-l">
            Denne siden finnes ikke
          </h1>
          <p className="text-xl mt-6 max-w-2xl border-b border-black/15 pb-10 text-storm-70 lg:text-xxl">
            Muligens har den flyttet seg, muligens har den aldri eksistert.
            Slik kan det gå når studenter bygger om hele tiden.
          </p>
          <nav aria-label="Snarveier" className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href="/"
              className="tag-s-bold underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
            >
              Til forsiden
            </Link>
            <Link
              href="/prosjekter"
              className="tag-s-bold underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
            >
              Se prosjektene
            </Link>
            <Link
              href="/arrangementer"
              className="tag-s-bold underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
            >
              Se hva som skjer
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
