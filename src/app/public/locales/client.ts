"use client";
import { createI18nClient } from "next-international/client";
import type { LandingPage } from "./types/landingPage";
import type { Auth } from "./types/auth";

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
} = createI18nClient({
  en: () => import("./en"),
  zh: () => import("./zh"),
  id: () => import("./id"),
});

export type TitleDesc = {
  title: string;
  desc: string;
};

export type Locales = {
  logo: string;
  landingPage: LandingPage;
  auth: Auth;
};
