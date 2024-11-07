'use client'

import { StarIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from 'react';

import { VendorProps } from '@/data/vendors-data'
import { getVendorBySlug } from '@/utils/get-vendor-by-slug';

import { Button } from "@/components/ui/button";
import { ProductSection } from "@/components/product-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function VendorDetails() {
  const { slug } = useParams<{ slug: string }>();

  const [vendor, setVendor] = useState<VendorProps | null>(null);

  useEffect(() => {
    if (slug) {
      const vendor = getVendorBySlug(slug);
      setVendor(vendor!);
    }
  }, [slug]);

  if (!vendor) {
    return null;
  }

  return (
    <>
      <div className="flex items-center gap-x-3">
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1633257057305-033b31735407?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-y-2 w-full">
          <h2>{vendor.name}</h2>
          <div className="flex items-center gap-x-3">
            <Button size="sm" variant="secondary">Detalhes</Button>
            <Button size="sm">WhatsApp</Button>
          </div>
          <span className="flex items-center gap-x-1 text-xs">
            <StarIcon size={14} />
            4.6
          </span>
        </div>
      </div>
      <ProductSection title="Products" products={vendor.products} />
    </>
  );
}
