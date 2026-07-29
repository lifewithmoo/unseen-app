import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import LoadingScreen from "./components/layout/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UNSEEN",
  description: "Premium Streetwear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
  <CartProvider>
    <LoadingScreen />
    <Navbar />
    {children}
  </CartProvider>
</body>
    </html>
  );
}