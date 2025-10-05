"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Mail, Phone, Instagram, Facebook } from "lucide-react"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-28 md:pt-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-slate-900"
        style={{
          backgroundImage: `url('/dominican-republic-puerto-plata-cable-car-ocean-vi.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
          >
            {t("hero.title")}
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 mb-8 text-pretty max-w-3xl mx-auto"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
          >
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-xl"
              onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("nav.packages")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full text-lg bg-slate-900/40"
              onClick={() => document.getElementById('attractions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("hero.cta")}
            </Button>
          </div>

          <div className="max-w-2xl mx-auto backdrop-blur-lg bg-slate-900/60 border border-white/30 rounded-2xl p-8">
            <h3 className="text-white font-semibold mb-6 text-xl">{t("footer.contact")}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/48697837215"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all group border border-white/20"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/70">WhatsApp</p>
                  <p className="text-sm font-semibold text-white">+48 697 837 215</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:tripdominikana@outlook.com"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all group border border-white/20"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/70">Email</p>
                  <p className="text-sm font-semibold text-white break-all">tripdominikana@outlook.com</p>
                </div>
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-white/20">
              <a
                href="https://instagram.com/tripdominikana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/20"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://facebook.com/tripdominikanapl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/20"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://tiktok.com/@tripdominikana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/20"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
