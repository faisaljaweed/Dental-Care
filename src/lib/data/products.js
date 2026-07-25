import {
  PhoneCall,
  CalendarCheck2,
  ShieldCheck,
  Receipt,
  BellRing,
  RefreshCcw,
  MessageSquareText,
  LineChart,
  BookOpen,
  Languages,
  CalendarPlus,
  UserRoundCheck,
  Globe,
  Sparkles,
} from "lucide-react";

/**
 * Redix Dental ships two products. Nothing else.
 *
 *   1. AI Dental Software      — the operations layer that runs the back office.
 *   2. Sophia                  — the AI receptionist patients actually talk to.
 *
 * Every page on this site sells one of these two, or both together.
 * Each product owns a hand-built page under /platform/[slug]; this file is the
 * single source of truth for names, claims, modules and metrics used across
 * the nav, footer, cards, forms and structured data.
 */

export const products = [
  {
    slug: "ai-dental-software",
    name: "AI Dental Software",
    kicker: "Product One",
    tagline: "The operations layer for your practice",
    /* One line. Used in nav dropdown and cards. */
    short:
      "Runs your front office around the clock — calls, scheduling, insurance, billing, reminders and recalls — without adding a single hire.",
    heroTitle: "Your front office, running at 2 AM.",
    heroLine:
      "One system that answers calls, fills the schedule, verifies insurance, chases balances and works your recall list — every hour of every day.",
    metaTitle: "AI Dental Software — Automate Calls, Scheduling & Insurance",
    metaDescription:
      "AI dental software that automates calls, appointment scheduling, insurance verification, billing, reminders, recalls and patient communication 24/7. Built for dental practices, groups and DSOs.",
    accent: "teal",
    image: "/Images/AI_Automation_Hero1.jpg",
    imageAlt:
      "Dental practice front office running on Redix AI automation software",

    /* The three-line promise under the hero. */
    promise: [
      "Answers every call, day or night",
      "Books straight into your PMS",
      "Reports the revenue it recovers",
    ],

    /* What the software actually does. Eight modules, one system. */
    modules: [
      {
        icon: PhoneCall,
        name: "Call Handling",
        text: "Every inbound call answered in under two seconds — lunch hours, evenings, weekends, Monday-morning surges. Emergencies get routed to a human immediately.",
      },
      {
        icon: CalendarCheck2,
        name: "Appointment Scheduling",
        text: "Patients book, move and cancel by phone, text or web. Provider rules, hygiene blocks and production slots stay exactly as you set them.",
      },
      {
        icon: ShieldCheck,
        name: "Insurance Verification",
        text: "Benefits, remaining maximums and frequencies confirmed before the patient sits down — so nobody is quoting coverage from memory.",
      },
      {
        icon: Receipt,
        name: "Billing & Claims",
        text: "Claims checked for the errors that cause denials before they go out. Patient balances follow up on their own until they clear.",
      },
      {
        icon: BellRing,
        name: "Reminders & Confirmations",
        text: "Reminder sequences tuned to appointment type and patient history. A 'can't make it' becomes a reschedule in the same thread.",
      },
      {
        icon: RefreshCcw,
        name: "Recalls & Reactivation",
        text: "Overdue hygiene, lapsed patients and unscheduled treatment worked continuously — the production already sitting in your database.",
      },
      {
        icon: MessageSquareText,
        name: "Patient Communication",
        text: "Calls, texts, email and web chat in one thread per patient. Your team sees the whole history, never a fragment.",
      },
      {
        icon: LineChart,
        name: "Reporting",
        text: "Answer rates, bookings, no-shows, denials and recovered production — per location, updated daily, not at month end.",
      },
    ],

    /* Numbers used on the product page and the comparison grid. */
    stats: [
      { number: "98%", label: "of calls answered", note: "including nights and weekends" },
      { number: "60%", label: "fewer no-shows", note: "with behaviour-based reminders" },
      { number: "10–15 hrs", label: "of admin returned weekly", note: "per location" },
      { number: "48 hrs", label: "from kickoff to live", note: "on your existing phone numbers" },
    ],

    /* What the practice actually gets. */
    included: [
      "AI call handling on your existing numbers",
      "Two-way booking with Dentrix, Eaglesoft, Open Dental and Curve",
      "Pre-visit eligibility checks and coverage breakdowns",
      "Claim scrubbing and denial follow-up",
      "Reminder, recall and reactivation sequences",
      "One patient inbox across call, text, email and chat",
      "Daily performance reporting per location",
      "Signed BAA before a single patient record moves",
    ],

    /* Objections, answered. */
    faqs: [
      {
        q: "Do we have to change our practice management software?",
        a: "No. The software runs on top of what you already use — Dentrix, Eaglesoft, Open Dental, Curve and others. Your team keeps the same screens and the same workflow.",
      },
      {
        q: "What happens with a real emergency?",
        a: "Emergency language is detected on the call and routed to your on-call line straight away, with a summary of what the patient said. You set the rules for what counts and who gets reached.",
      },
      {
        q: "How long until it's running?",
        a: "Most practices go live within 48 hours of approving their call flows. Multi-location groups roll out office by office over two to four weeks.",
      },
    ],
  },

  {
    slug: "sophia-ai-receptionist",
    name: "Sophia",
    fullName: "Sophia — AI Dental Receptionist",
    kicker: "Product Two",
    tagline: "The receptionist who knows your practice",
    short:
      "An AI receptionist trained on your treatments, pricing, policies and insurance — answering patients instantly and booking consultations 24/7.",
    heroTitle: "Meet Sophia.",
    heroLine:
      "She's read your treatment menu, your fee schedule, your insurance list and your cancellation policy. She answers patients in seconds and books the consultation before they close the tab.",
    metaTitle: "Sophia — AI Dental Receptionist & Patient Chatbot",
    metaDescription:
      "Sophia is an AI dental receptionist trained on your clinic's treatments, pricing, policies, insurance and FAQs. She answers patient questions instantly and books consultations 24/7.",
    accent: "cyan",
    image: "/Images/AI_Voice_Call_Page.jpg",
    imageAlt: "Sophia, the Redix AI dental receptionist, chatting with a patient",

    promise: [
      "Trained on your practice, not the internet",
      "Answers in under three seconds",
      "Books consultations while you sleep",
    ],

    /* What Sophia learns during onboarding. This is the differentiator. */
    training: [
      {
        icon: BookOpen,
        name: "Your treatments",
        text: "Every procedure you offer, described the way your team describes it — and, just as importantly, the ones you don't.",
      },
      {
        icon: Receipt,
        name: "Your pricing",
        text: "Fee ranges, financing options and what a consultation costs. Sophia quotes what you approve and nothing beyond it.",
      },
      {
        icon: ShieldCheck,
        name: "Your insurance",
        text: "The plans you're in network with, the ones you file for out of network, and how you handle patients with neither.",
      },
      {
        icon: UserRoundCheck,
        name: "Your policies",
        text: "Cancellations, deposits, late arrivals, new-patient paperwork, minors, emergencies — the answers your front desk repeats all day.",
      },
    ],

    /* What she does once she's live. */
    abilities: [
      {
        icon: MessageSquareText,
        name: "Answers questions instantly",
        text: "Pricing, availability, insurance, aftercare, parking. The questions patients would rather not phone to ask.",
      },
      {
        icon: CalendarPlus,
        name: "Books consultations",
        text: "She checks live availability and puts the appointment on the schedule — no callback, no form, no waiting for Monday.",
      },
      {
        icon: Languages,
        name: "Speaks their language",
        text: "Sophia detects the patient's language and continues in it, so a Spanish-speaking caller never gets a shorter answer.",
      },
      {
        icon: Globe,
        name: "Works everywhere you do",
        text: "Website widget, Google Business profile, WhatsApp, Instagram and SMS — one Sophia, the same answers on every channel.",
      },
      {
        icon: UserRoundCheck,
        name: "Hands over cleanly",
        text: "When a patient needs a person, Sophia passes the full conversation to your team. Nobody repeats themselves.",
      },
      {
        icon: Sparkles,
        name: "Learns from corrections",
        text: "Your office manager can correct an answer in plain English. Sophia uses the new version from the next conversation on.",
      },
    ],

    stats: [
      { number: "<3 sec", label: "average reply time", note: "any hour, any channel" },
      { number: "24/7", label: "consultations booked", note: "including nights and holidays" },
      { number: "70%", label: "of questions resolved", note: "without reaching your team" },
      { number: "1 week", label: "to train and launch", note: "from your existing documents" },
    ],

    included: [
      "Sophia trained on your treatments, fees and policies",
      "Website chat widget matched to your brand",
      "WhatsApp, Instagram, SMS and Google Business channels",
      "Live availability and direct consultation booking",
      "Multilingual conversations, detected automatically",
      "Human handover with the full conversation attached",
      "Plain-English answer editing for your office manager",
      "Monthly transcript review and answer tuning",
    ],

    faqs: [
      {
        q: "Will Sophia invent an answer she isn't sure about?",
        a: "No. Sophia answers from your approved material only. When a question falls outside it, she says so and offers the patient a callback or a booked consultation instead of guessing.",
      },
      {
        q: "What do you need from us to train her?",
        a: "Your treatment list, fee ranges, insurance details and the policies you already give patients. Most practices send existing documents and a short call — that's enough to launch.",
      },
      {
        q: "Can patients tell they're talking to AI?",
        a: "Sophia introduces herself as the practice's AI assistant. Practices that try to hide it lose trust the first time a patient notices — so we don't.",
      },
    ],
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);

/** Shorthand for the two products where order matters in layout. */
export const [software, sophia] = products;

/** Used by nav, footer and the demo form's interest selector. */
export const productOptions = [
  { value: "ai-dental-software", label: "AI Dental Software" },
  { value: "sophia-ai-receptionist", label: "Sophia — AI Receptionist" },
  { value: "both", label: "Both — show me the full platform" },
];
