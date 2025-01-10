import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar";
import Header from "@/components/header";

import Head from 'next/head';

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "william electricidad",
  description: "Portfolio de william",
   openGraph: {
    url: '',
    siteName: '',
    images: [
      {
        url: '/public/circles.png',
        width: 30,
        height: 30
      },
      {
        url: '/public/electricity-flash-svgrepo-com.svg',
        width: 300,
        height: 300
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./electricity-flash-svgrepo-com.svg" />
        </Head>
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
