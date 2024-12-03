import { useState } from 'react';
import { sendEmail } from '../utils/email';
import { validateForm } from '../utils/forms/validation';

export const useContactForm = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    if (!recaptchaValue) {
      alert('Vänligen verifiera att du är människa');
      return;
    }

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      recaptchaToken: recaptchaValue
    };

    const { isValid, errors } = validateForm(formData);
    
    if (!isValid) {
      alert(Object.values(errors).join('\n'));
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');
        e.target.reset();
        setRecaptchaValue(null);
      } else {
        alert('Ett fel uppstod. Vänligen försök igen eller kontakta oss direkt via telefon.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Ett fel uppstod. Vänligen försök igen eller kontakta oss direkt via telefon.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, setRecaptchaValue, isSubmitting };
};