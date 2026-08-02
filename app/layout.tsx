import "./globals.css";

import Providers from "./providers";
import Navbar from "@/app/components/layout/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />

          <div className="pt-16">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}