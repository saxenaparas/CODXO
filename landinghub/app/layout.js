import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PARAS | CoDxo Internship",
  description: "A Landing/Hub contaning all the projects done during the internship at CODXO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
