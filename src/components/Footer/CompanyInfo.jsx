import React from 'react';

const CompanyInfo = () => {
  return (
    <div className="space-y-4 md:pl-4">
      <h3 className="text-xl font-semibold mb-4">Företagsinformation</h3>
      <p>Passaparola AB - Innehar F-skattesedel</p>
      <p>
        <a 
          href="tel:0721571439" 
          className="hover:text-gray-300 transition-colors"
        >
          Tel: 072-157 14 39
        </a>
      </p>
      <p>
        <a 
          href="mailto:boka@sebbedj.se"
          className="hover:text-gray-300 transition-colors"
        >
          boka@sebbedj.se
        </a>
      </p>
    </div>
  );
};

export default CompanyInfo;