import PageHero from "@/components/shared/PageHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata = {
  title: "Contact Us",
  description:
    "Book a free AI opportunity audit for your dental business — we'll map your revenue leaks and show you exactly what automation would recover.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title={
          <>
            Let&apos;s find the leak in{" "}
            <span className="text-gradient">your practice.</span>
          </>
        }
        lede="Book a free AI opportunity audit. Fifteen minutes, your real numbers, and an honest answer about whether automation pays off for you — even if the answer is 'not yet.'"
      />
      <ContactSection />
    </>
  );
}
