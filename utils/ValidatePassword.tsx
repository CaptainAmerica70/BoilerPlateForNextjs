export const validatePassword = ({ password, confirmPassword }: any) => {
  if (password.length < 8) {
    return { error: 'Password must be at least 8 characters long.' };
  } else if (!/[A-Z]/.test(password)) {
    return { error: 'Password must contain at least 1 uppercase letter.' };
  } else if (!/[a-z]/.test(password)) {
    return { error: 'Password must contain at least 1 lowercase letter.' };
  } else if (!/[0-9]/.test(password)) {
    return { error: 'Password must contain at least 1 digit.' };
  } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    return { error: 'Password must contain at least 1 special character.' };
  } else if (password !== confirmPassword) {
    return { error: 'Passwords do not match.' };
  } else {
    return { password };
  }
};
