import { VENDORS } from "@/data/vendors-data";

import { MarketCard } from "@/components/market-card";

export default function MarketVender() {
  return (
    <div className="flex flex-col items-start">
      <h1 className="font-bold text-2xl">Produtores</h1>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
        Aqui você encontra os melhores produtores de alimentos orgânicos da
        região.
      </p>
      <div className="flex flex-col gap-6 mt-8">
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
