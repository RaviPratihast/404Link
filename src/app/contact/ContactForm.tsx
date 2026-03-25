"use client";

import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>({ status: "idle" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "submitting" });

    await new Promise((resolve) => setTimeout(resolve, 800));
    setFormState({ status: "success" });
  };

  if (formState.status === "success") {
    return (
      <div className="flex flex-col items-start justify-center gap-4 rounded-2xl border bg-card p-10">
        <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl">
          ✓
        </div>
        <h2 className="text-xl font-semibold">Message received.</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We&apos;ll review your project details and respond within 24 hours
          with an honest assessment.
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
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          placeholder="Acme Inc."
          disabled={formState.status === "submitting"}
          autoComplete="organization"
        />
      </div>

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

      {formState.status === "error" && (
        <p className="rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {formState.message}
        </p>
      )}

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
