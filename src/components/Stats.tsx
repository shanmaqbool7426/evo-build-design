import { Award, Building2, Smile, ShieldCheck } from "lucide-react";
import { stats } from "@/data/site";

const icons = [Award, Building2, Smile, ShieldCheck];

export function Stats() {
  return (
    <div className="grid gap-px overflow-hidden rounded-xl bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => {
        const Icon = icons[i] ?? Award;
        return (
          <div key={stat.label} className="flex items-center gap-4 bg-navy p-6">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-white/10 text-yellow">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-display text-2xl font-extrabold text-yellow">
                {stat.value}
              </span>
              <span className="block text-xs font-semibold tracking-wide text-blue-soft uppercase">
                {stat.label}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
