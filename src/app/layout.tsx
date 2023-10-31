import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/Redux/Provider";

const Kumbh = Kumbh_Sans({
  weight: ["300", "500", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Kumbh.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
