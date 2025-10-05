"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Waves, Mountain, Ship, Camera } from "lucide-react"
import { useState } from "react"
import { ContactModal } from "./contact-modal"
import { useLanguage } from "@/contexts/language-context"

export function AttractionsSection() {
  const { t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const attractions = [
    {
      icon: Waves,
      titleKey: "attractions.atv.title",
      descriptionKey: "attractions.atv.description",
      image: "/atv-quad-bikes-dominican-republic-beach-jungle-adv.jpg",
    },
    {
      icon: Mountain,
      titleKey: "attractions.waterfalls.title",
      descriptionKey: "attractions.waterfalls.description",
      image: "/dominican-republic-waterfalls-jumping-natural-pool.jpg",
    },
    {
      icon: Ship,
      titleKey: "attractions.catamaran.title",
      descriptionKey: "attractions.catamaran.description",
      image: "/catamaran-sailing-dominican-republic-crystal-clear.jpg",
    },
    {
      icon: Camera,
      titleKey: "attractions.local.title",
      descriptionKey: "attractions.local.description",
      image: "/dominican-republic-beaches-playa-rincon-zipline-is.jpg",
    },
  ]

  return (
    <>
      <section id="attractions" className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{t("attractions.title") || "Our Attractions"}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {t("attractions.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {attractions.map((attraction, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={attraction.image || "/placeholder.svg"}
                    alt={t(attraction.titleKey)}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <attraction.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {t(attraction.titleKey)}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-pretty leading-relaxed">{t(attraction.descriptionKey)}</p>

                  <Button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
                    {t("common.learn.more")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
