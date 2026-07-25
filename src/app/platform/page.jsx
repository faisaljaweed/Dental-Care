import { Check, Minus } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProductCard from "@/components/shared/ProductCard";
import AutomationFlow from "@/components/product/AutomationFlow";
import Process from "@/components/home/Process";
import FAQ from "@/components/shared/FAQ";
import CTABanner from "@/components/layout/CTABanner";
import { products } from "@/lib/data/products";
import { faqs } from "@/lib/data/faq";

export const metadata = {
  title: "Platform — AI Dental Software & Sophia, the AI Receptionist",
  description:
    "Two products for dental practices: AI dental software that automates calls, scheduling, insurance and billing 24/7, and Sophia, an AI receptionist trained on your treatments, pricing and policies.",
  alternates: { canonical: "/platform" },
};

/* Which product covers which job. Honest — some rows are one-sided. */
const matrix = [
  { job: "Answers inbound phone calls", software: true, sophia: false },
  { job: "Answers chat, SMS, WhatsApp and social messages", software: false, sophia: true },
  { job: "Quotes your treatments, fees and insurance", software: false, sophia: true },
  { job: "Books appointments into your PMS", software: true, sophia: true },
  { job: "Verifies insurance before the visit", software: true, sophia: false },
  { job: "Scrubs claims and chases balances", software: true, sophia: false },
  { job: "Sends reminders, recalls and reactivation", software: true, sophia: false },
  { job: "Handles after-hours patient questions", software: true, sophia: true },
  { job: "Escalates emergencies to a human", software: true, sophia: true },
  { job: "Reports answer rates and recovered production", software: true, sophia: false },
];

function Cell({ on }) {
  return on ? (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-mint text-teal">
      <Check size={13} strokeWidth={2.8} />
      <span className="sr-only">Included</span>
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ice text-muted/50">
      <Minus size={13} strokeWidth={2.4} />
      <span className="sr-only">Not included</span>
    </span>
  );
}

export default function PlatformPage() {
  return (
    <>
      <PageHero
        crumb="Platform"
        title={
          <>
            Two products.{" "}
            <span className="text-gradient">One quiet front desk.</span>
          </>
        }
        lede="One runs the work your team can't get to. The other talks to patients when there's nobody at the desk. Most practices end up with both — but you only ever need to start with one."
      />

      {/* The two products */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={i * 120}>
                <ProductCard product={product} tone={i === 0 ? "dark" : "light"} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison matrix */}
      <section className="py-20 lg:py-28 bg-ice">
        <Container size="sm">
          <SectionHeading
            align="center"
            kicker="Which one first"
            title={
              <>
                What each product{" "}
                <span className="text-gradient">actually covers.</span>
              </>
            }
            lede="If the phones are the problem, start with the software. If patients are asking questions online and not booking, start with Sophia."
          />

          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-line bg-white shadow-soft">
              <table className="w-full min-w-[520px] text-left border-collapse">
                <caption className="sr-only">
                  Feature comparison between AI Dental Software and Sophia, the
                  AI dental receptionist
                </caption>
                <thead>
                  <tr className="border-b border-line">
                    <th scope="col" className="px-6 py-5 data-label text-muted font-medium">
                      Job to be done
                    </th>
                    <th scope="col" className="px-4 py-5 text-center font-display font-semibold text-[14px] text-ink w-[130px]">
                      AI Dental
                      <br />
                      Software
                    </th>
                    <th scope="col" className="px-4 py-5 text-center font-display font-semibold text-[14px] text-ink w-[110px]">
                      Sophia
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {matrix.map((row) => (
                    <tr key={row.job} className="border-b border-line last:border-0">
                      <th
                        scope="row"
                        className="px-6 py-4 text-[15px] font-normal text-ink/85 leading-snug"
                      >
                        {row.job}
                      </th>
                      <td className="px-4 py-4 text-center">
                        <Cell on={row.software} />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Cell on={row.sophia} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-center text-[14.5px] text-muted mt-6">
              Bought together, they share one patient record and one inbox — a
              caller at 11 PM and a website message on Tuesday are the same
              person, and your team sees it that way.
            </p>
          </Reveal>
        </Container>
      </section>

      <AutomationFlow />
      <Process />
      <FAQ items={faqs} schema />
      <CTABanner />
    </>
  );
}
