import React from 'react';
import { motion } from 'framer-motion';

const FAQVideo = () => {
  return (
    <motion.div 
      className="w-full md:w-1/2"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="aspect-video relative overflow-hidden rounded-lg neon-box group">
        <div className="absolute inset-0 glow-image opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        >
          <source src="/media/videos/sebbedj partyfilm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  );
};

export default FAQVideo;