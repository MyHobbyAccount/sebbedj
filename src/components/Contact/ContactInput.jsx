import React from 'react';

const ContactInput = ({ id, name, label, type, autoComplete }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        autoComplete={autoComplete}
        required
        className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-gray-600 focus:ring-gray-600"
      />
    </div>
  );
};

export default ContactInput;