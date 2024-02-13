import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Logan Saunders' Link Hub",
  description: "Links to all of Logan's relevant content",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className}>
        <section className="flex justify-center mt-16">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  )
}
