"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/om", label: "Om" },
  { href: "/prosjekter", label: "Prosjekter" },
  { href: "/arrangementer", label: "Arrangementer" },
  { href: "/alumni", label: "Alumni" },
  { href: "/mentorer", label: "Mentorer" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar({ transparent }: { transparent: boolean }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="flex w-full items-center justify-between px-6 py-4 md:px-12 lg:px-16">
        <Link href="/" aria-label="Eik Lab, forsiden">
          <Image
            src="/spiregronn.svg"
            alt=""
            width={27}
            height={36}
            className={`h-[36px] w-auto transition-[filter] duration-300 ${
              transparent ? "brightness-0 invert" : ""
            }`}
            priority
          />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`tag-m transition-colors ${
                  transparent
                    ? isActive
                      ? "font-bold text-white underline decoration-eik-50 decoration-2 underline-offset-8"
                      : "text-white/70 hover:text-white"
                    : isActive
                      ? "font-bold text-black underline decoration-eik-50 decoration-2 underline-offset-8"
                      : "text-black/60 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <button
          className="flex flex-col gap-1.5 p-3 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-6 transition-transform ${
              transparent ? "bg-white" : "bg-black"
            } ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-opacity ${
              transparent ? "bg-white" : "bg-black"
            } ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-transform ${
              transparent ? "bg-white" : "bg-black"
            } ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full flex flex-col border-b border-black/15 bg-krem">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`tag-m border-t border-black/10 px-6 py-4 first:border-t-0 ${
                  isActive ? "font-bold text-black" : "text-storm-70"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
