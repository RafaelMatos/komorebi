import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/_components/header";
import { ThemeProvider } from "@/_components/providers/theme-provider";

const nunito = Nunito({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Galeria Komorebi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${nunito.className}`}>
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      >
        <div className="flex flex-col">
          <Header/>
          {children}
        </div>
        
        </ThemeProvider>
      </body>
    </html>
  );
}
