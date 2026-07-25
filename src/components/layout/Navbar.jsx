"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { products } from "@/lib/data/products";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Platform", href: "/platform", dropdown: true },
  { label: "Case Studies", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function Logo({ light = false }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Redix Dental — home">
      <span className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-brand-gradient shadow-glow">
        <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" aria-hidden="true">
          <path
            d="M12 3C8 3 5.5 5.6 5.5 9c0 2.1.8 3.4 1.3 5 .5 1.5.7 4.6 2 6.4.5.7 1.5.6 1.8-.3.4-1.3.5-3.6 1.4-3.6s1 2.3 1.4 3.6c.3.9 1.3 1 1.8.3 1.3-1.8 1.5-4.9 2-6.4.5-1.6 1.3-2.9 1.3-5C18.5 5.6 16 3 12 3z"
            fill="white"
          />
        </svg>
      </span>
      <span className={cn("font-display font-bold text-[22px] tracking-tight", light ? "text-white" : "text-ink")}>
        Redix<span className="text-gradient">Dental</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobilePlatform, setMobilePlatform] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobilePlatform(false);
  }, [pathname]);

  /* Lock body scroll while the mobile drawer is open. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-soft" : "bg-white/85 backdrop-blur-sm"
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-[76px]">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2.5 text-[15px] font-medium rounded-full transition-colors",
                      pathname.startsWith("/platform") ? "text-teal" : "text-ink/75 hover:text-teal"
                    )}
                  >
                    {link.label}
                    <ChevronDown size={15} className="transition-transform duration-200 group-hover:rotate-180" />
                  </Link>

                  {/* Two products, given room to explain themselves */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 transition-all duration-200 ease-swift">
                    <div className="w-[600px] rounded-2xl bg-white shadow-lift border border-line p-3">
                      <div className="grid grid-cols-2 gap-2">
                        {products.map((p) => (
                          <Link
                            key={p.slug}
                            href={`/platform/${p.slug}`}
                            className="rounded-xl px-5 py-4 hover:bg-mint transition-colors"
                          >
                            <span className="data-label text-teal block mb-2">{p.kicker}</span>
                            <span className="block font-display font-semibold text-[15px] text-ink leading-snug mb-1.5">
                              {p.fullName ?? p.name}
                            </span>
                            <span className="block text-[13px] text-muted leading-snug">
                              {p.tagline}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/platform"
                        className="flex items-center justify-center gap-2 rounded-xl py-3 mt-2 text-sm font-display font-semibold text-teal bg-mint/60 hover:bg-mint transition-colors"
                      >
                        Compare both products <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2.5 text-[15px] font-medium rounded-full transition-colors",
                    pathname === link.href ? "text-teal" : "text-ink/75 hover:text-teal"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-teal transition-colors"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-mint text-teal">
                <Phone size={14} />
              </span>
              {SITE.phoneDisplay}
            </a>
            <Button as={Link} href="/demo" size="sm">
              Book a Demo
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 text-ink"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-y-auto bg-white border-t border-line transition-all duration-300 ease-swift",
          open ? "max-h-[calc(100vh-76px)]" : "max-h-0 border-t-0"
        )}
      >
        <Container>
          <nav className="py-5 flex flex-col" aria-label="Mobile">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.href}>
                  <button
                    onClick={() => setMobilePlatform((s) => !s)}
                    className="w-full flex items-center justify-between py-3.5 text-[15px] font-medium text-ink"
                    aria-expanded={mobilePlatform}
                  >
                    {link.label}
                    <ChevronDown
                      size={17}
                      className={cn("transition-transform duration-200", mobilePlatform && "rotate-180")}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      mobilePlatform ? "max-h-[420px]" : "max-h-0"
                    )}
                  >
                    <div className="pb-3 pl-1 flex flex-col gap-2">
                      {products.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/platform/${p.slug}`}
                          className="rounded-xl bg-ice px-4 py-3.5"
                        >
                          <span className="block font-display font-semibold text-[14.5px] text-ink leading-snug">
                            {p.fullName ?? p.name}
                          </span>
                          <span className="block text-[13px] text-muted mt-1 leading-snug">
                            {p.tagline}
                          </span>
                        </Link>
                      ))}
                      <Link href="/platform" className="py-2 text-sm font-semibold text-teal">
                        Compare both products →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3.5 text-[15px] font-medium text-ink border-b border-line/60"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2.5 py-3.5 text-[15px] font-medium text-ink"
            >
              <Phone size={15} className="text-teal" />
              {SITE.phoneDisplay}
            </a>
            <Button as={Link} href="/demo" size="md" className="mt-4 w-full justify-center">
              Book a Demo
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
