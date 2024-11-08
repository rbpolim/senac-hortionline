import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css";

export const metadata: Metadata = {
  title: "HortiOnline",
  description: "Somos uma plataforma dedicada a conectar pessoas que buscam legumes e vegetais frescos e orgânicos com produtores locais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
