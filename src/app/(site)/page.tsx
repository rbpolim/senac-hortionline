import { MarketCard } from "@/components/market-card";
import { markets } from "@/data/market-data";

export default function Home() {
  return (
    <div className="flex gap-y-10 items-center">
      <div>
        <div className="flex flex-col gap-6">
          {markets.map((market) => (
            <MarketCard 
              key={market.id}
              title={market.name}
              description={market.description}
              rating={market.rating}
              image={market.avatarUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
