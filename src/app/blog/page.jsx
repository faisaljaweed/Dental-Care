import PageHero from "@/components/shared/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PostCard from "@/components/shared/PostCard";
import CTABanner from "@/components/layout/CTABanner";
import { posts } from "@/lib/data/blog";

export const metadata = {
  title: "Blog",
  description:
    "Operational insights for dental businesses: missed calls, no-shows, RCM automation, DSO centralization, and where AI actually pays off.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumb="Blog"
        title={
          <>
            Insights from inside{" "}
            <span className="text-gradient">dental operations.</span>
          </>
        }
        lede="No AI hype, no fluff — the operational numbers and playbooks we use with clients, published for anyone running a dental business."
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
        title="Prefer answers specific to your practice?"
        sub="The free audit applies everything in these articles to your actual call data, schedule, and patient base."
      />
    </>
  );
}
