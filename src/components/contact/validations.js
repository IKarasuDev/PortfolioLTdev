export const validateForm = (formData) => {
  let formIsValid = true;
  let errors = {};

  if (!formData.name_user || formData.name_user.length > 25) {
    formIsValid = false;
    errors.name_user = "Name is required and max 25 characters.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email_user || !emailPattern.test(formData.email_user)) {
    formIsValid = false;
    errors.email_user = "Please enter a valid email.";
  }

  if (!formData.subject || formData.subject.length > 25) {
    formIsValid = false;
    errors.subject = "Subject max 25 characters.";
  }

  if (!formData.message) {
    formIsValid = false;
    errors.message = "Message is required.";
  }

  return { formIsValid, errors };
};