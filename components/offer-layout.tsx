"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, MapPin, Star, Calendar, Phone, MessageCircle } from "lucide-react"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"
import { useLanguage } from "@/contexts/language-context"

export function OfferLayout() {
  const { t } = useLanguage()
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <section id="offer" className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">{t("nav.special-offer")}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("offer.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("offer.description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <img
                    src="/dominican-republic-puerto-plata-cable-car-ocean-vi.jpg"
                    alt="Puerto Plata - Góra Isabel"
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <img
                  src="/damajagua-waterfalls-dominican-republic-27-waterfa.jpg"
                  alt="27 Wodospadów Damajagua"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                <img
                  src="/dominican-republic-waterfalls-jumping-natural-pool.jpg"
                  alt="Skoki do wodospadów"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    {t("tour.description")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t("offer.day1.title")}</h4>
                    <p className="text-muted-foreground">
                      {t("offer.day1.description")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t("offer.day2.title")}</h4>
                    <p className="text-muted-foreground">
                      {t("offer.day2.description")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* What's Included */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("offer.includes.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-muted-foreground">{t("offer.transport")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-muted-foreground">{t("offer.guide")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-muted-foreground">{t("offer.isabel")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-muted-foreground">{t("offer.cablecar")}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-muted-foreground">{t("offer.waterfalls")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-muted-foreground">{t("offer.lunch1")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-muted-foreground">{t("offer.lunch2")}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <Card className="sticky top-24">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-foreground">$170</div>
                      <div className="text-sm text-muted-foreground">{t("common.per.person")}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">4.9</span>
                      <span className="text-muted-foreground text-sm">({t("common.reviews")})</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">2 {t("common.days")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{t("common.max.people")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{t("common.available.daily")}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <Button
                      onClick={() => setIsContactModalOpen(true)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
                    >
                      {t("common.book.now")}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full mt-2 border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                      onClick={() => window.open("https://wa.me/48697837215", "_blank")}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp: +48 697 837 215
                    </Button>
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    {t("common.free.cancellation")}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews Preview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t("common.recent.reviews")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{t("reviews.anna.name")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t("reviews.anna.content")}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{t("reviews.marcin.name")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t("reviews.marcin.content")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </>
  )
}
