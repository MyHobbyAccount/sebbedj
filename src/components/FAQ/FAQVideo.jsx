import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FAQVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays when loaded
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <motion.div 
      className="w-full md:w-1/2"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-lg neon-box group" style={{ paddingBottom: "66.67%" }}>
        <div className="absolute inset-0 glow-image opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ willChange: 'transform' }}
        >
          <source src="/media/videos/sebbedj setup.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  );
};

export default FAQVideo;