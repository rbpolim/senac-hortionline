import { SELLERS } from "@/data/sellers-data";

import { MarketCard } from "@/components/market-card";

export default function SellersPage() {
  return (
    <div className="flex flex-col items-start">
      <h1 className="font-bold text-2xl">Produtores</h1>
      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
        Aqui você encontra os melhores produtores de alimentos orgânicos da
        região.
      </p>
      <div className="flex flex-col gap-6 mt-8">
        {SELLERS.map((seller) => (
          <MarketCard
            key={seller.id}
            title={seller.name}
            description={seller.description}
            rating={seller.rating}
            image={seller.avatarUrl}
            slug={seller.slug}
          />
        ))}
      </div>
    </div>
  );
}
