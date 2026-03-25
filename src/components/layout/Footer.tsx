import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { SiteLogo } from "@/components/common/SiteLogo";
import { NAV_ITEMS, SITE_METADATA } from "@/constants/site";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30">
      <div className="container-site pt-16 pb-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="inline-flex w-fit shrink-0 items-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={SITE_METADATA.name}
            >
              <SiteLogo className="h-8 sm:h-9" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE_METADATA.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Navigation
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {SITE_METADATA.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js & Tailwind CSS v4
          </p>
        </div>
      </div>
    </footer>
  );
};
