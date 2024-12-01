import React from 'react';
import { sendEmail } from '../utils/email';

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      eventType: e.target.eventType.value,
      message: e.target.message.value,
    };

    const result = await sendEmail(formData);
    if (result.success) {
      alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');
      e.target.reset();
    } else {
      alert('Ett fel uppstod. Vänligen försök igen eller kontakta oss direkt via telefon.');
    }
  };

  return (
    <section id="contact" className="section-height bg-custom-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-custom-gray-900">
          Kontakta mig
        </h2>
        <div className="max-w-2xl mx-auto bg-black text-white p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-white">Namn</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-gray-600 focus:ring-gray-600"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-white">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-gray-600 focus:ring-gray-600"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-event-type" className="block text-sm font-medium text-white">Typ av Event</label>
              <select
                id="contact-event-type"
                name="eventType"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-gray-600 focus:ring-gray-600"
              >
                <option>Bröllop</option>
                <option>Klubbevent</option>
                <option>Privat Fest</option>
                <option>Annat</option>
              </select>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-white">Meddelande</label>
              <textarea
                rows={6}
                id="contact-message"
                name="message"
                required
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-gray-600 focus:ring-gray-600"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Skicka Meddelande
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;