import PageHero from "@/components/shared/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PostCard from "@/components/shared/PostCard";
import CTABanner from "@/components/layout/CTABanner";
import { posts } from "@/lib/data/blog";

export const metadata = {
  title: "Blog — Dental AI, Automation & Front-Office Operations",
  description:
    "Practical writing on dental automation: missed calls, no-shows, insurance denials and what to ask an AI receptionist vendor before you sign. No hype, just the operational numbers.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumb="Blog"
        title={
          <>
            The numbers behind{" "}
            <span className="text-gradient">a busy front desk.</span>
          </>
        }
        lede="No AI hype and no vendor talk — the operational data and playbooks we use with clients, written for anyone running a dental practice."
      />

      <section className="py-20 lg:py-24 bg-ice">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 90}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Want these numbers for your own practice?"
        sub="On a 20-minute demo we run your real call data and schedule through both products, and show you what the gap is worth."
      />
    </>
  );
}
