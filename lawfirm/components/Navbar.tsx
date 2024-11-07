'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navItems = [
    { name: 'Our Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass-nav' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <a 
            href="#"
            className={`text-3xl font-bold tracking-wide transition-colors duration-300 ${
              scrolled ? 'text-primary' : 'text-white'
            }`}
            style={{ fontFamily: 'Bodoni Moda, serif', textShadow: scrolled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.1)' }}
          >
            Template Attorneys
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-button"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'text-primary hover:bg-primary/5' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white border-l border-gray-200 shadow-xl transition-all duration-500 ease-in-out transform z-[60] ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ backgroundColor: 'white' }}
      >
        <div className="flex flex-col h-full pt-24 pb-6 bg-white">
          <div className="flex-1 px-4 bg-white">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block w-full text-lg text-primary hover:text-primary/80 transition-all duration-300 py-4 px-4 mb-4 rounded-lg hover:bg-primary/5 elegant-prose bg-white"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  const element = document.querySelector(item.href)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                style={{
                  animation: mobileMenuOpen ? `slideIn 0.5s ease forwards ${index * 0.1}s` : 'none',
                  opacity: 0,
                  backgroundColor: 'white',
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Footer */}
          <div className="px-4 py-6 border-t border-primary/10 bg-white">
            <p className="text-sm text-muted-foreground text-center elegant-prose">
              © 2024 Template Attorneys
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden transition-opacity duration-500 ${
          mobileMenuOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  )
}
