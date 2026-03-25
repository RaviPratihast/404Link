import Link from "next/link";
import { NAV_ITEMS, SITE_METADATA } from "@/constants/site";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-base font-semibold tracking-tight">
              {SITE_METADATA.name}
            </Link>
            <p className="max-w-xs text-sm text-[var(--color-foreground-muted)]">
              {SITE_METADATA.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-foreground-muted)] transition-colors duration-150 hover:text-[var(--color-foreground)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-[var(--color-border)] pt-8">
          <p className="text-xs text-[var(--color-foreground-muted)]">
            &copy; {currentYear} {SITE_METADATA.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
