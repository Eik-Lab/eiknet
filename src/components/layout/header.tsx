"use client";

import { Navbar } from "./navbar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const paScroll = () => setScrolled(window.scrollY >= 8);
    paScroll();
    window.addEventListener("scroll", paScroll, { passive: true });
    return () => window.removeEventListener("scroll", paScroll);
  }, []);

  const transparent = pathname === "/" && !scrolled;

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className={`fixed left-0 right-0 top-0 z-50 flex justify-center transition-[background-color,border-color] duration-300 ${
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-black/15 bg-krem"
      }`}
    >
      <Navbar transparent={transparent} />
    </header>
  );
}