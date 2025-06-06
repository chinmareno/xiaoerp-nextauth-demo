import { create } from "zustand";
import { languages } from "~/lib/languages";

export type Language = {
  code: string;
  name: string;
  flagUrl: string;
};

type LanguageStore = {
  selectedLanguage?: Language;
  setSelectedLanguage: (language: Language) => void;
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  selectedLanguage: languages[0], // default English
  setSelectedLanguage: (language) => set({ selectedLanguage: language }),
}));

export { languages };
