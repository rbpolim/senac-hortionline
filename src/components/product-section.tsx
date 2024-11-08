import { ProductCard } from "@/components/product-card";

import { ProductsCategories } from "@/data/sellers-data";

type ProductSectionProps = {
  productsCategories: ProductsCategories[];
}

export function ProductSection({ productsCategories }: ProductSectionProps) {
  return (
    <section className="py-6">
      <div className="flex flex-col gap-y-8">
        {productsCategories.map((productCategory) => (
          <div key={productCategory.title}>
            <h2 className="text-2xl font-semibold mb-2">{productCategory.title}</h2>
            <div className="flex space-x-4 overflow-x-auto">
              {productCategory.products.map((item) => (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
