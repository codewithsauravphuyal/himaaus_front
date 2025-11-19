"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="container flex-1 py-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}