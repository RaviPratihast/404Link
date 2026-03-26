import { STATS } from "@/constants/site";
import { AnimatedStat } from "@/components/sections/AnimatedStat";

export const Stats = () => {
  return (
    <section className="container-site py-16 lg:py-20">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
        {STATS.map((stat, index) => (
          <AnimatedStat
            key={stat.label ?? `stat-${index}`}
            numericValue={stat.numericValue}
            suffix={stat.suffix}
            label={stat.label ?? ""}
          />
        ))}
      </div>
    </section>
  );
};
