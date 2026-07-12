import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const Roi = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Heading */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 font-display font-semibold text-[13px] uppercase tracking-[0.16em] text-teal mb-4">
              <span className="h-px w-8 bg-brand-gradient inline-block" />
              Proven Results
            </span>

            <h2 className="text-4xl lg:text-5xl font-semibold text-ink mb-6">
              The ROI for Your Business
            </h2>

            <p className="text-lg text-muted leading-relaxed">
              Improve scheduling, reduce missed opportunities, and create a
              better patient experience with automation that delivers measurable
              business results.
            </p>
          </div>
        </Reveal>

        {/* Pills */}
        <Reveal delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <span className="px-6 py-3 rounded-full border border-line bg-white text-ink font-medium">
              Appointment Booking
            </span>

            <span className="px-6 py-3 rounded-full border border-line bg-white text-ink font-medium">
              Lead Qualification
            </span>

            <span className="px-6 py-3 rounded-full border border-line bg-white text-ink font-medium">
              Handling FAQ
            </span>
          </div>
        </Reveal>

        {/* Main Card */}
        <Reveal delay={150}>
          <div className="grid lg:grid-cols-2 overflow-hidden rounded-[32px] border border-line bg-ice shadow-soft">
            {/* Left */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <p className="text-muted leading-8 mb-10">
                Medbelle integrated an automated voice assistant to streamline
                appointment scheduling and patient communication. By handling
                bookings and follow-ups automatically, the practice increased
                scheduling efficiency, reduced no-shows, and delivered a
                smoother patient experience without adding more staff.
              </p>

              <div className="grid grid-cols-2 gap-5">
                <div className="rounded-2xl bg-white border border-line p-6">
                  <h3 className="text-4xl font-bold text-gradient mb-2">
                    +60%
                  </h3>
                  <p className="text-muted text-sm">Scheduling Efficiency</p>
                </div>

                <div className="rounded-2xl bg-white border border-line p-6">
                  <h3 className="text-4xl font-bold text-gradient mb-2">
                    -30%
                  </h3>
                  <p className="text-muted text-sm">No-show Rates</p>
                </div>

                <div className="rounded-2xl bg-white border border-line p-6">
                  <h3 className="text-4xl font-bold text-gradient mb-2">
                    2.5x
                  </h3>
                  <p className="text-muted text-sm">Qualified Appointments</p>
                </div>

                <div className="rounded-2xl bg-white border border-line p-6">
                  <h3 className="text-4xl font-bold text-gradient mb-2">
                    +25%
                  </h3>
                  <p className="text-muted text-sm">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="relative min-h-[520px] bg-ink-band">
              <Image
                src="/Images/roi.webp"
                alt="ROI"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default Roi;
