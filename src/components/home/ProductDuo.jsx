import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/lib/data/products";

export default function ProductDuo() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          align="center"
          kicker="Two products"
          title={
            <>
              One handles the work.{" "}
              <span className="text-gradient">One handles the patient.</span>
            </>
          }
          lede="We build two things and nothing else. Practices usually start with one and add the other within a quarter — they solve different halves of the same problem."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 120}>
              <ProductCard product={product} tone={i === 0 ? "dark" : "light"} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
