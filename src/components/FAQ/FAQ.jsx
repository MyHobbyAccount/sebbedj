import React from 'react';
import FAQList from './FAQList';

const FAQ = () => {
  return (
    <section className="section-height bg-gradient-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Vanliga Frågor
        </h2>
        <FAQList />
      </div>
    </section>
  );
};

export default FAQ;