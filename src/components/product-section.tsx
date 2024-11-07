import { ProductCard } from "@/components/product-card";

type Product = {
  id: number;
  title: string;
  type: string;
  image: string;
  price: number;
}

type ProductSectionProps = {
  title: string;
  products: Product[];
}

export function ProductSection ({ title, products }: ProductSectionProps) {
  return (
    <section className="py-6">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};
