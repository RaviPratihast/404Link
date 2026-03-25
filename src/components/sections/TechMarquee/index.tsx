import { LogoLoop } from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiWordpress,
  SiWebflow,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiPython,
  SiShopify,
  SiFramer,
  SiSupabase,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const TECH_LOGOS = [
  { node: <SiReact />, title: "React", style: { color: "#61DAFB" } },
  { node: <SiNextdotjs />, title: "Next.js", style: { color: "#000000" } },
  { node: <SiTypescript />, title: "TypeScript", style: { color: "#3178C6" } },
  { node: <SiTailwindcss />, title: "Tailwind CSS", style: { color: "#06B6D4" } },
  { node: <SiNodedotjs />, title: "Node.js", style: { color: "#339933" } },
  { node: <SiWordpress />, title: "WordPress", style: { color: "#21759B" } },
  { node: <SiWebflow />, title: "Webflow", style: { color: "#4353FF" } },
  { node: <SiMongodb />, title: "MongoDB", style: { color: "#47A248" } },
  { node: <SiPostgresql />, title: "PostgreSQL", style: { color: "#4169E1" } },
  { node: <SiFigma />, title: "Figma", style: { color: "#F24E1E" } },
  { node: <SiPython />, title: "Python", style: { color: "#3776AB" } },
  { node: <FaAws />, title: "AWS", style: { color: "#FF9900" } },
  { node: <SiShopify />, title: "Shopify", style: { color: "#96BF48" } },
  { node: <SiFramer />, title: "Framer", style: { color: "#0055FF" } },
  { node: <SiSupabase />, title: "Supabase", style: { color: "#3ECF8E" } },
] as const;

const logos = TECH_LOGOS.map((item) => ({
  node: (
    <span style={item.style} title={item.title}>
      {item.node}
    </span>
  ),
  title: item.title,
}));

export const TechMarquee = () => {
  return (
    <section
      className="border-y bg-secondary/30 py-8 sm:py-10"
      aria-labelledby="tech-stacks-heading"
    >
      <div className="container-site mb-6 text-center sm:mb-8">
        <h2
          id="tech-stacks-heading"
          className="text-sm font-medium tracking-widest text-muted-foreground uppercase"
        >
          Tech stacks we use
        </h2>
        <p className="mt-2 max-w-xl text-balance text-sm text-muted-foreground sm:mx-auto sm:text-base">
          Frontend, backend, CMS, and cloud — the tools we ship real products
          with.
        </p>
      </div>
      <LogoLoop
        logos={logos}
        speed={80}
        direction="left"
        logoHeight={52}
        gap={64}
        hoverSpeed={0}
        scaleOnHover
        ariaLabel="Tech stacks we use"
      />
    </section>
  );
};
