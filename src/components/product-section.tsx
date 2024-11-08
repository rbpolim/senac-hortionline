import { ProductCard } from "@/components/product-card";

type Product = {
  id: number;
  title: string;
  type: string;
  image: string;
  price: number;
}

type ProductSectionProps = {
  products: Product[];
}

export function ProductSection ({ products }: ProductSectionProps) {
  console.log(products)

  return (
    <section className="py-6">
      <div className="flex flex-col gap-y-8">
      {products.map((product) => {
        console.log('PRODUCT', product)

        return (
          <div key={product.id}>
          <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
          <div className="flex space-x-4 overflow-x-auto">
            {product.products.map((item) => (
              <ProductCard 
                key={product.id} 
                title={product.title}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
        </div>
        )
      })}
      </div>
    </section>
  );
};
