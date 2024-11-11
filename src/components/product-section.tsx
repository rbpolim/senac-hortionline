import { ProductsCategories } from "@/data/sellers-data";
import { ProductCard } from "./ProductCard";

type ProductSectionProps = {
  productsCategories: ProductsCategories[];
}

export function ProductSection({ productsCategories }: ProductSectionProps) {
  return (
    <section className="py-6 mt-4">
      <div className="flex flex-col gap-y-8">
        {productsCategories.map((productCategory) => (
          <div key={productCategory.title}>
            <h2 className="text-lg font-bold">
              {productCategory.title}
            </h2>
            <div className="flex space-x-2 overflow-x-scroll last:mr-[-23px] no-scrollbar mt-2 pb-4">
              {productCategory.products.map((item) => (
                <div key={item.id}>
                  <ProductCard
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                  />  
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
