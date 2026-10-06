import { ArchitectureCard } from "./ArchitectureCard";
import type { OverviewItem } from "./types";

export function ArchitectureGrid({ items }: { items: OverviewItem[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-3 md:gap-0">
      {items.map((item, index) => (
        <ArchitectureCard {...item} bordered={index > 0} key={item.title} />
      ))}
    </div>
  );
}
