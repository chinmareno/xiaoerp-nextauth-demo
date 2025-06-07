import {
  Calculator,
  Package,
  ShoppingCart,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const modules = [
  {
    title: "Accounting",
    description:
      "Complete financial management with automated bookkeeping, invoicing, and reporting.",
    icon: Calculator,
    features: [
      "General Ledger",
      "Accounts Payable/Receivable",
      "Financial Reports",
      "Tax Management",
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Inventory Manager",
    description:
      "Real-time inventory tracking with automated stock alerts and warehouse management.",
    icon: Package,
    features: [
      "Stock Tracking",
      "Warehouse Management",
      "Low Stock Alerts",
      "Product Catalog",
    ],
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Purchasing",
    description:
      "Streamlined procurement process from vendor management to purchase orders.",
    icon: ShoppingCart,
    features: [
      "Vendor Management",
      "Purchase Orders",
      "Supplier Evaluation",
      "Cost Analysis",
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Sales",
    description:
      "Complete sales pipeline management with CRM integration and performance analytics.",
    icon: TrendingUp,
    features: [
      "Lead Management",
      "Quote Generation",
      "Sales Analytics",
      "Customer Portal",
    ],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

export const ModulesOverview = () => {
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
          {modules.map((module, index) => (
            <Card
              key={index}
              className="group border-border flex bg-amber-300 pb-11 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div
                  className={`h-12 w-12 rounded-lg ${module.bgColor} mb-4 flex items-center justify-center`}
                >
                  <module.icon className={`h-6 w-6 ${module.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {module.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-muted-foreground flex items-center text-sm"
                    >
                      <ArrowRight className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <Button
                variant="outline"
                className="mt-auto w-11/12 self-center bg-black text-white transition-colors hover:cursor-pointer hover:bg-black/85 hover:text-white"
              >
                Learn More
              </Button>
            </Card>
          ))}
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
