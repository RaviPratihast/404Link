import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SERVICES } from "@/constants/services";

export const ServicesSection = () => {
  return (
    <section className="bg-secondary/40">
      <div className="container-site section-padding">
        <div className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            What We Do
          </p>
          <h2 className="heading-section max-w-lg text-balance">
            End-to-end. No filler.
          </h2>
        </div>

        <div className="flex flex-col">
          {SERVICES.map((service, i) => (
            <div key={service.id}>
              {i > 0 && <Separator />}
              <Link
                href={`/services#${service.id}`}
                className="group grid grid-cols-1 gap-6 py-10 transition-colors duration-150 hover:bg-background/50 sm:grid-cols-[1fr_2fr_auto] sm:items-start sm:gap-12 sm:px-4"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-muted-foreground">
                    {service.number}
                  </span>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>

                <p className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="flex items-start pt-1">
                  <span className="flex items-center gap-1 text-sm font-medium opacity-0 transition-all duration-200 group-hover:opacity-100">
                    Explore
                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
