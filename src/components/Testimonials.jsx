import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      row: 1,
      items: [
        {
          text: "Lyhörd och ett öga för vad som uppskattades på dansgolvet. Fullt ös hela kvällen och riktigt maxat!",
          event: "Bröllopsfest",
          date: "September 2023"
        },
        {
          text: "Fantastisk stämning och professionellt bemötande från början till slut!",
          event: "Företagsevent",
          date: "Oktober 2023"
        }
      ]
    },
    {
      row: 2,
      items: [
        {
          text: "Perfekt musikval som fick alla att dansa hela kvällen!",
          event: "Jubileumsfest",
          date: "November 2023"
        },
        {
          text: "En kväll vi sent kommer glömma, tack för en magisk upplevelse!",
          event: "Bröllopsfest",
          date: "December 2023"
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="section-height bg-gradient-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white neon-text">
          Vad Andra Säger
        </h2>
        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((row) => (
            <div key={row.row} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {row.items.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="testimonial-card glass p-6 rounded-lg"
                >
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 text-4xl text-neon-pink opacity-50">
                      "
                    </div>
                    <p className="text-lg text-gray-200 italic mb-4">
                      {testimonial.text}
                    </p>
                    <div className="mt-4 border-t border-gray-700 pt-4">
                      <p className="text-neon-purple font-semibold">
                        {testimonial.event}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;