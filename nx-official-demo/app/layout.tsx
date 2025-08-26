import "./globals.css";
import { readexPro, lusitana, eduNswActFoundation } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${eduNswActFoundation.variable} antialiased`}>
      <body className={`${readexPro.className}`}>{children}</body>
    </html>
  );
}
