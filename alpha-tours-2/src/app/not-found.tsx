import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center atmosphere-night text-ivory-light">
      <Container className="text-center">
        <p className="eyebrow text-gold-soft">404</p>
        <h1 className="mt-6 text-display-lg text-ivory-light font-light">
          That page was not found.
        </h1>
        <p className="mt-6 text-ivory/75 max-w-xl mx-auto">
          The page you are looking for may have moved, or never existed.
        </p>
        <Link
          href="/"
          className="inline-block mt-10 text-gold-soft hover:text-ivory-light uppercase tracking-widest text-sm transition-colors"
        >
          Return to the entrance →
        </Link>
      </Container>
    </section>
  );
}
