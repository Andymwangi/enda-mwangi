// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edna Wanja Mwangi | Professional Resume & LinkedIn Profile Expert",
  description: "Expert in LinkedIn profile optimization, ATS-friendly resume writing, and professional content creation. Transform your professional presence with tailored solutions.",
  keywords: "LinkedIn optimization, resume writing, ATS-friendly resumes, professional content creation, career coaching",
  authors: [{ name: "Edna Wanja Mwangi" }],
  openGraph: {
    title: "Edna Wanja Mwangi | Professional Career Services",
    description: "Transform your career with expert LinkedIn optimization and resume writing services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}