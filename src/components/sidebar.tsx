import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

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
        <Image
          src="/logo.svg"
          alt="logo"
          width={110}
          height={110}
          className="opacity-90"
        />
      </div>
      <nav className="flex flex-col gap-8 items-start mt-14 transition font-mono text-center">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={cn(
              "p-6 text-3xl bg-muted/80 font-black transition text-muted-foreground",
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
