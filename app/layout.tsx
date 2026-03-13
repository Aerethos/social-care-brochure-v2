import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Social Care Ireland Conference 2026 - Sponsor Brochure",
  description: "Digital brochure for Social Care Ireland Annual Conference 2026",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
