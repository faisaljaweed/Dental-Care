import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { Logo } from "@/components/layout/Navbar";
import { services } from "@/lib/data/services";
import { SITE } from "@/lib/site";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const socials = [
  { Icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
  { Icon: Instagram, href: SITE.socials.instagram, label: "Instagram" },
  { Icon: Facebook, href: SITE.socials.facebook, label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-band text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-12 py-16 lg:py-20">
          {/* Brand */}
          <div>
            <Logo light />
            <p className="text-white/60 text-[15px] leading-relaxed mt-5 mb-7 max-w-sm">
              The AI &amp; automation agency built exclusively for dental businesses.
              We answer every call, fill every chair, and recover the revenue your
              practice already earns.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white/70 hover:bg-brand-gradient hover:border-transparent hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-base mb-5">Services</h3>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/55 hover:text-teal-light text-sm transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-teal-light text-sm font-semibold"
                >
                  All services <ArrowRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-base mb-5">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/55 hover:text-teal-light text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-base mb-5">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a href={SITE.phoneHref} className="flex items-start gap-3 text-white/60 hover:text-white text-sm transition-colors">
                  <Phone size={15} className="text-teal-light mt-0.5 shrink-0" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 text-white/60 hover:text-white text-sm transition-colors">
                  <Mail size={15} className="text-teal-light mt-0.5 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={15} className="text-teal-light mt-0.5 shrink-0" />
                {SITE.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-7 border-t border-white/10">
          <span className="text-white/40 text-sm">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span className="text-white/40 text-sm">
            HIPAA-conscious builds · BAA available for every engagement
          </span>
        </div>
      </Container>
    </footer>
  );
}
