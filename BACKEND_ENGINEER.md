## Backend Engineer Guide

This document is a backend-focused companion to `CLAUDE.md`.

### Source of truth
- Keep all repo-wide rules from `CLAUDE.md`.
- Use this file for backend execution standards when implementing API, service, DB, and messaging work.

### Core backend execution rules
- Validate all external input at the boundary (Zod for TypeScript routes).
- Keep route handlers thin: parse input, call service, shape response.
- Use strict typing end-to-end; no `any`.
- Return structured error responses with stable codes.
- Never commit secrets; use environment variables only.
- Add resilience for production paths (timeouts, retries where relevant, anti-spam for forms).

### Current contact-form scaffold scope
- `POST /api/contact` in App Router.
- Shared schema validation in `src/lib/contact/schema.ts`.
- Email send via Resend from server-side code only.
- Lightweight anti-spam via honeypot field.
- No persistent database storage yet (can be added in phase 2).

### Manual ops checklist
- Rotate exposed API keys immediately if they were shared in chat/logs.
- Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` in env.
- Verify sender domain in Resend before production launch.
