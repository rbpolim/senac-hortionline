import { SELLERS } from "@/data/sellers-data";

export const getSellerBySlug = (slug: string) => {
  return SELLERS.find((seller) => seller.slug === slug);
};