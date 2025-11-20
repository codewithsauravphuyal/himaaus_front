"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { ChevronDown, Globe, Menu, X, Phone } from "lucide-react"

const mainLinks = [
  { href: "/learning-center", label: "Learning Center" },
  { href: "/interview", label: "Interview" },
  { href: "/university", label: "University" },
  { href: "/services", label: "Services" },
]

const studyAbroadCountries = [
  {
    href: "/study-abroad/australia",
    label: "Australia",
    flag: "https://flagpedia.net/data/flags/w1600/au.png",
    description: "World-class education in vibrant cities",
  },
]

const aboutSubLinks = [
  {
    href: "/about",
    label: "About HIMA-AUS",
    description: "Established education and visa consultancy since 2008",
  },
  {
    href: "/about/message",
    label: "Message from Director",
    description: "Hear from our leadership",
  },
  {
    href: "/about/why-choose-us",
    label: "Why Choose Us?",
    description: "What makes us different",
  },
  {
    href: "/about/association-partner",
    label: "Association Partner",
    description: "Our trusted partners",
  },
  {
    href: "/about/team",
    label: "Himaaus Team",
    description: "Meet our experts",
  },
  {
    href: "/about/certified-agent",
    label: "Certified Agent for Australia",
    description: "Officially certified services",
  },
]

