'use client'

import { StarIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from 'react';

import { Seller } from '@/data/sellers-data'
import { getSellerBySlug } from "@/utils/get-seller-by-slug";

import { Button } from "@/components/ui/button";
import { ModalProfile } from "@/components/modal-profile";
import { ProductSection } from "@/components/product-section";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function SellerPage() {
  const { slug } = useParams<{ slug: string }>();

  const [open, setOpen] = useState(false)
  const [seller, setSeller] = useState<Seller | null>(null);

  useEffect(() => {
    if (slug) {
      const seller = getSellerBySlug(slug);
      setSeller(seller!);
    }
  }, [slug]);

  if (!seller) {
    return null;
  }

  return (
    <>
      <ModalProfile
        isOpen={open}
        onClose={() => setOpen(false)}
        seller={seller}
      />
      <div className="flex items-center gap-x-4">
        <Avatar>
          <AvatarImage src="/test.png" className="object-cover" />
        </Avatar>
        <div>
          <h2 className="text-lg font-bold">{seller.name}</h2>
          <div className="flex items-center gap-x-2 text-muted-foreground">
            <span className="text-xs">
              São Paulo, SP •
            </span>
            <span className="flex items-center gap-x-1 text-xs">
              <StarIcon size={14} />
              4.6
            </span>
          </div>
          <div className="flex items-center gap-x-3 mt-3">
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setOpen(true)}
            >
              Detalhes
            </Button>
            <Button size="sm">WhatsApp</Button>
          </div>

        </div>
      </div>
      {/* @ts-expect-error TODO */}
      <ProductSection productsCategories={seller.productsCategories} />
    </>
  );
}
