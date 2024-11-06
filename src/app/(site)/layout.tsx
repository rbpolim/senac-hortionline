import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen font-mono">
      <Header />
      <main className="py-28 px-6 h-full">{children}</main>
      <Footer />
    </div>
  );
}
