import { useEffect, useState } from "react";
import { Clock, House, Phone, Store, CreditCard } from "lucide-react";

import { Modal } from "@/components/modal";
import { formatAddress } from "@/utils/format-address";
import { SellerProps } from "@/types";

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
          <h3 className="font-bold">
            <Store size={14} className="inline-block mr-1" />
            Sobre
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{seller.about}</p>
        </div>
        <div>
          <h3 className="font-bold">
            <Phone size={14} className="inline-block mr-1" />
            Contato
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
          • {seller.contact.phone}
          </p>
          <p className="text-sm text-muted-foreground">
          • {seller.contact.email}
          </p>
        </div>
        <div>
          <h3 className="font-bold">
            <House size={14} className="inline-block mr-1" />
            Endereço
          </h3>
          <p className="text-sm text-muted-foreground  mt-1">{formattedAddress}</p>
        </div>
        <div>
          <h3 className="font-bold">
            <Clock size={14} className="inline-block mr-1" />
            Horários
          </h3>
          <ul className="flex items-center  mt-1">
            {seller.dateTimeWork.days.map((day, index) => (
              <li key={index} className="text-sm text-muted-foreground">{day} • {' '}</li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">{seller.dateTimeWork.hours}</p>
        </div>
        <div>
          <h3 className="font-bold">
            <CreditCard size={14} className="inline-block mr-1" />
            Métodos de pagamento
          </h3>
          <ul className="mt-1">
            {seller.methodPayments.map((method, index) => (
              <li key={index} className="text-sm text-muted-foreground">• {method}</li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  )
}