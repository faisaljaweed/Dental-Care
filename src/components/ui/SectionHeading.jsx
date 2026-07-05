import { cn } from "@/lib/utils";

export default function SectionHeading({
  kicker,
  title,
  lede,
  align = "left",
  dark = false,
  className,
}) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16 max-w-3xl",
        align === "center" && "text-center mx-auto",
        className
      )}
    >
      {kicker && (
        <span
          className={cn(
            "inline-flex items-center gap-2 font-display font-semibold text-[13px] uppercase tracking-[0.16em] mb-4",
            dark ? "text-teal-light" : "text-teal"
          )}
        >
          <span className="h-px w-8 bg-brand-gradient inline-block" aria-hidden="true" />
          {kicker}
          {align === "center" && (
            <span className="h-px w-8 bg-brand-gradient inline-block" aria-hidden="true" />
          )}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold",
          dark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            dark ? "text-white/65" : "text-muted"
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