export function Navbar() {
  const pathname = usePathname()
  const [studyOpen, setStudyOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const studyTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleStudyMouseEnter = () => {
    if (studyTimeoutRef.current) {
      clearTimeout(studyTimeoutRef.current)
      studyTimeoutRef.current = null
    }
    setStudyOpen(true)
    setAboutOpen(false)
  }

  const handleStudyMouseLeave = () => {
    studyTimeoutRef.current = setTimeout(() => setStudyOpen(false), 200)
  }

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current)
      aboutTimeoutRef.current = null
    }
    setAboutOpen(true)
    setStudyOpen(false)
  }

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => setAboutOpen(false), 200)
  }

  const closeAllMenus = () => {
    setStudyOpen(false)
    setAboutOpen(false)
    setMobileMenuOpen(false)
  }

  const isActivePath = (href: string) => pathname === href

  const navLinkClasses = (href: string) =>
    cn(
      "text-sm font-semibold transition-all duration-300 hover:text-primary relative",
      isActivePath(href) ? "text-primary" : "text-foreground/80"
    )

  const dropdownIndicatorClasses = (open: boolean) =>
    cn(
      "absolute bottom-0 left-0 w-full h-0.5 bg-[#0072bc] rounded transition-all duration-300",
      open ? "scale-x-100" : "scale-x-0"
    )

  const dropdownButtonClasses = (active: boolean) =>
    cn(
      "text-sm font-semibold transition-all duration-300 hover:text-primary flex items-center gap-2 bg-transparent border-none p-0 cursor-pointer group",
      active ? "text-primary" : "text-foreground/80"
    )

  const chevronClasses = (open: boolean) =>
    cn(
      "h-4 w-4 transition-transform duration-300",
      open ? "rotate-180" : "rotate-0",
      "group-hover:rotate-180"
    )

  return (
    <header
      className={cn(
        "bg-white sticky top-0 z-50 transition-all duration-300 border-b",
        scrolled ? "shadow-lg border-border/40" : "border-transparent"
      )}
    >
      <nav className="container mx-auto relative flex h-20 items-center justify-between px-4 sm:px-6 lg:px-15">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-50" onClick={closeAllMenus}>
          <img
            className="h-19 w-auto transition-transform hover:scale-105"
            src="/logo.png"
            alt="HimaAus logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {/* Study Abroad Dropdown */}
            <li
              className="relative"
              onMouseEnter={handleStudyMouseEnter}
              onMouseLeave={handleStudyMouseLeave}
            >
              <button className={dropdownButtonClasses(pathname === "/" || pathname.startsWith("/study-abroad"))}>
                Study Abroad
                <ChevronDown className={chevronClasses(studyOpen)} />
              </button>
              <div className={dropdownIndicatorClasses(studyOpen)} />
            </li>

            {/* About Us Dropdown */}
            <li
              className="relative"
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <button className={dropdownButtonClasses(pathname.startsWith("/about"))}>
                About Us
                <ChevronDown className={chevronClasses(aboutOpen)} />
              </button>
              <div className={dropdownIndicatorClasses(aboutOpen)} />
            </li>

            {/* Other Links */}
            {mainLinks.map((link) => (
              <li key={link.href} className="relative">
                <Link href={link.href} className={navLinkClasses(link.href)} aria-current={isActivePath(link.href) ? "page" : undefined}>
                  {link.label}
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 bg-[#0072bc] transition-all duration-300",
                      isActivePath(link.href) ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <Button
            className="primary uppercase font-semibold px-6 py-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            asChild
          >
            <Link href="/contact" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Speak with Us
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <div className="relative w-6 h-6">
            <Menu
              className={cn(
                "absolute inset-0 transition-all duration-300",
                mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              )}
            />
            <X
              className={cn(
                "absolute inset-0 transition-all duration-300",
                mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              )}
            />
          </div>
        </button>
      </nav>

      {/* Study Abroad Mega Dropdown */}
      {studyOpen && (
        <div
          className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-2xl border-t border-border/50 z-40 animate-in fade-in slide-in-from-top-5 duration-300 lg:block"
          onMouseEnter={handleStudyMouseEnter}
          onMouseLeave={handleStudyMouseLeave}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-center">
              <div className="max-w-2xl w-full">
                {studyAbroadCountries.map((country) => (
                  <Link
                    key={country.href}
                    href={country.href}
                    className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300 overflow-hidden flex items-center gap-4 sm:gap-6"
                    onClick={closeAllMenus}
                  >
                    <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex items-center gap-4 sm:gap-6 w-full">
                      <img
                        src={country.flag}
                        alt={`${country.label} flag`}
                        className="h-12 w-16 sm:h-16 sm:w-24 rounded-lg shadow-md shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xl sm:text-2xl text-gray-900 group-hover:text-[#0072bc] transition-colors mb-2">
                          {country.label}
                        </h4>
                        <p className="text-gray-600 leading-relaxed mb-3 text-sm sm:text-base line-clamp-2">
                          {country.description}
                        </p>
                        <div className="flex items-center text-[#0072bc] text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                          Explore Australian opportunities
                          <ChevronDown className="h-4 w-4 rotate-270 ml-1 hidden sm:block" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Us Mega Dropdown */}
      {aboutOpen && (
        <div
          className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-2xl border-t border-border/50 z-40 animate-in fade-in slide-in-from-top-5 duration-300 lg:block"
          onMouseEnter={handleAboutMouseEnter}
          onMouseLeave={handleAboutMouseLeave}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Company Overview */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <img src="/logo.png" alt="HimaAus logo" className="h-16 sm:h-20 w-auto" />
                </div>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  A well established education and visa consultancy firm providing a wide range of services to international students and aspiring migrants since 2008.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <Link href="/about" onClick={closeAllMenus}>
                      Learn More
                    </Link>
                  </Button>
                  <Button className="w-full sm:w-auto">
                    <Link href="/contact" onClick={closeAllMenus}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Quick Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutSubLinks.slice(1).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
                    onClick={closeAllMenus}
                  >
                    <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <h4 className="font-semibold text-gray-900 group-hover:text-[#0072bc] transition-colors mb-1 text-sm sm:text-base">
                        {link.label}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {link.description}
                      </p>
                      <div className="flex items-center text-[#0072bc] text-xs font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn more
                        <ChevronDown className="h-3 w-3 rotate-270 ml-1 hidden sm:block" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-border shadow-2xl z-40 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="container mx-auto px-4 py-3 space-y-3">
            {/* Study Abroad Mobile */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                <Globe className="h-5 w-5 shrink-0" />
                Study Abroad
              </div>
              <div className="pl-7 space-y-2">
                {studyAbroadCountries.map((country) => (
                  <Link
                    key={country.href}
                    href={country.href}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <img
                      src={country.flag}
                      alt=""
                      className="h-6 w-9 rounded shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="text-sm font-medium block">{country.label}</span>
                      <span className="text-xs text-gray-600 line-clamp-1">
                        {country.description}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* About Us Mobile */}
            <div className="space-y-2">
              <div className="text-lg font-semibold text-gray-900">About Us</div>
              <div className="space-y-1 pl-7">
                {aboutSubLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-sm text-gray-700 hover:text-[#0072bc] transition-colors border-b border-gray-100 last:border-b-0"
                    onClick={closeAllMenus}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Links Mobile */}
            <div className="space-y-2">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block py-2 text-lg font-semibold text-gray-900 hover:text-[#0072bc] transition-colors border-b border-gray-100 last:border-b-0",
                    isActivePath(link.href) && "text-[#0072bc]"
                  )}
                  onClick={closeAllMenus}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <Button className="w-full primary uppercase font-semibold mt-4 bg-[#0072bc]" asChild>
              <Link href="/contact" onClick={closeAllMenus}>
                <Phone className="h-4 w-4 mr-2" />
                Speak with Us
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}