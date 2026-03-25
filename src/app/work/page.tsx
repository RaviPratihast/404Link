import { Badge } from "@/components/ui/badge";
import { CTABanner } from "@/components/sections/CTABanner";
import { PROJECTS, CATEGORIES } from "@/constants/work";
import { createPageMetadata } from "@/lib/create-page-metadata";

export const metadata = createPageMetadata({
  title: "Work",
  description:
    "Case studies from 404linq: production systems shipped for engineering teams — performance, architecture, and outcomes you can verify.",
  pathname: "/work",
});

export default function WorkPage() {
  return (
    <>
      <section className="container-site section-padding">
        <div className="mb-4">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Case Studies
          </p>
          <h1 className="heading-display max-w-2xl text-balance">
            Work that ships and scales.
          </h1>
        </div>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          Production projects for engineering teams building at scale. No demos,
          no prototypes — only real systems used by real users.
        </p>
      </section>

      <section className="container-site pb-10">
        <div className="mb-4 flex flex-wrap gap-2" aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <Badge
              key={cat}
              variant={cat === "All" ? "default" : "outline"}
              className="cursor-pointer rounded-full px-3 py-1 text-xs"
            >
              {cat}
            </Badge>
          ))}
        </div>
      </section>

      <section className="container-site pb-28">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="group relative flex flex-col justify-end overflow-hidden rounded-2xl min-h-[300px] border"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="relative z-10 flex flex-col gap-3 p-7">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-white/20 bg-white/10 text-xs text-white backdrop-blur-sm"
                  >
                    {project.category}
                  </Badge>
                  <span className="font-mono text-xs text-white/50">
                    {project.year}
                  </span>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-white">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-xs text-white/60">{project.client}</p>
                </div>

                <p className="text-sm leading-relaxed text-white/70">
                  {project.description}
                </p>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-xs text-white/60 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
