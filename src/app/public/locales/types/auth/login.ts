export type Login = {
  title: string;
  desc: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  loginButton: string;
  separator: string;
  googleButton: string;
  noAccount: string;
  signUpLink: string;
  error: {
    invalidEmail: string;
    invalidPassword: string;
    invalidCredential: string;
    invalidInput: string;
    uncaughtError: string;
  };
};
