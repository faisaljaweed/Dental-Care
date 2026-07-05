import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import PostCard from "@/components/shared/PostCard";
import { posts } from "@/lib/data/blog";

export default function BlogPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            kicker="Insights"
            title={
              <>
                What we&apos;re learning inside{" "}
                <span className="text-gradient">dental operations.</span>
              </>
            }
            className="mb-0"
          />
          <Button
            as={Link}
            href="/blog"
            variant="outline"
            className="shrink-0 mb-2"
            rightIcon={<ArrowRight size={15} />}
          >
            View All Articles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 lg:mt-16">
          {posts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
