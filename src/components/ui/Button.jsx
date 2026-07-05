import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-brand-gradient text-white font-display font-semibold shadow-glow " +
    "hover:shadow-lift hover:-translate-y-0.5 transition-all duration-200 ease-swift",
  dark:
    "bg-ink text-white font-display font-semibold " +
    "hover:bg-ink-soft hover:-translate-y-0.5 transition-all duration-200 ease-swift",
  outline:
    "border-2 border-ink/15 text-ink font-display font-semibold bg-white/80 backdrop-blur " +
    "hover:border-teal hover:text-teal transition-colors duration-200",
  light:
    "border-2 border-white/40 text-white font-display font-semibold " +
    "hover:bg-white hover:text-ink transition-colors duration-200",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm rounded-full",
  md: "px-7 py-3.5 text-[15px] rounded-full",
  lg: "px-8 py-4 text-base rounded-full",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  as: Tag = "button",
  leftIcon,
  rightIcon,
  className,
  ...props
}) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center justify-center gap-2 select-none whitespace-nowrap",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </Tag>
  );
}
