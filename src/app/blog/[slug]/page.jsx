import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, Clock, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import PostCard from "@/components/shared/PostCard";
import { posts, getPost } from "@/lib/data/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Header */}
      <section className="relative bg-ink-band pt-40 pb-56 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 w-[28rem] h-[28rem] rounded-full bg-teal/15 blur-3xl"
        />
        <Container size="sm" className="relative">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal-light transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-teal-light transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-teal-light font-medium">{post.category}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-white mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/55">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="inline-flex items-center gap-1.5">
              <Clock size={13} /> {post.readTime}
            </span>
          </div>
        </Container>
      </section>

      {/* Hero image + body */}
      <section className="bg-white pb-20">
        <Container size="sm">
          <div className="-mt-40 relative z-10 rounded-[1.6rem] overflow-hidden shadow-lift mb-14 aspect-[16/8]">
            <Image
              src={post.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              priority
              className="object-cover"
            />
          </div>

          <article className="max-w-none">
            {post.body.map((block, i) => (
              <Reveal key={i}>
                <div className="mb-8">
                  {block.h && (
                    <h2 className="font-display font-semibold text-2xl text-ink mb-4">{block.h}</h2>
                  )}
                  <p className="text-[16.5px] text-ink/80 leading-[1.85]">{block.p}</p>
                </div>
              </Reveal>
            ))}
          </article>

          {/* Inline CTA */}
          <Reveal>
            <div className="rounded-2xl bg-mint border border-teal/15 p-8 sm:p-10 mt-6">
              <h3 className="font-display font-semibold text-xl text-ink mb-3">
                Want these numbers for your own practice?
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                The free Redix audit maps your missed calls, no-show pattern, and dormant
                patient base — and shows exactly what automation would recover.
              </p>
              <Button as={Link} href="/demo" rightIcon={<ArrowRight size={15} />}>
                Book a Free Audit
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* More posts */}
      <section className="py-20 bg-ice">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-semibold text-ink mb-8">Keep reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
