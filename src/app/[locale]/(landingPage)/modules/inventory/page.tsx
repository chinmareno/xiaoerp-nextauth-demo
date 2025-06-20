"use client";

import {
  Package,
  TrendingUp,
  FileText,
  Calculator,
  ShoppingCart,
  PieChart,
  Boxes,
  CheckCheck,
} from "lucide-react";
import { useCurrentLocale } from "@/app/public/locales/client";
import { ModuleHeader } from "../_component/ModuleHeader";
import { ModuleSummary } from "../_component/ModuleSummary";
import { ModuleVisualFlow } from "../_component/ModuleVisualFlow";
import { ModuleFeatureGrid } from "../_component/ModuleFeatureGrid";
import { ModuleUseCase } from "../_component/ModuleUseCase";
import { ModuleBenefitList } from "../_component/ModuleBenefitList";
import BackHomeButton from "@/components/BackHomeButton";

const InventoryModulePage = () => {
  const features = [
    {
      icon: <Boxes className="h-6 w-6" />,
      title: "Stock Management",
      description:
        "Real-time tracking of stock levels, automated reorder alerts, and SKU categorization for efficient warehouse operations.",
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Purchase Orders",
      description:
        "Generate and manage purchase orders with supplier tracking, delivery status updates, and budget control.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Sales Sync",
      description:
        "Inventory automatically updates with each sale to avoid over-selling and maintain accurate counts.",
    },
    {
      icon: <CheckCheck className="h-6 w-6" />,
      title: "Stock Audits",
      description:
        "Simplify auditing processes with digital stocktake tools and discrepancy reports for accurate reconciliation.",
    },
  ];

  const benefits = [
    "Avoid stockouts and overstock with real-time tracking",
    "Automated purchasing ensures optimal inventory levels",
    "Integrated with sales and accounting for seamless flow",
    "Minimize shrinkage with audit-ready reports",
    "Streamline supplier communications and purchase approvals",
  ];

  const locale = useCurrentLocale();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <ModuleHeader
          icon={<Package className="h-8 w-8 text-white" />}
          title="Inventory Module"
          subtitle="Manage stock effortlessly with automation and accuracy"
          backgroundColor="bg-amber-700"
        />

        {/* Summary */}
        <ModuleSummary
          title="What Our Inventory Module Does"
          description="The Inventory Module keeps your warehouse in sync with your sales and purchasing teams. With real-time updates, low-stock alerts, and a clear overview of your items, you can confidently fulfill orders without worrying about stock discrepancies."
        />

        {/* Visual Workflow */}
        <ModuleVisualFlow title="Integrated Workflow">
          <ModuleVisualFlow.Before>
            <ModuleVisualFlow.Item
              icon={<TrendingUp className="h-8 w-8" />}
              title="Sales Module"
              description="Triggers stock movement"
            />
            <ModuleVisualFlow.Item
              icon={<ShoppingCart className="h-8 w-8" />}
              title="Purchase Module"
              description="Feeds in purchase order data"
            />
          </ModuleVisualFlow.Before>

          <ModuleVisualFlow.Center
            icon={<Package className="h-6 w-6" />}
            title="Inventory Module"
            description="Stock Brain"
            cardBorderColor="border-amber-200"
            cardBackgroundColor="bg-amber-50"
            iconBackgroundColor="bg-amber-700"
            iconColor="text-white"
          />

          <ModuleVisualFlow.After>
            <ModuleVisualFlow.Item
              icon={<Calculator className="h-8 w-8" />}
              title="Accounting Module"
              description="Tracks financial impact"
            />
            <ModuleVisualFlow.Item
              icon={<PieChart className="h-8 w-8" />}
              title="Reports Module"
              description="Generates audit and stock reports"
            />
          </ModuleVisualFlow.After>
        </ModuleVisualFlow>

        {/* Feature Grid */}
        <ModuleFeatureGrid
          title="Key Inventory Features"
          features={features}
          iconBackgroundColor="bg-amber-100"
          iconColor="text-amber-700"
        />

        {/* Use Case */}
        <ModuleUseCase
          title="Real-World Example"
          description="Imagine your sales team finalizes a bulk order of 500 units. Instantly, the Inventory Module updates stock levels and flags a low-stock warning. Meanwhile, a purchase order is auto-generated for the procurement team, who can then confirm restocking with one click. As items arrive and are logged in, stock levels sync across sales and accounting — all without spreadsheets or manual entries. That’s automation working where it matters most."
          gradientFrom="from-amber-600"
          gradientTo="to-amber-700"
        />

        {/* Benefits */}
        <ModuleBenefitList
          title="Why Inventory Management Matters"
          benefits={benefits}
        />

        {/* Back Home Button */}
        <BackHomeButton locale={locale} />
      </div>
    </div>
  );
};

export default InventoryModulePage;
