import emailjs from '@emailjs/browser';

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;

const useEmailJs = () => {
  const sendEmail = async (templateId, templateParams) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await emailjs.send(
        SERVICE_ID,
        templateId,
        templateParams,
        PUBLIC_KEY
      );

      console.log('EmailJS response:', response);
      return { success: true };
    } catch (error) {
      console.error('Failed to send email:', error);
      return {
        success: false,
        error: error
      };
    }
  };

  return { sendEmail };
};

export default useEmailJs;
