/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // The site used to sell nine services from /services. Everything now
      // maps onto the two products, so old URLs are pointed at their nearest
      // equivalent rather than dropped.
      { source: "/services", destination: "/platform", permanent: true },
      { source: "/contact", destination: "/demo", permanent: true },
      {
        source: "/services/ai-voice-receptionist",
        destination: "/platform/ai-dental-software",
        permanent: true,
      },
      {
        source: "/services/missed-call-recovery",
        destination: "/platform/ai-dental-software",
        permanent: true,
      },
      {
        source: "/services/smart-scheduling",
        destination: "/platform/ai-dental-software",
        permanent: true,
      },
      {
        source: "/services/no-show-prevention",
        destination: "/platform/ai-dental-software",
        permanent: true,
      },
      {
        source: "/services/patient-reactivation",
        destination: "/platform/ai-dental-software",
        permanent: true,
      },
      {
        source: "/services/insurance-verification",
        destination: "/platform/ai-dental-software",
        permanent: true,
      },
      {
        source: "/services/dso-command-center",
        destination: "/platform/ai-dental-software",
        permanent: true,
      },
      {
        source: "/services/speed-to-lead",
        destination: "/platform/sophia-ai-receptionist",
        permanent: true,
      },
      {
        source: "/services/custom-ai-apps",
        destination: "/platform",
        permanent: true,
      },
      { source: "/services/:slug*", destination: "/platform", permanent: true },
    ];
  },
};
module.exports = nextConfig;
