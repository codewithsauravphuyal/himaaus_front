"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TopNavbar } from "./topnav"

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <TopNavbar />
      <Navbar />
      <main className="mx-auto px-15 container flex-1 py-15">
        {children}
      </main>
      <Footer />
    </div>
  )
}