import React, { useState } from 'react';
import ServiceDetails from './ServiceDetails';
import ContactPopup from './ContactPopup';

const Services = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Bröllops-DJ Paket 1",
      price: "10,000 SEK inkl moms",
      features: [
        "DJ enbart under bröllopsfesten",
        "Tillgång till lokalen under middagen",
        "Ljudsystem i världsklass",
        "Disco kula",
        "Moving heads & miljöbelysning",
        "1 timma konsultationsmöte"
      ],
      details: "Perfekt för lokaler där DJ:n kan rigga under under tiden som bröllopsmiddagen pågår (I en separat lokal). Något billigare pris när ni bara vill ha DJ till festen. Inkluderar omfattande ljud- och ljusuppsättning, musikplanering och en helkväll fylld med dans. Jag spelar så länge som ni orkar!. Milersättning tillkommer med 25 SEK/mil."
    },
    {
      title: "Bröllops-DJ Paket 2",
      price: "13,000 SEK inkl moms",
      features: [
        "DJ-tjänster under middag och fest",
        "Samma lokal hela kvällen",
        "Ljudsystem i världsklass",
        "Disco kula",
        "Moving heads & miljöbelysning",
        "Flera konsultationsmöten"
      ],
      details: "Idealiskt för evenemang där middag och fest är i samma lokal. Inkluderar förstärkt ljud- och ljusuppsättning, flera planeringsmöten och sömlös musik under både middag och fest."
    },
    {
      title: "Nattklubbsbokning",
      price: "Kontakta för pris",
      features: [
        "Professionell DJ-uppträdande",
        "Lokalanpassad uppsättning",
        "Expert på att läsa av publiken",
        "Flexibla genrer",
        "Teknisk utrustning"
      ],
      details: "Höj energin i din lokal med professionella DJ-tjänster anpassade för nattklubbsmiljöer. Inkluderar toppmodern utrustning och mångårig erfarenhet av att läsa av publiken."
    },
    {
      title: "Musikquiz",
      price: "5,000 SEK inkl moms",
      features: [
        "1 timma interaktivt musikquiz",
        "Professionellt ljudsystem",
        "Underhållande kategorier",
        "Jag använder mig av Er TV-skärm",
      ],
      details: "En engagerande och interaktiv musikquiz-upplevelse perfekt för företagsevenemang, teambuilding eller privata fester. Jag använder befintligt bild-lösning. 4 mil resa ingår."
    },
    {
      title: "Skräddarsytt Paket",
      price: "Kontakta för pris",
      features: [
        "Anpassad kombination av tjänster",
        "Flexibla tidslängder",
        "Valfri utrustning",
        "Skräddarsytt musikval",
        "Personlig underhållningsplan"
      ],
      details: "Skapa ditt perfekta underhållningspaket genom att kombinera våra tjänster. Oavsett om du vill ha en bröllops-DJ med musikquiz som pausunderhållning, eller ett klubbuppträdande med specialanpassad ljussättning - vi skapar ett paket som perfekt matchar din vision och budget."
    }
  ];

  const handleBookNow = (service) => {
    setSelectedService(service);
    setIsContactOpen(true);
  };

  return (
    <section className="section-height bg-custom-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-custom-gray-900">Våra Tjänster</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-custom-gray-900">{service.title}</h3>
                <p className="text-xl mb-6 text-custom-gray-700">{service.price}</p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-custom-gray-600">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <ServiceDetails service={service} />
                <button
                  onClick={() => handleBookNow(service)}
                  className="w-full bg-custom-gray-800 text-white px-6 py-2 rounded-lg hover:bg-custom-gray-700 transition-colors"
                >
                  Boka Nu
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        service={selectedService}
      />
    </section>
  );
};

export default Services;