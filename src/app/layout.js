import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Providers from "./Providers";
import Navbar from "@/components/navbar/Navbar";
import SearchBox from "@/components/searchBox/SearchBox";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Movie App",
  description: "This is a movie app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
