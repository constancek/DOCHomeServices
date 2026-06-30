import { site } from '@/content/site';

// One place every site form sends its data: a Zapier "Catch Hook" webhook,
// which forwards the submission to GoHighLevel. Configure the URL in
// content/site.ts (site.formWebhookUrl) or via NEXT_PUBLIC_FORM_WEBHOOK_URL.

export type LeadResult = 'sent' | 'demo' | 'error';

// We send the body as application/x-www-form-urlencoded. That format is on the
// CORS "safelist", so the browser skips the preflight request that trips up
// cross-origin POSTs — and Zapier Catch Hooks parse each key into its own field
// for easy mapping into GoHighLevel.
export async function submitLead(payload: Record<string, unknown>): Promise<LeadResult> {
  const url = site.formWebhookUrl;
  const fields: Record<string, unknown> = {
    ...payload,
    pageUrl: typeof window !== 'undefined' ? window.location.href : '',
    submittedAt: new Date().toISOString(),
  };
  const body = new URLSearchParams();
  for (const [key, value] of Object.entries(fields)) {
    body.append(key, value == null ? '' : String(value));
  }

  // Webhook not configured yet — treat as a successful "demo" so the UI still
  // works during setup, but make it obvious in the dev console.
  if (!url) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[submitLead] site.formWebhookUrl is not set — not sent:', body);
    }
    return 'demo';
  }

  // Fire-and-forget to the GoHighLevel inbound webhook. We use mode:'no-cors'
  // because GHL's webhook does not return CORS headers — with a urlencoded body
  // this stays a "simple request", so it always sends; the response is opaque
  // (unreadable), so a resolved fetch is treated as delivered.
  try {
    await fetch(url, { method: 'POST', mode: 'no-cors', body });
    return 'sent';
  } catch {
    return 'error';
  }
}
