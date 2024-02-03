import type { Metadata } from "next";
import { Rubik } from "next/font/google";
// config
import { siteConfig } from "@/config/side";
// styles
import "@/styles/globals.css";
import "react-phone-input-2/lib/style.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL as string),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "sabory",
    "comida",
    "descuentos",
    "alimentos",
    "vendedor",
    "consumidor",
    "caducidad",
    "ahorro",
    "productos",
    "económico",
    "accesible",
  ],
  authors: [
    {
      name: "afrozens",
      url: "https://github.com/Afrozens",
    },
  ],
  creator: "afrozens",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/svg/sabory.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
