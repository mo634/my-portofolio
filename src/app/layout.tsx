import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ReduxProvider from "./components/ReduxProvide.js";
import HeaderMobile from "./components/HeaderMobile";
import AdminPanel from "./components/AdminPanel";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portofolio",
  description: "My Own Website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          {/* start header */}
          <ReduxProvider>
            <Header />
            <HeaderMobile />
          </ReduxProvider>
          {/* end header */}

          <div className="flex">
            <ReduxProvider>
              {children}
            </ReduxProvider>
            <div className="  ">
              <ReduxProvider>
                <AdminPanel />
              </ReduxProvider>
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}
