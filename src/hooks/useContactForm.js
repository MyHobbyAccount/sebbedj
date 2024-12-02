import { useCallback, useState } from 'react';
import { sendEmail } from '../utils/email';

export const useContactForm = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
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

    const result = await sendEmail(formData);
    if (result.success) {
      alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');
      e.target.reset();
      setRecaptchaValue(null);
    } else {
      alert('Ett fel uppstod. Vänligen försök igen eller kontakta oss direkt via telefon.');
    }
  }, []);

  return { handleSubmit, setRecaptchaValue };
};