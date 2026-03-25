export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "404linq transformed our frontend architecture. They delivered a production-grade microfrontend system that our 12-person team now ships features on independently. The quality is exceptional.",
    author: "Marcus Webb",
    initials: "MW",
  },
  {
    id: "t2",
    quote:
      "The Plinth design system they built became the foundation of everything we ship. Storybook, TypeScript, Tailwind v4 — done right. Other vendors had tried and failed. These people delivered.",
    author: "Priya Nair",
    initials: "PN",
  },
  {
    id: "t3",
    quote:
      "We had a hard deadline, a complex data problem, and high expectations. 404linq hit every milestone, caught issues before they became incidents, and left us with code we're proud to maintain.",
    author: "Daniel Osei",
    initials: "DO",
  },
] as const;
