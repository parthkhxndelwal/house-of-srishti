import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://houseofsrishti.com"),
  title: {
    default: "House of Srishti, handcrafted ethnic wear for mothers & little ones",
    template: "%s · House of Srishti",
  },
  description:
    "Made-to-order Indian ethnic wear for mothers and their children. Hand-embroidered lehengas, sarees and coordinating sets, tailored to your measurements and ordered over WhatsApp.",
  keywords: [
    "ethnic wear",
    "mother daughter outfits",
    "handcrafted lehenga",
    "Indian couture",
    "made to order",
  ],
  openGraph: {
    title: "House of Srishti",
    description: site.tagline,
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
