import Link from "next/link";

export function Cta() {
  return (
    <section className="px-6 pb-6 lg:px-16">
      <div className="mx-auto max-w-6xl overflow-hidden bg-black px-8 py-20 text-center lg:py-28">
        <p className="tag-s-bold uppercase tracking-widest text-eik-30">
          Har du en idé?
        </p>
        <h2 className="title-xs mx-auto mt-4 max-w-2xl text-white lg:title-l">
          Kom innom, bygg det — vi hjelper deg i gang.
        </h2>
        <p className="text-l mx-auto mt-6 max-w-xl text-white/70">
          Fra første skisse til fungerende prototype. Eik Lab gir deg verktøy,
          mentorer og et engasjert miljø.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/kontakt"
            className="tag-s bg-eik-50 px-8 py-3.5 font-bold text-white transition-colors hover:bg-eik-60"
          >
            Ta kontakt
          </Link>
          <Link
            href="/arrangementer"
            className="tag-s border-2 border-white/40 px-8 py-3.5 font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-black"
          >
            Se arrangementer
          </Link>
        </div>
      </div>
    </section>
  );
}
