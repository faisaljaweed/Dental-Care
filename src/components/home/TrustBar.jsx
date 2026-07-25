/* Integrations, not logos-we-once-met. These are the systems we write into. */
const tools = [
  "Dentrix", "Eaglesoft", "Open Dental", "Curve Dental", "Carestream",
  "Denticon", "Twilio", "WhatsApp", "Google Business", "Weave", "Stripe", "Instagram",
];

export default function TrustBar() {
  const row = [...tools, ...tools];
  return (
    <section className="bg-white border-b border-line py-8 overflow-hidden">
      <p className="text-center text-[12.5px] font-display font-semibold uppercase tracking-[0.16em] text-muted mb-6">
        Writes directly into the systems your practice already runs on
      </p>
      <div className="marquee relative">
        <div className="marquee-track flex items-center gap-14 w-max">
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              aria-hidden={i >= tools.length}
              className="font-display font-semibold text-lg text-ink/35 whitespace-nowrap select-none"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
