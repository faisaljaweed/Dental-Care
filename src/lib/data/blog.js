/**
 * Blog content — grounded in the same industry research used across the site.
 * Body is an array of { h?, p } blocks rendered on the detail page.
 */
export const posts = [
  {
    slug: "why-dental-practices-miss-a-third-of-calls",
    title: "Why 1 in 3 Calls to Your Practice Goes Unanswered — and What It Actually Costs",
    excerpt:
      "Industry call-tracking data shows 32–38% of calls to dental offices ring out during business hours. Here's where those callers go, what they're worth, and how to catch them.",
    date: "June 24, 2026",
    readTime: "6 min read",
    category: "Front Office",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80",
    body: [
      { p: "Walk past any dental front desk at 9:15 on a Monday morning and you'll see the problem in real time: one coordinator checking in a patient, another verifying insurance on hold with a carrier, and a phone ringing that neither of them can physically reach. Call-tracking studies across the industry put the miss rate at 32–38% of inbound calls during business hours — at some locations, far higher." },
      { h: "Where missed callers actually go", p: "The uncomfortable data point: only about 14% of new patients leave a voicemail when nobody answers. The rest hang up — and roughly two-thirds of them call the next practice on their list within minutes. A missed call isn't a delayed conversation; for most new patients, it's a finished one." },
      { h: "The math practices avoid doing", p: "A missed new-patient call carries an average of $850 in first-year revenue and several thousand dollars in lifetime value. At a typical volume of a few hundred missed calls a month — even if only a fraction were new patients — the annual leak lands in six figures for many single-location practices. That's not a marketing problem. Every one of those callers had already chosen you." },
      { h: "Why hiring doesn't fix it", p: "The instinct is to add front-desk staff, but the economics rarely work: call volume spikes in bursts (Monday mornings, lunch hours, post-5 PM) that no static staffing plan can cover, and the majority of after-hours demand happens when nobody is scheduled at all. You'd be hiring for the busiest 90 minutes of the day and the hours the office is closed." },
      { h: "What actually closes the gap", p: "The practices solving this are layering AI call coverage over their existing team: instant answering for overflow and after-hours, direct booking into the PMS, and automatic text-back for any call that still slips through. The front desk keeps the human work — the patients standing in front of them — while the system catches everything the humans physically can't." },
    ],
  },
  {
    slug: "true-cost-of-dental-no-shows",
    title: "The True Cost of No-Shows — and Why Reminder Apps Alone Don't Fix Them",
    excerpt:
      "Average practices run 15–20% no-show rates while top performers sit at 1–5%. The difference isn't the reminder app — it's the system around it.",
    date: "June 10, 2026",
    readTime: "7 min read",
    category: "Operations",
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1600&q=80",
    body: [
      { p: "A single no-show per day costs a practice between $20,000 and $70,000 a year depending on average production — and the average practice runs a 15–20% no-show rate. Meanwhile, top-performing practices operate at 1–5%. Same patients, same economy, wildly different outcomes. The gap is systems." },
      { h: "What the data says works", p: "A study covering 1.6 million appointments across 64 dental practices found automated reminders reduced no-shows by roughly 23% compared to manual methods, with text reminders the single most effective channel. So yes — reminders work. But if reminders alone were the answer, every practice with a reminder app would be at 5%. Most aren't." },
      { h: "The three failures reminder apps don't solve", p: "First, one-size-fits-all sequences: a routine hygiene recall and a high-risk, twice-rescheduled new patient get the same two texts. Second, dead-end confirmations: a patient replies 'can't make it' and the thread just… ends, when it should instantly become a reschedule conversation. Third — and biggest — the empty slot itself: even a prevented no-show is only half the win if late cancellations still leave chairs empty." },
      { h: "Backfill is where the money is", p: "The highest-ROI mechanism in appointment management is the automated waitlist: when a slot opens, matching patients get offered it within minutes, no coordinator required. A filled cancellation is pure recovered production — and it's the piece almost no practice has automated." },
      { h: "The system, not the app", p: "Risk-based reminder sequences, two-way confirmations that reschedule on the spot, waitlist backfill for what still falls through, and reporting that shows recovered production monthly. That's the difference between owning a reminder app and running a no-show system." },
    ],
  },
  {
    slug: "dental-claim-denials-automation",
    title: "20% of Dental Claims Are Denied on First Submission. Most of It Is Preventable.",
    excerpt:
      "Verification errors cause 42% of denials, and reworking a claim costs 3–5× doing it right the first time. Here's the automation playbook for dental RCM.",
    date: "May 28, 2026",
    readTime: "8 min read",
    category: "Revenue Cycle",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
    body: [
      { p: "Dentists consistently rank insurance as their number-one operational headache — ahead of staffing and overhead. The numbers explain why: roughly 20% of dental claims are denied on first submission, denials cost the average practice $50,000–$120,000 a year in lost or delayed revenue, and front desks burn 10–15 hours a week on rework and appeals." },
      { h: "The root cause hides upstream", p: "About 42% of denials trace back to eligibility and verification errors — coverage that lapsed, frequency limits already used, maximums exhausted. In other words, nearly half the denial problem is decided before the patient ever sits in the chair, during a manual verification process that takes a coordinator 8–10 minutes of hold time per patient. In a 3-chair practice, that's 2–3 hours of phone time every day." },
      { h: "What automation changes", p: "Automated eligibility verification runs every patient ahead of the visit — coverage, frequencies, history, maximums — and attaches the breakdown to the chart in seconds. Published comparisons show practices moving from an 11.8% denial rate with manual verification to 3.2% with automation: roughly 73% fewer denials, before anyone touches a claim." },
      { h: "Scrub before you submit", p: "The second layer is AI claim-scrubbing: catching missing attachments, coding mismatches, and payer-specific quirks before submission instead of in a rejection letter three weeks later. Reworking a denied claim costs 3–5× more than submitting it clean — prevention isn't just faster, it's structurally cheaper." },
      { h: "Where to start", p: "Don't boil the RCM ocean. Automate eligibility first (biggest denial driver, biggest time sink), add claim-scrubbing second, then denial-tracking dashboards third. Practices that sequence it this way typically see collections speed up within the first billing cycle — and get their front desk's mornings back immediately." },
    ],
  },
  {
    slug: "dso-centralization-playbook",
    title: "The DSO Centralization Playbook: Why Rollouts Fail and How to Run One That Doesn't",
    excerpt:
      "Centralizing patient access across acquired practices fails on change management, not technology. A phased playbook from the operators who've done it.",
    date: "May 12, 2026",
    readTime: "9 min read",
    category: "DSO & Groups",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    body: [
      { p: "Every growing DSO hits the same wall: a portfolio of acquired practices, each answering phones, booking, and billing its own way — and a leadership team flying blind between month-end reports. The obvious answer is centralization. The uncomfortable truth is that most centralization projects underdeliver, and almost never because the software was wrong." },
      { h: "Why rollouts actually fail", p: "Three patterns show up in nearly every failed rollout. Location managers who built their own processes over years resist systems that erase their autonomy. Front-desk turnover of 30–40% a year means training evaporates as fast as it's delivered. And rollouts framed as replacement — 'the new system will handle calls now' — turn every front desk into an opponent on day one." },
      { h: "Lead with relief, not replacement", p: "The single biggest lever is positioning: deploy AI call handling as overflow and after-hours support first. When the system catches the calls staff physically couldn't get to — instead of taking the calls they could — front desks become the rollout's advocates. In our experience, offices start requesting expanded coverage within weeks. That request is the green light for deeper standardization." },
      { h: "Phase in waves, benchmark in daylight", p: "Roll out in waves of three to five locations, with office managers co-designing scripts and escalation rules for their own offices. Stand up the group dashboard early — answer rates, booking conversion, no-shows, recovered revenue per location — and share it openly. Per-location benchmarking does the enforcement a memo never could: nobody wants to be the office explaining the red row." },
      { h: "What good looks like", p: "A mature setup runs one patient-access playbook across every location — with deliberate local exceptions, not accidental ones — on top of whatever mix of PMS platforms the acquisitions brought. Leadership sees yesterday's numbers today. And when the next acquisition closes, patient access is standardized in weeks, because the playbook already exists." },
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
