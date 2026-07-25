/**
 * Blog content — grounded in the same industry research used across the site.
 * Every post ties back to one of the two products without reading as an advert.
 * Body is an array of { h?, p } blocks rendered on the detail page.
 */
export const posts = [
  {
    slug: "why-dental-practices-miss-a-third-of-calls",
    title:
      "Why 1 in 3 Calls to Your Practice Goes Unanswered — and What It Costs",
    excerpt:
      "Call-tracking data puts the miss rate at 32–38% during opening hours. Here's where those callers go, what they're worth, and why hiring doesn't fix it.",
    date: "June 24, 2026",
    readTime: "6 min read",
    category: "Front Office",
    image: "/Images/dental_operations_01.jpeg",
    body: [
      {
        p: "Walk past any dental front desk at 9:15 on a Monday and you'll see the problem in real time: one coordinator checking in a patient, another on hold with a carrier, and a phone ringing that neither can physically reach. Call-tracking studies across the industry put the miss rate at 32–38% of inbound calls during opening hours — at some locations, considerably higher.",
      },
      {
        h: "Where missed callers actually go",
        p: "Only about 14% of new patients leave a voicemail when nobody answers. The rest hang up, and roughly two-thirds call the next practice on their list within minutes. A missed call isn't a delayed conversation. For most new patients, it's a finished one.",
      },
      {
        h: "The maths practices avoid doing",
        p: "A missed new-patient call carries an average of $850 in first-year revenue and several thousand in lifetime value. At a few hundred missed calls a month — even if only a fraction are new patients — the annual leak lands in six figures for many single locations. That isn't a marketing problem. Every one of those callers had already chosen you.",
      },
      {
        h: "Why hiring doesn't close it",
        p: "The instinct is to add front-desk staff, but the economics rarely work. Call volume arrives in bursts — Monday mornings, lunch hours, immediately after 5 PM — that no static rota covers, and a large share of demand happens when the office is shut entirely. You'd be hiring for the busiest ninety minutes of the day and for hours nobody is scheduled.",
      },
      {
        h: "What actually closes it",
        p: "The practices solving this layer automated call coverage over their existing team: instant answering for overflow and after-hours, direct booking into the PMS, and an automatic text-back for anything that still slips through. The front desk keeps the human work — the patients standing in front of them — while the system catches what humans physically can't.",
      },
    ],
  },
  {
    slug: "true-cost-of-dental-no-shows",
    title: "What a No-Show Actually Costs — and Why Reminders Alone Don't Work",
    excerpt:
      "The average practice runs a 15–20% no-show rate while top performers sit at 1–5%. The gap isn't patient quality. It's what happens after the reminder is sent.",
    date: "June 10, 2026",
    readTime: "7 min read",
    category: "Scheduling",
    image: "/Images/dental_operations_02.jpeg",
    body: [
      {
        p: "A single no-show a day costs a typical practice somewhere between $20,000 and $70,000 a year, depending on production per chair. Across the industry the average no-show rate sits between 15% and 20%, while the best-run practices hold 1–5%. The difference is almost never the patient base.",
      },
      {
        h: "One-way reminders are a notification, not a system",
        p: "Most practices already send reminders. The problem is that a one-way text tells a patient about an appointment they can't do anything about. If they can't make Thursday, their options are to phone during working hours or to simply not turn up — and the second is easier. The reminder did its job and the chair still sat empty.",
      },
      {
        h: "Two-way changes the outcome, not just the message",
        p: "When a patient can reply 'can't make it' and immediately be offered three alternatives, a no-show becomes a reschedule. Same patient, same production, different slot. That single change accounts for most of the improvement practices see, before any clever risk modelling gets involved.",
      },
      {
        h: "The cancelled slot is the second half of the problem",
        p: "A reschedule leaves a hole in Thursday. Filling it manually means a coordinator dropping what they're doing to call down a waitlist, which is why it usually doesn't happen. Automated backfill offers the opening to matching patients within minutes — and because it runs without anyone's attention, it runs every time.",
      },
      {
        h: "What to measure",
        p: "Track no-show rate by provider, by appointment type and by day of week rather than as one practice-wide number. The pattern is usually concentrated: a particular hygiene column, a particular time slot, a particular cohort of patients. Knowing which one tells you whether you have a reminder problem, a scheduling problem or a patient-communication problem.",
      },
    ],
  },
  {
    slug: "questions-to-ask-an-ai-receptionist-vendor",
    title:
      "Nine Questions to Ask Before You Put an AI Receptionist on Your Website",
    excerpt:
      "Most dental chatbots are a contact form with a personality. These are the questions that separate the ones that book appointments from the ones that collect email addresses.",
    date: "May 28, 2026",
    readTime: "8 min read",
    category: "AI Receptionist",
    image: "/Images/dental_operations_03.jpeg",
    body: [
      {
        p: "The category has filled up quickly, and most of what's marketed as an AI dental receptionist is a scripted widget that captures a name and promises someone will be in touch. That's a contact form with a typing animation. Here's how to tell the difference on a demo call.",
      },
      {
        h: "What material is it trained on?",
        p: "Ask specifically whether it answers from your treatment list, your fee ranges, your insurance panel and your policies — or from general dental knowledge. A receptionist who can't tell a patient what you charge for a crown, or whether you take their plan, cannot finish the conversation.",
      },
      {
        h: "What happens when it doesn't know?",
        p: "This is the most important question and the one vendors dislike. A well-built assistant says it doesn't know and offers a consultation or a callback. A badly built one guesses, and you find out when a patient arrives expecting a price you never quoted. Ask to see the refusal behaviour live.",
      },
      {
        h: "Does it book, or does it collect?",
        p: "Booking means checking live availability in your practice management system and writing the appointment. Collecting means taking details for someone to follow up on later. Only one of these works at 11 PM, which is when a large share of enquiries arrive.",
      },
      {
        h: "Who can change an answer, and how fast?",
        p: "Fees change, providers leave, a plan goes out of network. If correcting an answer means a support ticket and a two-week wait, the assistant will drift out of date within a quarter. Your office manager should be able to fix an answer in plain language and see it take effect immediately.",
      },
      {
        h: "What about the clinical line?",
        p: "Ask what it will refuse to do. Diagnosing over chat, advising on symptoms, guaranteeing outcomes and quoting outside approved ranges should all be explicitly out of scope, routed to a booked visit instead. A vendor who hasn't thought about this hasn't worked in healthcare.",
      },
      {
        h: "And the paperwork",
        p: "A signed BAA before onboarding, encryption in transit and at rest, access logging, and a clear answer on where conversations are stored and for how long. If the BAA is an enterprise-tier upgrade rather than step one, that tells you how the vendor thinks about patient data.",
      },
    ],
  },
  {
    slug: "dental-claim-denials-automation",
    title:
      "Where Dental Claim Denials Actually Start — and How Far Upstream to Fix Them",
    excerpt:
      "One in five dental claims is denied first time round, and 42% of those denials trace back to something that went wrong before the patient sat down.",
    date: "May 12, 2026",
    readTime: "8 min read",
    category: "Revenue Cycle",
    image: "/Images/dental_operations_04.jpeg",
    body: [
      {
        p: "Roughly 20% of dental claims are denied on first submission. The instinct is to treat this as a billing problem and to put effort into resubmission — but around 42% of denials trace back to verification, which happens days earlier and in a different part of the practice entirely.",
      },
      {
        h: "The error is usually upstream of billing",
        p: "Coverage that lapsed, a frequency limitation already used, a maximum already met, a plan the patient changed at open enrolment and didn't mention. None of these are billing mistakes. They're information the practice didn't have when the appointment was booked, and by the time the claim is rejected the treatment has already been delivered.",
      },
      {
        h: "Why manual verification loses",
        p: "A coordinator in a three-chair practice spends two to three hours a day on eligibility checks — hold music, portals, and carrier phone trees. On a busy day, verification is the task that gets skipped, and it gets skipped for tomorrow's patients rather than today's, which is precisely the wrong direction.",
      },
      {
        h: "Verify before the visit, scrub before submission",
        p: "Two changes account for most of the improvement. First, verify every appointment automatically before the patient arrives, with the breakdown attached to the chart so nobody is quoting coverage from memory. Second, check claims for the common error patterns before they go out rather than discovering them in the aging report weeks later.",
      },
      {
        h: "What it's worth",
        p: "Practices that move verification upstream typically report substantially fewer denials and ten to fifteen hours of weekly rework returned to the front desk. The second number tends to matter more day to day: that time goes back to patients standing at the counter, which is the job the practice actually hired for.",
      },
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
