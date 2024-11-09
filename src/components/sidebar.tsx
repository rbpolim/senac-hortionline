
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Image from "next/image";

// import { Logo } from "@/components/logo";

export const Sidebar = () => {
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
    <div className="flex flex-col h-full overflow-y-auto border-r shadow-sm">
      <div className="p-2 pt-8 flex items-center justify-center">
        <Image src="/logo-text.svg" alt="logo" width={120} height={120} className="opacity-90" />
      </div>
      <nav className="flex flex-col gap-8 items-start mt-14 transition font-mono text-center">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={cn(
              "w-full p-6 text-3xl transition text-muted-foreground",
              route.isActive && "font-black text-emerald-800"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
