"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { ContactModal } from "@/components/contact-modal"
import Image from "next/image"

export function LiquidGlassNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isInHeroSection, setIsInHeroSection] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  // Animation flag for mobile menu appearance
  const [menuAnimateIn, setMenuAnimateIn] = useState(false)
  const { t, setLanguage, language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      setIsScrolled(scrollY > 50)
      // Check if we're still in the hero section (roughly first screen)
      const isInHero = scrollY < windowHeight * 0.8
      setIsInHeroSection(isInHero)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock scroll when mobile menu modal is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Trigger fade/scale-in on menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      setMenuAnimateIn(false)
      const id = requestAnimationFrame(() => setMenuAnimateIn(true))
      return () => cancelAnimationFrame(id)
    } else {
      setMenuAnimateIn(false)
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: t("nav.about"), href: "#why-us" },
    { name: t("nav.packages"), href: "#tours" },
    { name: t("nav.attractions"), href: "#attractions" },
    { name: t("nav.special-offer"), href: "#offer" },
    { name: t("nav.contact"), href: "#services" },
  ]

  return (
    <>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`transition-all duration-300 rounded-full px-6 py-3 mx-auto w-full`}
          style={{
            // When mobile menu is open, make the nav opaque so the full-screen overlay
            // doesn't create a visible square under the rounded nav on mobile.
            backgroundColor: (isMobileMenuOpen || isScrolled)
              ? 'rgba(15, 23, 42, 0.88)'
              : (isInHeroSection
                  ? 'color-mix(in oklab, oklch(0.78 0.03 261.13) 15%, transparent)'
                  : 'rgb(0 18 62 / 60%)'),
            backdropFilter: isMobileMenuOpen ? 'none' : 'blur(16px)', // Disable blur when menu is open
            border: isInHeroSection
              ? '1px solid rgba(255, 255, 255, 0.08)'
              : '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.2)' : '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image 
                src="/logo.png" 
                alt="Trip Dominikana" 
                width={70} 
                height={70} 
                className="rounded-full md:w-[70px] md:h-[70px] w-[50px] h-[50px]" 
              />
            </div>

            <div className="flex items-center justify-center flex-1 mx-8">
              <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <LanguageSwitcher />
              <Button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-full text-sm shadow-lg"
              >
                {t("nav.quote")}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:bg-white/20 rounded-full"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay - Outside nav wrapper */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] md:hidden" onClick={() => setIsMobileMenuOpen(false)} style={{ pointerEvents: 'auto' }}>
          {/* Backdrop (visible, no blur) */}
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ease-out ${menuAnimateIn ? 'opacity-100' : 'opacity-0'}`}
          />
          {/* Modal Panel */}
          <div className={`absolute top-4 left-4 right-4 z-[201] max-w-7xl mx-auto rounded-3xl border border-white/20 shadow-2xl overflow-hidden transform transition-all duration-300 ease-out ${menuAnimateIn ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}
               style={{ background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(10px)', pointerEvents: 'auto' }}
               onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
                    <span className="text-white text-sm">Menu</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X size={18} />
                  </Button>
                </div>
                <div className="px-4 pb-4">
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-white px-4 py-3 rounded-xl text-base font-medium hover:bg-white/10 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        aria-label="Polski"
                        onClick={() => { setLanguage('pl'); setIsMobileMenuOpen(false) }}
                        className={`px-3 py-2 rounded-full text-sm font-medium ${language==='pl' ? 'bg-white text-slate-900' : 'bg-white/10 text-white hover:bg-white/20'}`}
                      >PL</button>
                      <button
                        aria-label="English"
                        onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false) }}
                        className={`px-3 py-2 rounded-full text-sm font-medium ${language==='en' ? 'bg-white text-slate-900' : 'bg-white/10 text-white hover:bg-white/20'}`}
                      >EN</button>
                      <button
                        aria-label="Español"
                        onClick={() => { setLanguage('es'); setIsMobileMenuOpen(false) }}
                        className={`px-3 py-2 rounded-full text-sm font-medium ${language==='es' ? 'bg-white text-slate-900' : 'bg-white/10 text-white hover:bg-white/20'}`}
                      >ES</button>
                    </div>
                    <Button
                      onClick={() => {
                        setIsContactModalOpen(true)
                        setIsMobileMenuOpen(false)
                      }}
                      className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-full text-sm shadow-lg"
                    >
                      {t("nav.quote")}
                    </Button>
                  </div>
                </div>
              </div>
        </div>
      )}

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </>
  )
}
