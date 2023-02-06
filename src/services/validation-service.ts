export const validateEmail = (email: string) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return email?.match(isValidEmail);
};
