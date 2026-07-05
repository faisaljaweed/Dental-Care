const tools = [
  "Dentrix", "Eaglesoft", "Open Dental", "Curve Dental", "Carestream",
  "Twilio", "OpenAI", "Zapier", "HubSpot", "Google Calendar", "Weave", "Make",
];

export default function TrustBar() {
  const row = [...tools, ...tools];
  return (
    <section className="bg-white border-b border-line py-7 overflow-hidden">
      <p className="text-center text-[13px] font-display font-semibold uppercase tracking-[0.16em] text-muted mb-5">
        We build on the tools dentistry already runs on
      </p>
      <div className="marquee relative">
        <div className="marquee-track flex items-center gap-14 w-max">
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
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
