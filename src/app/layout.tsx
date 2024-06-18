import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vote.gov.uk",
  description: "Official UK Government website for Elections and Voting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`govuk-template ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
