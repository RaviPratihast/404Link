import { LogoLoop } from "./LogoLoop";
import {
  SiDirectus,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFlutter,
  SiFramer,
  SiGraphql,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPayloadcms,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiShopify,
  SiStrapi,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiWebflow,
  SiWordpress,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

const TECH_LOGOS = [
  { node: <SiReact />, title: "React", style: { color: "#61DAFB" } },
  { node: <SiNextdotjs />, title: "Next.js", style: { color: "#000000" } },
  { node: <SiTypescript />, title: "TypeScript", style: { color: "#3178C6" } },
  { node: <SiTailwindcss />, title: "Tailwind CSS", style: { color: "#06B6D4" } },
  { node: <TbBrandReactNative />, title: "React Native", style: { color: "#087EA4" } },
  { node: <SiFlutter />, title: "Flutter", style: { color: "#02569B" } },
  { node: <SiNodedotjs />, title: "Node.js", style: { color: "#339933" } },
  { node: <SiExpress />, title: "Express", style: { color: "#393939" } },
  { node: <SiNestjs />, title: "NestJS", style: { color: "#E0234E" } },
  { node: <SiPython />, title: "Python", style: { color: "#3776AB" } },
  { node: <SiDirectus />, title: "Directus", style: { color: "#6644FF" } },
  { node: <SiPayloadcms />, title: "Payload CMS", style: { color: "#000000" } },
  { node: <SiStrapi />, title: "Strapi", style: { color: "#4945FF" } },
  { node: <SiWordpress />, title: "WordPress", style: { color: "#21759B" } },
  { node: <SiWebflow />, title: "Webflow", style: { color: "#4353FF" } },
  { node: <SiMongodb />, title: "MongoDB", style: { color: "#47A248" } },
  { node: <SiPostgresql />, title: "PostgreSQL", style: { color: "#4169E1" } },
  { node: <SiPrisma />, title: "Prisma", style: { color: "#2D3748" } },
  { node: <SiRedis />, title: "Redis", style: { color: "#DC382D" } },
  { node: <SiGraphql />, title: "GraphQL", style: { color: "#E10098" } },
  { node: <SiSupabase />, title: "Supabase", style: { color: "#3ECF8E" } },
  { node: <SiDocker />, title: "Docker", style: { color: "#2496ED" } },
  { node: <FaAws />, title: "AWS", style: { color: "#FF9900" } },
  { node: <SiFigma />, title: "Figma", style: { color: "#F24E1E" } },
  { node: <SiShopify />, title: "Shopify", style: { color: "#96BF48" } },
  { node: <SiFramer />, title: "Framer", style: { color: "#0055FF" } },
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
          Frontend, mobile, Node backends, headless CMS, data, and cloud — tools
          we ship real products with.
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
