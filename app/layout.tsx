import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "./context/timeleft";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyber Recruitment",
  description: "Web Cyber Recruitment by Cyber Physical System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const BackgroundStyle = {
    background: `linear-gradient(to bottom, #F2EFEF, #ECDADA,#E9CACB, #EACACB, #E9CACB, #ECDADA, #F2EFEF)`,
  };
  return (
    <html lang="en">
      <body className={`bg-red-100 ${inter.className}`} style={{ backgroundColor: "#F4F4F4" }}>
        <main>
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </main>
      </body>
    </html>
  );
}
