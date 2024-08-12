import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iPhone 15 Pro",
  description: "Apple iPhone Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/apple.svg" sizes="small" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
