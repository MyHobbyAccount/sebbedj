import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      row: 1,
      items: [
        {
          text: "Lyhörd och ett öga för vad som uppskattades på dansgolvet. Fullt ös hela kvällen och riktigt maxat!",
          event: "Bröllopsfest"
        },
        {
          text: "Fantastisk stämning och professionellt bemötande från början till slut!",
          event: "Företagsevent"
        }
      ]
    },
    {
      row: 2,
      items: [
        {
          text: "Perfekt musikval som fick alla att dansa hela kvällen!",
          event: "Jubileumsfest"
        },
        {
          text: "En kväll vi sent kommer glömma, tack för en magisk upplevelse!",
          event: "Bröllopsfest"
        }
      ]
    }
  ];

  return (
    <section className="section-height bg-custom-gray-200 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-custom-gray-900">
          Vad Andra Säger
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {testimonials.map((row) => (
            <div key={row.row} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {row.items.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-lg text-custom-gray-600 italic">
                    ✨ "{testimonial.text}"
                  </p>
                  <p className="text-custom-gray-500 mt-2">
                    – {testimonial.event}
                  </p>
                </div>
              ))}
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;