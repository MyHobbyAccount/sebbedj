import React from 'react';

const ContactTextArea = ({ id, name, label, rows }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white">
        {label}
      </label>
      <textarea
        rows={rows}
        id={id}
        name={name}
        required
        className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-gray-600 focus:ring-gray-600"
      ></textarea>
    </div>
  );
};

export default ContactTextArea;