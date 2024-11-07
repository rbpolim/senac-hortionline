import { VENDORS } from "@/data/vendors-data";

export const getVendorBySlug = (slug: string) => {
  return VENDORS.find((vendor) => vendor.slug === slug);
};