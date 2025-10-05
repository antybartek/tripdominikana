"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign } from "lucide-react"
import { useState } from "react"
import { TourDetailsModal } from "@/components/tour-details-modal"
import { ContactModal } from "@/components/contact-modal"

import { useLanguage } from "@/contexts/language-context"

export function ToursSection() {
  const { t } = useLanguage()
  const [selectedTour, setSelectedTour] = useState<any>(null)
  const [isTourModalOpen, setIsTourModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const tours = [
    {
      nameKey: "tours.isabel.name",
      shortDescriptionKey: "tours.isabel.short",
      descriptionKey: "tours.isabel.description",
      durationKey: "tours.isabel.duration",
      priceKey: "tours.isabel.price",
      locationKey: "tours.isabel.location",
      image: "/dominican-republic-puerto-plata-cable-car-ocean-vi.jpg",
    },
    {
      nameKey: "tours.beaches.name",
      shortDescriptionKey: "tours.beaches.short",
      descriptionKey: "tours.beaches.description",
      durationKey: "tours.beaches.duration",
      priceKey: "tours.beaches.price",
      locationKey: "tours.beaches.location",
      image: "/dorada.jpg",
    },
    {
      nameKey: "tours.waterfalls.name",
      shortDescriptionKey: "tours.waterfalls.short",
      descriptionKey: "tours.waterfalls.description",
      durationKey: "tours.waterfalls.duration",
      priceKey: "tours.waterfalls.price",
      locationKey: "tours.waterfalls.location",
      image: "/damajagua-waterfalls-dominican-republic-27-waterfa.jpg",
    },
    {
      nameKey: "tours.catamaran.name",
      shortDescriptionKey: "tours.catamaran.short",
      descriptionKey: "tours.catamaran.description",
      durationKey: "tours.catamaran.duration",
      priceKey: "tours.catamaran.price",
      locationKey: "tours.catamaran.location",
      image: "/catamaran-sailing-dominican-republic-crystal-clear.jpg",
    },
    {
      nameKey: "tours.cayo.name",
      shortDescriptionKey: "tours.cayo.short",
      descriptionKey: "tours.cayo.description",
      durationKey: "tours.cayo.duration",
      priceKey: "tours.cayo.price",
      locationKey: "tours.cayo.location",
      image: "/cajo.avif",
    },
    {
      nameKey: "tours.river.name",
      shortDescriptionKey: "tours.river.short",
      descriptionKey: "tours.river.description",
      durationKey: "tours.river.duration",
      priceKey: "tours.river.price",
      locationKey: "tours.river.location",
      image: "/sanador.jpeg",
    },
    {
      nameKey: "tours.laguna.name",
      shortDescriptionKey: "tours.laguna.short",
      descriptionKey: "tours.laguna.description",
      durationKey: "tours.laguna.duration",
      priceKey: "tours.laguna.price",
      locationKey: "tours.laguna.location",
      image: "/dudu.jpg",
    },
    {
      nameKey: "tours.ocean.name",
      shortDescriptionKey: "tours.ocean.short",
      descriptionKey: "tours.ocean.description",
      durationKey: "tours.ocean.duration",
      priceKey: "tours.ocean.price",
      locationKey: "tours.ocean.location",
      image: "/ow.jpg",
    },
    {
      nameKey: "tours.historic.name",
      shortDescriptionKey: "tours.historic.short",
      descriptionKey: "tours.historic.description",
      durationKey: "tours.historic.duration",
      priceKey: "tours.historic.price",
      locationKey: "tours.historic.location",
      image: "/pink.avif",
    },
  ]

  return (
    <>
      <section id="tours" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{t("tours.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {t("tours.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image || "/placeholder.svg"}
                    alt={t(tour.nameKey)}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-white">{t(tour.locationKey)}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {t(tour.nameKey)}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-pretty">{t(tour.shortDescriptionKey)}</p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {t(tour.durationKey)}
                    </div>
                    <div className="flex items-center gap-1 text-primary font-semibold">
                      <DollarSign className="w-4 h-4" />
                      {t(tour.priceKey)}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => {
                      setSelectedTour(tour)
                      setIsTourModalOpen(true)
                    }}
                  >
                    {t("tour.moreinfo")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              {t("tours.custom.message")}
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full bg-transparent"
              onClick={() => setIsContactModalOpen(true)}
            >
              {t("nav.contact")}
            </Button>
          </div>
        </div>
      </section>

      <TourDetailsModal open={isTourModalOpen} onOpenChange={setIsTourModalOpen} tour={selectedTour} />
      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </>
  )
}
