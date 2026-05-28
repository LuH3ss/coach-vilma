import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://dravilmaduschak-coaching.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dra. Vilma G. Duschak | De las sombras a la claridad",
  description:
    "Landing profesional de coaching ontológico para agendar sesiones por WhatsApp.",
  openGraph: {
    url: siteUrl,
    siteName: "Dra. Vilma G. Duschak — Coaching ontológico",
    locale: "es_AR",
    type: "website",
  },
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
