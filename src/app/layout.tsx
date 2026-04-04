import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { CustomCursor } from "@/components/CustomCursor";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "The Artisan Engineer | Tushar Batham",
  description: "Earthy, editorial portfolio of a Product and AI Systems Builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${playfair.variable} font-sans bg-bg text-fg antialiased overflow-x-hidden selection:bg-accent-glow selection:text-fg cursor-none`}>
        <CustomCursor />
        <div className="noise-bg" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}