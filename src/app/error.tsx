"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="hovedinnhold" className="flex-1 px-6 pt-36 pb-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="kicker text-black/50">Noe gikk galt</p>
        <h1 className="title-xs mt-4 max-w-3xl text-black sm:title-s lg:title-l">
          En feil oppstod
        </h1>
        <p className="text-xl mt-6 max-w-2xl border-b border-black/15 pb-10 text-storm-70 lg:text-xxl">
          Det er ikke deg, det er oss. Prøv igjen, og hold ut hvis det
          fortsatt feiler.
        </p>
        <button
          onClick={reset}
          className="tag-s-bold mt-8 bg-eik-50 px-8 py-3.5 text-white transition-colors hover:bg-eik-40"
        >
          Prøv igjen
        </button>
      </div>
    </main>
  );
}
