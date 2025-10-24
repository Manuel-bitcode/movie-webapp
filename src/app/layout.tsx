import "./globals.css";
import type { Metadata } from "next";
import { CounterProvider } from "@/context/useCounter";

export const metadata: Metadata = {
  title: "Movie Web App",
  description: "Descubre y guarda tus películas favoritas"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CounterProvider>
          {children}
        </CounterProvider>
      </body>
    </html>
  );
}
