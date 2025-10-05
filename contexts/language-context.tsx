"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Language = "pl" | "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pl: {
    // Site metadata
    "site.title": "Trip Dominikana - Twoi eksperci od Dominikany",
    "site.description": "Odkryj najpiękniejsze miejsca Republiki Dominikańskiej z naszymi lokalnymi przewodnikami. Niezapomniane przygody czekają!",
    // Navigation
    "nav.packages": "Wycieczki",
    "nav.about": "O nas",
    "nav.reviews": "Opinie",
    "nav.contact": "Kontakt",
    "nav.quote": "Wycena",
    "nav.attractions": "Atrakcje",
    "nav.special-offer": "Oferta Specjalna",

    // Hero Section
    "hero.title": "Twoi eksperci od Dominikany",
    "hero.subtitle":
      "Odkryj najpiękniejsze miejsca Republiki Dominikańskiej z naszymi lokalnymi przewodnikami. Niezapomniane przygody czekają!",
    "hero.cta": "Zobacz atrakcje",
    "hero.form.name": "Imię",
    "hero.form.email": "Email",
    "hero.form.phone": "Telefon",
    "hero.form.message": "Wiadomość",
    "hero.form.send": "Wyślij zapytanie",
    "hero.form.close": "Zamknij",

    // Why Us Section
    "whyus.title": "Dlaczego wybierają nas?",
    "whyus.experience.title": "Lata doświadczenia",
    "whyus.experience.desc": "Znamy Dominikanę jak własną kieszeń",
    "whyus.guides.title": "Lokalni przewodnicy",
    "whyus.guides.desc": "Autentyczne doświadczenia z mieszkańcami",
    "whyus.safety.title": "Bezpieczeństwo",
    "whyus.safety.desc": "Twoje bezpieczeństwo to nasz priorytet",
    "whyus.price.title": "Najlepsze ceny",
    "whyus.price.desc": "Gwarantujemy konkurencyjne stawki",

    // Tours Section
    "tours.title": "Popularne wycieczki",
    "tours.damajagua.title": "Damajagua Waterfalls",
    "tours.damajagua.desc": "27 natural pools and waterfalls",
    "tours.damajagua.price": "from $89",
    "tours.saona.title": "Saona Island",
    "tours.saona.desc": "Paradise island with white beaches",
    "tours.saona.price": "from $79",
    "tours.catamarano.title": "Catamaran Cruise",
    "tours.catamarano.desc": "Relax on crystal-clear waters",
    "tours.catamarano.price": "from $99",
    "tours.book": "Book",
    "tours.description": "Odkryj najpiękniejsze miejsca Republiki Dominikańskiej z naszymi sprawdzonymi wycieczkami",

    // Szczegółowe wycieczki
    "tours.isabel.name": "Puerto Plata – Wycieczka po Mieście z Górą Isabel i Lunchem",
    "tours.isabel.short": "Odkryj uroki Puerto Plata! Podziwiaj widoki z Góry Isabel, poznaj kulturę i historię miasta.",
    "tours.isabel.description": "Odkryj uroki Puerto Plata podczas fascynującej wycieczki po mieście! Podziwiaj zapierające dech w piersiach widoki z Góry Isabel, poznaj lokalną kulturę i historię, spacerując po urokliwych uliczkach. Wycieczka obejmuje pyszny lunch, który pozwoli Ci spróbować tradycyjnych dominikańskich smaków. Idealna propozycja dla tych, którzy chcą połączyć przygodę, relaks i odkrywanie piękna Puerto Plata!",
    "tours.isabel.duration": "4-5 godzin",
    "tours.isabel.price": "od 100 USD/os.",
    "tours.isabel.location": "Puerto Plata",

    "tours.beaches.name": "Objazd po wszystkich plażach w Puerto Plata, Sosúa i Cabarete",
    "tours.beaches.short": "Przeżyj niezapomnianą podróż objazdową po najpiękniejszych plażach północnego wybrzeża Dominikany!",
    "tours.beaches.description": "Przeżyj niezapomnianą podróż objazdową po najpiękniejszych plażach północnego wybrzeża Dominikany! Wycieczka zaczyna się w Puerto Plata, gdzie odwiedzić możesz złote piaski Playa Dorada i Playa Cofresi, idealne na relaksujący spacer i kąpiele w turkusowej wodzie. Następnie kierujemy się do Sosúa, słynącego z krystalicznie czystych zatok – zatrzymaj się na Playa Sosúa (główna plaża z bogatym życiem podwodnym do snorkelingu), Playa Alicia (młoda, malownicza plaża z widokami na klify) oraz Playa Chiquita (mała, intymna zatoka otoczona tropikalną roślinnością). Finał w Cabarete, raju sportów wodnych: podziwiaj Cabarete Beach (doskonała na windsurfing i kiteboarding), Kite Beach (spektakularne widoki na latawce surferów) i Playa Encuentro (raj dla miłośników fal i surfingu). Po drodze degustacja lokalnych owoców morza i czas na zdjęcia. Idealna dla miłośników plaż i przygód – odkryj różnorodność karaibskich rajów w jednym dniu! Lista plaż na trasie: Puerto Plata: Playa Dorada, Playa Cofresi; Sosúa: Playa Sosúa, Playa Alicia, Playa Chiquita; Cabarete: Cabarete Beach, Kite Beach, Playa Encuentro",
    "tours.beaches.duration": "6-8 godzin",
    "tours.beaches.price": "od 100 USD/os.",
    "tours.beaches.location": "Puerto Plata, Sosúa, Cabarete",

    "tours.waterfalls.name": "Puerto Plata – Przygoda z 27 Wodospadami i Tradycyjnym Lunchem",
    "tours.waterfalls.short": "Przeżyj ekscytującą przygodę w sercu natury! Skacz, zjeżdżaj i pływaj w 27 wodospadach Damajagua.",
    "tours.waterfalls.description": "Przeżyj ekscytującą przygodę w sercu natury Puerto Plata! Wycieczka do 27 wodospadów Damajagua to prawdziwa gratka dla miłośników adrenaliny i piękna przyrody. Skacz, zjeżdżaj i pływaj w krystalicznie czystych, naturalnych basenach utworzonych przez kaskady wodospadów, otoczonych bujną tropikalną dżunglą. Wycieczka obejmuje profesjonalnych przewodników, którzy zapewnią bezpieczeństwo i opowiedzą o unikalnym ekosystemie regionu. Po pełnej wrażeń przygodzie zrelaksuj się przy tradycyjnym dominikańskim lunchu, który zachwyci Cię smakami lokalnej kuchni, takimi jak ryż z fasolą, pieczone mięso i świeże tropikalne owoce. To idealny sposób na połączenie aktywności, natury i kultury w jednym dniu!",
    "tours.waterfalls.duration": "4-6 godzin",
    "tours.waterfalls.price": "od 90 USD/os.",
    "tours.waterfalls.location": "Puerto Plata",

    "tours.catamaran.name": "Catamaran z Playa Dorada do Sosúa z Atrakcjami",
    "tours.catamaran.short": "Wyrusz w niezapomnianą morską przygodę katamaranem z Playa Dorada do Sosúa!",
    "tours.catamaran.description": "Wyrusz w niezapomnianą morską przygodę katamaranem z malowniczej Playa Dorada do urokliwej Sosúa! Podziwiaj turkusowe wody Karaibów, relaksując się na pokładzie podczas rejsu wzdłuż wybrzeża. Wycieczka obejmuje przystanki na snorkeling w krystalicznych zatokach Sosúa, gdzie odkryjesz kolorowy świat raf koralowych i tropikalnych ryb. Ciesz się orzeźwiającymi napojami i przekąskami na pokładzie, a także możliwością kąpieli w oceanie. Po dotarciu do Sosúa, zwiedzisz piękną Playa Sosúa, idealną na relaks i zdjęcia. Wycieczka oferuje także animacje na pokładzie, muzykę na żywo i niezapomnianą atmosferę karaibskiej fiesty. To idealny wybór dla tych, którzy pragną połączyć morską przygodę, relaks na plaży i odkrywanie uroków Dominikany!",
    "tours.catamaran.duration": "5-7 godzin",
    "tours.catamaran.price": "od 80 USD/os.",
    "tours.catamaran.location": "Puerto Plata, Sosúa",

    "tours.cayo.name": "Cayo Arena – Rajska Wyspa i Wycieczka po Namorzynach",
    "tours.cayo.short": "Odkryj raj na ziemi na Cayo Arena! Snorkeling w turkusowych wodach i eksploracja namorzyn.",
    "tours.cayo.description": "Odkryj raj na ziemi podczas wycieczki na Cayo Arena, znaną również jako Paradise Island – małą, koralową wysepkę otoczoną turkusowymi wodami i białym piaskiem. Wyrusz łodzią z Puerto Plata, by podziwiać zapierające dech w piersiach widoki i zanurzyć się w krystalicznie czystych wodach idealnych do snorkelingu, gdzie zobaczysz kolorowe rafy koralowe i tropikalne ryby. Wycieczka obejmuje również eksplorację fascynujących namorzyn w Parku Narodowym Monte Cristi, gdzie popłyniesz wśród gęstych lasów mangrowych, poznając unikalny ekosystem i obserwując dziką przyrodę, taką jak ptaki i kraby. Po przygodzie zrelaksuj się na Cayo Arena, delektując się lekkimi przekąskami i napojami. To idealna wycieczka dla miłośników natury, tropikalnych krajobrazów i niezapomnianych wrażeń!",
    "tours.cayo.duration": "6-8 godzin",
    "tours.cayo.price": "od 90 USD/os.",
    "tours.cayo.location": "Puerto Plata, Cayo Arena",

    "tours.river.name": "Wycieczka po Rzece Sonador z Puerto Plata",
    "tours.river.short": "Wybierz się w ekscytującą podróż po malowniczej rzece Sonador przez bujną dżunglę!",
    "tours.river.description": "Wybierz się w ekscytującą podróż po malowniczej rzece Sonador (znanej również jako Río Yásica), jednej z najpiękniejszych rzek północnego Dominikany! Wycieczka zaczyna się w Puerto Plata i prowadzi przez bujną dżunglę, gdzie popłyniesz tratwą lub kajakiem w dół rzeki, mijając kaskady wodospadów, tropikalne lasy i ukryte jaskinie. Ciesz się aktywnościami takimi jak pływanie w naturalnych basenach, skoki do krystalicznie czystych wód oraz piknik nad brzegiem z tradycyjnymi dominikańskimi specjałami. Profesjonalni przewodnicy opowiedzą o lokalnej florze i faunie, w tym o rzadkich ptakach i egzotycznych roślinach. To idealna przygoda dla miłośników natury i ekoturystyki – połączenie relaksu, adrenaliny i odkrywania ukrytych skarbów Karaibów w sercu Puerto Plata!",
    "tours.river.duration": "5-7 godzin",
    "tours.river.price": "od 90 USD/os.",
    "tours.river.location": "Puerto Plata",

    "tours.laguna.name": "Puerto Plata – Laguna Dudu i Wycieczka do Playa Grande",
    "tours.laguna.short": "Przeżyj niezapomnianą przygodę w Lagunie Dudu i na Playa Grande!",
    "tours.laguna.description": "Przeżyj niezapomnianą przygodę, odkrywając dwa klejnoty Dominikany – Lagunę Dudu i Playa Grande! Wycieczka rozpoczyna się w Puerto Plata i prowadzi do zapierającej dech w piersiach Laguny Dudu, kompleksu turkusowych jezior krasowych otoczonych bujną dżunglą. Skorzystaj z możliwości pływania, skoków do wody z platform lub eksploracji podwodnych jaskiń (dla odważnych!). Następnie udaj się na Playa Grande, jedną z najpiękniejszych plaż na północnym wybrzeżu, słynącą z złotego piasku i palm kokosowych. Ciesz się relaksem na plaży, kąpielą w ciepłych wodach Karaibów i pysznym lunchem z lokalnych specjałów, takich jak świeże owoce morza i tropikalne koktajle. To idealne połączenie przygody w naturze i błogiego wypoczynku na rajskiej plaży – must-do dla każdego miłośnika Dominikany!",
    "tours.laguna.duration": "6-8 godzin",
    "tours.laguna.price": "od 110 USD/os.",
    "tours.laguna.location": "Puerto Plata",

    "tours.ocean.name": "Puerto Plata – Karnet Dzienny do Ocean World Adventure Park",
    "tours.ocean.short": "Przeżyj dzień pełen wrażeń w Ocean World Adventure Park!",
    "tours.ocean.description": "Przeżyj dzień pełen wrażeń w Ocean World Adventure Park, jednym z najpopularniejszych parków rozrywki na Dominikanie! Ten karnet dzienny w Puerto Plata otwiera drzwi do niezapomnianych atrakcji dla całej rodziny. Pływaj z delfinami, obserwuj pokazy lwów morskich, nurkuj z rurką w tropikalnej lagunie pełnej kolorowych ryb lub zrelaksuj się na prywatnej plaży parku. W parku znajdziesz także interaktywne spotkania z egzotycznymi ptakami, rekinami i płaszczkami. W cenę wliczony jest pyszny lunch w jednej z parkowych restauracji, serwujący dominikańskie przysmaki i międzynarodowe dania. To idealna propozycja dla miłośników zwierząt, przygód i rodzinnego wypoczynku w karaibskim stylu!",
    "tours.ocean.duration": "6-8 godzin",
    "tours.ocean.price": "od 110 USD/os.",
    "tours.ocean.location": "Puerto Plata",

    "tours.historic.name": "Puerto Plata – Wycieczka po Historycznym Centrum Miasta",
    "tours.historic.short": "Zanurz się w bogatej historii i kulturze Puerto Plata!",
    "tours.historic.description": "Zanurz się w bogatej historii i kulturze Puerto Plata podczas fascynującej wycieczki po historycznym centrum miasta! Spaceruj po urokliwych, brukowanych uliczkach, podziwiając kolonialną architekturę i tętniące życiem place. Odwiedzisz kluczowe zabytki, takie jak Fort San Felipe, najstarsza twierdza w Amerykach, oraz Katedrę San Felipe, serce duchowe miasta. Przewodnik opowie o przeszłości Puerto Plata, od czasów Taínów po erę kolonialną. Wycieczka obejmuje także wizytę w Muzeum Bursztynu, gdzie zobaczysz unikalne okazy dominikańskiego bursztynu. Na zakończenie skosztuj lokalnych smakołyków w jednej z tradycyjnych kawiarni. To idealna propozycja dla miłośników historii, kultury i odkrywania autentycznego ducha Dominikany!",
    "tours.historic.duration": "4-5 godzin",
    "tours.historic.price": "od 80 USD/os.",
    "tours.historic.location": "Puerto Plata",

    // Services Section
    "services.title": "Inne usługi",
    "services.transport.title": "Transport",
    "services.transport.desc": "Bezpieczny transport z lotniska i hotelu",
    "services.accommodation.title": "Noclegi",
    "services.accommodation.desc": "Pomoc w znalezieniu idealnego miejsca",
    "services.planning.title": "Planowanie",
    "services.planning.desc": "Indywidualne plany podróży",
    // Services features
    "services.transport.feature1": "Odbiór z lotniska",
    "services.transport.feature2": "Prywatne transfery",
    "services.transport.feature3": "Komfortowe pojazdy",
    "services.transport.feature4": "Doświadczeni kierowcy",
    "services.accommodation.feature1": "Hotele i resorty",
    "services.accommodation.feature2": "Airbnb i apartamenty",
    "services.accommodation.feature3": "Eco-lodges",
    "services.accommodation.feature4": "Rabaty dla klientów",
    "services.planning.feature1": "Pink & Umbrella Street",
    "services.planning.feature2": "Los Haitises Park",
    "services.planning.feature3": "Faro a Colón",
    "services.planning.feature4": "Ocean World",
    "services.support.title": "Wsparcie 24/7",
    "services.support.desc": "Jesteśmy dostępni przez całą dobę",

    // Footer
    "footer.contact": "Kontakt",
    "footer.phone": "Telefon",
    "footer.email": "Email",
    "footer.address": "Adres",
    "footer.social": "Śledź nas",
    "footer.rights": "Wszystkie prawa zastrzeżone",

    // Contact Modal
    "modal.title": "Napisz do nas",
    "modal.subtitle": "Wybierz najwygodniejszy sposób kontaktu",
    "modal.social": "Lub znajdź nas w social media",

    // Tour Modal
    "tour.moreinfo": "Więcej informacji",
    "tour.duration": "Czas trwania",
    "tour.price": "Cena",
    "tour.location": "Lokalizacja",
    "tour.description": "Opis wycieczki",
    "tour.book": "Zarezerwuj lub zapytaj o szczegóły",
    "tour.note":
      "Wszystkie ceny są orientacyjne i mogą się różnić w zależności od sezonu i liczby osób. Skontaktuj się z nami, aby uzyskać dokładną wycenę!",

    // Custom Tours CTA
    "tours.custom.message": "Szukasz wycieczki szytej na miarę? Napisz do nas – zorganizujemy coś specjalnego tylko dla Ciebie!",

    // Attractions Section
    "attractions.title": "Nasze atrakcje",
    "attractions.description": "Od adrenaliny po relaks – znajdź idealną aktywność dla siebie",
    "attractions.atv.title": "Quady, Buggy i ATV",
    "attractions.atv.description": "Zastrzyk adrenaliny na bezdrożach Puerto Plata! Przejazdy quadami po plażach i leśnych ścieżkach, buggy do ukrytych zatoczek. Bezpieczne, prowadzone wycieczki – idealne dla grup.",
    "attractions.waterfalls.title": "Wodospady",
    "attractions.waterfalls.description": "Skok do kaskad w Damajagua (aż 27 poziomów!) lub odkrywanie ukrytych wodospadów w górach Isabel de Torres wokół Puerto Plata. Orzeźwiająco i fotogenicznie – z piknikiem w pakiecie.",
    "attractions.catamaran.title": "Katamaran",
    "attractions.catamaran.description": "Rejs katamaranem wzdłuż północnego wybrzeża Dominikany z Puerto Plata. Snorkeling w krystalicznych zatokach Sosúa, czas na plaży i napoje – totalny relaks.",
    "attractions.local.title": "Inne lokalne atrakcje",
    "attractions.local.description": "Plaże jak Playa Dorada i Cofresi w Puerto Plata; kolejka linowa na Górę Isabel; Ocean World Adventure Park oraz historyczne centrum miasta.",

    // Common UI
    "common.learn.more": "Dowiedz się więcej",
    // existing nav keys cover 'Oferta Specjalna' via nav.special-offer
    "common.per.person": "za osobę",
    "common.reviews": "opinie",
    "common.days": "dni",
    "common.max.people": "Maks. 12 osób",
    "common.available.daily": "Dostępne codziennie",
    "common.book.now": "Rezerwuj teraz",
    "common.free.cancellation": "Bezpłatne anulowanie do 24h przed wyjazdem",
    "common.recent.reviews": "Ostatnie opinie",

    // Reviews
    "reviews.anna.name": "Anna K.",
    "reviews.anna.content": "Niesamowite doświadczenie! Góra Isabel była magiczna, a wodospady Damajagua to prawdziwa przygoda. Świetna organizacja!",
    "reviews.marcin.name": "Marcin W.",
    "reviews.marcin.content": "Świetna wycieczka! Puerto Plata to piękne miasto, a wodospady to niesamowita przygoda. Gorąco polecam!",

    // Offer Section (Special Offer)
    "offer.title": "Wycieczka po Mieście z Górą Isabel i lunchem + 27 Wodospadów z tradycyjnym lunchem",
    "offer.description": "Poznaj uroki Puerto Plata w dwa dni. Pierwszego dnia zwiedź miasto z Górą Isabel, a drugiego przeżyj przygodę na 27 wodospadach Damajagua.",
    "offer.day1.title": "Dzień 1: Wycieczka po Mieście z Górą Isabel i lunchem",
    "offer.day1.description": "Odkryj uroki Puerto Plata podczas fascynującej wycieczki po mieście! Podziwiaj widoki z Góry Isabel, poznaj lokalną kulturę i historię. W cenie pyszny lunch z dominikańskimi smakami.",
    "offer.day2.title": "Dzień 2: 27 Wodospadów z tradycyjnym lunchem",
    "offer.day2.description": "Przygoda w sercu natury! Skoki, zjazdy i pływanie w naturalnych basenach Damajagua. Po aktywnościach – tradycyjny dominikański lunch.",
    "offer.includes.title": "W cenie",
    "offer.transport": "Transport hotelowy",
    "offer.guide": "Lokalny przewodnik",
    "offer.isabel": "Wejście na Górę Isabel",
    "offer.cablecar": "Kolejka linowa",
    "offer.waterfalls": "Wejście na wodospady Damajagua",
    "offer.lunch1": "Lunch w dniu pierwszym",
    "offer.lunch2": "Lunch w dniu drugim",

    // Services additional
    "services.description": "Kompleksowe wsparcie logistyczne – jesteśmy Twoim concierge na miejscu",
    "services.cta.title": "Potrzebujesz pomocy w organizacji?",
    "services.cta.description": "Skontaktuj się z nami – zaplanujemy Twój idealny pobyt w Dominikanie od A do Z",
    "services.cta.write": "Napisz do nas",
    "services.cta.call": "Zadzwoń teraz",

    // Footer additions
    "footer.company.name": "tripdominikana.pl",
    "footer.company.tagline": "Twoi lokalni eksperci z Puerto Plata. Organizujemy niezapomniane wycieczki po najpiękniejszych zakątkach Dominikany.",
    "footer.quicklinks": "Szybkie linki",
    "footer.popular.tours": "Popularne wycieczki",
    "footer.attractions": "Atrakcje",
    "footer.services": "Usługi",
    "footer.why.us": "Dlaczego my?",
  },
  en: {
    // Site metadata
    "site.title": "Trip Dominikana - Your Dominican Republic Experts",
    "site.description": "Discover the most beautiful places in the Dominican Republic with our local guides. Unforgettable adventures await!",
    // Navigation
    "nav.packages": "Tours",
    "nav.about": "About Us",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.quote": "Quote",
    "nav.attractions": "Attractions",
    "nav.special-offer": "Special Offer",

    // Hero Section
    "hero.title": "Your Local Puerto Plata Experts",
    "hero.subtitle":
      "We organize unforgettable tours to the most beautiful corners of the Dominican Republic. Your adventure starts here!",
    "hero.cta": "See Attractions",
    "hero.form.name": "Name",
    "hero.form.email": "Email",
    "hero.form.phone": "Phone",
    "hero.form.message": "Message",
    "hero.form.send": "Send Inquiry",
    "hero.form.close": "Close",

    // Why Us Section
    "whyus.title": "Why Choose Us?",
    "whyus.experience.title": "Years of Experience",
    "whyus.experience.desc": "We know Dominican Republic like the back of our hand",
    "whyus.guides.title": "Local Guides",
    "whyus.guides.desc": "Authentic experiences with locals",
    "whyus.safety.title": "Safety First",
    "whyus.safety.desc": "Your safety is our top priority",
    "whyus.price.title": "Best Prices",
    "whyus.price.desc": "We guarantee competitive rates",

    // Tours Section
    "tours.title": "Our Most Popular Tours",
    "tours.damajagua.title": "Damajagua Waterfalls",
    "tours.damajagua.desc": "27 natural pools and waterfalls",
    "tours.damajagua.price": "from $89",
    "tours.saona.title": "Saona Island",
    "tours.saona.desc": "Paradise island with white beaches",
    "tours.saona.price": "from $79",
    "tours.catamarano.title": "Catamaran Cruise",
    "tours.catamarano.desc": "Relax on crystal clear waters",
    "tours.catamarano.price": "from $99",
    "tours.book": "Book Now",


    // Services Section
    "tours.isabel.name": "Puerto Plata – City Tour with Mount Isabel and Lunch",
    "tours.isabel.short": "Discover the charms of Puerto Plata! Admire views from Mount Isabel, learn about culture and city history.",
    "tours.isabel.description": "Discover the charms of Puerto Plata during a fascinating city tour! Admire breathtaking views from Mount Isabel, learn about local culture and history while strolling through charming streets. The tour includes a delicious lunch featuring traditional Dominican flavors. Perfect for those who want to combine adventure, relaxation and discovering the beauty of Puerto Plata!",
    "tours.isabel.duration": "4-5 hours",
    "tours.isabel.price": "from $100/person",
    "tours.isabel.location": "Puerto Plata",

    "tours.beaches.name": "Beach Tour of Puerto Plata, Sosúa and Cabarete",
    "tours.beaches.short": "Experience an unforgettable journey through the most beautiful beaches of the northern Dominican coast!",
    "tours.beaches.description": "Experience an unforgettable journey through the most beautiful beaches of the northern Dominican coast! The tour starts in Puerto Plata, where you can visit golden sands of Playa Dorada and Playa Cofresi, perfect for relaxing walks and swimming in turquoise water. Then head to Sosúa, famous for its crystal-clear bays – stop at Playa Sosúa (main beach with rich underwater life for snorkeling), Playa Alicia (young, picturesque beach with cliff views) and Playa Chiquita (small, intimate cove surrounded by tropical vegetation). Finale in Cabarete, water sports paradise: admire Cabarete Beach (excellent for windsurfing and kiteboarding), Kite Beach (spectacular views of kitesurfers) and Playa Encuentro (paradise for wave and surfing lovers). Along the way, taste local seafood and time for photos. Ideal for beach and adventure lovers – discover the diversity of Caribbean paradises in one day! Beach list on the route: Puerto Plata: Playa Dorada, Playa Cofresi; Sosúa: Playa Sosúa, Playa Alicia, Playa Chiquita; Cabarete: Cabarete Beach, Kite Beach, Playa Encuentro",
    "tours.beaches.duration": "6-8 hours",
    "tours.beaches.price": "from $100/person",
    "tours.beaches.location": "Puerto Plata, Sosúa, Cabarete",

    "tours.waterfalls.name": "Puerto Plata – 27 Waterfalls Adventure with Traditional Lunch",
    "tours.waterfalls.short": "Experience an exciting adventure in the heart of nature! Jump, slide and swim in 27 Damajagua waterfalls.",
    "tours.waterfalls.description": "Experience an exciting adventure in the heart of Puerto Plata's nature! The trip to 27 Damajagua waterfalls is a real treat for adrenaline lovers and nature enthusiasts. Jump, slide and swim in crystal-clear natural pools formed by cascading waterfalls, surrounded by lush tropical jungle. The tour includes professional guides who ensure safety and tell about the unique ecosystem of the region. After the full adventure, relax with a traditional Dominican lunch that will delight you with local cuisine flavors such as rice with beans, grilled meat and fresh tropical fruits. It's the perfect way to combine activity, nature and culture in one day!",
    "tours.waterfalls.duration": "4-6 hours",
    "tours.waterfalls.price": "from $90/person",
    "tours.waterfalls.location": "Puerto Plata",

    "tours.catamaran.name": "Catamaran from Playa Dorada to Sosúa with Attractions",
    "tours.catamaran.short": "Set off on an unforgettable sea adventure by catamaran from Playa Dorada to Sosúa!",
    "tours.catamaran.description": "Set off on an unforgettable sea adventure by catamaran from scenic Playa Dorada to charming Sosúa! Admire the turquoise waters of the Caribbean, relaxing on deck during a cruise along the coast. The tour includes stops for snorkeling in crystal-clear Sosúa bays, where you'll discover a colorful world of coral reefs and tropical fish. Enjoy refreshing drinks and snacks on board, as well as the opportunity to swim in the ocean. After reaching Sosúa, you'll explore beautiful Playa Sosúa, perfect for relaxation and photos. The tour also offers onboard entertainment, live music and an unforgettable Caribbean fiesta atmosphere. It's the ideal choice for those who want to combine sea adventure, beach relaxation and discovering the charms of the Dominican Republic!",
    "tours.catamaran.duration": "5-7 hours",
    "tours.custom.message": "Looking for a dedicated tour? Write to us and we'll organize something special just for you!",
    "tours.description": "Discover the most beautiful places in the Dominican Republic with our proven tours",

    // Common UI Elements
    "common.learn.more": "Learn More",
    "common.per.person": "per person",
    "common.reviews": "reviews",
    "common.days": "days",
    "common.max.people": "Max. 12 people",
    "common.available.daily": "Available daily",
    "common.book.now": "Book Now",
    "common.free.cancellation": "Free cancellation up to 24h before departure",
    "common.recent.reviews": "Recent Reviews",

    // Review Names and Content
    "reviews.anna.name": "Anna K.",
    "reviews.anna.content": "Amazing experience! Mount Isabel was magical, and the Damajagua waterfalls were a real adventure. Great organization!",
    "reviews.marcin.name": "Marcin W.",
    "reviews.marcin.content": "Excellent tour! Puerto Plata is a beautiful city, and the waterfalls are an incredible adventure. Highly recommend!",

    "tours.cayo.name": "Cayo Arena – Paradise Island and Mangrove Tour",
    "tours.cayo.short": "Discover paradise on earth at Cayo Arena! Snorkeling in turquoise waters and mangrove exploration.",
    "tours.cayo.description": "Discover paradise on earth during a trip to Cayo Arena, also known as Paradise Island – a small coral islet surrounded by turquoise waters and white sand. Depart by boat from Puerto Plata to admire breathtaking views and immerse yourself in crystal-clear waters perfect for snorkeling, where you'll see colorful coral reefs and tropical fish. The tour also includes exploration of fascinating mangroves in Monte Cristi National Park, where you'll sail among dense mangrove forests, learning about the unique ecosystem and observing wildlife such as birds and crabs. After the adventure, relax on Cayo Arena, enjoying light snacks and drinks. It's the perfect tour for nature lovers, tropical landscapes and unforgettable experiences!",
    "tours.cayo.duration": "6-8 hours",
    "tours.cayo.price": "from $90/person",
    "tours.cayo.location": "Puerto Plata, Cayo Arena",

    "tours.river.name": "Sonador River Tour from Puerto Plata",
    "tours.river.short": "Embark on an exciting journey along the scenic Sonador River through lush jungle!",
    "tours.river.description": "Embark on an exciting journey along the scenic Sonador River (also known as Río Yásica), one of the most beautiful rivers in northern Dominican Republic! The tour starts in Puerto Plata and leads through lush jungle, where you'll float down the river by raft or kayak, passing waterfalls, tropical forests and hidden caves. Enjoy activities such as swimming in natural pools, jumping into crystal-clear waters and a picnic on the shore with traditional Dominican specialties. Professional guides will tell you about local flora and fauna, including rare birds and exotic plants. It's the perfect adventure for nature and ecotourism lovers – combining relaxation, adrenaline and discovering hidden Caribbean treasures in the heart of Puerto Plata!",
    "tours.river.duration": "5-7 hours",
    "tours.river.price": "from $90/person",
    "tours.river.location": "Puerto Plata",

    "tours.laguna.name": "Puerto Plata – Laguna Dudu and Playa Grande Tour",
    "tours.laguna.short": "Experience an unforgettable adventure at Laguna Dudu and Playa Grande!",
    "tours.laguna.description": "Experience an unforgettable adventure discovering two gems of the Dominican Republic – Laguna Dudu and Playa Grande! The tour starts in Puerto Plata and leads to the breathtaking Laguna Dudu, a complex of turquoise karst lakes surrounded by lush jungle. Enjoy swimming, jumping from platforms into the water or exploring underwater caves (for the brave!). Then head to Playa Grande, one of the most beautiful beaches on the northern coast, famous for its golden sand and coconut palms. Enjoy relaxation on the beach, swimming in the warm Caribbean waters and a delicious lunch with local specialties such as fresh seafood and tropical cocktails. It's the perfect combination of nature adventure and blissful relaxation on a paradise beach – a must-do for every Dominican Republic lover!",
    "tours.laguna.duration": "6-8 hours",
    "tours.laguna.price": "from $110/person",
    "tours.laguna.location": "Puerto Plata",

    "tours.ocean.name": "Puerto Plata – Day Pass to Ocean World Adventure Park",
    "tours.ocean.short": "Experience a day full of excitement at Ocean World Adventure Park!",
    "tours.ocean.description": "Experience a day full of excitement at Ocean World Adventure Park, one of the most popular entertainment parks in the Dominican Republic! This day pass in Puerto Plata opens the doors to unforgettable attractions for the whole family. Swim with dolphins, watch sea lion shows, snorkel in the tropical lagoon full of colorful fish or relax on the park's private beach. The park also features interactive encounters with exotic birds, sharks and stingrays. The price includes a delicious lunch at one of the park's restaurants serving Dominican delicacies and international dishes. It's the perfect proposition for animal lovers, adventurers and family relaxation in Caribbean style!",
    "tours.ocean.duration": "6-8 hours",
    "tours.ocean.price": "from $110/person",
    "tours.ocean.location": "Puerto Plata",

    "tours.historic.name": "Puerto Plata – Historic City Center Tour",
    "tours.historic.short": "Immerse yourself in the rich history and culture of Puerto Plata!",
    "tours.historic.description": "Immerse yourself in the rich history and culture of Puerto Plata during a fascinating tour of the historic city center! Stroll through charming cobblestone streets, admiring colonial architecture and lively squares. You'll visit key landmarks such as Fort San Felipe, the oldest fortress in the Americas, and San Felipe Cathedral, the spiritual heart of the city. The guide will tell you about Puerto Plata's past, from the Taíno times to the colonial era. The tour also includes a visit to the Amber Museum, where you'll see unique specimens of Dominican amber. At the end, taste local delicacies at one of the traditional cafes. It's the perfect proposition for history, culture and discovering the authentic spirit of the Dominican Republic!",
    "tours.historic.duration": "4-5 hours",
    "tours.historic.price": "from $80/person",
    "tours.historic.location": "Puerto Plata",

    // Services Section
    "services.title": "Other Services",
    "services.transport.title": "Transportation",
    "services.transport.desc": "Safe transport from airport and hotel",
    "services.accommodation.title": "Accommodation",
    "services.accommodation.desc": "Help finding the perfect place",
    "services.planning.title": "Trip Planning",
    "services.planning.desc": "Customized travel itineraries",
    // Services features
    "services.transport.feature1": "Airport pick-up",
    "services.transport.feature2": "Private transfers",
    "services.transport.feature3": "Comfortable vehicles",
    "services.transport.feature4": "Experienced drivers",
    "services.accommodation.feature1": "Hotels & resorts",
    "services.accommodation.feature2": "Airbnb & apartments",
    "services.accommodation.feature3": "Eco-lodges",
    "services.accommodation.feature4": "Client discounts",
    "services.planning.feature1": "Pink & Umbrella Street",
    "services.planning.feature2": "Los Haitises Park",
    "services.planning.feature3": "Faro a Colón",
    "services.planning.feature4": "Ocean World",
    "services.support.title": "24/7 Support",
    "services.support.desc": "We're available around the clock",
    "services.description": "Comprehensive logistical support – we're your concierge on site",
    "services.cta.title": "Need help with organization?",
    "services.cta.description": "Contact us – we'll plan your perfect stay in the Dominican Republic from A to Z",
    "services.cta.write": "Write to us",
    "services.cta.call": "Call now",

    // Attractions Section
    "attractions.title": "Our Attractions",
    "attractions.atv.title": "ATV, Quad Bikes & Buggies",
    "attractions.atv.description": "Adrenaline rush through Puerto Plata's off-road trails! Quad bike tours along beaches and jungle paths, buggy rides to hidden coves. Safe, guided adventures – perfect for groups.",
    "attractions.waterfalls.title": "Waterfalls",
    "attractions.waterfalls.description": "Jump into the cascades at Damajagua (27 levels!) or discover hidden waterfalls in the Isabel de Torres mountains around Puerto Plata. Refreshing and photogenic – with picnic included.",
    "attractions.catamaran.title": "Catamaran",
    "attractions.catamaran.description": "Catamaran cruise along the northern coast of Dominican Republic from Puerto Plata. Snorkeling in crystal-clear Sosúa bays, beach time and drinks – ultimate relaxation.",
    "attractions.local.title": "Other Local Attractions",
    "attractions.local.description": "Beaches like Playa Dorada and Cofresi in Puerto Plata; cable car to Mount Isabel; Ocean World Adventure Park and the historic city center.",

    // Attractions Section Description
    "attractions.description": "From adrenaline to relaxation – find the perfect activity for you",

    // Offer Section
    "offer.title": "City Tour with Mount Isabel and Lunch + 27 Waterfalls Adventure with Traditional Lunch",
    "offer.description": "Discover the charms of Puerto Plata over two days. Explore the city with Mount Isabel on the first day, and experience the adventure at 27 Damajagua waterfalls on the second day.",
    "offer.day1.title": "Day 1: City Tour with Mount Isabel and Lunch",
    "offer.day1.description": "Discover the charms of Puerto Plata during a fascinating city tour! Admire breathtaking views from Mount Isabel, learn about local culture and history while strolling through charming streets. The tour includes a delicious lunch featuring traditional Dominican flavors.",
    "offer.day2.title": "Day 2: 27 Waterfalls Adventure with Traditional Lunch",
    "offer.day2.description": "Experience an exciting adventure in the heart of Puerto Plata's nature! The trip to 27 Damajagua waterfalls is a real treat for adrenaline lovers and nature enthusiasts. Jump, slide and swim in crystal-clear natural pools surrounded by lush tropical jungle. After the full adventure, relax with a traditional Dominican lunch.",
    "offer.includes.title": "What's Included",
    "offer.transport": "Hotel transport",
    "offer.guide": "Local guide",
    "offer.isabel": "Mount Isabel entrance",
    "offer.cablecar": "Cable car",
    "offer.waterfalls": "Damajagua waterfalls entrance",
    "offer.lunch1": "First day lunch",
    "offer.lunch2": "Second day lunch",

    // Footer
    "footer.contact": "Contact",
    "footer.phone": "Phone",
    "footer.email": "Email",
    "footer.address": "Address",
    "footer.social": "Follow Us",
    "footer.rights": "All rights reserved",
    "footer.company.name": "tripdominikana.pl",
    "footer.company.tagline": "Your local Puerto Plata experts. We organize unforgettable tours to the most beautiful corners of the Dominican Republic.",
    "footer.quicklinks": "Quick Links",
    "footer.popular.tours": "Popular Tours",
    "footer.attractions": "Attractions",
    "footer.services": "Services",
    "footer.why.us": "Why Us?",

    // Contact Modal
    "modal.title": "Write to us",
    "modal.subtitle": "Choose your preferred contact method",
    "modal.social": "Or find us on social media",

    // Tour Modal
    "tour.moreinfo": "More Information",
    "tour.duration": "Duration",
    "tour.price": "Price",
    "tour.location": "Location",
    "tour.description": "Tour Description",
    "tour.book": "Book or Ask for Details",
    "tour.note":
      "All prices are approximate and may vary depending on season and number of people. Contact us for an exact quote!",
  },
  es: {
    // Site metadata
    "site.title": "Trip Dominikana - Tus expertos en República Dominicana",
    "site.description": "Descubre los lugares más hermosos de República Dominicana con nuestros guías locales. ¡Te esperan aventuras inolvidables!",
    // Navigation
    "nav.packages": "Tours",
    "nav.about": "Nosotros",
    "nav.reviews": "Reseñas",
    "nav.contact": "Contacto",
    "nav.quote": "Cotización",
    "nav.attractions": "Atracciones",
    "nav.special-offer": "Oferta Especial",

    // Hero Section
    "hero.title": "Tus expertos en República Dominicana",
    "hero.subtitle":
      "Descubre los lugares más hermosos de República Dominicana con nuestros guías locales. ¡Te esperan aventuras inolvidables!",
    "hero.cta": "Ver Atracciones",
    "hero.form.name": "Nombre",
    "hero.form.email": "Email",
    "hero.form.phone": "Teléfono",
    "hero.form.message": "Mensaje",
    "hero.form.send": "Enviar Consulta",
    "hero.form.close": "Cerrar",

    // Why Us Section
    "whyus.title": "¿Por qué elegirnos?",
    "whyus.experience.title": "Años de experiencia",
    "whyus.experience.desc": "Conocemos República Dominicana como la palma de nuestra mano",
    "whyus.guides.title": "Guías locales",
    "whyus.guides.desc": "Experiencias auténticas con lugareños",
    "whyus.safety.title": "Seguridad primero",
    "whyus.safety.desc": "Tu seguridad es nuestra máxima prioridad",
    "whyus.price.title": "Mejores precios",
    "whyus.price.desc": "Garantizamos tarifas competitivas",

    // Tours Section
    "tours.title": "Nuestros tours más populares",
    "tours.damajagua.title": "Cascadas de Damajagua",
    "tours.damajagua.desc": "27 piscinas naturales y cascadas",
    "tours.damajagua.price": "desde $89",
    "tours.saona.title": "Isla Saona",
    "tours.saona.desc": "Isla paradisíaca con playas blancas",
    "tours.saona.price": "desde $79",
    "tours.catamarano.title": "Crucero en Catamarán",
    "tours.catamarano.desc": "Relájate en aguas cristalinas",
    "tours.catamarano.price": "desde $99",
    "tours.book": "Reservar",

    // Services Section
    "services.title": "Otros servicios",
    "services.transport.title": "Transporte",
    "services.transport.desc": "Transporte seguro desde aeropuerto y hotel",
    "services.accommodation.title": "Alojamiento",
    "services.accommodation.desc": "Ayuda para encontrar el lugar perfecto",
    "services.planning.title": "Planificación",
    "services.planning.desc": "Itinerarios de viaje personalizados",
    // Services features
    "services.transport.feature1": "Recogida en el aeropuerto",
    "services.transport.feature2": "Traslados privados",
    "services.transport.feature3": "Vehículos cómodos",
    "services.transport.feature4": "Conductores experimentados",
    "services.accommodation.feature1": "Hoteles y resorts",
    "services.accommodation.feature2": "Airbnb y apartamentos",
    "services.accommodation.feature3": "Eco-lodges",
    "services.accommodation.feature4": "Descuentos para clientes",
    "services.planning.feature1": "Pink & Umbrella Street",
    "services.planning.feature2": "Parque Los Haitises",
    "services.planning.feature3": "Faro a Colón",
    "services.planning.feature4": "Ocean World",
    "services.support.title": "Soporte 24/7",
    "services.support.desc": "Estamos disponibles las 24 horas",
    "services.description": "Apoyo logístico integral – somos tu concierge en el lugar",
    "services.cta.title": "¿Necesitas ayuda con la organización?",
    "services.cta.description": "Contáctanos – planificaremos tu estadía perfecta en República Dominicana de la A a la Z",
    "services.cta.write": "Escríbenos",
    "services.cta.call": "Llama ahora",

    // Attractions Section
    "attractions.title": "Nuestras atracciones",
    "attractions.atv.title": "ATV, Cuatrimotos y Buggies",
    "attractions.atv.description": "¡Adrenalina pura por los senderos todoterreno de Puerto Plata! Tours en cuatrimotos por playas y caminos de selva, paseos en buggy hasta calas escondidas. Aventuras seguras y guiadas – perfectas para grupos.",
    "attractions.waterfalls.title": "Cascadas",
    "attractions.waterfalls.description": "¡Salta a las cascadas de Damajagua (27 niveles!) o descubre cascadas ocultas en las montañas Isabel de Torres alrededor de Puerto Plata. Refrescante y fotogénico – con picnic incluido.",
    "attractions.catamaran.title": "Catamarán",
    "attractions.catamaran.description": "Crucero en catamarán por la costa norte de República Dominicana desde Puerto Plata. Snorkel en bahías cristalinas de Sosúa, tiempo de playa y bebidas – relajación absoluta.",
    "attractions.local.title": "Otras atracciones locales",
    "attractions.local.description": "Playas como Playa Dorada y Cofresi en Puerto Plata; teleférico al Monte Isabel; Ocean World Adventure Park y el centro histórico de la ciudad.",

    // Attractions Section Description
    "attractions.description": "Desde adrenalina hasta relajación – encuentra la actividad perfecta para ti",

    // Footer
    "footer.contact": "Contacto",
    "footer.phone": "Teléfono",
    "footer.email": "Email",
    "footer.address": "Dirección",
    "footer.social": "Síguenos",
    "footer.rights": "Todos los derechos reservados",
    "footer.company.name": "tripdominikana.pl",
    "footer.company.tagline": "Tus expertos locales en Puerto Plata. Organizamos tours inolvidables por los rincones más bellos de República Dominicana.",
    "footer.quicklinks": "Enlaces rápidos",
    "footer.popular.tours": "Tours populares",
    "footer.attractions": "Atracciones",
    "footer.services": "Servicios",
    "footer.why.us": "¿Por qué nosotros?",

    // Contact Modal
    "modal.title": "Escríbenos",
    "modal.subtitle": "Elige tu método de contacto preferido",
    "modal.social": "O encuéntranos en redes sociales",

    // Common UI
    "common.learn.more": "Más información",
    "common.per.person": "por persona",
    "common.reviews": "reseñas",
    "common.days": "días",
    "common.max.people": "Máx. 12 personas",
    "common.available.daily": "Disponible a diario",
    "common.book.now": "Reservar ahora",
    "common.free.cancellation": "Cancelación gratuita hasta 24 h antes de la salida",
    "common.recent.reviews": "Reseñas recientes",

    // Reviews
    "reviews.anna.name": "Anna K.",
    "reviews.anna.content": "¡Experiencia increíble! El Monte Isabel fue mágico, y las cascadas de Damajagua fueron una verdadera aventura. ¡Excelente organización!",
    "reviews.marcin.name": "Marcin W.",
    "reviews.marcin.content": "¡Excelente excursión! Puerto Plata es una ciudad hermosa, y las cascadas son una aventura increíble. ¡Altamente recomendado!",

    // Tours section summary
    "tours.description": "Descubre los lugares más hermosos de República Dominicana con nuestros tours comprobados",
    "tours.custom.message": "¿Buscas un tour a medida? ¡Escríbenos y organizaremos algo especial solo para ti!",

    // Detailed Tours - Isabel
    "tours.isabel.name": "Puerto Plata – City Tour con Monte Isabel y almuerzo",
    "tours.isabel.short": "Descubre los encantos de Puerto Plata. Vistas desde el Monte Isabel, cultura e historia de la ciudad.",
    "tours.isabel.description": "Descubre los encantos de Puerto Plata en un fascinante city tour. Disfruta de vistas impresionantes desde el Monte Isabel y conoce la cultura e historia locales paseando por sus calles. Incluye delicioso almuerzo con sabores dominicanos.",
    "tours.isabel.duration": "4-5 horas",
    "tours.isabel.price": "desde $100/persona",
    "tours.isabel.location": "Puerto Plata",

    // Detailed Tours - Beaches
    "tours.beaches.name": "Tour por playas de Puerto Plata, Sosúa y Cabarete",
    "tours.beaches.short": "Recorre las playas más hermosas de la costa norte en un solo día.",
    "tours.beaches.description": "Comienza en Puerto Plata con Playa Dorada y Playa Cofresí, perfectas para paseos y baños en aguas turquesas. Continúa a Sosúa para snorkel en bahías cristalinas: Playa Sosúa, Playa Alicia y Playa Chiquita. Finaliza en Cabarete: Cabarete Beach, Kite Beach y Playa Encuentro, paraíso de los deportes acuáticos.",
    "tours.beaches.duration": "6-8 horas",
    "tours.beaches.price": "desde $100/persona",
    "tours.beaches.location": "Puerto Plata, Sosúa, Cabarete",

    // Detailed Tours - Waterfalls
    "tours.waterfalls.name": "Puerto Plata – Aventura en 27 Cascadas con almuerzo",
    "tours.waterfalls.short": "¡Aventura en la naturaleza! Salta, deslízate y nada en las 27 cascadas de Damajagua.",
    "tours.waterfalls.description": "Vive una aventura emocionante en las 27 cascadas de Damajagua: saltos, toboganes naturales y piscinas cristalinas rodeadas de jungla tropical. Guías profesionales y almuerzo dominicano tradicional incluido.",
    "tours.waterfalls.duration": "4-6 horas",
    "tours.waterfalls.price": "desde $90/persona",
    "tours.waterfalls.location": "Puerto Plata",

    // Detailed Tours - Catamaran
    "tours.catamaran.name": "Catamarán de Playa Dorada a Sosúa con paradas",
    "tours.catamaran.short": "Navega en catamarán por aguas turquesas y haz snorkel en bahías de Sosúa.",
    "tours.catamaran.description": "Paseo en catamarán desde Playa Dorada a Sosúa con paradas para snorkel, bebidas y snacks a bordo, baño en el océano y tiempo en Playa Sosúa. Ambiente caribeño con música y animación.",
    "tours.catamaran.duration": "5-7 horas",
    "tours.catamaran.price": "desde $80/persona",
    "tours.catamaran.location": "Puerto Plata, Sosúa",

    // Detailed Tours - Cayo Arena
    "tours.cayo.name": "Cayo Arena – Isla Paraíso y tour por manglares",
    "tours.cayo.short": "Snorkel en aguas turquesas y exploración de manglares en Monte Cristi.",
    "tours.cayo.description": "Viaje en lancha a Cayo Arena (Isla Paraíso) con snorkel entre arrecifes y peces tropicales. Navegación por manglares del Parque Nacional Monte Cristi y tiempo de relax en la isla con snacks y bebidas.",
    "tours.cayo.duration": "6-8 horas",
    "tours.cayo.price": "desde $90/persona",
    "tours.cayo.location": "Puerto Plata, Cayo Arena",

    // Detailed Tours - River
    "tours.river.name": "Tour por el río Sonador desde Puerto Plata",
    "tours.river.short": "Descenso en balsa o kayak por selva, cascadas y pozas naturales.",
    "tours.river.description": "Recorre el río Sonador (Río Yásica) entre selva tropical, cascadas y cuevas escondidas. Actividades: baño en pozas, saltos, picnic con especialidades dominicanas. Guías profesionales incluidos.",
    "tours.river.duration": "5-7 horas",
    "tours.river.price": "desde $90/persona",
    "tours.river.location": "Puerto Plata",

    // Detailed Tours - Laguna Dudu
    "tours.laguna.name": "Puerto Plata – Laguna Dudu y Playa Grande",
    "tours.laguna.short": "Lagunas turquesas, saltos y relax en una de las playas más bellas.",
    "tours.laguna.description": "Visita Laguna Dudu con lagos kársticos para nadar y saltar desde plataformas, y continúa a Playa Grande de arena dorada y palmeras con almuerzo local.",
    "tours.laguna.duration": "6-8 horas",
    "tours.laguna.price": "desde $110/persona",
    "tours.laguna.location": "Puerto Plata",

    // Detailed Tours - Ocean World
    "tours.ocean.name": "Puerto Plata – Pase de día Ocean World Adventure Park",
    "tours.ocean.short": "Un día lleno de emociones para toda la familia.",
    "tours.ocean.description": "Nada con delfines, shows de leones marinos, snorkel en laguna tropical, playa privada y encuentros con aves, tiburones y rayas. Almuerzo incluido.",
    "tours.ocean.duration": "6-8 horas",
    "tours.ocean.price": "desde $110/persona",
    "tours.ocean.location": "Puerto Plata",

    // Detailed Tours - Historic Center
    "tours.historic.name": "Puerto Plata – Tour por el centro histórico",
    "tours.historic.short": "Arquitectura colonial, Fort San Felipe y Museo del Ámbar.",
    "tours.historic.description": "Paseo por calles empedradas, visita a la Catedral San Felipe y Fort San Felipe, historia desde taínos a época colonial. Degustación en cafetería tradicional.",
    "tours.historic.duration": "4-5 horas",
    "tours.historic.price": "desde $80/persona",
    "tours.historic.location": "Puerto Plata",

    // Offer Section
    "offer.title": "City Tour con Monte Isabel y almuerzo + 27 Cascadas con almuerzo",
    "offer.description": "Descubre Puerto Plata en dos días: city tour con Monte Isabel el primer día y aventura en las 27 cascadas de Damajagua el segundo día.",
    "offer.day1.title": "Día 1: City Tour con Monte Isabel y almuerzo",
    "offer.day1.description": "City tour por Puerto Plata con vistas desde el Monte Isabel, cultura e historia local. Incluye almuerzo con sabores dominicanos.",
    "offer.day2.title": "Día 2: 27 Cascadas con almuerzo",
    "offer.day2.description": "Aventura en Damajagua: saltos, toboganes naturales y piscinas cristalinas en plena naturaleza. Almuerzo dominicano incluido.",
    "offer.includes.title": "Incluye",
    "offer.transport": "Transporte hotel",
    "offer.guide": "Guía local",
    "offer.isabel": "Entrada al Monte Isabel",
    "offer.cablecar": "Teleférico",
    "offer.waterfalls": "Entrada a las cascadas de Damajagua",
    "offer.lunch1": "Almuerzo día 1",
    "offer.lunch2": "Almuerzo día 2",

    // Tour Modal
    "tour.moreinfo": "Más información",
    "tour.duration": "Duración",
    "tour.price": "Precio",
    "tour.location": "Ubicación",
    "tour.description": "Descripción del tour",
    "tour.book": "Reservar o preguntar por detalles",
    "tour.note":
      "Todos los precios son aproximados y pueden variar según la temporada y el número de personas. ¡Contáctanos para obtener una cotización exacta!",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pl")

  // On mount: load saved preference or detect from browser
  useEffect(() => {
    try {
      const saved = typeof window !== 'undefined' ? (localStorage.getItem('site_lang') as Language | null) : null
      if (saved && ["pl","en","es"].includes(saved)) {
        setLanguage(saved)
        return
      }
      const nav = typeof navigator !== 'undefined' ? navigator.language || navigator.languages?.[0] : undefined
      if (nav) {
        const lower = nav.toLowerCase()
        if (lower.startsWith('pl')) setLanguage('pl')
        else if (lower.startsWith('es')) setLanguage('es')
        else setLanguage('en')
      }
    } catch {}
  }, [])

  // Persist language changes
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        // Persist to localStorage
        localStorage.setItem('site_lang', language)
        // Persist to cookie so server (generateMetadata) can read it
        document.cookie = `site_lang=${language}; path=/; max-age=31536000`
        // Update <html lang>
        document.documentElement.setAttribute('lang', language)
        // Update document title and meta description immediately on client
        const dict = translations[language] as Record<string, string>
        if (dict["site.title"]) document.title = dict["site.title"]
        const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
        if (metaDesc && dict["site.description"]) metaDesc.setAttribute('content', dict["site.description"]) 
      }
    } catch {}
  }, [language])

  const t = (key: string): string => {
    const dict = translations[language] as Record<string, string>
    return dict[key] ?? key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
