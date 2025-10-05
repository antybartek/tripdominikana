"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Mail, MapPin, MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Trip Dominikana" width={40} height={40} className="rounded-full" />
              <h3 className="text-2xl font-bold">{t("footer.company.name")}</h3>
            </div>
            <p className="text-white/80 text-pretty">
              {t("footer.company.tagline")}
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2" asChild>
                <a href="https://facebook.com/tripdominikanapl" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2" asChild>
                <a href="https://instagram.com/tripdominikana" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2" asChild>
                <a href="https://tiktok.com/@tripdominikana" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t("footer.quicklinks")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#tours" className="text-white/80 hover:text-white transition-colors">
                  {t("footer.popular.tours")}
                </a>
              </li>
              <li>
                <a href="#attractions" className="text-white/80 hover:text-white transition-colors">
                  {t("footer.attractions")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  {t("footer.services")}
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-white/80 hover:text-white transition-colors">
                  {t("footer.why.us")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t("footer.contact")}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-blue-500" />
                <a
                  href="https://wa.me/48697837215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +48 697 837 215
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="text-white/80">tripdominikana@outlook.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/80">Puerto Plata, Dominikana</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60 text-sm">© 2025 {t("footer.company.name")}. {t("footer.rights")}.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
