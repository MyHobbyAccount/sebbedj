import emailjs from '@emailjs/browser';
import { handleGlobalError } from './errorHandling';
import { EMAIL_CONFIG } from '../config/email';

const getEmailConfig = () => {
  const config = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  };

  if (!config.serviceId || !config.templateId || !config.publicKey) {
    throw new Error('Please configure EmailJS environment variables');
  }

  return config;
};

export const sendEmail = async (formData) => {
  try {
    const { serviceId, templateId, publicKey } = getEmailConfig();
    
    const emailData = {
      ...formData,
      to_email: EMAIL_CONFIG.recipient,
      subject: formData.service 
        ? EMAIL_CONFIG.templates.booking.subject 
        : EMAIL_CONFIG.templates.contact.subject,
      reply_to: formData.email
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      emailData,
      publicKey
    );
    return { success: true, response };
  } catch (error) {
    const errorMessage = error.message.includes('configure EmailJS')
      ? 'Email service not configured. Please contact the administrator.'
      : 'An error occurred while sending the email. Please try again.';
    
    return handleGlobalError(error, errorMessage);
  }
};