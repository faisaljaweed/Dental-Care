import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";

export default function PostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-[1.4rem] overflow-hidden bg-white border border-line shadow-soft hover:shadow-lift transition-all duration-300 ease-swift flex flex-col"
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-swift"
        />
        <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3.5 py-1.5 text-xs font-display font-semibold text-teal">
          {post.category}
        </span>
      </div>
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-muted mb-3">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-line" />
          <span className="inline-flex items-center gap-1">
            <Clock size={12} /> {post.readTime}
          </span>
        </div>
        <h3 className="font-display font-semibold text-[17px] text-ink leading-snug mb-3 group-hover:text-teal transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-[14px] text-muted leading-relaxed flex-1 line-clamp-2 mb-5">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-teal">
          Read article
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
        </span>
      </div>
    </Link>
  );
}
