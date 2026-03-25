export type Project = {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  year: string;
  tags: string[];
  gradient: string;
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "saturn-web",
    title: "Saturn Web Platform",
    client: "Saturn Financial",
    category: "Frontend Architecture",
    description:
      "Microfrontend platform serving 50,000+ financial advisors. Migrated from monolith to Module Federation with zero downtime.",
    year: "2024",
    tags: ["React", "Module Federation", "Rspack", "TypeScript"],
    gradient: "from-stone-900 via-stone-800 to-zinc-900",
    featured: true,
  },
  {
    id: "plinth-design-system",
    title: "Plinth Design System",
    client: "Saturn Financial",
    category: "Design Systems",
    description:
      "Open-source component library used across 6 product teams. Dual Tailwind + styled-components support, published to npm.",
    year: "2024",
    tags: ["Design Systems", "Tailwind v4", "Storybook", "npm"],
    gradient: "from-neutral-800 via-neutral-700 to-stone-800",
    featured: true,
  },
  {
    id: "meridian-dashboard",
    title: "Meridian Analytics",
    client: "Meridian Capital",
    category: "Dashboard",
    description:
      "Real-time portfolio analytics dashboard with 200ms data refresh. Built for institutional traders with complex data visualization.",
    year: "2023",
    tags: ["Next.js", "TanStack Query", "Recharts", "WebSockets"],
    gradient: "from-zinc-900 via-zinc-800 to-neutral-900",
    featured: true,
  },
  {
    id: "apex-brand",
    title: "Apex Brand Site",
    client: "Apex Ventures",
    category: "Agency Website",
    description:
      "Performance-first marketing site for a Series B venture firm. 98 Lighthouse score, sub-1s LCP on all routes.",
    year: "2023",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    gradient: "from-stone-800 via-neutral-800 to-zinc-900",
    featured: false,
  },
  {
    id: "loop-saas",
    title: "Loop Platform",
    client: "Loop Inc.",
    category: "SaaS Product",
    description:
      "B2B SaaS workflow automation product. Full frontend from auth to billing, onboarding, and multi-tenant workspace.",
    year: "2023",
    tags: ["React", "Zustand", "TanStack Query", "Radix UI"],
    gradient: "from-neutral-900 via-stone-900 to-zinc-800",
    featured: false,
  },
  {
    id: "nova-ecommerce",
    title: "Nova Commerce",
    client: "Nova Retail",
    category: "E-commerce",
    description:
      "High-traffic e-commerce frontend capable of 10,000 concurrent users. Custom cart engine with optimistic updates.",
    year: "2022",
    tags: ["Next.js", "TypeScript", "Zustand", "Stripe"],
    gradient: "from-zinc-800 via-neutral-800 to-stone-900",
    featured: false,
  },
] as const;

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

export const CATEGORIES = [
  "All",
  "Frontend Architecture",
  "Design Systems",
  "Dashboard",
  "Agency Website",
  "SaaS Product",
  "E-commerce",
] as const;

export type ProjectCategory = (typeof CATEGORIES)[number];
