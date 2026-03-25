import { TESTIMONIALS } from "@/constants/testimonials";

export const Testimonials = () => {
  return (
    <section className="container-site section-padding">
      <div className="mb-14">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Client Feedback
        </p>
        <h2 className="heading-section max-w-lg text-balance">
          Words from the teams we&apos;ve built with.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <blockquote
            key={t.id}
            className="flex flex-col gap-6 rounded-2xl border bg-card p-8"
          >
            <p className="text-base leading-relaxed text-foreground/80">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="flex items-center gap-3 mt-auto">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                {t.initials}
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold">{t.author}</span>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};
