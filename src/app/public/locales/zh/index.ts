import type { Locales } from "../client";
import { auth } from "./auth";
import { landingPage } from "./landingPage";

const zh: Locales = {
  logo: "小ERP",
  landingPage: landingPage,
  auth: auth,
};

export default zh;
