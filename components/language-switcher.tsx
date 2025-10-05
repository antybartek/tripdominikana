"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "pl", name: "PL", flag: "🇵🇱" },
    { code: "en", name: "EN", flag: "🇺🇸" },
    { code: "es", name: "ES", flag: "🇪🇸" },
  ]

  const currentLang = languages.find((lang) => lang.code === language)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:bg-white/20 rounded-full px-3 py-2 text-sm font-medium flex items-center gap-1"
      >
        <span className="text-xs">{currentLang?.flag}</span>
        <span>{currentLang?.name}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-slate-900/90 backdrop-blur-lg border border-white/20 rounded-lg shadow-xl py-1 min-w-[80px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as any)
                setIsOpen(false)
              }}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-white/20 transition-colors flex items-center gap-2 ${
                language === lang.code ? "text-blue-400" : "text-white/90"
              }`}
            >
              <span className="text-xs">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
