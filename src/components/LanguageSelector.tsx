import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { languages, type Language } from "~/hooks/useLanguageStore";
import Image from "next/image";
import { LanguageFlagImage } from "./LanguageFlagImage";

type Props = {
  selectedLanguage?: Language;
  setSelectedLanguage: (language: Language) => void;
};

export const LanguageSelector = ({
  selectedLanguage,
  setSelectedLanguage,
}: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            <LanguageFlagImage
              flagUrl={selectedLanguage?.flagUrl}
              name={selectedLanguage?.name}
            />
          </span>
          <span className="sm:hidden">
            <Image
              src={
                selectedLanguage?.flagUrl || "https://flagcdn.com/w40/us.png"
              }
              width={40}
              height={20}
              alt={selectedLanguage?.name || "English"}
            />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-zinc-200" align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setSelectedLanguage(language)}
            className="cursor-pointer"
          >
            <span className="mr-2">
              <LanguageFlagImage
                flagUrl={language?.flagUrl}
                name={language?.name}
              />
            </span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
