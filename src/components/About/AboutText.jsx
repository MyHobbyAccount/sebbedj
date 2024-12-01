import React from 'react';
import { motion } from 'framer-motion';

const AboutText = () => {
  const paragraphs = [
    `Välkommen till en värld där musiken sätter stämningen och varje fest blir unik! Jag är sebbedj – en engagerad och erfaren underhållare som brinner för att skapa oförglömliga stunder på dansgolvet. Jag utgår några mil söder om Växjö och kan enkelt ta mig runt i södra Sverige.`,
    `Med en naturlig känsla för att läsa av publiken och en bred musikalisk repertoar levererar jag precis det som behövs för att din kväll ska bli magisk. Oavsett om det handlar om att sätta takten på ett bröllop, arrangera ett skräddarsytt musikquiz, eller skapa en kväll full av energi och glädje, så är mitt mål att ge dig och dina gäster en upplevelse ni sent kommer glömma.`
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {paragraphs.map((text, index) => (
        <motion.p 
          key={index} 
          className="text-white opacity-90 leading-relaxed"
          variants={itemVariants}
        >
          {text}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default AboutText;