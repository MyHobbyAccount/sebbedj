import emailjs from '@emailjs/browser';
import { handleGlobalError } from './errorHandling';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (formData) => {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.error('EmailJS configuration is missing');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formData,
      EMAILJS_PUBLIC_KEY
    );
    return { success: true, response };
  } catch (error) {
    return handleGlobalError(error);
  }
};