"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const { t } = useLanguage()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">{t("footer.contact")}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <a
              href="https://wa.me/48697837215"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-accent transition-colors group"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="text-lg font-semibold">+48 697 837 215</p>
              </div>
            </a>

            <a
              href="mailto:tripdominikana@outlook.com"
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-accent transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-lg font-semibold break-all">tripdominikana@outlook.com</p>
              </div>
            </a>
          </div>

          <Button onClick={() => onOpenChange(false)} className="w-full" variant="outline">
            {t("hero.form.close") || "Zamknij"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
