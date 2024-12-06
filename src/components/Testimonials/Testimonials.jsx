import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Lyhörd och ett öga för vad som uppskattades på dansgolvet. Fullt ös hela kvällen och riktigt maxat!",
      event: "Bröllopsfest"
    },
    {
      text: "Fantastisk stämning och professionellt bemötande från början till slut!",
      event: "Företagsevent"
    },
    {
      text: "Perfekt musikval som fick alla att dansa hela kvällen!",
      event: "Privatfest"
    },
    {
      text: "En kväll vi sent kommer glömma, tack för en magisk upplevelse!",
      event: "Bröllopsfest"
    }
  ];

  return (
    <section className="section-height animated-bg py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 section-header">
          Vad Andra Säger
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="neon-box p-6"
            >
              <p className="text-lg text-white opacity-90 italic">
                ✨ "{testimonial.text}"
              </p>
              <p className="text-pink-500 mt-2">
                – {testimonial.event}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
