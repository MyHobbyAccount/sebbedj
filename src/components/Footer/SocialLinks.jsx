import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="space-y-4 md:pl-4">
      <h3 className="text-xl font-semibold mb-4">Följ Oss</h3>
      <div className="flex space-x-4">
        <a
          href="https://instagram.com/sebbedj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-300 transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com/sebbedj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-300 transition-colors"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;