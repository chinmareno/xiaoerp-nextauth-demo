import { useScopedI18n } from "@/app/public/locales/client";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const scopedT = useScopedI18n("landingPage.footer");

  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid md:grid-cols-4">
          <div>
            <h3 className="text-foreground mb-4 text-lg font-semibold">
              {scopedT("xiaoErp.title")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {scopedT("xiaoErp.desc")}
            </p>
          </div>

          <div>
            <h4 className="text-foreground mb-4 font-semibold">
              {scopedT("modules.title")}
            </h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {scopedT("modules.accounting")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {scopedT("modules.inventory")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {scopedT("modules.purchasing")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {scopedT("modules.sales")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground mb-4 font-semibold">
              {scopedT("support.title")}
            </h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {scopedT("support.documentation")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {scopedT("support.help")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {scopedT("support.contactUs")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground mb-4 font-semibold">
              {scopedT("company.title")}
            </h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {scopedT("company.aboutUs")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {scopedT("company.pricing")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {scopedT("company.privacyPolicy")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {scopedT("company.termsOfService")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="text-muted-foreground flex flex-col items-center justify-between text-center text-sm md:flex-row">
          <p>&copy; 2024 XiaoERP. {scopedT("allRightReserved")}</p>
          <p className="mt-2 md:mt-0">
            {scopedT("availableIn")} English, 中文, & Bahasa Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};
