import { GeistSans } from "geist/font";
import { Metadata } from "next";

import "@/app/ui/global.css";

export const metadata: Metadata = {
  title: "Dashboard with Nextjs 14",
  description: "Dashboard who handle customers and invoices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
