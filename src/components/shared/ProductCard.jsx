import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The two products are deliberately given opposite surfaces: the software is
 * infrastructure (dark, instrumented), Sophia is the face patients meet
 * (light, conversational). Same component, same rhythm — different weight.
 */
export default function ProductCard({ product, tone = "light" }) {
  const dark = tone === "dark";
  const points = product.promise ?? [];

  return (
    <div
      className={cn(
        "group relative flex flex-col h-full rounded-[1.75rem] overflow-hidden transition-all duration-300 ease-swift hover:-translate-y-1.5",
        dark
          ? "bg-ink-band border border-white/10 shadow-panel"
          : "bg-white border border-line shadow-soft hover:shadow-lift"
      )}
    >
      <div className="p-8 lg:p-10 flex flex-col flex-1">
        <span
          className={cn(
            "data-label mb-5",
            dark ? "text-teal-light" : "text-teal"
          )}
        >
          {product.kicker}
        </span>

        <h3
          className={cn(
            "font-display font-semibold text-[28px] leading-tight mb-2",
            dark ? "text-white" : "text-ink"
          )}
        >
          {product.fullName ?? product.name}
        </h3>

        <p
          className={cn(
            "text-[15px] mb-6",
            dark ? "text-teal-light/80" : "text-teal"
          )}
        >
          {product.tagline}
        </p>

        <p
          className={cn(
            "text-[15.5px] leading-relaxed mb-8",
            dark ? "text-white/65" : "text-muted"
          )}
        >
          {product.short}
        </p>

        <ul className="space-y-3 mb-9">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span
                className={cn(
                  "flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5",
                  dark ? "bg-white/10 text-teal-light" : "bg-mint text-teal"
                )}
              >
                <Check size={12} strokeWidth={2.6} />
              </span>
              <span
                className={cn(
                  "text-[14.5px] leading-snug",
                  dark ? "text-white/80" : "text-ink/85"
                )}
              >
                {p}
              </span>
            </li>
          ))}
        </ul>

        {/* Metric row keeps the promise measurable */}
        <div
          className={cn(
            "grid grid-cols-2 gap-4 py-6 mb-7 border-y mt-auto",
            dark ? "border-white/10" : "border-line"
          )}
        >
          {product.stats.slice(0, 2).map((s) => (
            <div key={s.label}>
              <span className="block font-display font-bold text-2xl text-gradient leading-none">
                {s.number}
              </span>
              <span
                className={cn(
                  "block text-[12.5px] leading-snug mt-1.5",
                  dark ? "text-white/45" : "text-muted"
                )}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <Link
          href={`/platform/${product.slug}`}
          className={cn(
            "inline-flex items-center gap-2 font-display font-semibold text-[15px] transition-colors",
            dark
              ? "text-white hover:text-teal-light"
              : "text-teal hover:text-teal-dark"
          )}
        >
          Explore {product.name}
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </Link>
      </div>
    </div>
  );
}
