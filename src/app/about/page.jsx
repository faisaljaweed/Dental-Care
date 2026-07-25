import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Target,
  Eye,
  HeartHandshake,
  Gauge,
  ShieldCheck,
  Focus,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StatCounter from "@/components/ui/StatCounter";
import CTABanner from "@/components/layout/CTABanner";

export const metadata = {
  title: "About Us — The AI Automation Partner for Dental Practices",
  description:
    "Redix Dental builds two products for dental practices: AI dental software and Sophia, the AI receptionist. One industry, two products, and results reported in appointments and dollars.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Focus,
    title: "Two products, not twenty",
    text: "We turn down work outside our two products. Every hour we don't spend on a website build is an hour Sophia gets better at answering an insurance question.",
  },
  {
    icon: Gauge,
    title: "Outcomes over features",
    text: "We don't sell dashboards. Every month you get the appointments booked and the production attached to them, next to what you paid us.",
  },
  {
    icon: ShieldCheck,
    title: "Honest before the sale",
    text: "If your phones are already answered and your recall list is worked, we'll say so on the demo. Overpromising is how this category got its reputation.",
  },
  {
    icon: HeartHandshake,
    title: "Staff-first rollouts",
    text: "AI absorbs the overflow — the fourth call ringing at once, the 10 PM message. When the front desk wins, the rollout sticks. We design for that deliberately.",
  },
];

/* Placeholder team — client will replace with real people and photos. */
const team = [
  {
    name: "Founder & CEO",
    role: "Strategy & practice partnerships",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  },
  {
    name: "Head of AI Engineering",
    role: "Voice, conversation & PMS integrations",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    name: "Dental Operations Lead",
    role: "Ex-practice manager · trains Sophia",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
  },
  {
    name: "Head of Delivery",
    role: "Onboarding, rollout & support",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
  },
];

const stats = [
  { value: 2, suffix: "", label: "products — and nothing else" },
  { value: 6, suffix: "", label: "kinds of dental practice served" },
  { value: 48, suffix: " hrs", label: "typical time to go live" },
  { value: 100, suffix: "%", label: "dental — no other industries" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title={
          <>
            We build two things{" "}
            <span className="text-gradient">extremely well.</span>
          </>
        }
        lede="Redix Dental is an AI company with one industry, two products, and one measure of success: whether your schedule is fuller than it was before we arrived."
      />

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal>
              <div className="relative">
                <div className="relative rounded-[2rem] overflow-hidden shadow-lift aspect-[4/3]">
                  <Image
                    src="/Images/About.jpeg"
                    alt="The Redix Dental team working with a dental practice"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
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
                kicker="Our story"
                title={
                  <>
                    It started with a phone{" "}
                    <span className="text-gradient">nobody could reach.</span>
                  </>
                }
                className="mb-6"
              />
              <div className="space-y-5 text-[16px] text-muted leading-relaxed">
                <p>
                  Every practice has two front doors. One is on the street. The
                  other is the phone — and for roughly a third of the day&apos;s
                  calls, nobody is holding it open. The patient with the broken
                  crown who called at 7:40 PM didn&apos;t leave a voicemail. She
                  called the next practice on the list.
                </p>
                <p>
                  We started out building whatever dental clients asked for:
                  websites, portals, integrations, dashboards. The work was
                  fine. But the same two problems came up in every single
                  conversation — the phones nobody could answer, and the
                  questions patients asked at hours nobody worked.
                </p>
                <p>
                  So we stopped taking the other work. We put everything into
                  two products: software that runs the back office around the
                  clock, and Sophia, who talks to patients when there&apos;s
                  nobody at the desk. That focus is the whole company now, and
                  it&apos;s the reason both products are good.
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
                <span className="flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-brand-gradient text-white mb-6 shadow-glow">
                  <Target size={22} />
                </span>
                <h2 className="font-display font-semibold text-2xl text-ink mb-4">
                  Our mission
                </h2>
                <p className="text-muted leading-relaxed">
                  Make sure no dental practice loses a patient because the phone
                  rang at the wrong moment — or because a question went
                  unanswered until Monday.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl bg-white border border-line shadow-soft p-10 h-full">
                <span className="flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-brand-gradient text-white mb-6 shadow-glow">
                  <Eye size={22} />
                </span>
                <h2 className="font-display font-semibold text-2xl text-ink mb-4">
                  Our vision
                </h2>
                <p className="text-muted leading-relaxed">
                  A dental industry where front desks do human work instead of
                  phone work — from the single-chair practice to the
                  200-location group.
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
            kicker="How we work"
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
                    <h3 className="font-display font-semibold text-lg text-ink mb-3">
                      {v.title}
                    </h3>
                    <p className="text-[14px] text-muted leading-relaxed">
                      {v.text}
                    </p>
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
            kicker="The team"
            title={
              <>
                Engineers who learned dentistry.{" "}
                <span className="text-gradient">Operators who learned AI.</span>
              </>
            }
            lede="A deliberately mixed team: AI engineering on one side, real dental front-office experience on the other. It's why Sophia knows what a limited exam is without being told."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <div className="group rounded-2xl overflow-hidden bg-white border border-line shadow-soft hover:shadow-lift transition-all duration-300">
                  <div className="overflow-hidden aspect-[4/5]">
                    <img
                      src={m.image}
                      alt={`Redix Dental — ${m.name}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-[15px] text-ink">
                      {m.name}
                    </h3>
                    <p className="text-[13px] text-muted mt-1">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="text-center mt-12">
              <Button
                as={Link}
                href="/demo"
                size="lg"
                rightIcon={<ArrowRight size={16} />}
              >
                Book a Demo
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
