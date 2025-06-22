"use client";

import Link from "next/link";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Button } from "@/components/ui/button";
import XiaoErpLogo from "@/components/XiaoErpLogo";
import { useI18n } from "@/app/public/locales/client";

export const DesktopNavbar = () => {
  const t = useI18n();

  return (
    <nav className="border-b bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-3.5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <XiaoErpLogo />
        </Link>

        <div className="hidden items-center gap-2 sm:flex">
          <Button asChild className="capitalize" variant="ghost">
            <Link href={"/login"}>{t("landingPage.navbar.login")}</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href={"/signup"}>{t("landingPage.navbar.signup")}</Link>
          </Button>
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};
