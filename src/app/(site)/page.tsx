import { VENDORS } from "@/data/vendors-data";

import { MarketCard } from "@/components/market-card";

export default function Home() {
  return (
    <div className="flex gap-y-10 items-center">
      <div className="flex flex-col gap-6">
        {VENDORS.map((vendor) => (
          <MarketCard
            key={vendor.id}
            title={vendor.name}
            description={vendor.description}
            rating={vendor.rating}
            image={vendor.avatarUrl}
            slug={vendor.slug}
          />
        ))}
      </div>
    </div>
  );
}
