import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen font-mono flex flex-col">
      <Header />
      <main className="py-24 px-6 h-full flex-1">{children}</main>
      <Footer />
    </div>
  );
}
