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

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="flex w-full items-center justify-between px-6 py-4 md:px-12 lg:px-16">
        <Link href="/">
          <Image
            src="/spiregronn.svg"
            alt="Eik Lab"
            width={27}
            height={36}
            className="h-[36px] w-auto"
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
        <div className="absolute left-0 right-0 top-full flex flex-col gap-4 border-b border-black/5 bg-white/90 px-8 py-6 shadow-lg backdrop-blur-md">
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
