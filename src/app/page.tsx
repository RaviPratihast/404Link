import type { Metadata } from "next";
import Link from "next/link";
import { SITE_METADATA } from "@/constants/site";

export const metadata: Metadata = {
  title: `${SITE_METADATA.name} — ${SITE_METADATA.tagline}`,
  description: SITE_METADATA.description,
};

export default function HomePage() {
  return (
    <>
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-start justify-center px-6 py-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--color-foreground-muted)]">
          Digital Agency
        </p>
        <h1 className="mb-6 max-w-4xl text-6xl leading-[1.05] font-semibold tracking-tight text-[var(--color-foreground)] sm:text-7xl lg:text-8xl">
          {SITE_METADATA.tagline}
        </h1>
        <p className="mb-10 max-w-xl text-lg text-[var(--color-foreground-muted)]">
          {SITE_METADATA.description}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/work"
            className="rounded-[var(--radius-md)] bg-[var(--color-brand)] px-6 py-3 text-sm font-medium text-white transition-opacity duration-150 hover:opacity-80"
          >
            See our work
          </Link>
          <Link
            href="/contact"
            className="rounded-[var(--radius-md)] border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-foreground)] transition-colors duration-150 hover:bg-[var(--color-surface)]"
          >
            Start a project
          </Link>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            {SERVICES.map((service) => (
              <div key={service.title} className="flex flex-col gap-3">
                <h2 className="text-base font-semibold text-[var(--color-foreground)]">
                  {service.title}
                </h2>
                <p className="text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const SERVICES = [
  {
    title: "Design Systems",
    description:
      "Token-driven component libraries built for scale. We architect the systems that power product teams.",
  },
  {
    title: "Frontend Engineering",
    description:
      "Performance-first React and Next.js applications. We write production code, not prototypes.",
  },
  {
    title: "Microfrontend Architecture",
    description:
      "Module Federation at scale. Decoupled teams, unified experiences — without the coordination overhead.",
  },
] as const;
