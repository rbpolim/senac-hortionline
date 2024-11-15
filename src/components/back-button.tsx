"use client";

import { ChevronLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    router.back();
  };

  if (pathname === "/") {
    return null; // Não renderiza o botão se estiver na página inicial
  }

  return (
    <button
      onClick={handleBack}
      className="fixed z-50 bottom-12 opacity-90 left-1/2 border transform -translate-x-1/2 bg-card rounded-full w-10 h-10 flex items-center justify-center shadow-lg focus:outline-none"
    >
      <ChevronLeft size={22} />
    </button>
  );
}
