import { Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * Native <details> — keyboard accessible and open-by-default for anyone
 * printing or reading without JavaScript. `schema` emits FAQPage JSON-LD so
 * these answers can surface directly in search results.
 */
export default function FAQ({
  items,
  kicker = "Questions",
  title = (
    <>
      What practice owners ask{" "}
      <span className="text-gradient">on the first call.</span>
    </>
  ),
  lede,
  schema = false,
  className = "py-20 lg:py-28 bg-white",
}) {
  return (
    <section className={className}>
      <Container size="sm">
        <SectionHeading align="center" kicker={kicker} title={title} lede={lede} />

        <div className="space-y-3">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i, 4) * 70}>
              <details className="group rounded-2xl border border-line bg-white open:bg-ice open:border-teal/30 transition-colors duration-200">
                <summary className="flex items-start gap-4 cursor-pointer list-none px-6 py-5 sm:px-7 [&::-webkit-details-marker]:hidden">
                  <span className="font-display font-semibold text-[16.5px] text-ink leading-snug flex-1">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex items-center justify-center w-7 h-7 rounded-full bg-mint text-teal shrink-0 mt-0.5 transition-transform duration-200 group-open:rotate-45"
                  >
                    <Plus size={15} strokeWidth={2.4} />
                  </span>
                </summary>
                <div className="px-6 pb-6 sm:px-7 pt-0">
                  <p className="text-[15.5px] text-muted leading-relaxed max-w-[62ch]">
                    {item.a}
                  </p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>

      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: items.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}
    </section>
  );
}
