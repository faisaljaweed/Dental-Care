import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudyCard({ study, featured = false }) {
  return (
    <Link
      href={`/portfolio/${study.slug}`}
      className="group rounded-[1.4rem] overflow-hidden bg-white border border-line shadow-soft hover:shadow-lift transition-all duration-300 ease-swift flex flex-col"
    >
      <div className="relative overflow-hidden aspect-[16/10]">
        <Image
          src={study.image}
          alt={`${study.client} — ${study.headline}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-swift"
        />
        <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-4 py-1.5 text-xs font-display font-semibold text-teal">
          {study.tag}
        </span>
        <span className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-ink opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={16} />
        </span>
      </div>
      <div className="p-7 flex flex-col flex-1">
        <span className="text-xs font-display font-semibold uppercase tracking-wider text-muted mb-2">
          {study.segment} · {study.location}
        </span>
        <h3 className={`font-display font-semibold text-ink leading-snug mb-3 ${featured ? "text-xl" : "text-lg"}`}>
          {study.headline}
        </h3>
        <p className="text-[14px] text-muted leading-relaxed mb-5 flex-1 line-clamp-2">
          {study.summary}
        </p>
        <div className="flex items-center gap-6 border-t border-line pt-4">
          {study.results.slice(0, 2).map((r) => (
            <div key={r.label}>
              <span className="block font-display font-bold text-lg text-gradient">{r.metric}</span>
              <span className="block text-[11.5px] text-muted leading-tight mt-0.5 max-w-[140px]">
                {r.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
