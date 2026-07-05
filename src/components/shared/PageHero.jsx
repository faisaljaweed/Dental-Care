import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";

/** Inner-page header band: dark ink gradient, breadcrumb, title, lede. */
export default function PageHero({ crumb, title, lede }) {
  return (
    <section className="relative bg-ink-band pt-40 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 w-[28rem] h-[28rem] rounded-full bg-teal/15 blur-3xl"
      />
      <Container className="relative">
        <nav className="flex items-center gap-2 text-sm text-white/50 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-teal-light transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-teal-light font-medium">{crumb}</span>
        </nav>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white max-w-3xl mb-5">{title}</h1>
        {lede && <p className="text-lg text-white/65 leading-relaxed max-w-2xl">{lede}</p>}
      </Container>
    </section>
  );
}
