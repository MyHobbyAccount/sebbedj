import React from 'react';
import FAQList from './FAQList';
import { motion } from 'framer-motion';

const FAQ = () => {
  return (
    <section className="section-height animated-bg py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 section-header">
            Vanliga Frågor
          </h2>
          <FAQList />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;