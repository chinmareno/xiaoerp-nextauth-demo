import { Separator } from "~/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-foreground mb-4 text-lg font-semibold">
              SmartERP
            </h3>
            <p className="text-muted-foreground text-sm">
              Comprehensive ERP solution designed for small businesses to
              streamline operations and drive growth.
            </p>
          </div>

          <div>
            <h4 className="text-foreground mb-4 font-semibold">Modules</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Accounting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Inventory Manager
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Purchasing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sales
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground mb-4 font-semibold">Support</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  System Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground mb-4 font-semibold">Company</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="text-muted-foreground flex flex-col items-center justify-between text-sm md:flex-row">
          <p>&copy; 2024 SmartERP. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Available in English, 中文, and Bahasa Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};
