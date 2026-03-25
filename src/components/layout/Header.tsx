"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE_METADATA } from "@/constants/site";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {SITE_METADATA.name}
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-8" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm transition-colors duration-150 ${
                    pathname === item.href
                      ? "text-[var(--color-foreground)] font-medium"
                      : "text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]"
                  }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="rounded-[var(--radius-md)] bg-[var(--color-brand)] px-4 py-2 text-sm font-medium text-white transition-opacity duration-150 hover:opacity-80"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
};
