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
      className="group fixed z-50 bottom-12 opacity-90 left-1/2 border transform -translate-x-1/2 bg-card rounded-full w-14 h-14 flex items-center justify-center shadow-lg focus:outline-none hover:bg-card-hover hover:border-emerald-900 transition-colors"
    >
      <ChevronLeft
        size={24}
        className="hover:scale-110 transition-transform delay-100 group-hover:text-emerald-900 group-hover:scale-125 text-muted-foreground group-hover:-translate-x-1.5"
      />
    </button>
  );
}
