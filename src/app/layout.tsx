import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "CodeArena",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="h-[100%] "
      >
        {children}
        
      </body>
    </html>
  );
}
