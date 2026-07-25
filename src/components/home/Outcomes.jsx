import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

/* One anonymised deployment, reported the way we report to clients: four
   numbers and the sentence that explains them. */
const results = [
  { value: "+61%", label: "Calls answered" },
  { value: "−34%", label: "No-show rate" },
  { value: "2.4×", label: "Consults booked" },
  { value: "$21K", label: "Monthly production recovered" },
];

const scope = [
  "Call handling",
  "Consultation booking",
  "Insurance verification",
];

export default function Outcomes() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 font-display font-semibold text-[13px] uppercase tracking-[0.16em] text-teal mb-4">
              <span className="h-px w-8 bg-brand-gradient inline-block" />
              What it returns
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink mb-5">
              We report in appointments and dollars.
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Not impressions, not engagement. Every month you get the number of
              patients the system booked and the production attached to them,
              next to what you paid for it.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {scope.map((s) => (
              <span
                key={s}
                className="px-5 py-2.5 rounded-full border border-line bg-ice text-ink/80 text-[14.5px] font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid lg:grid-cols-2 overflow-hidden rounded-[2rem] border border-line bg-ice shadow-soft">
            <div className="p-10 lg:p-14 flex flex-col justify-center order-2 lg:order-1">
              <span className="data-label text-teal mb-4">
                4-location group · Midwest · 6 months
              </span>
              <p className="text-[16.5px] text-muted leading-8 mb-10">
                Four offices, four different ways of answering the phone, and a
                recall list nobody had time to work. We put the software on
                their lines and Sophia on their website. Nobody was hired, and
                nothing about the clinical day changed.
              </p>

              <div className="grid grid-cols-2 gap-5">
                {results.map((r) => (
                  <div
                    key={r.label}
                    className="rounded-2xl bg-white border border-line p-6"
                  >
                    <h3 className="text-[2rem] font-display font-bold text-gradient mb-1.5 leading-none">
                      {r.value}
                    </h3>
                    <p className="text-muted text-[13.5px] leading-snug">
                      {r.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[320px] lg:min-h-[560px] bg-ink-band order-1 lg:order-2">
              <Image
                src="/Images/Home_Section02.jpeg"
                alt="Dental team reviewing practice performance in the clinic"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
