import Link from "next/link";
import { ArrowRight, Target, Eye, HeartHandshake, Gauge, ShieldCheck, Users } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StatCounter from "@/components/ui/StatCounter";
import CTABanner from "@/components/layout/CTABanner";

export const metadata = {
  title: "About Us",
  description:
    "Redix Dental is the AI & automation agency built exclusively for dental businesses — clinics, groups, DSOs, ortho, cosmetic, and labs.",
};

const values = [
  {
    icon: Gauge,
    title: "Outcomes Over Features",
    text: "We don't sell dashboards; we sell recovered revenue and returned hours. Every system we ship reports the number it moved.",
  },
  {
    icon: ShieldCheck,
    title: "Honest by Default",
    text: "If automation won't pay for itself in your practice, we'll say so in the audit. Overpromising is how this industry got so skeptical.",
  },
  {
    icon: HeartHandshake,
    title: "Staff-First Rollouts",
    text: "AI that absorbs overflow, never replaces people. When the front desk wins, the rollout succeeds — we design for that on purpose.",
  },
  {
    icon: Users,
    title: "Dental-Only Focus",
    text: "Same six segments, every day. We already speak PMS, recall, production, and RCM — you never have to translate your business for us.",
  },
];

/* Placeholder team — client will replace with real people & photos. */
const team = [
  {
    name: "Founder & CEO",
    role: "Strategy & Client Partnerships",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  },
  {
    name: "Head of AI Engineering",
    role: "Voice AI & Integrations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    name: "Dental Operations Lead",
    role: "Ex-practice manager, workflow design",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
  },
  {
    name: "Head of Delivery",
    role: "Implementation & Support",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
  },
];

const stats = [
  { value: 9, suffix: "", label: "dental-specific AI services" },
  { value: 6, suffix: "", label: "dental segments served" },
  { value: 48, suffix: " hrs", label: "typical deployment time" },
  { value: 100, suffix: "%", label: "dental — no other industries" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title={
          <>
            We exist because dental businesses lose money{" "}
            <span className="text-gradient">they already earned.</span>
          </>
        }
        lede="Redix Dental is an AI & automation agency with one industry, one obsession, and one measure of success: the revenue our systems recover for dental businesses."
      />

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal>
              <div className="relative">
                <div className="rounded-[2rem] overflow-hidden shadow-lift">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                    alt="The Redix Dental team at work"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl bg-brand-gradient opacity-15 -z-10"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <SectionHeading
                kicker="Our Story"
                title={
                  <>
                    Born from a simple observation at a{" "}
                    <span className="text-gradient">front desk.</span>
                  </>
                }
                className="mb-6"
              />
              <div className="space-y-5 text-[16px] text-muted leading-relaxed">
                <p>
                  Every dental practice has two front doors. One is on the street.
                  The other is the phone — and for a third of the day&apos;s calls,
                  nobody is holding it open. The patient with the broken crown who
                  called at 7:40 PM didn&apos;t leave a voicemail; she called the next
                  practice on the list.
                </p>
                <p>
                  We watched brilliant clinical teams lose six figures a year to
                  missed calls, no-shows, silent recall lists, and denied claims —
                  not because anyone was failing, but because front desks are doing
                  five jobs at once and hiring a sixth person stopped being possible
                  years ago.
                </p>
                <p>
                  So we built the agency we couldn&apos;t find: engineers and
                  ex-practice operators who build AI systems for dentistry only —
                  and report their results in dollars, next to the invoice, every
                  month.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 lg:py-24 bg-ice">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="rounded-2xl bg-white border border-line shadow-soft p-10 h-full">
                <span className="flex items-center justify-center w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-brand-gradient text-white mb-6 shadow-glow">
                  <Target size={22} />
                </span>
                <h2 className="font-display font-semibold text-2xl text-ink mb-4">Our Mission</h2>
                <p className="text-muted leading-relaxed">
                  Make sure no dental business ever loses money it already earned —
                  by automating every leak between a patient&apos;s intent and a
                  filled chair.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl bg-white border border-line shadow-soft p-10 h-full">
                <span className="flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-brand-gradient text-white mb-6 shadow-glow">
                  <Eye size={22} />
                </span>
                <h2 className="font-display font-semibold text-2xl text-ink mb-4">Our Vision</h2>
                <p className="text-muted leading-relaxed">
                  A dental industry where every call is answered, every chair is
                  full, and front-desk teams do human work — not phone work — from
                  the solo clinic to the 200-location DSO.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionHeading
            align="center"
            kicker="Our Values"
            title={
              <>
                The rules we don&apos;t break{" "}
                <span className="text-gradient">for any client.</span>
              </>
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 90}>
                  <div className="rounded-2xl border border-line bg-white p-8 h-full shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-mint text-teal mb-5">
                      <Icon size={21} />
                    </span>
                    <h3 className="font-display font-semibold text-lg text-ink mb-3">{v.title}</h3>
                    <p className="text-[14px] text-muted leading-relaxed">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 bg-ink-band">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div>
                  <StatCounter
                    value={s.value}
                    suffix={s.suffix}
                    className="font-display font-bold text-4xl lg:text-5xl text-gradient block mb-2"
                  />
                  <span className="text-white/60 text-sm">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-ice">
        <Container>
          <SectionHeading
            align="center"
            kicker="The Team"
            title={
              <>
                Engineers who learned dentistry.{" "}
                <span className="text-gradient">Operators who learned AI.</span>
              </>
            }
            lede="A deliberately mixed team: AI engineering on one side, real dental front-office experience on the other. That's why our systems fit the workflow instead of fighting it."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <div className="group rounded-2xl overflow-hidden bg-white border border-line shadow-soft hover:shadow-lift transition-all duration-300">
                  <div className="overflow-hidden aspect-[4/5]">
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-[15px] text-ink">{m.name}</h3>
                    <p className="text-[13px] text-muted mt-1">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="text-center mt-12">
              <Button as={Link} href="/contact" size="lg" rightIcon={<ArrowRight size={16} />}>
                Work With Us
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
