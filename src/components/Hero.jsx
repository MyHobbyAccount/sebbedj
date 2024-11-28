import React from 'react';

const Hero = () => {
  return (
    <section className="section-height bg-custom-gray-100 relative">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-custom-gray-900">
            #sebbedj
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-custom-gray-700">
            Skapar Oförglömliga Stunder Genom Musik
          </p>
          <p className="text-lg mb-12 text-custom-gray-600 max-w-2xl mx-auto">
            Professionell Bröllops- & Event-DJ i Sverige
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView()}
            className="bg-custom-gray-800 text-white px-8 py-3 rounded-lg hover:bg-custom-gray-700 transition-colors"
          >
            Boka Nu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;