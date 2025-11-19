"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"

const links = [
  { href: "/learning-center", label: "Learning Center" },
  { href: "/interview", label: "Interview" },
  { href: "/university", label: "University" },
  { href: "/services", label: "Services" },
]

const aboutSubLinks = [
  { href: "/about", label: "HIMA-AUS is a well established education and visa consultancy firm providing a wide range of services to international students and aspiring migrants since 2008.Our unrivalled service, support and guidance to our students begins at their home country and will continue throughout their stay and educational journey in Australia. We have consistently evolved and grown over the years and now operate from 14 branch offices in 6 countries." },
  { href: "/about/message", label: "Message from Director" },
  { href: "/about/why-choose-us", label: "Why Choose Us?" },
  { href: "/about/association-partner", label: "Association Partner" },
  { href: "/about/team", label: "Himaaus Team" },
  { href: "/about/certified-agent", label: "Certified Agent for Australia" },
]

export function Navbar() {
  const pathname = usePathname()
  const [studyOpen, setStudyOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  const studyTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleStudyMouseEnter = () => {
    if (studyTimeoutRef.current) {
      clearTimeout(studyTimeoutRef.current)
      studyTimeoutRef.current = null
    }
    setStudyOpen(true)
  }

  const handleStudyMouseLeave = () => {
    studyTimeoutRef.current = setTimeout(() => {
      setStudyOpen(false)
    }, 150)
  }

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current)
      aboutTimeoutRef.current = null
    }
    setAboutOpen(true)
  }

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutOpen(false)
    }, 150)
  }

  return (
    <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-50">
      <nav className="container mx-auto relative flex h-25 items-center justify-between px-15">
        <Link href="/">
          <img className="h-18 w-auto" src="/logo.png" alt="HimaAus logo" />
        </Link>
        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-6 md:flex">
            {/* Study Abroad Dropdown */}
            <li
              onMouseEnter={handleStudyMouseEnter}
              onMouseLeave={handleStudyMouseLeave}
            >
              <button
                className={cn(
                  "text-sm uppercase font-medium transition-colors hover:text-primary flex items-center gap-1 bg-transparent border-none p-0 cursor-default",
                  pathname === "/" || pathname.startsWith("/study-abroad")
                    ? "text-primary"
                    : "text-foreground/70"
                )}
              >
                Study Abroad
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", studyOpen ? "rotate-0" : "rotate-180")} />
              </button>
            </li>
            {/* About Us Dropdown */}
            <li
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <button
                className={cn(
                  "text-sm uppercase font-medium transition-colors hover:text-primary flex items-center gap-1 bg-transparent border-none p-0 cursor-default",
                  pathname.startsWith("/about")
                    ? "text-primary"
                    : "text-foreground/70"
                )}
              >
                About Us
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", aboutOpen ? "rotate-0" : "rotate-180")} />
              </button>
            </li>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm uppercase font-medium transition-colors hover:text-primary",
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground/70"
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="primary uppercase" asChild>
            <Link href="/contact">Speak with Us</Link>
          </Button>
        </div>
        {/* Study Abroad Full-Width Dropdown */}
        {studyOpen && (
          <div
            className="absolute top-full left-0 right-0 bg-white shadow-lg z-40"
            onMouseEnter={handleStudyMouseEnter}
            onMouseLeave={handleStudyMouseLeave}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-center">
                <Link href="/study-abroad/australia" className="flex items-center gap-4 text-lg font-medium hover:text-primary">
                  <img
                    src="https://flagpedia.net/data/flags/w1600/au.png"
                    alt="Australia flag"
                    className="h-12 w-24 rounded flex-shrink-0"
                  />
                  Australia
                </Link>
              </div>
            </div>
          </div>
        )}
        {/* About Us Full-Width Dropdown */}
        {aboutOpen && (
          <div
            className="absolute top-full left-0 right-0 bg-white shadow-lg z-40 p-0"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex gap-8 max-w-4xl mx-auto justify-center">
                {/* Left side: Company info with logo */}
                <div className="flex flex-col items-start gap-4 flex-1 min-w-0">  
                  <img 
                    src="/logo.png" 
                    alt="Himaaus logo" 
                    className="h-12 w-auto rounded" 
                  />
                  <Link
                    href="/about"
                    className="w-full text-sm font-medium text-foreground hover:text-primary whitespace-normal leading-relaxed"
                  >
                    {aboutSubLinks[0].label}
                  </Link>
                </div>
                {/* Right side: Sub-links */}
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  {aboutSubLinks.slice(1).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-start gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                    >
                      <span className="text-muted-foreground text-xs mt-1 flex-shrink-0">&gt;</span>
                      <span className="truncate">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}