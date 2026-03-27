import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { contactSchema } from "@/lib/contact/schema";
import { sendContactEmail } from "@/lib/contact/send-contact-email";
import { persistContactLead } from "@/lib/contact/store-contact-lead";

type ContactSuccessResponse = {
  data: { received: true };
};

type ContactErrorResponse = {
  error: {
    code: string;
    message: string;
    details?: Array<{ field: string; message: string }>;
  };
};

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json<ContactErrorResponse>(
      { error: { code: "BAD_JSON", message: "Invalid request body." } },
      { status: 400 }
    );
  }

  try {
    const payload = contactSchema.parse(body);

    // Honeypot: bots filling this hidden field are rejected.
    if (payload._hp) {
      return NextResponse.json<ContactSuccessResponse>(
        { data: { received: true } },
        { status: 200 }
      );
    }

    const persistResult = await persistContactLead(payload);
    if (persistResult.status === "duplicate") {
      return NextResponse.json<ContactErrorResponse>(
        {
          error: {
            code: "DUPLICATE_SUBMISSION",
            message: persistResult.message,
          },
        },
        { status: 409 }
      );
    }

    if (persistResult.status === "skipped") {
      console.warn("[contact-api] lead persistence skipped", persistResult.reason);
    }

    await sendContactEmail(payload);
    return NextResponse.json<ContactSuccessResponse>(
      { data: { received: true } },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      const details = error.issues.map((issue) => ({
        field: issue.path.join(".") || "form",
        message: issue.message,
      }));
      return NextResponse.json<ContactErrorResponse>(
        {
          error: {
            code: "VALIDATION_ERROR",
            message: "Please check your form fields and try again.",
            details,
          },
        },
        { status: 400 }
      );
    }

    console.error("[contact-api] failed to send contact email", error);
    const debugMessage =
      process.env.NODE_ENV !== "production"
        ? error instanceof Error
          ? error.message
          : "Unknown server error"
        : undefined;
    return NextResponse.json<ContactErrorResponse>(
      {
        error: {
          code: "DELIVERY_FAILED",
          message: debugMessage
            ? `Unable to send your message right now. ${debugMessage}`
            : "Unable to send your message right now. Please try again.",
        },
      },
      { status: 502 }
    );
  }
}
