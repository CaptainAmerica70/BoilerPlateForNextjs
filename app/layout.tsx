
import { Inter } from "next/font/google";
import "./globals.css";
import { Document } from "./Document";
import PercentageCalculator from "./Calculator";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Document>{children}</Document>
      </body>
      <PercentageCalculator />
    </html>
  );
}