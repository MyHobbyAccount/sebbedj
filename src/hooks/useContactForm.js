import { useCallback } from 'react';
import { sendEmail } from '../utils/email';

export const useContactForm = () => {
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const result = await sendEmail(formData);
    if (result.success) {
      alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');
      e.target.reset();
    } else {
      alert('Ett fel uppstod. Vänligen försök igen eller kontakta oss direkt via telefon.');
    }
  }, []);

  return { handleSubmit };
};