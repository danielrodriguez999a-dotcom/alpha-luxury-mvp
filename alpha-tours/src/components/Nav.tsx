"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { WhatsAppCTA } from "./WhatsAppCTA";

const navLinks = [
  { href: "/collections/tables-of-bogota", label: "Tables of Bogotá" },
  { href: "/collections/cocktail-hours", label: "Cocktail Hours" },
  { href: "/collections/executive-concierge", label: "Executive" },
  { href: "/notebook", label: "Notebook" },
  { href: "/concierge", label: "Concierge" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-editorial",
        scrolled || open
          ? "bg-ivory-light/95 backdrop-blur-md border-b border-stone/40"
          : "bg-transparent",
      )}
    >
      <div className="container-editorial flex items-center justify-between h-16 lg:h-20">
        <Link
          href="/"
          className="flex items-baseline gap-2 font-serif text-xl tracking-wide text-emerald"
          onClick={() => setOpen(false)}
        >
          <span className="font-medium">ALPHA</span>
          <span className="text-gold font-light">/</span>
          <span className="font-light">TOURS</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-charcoal/80 hover:text-emerald transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppCTA variant="ghost" label="Concierge" showArrow={false} />
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={cn(
              "block h-px w-6 bg-emerald transition-transform duration-300",
              open && "translate-y-[6px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-emerald transition-opacity duration-300",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-emerald transition-transform duration-300",
              open && "-translate-y-[6px] -rotate-45",
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-editorial",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="container-editorial flex flex-col gap-4 py-8 border-t border-stone/40 bg-ivory-light">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-emerald font-serif text-2xl"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-4">
            <WhatsAppCTA />
          </div>
        </nav>
      </div>
    </header>
  );
}
