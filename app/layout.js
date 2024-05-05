import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notes App",
  description: "By Benji Friedman, Running on Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-4 md:p-8 mt-4">{children}</div>
      </body>
    </html>
  );
}
