import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Vilma G. Duschak | De las sombras a la claridad",
  description:
    "Landing profesional de coaching ontológico para agendar sesiones por WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
