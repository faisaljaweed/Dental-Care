"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/data/services";
import { SITE } from "@/lib/site";

const nextSteps = [
  "We reply within one business hour",
  "15-minute call to map your workflows & leaks",
  "You get a written audit — yours to keep either way",
];

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink mb-2">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full px-4.5 px-4 py-3.5 rounded-xl border border-line bg-white text-ink text-[15px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 transition-all placeholder:text-muted/50";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    contact: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-20 lg:py-24 bg-ice">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10">
          {/* Info column */}
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-2xl bg-white border border-line shadow-soft p-8">
                <h2 className="font-display font-semibold text-xl text-ink mb-6">
                  Talk to us directly
                </h2>
                <ul className="space-y-5">
                  <li>
                    <a href={SITE.phoneHref} className="flex items-center gap-4 group">
                      <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-mint text-teal group-hover:bg-brand-gradient group-hover:text-white transition-all shrink-0">
                        <Phone size={18} />
                      </span>
                      <span>
                        <span className="block text-xs text-muted">Call or text</span>
                        <span className="block font-display font-semibold text-ink">
                          {SITE.phoneDisplay}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 group">
                      <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-mint text-teal group-hover:bg-brand-gradient group-hover:text-white transition-all shrink-0">
                        <Mail size={18} />
                      </span>
                      <span>
                        <span className="block text-xs text-muted">Email</span>
                        <span className="block font-display font-semibold text-ink">
                          {SITE.email}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-mint text-teal shrink-0">
                      <MapPin size={18} />
                    </span>
                    <span>
                      <span className="block text-xs text-muted">Coverage</span>
                      <span className="block font-display font-semibold text-ink text-sm">
                        {SITE.address}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl bg-ink-band p-8">
                <h3 className="font-display font-semibold text-lg text-white mb-5 flex items-center gap-2.5">
                  <Clock size={18} className="text-teal-light" />
                  What happens next
                </h3>
                <ul className="space-y-4">
                  {nextSteps.map((s, i) => (
                    <li key={s} className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-gradient text-white text-xs font-display font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-white/75 text-sm leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={120}>
            <div className="rounded-2xl bg-white border border-line shadow-soft p-8 sm:p-10">
              {status === "done" ? (
                <div className="flex flex-col items-center text-center py-16">
                  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-mint text-teal mb-6">
                    <CheckCircle2 size={30} />
                  </span>
                  <h2 className="font-display font-semibold text-2xl text-ink mb-3">
                    Request received.
                  </h2>
                  <p className="text-muted max-w-sm leading-relaxed">
                    We reply within one business hour. We&apos;re an automation
                    agency — you should expect nothing less.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-display font-semibold text-2xl text-ink mb-2">
                    Book your free AI audit
                  </h2>
                  <p className="text-muted text-[15px] mb-8">
                    Tell us a little about your business — two minutes, no commitment.
                  </p>
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Your name *">
                        <input
                          className={inputCls}
                          placeholder="Dr. Jane Smith"
                          value={form.name}
                          onChange={set("name")}
                          required
                        />
                      </Field>
                      <Field label="Business name">
                        <input
                          className={inputCls}
                          placeholder="Smith Family Dental"
                          value={form.business}
                          onChange={set("business")}
                        />
                      </Field>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Phone or email *">
                        <input
                          className={inputCls}
                          placeholder="Whichever you answer faster"
                          value={form.contact}
                          onChange={set("contact")}
                          required
                        />
                      </Field>
                      <Field label="What interests you most?">
                        <select
                          className={inputCls}
                          value={form.interest}
                          onChange={set("interest")}
                        >
                          <option value="">Not sure yet — start with the audit</option>
                          {services.map((s) => (
                            <option key={s.slug} value={s.name}>
                              {s.name}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>
                    <Field label="Anything we should know?">
                      <textarea
                        rows={4}
                        className={inputCls}
                        placeholder="Locations, PMS you use, the leak that hurts most…"
                        value={form.message}
                        onChange={set("message")}
                      />
                    </Field>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full justify-center"
                      rightIcon={<ArrowRight size={16} />}
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? "Sending…" : "Request My Free Audit"}
                    </Button>
                    {status === "error" && (
                      <p className="text-sm text-red-600">
                        That didn&apos;t go through — email us at{" "}
                        <a href={`mailto:${SITE.email}`} className="underline">
                          {SITE.email}
                        </a>
                        .
                      </p>
                    )}
                    <p className="text-xs text-muted/80 text-center">
                      No newsletter, no drip sequence — a human reads this and replies.
                    </p>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
