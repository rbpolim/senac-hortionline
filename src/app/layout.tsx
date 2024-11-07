import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css";

export const metadata: Metadata = {
  title: "HortiOnline",
  description: "HortiOnline is a platform for buying and selling plants.",
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
