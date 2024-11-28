import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const ServiceDetails = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-custom-gray-200 text-custom-gray-800 px-6 py-2 rounded-lg hover:bg-custom-gray-300 transition-colors mb-4"
      >
        Mer Information
      </button>
      
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white p-6 rounded-lg max-w-md w-full"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-custom-gray-600 mb-6">{service.details}</p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-custom-gray-800 text-white px-6 py-2 rounded-lg hover:bg-custom-gray-700 transition-colors"
            >
              Stäng
            </button>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default ServiceDetails;