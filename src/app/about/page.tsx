import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CTABanner } from "@/components/sections/CTABanner";
import { createPageMetadata } from "@/lib/create-page-metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "404linq is a digital agency building production-grade web experiences, design systems, and scalable frontend architecture for teams that ship.",
  pathname: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="container-site section-padding">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          About
        </p>
        <h1 className="heading-display max-w-3xl text-balance">
          The agency that fills the gap.
        </h1>
      </section>

      <section className="container-site pb-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Founded in 2025, 404linq started from a simple observation: most
              engineering agencies are generalists. They take any project, use any stack,
              and deliver average results. Product teams spend months cleaning up
              the code once they leave.
            </p>
            <p>
              We chose a different path. We specialize in three areas — design
              systems, frontend architecture, and microfrontend engineering —
              because depth beats breadth when the stakes are high. We work with
              teams that have demanding requirements, ambitious timelines, and
              zero tolerance for technical debt.
            </p>
            <p>
              Every engineer at 404linq has worked in production environments at
              scale. We don&apos;t hire consultants who advise without shipping.
              We hire people who have lived the problems you&apos;re facing, and
              can solve them cleanly.
            </p>
            <p>
              When we finish an engagement, the team we leave behind should be
              faster, not dependent on us. That&apos;s what separates us from
              the alternatives.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border bg-card p-6">
              <h2 className="mb-5 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                By the numbers
              </h2>
              <ul className="flex flex-col gap-4">
                {ABOUT_STATS.map((stat, i) => (
                  <li
                    key={`${stat.value}-${i}`}
                    className="flex flex-col gap-0.5"
                  >
                    <span className="text-2xl font-semibold tracking-tight">
                      {stat.value}
                    </span>
                    {stat.label ? (
                      <span className="text-sm text-muted-foreground">
                        {stat.label}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section className="container-site section-padding">
        <h2 className="heading-section mb-12 max-w-lg text-balance">
          How we operate.
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <div key={value.title} className="flex flex-col gap-3">
              <span className="font-mono text-xs text-muted-foreground">
                {value.number}
              </span>
              <h3 className="font-semibold">{value.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section className="container-site section-padding">
        <h2 className="heading-section mb-12 max-w-lg text-balance">
          Who we work with.
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {CLIENT_PROFILES.map((profile) => (
            <div
              key={profile.title}
              className="rounded-2xl border bg-card p-6"
            >
              <h3 className="mb-2 font-semibold">{profile.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {profile.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex gap-4">
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "rounded-full px-7")}
          >
            Start a conversation
          </Link>
          {/* See our work — re-enable when portfolio is live
          <Link
            href="/work"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "rounded-full px-7"
            )}
          >
            See our work
          </Link>
          */}
        </div>
      </section>

      <CTABanner />
    </>
  );
}

const ABOUT_STATS = [
  { value: "2025", label: "Founded" },
  { value: "42+", label: "Clients served" },
  { value: "100%", label: "Repeat engagement rate" },
] as const;

const VALUES = [
  {
    number: "01",
    title: "Depth over breadth",
    description:
      "We specialize in three areas and refuse work outside them. You don't hire a cardiologist to set a broken bone.",
  },
  {
    number: "02",
    title: "Production thinking",
    description:
      "We write code for the engineer who maintains it in 6 months, not the demo that needs to ship by Friday.",
  },
  {
    number: "03",
    title: "Honest estimates",
    description:
      "We tell you when something will take longer than expected. Surprises belong in birthday parties, not timelines.",
  },
  {
    number: "04",
    title: "Knowledge transfer",
    description:
      "When we leave, you're stronger. We document, we teach, we leave behind systems your team can own.",
  },
] as const;

const CLIENT_PROFILES = [
  {
    title: "Scale-up engineering teams",
    description:
      "You're growing fast and your frontend architecture hasn't kept pace. You need someone who can make structural improvements without stopping the feature train.",
  },
  {
    title: "Product teams pre-launch",
    description:
      "You have a clear product vision and a short runway. You need production-quality frontend built right the first time, not refactored six months later.",
  },
  {
    title: "Enterprise modernization",
    description:
      "You're migrating from a legacy monolith or fragmented codebase to a modern architecture. You need a team that has done this before, not one learning on your dime.",
  },
] as const;
