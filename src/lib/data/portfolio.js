/**
 * DUMMY PORTFOLIO — placeholder case studies for preview & layout.
 * The client will replace these with real engagements before outreach.
 * Structure per case study: problem → approach → solution → results.
 */
export const caseStudies = [
  {
    slug: "brightway-dental-missed-calls",
    client: "Brightway Family Dental",
    segment: "Solo Practice",
    location: "Austin, TX",
    tag: "AI Voice Receptionist",
    services: ["ai-voice-receptionist", "missed-call-recovery"],
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80",
    headline: "From 38% missed calls to a phone that never rings out",
    summary:
      "A busy two-chair practice was missing more than a third of its inbound calls. We put an AI receptionist on their lines and recovered the patients they were already paying to attract.",
    problem:
      "Brightway's two front-desk coordinators were doing five jobs at once. Call tracking showed 38% of inbound calls went unanswered during business hours — and the phones went completely dark after 5 PM, exactly when most patients try to book. New-patient ad spend was effectively subsidizing the next practice down the road.",
    approach:
      "We started with a two-week call audit to quantify the leak: volumes by hour, abandonment points, and the revenue attached to each missed new-patient call. Then we deployed a dental-trained AI voice agent on their existing numbers, integrated with their PMS, with escalation rules the owner approved line by line.",
    solution:
      "The AI now answers every call within two rings — including nights, weekends, and the Monday-morning storm. It books directly into open slots, answers insurance and pricing questions from an approved script, texts back any caller who hangs up early, and routes emergency language straight to the on-call line.",
    results: [
      { metric: "98%", label: "call answer rate, up from 62%" },
      { metric: "41", label: "new patients booked after hours in 90 days" },
      { metric: "$62K", label: "attributed production in the first quarter" },
      { metric: "0", label: "front-desk hires needed" },
    ],
    quote:
      "The first Monday it was live, my front desk actually got to greet the patients standing in front of them. That alone was worth it — the after-hours bookings are just the bonus.",
    quoteBy: "Practice Owner, Brightway Family Dental",
    duration: "Live in 48 hours · 90-day results shown",
  },
  {
    slug: "lakeshore-group-no-shows",
    client: "Lakeshore Dental Group",
    segment: "Multi-Location Practice",
    location: "Chicago, IL — 5 locations",
    tag: "No-Show Prevention",
    services: ["no-show-prevention", "smart-scheduling"],
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1600&q=80",
    headline: "Cutting a 19% no-show rate to 7% across five offices",
    summary:
      "Five locations, five different confirmation habits, and a no-show rate quietly draining six figures a year. We standardized reminders and automated waitlist backfill group-wide.",
    problem:
      "Each Lakeshore office ran its own confirmation routine — some called, some texted, one relied on a printed list. Group no-show rate averaged 19%, with the worst office at 26%. Cancelled slots stayed empty because backfilling from the waitlist required a coordinator to drop everything and start dialing.",
    approach:
      "We analyzed 18 months of appointment data to find no-show patterns by office, provider, appointment type, and patient history — then designed one standardized, behavior-based reminder system with per-location routing, and an automated waitlist engine to catch what reminders couldn't.",
    solution:
      "Every appointment now gets a sequence tuned to its risk profile: more touches for historically unreliable slots, two-way confirmations that turn a 'can't make it' into an instant reschedule, and a waitlist engine that offers freshly opened slots to matching patients within minutes — no coordinator required.",
    results: [
      { metric: "19% → 7%", label: "group no-show rate in 4 months" },
      { metric: "63%", label: "of late cancellations backfilled automatically" },
      { metric: "$28K/mo", label: "estimated recovered production group-wide" },
      { metric: "5/5", label: "offices on one standard playbook" },
    ],
    quote:
      "We'd tried reminder apps before. The difference here was the waitlist backfill — an empty 2 PM slot filling itself while the coordinator is with a patient still feels like a magic trick.",
    quoteBy: "Regional Operations Manager, Lakeshore Dental Group",
    duration: "6-week rollout · 4-month results shown",
  },
  {
    slug: "summitcare-dso-command-center",
    client: "SummitCare Dental Partners",
    segment: "DSO",
    location: "Southeast US — 24 locations",
    tag: "DSO Command Center",
    services: ["dso-command-center", "ai-voice-receptionist"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    headline: "One patient-access playbook across 24 acquired practices",
    summary:
      "A growing DSO couldn't see — let alone standardize — how 24 acquired offices handled phones and follow-up. We built their command center and put patient access on AI rails.",
    problem:
      "SummitCare had grown by acquisition: 24 locations, three different PMS platforms, and front-desk turnover near 35% a year. Leadership had no daily visibility into answer rates or booking conversion, and every attempt to standardize by memo had died in the field. Month-end reports arrived too late to act on.",
    approach:
      "Technology was the easy half. We phased the rollout in waves of four locations, with office managers involved in script design from day one — because DSO rollouts fail on change management, not software. AI call handling went in first as overflow support, never as a staff replacement, which turned front desks from resisters into requesters.",
    solution:
      "A group-wide command center now benchmarks every office daily on answer rate, booking conversion, no-shows, and recovered revenue — normalized across all three PMS platforms. Standardized AI workflows handle overflow calls, after-hours coverage, reminders, and recall outreach at every location, with local customization where clinical workflows genuinely differ.",
    results: [
      { metric: "24", label: "locations on one dashboard, daily" },
      { metric: "91%", label: "group answer rate, up from an estimated 64%" },
      { metric: "11 pts", label: "spread between best and worst office — down from 31" },
      { metric: "3 PMS", label: "platforms unified in one reporting layer" },
    ],
    quote:
      "For the first time since we started acquiring, Monday's leadership call runs on last week's numbers instead of last month's. And the offices asked us to expand the AI coverage — that never happens with rollouts.",
    quoteBy: "VP of Operations, SummitCare Dental Partners",
    duration: "24 locations in 4 phased waves over 5 months",
  },
  {
    slug: "align-orthodontics-speed-to-lead",
    client: "Align & Co. Orthodontics",
    segment: "Orthodontic Clinic",
    location: "Phoenix, AZ",
    tag: "Speed-to-Lead",
    services: ["speed-to-lead"],
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1600&q=80",
    headline: "Sub-60-second lead response doubled consult show rates",
    summary:
      "An ortho practice was spending heavily on ads and losing leads to slow follow-up. We wired every channel to an AI engagement layer that responds in under a minute and nurtures to treatment start.",
    problem:
      "Align & Co. was generating 120+ leads a month from Instagram and Google at roughly $180 each — then calling them back whenever the treatment coordinator got free, often hours later. Barely half of booked consults showed, and nobody tracked which no-showed leads ever came back. Six figures of annual ad spend was leaking at every stage of the funnel.",
    approach:
      "We mapped the full funnel from ad click to treatment start and instrumented every stage. Then we connected all lead sources — forms, DMs, missed calls — to one AI engagement layer with a single rule: no inquiry waits more than 60 seconds, ever.",
    solution:
      "Every lead now gets an instant, personalized two-way conversation that qualifies interest, pre-screens financing questions, and books the consult on the spot. Show-rate sequences run automatically before every consult, and post-consult nurture continues until the patient starts treatment or clearly opts out — with every case tracked back to its ad source.",
    results: [
      { metric: "< 60 sec", label: "response time on every lead, every channel" },
      { metric: "52% → 81%", label: "consult show rate" },
      { metric: "2.3×", label: "treatment starts from the same ad budget" },
      { metric: "$0", label: "added ad spend to get there" },
    ],
    quote:
      "We didn't need more leads — we needed to stop wasting the ones we had. Same budget, more starts. The ROI conversation with my CPA got very short.",
    quoteBy: "Owner-Orthodontist, Align & Co. Orthodontics",
    duration: "3-week implementation · 6-month results shown",
  },
  {
    slug: "lumiere-cosmetic-reactivation",
    client: "Lumière Cosmetic Dentistry",
    segment: "Cosmetic Clinic",
    location: "Miami, FL",
    tag: "Patient Reactivation",
    services: ["patient-reactivation", "missed-call-recovery"],
    image:
      "https://images.unsplash.com/photo-1588776813677-77aaf5595b83?w=1600&q=80",
    headline: "Waking a 4,800-patient database worth six figures",
    summary:
      "A high-end cosmetic studio had years of consults and past patients sitting silent in its database. Systematic AI reactivation turned the list they already owned into booked production.",
    problem:
      "Lumière's database held 4,800 past patients and consulted-but-never-started prospects — whitening patients who never returned, veneer consults who 'wanted to think about it,' and treatment plans presented but never scheduled. With average case values from $2,500 to $30,000, the dormant list was worth more than a year of new-patient marketing — and nobody had time to work it.",
    approach:
      "We segmented the database by treatment history, case value, and recency, then built persistent, brand-matched outreach sequences — the tone of a luxury studio, not a call center — with AI handling replies and booking, and the front desk only stepping in for warm, ready-to-book conversations.",
    solution:
      "Dormant segments now receive tasteful multi-touch sequences: whitening renewals, veneer consult revivals with financing options, and treatment-plan follow-ups timed to the patient's original interest. Every reply is answered in seconds, every booking lands on the schedule, and every recovered case is reported with its production value.",
    results: [
      { metric: "27%", label: "of dormant patients re-engaged in 5 months" },
      { metric: "$214K", label: "in booked production from the dormant list" },
      { metric: "38", label: "previously stalled treatment plans scheduled" },
      { metric: "9:1", label: "return on the program's total cost" },
    ],
    quote:
      "These were people who already knew us and already wanted the work. All it took was following up like we meant it — which, honestly, we never had the hands to do.",
    quoteBy: "Founder, Lumière Cosmetic Dentistry",
    duration: "5-month campaign · ongoing",
  },
  {
    slug: "crownpoint-lab-automation",
    client: "Crownpoint Dental Lab",
    segment: "Dental Lab",
    location: "Denver, CO",
    tag: "Custom AI Apps",
    services: ["custom-ai-apps"],
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1600&q=80",
    headline: "Killing 'where's my case?' calls with a live client portal",
    summary:
      "A 22-technician lab was losing hours daily to status calls and re-keyed prescriptions. We built a case-tracking portal and AI intake that gave dentists answers — and technicians their day back.",
    problem:
      "Crownpoint's technicians were interrupted all day by dentist offices calling for case status, while the front office re-keyed prescriptions from faxes, emails, and photos into their lab software — an error-prone process that fed the lab's costliest problem: remakes caused by ambiguous instructions and missed details.",
    approach:
      "We shadowed the lab floor for a week and mapped every interruption and re-keying step to its cost. The design brief that emerged was simple: dentists should never need to call for status, and a prescription should be entered exactly once — by the dentist.",
    solution:
      "A custom client portal now gives every dentist office live case status, due dates, and photos at every stage — with automatic notifications at the milestones that used to trigger calls. AI-assisted digital intake reads incoming prescriptions, flags missing shade and margin details before the case hits the floor, and syncs directly with the lab's management software.",
    results: [
      { metric: "− 83%", label: "reduction in inbound status calls" },
      { metric: "− 31%", label: "remakes from incomplete prescriptions" },
      { metric: "9 hrs/wk", label: "of front-office re-keying eliminated" },
      { metric: "+ 14", label: "net new dentist accounts citing the portal" },
    ],
    quote:
      "Our techs used to lose whole afternoons to the phone. Now the phone barely rings, the cases arrive complete, and our dentists tell other dentists about the portal. It became a sales tool we didn't plan for.",
    quoteBy: "General Manager, Crownpoint Dental Lab",
    duration: "10-week build · results at 6 months",
  },
];

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
