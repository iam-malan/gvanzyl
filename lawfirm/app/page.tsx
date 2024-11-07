'use client'

import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { Footer } from "../components/Footer"
import { 
  ArrowRight,
  Scale,
  Shield,
  Users,
  MessageSquare,
  ChevronDown,
  Building2,
  Landmark,
  Gavel,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react"

export default function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal')
      reveals.forEach(element => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[100svh] flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/capetown.JPG"
            alt="Cape Town Skyline"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="hero-overlay" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative pt-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white reveal">
              Your Trusted Legal Partner in Cape Town
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 reveal max-w-2xl mx-auto elegant-prose">
              Specializing in corporate, family, and criminal law with over two decades of experience
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 reveal">
              <a href="#contact" className="cta-button w-full sm:w-auto flex items-center justify-center gap-2">
                Free Consultation
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#services" className="secondary-button w-full sm:w-auto flex items-center justify-center gap-2">
                Our Services
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white reveal elegant-prose">
              <a href="mailto:info@templateattorneys.co.za" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="h-5 w-5" />
                <span>info@templateattorneys.co.za</span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 md:py-32 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle elegant-prose">
            Comprehensive legal solutions tailored to your needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Scale,
                title: "Civil Litigation",
                description: "Expert representation in civil disputes and litigation matters."
              },
              {
                icon: Users,
                title: "Family Law",
                description: "Compassionate guidance through family legal matters."
              },
              {
                icon: Shield,
                title: "Criminal Defense",
                description: "Strong defense strategies in criminal proceedings."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="service-card p-6 sm:p-8 reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-6 text-secondary" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 elegant-prose">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors elegant-prose"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jurisdictions Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Jurisdictions</h2>
          <p className="section-subtitle elegant-prose">
            Serving the greater Cape Town area with dedicated legal expertise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Landmark,
                title: "Cape Town Magistrate's Court",
                features: [
                  "Civil and Criminal Matters",
                  "Family Court Proceedings",
                  "Small Claims Court",
                  "Maintenance Court"
                ]
              },
              {
                icon: Building2,
                title: "Wynberg Magistrate's Court",
                features: [
                  "Criminal Cases",
                  "Civil Litigation",
                  "Domestic Violence Court",
                  "Children's Court"
                ]
              }
            ].map((jurisdiction, index) => (
              <div
                key={index}
                className="jurisdiction-card p-6 sm:p-8 reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <jurisdiction.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-6 text-secondary" />
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-primary">
                  {jurisdiction.title}
                </h3>
                <ul className="space-y-4">
                  {jurisdiction.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Gavel className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground elegant-prose">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-24 md:py-32 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle elegant-prose">
            What our clients say about our services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                text: "Exceptional service and professional guidance throughout my case.",
                name: "Sarah Johnson",
                role: "Corporate Client"
              },
              {
                text: "Their expertise and dedication made all the difference in my legal matter.",
                name: "Michael Chen",
                role: "Private Client"
              },
              {
                text: "Highly professional team with a personal touch in their service.",
                name: "David Smith",
                role: "Business Owner"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card p-6 sm:p-8 reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 mb-6 text-secondary" />
                <p className="text-muted-foreground mb-6 elegant-prose">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground elegant-prose">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center glass-card p-8 sm:p-12 rounded-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-primary">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 elegant-prose">
              Contact us today for a free consultation and let us help you with your legal needs.
            </p>
            <a href="#contact" className="cta-button inline-flex items-center justify-center gap-2">
              Schedule Consultation
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 md:py-32 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle elegant-prose">
              Get in touch with our legal team
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6">Get In Touch</h3>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">Phone</h4>
                    <a href="tel:+27123456789" className="text-muted-foreground hover:text-primary transition-colors">
                      +27 12 345 6789
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">Email</h4>
                    <a href="mailto:info@templateattorneys.co.za" className="text-muted-foreground hover:text-primary transition-colors break-all">
                      info@templateattorneys.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">Office</h4>
                    <p className="text-muted-foreground">
                      123 Legal Street<br />
                      Cape Town, 8001<br />
                      South Africa
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6">Connect With Us</h3>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Facebook className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">Facebook</h4>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      Follow us on Facebook
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">Instagram</h4>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      Follow us on Instagram
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">LinkedIn</h4>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
