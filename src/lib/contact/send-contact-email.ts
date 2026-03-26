import { Resend } from "resend";
import { SITE_METADATA } from "@/constants/site";
import type { ContactPayload } from "@/lib/contact/schema";

type ContactEnv = {
  apiKey: string;
  from: string;
  to: string;
};

const getContactEnv = (): ContactEnv => {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();

  if (!apiKey || !from || !to) {
    throw new Error(
      "Missing contact email env vars. Set RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL."
    );
  }

  return { apiKey, from, to };
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const sendContactEmail = async (payload: ContactPayload): Promise<void> => {
  const env = getContactEnv();
  const resend = new Resend(env.apiKey);
  const company = payload.company?.trim() || "Not provided";

  const safe = {
    name: escapeHtml(payload.name),
    email: escapeHtml(payload.email),
    contact: escapeHtml(
      `${payload.countryCode} ${payload.phone} (${payload.country})`
    ),
    company: escapeHtml(company),
    service: escapeHtml(payload.service),
    message: escapeHtml(payload.message),
  };

  await resend.emails.send({
    from: env.from,
    to: [env.to],
    replyTo: payload.email,
    subject: `New 404linq inquiry — ${payload.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin: 0 0 16px;">New contact form submission</h2>
        <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safe.name}</p>
        <p style="margin: 0 0 8px;"><strong>Email:</strong> ${safe.email}</p>
        <p style="margin: 0 0 8px;"><strong>Contact:</strong> ${safe.contact}</p>
        <p style="margin: 0 0 8px;"><strong>Company:</strong> ${safe.company}</p>
        <p style="margin: 0 0 8px;"><strong>Service:</strong> ${safe.service}</p>
        <p style="margin: 16px 0 8px;"><strong>Message</strong></p>
        <p style="white-space: pre-wrap; margin: 0;">${safe.message}</p>
        <hr style="margin: 24px 0; border: 0; border-top: 1px solid #e5e7eb;" />
        <p style="margin: 0; font-size: 12px; color: #6b7280;">Sent from ${SITE_METADATA.name} contact form</p>
      </div>
    `,
  });
};
