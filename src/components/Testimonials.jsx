import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      row: 1,
      items: [
        {
          text: "Sebbe dj var lyhörd och hade ett öga för vad som uppskattades på dansgolvet. Fullt ös hela kvällen och riktigt maxat!",
          event: "Bröllopskund",
          date: "2023"
        },
        {
          text: "Vi bokade Sebbe vårt bröllop i augusti och vilken succe det blev! Perfekt musik, otrolig energi och fantastisk stämning i otroligt många timmar. 10/10 would book again",
          event: "Bröllopskund",
          date: "2023"
        }
      ]
    },
    {
      row: 2,
      items: [
        {
          text: "Fantastisk stämning och professionellt bemötande från början till slut!",
          event: "Företagsevent",
          date: "2023"
        },
        {
          text: "Bokade in Sebbe till min systers 40-årsfest utan hennes eller gästernas vetskap. Vilken succé! Han tog hela gänget med storm och höjde partynivån till nya höjder!",
          event: "Musikquiz",
          date: "2023"
        }
      ]
    },
    {
      row: 3,
      items: [
        {
          text: "Vi ordnade en 50 års fest på PM & Vänner och fick tips om DJ Sebbe. Vi är så nöjda att DJ Sebbe spelade på vår fest. Det kunde inte blivit en bättre och roligare kväll och natt. Otroligt proffsig DJ som före festen var lyhörd för vad vi ville ha för musik att dansa till för att festen skulle bli så bra som möjligt. Efter middagen, innan dansen drog igång var det dags för ett roligt musikquiz som uppskattades av alla. Från första stund var det sedan fullt ös på dansgolvet tills festen slutade sent på natten. Tusen tack Sebbe för att du var med och gjorde vår fest precis så som vi ville ha den!!",
          event: "Privatfest",
          date: "2022"
        },
        {
          text: "En kväll vi sent kommer glömma, tack sebbeDJ för en magisk upplevelse!",
          event: "Bröllopskund",
          date: "2023"
        }
      ]
    },
    {
      row: 4,
      items: [
        {
          text: "Sebastian var DJ på min och min mans bröllopsfest 30 juni, och det var världens bästa party!!! Allt var helt enkelt kanon och både vi samt alla våra gäster hade en jätterolig fest med bra musik och bra vibbar från början till slut. Redan innan själva dagen hade vi haft mycket kontakt med Sebbe och kommit överens om vilka låtar vi ville ha. Han var otroligt hjälpsam hela vägen, kom med bra tips och var så positiv och full av positiv energi. Han kom till och med till stället där festen skulle vara dagen innan för att ställa i ordning allt så att vi inte behövde oroa oss för någonting alls utan bara kunde njuta av festen. VARMT rekommenderat för andra som letar efter bröllops DJ eller till andra fester. TACK DJ Sebbe 🙂",
          event: "Bröllopskund",
          date: "2018"
        },
        {
          text: "Sebbe förgyllde vår bröllopskväll och vi är så nöjda - det var över vår förväntan. Han var en stor anledning till att alla hade en rolig kväll, inte bara oss, och vi dansade till 4 på morgonen. Han var närvarande, supertrevlig, rolig, personlig och riktigt skillad på själva \"musik-delen\" - bra blandning av låtar vi gillade som sebbe hade mixat ihop och önskelåtar från gästerna samt hans egna gissningar på vad som skulle passa för bästa möjliga upplevelse. Han blandade också med typ limbo och andra roliga grejer för att hålla igång dansgolvet med både unga och gamla under 4(!) timmar från midnatt. Sebbe satte upp sin setup tidigare än man kunde förvänta sig och var super-redo på alla sätt och väntade tålmodigt när middagen drog över med säkert 1 timme. - priset inkluderade allt utan tillägg. Sebbe kan verkligen rekommenderas!",
          event: "Bröllopskund",
          date: "2024"
        }
      ]
    },
    {
      row: 5,
      items: [
        {
          text: "Sebbe spelade på vårt bröllop. Jisses vilken kväll det blev! Lyhörd o ett öga för vad som uppskattades på dansgolvet. Fullt ös hela kvällen o riktigt maxat!",
          event: "Bröllopskund",
          date: "2022"
        },
        {
          text: "Tack Sebbe för den energi du gav till Växjö Träningsfabrik på vår invigning. Musiken är en stor del för härlig träning och tänk om vi kunde ha dig hos oss varje dag.....",
          event: "Företagsevent",
          date: "2019"
        }
      ]
    },
    {
      row: 6,
      items: [
        {
          text: "Sebbedj förgyllde vår bröllopsfest och underhöll oss och våra gäster långt in på natten 🕺🏼💃🏻🎤🎧",
          event: "Bröllopskund",
          date: "2018"
        },
        {
          text: "Han var väldigt proffesionell. Han spelade på vårt bröllop och både vi och gästerna blev nöjda. Vi rekommenderar honom helhjärtat.",
          event: "Bröllopskund",
          date: "2024"
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
