import { cn } from "@/lib/utils";

const sizes = {
  sm: "max-w-3xl",
  default: "max-w-content",
  full: "max-w-full",
};

export default function Container({ children, size = "default", className }) {
  return (
    <div
      className={cn(
        "w-full mx-auto px-5 sm:px-8 lg:px-10",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}
