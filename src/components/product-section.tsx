import { ProductCard } from "@/components/product-card";
import { ProductsCategories } from "@/data/sellers-data";

type ProductSectionProps = {
  productsCategories: ProductsCategories[];
}

export function ProductSection({ productsCategories }: ProductSectionProps) {
  return (
    <section className="py-6 mt-4">
      <div className="flex flex-col gap-y-8">
        {productsCategories.map((productCategory) => (
          <div key={productCategory.title}>
            <h2 className="text-lg font-bold">{productCategory.title}</h2>
            <div className="flex space-x-2 overflow-x-auto mt-2 pb-4">
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
