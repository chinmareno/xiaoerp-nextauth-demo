"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import XiaoErpLogo from "@/components/XiaoErpLogo";
import {
  useChangeLocale,
  useCurrentLocale,
  useI18n,
} from "@/app/public/locales/client";
import { Menu, X } from "lucide-react";

export const MobileNavbar = () => {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const [isOpen, setIsOpen] = useState(false);
  const languages = [
    { code: "en", name: "English" },
    { code: "zh", name: "中文" },
    { code: "id", name: "Bahasa Indonesia" },
  ] as const;

  return (
    <nav className="border-b bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-3.5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <XiaoErpLogo />
        </Link>

        {/* Hamburger Menu*/}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-200 focus:outline-none sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu */}
      {isOpen && (
        <div className="mt-2 flex flex-col items-start gap-4 rounded-lg bg-white p-4 shadow-md sm:hidden">
          <Button className="w-full justify-start capitalize" variant="ghost">
            {t("login")}
          </Button>
          <Button className="bg-primary hover:bg-primary/90 w-full justify-start">
            Sign Up
          </Button>
          <div className="flex w-full justify-center border-t-2 pt-2">
            {
              languages.find((lang) => (lang.code === locale ? true : false))
                ?.name
            }
          </div>
          <div className="flex w-full justify-around">
            {languages.map((language, i) => (
              <Button
                key={i}
                onClick={() => changeLocale(language.code)}
                variant="ghost"
                className={
                  locale === language.code ? "font-bold underline" : ""
                }
              >
                {language.code}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
