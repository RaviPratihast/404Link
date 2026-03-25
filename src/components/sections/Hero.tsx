"use client";

import Link from "next/link";
import { Aurora } from "@/components/Aurora";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { SITE_METADATA } from "@/constants/site";

export const Hero = () => {
  return (
    <section className="relative flex min-h-[min(88vh,920px)] overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Aurora
          colorStops={["#ffffff", "#000000"]}
          amplitude={1}
          blend={0.5}
        />
      </div>

      <div className="container-site relative z-10 flex w-full flex-col justify-center section-padding">
        <div className="flex max-w-5xl flex-col gap-8">
          <div className="flex items-center gap-3">
            <Badge
              variant="outline"
              className="gap-1.5 border-white/25 bg-white/5 px-3 py-1 text-xs font-medium text-white"
            >
              <span className="size-1.5 rounded-full bg-green-500" />
              Available for projects
            </Badge>
          </div>

          <h1 className="heading-display text-balance text-white">
            We build what
            <br />
            <span className="text-zinc-400">others can&apos;t find.</span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-zinc-400">
            {SITE_METADATA.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* See our work — re-enable when portfolio is live
            <Link
              href="/work"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full border-0 bg-white px-7 text-black hover:bg-white/90"
              )}
            >
              See our work
            </Link>
            */}
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full border-0 bg-white px-7 text-black hover:bg-white/90"
              )}
            >
              Start a project{" "}
              <span aria-hidden className="ml-1">
                →
              </span>
            </Link>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "rounded-full border border-white/20 px-7 text-white hover:bg-white/10 hover:text-white"
              )}
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
