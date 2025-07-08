export type Signup = {
  title: string;
  desc: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  confirmPasswordLabel: string;
  confirmPasswordPlaceholder: string;
  passwordRequirement: {
    oneUpperCase: string;
    oneLowerCase: string;
    includeNumber: string;
    minChar: string;
  };
  signupButton: string;
  separator: string;
  googleButton: string;
  haveAccount: string;
  loginLink: string;
  accountCreated: string;
  accountCreatedLogin: string;
  error: {
    invalidEmail: string;
    emailExist: string;
    invalidPassword: string;
    invalidConfirmPassword: string;
    uncaughtError: string;
  };
};
