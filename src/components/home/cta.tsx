import Link from "next/link";

export function Cta() {
  return (
    <section className="bg-black px-6 py-20 lg:px-16 lg:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="kicker text-eik-30">Har du en idé?</p>
          <h2 className="title-xs mt-4 text-white lg:title-l">
            Kom innom, bygg det.
          </h2>
          <p className="text-l mt-5 text-white/70">
            Usikker på hvor du skal starte? Kom innom på
            TF2-204, eller send en e-post, så tar vi det derfra!
          </p>
        </div>
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <Link
            href="/kontakt"
            className="tag-s-bold bg-eik-50 px-8 py-3.5 text-white transition-colors hover:bg-eik-40"
          >
            Ta kontakt
          </Link>
          <Link
            href="/arrangementer"
            className="tag-s-bold text-white underline decoration-white/40 decoration-2 underline-offset-4 transition-colors hover:decoration-white"
          >
            Se hva som skjer
          </Link>
        </div>
      </div>
    </section>
  );
}
