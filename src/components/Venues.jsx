import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Venues = () => {
  const venues = [
    "Nääs Slott",
    "Grand Hotel",
    "Stenungsbaden Yacht Club",
    "Socitetshuset Marstand",
    "Villa Gransholm",
    "Stena Line",
    "Skeppsbar sthlm",
    "Scandic Swania",
    "Restaurang Sjökanten",
    "SKAI",
    "PM & Vänner",
    "Valand",
    "Havsbadet Lysekil",
    "Brödernas Växjö",
    "Asa Herrgård",
    "Varbergs Fästning",
    "Råda Säteri",
    "O´learys"
  ];

  return (
    <section className="bg-gradient-to-b from-custom-gray-50 to-custom-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <FaMapMarkerAlt className="text-2xl text-custom-gray-600 mr-3" />
            <h2 className="text-3xl font-bold text-custom-gray-900">
              Tidigare Spelningar
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {venues.map((venue, index) => (
              <div
                key={index}
                className="bg-white px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <p className="text-custom-gray-700 text-sm font-medium">{venue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venues;