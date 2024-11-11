"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Phone, PlusIcon, StarIcon } from "lucide-react";

import { SellerProps } from "@/types";
import { getSellerBySlug } from "@/utils/get-seller-by-slug";

import { Button } from "@/components/ui/button";
import { ModalProfile } from "@/components/modal-profile";
import { ProductSection } from "@/components/product-section";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function SellerPage() {
  const { slug } = useParams<{ slug: string }>();

  const [open, setOpen] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [seller, setSeller] = useState<SellerProps>();

  // async function getSellerBySlug(slug: string) {
  //   try {
  //     setLoading(true);
  //     const response = await axios.get(`http://localhost:8000/sellers?slug=${slug}`);
  //     setSeller(response.data[0] as SellerProps);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getSellerBySlug(slug);
  // }, [slug])

  // if (!seller || loading) {
  //   return <div>Carregando...</div>;
  // }

  useEffect(() => {
    if (slug) {
      const seller = getSellerBySlug(slug);
      // @ts-expect-error - TODO: fix this
      setSeller(seller);
    }
  }, [slug]);

  if (!seller) {
    return (
      <div>
        Nem um produtor encontrado! 😔
      </div>
    )
  }

  return (
    <>
      <ModalProfile
        isOpen={open}
        onClose={() => setOpen(false)}
        seller={seller}
      />
      <div className="flex items-center justify-center gap-x-2">
        <Avatar>
          <AvatarImage src={seller.avatarUrl} className="object-cover" />
        </Avatar>
        <div>
          <h2 className="text-lg font-bold">{seller.name}</h2>
          <div className="flex items-center gap-x-2 text-muted-foreground">
            <span className="text-xs">São Paulo, SP •</span>
            <span className="flex items-center gap-x-1 text-xs">
              <StarIcon size={14} />
              4.6
            </span>
          </div>
          <div className="flex items-center gap-x-2 mt-2">
            <Button size="sm" variant="secondary" onClick={() => setOpen(true)}>
              <PlusIcon size={16} />
              Detalhes
            </Button>
            <Button size="sm">
              <Phone size={16} />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
      <ProductSection productsCategories={seller.productsCategories} />
    </>
  );
}
