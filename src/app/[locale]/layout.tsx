import type { ReactElement } from "react";
import { I18nProviderClient } from "../public/locales/client";

const RootLayout = async ({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactElement;
}) => {
  const { locale } = await params;

  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
};

export default RootLayout;
