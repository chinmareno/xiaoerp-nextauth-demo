import { LanguageSelector } from "~/components/LanguageSelector";
import { Button } from "~/components/ui/button";
import { HideOnScrollWrapper } from "~/components/wrapper/HideOnScrollWrapper";
import XiaoErpLogo from "~/components/XiaoErpLogo";
import { useLanguageStore } from "~/hooks/useLanguageStore";

export const Navbar = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguageStore();

  return (
    <HideOnScrollWrapper>
      <nav className="border-b bg-gray-100">
        <div className="grid w-full grid-cols-3 items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          {/* Left Navbar */}
          <div>
            <button className="flex bg-amber-400 hover:cursor-pointer">
              <XiaoErpLogo />
            </button>
          </div>
          {/* Middle Navbar */}
          <div className="bg-bekgron flex justify-center gap-10">
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
          </div>
          {/* Right Navbar */}
          <div className="flex justify-end">
            <Button
              variant="outline"
              className="hidden hover:cursor-pointer sm:inline-flex"
            >
              Login
            </Button>
            <Button className="bg-primary hover:bg-primary/90 mr-6 hover:cursor-pointer">
              Sign Up
            </Button>
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
          </div>
        </div>
      </nav>
    </HideOnScrollWrapper>
  );
};
