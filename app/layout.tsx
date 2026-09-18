import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Novotok Móveis Planejados",
  description: "Protótipo de site para móveis planejados de alto padrão.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
