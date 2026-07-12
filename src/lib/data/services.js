import {
  PhoneCall,
  MessageSquareText,
  CalendarCheck2,
  BellRing,
  RefreshCcw,
  ShieldCheck,
  Zap,
  LayoutDashboard,
  Blocks,
} from "lucide-react";

/**
 * Every service is built around a documented gap in dental operations.
 * Detail pages render: pains → solution → deliverables → outcomes.
 */
export const services = [
  {
    slug: "ai-voice-receptionist",
    icon: PhoneCall,
    name: "AI Voice Receptionist",
    short:
      "A dental receptionist that answers every call around the clock, books appointments directly into your practice management system, and makes sure urgent cases reach your team immediately.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80",
    heroLine:
      "Never let another patient hear voicemail instead of your practice.",
    pains: [
      {
        stat: "32–38%",
        text: "of calls to dental offices go unanswered during business hours — and most callers who hit voicemail simply dial the next practice.",
      },
      {
        stat: "62%",
        text: "of patients try to reach practices after 5 PM, when nobody is there to pick up.",
      },
      {
        stat: "$850+",
        text: "walks out the door with every missed new-patient call, before lifetime value is even counted.",
      },
    ],
    stats: [
      {
        number: "98%",
        text: "Call Answer Rate around the clock",
        title: "Achieved within 48 hours of go-live",
      },
      {
        number: "24/7",
        text: "Coverage across nights, weekends & holidays",
        title: "No gaps in patient access",
      },
      {
        number: "0",
        text: "New tools for your team to learn",
        title: "Works on your existing phone system",
      },
      {
        number: "<2 sec",
        text: "Before the AI picks up",
        title: "No hold music, no voicemail",
      },
    ],
    statsVariant: "reverse",
    solution:
      "Every call is answered the moment it comes in, whether it's during lunch, after hours, weekends, or your busiest mornings. Patients can book, reschedule, or cancel appointments without waiting on hold, while common questions are handled instantly. Urgent situations are recognized and routed to the right team member straight away. Everything works with your existing phone system and practice management software, so your team keeps working the way they always have. Before going live, every conversation and workflow is reviewed and approved by your practice.",
    deliverables: [
      "Dental-trained voice AI on your existing numbers",
      "Real-time booking into Dentrix, Eaglesoft, Open Dental, Curve & more",
      "Emergency detection with instant human escalation",
      "Multilingual conversations, auto-detected",
      "Warm transfer to staff with full call summary",
      "Call recordings, transcripts & monthly reporting",
    ],
    outcomes: [
      { metric: "98%+", label: "call answer rate, 24/7/365" },
      { metric: "48 hrs", label: "from kickoff to live" },
      { metric: "0", label: "new tools for your team to learn" },
    ],
  },
  {
    slug: "missed-call-recovery",
    icon: MessageSquareText,
    name: "Missed-Call Recovery & Text-Back",
    short:
      "When a patient can't reach your office, they receive an immediate text conversation that answers questions, helps them book an appointment, and keeps them from calling another practice.",
    image:
      "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=1600&q=80",
    heroLine: "Recover patients before they move on to another dental office.",
    pains: [
      {
        stat: "14%",
        text: "of new patients leave a voicemail when nobody answers. The other 86% are gone — most within minutes.",
      },
      {
        stat: "~300",
        text: "calls per month go unanswered at the average practice. Each one had a reason to call you.",
      },
      {
        stat: "$8,000",
        text: "in lifetime value rides on every new patient a competitor captures instead of you.",
      },
    ],
    stats: [
      {
        number: "100%",
        text: "Call Answer Rate across all locations",
        title: "from avg 62% industry standard",
      },
      {
        number: "21",
        text: "Appointments Booked per hour at peak volume",
        title: "Zero Staff required",
      },
      {
        number: "$10K",
        text: "Additional Monthly production per location on average",
        title: "Revenue from recovered calls",
      },
      {
        number: "4hrs",
        text: "Front Desk time Saved daily per location",
        title: "Staf focus on in in offcie experience",
      },
    ],
    statsVariant: "default",
    solution:
      "The moment a call goes unanswered, a personalized text message is sent while the patient is still holding their phone. The conversation continues naturally, answers common questions, suggests available appointment times, and books directly into your schedule whenever possible. If personal assistance is needed, the conversation is passed to your team without losing any context. Every recovered patient is tracked so you can clearly see the appointments and revenue that would have otherwise been lost.",
    deliverables: [
      "Instant text-back within seconds of a missed call",
      "Two-way AI SMS conversations that book appointments",
      "After-hours and weekend coverage included",
      "Human handoff rules your team controls",
      "Full conversation logs in one inbox",
      "Recovered-revenue reporting per month",
    ],
    outcomes: [
      { metric: "< 30 sec", label: "average response to a missed call" },
      { metric: "3–5×", label: "more missed callers recovered vs. voicemail" },
      { metric: "24/7", label: "coverage without extra staff" },
    ],
  },
  {
    slug: "smart-scheduling",
    icon: CalendarCheck2,
    name: "Smart Scheduling Automation",
    short:
      "Give patients the freedom to book, reschedule, or cancel appointments online, by text, or over the phone while keeping your schedule perfectly synchronized.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1600&q=80",
    heroLine:
      "Make booking effortless for patients without creating extra work for your team.",
    pains: [
      {
        stat: "5 jobs",
        text: "your front desk juggles at once. Scheduling phone tag is the one that steals the most hours.",
      },
      {
        stat: "After 5 PM",
        text: "is when the majority of patients want to book — exactly when your office can't take the call.",
      },
      {
        stat: "Hours/week",
        text: "are lost to reschedule ping-pong that software should be handling.",
      },
    ],
    stats: [
      {
        number: "40%+",
        text: "of bookings shift to self-serve",
        title: "Freeing up front-desk hours",
      },
      {
        number: "24/7",
        text: "Booking availability for patients",
        title: "No waiting for office hours",
      },
      {
        number: "0",
        text: "Double-bookings, verified live",
        title: "Synced with your own PMS",
      },
      {
        number: "Hours",
        text: "Saved weekly on reschedule calls",
        title: "Less phone tag for your team",
      },
    ],
    statsVariant: "compact",
    solution:
      "Patients can schedule appointments whenever it's convenient for them, without waiting for someone at the front desk to answer the phone. Every booking is synced directly with your existing practice management system, so availability is always accurate. Appointment rules, provider preferences, hygiene blocks, and high-production time slots remain fully under your control. Automated confirmations and rescheduling reduce phone calls while helping your schedule stay full and organized.",
    deliverables: [
      "Real-time online booking synced to your PMS",
      "Reschedule & cancel by SMS — handled by AI",
      "Appointment-type and provider rules you control",
      "Production-block protection for high-value slots",
      "New-patient digital intake before the visit",
      "Zero double-booking, verified in your own system",
    ],
    outcomes: [
      { metric: "40%+", label: "of bookings shift to self-serve" },
      { metric: "Hours", label: "of front-desk phone time returned weekly" },
      { metric: "Live", label: "PMS sync — one source of truth" },
    ],
  },
  {
    slug: "no-show-prevention",
    icon: BellRing,
    name: "No-Show Prevention & Waitlist Backfill",
    short:
      "Reduce missed appointments with smart reminders, and when a cancellation happens, automatically offer the open slot to patients waiting for an earlier visit.",
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1600&q=80",
    heroLine:
      "Keep your chairs full without your team chasing confirmations all day.",
    pains: [
      {
        stat: "15–20%",
        text: "average no-show rate across dental practices. Top performers run 1–5% — the difference is systems, not luck.",
      },
      {
        stat: "$105K+",
        text: "lost annually by the average practice to missed appointments alone.",
      },
      {
        stat: "1/day",
        text: "no-show is enough to cost a practice $20K–$70K a year, depending on production.",
      },
    ],
    stats: [
      {
        number: "60%",
        text: "Reduction in no-shows",
        title: "With behavior-based reminders",
      },
      {
        number: "Minutes",
        text: "To backfill a cancelled slot",
        title: "Waitlist contacted automatically",
      },
      {
        number: "1–5%",
        text: "Top-performer no-show rate",
        title: "What proper systems make possible",
      },
      {
        number: "$0",
        text: "Staff time spent on confirmations",
        title: "Two-way automated follow-up",
      },
    ],
    statsVariant: "reverse",
    solution:
      "Patients receive reminders through text, voice, and email based on the type of appointment they've booked. Confirmations are two-way, making it easy for patients to confirm, reschedule, or let you know they can't make it. If an appointment is cancelled, the system immediately contacts patients on your waitlist and fills the opening before valuable production time is lost. Your team spends less time making reminder calls while your schedule stays consistently full.",
    deliverables: [
      "Behavior-based reminder sequences (SMS, voice, email)",
      "Two-way confirmations with instant rescheduling",
      "Automated waitlist backfill for cancellations",
      "Deposit & policy workflows for repeat offenders",
      "Pre-appointment intake to shorten check-in",
      "No-show analytics by provider, day, and type",
    ],
    outcomes: [
      { metric: "up to 60%", label: "reduction in no-shows" },
      { metric: "Minutes", label: "to backfill a cancelled slot" },
      { metric: "$0", label: "of staff time spent on confirmations" },
    ],
  },
  {
    slug: "patient-reactivation",
    icon: RefreshCcw,
    name: "Patient Recall & Reactivation",
    short:
      "Reconnect with overdue hygiene patients, inactive patients, and unscheduled treatment cases through personalized follow-up that turns your existing patient database into new appointments.",
    image:
      "https://images.unsplash.com/photo-1588776813677-77aaf5595b83?w=1600&q=80",
    heroLine:
      "Your next production opportunity is already sitting inside your patient database.",
    pains: [
      {
        stat: "15–20%",
        text: "of the average practice's patient base is lost to attrition every single year — mostly through silence.",
      },
      {
        stat: "$75,000",
        text: "in near-term revenue sits in a typical practice's database as unscheduled hygiene patients alone.",
      },
      {
        stat: "66¢",
        text: "of every diagnosed treatment dollar never makes it onto the schedule at the average practice.",
      },
    ],
    stats: [
      {
        number: "20–35%",
        text: "of lapsed patients reactivated",
        title: "Through multi-touch outreach",
      },
      {
        number: "$40–100K",
        text: "Typical annual recovery",
        title: "Per practice location",
      },
      {
        number: "3",
        text: "Segments targeted automatically",
        title: "Recall, lapsed & unscheduled treatment",
      },
      {
        number: "0 hrs",
        text: "Staff time required to run it",
        title: "Fully automated sequences",
      },
    ],
    statsVariant: "compact",
    solution:
      "Instead of letting overdue patients disappear, we organize your database into meaningful groups such as overdue hygiene visits, inactive patients, and unfinished treatment plans. Each group receives personalized follow-up through text, email, or voice until they book an appointment or choose not to continue. Your front desk no longer has to manually work through long patient lists, while your practice consistently brings existing patients back into the schedule.",
    deliverables: [
      "Database segmentation: recall, lapsed, unscheduled treatment",
      "Multi-touch reactivation sequences (SMS, email, voice)",
      "Treatment-plan follow-up campaigns",
      "Personalization by patient history & preferences",
      "Automatic booking into open hygiene capacity",
      "Recovered-production reporting, per campaign",
    ],
    outcomes: [
      { metric: "20–35%", label: "of lapsed patients reactivated" },
      { metric: "$40–100K", label: "typical annual recovery per location" },
      { metric: "0 hrs", label: "of staff time to run it" },
    ],
  },
  {
    slug: "insurance-verification",
    icon: ShieldCheck,
    name: "Insurance Verification & Claims Automation",
    short:
      "Verify patient benefits before every appointment and catch claim errors before submission, reducing denials, speeding up payments, and saving hours of administrative work.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
    heroLine:
      "Spend less time on insurance paperwork and more time caring for patients.",
    pains: [
      {
        stat: "20%",
        text: "of dental claims are denied on first submission; 42% of denials trace back to verification errors.",
      },
      {
        stat: "2–3 hrs",
        text: "per day is what a front-desk coordinator in a 3-chair practice spends on manual verification.",
      },
      {
        stat: "$50–120K",
        text: "in annual revenue is lost or delayed by claim denials at the average practice.",
      },
    ],
    stats: [
      {
        number: "73%",
        text: "Fewer claim denials",
        title: "With automated pre-visit verification",
      },
      {
        number: "10–15 hrs",
        text: "Weekly rework eliminated",
        title: "Time back for your front desk",
      },
      {
        number: "100%",
        text: "Visits pre-verified",
        title: "Before the patient walks in",
      },
      {
        number: "Faster",
        text: "Collections, fewer surprises",
        title: "For your patients and your billing",
      },
    ],
    statsVariant: "default",
    solution:
      "Patient eligibility is verified before every visit so your team has accurate coverage information before the patient arrives. Benefit details, remaining maximums, frequencies, and estimates are prepared in advance, reducing last-minute surprises. Claims are checked before submission to catch common mistakes that often lead to delays or denials. The result is fewer corrections, faster reimbursements, and significantly less administrative work for your front desk.",
    deliverables: [
      "Automated pre-visit eligibility verification",
      "Coverage breakdowns attached to the chart",
      "AI claim-scrubbing before submission",
      "Denial tracking & resubmission workflows",
      "Patient cost-estimate generation",
      "RCM dashboard: denials, aging, collections",
    ],
    outcomes: [
      { metric: "~73%", label: "fewer denials with automated verification" },
      { metric: "10–15 hrs", label: "of weekly rework eliminated" },
      { metric: "Faster", label: "collections, fewer billing surprises" },
    ],
  },
  {
    slug: "speed-to-lead",
    icon: Zap,
    name: "Speed-to-Lead & Consult Conversion",
    short:
      "Respond to every new lead within seconds, book consultations faster, and keep following up until patients either start treatment or choose not to move forward.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1600&q=80",
    heroLine: "The faster you respond, the more consultations you keep.",
    pains: [
      {
        stat: "Minutes",
        text: "decide elective cases. A $200 ad lead answered in 4 hours instead of 4 minutes is mostly wasted spend.",
      },
      {
        stat: "$3K–50K",
        text: "case values in ortho and cosmetic make every unconverted consult the most expensive leak in the building.",
      },
      {
        stat: "No-starts",
        text: "— consults that never begin treatment — quietly erase the ROI of your entire marketing funnel.",
      },
    ],
    stats: [
      {
        number: "<60 sec",
        text: "Response time on every channel",
        title: "Every lead, every time",
      },
      {
        number: "2×",
        text: "Show-rate improvement",
        title: "For booked consultations",
      },
      {
        number: "24/7",
        text: "Lead coverage, no exceptions",
        title: "Nights and weekends included",
      },
      {
        number: "Full",
        text: "Funnel visibility",
        title: "From first click to production",
      },
    ],
    statsVariant: "reverse",
    solution:
      "Every new inquiry from your website, ads, social media, or messaging channels receives an immediate response instead of waiting for office hours. Prospective patients can ask questions, schedule consultations, and receive reminders leading up to their visit. After the consultation, consistent follow-ups help move undecided patients toward treatment without adding extra work for your treatment coordinator. Your team stays focused on closing cases instead of chasing leads.",
    deliverables: [
      "Sub-60-second AI response on every channel",
      "Lead qualification & financing pre-screening",
      "Consult booking with show-rate optimization",
      "Post-consult nurture until treatment start",
      "Ad-source ROI tracking per booked case",
      "CRM your coordinators will actually use",
    ],
    outcomes: [
      { metric: "< 1 min", label: "response to every paid lead" },
      { metric: "2×", label: "typical consult show-rate improvement" },
      { metric: "Full", label: "funnel visibility, lead to production" },
    ],
  },
  {
    slug: "dso-command-center",
    icon: LayoutDashboard,
    name: "DSO Command Center & Analytics",
    short:
      "Manage every location from one dashboard with consistent patient communication, standardized workflows, and real-time performance insights across your entire organization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    heroLine:
      "Give every location the same high standard of patient experience.",
    pains: [
      {
        stat: "30–40%",
        text: "annual front-desk turnover means processes live in people's heads — and leave with them.",
      },
      {
        stat: "N systems",
        text: "for N locations: every office answering phones, booking, and billing its own way, invisible to the group.",
      },
      {
        stat: "Weeks",
        text: "to consolidate numbers that a group operator needs daily to act on.",
      },
    ],
    stats: [
      {
        number: "1",
        text: "Playbook enforced everywhere",
        title: "Across every single location",
      },
      {
        number: "Daily",
        text: "Visibility into performance",
        title: "Instead of month-end surprises",
      },
      {
        number: "N→1",
        text: "Systems unified into one view",
        title: "One dashboard, every office",
      },
      {
        number: "Instant",
        text: "Scaling for new locations",
        title: "Onboard in days, not months",
      },
    ],
    statsVariant: "compact",
    solution:
      "Instead of every location handling calls, bookings, and follow-ups differently, your entire organization works from one consistent operating system. Leadership can monitor answer rates, appointments, cancellations, production trends, and patient engagement across every office from a single dashboard. Individual locations can still follow their own preferences where needed, while group-wide standards ensure every patient receives the same level of service. As new locations are added, the same workflows can be rolled out without starting from scratch.",
    deliverables: [
      "Cross-location dashboard: calls, bookings, production",
      "Standardized AI call & follow-up workflows",
      "Per-location benchmarking & leak detection",
      "Centralized or hybrid patient-access models",
      "Phased rollout with staff training included",
      "Custom integrations across mixed PMS stacks",
    ],
    outcomes: [
      { metric: "1", label: "playbook enforced across all locations" },
      { metric: "Daily", label: "visibility instead of month-end surprises" },
      { metric: "Scales", label: "instantly with every acquisition" },
    ],
  },
  {
    slug: "custom-ai-apps",
    icon: Blocks,
    name: "Custom AI Apps & Integrations",
    short:
      "Custom software, patient portals, internal tools, and practice integrations built specifically for the way your dental business operates—without forcing you into off-the-shelf solutions.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80",
    heroLine: "When your workflow is unique, your software should be too.",
    pains: [
      {
        stat: "Gaps",
        text: "between your PMS, your phones, your marketing stack, and your lab — bridged today by staff copying data between screens.",
      },
      {
        stat: "Labs",
        text: "lose hours daily to 'where's my case?' calls and re-keying prescriptions from faxes and emails.",
      },
      {
        stat: "Ideas",
        text: "for patient experiences your competitors don't have — stuck for lack of a technical partner who knows dentistry.",
      },
    ],
    stats: [
      {
        number: "Weeks",
        text: "From scope to shipped",
        title: "Not months of back-and-forth",
      },
      {
        number: "100%",
        text: "Ownership of your product",
        title: "You own the code and the data",
      },
      {
        number: "1 team",
        text: "Design, build & maintain",
        title: "One point of accountability",
      },
      {
        number: "∞",
        text: "Customization",
        title: "Built around your exact workflow",
      },
    ],
    statsVariant: "default",
    solution:
      "Every dental practice, DSO, and lab has workflows that standard software can't fully support. We design and build custom applications that fit the way your business already operates—from patient portals and treatment presentation tools to lab management systems, referral platforms, reporting dashboards, and deep practice management integrations. Whether you need a completely new product or want your existing systems to work together, we build software that scales with your business and continue supporting it long after launch.",
    deliverables: [
      "Patient-facing web & mobile apps",
      "Lab case tracking & dentist communication portals",
      "Custom PMS integrations & data pipelines",
      "Internal dashboards & workflow tools",
      "AI features: triage, summarization, document automation",
      "Ongoing support from the team that built it",
    ],
    outcomes: [
      { metric: "Weeks", label: "from scope to shipped" },
      { metric: "Yours", label: "— you own the product and the data" },
      { metric: "1 team", label: "for design, build & maintenance" },
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
