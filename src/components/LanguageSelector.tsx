import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "~/components/ui/menubar";
import { Globe } from "lucide-react";
import { languages, type Language } from "~/hooks/useLanguageStore";
import { Button } from "./ui/button";

type Props = {
  selectedLanguage?: Language;
  setSelectedLanguage: (language: Language) => void;
};

export const LanguageSelector = ({
  selectedLanguage,
  setSelectedLanguage,
}: Props) => {
  return (
    <Menubar className="border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger asChild>
          <Button className="gap-2 rounded-full border-none bg-transparent text-black shadow-none hover:cursor-pointer hover:bg-zinc-200">
            <Globe />
            {selectedLanguage?.code}
          </Button>
        </MenubarTrigger>
        <MenubarContent align="end">
          {languages.map((language, index) => (
            <>
              <MenubarItem
                key={language.code + index}
                className="hover:cursor-pointer"
                onClick={() => {
                  setSelectedLanguage(language);
                }}
              >
                {language.name}
              </MenubarItem>
              <MenubarSeparator className="last:hidden" />
            </>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
