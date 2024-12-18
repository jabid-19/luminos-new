import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import SmoothScrolling from "@/components/common/SmoothScrolling";
import { GoogleAnalytics } from "@next/third-parties/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Luminos Energi",
  description:
    "På Luminos Energi AB är vi stolta över att vara en del av den gröna omställningen. Tillsammans med våra kunder bidrar vi inte bara till ett mer hållbart samhälle utan säkerställer även att kapital används på bästa möjliga sätt. Grön energi är idag en av de bästa investeringar ett företag eller en fastighetsägare kan göra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} antialiased font-sans font-light`}
      >
        <SmoothScrolling>
          <Navbar />
          <div className="overflow-hidden">{children}</div>
        </SmoothScrolling>
        <GoogleAnalytics gaId="G-XYZ" />
      </body>
    </html>
  );
}
