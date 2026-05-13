"use client";

import { useEffect, useState } from "react";
import { whatsappUrl, defaultConciergeMessage } from "@/lib/site";
import { cn } from "@/lib/cn";

// Editorial floating concierge access — never reads as a sales widget.
// Appears on scroll, stays quiet, links to WhatsApp with a hospitality-coded prefilled message.
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl(defaultConciergeMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Speak with the Alpha Tours concierge on WhatsApp"
      className={cn(
        "fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 group",
        "transition-all duration-700 ease-editorial",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none",
      )}
    >
      <span
        className={cn(
          "flex items-center gap-3 pl-5 pr-6 py-3.5 rounded-full",
          "bg-emerald text-ivory-light border border-gold/40",
          "shadow-[0_18px_40px_-12px_rgba(10,42,32,0.55)]",
          "hover:bg-emerald-deep hover:border-gold transition-colors duration-500 ease-editorial",
        )}
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="currentColor"
          className="text-gold-soft"
        >
          <path d="M19.11 4.91A10.94 10.94 0 0 0 12 2.05a10.94 10.94 0 0 0-9.34 16.55L2 22l3.55-.62a10.94 10.94 0 0 0 5.23 1.34h.01A10.94 10.94 0 0 0 22 11.78a10.86 10.86 0 0 0-2.89-6.87Zm-7.32 16.05h-.01a8.94 8.94 0 0 1-4.55-1.25l-.33-.19-2.11.37.4-2.06-.21-.34a8.94 8.94 0 1 1 16.59-4.71 8.86 8.86 0 0 1-9.78 8.18Zm5.06-6.7c-.27-.13-1.6-.79-1.85-.88s-.43-.13-.61.14-.7.88-.86 1.06-.32.2-.59.07a7.27 7.27 0 0 1-2.14-1.32 8.04 8.04 0 0 1-1.48-1.84c-.16-.27 0-.41.12-.55s.27-.32.4-.48.18-.27.27-.45a.5.5 0 0 0 0-.47c-.07-.13-.61-1.46-.83-2s-.45-.45-.61-.46h-.52a1 1 0 0 0-.73.34 3.07 3.07 0 0 0-1 2.27 5.34 5.34 0 0 0 1.12 2.83 12.35 12.35 0 0 0 4.72 4.16 5.92 5.92 0 0 0 1.59.51 3.86 3.86 0 0 0 1.74-.07 2.83 2.83 0 0 0 1.85-1.31 2.25 2.25 0 0 0 .16-1.31c-.06-.11-.24-.17-.51-.3Z" />
        </svg>
        <span className="text-xs uppercase tracking-widest font-medium">
          Speak with the Concierge
        </span>
      </span>
    </a>
  );
}
