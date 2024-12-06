import React from 'react';

const BookingTerms = () => {
  const bookingTerms = [
    {
      title: "Bokning & Betalning",
      details: "50% av totalbeloppet betalas vid bokning för att säkerställa datumet. Resterande belopp betalas senast 14 dagar innan eventet."
    },
    {
      title: "Avbokning",
      details: "Vid avbokning mer än 30 dagar innan event återbetalas 75% av depositionen. Vid avbokning mindre än 30 dagar innan event behålls hela depositionen."
    },
    {
      title: "Utrustning & Setup",
      details: "All professionell DJ-utrustning ingår i priset. Setup sker normalt 1-2 timmar innan start, exakt tid bestäms vid konsultation."
    },
    {
      title: "Speltid",
      details: "Standard speltid är upp till 6 timmar. Övertid debiteras enligt överenskommelse om möjligt på plats."
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