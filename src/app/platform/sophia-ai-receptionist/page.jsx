import {
  Globe,
  MessageSquareText,
  Instagram,
  Search,
  FileText,
  Check,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SophiaChat from "@/components/product/SophiaChat";
import FAQ from "@/components/shared/FAQ";
import CTABanner from "@/components/layout/CTABanner";
import {
  ProductHero,
  ProductStats,
  ProductIncluded,
  OtherProduct,
} from "@/components/product/ProductSections";
import { sophia, software } from "@/lib/data/products";

export const metadata = {
  title: sophia.metaTitle,
  description: sophia.metaDescription,
  alternates: { canonical: "/platform/sophia-ai-receptionist" },
  keywords: [
    "AI dental receptionist",
    "dental chatbot",
    "AI receptionist for dentists",
    "dental patient communication",
    "book dental consultations online",
    "dental AI assistant",
  ],
};

/* Where Sophia is reachable. One trained assistant, five front doors. */
const channels = [
  {
    icon: Globe,
    name: "Your website",
    text: "A chat widget styled to your practice, on every page including the treatment pages where people hesitate.",
  },
  {
    icon: Search,
    name: "Google Business",
    text: "She answers the messages that arrive straight from your map listing, where most new patients find you first.",
  },
  {
    icon: MessageSquareText,
    name: "SMS & WhatsApp",
    text: "Patients text the practice number and get a real answer instead of a 'we'll get back to you on Monday'.",
  },
  {
    icon: Instagram,
    name: "Instagram & Facebook",
    text: "Cosmetic and ortho enquiries land in DMs at midnight. Sophia replies before the patient scrolls away.",
  },
];

/* The onboarding hand-off, in plain terms. */
const trainingSteps = [
  {
    n: "01",
    title: "You send what you already have",
    text: "Treatment list, fee ranges, insurance details, cancellation policy, opening hours. Most practices email existing documents.",
  },
  {
    n: "02",
    title: "We build her answers",
    text: "We turn your material into the answers Sophia will give, in your practice's tone — including what she should refuse to answer.",
  },
  {
    n: "03",
    title: "Your office manager signs off",
    text: "Every answer is reviewed and edited before launch. Nothing reaches a patient that your team hasn't read.",
  },
  {
    n: "04",
    title: "She goes live and keeps learning",
    text: "Corrections take effect from the next conversation. We review transcripts with you every month.",
  },
];

export default function SophiaPage() {
  return (
    <>
      <ProductHero product={sophia} visual={<SophiaChat />} />
      <ProductStats product={sophia} />

      {/* What she's trained on */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionHeading
            align="center"
            kicker="What she knows"
            title={
              <>
                Trained on your practice.{" "}
                <span className="text-gradient">Not on the internet.</span>
              </>
            }
            lede="The difference between Sophia and a generic chatbot is the material behind her. She answers from your documents — and stops at their edge."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sophia.training.map(({ icon: Icon, name, text }, i) => (
              <Reveal key={name} delay={(i % 4) * 80}>
                <div className="group h-full rounded-2xl border border-line bg-white p-7 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 ease-swift">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-mint text-teal mb-5 group-hover:bg-brand-gradient group-hover:text-white transition-all duration-300">
                    <Icon size={20} strokeWidth={1.9} />
                  </span>
                  <h3 className="font-display font-semibold text-[16.5px] text-ink mb-2.5">
                    {name}
                  </h3>
                  <p className="text-[14px] text-muted leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 rounded-2xl border border-teal/25 bg-mint px-7 py-6 flex items-start gap-4 max-w-3xl mx-auto">
              <FileText size={20} className="text-teal shrink-0 mt-1" />
              <p className="text-[15px] text-ink/85 leading-relaxed">
                <strong className="font-display font-semibold">
                  She also learns what not to say.
                </strong>{" "}
                Clinical advice, diagnoses over chat, guarantees on outcomes,
                quotes outside your approved ranges — Sophia declines these and
                offers the patient a consultation instead.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Abilities */}
      <section className="py-20 lg:py-28 bg-ice">
        <Container>
          <SectionHeading
            align="center"
            kicker="What she does"
            title={
              <>
                Answers the question,{" "}
                <span className="text-gradient">then books the chair.</span>
              </>
            }
            lede="Answering isn't the point — booking is. Sophia is built to finish the conversation with an appointment on your schedule."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sophia.abilities.map(({ icon: Icon, name, text }, i) => (
              <Reveal key={name} delay={(i % 3) * 90}>
                <div className="h-full rounded-2xl bg-white border border-line p-7 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 ease-swift">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-mint text-teal mb-5">
                    <Icon size={20} strokeWidth={1.9} />
                  </span>
                  <h3 className="font-display font-semibold text-[17px] text-ink mb-2.5">
                    {name}
                  </h3>
                  <p className="text-[14.5px] text-muted leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Channels */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
            <Reveal>
              <span className="inline-flex items-center gap-2 font-display font-semibold text-[13px] uppercase tracking-[0.16em] text-teal mb-4">
                <span className="h-px w-8 bg-brand-gradient inline-block" aria-hidden="true" />
                Where she works
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-ink mb-5">
                One Sophia. Every front door.
              </h2>
              <p className="text-[16px] text-muted leading-relaxed">
                Patients don&apos;t care which channel they used — they expect
                the same answer on all of them. Sophia gives it, and every
                conversation lands in the same inbox for your team.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {channels.map(({ icon: Icon, name, text }, i) => (
                <Reveal key={name} delay={(i % 2) * 100}>
                  <div className="h-full rounded-2xl bg-ice border border-line p-7">
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white text-teal border border-line mb-5">
                      <Icon size={19} strokeWidth={1.9} />
                    </span>
                    <h3 className="font-display font-semibold text-[16px] text-ink mb-2">
                      {name}
                    </h3>
                    <p className="text-[14px] text-muted leading-relaxed">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Training process */}
      <section className="py-20 lg:py-28 bg-ink-band">
        <Container>
          <SectionHeading
            align="center"
            dark
            kicker="Getting her ready"
            title={
              <>
                A week from your documents{" "}
                <span className="text-gradient">to her first booking.</span>
              </>
            }
          />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingSteps.map((s, i) => (
              <li key={s.n} className="h-full">
                <Reveal delay={i * 100} className="h-full">
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-7">
                    <span className="data-label text-teal-light block mb-4">{s.n}</span>
                    <h3 className="font-display font-semibold text-[16.5px] text-white mb-3 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-[14px] text-white/55 leading-relaxed">{s.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={200}>
            <p className="flex items-center justify-center gap-2.5 text-white/50 text-sm mt-10">
              <Check size={16} className="text-teal-light shrink-0" />
              Signed BAA before any patient information is shared with us.
            </p>
          </Reveal>
        </Container>
      </section>

      <ProductIncluded
        product={sophia}
        note="Sophia is one price per practice — not per conversation, not per booking. Training, channel setup and monthly transcript reviews are part of it."
      />

      <FAQ
        items={sophia.faqs}
        kicker="Straight answers"
        title={
          <>
            What practices worry about{" "}
            <span className="text-gradient">before saying yes.</span>
          </>
        }
        className="py-20 lg:py-28 bg-white"
      />

      <OtherProduct product={software} />
      <CTABanner
        title="Ask Sophia something only your practice would know."
        sub="On the demo we train her on your real treatment list and fees first, then you try to catch her out. Twenty minutes, no preparation needed from your side."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Sophia — AI Dental Receptionist by Redix Dental",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description: sophia.metaDescription,
            audience: {
              "@type": "Audience",
              audienceType: "Dental practices, orthodontists and cosmetic dentists",
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </>
  );
}
