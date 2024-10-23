import type { Metadata } from "next";
import { Annie_Use_Your_Telescope } from "next/font/google";
import "./globals.css";

const annie = Annie_Use_Your_Telescope({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sushi Garden",
  description: "Sushi maker game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${annie.className} antialiased`}>{children}</body>
    </html>
  );
}
