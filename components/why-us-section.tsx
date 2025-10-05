"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Shield, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"
import { ContactModal } from "./contact-modal"

export function WhyUsSection() {
  const { t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const features = [
    {
      icon: MapPin,
      title: t("whyus.experience.title"),
      description: t("whyus.experience.desc"),
    },
    {
      icon: Users,
      title: t("whyus.guides.title"),
      description: t("whyus.guides.desc"),
    },
    {
      icon: Shield,
      title: t("whyus.safety.title"),
      description: t("whyus.safety.desc"),
    },
    {
      icon: Star,
      title: t("whyus.price.title"),
      description: t("whyus.price.desc"),
    },
  ]

  return (
    <>
      <section id="why-us" className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{t("whyus.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t("hero.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Photo */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full"
              onClick={() => setIsModalOpen(true)}
            >
              {t("nav.contact")}
            </Button>
          </div>
        </div>
      </section>

      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
