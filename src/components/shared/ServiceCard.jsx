import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative rounded-2xl bg-white border border-line p-8 shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300 ease-swift flex flex-col overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-brand-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
      />
      <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-mint text-teal mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-all duration-300">
        <Icon size={24} strokeWidth={1.8} />
      </span>
      <h3 className="font-display font-semibold text-lg text-ink mb-3 leading-snug">
        {service.name}
      </h3>
      <p className="text-[14.5px] text-muted leading-relaxed mb-6 flex-1">
        {service.short}
      </p>
      <span className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-teal">
        Explore service
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
      </span>
    </Link>
  );
}
