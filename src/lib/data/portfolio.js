/**
 * PLACEHOLDER CASE STUDIES — for preview and layout.
 * The client will replace these with real engagements before outreach.
 *
 * Every study maps to one or both products. `products` holds product slugs so
 * detail pages can link back into /platform without a second source of truth.
 * Structure per study: problem → approach → solution → results.
 */
export const caseStudies = [
  {
    slug: "brightway-dental-missed-calls",
    client: "Brightway Family Dental",
    segment: "Private Practice",
    location: "Austin, TX",
    tag: "AI Dental Software",
    products: ["ai-dental-software"],
    image: "/Images/Real_Dental_01.jpeg",
    headline: "From 38% of calls missed to a phone that never rings out",
    summary:
      "A two-chair practice was missing more than a third of its calls. The software went on their existing lines and started booking the patients they were already paying to attract.",
    problem:
      "Brightway's two coordinators were doing five jobs at once. Call tracking showed 38% of inbound calls went unanswered during opening hours, and the phones went dark after 5 PM — exactly when most patients try to book. Their new-patient ad spend was effectively subsidising the practice down the road.",
    approach:
      "We started with a two-week call audit to size the leak: volume by hour, where callers abandoned, and the revenue attached to each missed new-patient call. Then we put the software on their existing numbers, connected it to Open Dental, and wrote escalation rules the owner approved line by line.",
    solution:
      "Every call is now answered within two seconds — including nights, weekends and the Monday morning surge. It books into open slots, answers insurance and pricing questions from approved material, texts back anyone who hangs up early, and routes emergency language straight to the on-call line.",
    results: [
      { metric: "98%", label: "of calls answered, up from 62%" },
      { metric: "41", label: "new patients booked after hours in 90 days" },
      { metric: "$62K", label: "attributed production in the first quarter" },
      { metric: "0", label: "front-desk hires needed" },
    ],
    quote:
      "The first Monday it was live, my front desk actually got to greet the patients standing in front of them. The after-hours bookings were the bonus.",
    quoteBy: "Practice Owner, Brightway Family Dental",
    duration: "Live in 48 hours · 90-day results shown",
  },
  {
    slug: "lakeshore-group-no-shows",
    client: "Lakeshore Dental Group",
    segment: "Multi-Location Practice",
    location: "Chicago, IL — 5 locations",
    tag: "AI Dental Software",
    products: ["ai-dental-software"],
    image: "/Images/Real_Dental_02.jpeg",
    headline: "Cutting a 19% no-show rate to 7% across five offices",
    summary:
      "Five locations, five different confirmation habits, and a no-show rate quietly draining six figures a year. Reminders and waitlist backfill were standardised group-wide.",
    problem:
      "Each Lakeshore office ran its own confirmation routine — some called, some texted, one worked from a printed list. The group no-show rate averaged 19%, with the worst office at 26%. Cancelled slots stayed empty because backfilling meant a coordinator dropping everything to start dialling.",
    approach:
      "We analysed 18 months of appointment data to find no-show patterns by office, provider, appointment type and patient history. That produced one standardised reminder system with per-location routing, plus an automated waitlist engine for what reminders couldn't catch.",
    solution:
      "Every appointment now gets a sequence tuned to its risk: more touches for historically unreliable slots, two-way confirmations that turn a 'can't make it' into an instant reschedule, and a waitlist engine that offers freshly opened slots to matching patients within minutes.",
    results: [
      { metric: "19% → 7%", label: "group no-show rate in 4 months" },
      {
        metric: "63%",
        label: "of late cancellations backfilled automatically",
      },
      { metric: "$28K/mo", label: "estimated recovered production group-wide" },
      { metric: "5/5", label: "offices on one standard playbook" },
    ],
    quote:
      "We'd tried reminder apps before. The difference was the backfill — an empty 2 PM slot filling itself while the coordinator is with a patient still feels like a trick.",
    quoteBy: "Regional Operations Manager, Lakeshore Dental Group",
    duration: "6-week rollout · 4-month results shown",
  },
  {
    slug: "summitcare-dso-standardisation",
    client: "SummitCare Dental Partners",
    segment: "DSO",
    location: "Southeast US — 24 locations",
    tag: "Both products",
    products: ["ai-dental-software", "sophia-ai-receptionist"],
    image: "/Images/Real_Dental_03.jpeg",
    headline: "One patient-access standard across 24 acquired practices",
    summary:
      "A growing DSO couldn't see — let alone standardise — how 24 offices handled phones and follow-up. Both products went in, office by office, over five months.",
    problem:
      "SummitCare had grown by acquisition: 24 locations, three different PMS platforms, and front-desk turnover near 35% a year. Leadership had no daily visibility into answer rates or booking conversion, and every attempt to standardise by memo died in the field. Month-end reports arrived too late to act on.",
    approach:
      "Technology was the easy half. We phased the rollout in waves of four locations with office managers involved in writing the answers from day one — DSO rollouts fail on change management, not software. The software went in first as overflow support, never as a staff replacement, which turned front desks from resisters into requesters.",
    solution:
      "Answer rates, booking conversion, no-shows and recovered production are now benchmarked daily across all 24 offices, normalised across three PMS platforms. Sophia handles website and Google Business enquiries with group-standard answers, while local fee and provider details stay specific to each office.",
    results: [
      { metric: "24", label: "locations on one dashboard, daily" },
      { metric: "91%", label: "group answer rate, up from an estimated 64%" },
      {
        metric: "11 pts",
        label: "spread between best and worst office, down from 31",
      },
      { metric: "3 PMS", label: "platforms unified in one reporting layer" },
    ],
    quote:
      "Monday's leadership call finally runs on last week's numbers instead of last month's. And the offices asked us to expand the coverage — that never happens with rollouts.",
    quoteBy: "VP of Operations, SummitCare Dental Partners",
    duration: "24 locations in 4 waves over 5 months",
  },
  {
    slug: "align-orthodontics-consult-bookings",
    client: "Align & Co. Orthodontics",
    segment: "Orthodontics",
    location: "Phoenix, AZ",
    tag: "Sophia",
    products: ["sophia-ai-receptionist"],
    image: "/Images/Real_Dental_04.jpeg",
    headline: "Doubling consult show rates by answering in seconds, not hours",
    summary:
      "An ortho practice was spending heavily on ads and losing enquiries to slow follow-up. Sophia took over the first reply on every channel and booked the consult in the same conversation.",
    problem:
      "Align & Co. generated 120+ enquiries a month from Instagram and Google at roughly $180 each — then replied whenever the treatment coordinator got free, often hours later. Barely half of booked consults showed up, and nobody tracked which lapsed enquiries ever came back.",
    approach:
      "We mapped the funnel from ad click to treatment start and instrumented every stage. Then we trained Sophia on their treatment options, fee ranges and financing terms, and connected her to every channel enquiries actually arrive on — forms, DMs and SMS.",
    solution:
      "Every enquiry now gets an answer in seconds, on the channel it came in on. Sophia handles the pricing and financing questions that used to require a callback, books the consult against live availability, and hands warm conversations to the treatment coordinator with the full thread attached.",
    results: [
      { metric: "< 5 sec", label: "first reply on every channel" },
      { metric: "52% → 81%", label: "consult show rate" },
      { metric: "2.3×", label: "treatment starts from the same ad budget" },
      { metric: "$0", label: "added ad spend to get there" },
    ],
    quote:
      "We didn't need more leads — we needed to stop wasting the ones we had. Same budget, more starts. The conversation with my accountant got very short.",
    quoteBy: "Owner-Orthodontist, Align & Co. Orthodontics",
    duration: "3-week implementation · 6-month results shown",
  },
  {
    slug: "lumiere-cosmetic-reactivation",
    client: "Lumière Cosmetic Dentistry",
    segment: "Cosmetic Dentistry",
    location: "Miami, FL",
    tag: "Both products",
    products: ["ai-dental-software", "sophia-ai-receptionist"],
    image: "/Images/Real_Dental_05.jpeg",
    headline: "Waking a 4,800-patient database worth six figures",
    summary:
      "A high-end studio had years of consults and past patients sitting silent in its database. Systematic reactivation turned the list they already owned into booked production.",
    problem:
      "Lumière's database held 4,800 past patients and consulted-but-never-started prospects — whitening patients who never returned, veneer consults who wanted to think about it, treatment plans presented but never scheduled. With case values from $2,500 to $30,000, the dormant list was worth more than a year of new-patient marketing, and nobody had time to work it.",
    approach:
      "We segmented the database by treatment history, case value and recency, then built persistent outreach in the tone of a luxury studio rather than a call centre. Sophia was trained to handle the replies — including the financing questions that stall cosmetic cases — so the front desk only stepped in for conversations that were already warm.",
    solution:
      "Dormant segments now receive multi-touch sequences timed to their original interest: whitening renewals, veneer consult revivals with financing options, and treatment-plan follow-ups. Every reply is answered in seconds, every booking lands on the schedule, and every recovered case is reported with its production value.",
    results: [
      { metric: "27%", label: "of dormant patients re-engaged in 5 months" },
      { metric: "$214K", label: "in booked production from the dormant list" },
      { metric: "38", label: "previously stalled treatment plans scheduled" },
      { metric: "9:1", label: "return on the programme's total cost" },
    ],
    quote:
      "These were people who already knew us and already wanted the work. All it took was following up like we meant it — which we never had the hands to do.",
    quoteBy: "Founder, Lumière Cosmetic Dentistry",
    duration: "5-month campaign · ongoing",
  },
  {
    slug: "northside-pediatric-after-hours",
    client: "Northside Pediatric Dentistry",
    segment: "Pediatric Practice",
    location: "Portland, OR",
    tag: "Sophia",
    products: ["sophia-ai-receptionist"],
    image: "/Images/Real_Dental_06.jpeg",
    headline: "Half of all bookings now happen after the children are in bed",
    summary:
      "Parents were trying to book at 9 PM and finding a contact form. Sophia started answering them — and the schedule filled from hours nobody was working.",
    problem:
      "Northside's enquiries clustered between 8 and 11 PM, when parents finally sat down. The website offered a contact form that got answered the next afternoon, by which point many families had booked elsewhere. The front desk was also fielding the same twelve questions all day: age for a first visit, sedation options, which insurance plans, whether parents can come into the room.",
    approach:
      "We trained Sophia on those twelve questions first, using the practice's own wording, then on their full treatment list, fee ranges and insurance panel. Anything clinical — whether a specific child needs sedation — was explicitly put out of scope and routed to a booked visit instead.",
    solution:
      "Sophia now answers on the website and Google Business profile at any hour, in English or Spanish, and books new-patient visits against live availability. Reminders go to whichever parent is actually bringing the child, and a reschedule takes one reply rather than a phone call during working hours.",
    results: [
      { metric: "51%", label: "of new-patient bookings made after 6 PM" },
      { metric: "70%", label: "of questions resolved without the front desk" },
      { metric: "+34", label: "new-patient visits per month" },
      { metric: "2", label: "languages handled automatically" },
    ],
    quote:
      "Parents book us at ten at night because that's when they have a free hand. We were never going to staff that, and now we don't have to.",
    quoteBy: "Practice Manager, Northside Pediatric Dentistry",
    duration: "1-week training · 4-month results shown",
  },
];

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
