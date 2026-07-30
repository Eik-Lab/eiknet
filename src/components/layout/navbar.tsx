"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/om", label: "Om" },
  { href: "/prosjekter", label: "Prosjekter" },
  { href: "/arrangementer", label: "Arrangementer" },
  { href: "/alumni", label: "Alumni" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-[50px] bg-white px-8 py-3 shadow-s">
        <Link href="/">
          <img src="/spiregronn.svg" alt="Eik Lab" className="h-[36px] w-auto" />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`tag-m transition-colors ${
                  isActive
                    ? "font-bold text-black"
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
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>
      {mobileOpen && (
        <div className="absolute left-4 right-4 top-full mt-2 flex flex-col gap-4 rounded-3xl bg-white px-8 py-6 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="tag-m py-3 text-black/80"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
