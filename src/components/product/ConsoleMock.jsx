import {
  PhoneCall,
  CalendarCheck2,
  ShieldCheck,
  RefreshCcw,
  Receipt,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A representation of the AI Dental Software console: what the practice sees
 * happening while nobody is at the desk. Static by design — the movement is a
 * single scan line, so it reads as a product surface rather than a toy.
 */
const feed = [
  {
    time: "23:41",
    icon: PhoneCall,
    action: "Call answered",
    detail: "New patient · chipped molar · triaged as urgent",
    tag: "Escalated",
  },
  {
    time: "23:44",
    icon: CalendarCheck2,
    action: "Appointment booked",
    detail: "Emergency slot · Fri 8:00 AM · Dr. Reyes",
    tag: "Open Dental",
  },
  {
    time: "00:12",
    icon: ShieldCheck,
    action: "Benefits verified",
    detail: "7 patients for Friday · 1 lapsed plan flagged",
    tag: "Pre-visit",
  },
  {
    time: "02:30",
    icon: RefreshCcw,
    action: "Recall list worked",
    detail: "148 overdue hygiene contacted · 11 rebooked",
    tag: "Automated",
  },
  {
    time: "05:15",
    icon: Receipt,
    action: "Claims scrubbed",
    detail: "23 claims checked · 2 corrected before submission",
    tag: "Billing",
  },
];

const metrics = [
  { value: "98.4%", label: "Calls answered" },
  { value: "31", label: "Booked overnight" },
  { value: "6.2%", label: "No-show rate" },
  { value: "$18.4K", label: "Recovered this month" },
];

export default function ConsoleMock({ className }) {
  return (
    <div
      className={cn(
        "relative rounded-[1.75rem] bg-console grid-bg border border-white/10 shadow-panel overflow-hidden",
        className
      )}
    >
      {/* Sweeping scan line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-16 scan-line bg-gradient-to-b from-transparent via-teal/10 to-transparent"
      />

      {/* Chrome */}
      <div className="relative flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-live live-dot" />
          <span className="data-label text-teal-light">Overnight activity</span>
        </div>
        <span className="data-label text-white/35">Riverside Dental · 3 chairs</span>
      </div>

      {/* Metric strip */}
      <div className="relative grid grid-cols-2 sm:grid-cols-4 border-b border-white/10">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="px-5 py-5 border-r border-b sm:border-b-0 border-white/10 last:border-r-0 [&:nth-child(2)]:border-r-0 sm:[&:nth-child(2)]:border-r"
          >
            <p className="font-display font-bold text-[22px] text-gradient leading-none">
              {m.value}
            </p>
            <p className="text-[12px] text-white/45 mt-1.5 leading-snug">
              {m.label}
            </p>
          </div>
        ))}
      </div>

      {/* Activity feed */}
      <ul className="relative divide-y divide-white/[0.07]">
        {feed.map((row) => {
          const Icon = row.icon;
          return (
            <li
              key={row.time + row.action}
              className="flex items-start gap-4 px-6 py-4"
            >
              <span className="data-label text-white/30 pt-1 w-[38px] shrink-0">
                {row.time}
              </span>
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.06] text-teal-light shrink-0">
                <Icon size={15} strokeWidth={1.9} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-display font-semibold text-[14px] text-white/90 leading-snug">
                  {row.action}
                </span>
                <span className="block text-[13px] text-white/45 leading-snug mt-0.5">
                  {row.detail}
                </span>
              </span>
              <span className="hidden sm:block data-label text-teal-light/70 border border-teal-light/25 rounded-full px-2.5 py-1 shrink-0">
                {row.tag}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="relative px-6 py-4 border-t border-white/10">
        <p className="text-[12.5px] text-white/35">
          Nobody was in the building for any of this.
        </p>
      </div>
    </div>
  );
}
