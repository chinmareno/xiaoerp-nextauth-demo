import type { Locales } from "../client";
import { auth } from "./auth";
import { landingPage } from "./landingPage";

const en: Locales = {
  logo: "Xiao ERP",
  landingPage: landingPage,
  auth: auth,
};

export default en;
