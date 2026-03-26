import { z } from "zod";

const SERVICE_OPTIONS = [
  "landing-pages",
  "web-application-development",
  "mobile-application-development",
  "ui-ux-design",
  "backend-development",
  "quality-assurance",
  "digital-marketing",
  "staff-augmentation",
  "other",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().trim().toLowerCase().max(320),
  country: z
    .string()
    .trim()
    .regex(/^[A-Z]{2}$/, "Invalid country code."),
  countryCode: z
    .string()
    .trim()
    .regex(/^\+[1-9][0-9]{0,3}$/, "Invalid country dial code."),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9]{6,15}$/, "Enter a valid phone number (digits only)."),
  company: z.string().trim().max(140).optional(),
  service: z.enum(SERVICE_OPTIONS),
  message: z.string().trim().min(20).max(5000),
  website: z.string().trim().max(0).optional(),
});

export type ContactPayload = z.infer<typeof contactSchema>;
