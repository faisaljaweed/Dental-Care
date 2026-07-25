import { X, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TrustBar from "@/components/home/TrustBar";
import ConsoleMock from "@/components/product/ConsoleMock";
import FAQ from "@/components/shared/FAQ";
import CTABanner from "@/components/layout/CTABanner";
import {
  ProductHero,
  ProductStats,
  ProductIncluded,
  OtherProduct,
} from "@/components/product/ProductSections";
import { software, sophia } from "@/lib/data/products";

export const metadata = {
  title: software.metaTitle,
  description: software.metaDescription,
  alternates: { canonical: "/platform/ai-dental-software" },
  keywords: [
    "AI dental software",
    "dental automation",
    "dental scheduling software",
    "dental practice AI",
    "insurance verification automation",
    "dental patient communication",
  ],
};

/* The honest before/after. Left is what a front desk actually looks like. */
const comparison = [
  {
    before: "Calls ring out during the Monday morning rush",
    after: "Every call answered in under two seconds",
  },
  {
    before: "After 5 PM, patients reach voicemail or nothing",
    after: "Booking continues through the night and weekends",
  },
  {
    before: "Eligibility checked the morning of, if there's time",
    after: "Every visit verified before the patient arrives",
  },
  {
    before: "Recall list worked whenever someone gets a spare hour",
    after: "Worked continuously, with rebookings reported weekly",
  },
  {
    before: "Denials discovered weeks later in the aging report",
    after: "Claims corrected before they're ever submitted",
  },
  {
    before: "Performance known at month end, per practice",
    after: "Answer rates and production visible daily, per location",
  },
];

export default function AiDentalSoftwarePage() {
  return (
    <>
      <ProductHero product={software} visual={<ConsoleMock className="w-full max-w-[430px]" />} />
      <ProductStats product={software} />

      {/* Eight modules */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionHeading
            align="center"
            kicker="What it runs"
            title={
              <>
                Eight jobs your front desk does.{" "}
                <span className="text-gradient">All of them, all night.</span>
              </>
            }
            lede="Not eight subscriptions — one system where the call that comes in at midnight becomes a verified, confirmed appointment by morning."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {software.modules.map(({ icon: Icon, name, text }, i) => (
              <Reveal key={name} delay={(i % 4) * 80}>
                <div className="group h-full rounded-2xl border border-line bg-white p-7 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 ease-swift">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-mint text-teal mb-5 group-hover:bg-brand-gradient group-hover:text-white transition-all duration-300">
                    <Icon size={20} strokeWidth={1.9} />
                  </span>
                  <h3 className="font-display font-semibold text-[16.5px] text-ink mb-2.5 leading-snug">
                    {name}
                  </h3>
                  <p className="text-[14px] text-muted leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Before / after */}
      <section className="py-20 lg:py-28 bg-ink-band">
        <Container>
          <SectionHeading
            align="center"
            dark
            kicker="The difference"
            title={
              <>
                Same team. Same building.{" "}
                <span className="text-gradient">Different week.</span>
              </>
            }
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Reveal>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-8">
                <p className="data-label text-white/40 mb-6">Without automation</p>
                <ul className="space-y-4">
                  {comparison.map((c) => (
                    <li key={c.before} className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-white/45 shrink-0 mt-0.5">
                        <X size={12} strokeWidth={2.6} />
                      </span>
                      <span className="text-[15px] text-white/55 leading-snug">
                        {c.before}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="h-full rounded-2xl border border-teal/30 bg-teal/[0.08] p-8">
                <p className="data-label text-teal-light mb-6">With Redix</p>
                <ul className="space-y-4">
                  {comparison.map((c) => (
                    <li key={c.after} className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-teal/30 text-teal-light shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={2.8} />
                      </span>
                      <span className="text-[15px] text-white/85 leading-snug">
                        {c.after}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <TrustBar />
      <ProductIncluded product={software} />

      <FAQ
        items={software.faqs}
        kicker="Before you ask"
        title={
          <>
            The three questions{" "}
            <span className="text-gradient">every practice asks.</span>
          </>
        }
        className="py-20 lg:py-28 bg-white"
      />

      <OtherProduct product={sophia} />
      <CTABanner
        title="Watch it answer a call from your own practice."
        sub="On the demo we run your real scenarios — a new-patient enquiry, an insurance question, a 10 PM booking — against your actual schedule rules."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Redix AI Dental Software",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description: software.metaDescription,
            audience: {
              "@type": "Audience",
              audienceType: "Dental practices, dental groups and DSOs",
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
