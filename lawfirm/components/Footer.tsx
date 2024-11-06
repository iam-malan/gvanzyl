'use client'

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: 'Bodoni Moda, serif' }}>
              G Van Zyl Attorneys
            </h3>
            <p className="text-muted-foreground mb-4 elegant-prose">
              Your trusted legal partner in Cape Town, providing expert legal services with integrity and dedication.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4" style={{ fontFamily: 'Bodoni Moda, serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Our Services', href: '#services' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact Us', href: '#contact' },
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms & Conditions', href: '/terms' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors elegant-prose"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4" style={{ fontFamily: 'Bodoni Moda, serif' }}>
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {[
                'Civil Litigation',
                'Family Law',
                'Criminal Defense',
                'Corporate Law',
                'Property Law',
              ].map((area) => (
                <li key={area}>
                  <span className="text-muted-foreground elegant-prose">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4" style={{ fontFamily: 'Bodoni Moda, serif' }}>
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground elegant-prose">
                  123 Legal Street<br />
                  Cape Town, 8001<br />
                  South Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+27123456789" 
                  className="text-muted-foreground hover:text-primary transition-colors elegant-prose"
                >
                  +27 12 345 6789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@gvanzyl.co.za" 
                  className="text-muted-foreground hover:text-primary transition-colors elegant-prose"
                >
                  info@gvanzyl.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm elegant-prose text-center md:text-left">
              © {currentYear} G Van Zyl Attorneys. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors elegant-prose">
                Privacy Policy
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors elegant-prose">
                Terms & Conditions
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors elegant-prose">
                Legal Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
