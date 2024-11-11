import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackButton } from "@/components/back-button";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen font-mono flex flex-col">
      <BackButton />

      <Header />
      <main className="py-32 px-6 h-full flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
