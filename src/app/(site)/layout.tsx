import { Header } from "@/components/header";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-mono">
      <Header />
      <main className="py-28 px-6">{children}</main>
      {/* <footer>Footer</footer> */}
    </div>
  );
}
