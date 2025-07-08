import type { Login } from "./login";
import type { Signup } from "./signup";

export type Auth = {
  login: Login;
  signup: Signup;
};
