import Image from "next/image";
import { SITE_LOGO_URL } from "@/constants/logo-path";
import { cn } from "@/lib/utils";

export type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};
const INTRINSIC_W = 1008;
const INTRINSIC_H = 419;

/**
 * Wordmark from `public/logo.svg`. Black artwork — `dark:invert` for dark theme legibility.
 */
export const SiteLogo = ({ className, priority = false }: SiteLogoProps) => (
  <Image
    src={SITE_LOGO_URL}
    alt=""
    width={INTRINSIC_W}
    height={INTRINSIC_H}
    {...(priority ? { priority: true } : {})}
    unoptimized
    className={cn("h-7 w-auto shrink-0 sm:h-8 dark:invert", className)}
  />
);
