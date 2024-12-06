import React from 'react';
import { motion } from 'framer-motion';
import { VIDEO_CONFIG } from '../../utils/videoHandler';

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
          className="object-cover object-top w-full h-full transform group-hover:scale-105 transition-transform duration-500"
          controlsList="nodownload"
        >
          <source src={VIDEO_CONFIG.videos.setupVideo.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <a
          href={VIDEO_CONFIG.videos.setupVideo.src}
          download={VIDEO_CONFIG.videos.setupVideo.downloadName}
          className="absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
          onClick={(e) => {
            e.preventDefault();
            const link = document.createElement('a');
            link.href = VIDEO_CONFIG.videos.setupVideo.src;
            link.download = VIDEO_CONFIG.videos.setupVideo.downloadName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download Video
        </a>
      </div>
    </motion.div>
  );
};

export default FAQVideo;