import { useEffect, useState } from 'react'
import { Menu, X, Download, Sun, Moon } from 'lucide-react'
import { navLinks, profile, RESUME_URL } from '../data/content'

const STORAGE_KEY = 'theme'

function getInitialDark() {
  if (typeof document === 'undefined') return false
  return document.documentElement.classList.contains('dark')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [dark, setDark] = useState(getInitialDark)

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section tracking
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light')
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
  }

  const handleLinkClick = (id) => {
    setActive(id)
    setOpen(false)
  }

  const themeButton = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-heading transition-colors duration-200 hover:bg-surface"
    >
      {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  )

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-panel/90 backdrop-blur transition-shadow duration-200 ${
        scrolled ? 'border-line nav-shadow' : 'border-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-[72px]"
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2.5"
          aria-label="Matangi V — go to home"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-solid text-sm font-bold text-white"
          >
            {profile.initials}
          </span>
          <span className="text-base font-bold tracking-tight text-heading">{profile.name}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                aria-current={active === link.id ? 'page' : undefined}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === link.id ? 'text-accent-text' : 'text-muted hover:text-heading'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-[7px] h-0.5 rounded-full bg-accent"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2.5 lg:flex">
          {themeButton}
          <a
            href={RESUME_URL}
            download
            aria-label="Download Matangi V's resume as a PDF"
            className="btn btn-primary"
          >
            <Download size={15} aria-hidden="true" />
            Download Resume
          </a>
        </div>

        {/* Mobile toggle + theme toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          {themeButton}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-heading transition-colors hover:bg-surface"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-16 border-b border-line bg-panel menu-shadow lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  aria-current={active === link.id ? 'page' : undefined}
                  className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    active === link.id
                      ? 'bg-accent-soft text-accent-text'
                      : 'text-body hover:bg-surface hover:text-heading'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={RESUME_URL}
                download
                aria-label="Download Matangi V's resume as a PDF"
                className="btn btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                <Download size={15} aria-hidden="true" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
