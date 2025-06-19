import Link from "next/link";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Button } from "@/components/ui/button";
import XiaoErpLogo from "@/components/XiaoErpLogo";
import { useI18n } from "@/app/public/locales/client";

export const Navbar = () => {
  const t = useI18n();
  return (
    <nav className="border-b bg-gray-100 px-2 pb-1.5">
      <div className="grid w-full grid-cols-3 items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Left Navbar */}
        <div className="mr-auto flex hover:cursor-pointer">
          <Link href="/">
            <XiaoErpLogo />
          </Link>
        </div>
        {/* Middle Navbar */}
        <div className="flex justify-center gap-10">
          <div>Menu</div>
          <div>Menu</div>
          <div>Menu</div>
        </div>
        {/* Right Navbar */}
        <div className="flex justify-end gap-0.5">
          <Button className="capitalize" variant="ghost">
            {t("login")}
          </Button>
          <Button className="bg-primary hover:bg-primary/90 mr-6 hover:cursor-pointer">
            Sign Up
          </Button>
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};
