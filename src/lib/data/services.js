import {
  PhoneCall, MessageSquareText, CalendarCheck2, BellRing,
  RefreshCcw, ShieldCheck, Zap, LayoutDashboard, Blocks,
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
      "A 24/7 AI receptionist that answers every call in a natural voice, books patients straight into your PMS, and escalates real emergencies to humans in seconds.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80",
    heroLine: "Your phones, answered around the clock — without hiring anyone.",
    pains: [
      { stat: "32–38%", text: "of calls to dental offices go unanswered during business hours — and most callers who hit voicemail simply dial the next practice." },
      { stat: "62%", text: "of patients try to reach practices after 5 PM, when nobody is there to pick up." },
      { stat: "$850+", text: "walks out the door with every missed new-patient call, before lifetime value is even counted." },
    ],
    solution:
      "We deploy a dental-trained AI voice agent on your existing phone lines. It answers instantly — nights, weekends, lunch rushes, and the Monday 9 AM storm — books, reschedules, and cancels appointments directly in your practice management system, answers the questions that eat your front desk's day, and detects emergency language to route urgent callers to your on-call staff immediately. Your team approves every script before a single patient hears it.",
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
      "Every missed call triggers an instant, intelligent text conversation that re-engages the patient and books them before your competitor's phone even rings.",
    image:
      "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=1600&q=80",
    heroLine: "Turn every missed call into a booked appointment — automatically.",
    pains: [
      { stat: "14%", text: "of new patients leave a voicemail when nobody answers. The other 86% are gone — most within minutes." },
      { stat: "~300", text: "calls per month go unanswered at the average practice. Each one had a reason to call you." },
      { stat: "$8,000", text: "in lifetime value rides on every new patient a competitor captures instead of you." },
    ],
    solution:
      "The moment a call is missed, our automation fires a personalized two-way SMS within seconds — while the patient still has their phone in hand. AI handles the conversation: answers questions, offers appointment slots, books directly into your schedule, and hands off to your team when a human touch is needed. Nothing falls through, and every recovered patient is logged with the revenue attached.",
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
      "Patients book, reschedule, and cancel themselves — online, by text, or by voice — with everything synced live to your PMS. No double-bookings, no phone tag.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1600&q=80",
    heroLine: "A schedule that fills itself — and stays accurate.",
    pains: [
      { stat: "5 jobs", text: "your front desk juggles at once. Scheduling phone tag is the one that steals the most hours." },
      { stat: "After 5 PM", text: "is when the majority of patients want to book — exactly when your office can't take the call." },
      { stat: "Hours/week", text: "are lost to reschedule ping-pong that software should be handling." },
    ],
    solution:
      "We build a scheduling layer on top of your existing PMS: real-time online booking that shows true availability, AI-assisted rescheduling by text and voice, appointment-type rules that protect production blocks, and automated confirmations. Your schedule stays under your rules — hygiene, new patient, and high-production slots are allocated the way you decide.",
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
      "Multi-step smart reminders slash no-shows, and when a cancellation still happens, AI instantly backfills the slot from your waitlist. Empty chairs become the exception.",
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1600&q=80",
    heroLine: "Stop paying staff to stare at empty chairs.",
    pains: [
      { stat: "15–20%", text: "average no-show rate across dental practices. Top performers run 1–5% — the difference is systems, not luck." },
      { stat: "$105K+", text: "lost annually by the average practice to missed appointments alone." },
      { stat: "1/day", text: "no-show is enough to cost a practice $20K–$70K a year, depending on production." },
    ],
    solution:
      "We design reminder sequences by appointment type and patient behavior — text, voice, and email in the mix that data says works (automated reminders cut no-shows by ~23% vs. manual methods in a study of 1.6M appointments). Confirmations are two-way, so a 'can't make it' becomes an instant reschedule. And when a slot opens late, our waitlist engine offers it to matching patients automatically — filled cancellations are pure recovered production.",
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
      "AI works your dormant patient list relentlessly — overdue hygiene, lapsed patients, unscheduled treatment — and turns the database you already own into booked production.",
    image:
      "https://images.unsplash.com/photo-1588776813677-77aaf5595b83?w=1600&q=80",
    heroLine: "The most profitable marketing list you own is the one nobody calls.",
    pains: [
      { stat: "15–20%", text: "of the average practice's patient base is lost to attrition every single year — mostly through silence." },
      { stat: "$75,000", text: "in near-term revenue sits in a typical practice's database as unscheduled hygiene patients alone." },
      { stat: "66¢", text: "of every diagnosed treatment dollar never makes it onto the schedule at the average practice." },
    ],
    solution:
      "We segment your patient database — overdue recall, lapsed 12+ months, unscheduled treatment plans — and run persistent, personalized outreach sequences that a busy front desk never could: the right message, on the right channel, until the patient books or opts out. Practices routinely reactivate 20–35% of lapsed patients with systematic follow-up; the AI's advantage is simply that it never gets busy and never gives up.",
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
      "Automated eligibility checks before every visit and AI claim-scrubbing before every submission — fewer denials, faster payment, and hours of front-desk time returned daily.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
    heroLine: "The 8-minute phone call your team makes 30 times a day — automated.",
    pains: [
      { stat: "20%", text: "of dental claims are denied on first submission; 42% of denials trace back to verification errors." },
      { stat: "2–3 hrs", text: "per day is what a front-desk coordinator in a 3-chair practice spends on manual verification." },
      { stat: "$50–120K", text: "in annual revenue is lost or delayed by claim denials at the average practice." },
    ],
    solution:
      "We automate eligibility verification ahead of every appointment — coverage, frequencies, maximums, and history pulled and attached to the chart before the patient arrives. On the back end, AI scrubs claims for the errors that cause denials before submission. Published comparisons show automated verification dropping denial rates from ~11.8% to ~3.2% — and your team gets their mornings back.",
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
      "For ortho and cosmetic practices: every ad lead gets an AI response in under a minute, gets nurtured to consult, and gets followed up until they start treatment.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1600&q=80",
    heroLine: "Your $200 lead deserves better than a next-day callback.",
    pains: [
      { stat: "Minutes", text: "decide elective cases. A $200 ad lead answered in 4 hours instead of 4 minutes is mostly wasted spend." },
      { stat: "$3K–50K", text: "case values in ortho and cosmetic make every unconverted consult the most expensive leak in the building." },
      { stat: "No-starts", text: "— consults that never begin treatment — quietly erase the ROI of your entire marketing funnel." },
    ],
    solution:
      "We connect your ad platforms, website, and social inboxes to an AI engagement layer that responds to every inquiry in under 60 seconds, qualifies the lead, books the consult, reminds them until they show, and runs the post-consult follow-up sequence until they start treatment or clearly decline. Your treatment coordinator walks into every consult with context — and never chases a lead manually again.",
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
      "One dashboard across every location: calls, bookings, no-shows, production, and RCM — with standardized AI workflows enforced group-wide.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    heroLine: "Run 5 or 200 locations like one well-managed practice.",
    pains: [
      { stat: "30–40%", text: "annual front-desk turnover means processes live in people's heads — and leave with them." },
      { stat: "N systems", text: "for N locations: every office answering phones, booking, and billing its own way, invisible to the group." },
      { stat: "Weeks", text: "to consolidate numbers that a group operator needs daily to act on." },
    ],
    solution:
      "We centralize patient access on AI rails: standardized call handling, booking rules, and follow-up workflows deployed across every location — with per-location customization where it matters and a group-level command center that benchmarks every office on answer rates, bookings, no-shows, and recovered revenue. Rollouts are phased and staff-friendly, because we know exactly why DSO tech projects usually fail: change management, not technology.",
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
      "Patient-facing apps, internal tools, lab workflow systems, and deep PMS integrations — custom-built for how your dental business actually runs.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80",
    heroLine: "When off-the-shelf doesn't fit, we build what does.",
    pains: [
      { stat: "Gaps", text: "between your PMS, your phones, your marketing stack, and your lab — bridged today by staff copying data between screens." },
      { stat: "Labs", text: "lose hours daily to 'where's my case?' calls and re-keying prescriptions from faxes and emails." },
      { stat: "Ideas", text: "for patient experiences your competitors don't have — stuck for lack of a technical partner who knows dentistry." },
    ],
    solution:
      "Our engineering team designs and ships custom software for dental businesses: patient mobile apps, treatment-plan presentation tools, lab case-tracking portals, referral management systems, and integrations that make your PMS talk to everything else you run. Scoped in weeks, not quarters — and maintained by the same team that built it.",
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
