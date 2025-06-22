import type { ReactElement } from "react";
import { I18nProviderClient } from "../public/locales/client";
import { notFound } from "next/navigation";

const RootLayout = async ({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactElement;
}) => {
  const { locale } = await params;
  const availableLocale = ["en", "zh", "id"];

  if (!availableLocale.includes(locale)) {
    notFound();
  }

  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
};

export default RootLayout;
