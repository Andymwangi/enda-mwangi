import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edna Wanja Mwangi | Professional Resume & LinkedIn Profile Expert",
  description: "Expert in LinkedIn profile optimization, ATS-friendly resume writing, and professional content creation. Transform your professional presence with tailored solutions.",
};

function Footer() {
  return (
    <footer className="border-t bg-background py-8 mt-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Edna Wanja Mwangi. All rights reserved.</div>
        <div className="flex gap-6 items-center">
          <a href="/" className="hover:underline text-primary">Home</a>
          <a href="/portfolio" className="hover:underline text-primary">Portfolio</a>
          <a href="/about" className="hover:underline text-primary">About</a>
          <a href="/contact" className="hover:underline text-primary">Contact</a>
          <a href="https://www.linkedin.com/in/ednawanja/" target="_blank" rel="noopener noreferrer" className="text-primary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-5 w-5 inline"><path d="M16 8a6 6 0 0 1 6 6v5h-4v-5a2 2 0 0 0-4 0v5h-4v-9h4v1.5A4 4 0 0 1 16 8zM2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/></svg></a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-background">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
