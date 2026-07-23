import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adam Chambi | Desarrollador de Software & IA Agéntica",
  description:
    "Desarrollo de software a medida con inteligencia artificial. Automatización con IA agéntica, ERPs, SaaS y sistemas inteligentes que transforman tu negocio.",
  keywords: [
    "desarrollo software",
    "IA agéntica",
    "inteligencia artificial",
    "ERP",
    "SaaS",
    "automatización",
    "Python",
    "Next.js",
    "machine learning",
    "Adam Chambi",
  ],
  authors: [{ name: "Adam Chambi" }],
  openGraph: {
    title: "Adam Chambi | Desarrollador de Software & IA Agéntica",
    description:
      "Sistemas inteligentes que transforman tu negocio. Automatización con IA agéntica, ERPs y SaaS a medida.",
    type: "website",
    locale: "es_BO",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
