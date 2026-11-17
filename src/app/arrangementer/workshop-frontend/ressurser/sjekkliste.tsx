"use client";

import { useState, useSyncExternalStore } from "react";

const lagringsnokkel = "eiklab-workshop-frontend-2026-sjekkliste";
const punkter = [
  { id: "figma", tekst: "Jeg har opprettet en Figma-konto." },
  { id: "vscode", tekst: "Jeg har installert VS Code." },
  { id: "node", tekst: "Jeg har installert Node.js." },
  { id: "npm", tekst: "Jeg har kontrollert at Node.js og npm fungerer." },
  { id: "ai", tekst: "Jeg har tilgang til en AI-assistent." },
  { id: "git", tekst: "Jeg har installert Git (valgfritt)." },
];

function abonner(oppdater: () => void) {
  window.addEventListener("storage", oppdater);
  return () => window.removeEventListener("storage", oppdater);
}

function lesLagret() {
  try {
    return localStorage.getItem(lagringsnokkel);
  } catch {
    return null;
  }
}

export function Sjekkliste() {
  const lagret = useSyncExternalStore(abonner, lesLagret, () => null);
  const [midlertidig, setMidlertidig] = useState<string[]>([]);
  const [lagringFeilet, setLagringFeilet] = useState(false);
  let avhuket: string[] = lagringFeilet ? midlertidig : [];

  if (lagret && !lagringFeilet) {
    try {
      const verdi: unknown = JSON.parse(lagret);
      if (Array.isArray(verdi)) {
        avhuket = punkter.filter((punkt) => verdi.includes(punkt.id)).map((punkt) => punkt.id);
      }
    } catch {
      // En ugyldig lagret verdi skal ikke hindre bruk av sjekklisten.
    }
  }

  function oppdater(id: string, valgt: boolean) {
    const neste = valgt ? [...avhuket, id] : avhuket.filter((punkt) => punkt !== id);
    setMidlertidig(neste);
    try {
      localStorage.setItem(lagringsnokkel, JSON.stringify(neste));
      setLagringFeilet(false);
      window.dispatchEvent(new Event("storage"));
    } catch {
      setLagringFeilet(true);
    }
  }

  return (
    <div className="border border-black/15 bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="tag-l-bold">Din sjekkliste</h3>
        <p className="tag-s text-storm-70" aria-live="polite">
          {avhuket.length} av {punkter.length} fullført
        </p>
      </div>
      <progress
        className="mt-4 block h-2 w-full accent-eik-60"
        value={avhuket.length}
        max={punkter.length}
        aria-label="Fremdrift i forberedelsene"
      />
      <ul className="mt-5 divide-y divide-black/10">
        {punkter.map((punkt) => (
          <li key={punkt.id}>
            <label className="text-m flex min-h-14 cursor-pointer items-start gap-4 py-4">
              <input
                type="checkbox"
                className="mt-1 h-5 w-5 shrink-0 accent-eik-60"
                checked={avhuket.includes(punkt.id)}
                onChange={(event) => oppdater(punkt.id, event.target.checked)}
              />
              {punkt.tekst}
            </label>
          </li>
        ))}
      </ul>
      <p className="text-s mt-4 text-storm-70">
        {lagringFeilet
          ? "Nettleseren tillater ikke lokal lagring. Sjekklisten fungerer fortsatt, men avhukingene forsvinner når du laster siden på nytt."
          : "Avhukingene lagres bare i denne nettleseren. Ingen innlogging er nødvendig."}
      </p>
    </div>
  );
}
