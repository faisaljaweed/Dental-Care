import HeroSlider from "@/components/home/HeroSlider";
import TrustBar from "@/components/home/TrustBar";
import IntroSplit from "@/components/home/IntroSplit";
import ServicesGrid from "@/components/home/ServicesGrid";
import StatsBand from "@/components/home/StatsBand";
import Process from "@/components/home/Process";
import Industries from "@/components/home/Industries";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import CTABanner from "@/components/layout/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TrustBar />
      <IntroSplit />
      <ServicesGrid />
      <StatsBand />
      <Process />
      <Industries />
      <PortfolioPreview />
      <Testimonials />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
