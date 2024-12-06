import React from 'react';

const BookingTerms = () => {
  const bookingTerms = [
    {
      title: "Bokning & Betalning",
      details: "Godkänd offert räknas som bokningsbekräftelse. Vid förfrågan preliminärbokas datumet. Totalbeloppet faktureras med 30 dagar kredittid och skickas till kund efter genomfört event."
    },
    {
      title: "Avbokning",
      details: "Bröllopskunder har rätt att omboka till nytt datum ifall nöden kräver, utan extra kostnad. Alla bokningar som avbokas av kund närmare än 7 dagar faktureras fullt belopp. Om inte annat är överrenskommet vid bokningstillfälle."
    },
    {
      title: "Utrustning & Setup",
      details: "All professionell DJ-utrustning ingår i priset om inte annat är kommunicerat. Setup sker normalt 1-2 timmar innan start, exakt tid bestäms vid konsultation. Kan man använda rökmaskin ingår det utan extra kostnad. Högtalarna av märket Yamaha låter magiskt bra och lämpar sig för upp till 120 personer. För större sällskap tillkommer 3000 SEK exkl. moms för hyra av kompletterande ljud utrustning."
    },
    {
      title: "Hyra av ljudutrustning",
      details: "För tjänster där ljudutrustning inte ingår som en del av paketet, tillkommer en kostnad på upp till 3000 SEK exkl. moms, beroende på omfattningen som offereras. Ev milersättning tillkommer om ljud ska levereras separat."
    },
    {
      title: "Speltid",
      details: "sebbedj spelar så länge det är partystämning och hålligång på eventet upp till 6 timmar. Vid nattklubbsspelningar, regleras speltid enligt överrenskommelse. För alla andra event tjänster där spelningen går över 6 timmar speltid tillkommer en kostnad på 3000 SEK inkl. moms."
    },
    {
      title: "Sjukdom eller familjär incident",
      details: "Om något så tråkigt som sjukdom eller något allvarligt händer försöker vi i första hand ordna med en ersättare om DJn inte kan genomföra eventet. I fall där det inte finns ersättare samt att man av allvarliga skäl inte kan genomföra eventet har DJ rätt att avboka. Ingen ersättning utbetalas."
    },
    {
      title: "Traktamente",
      details: "Vid resor tillkommer en milersättning på 25 SEK/mil exkl moms. För event längre än 10 mil tillkommer ersättning för övernattning i anslutning till spelningen. Vid event där DJn förvänta anlända och installera innan eventstart erbjuds DJn kostnadsfri middag på plats."
    }
  ];

  return (
    <div className="space-y-6">
      {bookingTerms.map((term, index) => (
        <div key={index} className="border-b border-gray-700 pb-4">
          <h3 className="text-lg font-medium text-neon-pink mb-2">
            {term.title}
          </h3>
          <p className="text-gray-300">
            {term.details}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookingTerms;
