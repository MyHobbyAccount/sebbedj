import React from 'react';
import CompanyInfo from './CompanyInfo';
import SocialLinks from './SocialLinks';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CompanyInfo />
          <SocialLinks />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;