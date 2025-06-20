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
          <Button className="capitalize" variant="ghost">
            {t("login")}
          </Button>
          <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};
