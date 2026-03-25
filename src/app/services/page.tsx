import Link from "next/link";
import { Check } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CTABanner } from "@/components/sections/CTABanner";
import { SERVICES } from "@/constants/services";
import { createPageMetadata } from "@/lib/create-page-metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "End-to-end services from 404linq: design systems, high-performance React and Next.js engineering, microfrontends, performance audits, and SEO-ready delivery.",
  pathname: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="container-site section-padding">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Services
        </p>
        <h1 className="heading-display max-w-2xl text-balance">
          End-to-end. No filler.
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          We don&apos;t try to do everything. We do five things exceptionally
          well, and we only take work where we can genuinely move the needle.
        </p>
      </section>

      <section className="container-site pb-20">
        <div className="flex flex-col gap-6">
          {SERVICES.map((service, i) => (
            <div key={service.id}>
              {i > 0 && <Separator className="mb-6" />}
              <div
                id={service.id}
                className="grid grid-cols-1 gap-8 rounded-2xl border bg-card p-8 sm:grid-cols-2 sm:p-10 lg:grid-cols-3 lg:gap-12"
              >
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-sm text-muted-foreground">
                    {service.number}
                  </span>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "mt-2 w-fit rounded-full"
                    )}
                  >
                    Discuss this service
                  </Link>
                </div>

                <div className="lg:col-span-2">
                  <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    What&apos;s included
                  </p>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {cap}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site pb-20">
        <div className="rounded-2xl border bg-secondary/40 p-8 sm:p-12">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            How we engage
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {ENGAGEMENT_MODELS.map((model) => (
              <div key={model.title} className="flex flex-col gap-2">
                <span className="font-mono text-xs text-muted-foreground">
                  {model.number}
                </span>
                <h3 className="font-semibold">{model.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

const ENGAGEMENT_MODELS = [
  {
    number: "A",
    title: "Project-based",
    description:
      "Defined scope, clear deliverables, fixed timeline. Ideal for new builds, migrations, or design systems.",
  },
  {
    number: "B",
    title: "Embedded engineering",
    description:
      "We integrate with your team for 3–6 months. You get senior-level capacity without the hiring process.",
  },
  {
    number: "C",
    title: "Technical advisory",
    description:
      "Architecture reviews, code audits, and strategic input. Ideal when you need an external perspective before committing to a direction.",
  },
] as const;
