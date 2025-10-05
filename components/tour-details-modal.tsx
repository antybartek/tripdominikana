"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, MapPin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface Tour {
  nameKey: string
  descriptionKey: string
  durationKey: string
  priceKey: string
  locationKey: string
  image: string
}

interface TourDetailsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  tour: Tour | null
}

export function TourDetailsModal({ open, onOpenChange, tour }: TourDetailsModalProps) {
  const { t } = useLanguage()

  if (!tour) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{t(tour.nameKey)}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Tour Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img src={tour.image || "/placeholder.svg"} alt={t(tour.nameKey)} className="w-full h-64 object-cover" />
            <div className="absolute top-4 right-4">
              <Badge className="bg-blue-600 text-white">{t(tour.locationKey)}</Badge>
            </div>
          </div>

          {/* Tour Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-foreground">{t("tour.duration")}</p>
                <p className="text-sm">{t(tour.durationKey)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-foreground">{t("tour.price")}</p>
                <p className="text-sm font-semibold text-blue-600">{t(tour.priceKey)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground col-span-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-foreground">{t("tour.location")}</p>
                <p className="text-sm">{t(tour.locationKey)}</p>
              </div>
            </div>
          </div>

          {/* Tour Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">{t("tour.description")}</h3>
            <p className="text-muted-foreground text-pretty">{t(tour.descriptionKey)}</p>
          </div>

          {/* Contact Section */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">{t("tour.book")}</h3>
            <div className="space-y-3">
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open("https://wa.me/48697837215", "_blank")}
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp: +48 697 837 215
              </Button>
              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                onClick={() => window.open("mailto:tripdominikana@outlook.com", "_blank")}
              >
                <Mail className="w-4 h-4 mr-2" />
                tripdominikana@outlook.com
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Uwaga:</strong> {t("tour.note")}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
