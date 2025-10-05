"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Home, MapPin } from "lucide-react"
import { useState } from "react"
import { ContactModal } from "./contact-modal"
import { useLanguage } from "@/contexts/language-context"

export function ServicesSection() {
  const { t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const services = [
    {
      icon: Car,
      titleKey: "services.transport.title",
      descriptionKey: "services.transport.desc",
      featuresKey: "services.transport.features",
      features: [
        "services.transport.feature1",
        "services.transport.feature2",
        "services.transport.feature3",
        "services.transport.feature4",
      ],
    },
    {
      icon: Home,
      titleKey: "services.accommodation.title",
      descriptionKey: "services.accommodation.desc",
      featuresKey: "services.accommodation.features",
      features: [
        "services.accommodation.feature1",
        "services.accommodation.feature2",
        "services.accommodation.feature3",
        "services.accommodation.feature4",
      ],
    },
    {
      icon: MapPin,
      titleKey: "services.planning.title",
      descriptionKey: "services.planning.desc",
      featuresKey: "services.planning.features",
      features: [
        "services.planning.feature1",
        "services.planning.feature2",
        "services.planning.feature3",
        "services.planning.feature4",
      ],
    },
  ]

  return (
    <>
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{t("services.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {t("services.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-blue-600 transition-colors">
                    {t(service.titleKey)}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-pretty leading-relaxed">{t(service.descriptionKey)}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-muted-foreground flex items-center justify-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {t(feature)}
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => setIsModalOpen(true)}
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                  >
                    {t("common.learn.more")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4 text-white">{t("services.cta.title")}</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto text-pretty">
              {t("services.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-white/90 px-8 py-4 rounded-full"
              >
                {t("services.cta.write")}
              </Button>
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full bg-transparent"
              >
                {t("services.cta.call")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
