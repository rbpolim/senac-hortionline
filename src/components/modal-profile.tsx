import { useEffect, useState } from "react";

import { Modal } from "@/components/modal";
import { SellerProps } from "@/data/sellers-data";
import { formatAddress } from "@/utils/format-address";
import { Mail, Phone } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  seller: SellerProps;
}

export function ModalProfile({
  isOpen,
  onClose,
  seller,
}: Props) {
  const [isMounted, setIsMounted] = useState(false)

  const formattedAddress = formatAddress(seller.address);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Modal
      title={seller.name}
      description="Detalhes do perfil"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex flex-col gap-y-6">
        <div>
          <h3 className="font-bold text-sm">Sobre</h3>
          <p className="text-xs text-muted-foreground mt-1">{seller.about}</p>
        </div>
        <div>
          <h3 className="font-bold text-sm">Contato</h3>
          <p className="text-xs text-muted-foreground mt-1">
            <Phone size={10} className="inline-block mr-1" />
            {seller.contact.phone}
          </p>
          <p className="text-xs text-muted-foreground">
            <Mail size={10} className="inline-block mr-1" />
            {seller.contact.email}
          </p>
        </div>
        <div>
          <h3 className="font-bold text-sm">Endereço</h3>
          <p className="text-xs text-muted-foreground  mt-1">{formattedAddress}</p>
        </div>
        <div>
          <h3 className="font-bold text-sm">Horários</h3>
          <ul className="flex items-center  mt-1">
            {seller.dateTimeWork.days.map((day, index) => (
              <li key={index} className="text-xs text-muted-foreground">{day} • {' '}</li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground">{seller.dateTimeWork.hours}</p>
        </div>
        <div>
          <h3 className="font-bold text-sm">Métodos de pagamento</h3>
          <ul className="mt-1">
            {seller.methodPayments.map((method, index) => (
              <li key={index} className="text-xs text-muted-foreground">• {method}</li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  )
}