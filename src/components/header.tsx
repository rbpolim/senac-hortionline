"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { ModeToggle } from "@/components/mode-toggle";
import { MobileSidebar } from "@/components/ui/mobile-sidebar";

export function Header() {
  const pathname = usePathname();

  const routes = [
    {
      label: "INÍCIO",
      path: "/",
      isActive: pathname === "/",
    },
    {
      label: "SOBRE",
      path: "/about",
      isActive: pathname === "/about",
    },
    {
      label: "PRODUTORES",
      path: "/sellers",
      isActive: pathname === "/sellers",
    },
  ];

  return (
    <header className="flex-shrink-0 h-20 flex items-center fixed w-full z-50 transition duration-700 ease-in-out backdrop-blur-sm">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-2">
        <MobileSidebar />
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={80} height={60} />
        </Link>

        <nav className="hidden md:flex gap-8 items-start transition">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "w-full p-2 text-lg bg-muted/40 transition",
                route.isActive && "font-black text-emerald-800"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        {/* <div className="flex-1" /> */}
        {/* <Link href="/">
          <Image src="/logo.svg" alt="logo" width={80} height={60} />
        </Link> */}
        <ModeToggle />
      </div>
    </header>
  );
}
