"use client";
import { useEffect, useState } from "react";
import { CalendarCheck2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The signature element of the site: Sophia answering a real patient question
 * and booking the consultation, played back in sequence.
 *
 * The script is deliberately mundane — pricing, insurance, "can I come after
 * work" — because that is the actual conversation a front desk repeats forty
 * times a day and the reason practices buy Sophia.
 */
const script = [
  {
    from: "patient",
    text: "Hi — how much is Invisalign, and do you take Delta Dental?",
    delay: 900,
  },
  {
    from: "sophia",
    text: "We're in network with Delta Dental. Invisalign runs $3,900–$5,600 here depending on how much movement you need.",
    delay: 1500,
  },
  {
    from: "sophia",
    text: "The consultation is free and includes a 3D scan, so you'd get an exact figure before committing to anything.",
    delay: 1400,
  },
  {
    from: "patient",
    text: "Do you have anything after 5? I can't take time off work.",
    delay: 1300,
  },
  {
    from: "sophia",
    text: "Thursday at 5:30 PM or Tuesday at 6:00 PM are both open with Dr. Reyes. Which suits you better?",
    delay: 1600,
  },
  { from: "patient", text: "Thursday works.", delay: 900 },
  { from: "booking", delay: 1400 },
];

function Avatar() {
  return (
    <span
      aria-hidden="true"
      className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-gradient text-white font-display font-bold text-[15px] shrink-0"
    >
      S
    </span>
  );
}

function TypingBubble() {
  return (
    <div className="flex items-end gap-2.5 msg-in">
      <Avatar />
      <div className="rounded-2xl rounded-bl-md bg-ice border border-line px-4 py-3.5 flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-teal typing-dot"
            style={{ animationDelay: `${i * 0.16}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function BookingCard() {
  return (
    <div className="msg-in rounded-2xl border border-teal/25 bg-mint p-4">
      <div className="flex items-center gap-2 mb-3">
        <CalendarCheck2 size={15} className="text-teal shrink-0" />
        <span className="data-label text-teal">Appointment booked</span>
      </div>
      <p className="font-display font-semibold text-ink text-[15px] leading-snug">
        Invisalign consultation
      </p>
      <p className="text-[13.5px] text-muted mt-0.5">
        Thursday, 5:30 PM · Dr. Reyes
      </p>
      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-teal/15">
        <ShieldCheck size={14} className="text-teal shrink-0" />
        <span className="text-[12.5px] text-muted">
          Written to Open Dental · confirmation texted
        </span>
      </div>
    </div>
  );
}

export default function SophiaChat({ className }) {
  /* How many script entries are currently visible. */
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setShown(script.length);
      return;
    }

    if (shown >= script.length) {
      /* Hold the finished conversation, then replay from the top. */
      const restart = setTimeout(() => setShown(0), 6000);
      return () => clearTimeout(restart);
    }

    const next = script[shown];
    const isSophia = next.from !== "patient";

    /* Sophia "thinks" before she answers; the patient does not. */
    if (isSophia) {
      setTyping(true);
      const think = setTimeout(() => {
        setTyping(false);
        setShown((s) => s + 1);
      }, next.delay);
      return () => clearTimeout(think);
    }

    const wait = setTimeout(() => setShown((s) => s + 1), next.delay);
    return () => clearTimeout(wait);
  }, [shown]);

  return (
    <div
      className={cn(
        "w-full max-w-[400px] rounded-[1.75rem] bg-white shadow-panel border border-line overflow-hidden",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-line bg-white">
        <Avatar />
        <div className="flex-1 min-w-0">
          <p className="font-display font-semibold text-[15px] text-ink leading-tight">
            Sophia
          </p>
          <p className="flex items-center gap-1.5 text-[12.5px] text-muted mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-live live-dot shrink-0" />
            Online · replies in seconds
          </p>
        </div>
        <span className="data-label text-muted/70 hidden sm:block">11:47 PM</span>
      </div>

      {/* Conversation */}
      <div
        className="px-5 py-5 space-y-3.5 min-h-[430px] flex flex-col justify-end bg-white"
        aria-live="polite"
        aria-label="Example conversation with Sophia"
      >
        {script.slice(0, shown).map((m, i) =>
          m.from === "booking" ? (
            <BookingCard key={i} />
          ) : m.from === "patient" ? (
            <div key={i} className="flex justify-end msg-in">
              <p className="max-w-[80%] rounded-2xl rounded-br-md bg-ink text-white/95 px-4 py-2.5 text-[14.5px] leading-relaxed">
                {m.text}
              </p>
            </div>
          ) : (
            <div key={i} className="flex items-end gap-2.5 msg-in">
              <Avatar />
              <p className="max-w-[80%] rounded-2xl rounded-bl-md bg-ice border border-line text-ink/90 px-4 py-2.5 text-[14.5px] leading-relaxed">
                {m.text}
              </p>
            </div>
          )
        )}
        {typing && <TypingBubble />}
      </div>

      {/* Composer — decorative, this is a mockup */}
      <div className="px-5 py-3.5 border-t border-line bg-ice/60">
        <div className="flex items-center gap-3 rounded-full bg-white border border-line px-4 py-2.5">
          <span className="text-[14px] text-muted/60 flex-1">
            Ask about treatments, pricing or insurance…
          </span>
          <span
            aria-hidden="true"
            className="w-7 h-7 rounded-full bg-brand-gradient shrink-0"
          />
        </div>
      </div>
    </div>
  );
}
