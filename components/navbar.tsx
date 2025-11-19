"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/consultation", label: "Consultation" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="border-b bg-background/80 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-primary">
         HimaAus
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-4 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground/70"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}