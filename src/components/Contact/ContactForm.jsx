import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useContactForm } from '../../hooks/useContactForm';
import { RECAPTCHA_CONFIG } from '../../config/recaptcha';
import ContactInput from './ContactInput';
import ContactTextArea from './ContactTextArea';

const ContactForm = () => {
  const { handleSubmit, setRecaptchaValue } = useContactForm();

  return (
    <section id="contact" className="section-height animated-bg py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 neon-text">
          Kontakta mig
        </h2>
        <div className="max-w-2xl mx-auto neon-box p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContactInput
                id="contact-name"
                name="name"
                label="Namn"
                type="text"
                autoComplete="name"
              />
              <ContactInput
                id="contact-email"
                name="email"
                label="Email"
                type="email"
                autoComplete="email"
              />
            </div>
            <ContactTextArea
              id="contact-message"
              name="message"
              label="Meddelande"
              rows={6}
            />
            <div className="flex justify-center mb-6">
              {RECAPTCHA_CONFIG.siteKey && (
                <ReCAPTCHA
                  sitekey={RECAPTCHA_CONFIG.siteKey}
                  onChange={setRecaptchaValue}
                  theme={RECAPTCHA_CONFIG.theme}
                />
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="neon-button px-8 py-3 text-lg"
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