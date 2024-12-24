// app/layout.tsx
import type { Metadata } from "next";
import Navbar from "./component/Navbar";
import { Toaster } from "react-hot-toast"
import { GoogleAnalytics } from '@next/third-parties/google'
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Frank Campos | Junior Full-Stack Web Developer & Personal Blog",
  description:
    "I'm Frank Campos, a Junior Full-Stack Web Developer. Explore my blog, software projects, and ideas as I grow my skills in web development.",
  keywords: [
    "Frank Campos",
    "Frank Parada Campos",
    "Junior Full-Stack Developer",
    "web developer portfolio",
    "personal blog",
    "software projects",
    "frontend development",
    "backend development",
    "React",
    "Django",
    "web development ideas",
    "portfolio website",
  ],
  authors: [{ name: 'Frank Parada Campos', url: 'https://www.frankcampos.com' }],
  
  openGraph: {
    title: "Frank Campos | Junior Full-Stack Web Developer & Blog",
    description:
      "Welcome to my personal website! I'm a Junior Full-Stack Developer sharing my blog, ideas, and software projects.",
    url: "https://www.frankcampos.com",
    type: "website",
    images: [
      {
        url: "https://www.frankcampos.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frank Campos - Junior Full-Stack Developer",
      },
    ],
  },
};

export const viewport ={ width: 'device-width', initialScale: 1 }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-color-mode="dark" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar />
        {children}
     
        
        <Toaster />
        <GoogleAnalytics gaId="G-WG3GY3KY7R" />
        
      </body>
    </html>
  );
}
