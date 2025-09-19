import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Meu Comércio | Agência de Marketing Digital",
    template: "%s | Meu Comércio",
  },
  description: "Transformamos empresas comuns em máquinas de vendas espaciais através de estratégias de marketing digital que realmente funcionam.",
  icons: [
    {
      rel: "icon",
      url: "/logo.jpg",
}, ], };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
); }