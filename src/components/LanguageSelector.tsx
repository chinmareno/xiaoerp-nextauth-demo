"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import { useChangeLocale, useCurrentLocale } from "@/app/public/locales/client";

export const LanguageSelector = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const languages = [
    { code: "en", name: "English" },
    { code: "zh", name: "中文" },
    { code: "id", name: "Bahasa Indonesia" },
  ] as const;

  return (
    <Menubar className="border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger asChild>
          <Button className="gap-2 rounded-full border-none bg-transparent text-black shadow-none hover:cursor-pointer hover:bg-zinc-200">
            <Globe />
            {locale}
          </Button>
        </MenubarTrigger>
        <MenubarContent>
          {languages.map((language, index) => (
            <div key={language.code + index}>
              <MenubarItem
                key={language.code + index}
                className="hover:cursor-pointer"
                onClick={() => {
                  changeLocale(language.code);
                }}
              >
                {language.name}
              </MenubarItem>
              <MenubarSeparator className="last:hidden" />
            </div>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
