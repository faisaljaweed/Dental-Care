import { NextResponse } from "next/server";

// Lead intake endpoint. The UI promises a one-business-hour reply —
// this route must be wired to a real destination before launch.
// TODO before launch: forward to CRM / email (e.g. Resend, HubSpot, or a
// simple notification webhook). Logging alone is NOT a launch-ready inbox.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const clean = (v) => (v || "").toString().trim().slice(0, 500);
  const lead = {
    name: clean(body?.name),
    business: clean(body?.business),
    contact: clean(body?.contact),
    interest: clean(body?.interest),
    message: clean(body?.message),
    at: new Date().toISOString(),
  };

  if (!lead.name || !lead.contact) {
    return NextResponse.json({ error: "Name and contact are required" }, { status: 400 });
  }

  console.log("[lead]", lead);

  return NextResponse.json({ ok: true });
}
