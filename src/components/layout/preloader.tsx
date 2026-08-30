"use client";

import { useEffect, useRef } from "react";

const NOKKEL = "eik-preloader";

export function Preloader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (sessionStorage.getItem(NOKKEL)) {
      el.remove();
      return;
    }

    let avsluttet = false;

    const avslutt = () => {
      if (avsluttet || !el.isConnected) return;
      avsluttet = true;
      sessionStorage.setItem(NOKKEL, "1");
      el.classList.add("preloader-skjul");
      window.setTimeout(() => el.remove(), 550);
    };

    const sikkerhet = window.setTimeout(avslutt, 4000);
    const start = () => window.setTimeout(avslutt, 950);

    let ventPaaLoad: number | undefined;
    if (document.readyState === "complete") {
      ventPaaLoad = start();
    } else {
      window.addEventListener("load", start, { once: true });
    }

    return () => {
      window.clearTimeout(sikkerhet);
      if (ventPaaLoad) window.clearTimeout(ventPaaLoad);
      else window.removeEventListener("load", start);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="preloader-overlay fixed inset-0 z-[90] flex flex-col items-center justify-center bg-krem"
    >
      <p className="title-xs text-black sm:title-s">EIK&nbsp;LAB</p>
      <span className="preloader-linje mt-4 block h-[2px] w-40 bg-eik-50" />
    </div>
  );
}
