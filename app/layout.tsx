import type { Metadata } from "next"
import "./globals.css"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { Toaster as HotToaster } from "react-hot-toast"
import { SiteShell } from "@/components/site-shell"

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

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
    <html lang="en" className={`${poppins.variable}`} suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
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