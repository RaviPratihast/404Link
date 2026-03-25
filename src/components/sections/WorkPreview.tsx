const CATEGORIES = [
  "Landing Pages",
  "Web Applications",
  "Mobile Apps",
  "UI / UX Design",
  "E-commerce",
  "SaaS Products",
  "Digital Marketing",
] as const;

export const WorkPreview = () => {

  return (
    <section className="container-site section-padding">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Track record
          </p>
          <h2 className="heading-section">
            78+ projects shipped.
          </h2>
        </div>
        {/* See the work — re-enable when portfolio is live
        <Link
          href="/work"
          className={cn(buttonVariants({ variant: "ghost" }), "self-start sm:self-auto")}
        >
          See the work <ArrowUpRight className="ml-1 size-4" />
        </Link>
        */}
      </div>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
        From landing pages and mobile apps to microfrontend platforms serving
        50,000+ users — 78 projects delivered across industries, on time and
        built to last.
      </p>

      <div className="mt-12 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <span
            key={cat}
            className="rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground"
          >
            {cat}
          </span>
        ))}
      </div>
    </section>
  );
};
