"use client";
import { createI18nClient } from "next-international/client";

type ModuleOverviewCard = {
  title: string;
  desc: string;
  features: Record<number, string>;
};
export type Locales = {
  login: string;
  logo: string;
  hero1: string;
  hero2: string;
  hero3: string;
  herotrial: string;
  herodemo: string;
  herocardtitle1: string;
  herocarddesc1: string;
  herocardtitle2: string;
  herocarddesc2: string;
  herocardtitle3: string;
  herocarddesc3: string;
  moduleoverviewtitle: string;
  moduleoverviewdesc: string;
  modulesoverviewcards: Record<string, ModuleOverviewCard>;
};

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
