import type { ReactNode } from "react";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Navio | Cardapio Especial de Pascoa",
  description:
    "Landing page premium da Navio Pescados e Gastronomia para pedidos do cardapio especial de Pascoa via WhatsApp.",
  openGraph: {
    title: "Navio | Cardapio Especial de Pascoa",
    description:
      "Escolha pratos, acompanhamentos e envie seu pedido especial de Pascoa pelo WhatsApp.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
