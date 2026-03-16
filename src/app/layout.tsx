import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teena Jadhao | AI Portfolio",
  description: "A black-and-white glassmorphism portfolio for Teena Jadhao, AI Engineering Student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
