import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative atmosphere-emerald text-ivory-light">
      <div className="grain absolute inset-0" aria-hidden />
      <Container className="relative py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2 space-y-5">
            <Link
              href="/"
              className="inline-flex items-baseline gap-2 font-serif text-2xl tracking-wide"
            >
              <span className="font-medium">ALPHA</span>
              <span className="text-gold font-light">/</span>
              <span className="font-light">TOURS</span>
            </Link>
            <p className="text-ivory/75 max-w-md leading-relaxed text-[0.95rem]">
              A curated luxury hospitality ecosystem for affluent travelers in
              Bogotá and Colombia — concierge-orchestrated gastronomy,
              executive itineraries, and editorial experiences across the
              city&apos;s most refined tables.
            </p>
            <p className="text-ivory/60 text-sm leading-relaxed">
              Operated by {site.legalName}.<br />
              Operating in Colombia since {site.founded}.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="eyebrow text-gold-soft">Collections</h3>
            <ul className="space-y-2.5 text-ivory/85 text-[0.95rem]">
              <li>
                <Link
                  href="/collections/tables-of-bogota"
                  className="hover:text-gold transition-colors"
                >
                  Tables of Bogotá
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/cocktail-hours"
                  className="hover:text-gold transition-colors"
                >
                  The Cocktail Hours
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/executive-concierge"
                  className="hover:text-gold transition-colors"
                >
                  The Executive Concierge
                </Link>
              </li>
              <li>
                <Link
                  href="/notebook"
                  className="hover:text-gold transition-colors"
                >
                  The Notebook
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="eyebrow text-gold-soft">Concierge</h3>
            <ul className="space-y-2.5 text-ivory/85 text-[0.95rem]">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-gold transition-colors break-all"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsappE164}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp · {site.whatsappNumber}
                </a>
              </li>
              <li>
                <Link
                  href="/concierge"
                  className="hover:text-gold transition-colors"
                >
                  Begin a private conversation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/15 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-ivory/55">
          <div className="space-y-1">
            <p>
              {site.legalName} · RNT {site.rnt} · NIT {site.nit}
            </p>
            <p>{site.city}, {site.country}</p>
          </div>
          <p className="text-ivory/55">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
