import { LanguageSelector } from "~/components/LanguageSelector";
import { Button } from "~/components/ui/button";
import { useLanguageStore } from "~/hooks/useLanguageStore";

export const Navbar = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguageStore();

  return (
    <nav className="border-border sticky top-0 z-50 border-b bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-primary text-2xl font-bold">Xiao ERP</h1>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
            <Button variant="outline" className="hidden sm:inline-flex">
              Login
            </Button>
            <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
