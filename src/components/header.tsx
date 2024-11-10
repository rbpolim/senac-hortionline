"use client";

import Link from "next/link";
import Image from "next/image";

import { ModeToggle } from "@/components/mode-toggle";
import { MobileSidebar } from "@/components/ui/mobile-sidebar";

export function Header() {
  return (
    <header className="flex-shrink-0 h-20 flex items-center fixed w-full z-50 transition duration-700 ease-in-out backdrop-blur-sm">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-2">
        <MobileSidebar />
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={80} height={60} />
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}
