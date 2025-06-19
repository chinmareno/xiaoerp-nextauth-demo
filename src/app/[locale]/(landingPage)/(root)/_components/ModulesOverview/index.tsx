import {
  Package,
  ShoppingCart,
  TrendingUp,
  ArrowRight,
  Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ModulesOverviewCard from "./ModulesOverviewCard";
import { useScopedI18n } from "@/app/public/locales/client";

export const ModulesOverview = () => {
  const scopedT = useScopedI18n("modulesoverviewcards");

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
            Complete ERP Modules
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Everything your business needs in one integrated platform. Each
            module works seamlessly together.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <ModulesOverviewCard
            description={scopedT("accounting.desc")}
            features={scopedT("accounting.features")}
            icon={<Calculator />}
            iconClassName=""
            title={scopedT("accounting.title")}
          />
          <ModulesOverviewCard
            description={scopedT("inventory.desc")}
            features={scopedT("inventory.features")}
            icon={<Package />}
            iconClassName=""
            title={scopedT("inventory.title")}
          />
          <ModulesOverviewCard
            description={scopedT("purchasing.desc")}
            features={scopedT("purchasing.features")}
            icon={<ShoppingCart />}
            iconClassName=""
            title={scopedT("purchasing.title")}
          />
          <ModulesOverviewCard
            description={scopedT("sales.desc")}
            features={scopedT("sales.features")}
            icon={<TrendingUp />}
            iconClassName=""
            title={scopedT("sales.title")}
          />
        </div>

        <div className="text-center">
          <div className="from-primary/10 to-secondary/10 mx-auto max-w-4xl rounded-2xl bg-gradient-to-r p-8">
            <h3 className="text-foreground mb-4 text-2xl font-bold">
              All Modules. One Platform. Unlimited Possibilities.
            </h3>
            <p className="text-muted-foreground mb-6">
              Start with any module and scale your business with our integrated
              ERP solution.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 hover:cursor-pointer"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
