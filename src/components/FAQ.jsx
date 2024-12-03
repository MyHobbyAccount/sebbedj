import React, { useState } from 'react';
import { faqData } from '../data/faqData';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-4 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg text-white">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div className={`overflow-hidden transition-all ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="section-height bg-gradient-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white neon-text">
          Vanliga Frågor
        </h2>
        <div className="max-w-3xl mx-auto glass p-6 rounded-lg">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;