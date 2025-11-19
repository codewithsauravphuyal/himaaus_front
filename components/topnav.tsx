"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const links = [
  { href: "/news", label: "News & Update" },
  { href: "/contact", label: "Contact Us" },
  { href: "/login", label: "Login" },
]

export function TopNavbar() {
  const pathname = usePathname()

  return (
    <header className="bg-[#0072bc]">
      <nav className="container mx-auto flex h-10 items-center justify-end px-15">
        <ul className="flex items-center gap-4 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "font-medium uppercase transition-colors hover:text-white",
                  pathname === link.href
                    ? "text-white"
                    : "text-white/70"
                )}
                aria-current={pathname === link.href ? "page" : undefined}
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