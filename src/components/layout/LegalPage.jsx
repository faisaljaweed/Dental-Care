import Container from "@/components/ui/Container";

export default function LegalPage({ title, updated, children }) {
  return (
    <section className="bg-white pt-40 pb-24 min-h-screen">
      <Container size="sm">
        <span className="inline-flex items-center gap-2 font-display font-semibold text-[13px] uppercase tracking-[0.16em] text-teal mb-4">
          <span className="h-px w-8 bg-brand-gradient inline-block" aria-hidden="true" />
          Redix Dental · Legal
        </span>
        <h1 className="text-3xl sm:text-4xl font-semibold text-ink mb-3">{title}</h1>
        <p className="text-sm text-muted mb-12">Last updated: {updated}</p>
        <div className="space-y-8 text-[15.5px] leading-relaxed text-ink/80 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:mb-2">
          {children}
        </div>
      </Container>
    </section>
  );
}
