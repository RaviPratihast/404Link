"use client";

import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { type FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | {
      status: "success";
      snapshot: {
        name: string;
        service: string;
      };
    }
  | { status: "error"; message: string; code?: string };

const toFlag = (countryCode: string): string =>
  countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127397 + char.charCodeAt(0))
    );

export const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>({ status: "idle" });
  const countryOptions = useMemo(() => {
    const options = getCountries()
      .map((country) => {
        const dialCode = `+${getCountryCallingCode(country)}`;
        return {
          value: `${country}:${dialCode}`,
          country,
          dialCode,
          // Keep labels deterministic across SSR and client hydration.
          // Intl.DisplayNames can differ by runtime ICU data.
          label: `${toFlag(country)} ${dialCode} ${country}`,
        };
      })
      .sort((a, b) => a.label.localeCompare(b.label));

    const indiaIndex = options.findIndex((option) => option.country === "IN");
    if (indiaIndex > 0) {
      const [india] = options.splice(indiaIndex, 1);
      if (india) {
        options.unshift(india);
      }
    }

    return options;
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "submitting" });
    const form = e.currentTarget;
    const formData = new FormData(form);
    const selectedCountry = String(formData.get("countrySelection") ?? "");
    const [country = "", countryCode = ""] = selectedCountry.split(":");

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      country: country.toUpperCase(),
      countryCode,
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
      _hp: String(formData.get("_hp") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | {
              error?: {
                code?: string;
                message?: string;
                details?: Array<{ field?: string; message?: string }>;
              };
            }
          | null;
        const details = data?.error?.details
          ?.map((detail) => {
            const field = detail.field?.trim();
            const message = detail.message?.trim();
            if (!message) return null;
            return field ? `${field}: ${message}` : message;
          })
          .filter((entry): entry is string => Boolean(entry));
        setFormState({
          status: "error",
          ...(data?.error?.code ? { code: data.error.code } : {}),
          message:
            details && details.length > 0
              ? details.join(" | ")
              : (data?.error?.message ??
                "Unable to send your message right now. Please try again."),
        });
        return;
      }

      form.reset();
      setFormState({
        status: "success",
        snapshot: {
          name: payload.name,
          service: payload.service,
        },
      });
    } catch {
      setFormState({
        status: "error",
        code: "NETWORK_ERROR",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  if (formState.status === "success") {
    return (
      <div className="relative overflow-hidden rounded-2xl border bg-card p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.04),transparent_60%)]"
        />
        <div className="relative flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border bg-secondary/70 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Signal Received
          </div>
          <div className="flex size-12 items-center justify-center rounded-full bg-primary text-xl text-primary-foreground">
            ✓
          </div>
          <h2 className="text-xl leading-tight font-semibold text-balance">
            Thanks, {formState.snapshot.name.split(" ")[0] || "there"}.
            <br />
            Your brief is in our queue.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We&apos;re reviewing your request for{" "}
            <span className="font-medium text-foreground">
              {formState.snapshot.service.replaceAll("-", " ")}
            </span>
            . Expect a thoughtful response within 24 hours.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            While others send autoresponders, we send a real plan.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-2 rounded-full"
            onClick={() => setFormState({ status: "idle" })}
          >
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  if (formState.status === "error") {
    return (
      <div className="flex flex-col items-start justify-center gap-4 rounded-2xl border bg-card p-10">
        <div className="flex size-12 items-center justify-center rounded-full bg-destructive/10 text-xl text-destructive">
          !
        </div>
        <h2 className="text-xl font-semibold">Couldn&apos;t send your message.</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">{formState.message}</p>
        {formState.code === "VALIDATION_ERROR" ? (
          <p className="text-xs text-muted-foreground">
            Check required fields. Message must be at least 20 characters and phone should be digits only.
          </p>
        ) : null}
        <Button
          variant="outline"
          size="sm"
          className="mt-2 rounded-full"
          onClick={() => setFormState({ status: "idle" })}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-2xl border bg-card p-8 sm:p-10"
      noValidate
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Alex Johnson"
            required
            disabled={formState.status === "submitting"}
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Work email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="alex@company.com"
            required
            disabled={formState.status === "submitting"}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Contact number</Label>
        <div className="grid grid-cols-[minmax(11rem,14rem)_minmax(0,1fr)] gap-2">
          <select
            id="countrySelection"
            name="countrySelection"
            required
            defaultValue="IN:+91"
            disabled={formState.status === "submitting"}
            className="h-8 rounded-lg border border-input bg-transparent px-2.5 pr-8 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          >
            {countryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{6,15}"
            placeholder="9876543210"
            required
            disabled={formState.status === "submitting"}
            autoComplete="tel-national"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          placeholder="Acme Inc."
          disabled={formState.status === "submitting"}
          autoComplete="organization"
        />
      </div>

      <input
        name="_hp"
        tabIndex={-1}
        autoComplete="new-password"
        aria-hidden="true"
        className="hidden"
      />

      <div className="flex flex-col gap-2">
        <Label htmlFor="service">What do you need?</Label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          disabled={formState.status === "submitting"}
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="landing-pages">Landing Page</option>
          <option value="web-application-development">Web Application Development</option>
          <option value="mobile-application-development">Mobile Application Development</option>
          <option value="ui-ux-design">UI / UX Design</option>
          <option value="backend-development">Backend Development</option>
          <option value="quality-assurance">Quality Assurance</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="staff-augmentation">Staff Augmentation</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Tell us about your project</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="What are you building? What's the timeline? What's broken today?"
          rows={5}
          required
          disabled={formState.status === "submitting"}
          className="resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="rounded-full"
        disabled={formState.status === "submitting"}
      >
        {formState.status === "submitting" ? "Sending…" : "Send message"}
      </Button>

      <p className="text-xs text-muted-foreground">
        No sales calls. No automated follow-ups. A real person reads every
        message.
      </p>
    </form>
  );
};
