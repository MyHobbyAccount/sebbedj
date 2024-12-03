import React from 'react';
import FAQItem from './FAQItem';
import { faqData } from '../../data/faqData';

const FAQList = () => {
  return (
    <div className="max-w-3xl mx-auto">
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default FAQList;