"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const LINKS = [
  { href: "/news", label: "NEWS & UPDATE" },
  { href: "/contact", label: "CONTACT US" },
  { href: "/login", label: "LOGIN" },
] as const

export function TopNavbar() {
  const pathname = usePathname()

  const isActivePath = (href: string) => pathname === href

  return (
    <header className="bg-[#0072bc]">
      <nav className="container mx-auto flex h-10 items-center justify-end px-4 sm:px-6 lg:px-15">
        <ul className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "font-medium uppercase transition-colors duration-200 hover:text-white",
                  isActivePath(link.href) ? "text-white" : "text-white/70"
                )}
                aria-current={isActivePath(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}