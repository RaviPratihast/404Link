import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const CTABanner = () => {
  return (
    <section className="container-site pb-28">
      <div
        className={cn(
          "relative overflow-hidden rounded-4xl border border-zinc-800/80",
          "bg-zinc-950 px-8 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20"
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(255,255,255,0.08),transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(255,255,255,0.05),transparent_50%)]"
        />
        <div
          aria-hidden
          className="absolute -right-24 -top-24 size-80 rounded-full bg-white/4 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-white/3 blur-3xl"
        />

        <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-0">
          <div className="flex max-w-2xl flex-col gap-5 lg:flex-1 lg:pr-12">
            <p className="text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">
              Next step
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
              Ready to build something that works at scale?
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
              Tell us about your project. We&apos;ll respond within 24 hours
              with an honest assessment and a clear path forward.
            </p>
          </div>

          <div
            className="flex shrink-0 flex-col gap-4 lg:w-[min(100%,280px)] lg:border-l lg:border-zinc-800/90 lg:pl-12"
            aria-label="Contact call to action"
          >
            <Link
              href="/contact"
              className={cn(
                "group inline-flex w-full items-center justify-center gap-2 rounded-full",
                "border border-white/20 bg-white/6 px-8 py-4 text-base font-semibold text-white",
                "backdrop-blur-sm transition-all duration-300",
                "hover:border-white/40 hover:bg-white hover:text-zinc-950",
                "hover:shadow-xl hover:shadow-black/30",
                "active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
                "lg:w-full"
              )}
            >
              Start a project
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
            <p className="text-center text-xs text-zinc-500 lg:text-left">
              No pitch deck required — just context and goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
