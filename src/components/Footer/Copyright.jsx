import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
      <p>© {currentYear} Passaparola AB. All rights reserved.</p>
      <p className="mt-2">
        Created by{' '}
        <a
          href="https://sebbedj.se"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
        >
          Sebastian Bocaciu
        </a>
      </p>
    </div>
  );
};

export default Copyright;