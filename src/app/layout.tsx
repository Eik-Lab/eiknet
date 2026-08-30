import type { Metadata } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { Preloader } from "@/components/layout/preloader";
import { basisUrl } from "@/lib/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const baseUrl = basisUrl;

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: "Eik Lab. Senter for studentinnovasjon",
    template: "%s | Eik Lab",
  },
  description:
    "Eik Lab er Senter for studentinnovasjon ved NMBU på Ås. Vi gir studenter verktøyene de trenger for å utforske, prototype og realisere idéer.",
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "Eik Lab",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${archivo.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#hovedinnhold"
          className="tag-s-bold sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-black focus:px-4 focus:py-2 focus:text-krem"
        >
          Hopp til innhold
        </a>
        <Preloader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
