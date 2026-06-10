import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import { Metadata } from "next";
import { Toaster } from "sonner";
import AuthProvider from "@/providers/AuthProvider";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Animals marketplace",
  description:
    "Buy healthy animals online from trusted breeders. Discover different breeds, compare options, and choose the perfect pet for your home.",
  openGraph: {
    title: "Animals marketplace",
    description:
      "Buy healthy animals online from trusted breeders. Discover different breeds, compare options, and choose the perfect pet for your home.",
    url: "",
    siteName: "Animals marketplace",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Animals marketplace",
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
      <body
        className={montserrat.variable}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TanstackQueryProvider>
          <AuthProvider>
            <Header />
            <main style={{ flexGrow: 1 }}>
              {children}
              {reserve}
            </main>
            <Toaster />
            <Footer />
          </AuthProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
