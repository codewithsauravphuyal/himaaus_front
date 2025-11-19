import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { Toaster as HotToaster } from "react-hot-toast"
import { SiteShell } from "@/components/site-shell"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Consultancy Website",
  description: "Modern consultancy website built with Next.js, Tailwind, and shadcn/ui",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteShell>
            {children}
          </SiteShell>
          <HotToaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}