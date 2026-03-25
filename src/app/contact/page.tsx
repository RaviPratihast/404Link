import type { Metadata } from "next";
import { SITE_METADATA } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a project with ${SITE_METADATA.name}.`,
};

export default function ContactPage() {
  return (
    <section className="container-site section-padding">
      <div className="mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_min(18.5rem,100%)] lg:items-start lg:gap-16 xl:gap-20">
        <div className="flex min-w-0 flex-col gap-10">
          <header className="flex max-w-2xl flex-col gap-4">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Contact
            </p>
            <h1 className="heading-section text-balance">
              Let&apos;s build something together.
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              Tell us about your project. We respond within 24 hours with an
              honest assessment and a clear path forward — not a sales pitch.
            </p>
          </header>

          <div className="grid gap-8 border-t border-border pt-10 sm:grid-cols-3 sm:gap-6">
            {CONTACT_DETAILS.map((detail) => (
              <div key={detail.label} className="flex min-w-0 flex-col gap-1.5">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {detail.label}
                </span>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="wrap-break-word text-sm font-medium underline-offset-4 transition-colors hover:text-muted-foreground hover:underline"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="text-sm font-medium">{detail.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl border bg-card p-6 shadow-sm lg:sticky lg:top-28 lg:p-8">
          <p className="text-sm text-muted-foreground">
            Typical engagement starts in
          </p>
          <p className="mt-2 text-3xl font-semibold tracking-tight">2–4 weeks</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            After initial scoping call and proposal sign-off.
          </p>
        </aside>

        {/* Contact form — re-enable: import ContactForm; use a 3-column lg grid (copy | form) */}
      </div>
    </section>
  );
}

const CONTACT_DETAILS = [
  {
    label: "Email",
    value: "krishna@404linq.com",
    href: "mailto:krishna@404linq.com",
  },
  { label: "Response time", value: "Within 24 hours", href: null },
  { label: "Location", value: "Remote — worldwide", href: null },
] as const;
