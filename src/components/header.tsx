"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { MobileSidebar } from "@/components/ui/mobile-sidebar";

export function Header() {
  const pathname = usePathname();

  const routes = [
    { href: "/about", label: "SOBRE" },
    { href: "/market-vender", label: "PRODUTORES" },
  ];

  return (
    <header className="h-16 flex items-center fixed w-full z-50 transition duration-700 ease-in-out backdrop-blur-sm">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-2">
        <div className="hidden md:inline-flex">LOGO</div>
        <MobileSidebar />
        <nav className="flex items-center gap-x-8">
          {routes.map((route) => (
            <Link
              className={cn(
                "text-lg transition text-gray-800 font-medium",
                pathname === route.href && "text-white bg-slate-800 p-1"
              )}
              key={route.href}
              href={route.href}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <Image src="/logo.svg" alt="logo" width={60} height={50} />
      </div>
    </header>
  );
}
