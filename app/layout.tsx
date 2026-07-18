import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import { Metadata } from "next";
import { Toaster } from "sonner";
import AuthProvider from "@/providers/AuthProvider";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Pet Shop",
  description:
    "Buy healthy animals online from trusted breeders. Discover different breeds, compare options, and choose the perfect pet for your home.",
  openGraph: {
    title: "Pet Shop",
    description:
      "Buy healthy animals online from trusted breeders. Discover different breeds, compare options, and choose the perfect pet for your home.",
    url: "https://pet-shop-client-five.vercel.app/",
    siteName: "Pet shop",
    images: [
      {
        url: "https://pet-shop-client-five.vercel.app/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Pet shop",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
  reserve,
}: Readonly<{
  children: React.ReactNode;
  reserve: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} flex min-h-screen flex-col`}>
        <TanstackQueryProvider>
          <AuthProvider>
            <ThemeProvider>
              <Header />
              <main className="reletive flex-1 bg-[var(--background)]">
                {children}
                {reserve}
              </main>
              <Toaster />
              <Footer />
            </ThemeProvider>
          </AuthProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
