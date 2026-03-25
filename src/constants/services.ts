export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
};

export const SERVICES: Service[] = [
  {
    id: "landing-pages",
    number: "01",
    title: "Landing Pages",
    description:
      "High-converting landing pages built to perform from day one. Sharp design, fast-loading code, and copy that turns visitors into leads — no bloat, no templates.",
    capabilities: [
      "Custom design & development",
      "Conversion-focused layout",
      "Mobile-first, responsive build",
      "Performance optimized (sub-1s LCP)",
      "SEO-ready markup & metadata",
      "A/B testing ready",
    ],
  },
  {
    id: "web-application-development",
    number: "02",
    title: "Web Application Development",
    description:
      "Full-featured web applications built for scale and reliability. From SaaS products to internal tools, we architect and ship software that performs under real-world conditions.",
    capabilities: [
      "React & Next.js App Router",
      "TypeScript strict mode",
      "TanStack Query data layer",
      "Authentication & authorization",
      "Third-party API integrations",
      "Deployment & CI/CD setup",
    ],
  },
  {
    id: "mobile-application-development",
    number: "03",
    title: "Mobile Application Development",
    description:
      "Cross-platform mobile apps that feel native. We build React Native applications that work seamlessly on iOS and Android without maintaining two separate codebases.",
    capabilities: [
      "React Native (iOS & Android)",
      "Expo managed workflow",
      "Push notifications",
      "Offline support",
      "App Store / Play Store submission",
      "Performance profiling",
    ],
  },
  {
    id: "ui-ux-design",
    number: "04",
    title: "UI / UX Design",
    description:
      "Interfaces that are both beautiful and functional. We design product experiences grounded in user research, interaction principles, and visual craft — then hand off with precision.",
    capabilities: [
      "Product & interface design",
      "User research & journey mapping",
      "Wireframing & prototyping",
      "Figma design systems",
      "Usability testing",
      "Design-to-code handoff",
    ],
  },
  {
    id: "backend-development",
    number: "05",
    title: "Backend Development",
    description:
      "Robust APIs and server-side systems built to handle real load. We design clean architectures, write maintainable code, and ensure your backend is as solid as your frontend.",
    capabilities: [
      "Node.js / Express / Fastify",
      "REST & GraphQL APIs",
      "Database design (PostgreSQL, MongoDB)",
      "Authentication (JWT, OAuth)",
      "Cloud infrastructure (AWS / Vercel)",
      "Performance & caching strategy",
    ],
  },
  {
    id: "quality-assurance",
    number: "06",
    title: "Quality Assurance",
    description:
      "Catch bugs before users do. We build comprehensive test suites and QA processes that give your team confidence to ship fast without breaking things.",
    capabilities: [
      "Unit & integration testing",
      "End-to-end testing (Playwright)",
      "Performance testing",
      "Accessibility auditing (WCAG 2.1)",
      "Cross-browser & device testing",
      "CI pipeline test automation",
    ],
  },
  {
    id: "digital-marketing",
    number: "07",
    title: "Digital Marketing",
    description:
      "Growth strategy backed by data, not guesswork. We help teams attract the right audience, convert them with clarity, and retain them with consistent messaging across every channel.",
    capabilities: [
      "SEO strategy & technical SEO",
      "Content marketing & copywriting",
      "Paid acquisition (Google, Meta)",
      "Conversion rate optimization",
      "Analytics setup & reporting",
      "Email & lifecycle marketing",
    ],
  },
  {
    id: "staff-augmentation",
    number: "08",
    title: "Staff Augmentation",
    description:
      "Senior-level engineers embedded in your team, without the hiring overhead. We integrate with your workflow, your stack, and your culture — and contribute from day one.",
    capabilities: [
      "Frontend & backend engineers",
      "Flexible engagement (part / full time)",
      "Immediate ramp-up",
      "Works in your tools & processes",
      "No recruitment cost or delay",
      "Scales up or down as needed",
    ],
  },
] as const;
