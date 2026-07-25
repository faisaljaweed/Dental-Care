import PageHero from "@/components/shared/PageHero";
import DemoSection from "@/components/demo/DemoSection";
import FAQ from "@/components/shared/FAQ";
import { faqs } from "@/lib/data/faq";

export const metadata = {
  title: "Book a Demo — See AI Dental Software & Sophia in Action",
  description:
    "Book a 20-minute demo of Redix Dental. We run your real patient scenarios through our AI dental software and Sophia, the AI receptionist, and show you what your practice is currently missing.",
  alternates: { canonical: "/demo" },
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        crumb="Book a Demo"
        title={
          <>
            See it handle{" "}
            <span className="text-gradient">your patients.</span>
          </>
        }
        lede="Twenty minutes. We use your real scenarios — a new-patient call, an insurance question, a 10 PM booking request — and show you exactly what happens today versus what would happen with Redix running."
      />
      <DemoSection />
      <FAQ
        items={faqs.slice(0, 4)}
        kicker="Before the call"
        title={
          <>
            Things worth knowing{" "}
            <span className="text-gradient">in advance.</span>
          </>
        }
        className="py-20 lg:py-24 bg-white"
      />
    </>
  );
}
