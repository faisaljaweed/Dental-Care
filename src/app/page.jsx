import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import StatsBand from "@/components/home/StatsBand";
import ProductDuo from "@/components/home/ProductDuo";
import SoftwareSection from "@/components/home/SoftwareSection";
import SophiaSection from "@/components/home/SophiaSection";
import AutomationFlow from "@/components/product/AutomationFlow";
import Outcomes from "@/components/home/Outcomes";
import Process from "@/components/home/Process";
import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import FAQ from "@/components/shared/FAQ";
import BlogPreview from "@/components/home/BlogPreview";
import CTABanner from "@/components/layout/CTABanner";
import { faqs } from "@/lib/data/faq";

export const metadata = {
  title: "AI Dental Software & AI Receptionist for Dental Practices",
  description:
    "Redix Dental builds two products for dental practices: AI dental software that automates calls, scheduling, insurance and billing 24/7, and Sophia, an AI dental receptionist trained on your treatments, pricing and policies. Book a demo.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StatsBand />
      <ProductDuo />
      <SoftwareSection />
      <SophiaSection />
      <AutomationFlow />
      <Outcomes />
      <Process />
      <Industries />
      <Testimonials />
      <PortfolioPreview />
      <FAQ items={faqs} schema />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
