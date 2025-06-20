"use client";

import {
  ClipboardList,
  FileText,
  DollarSign,
  CheckCircle,
  ShoppingCart,
  Warehouse,
  Package,
  Calculator,
} from "lucide-react";
import { useCurrentLocale } from "@/app/public/locales/client";
import { ModuleHeader } from "../_component/ModuleHeader";
import { ModuleSummary } from "../_component/ModuleSummary";
import { ModuleVisualFlow } from "../_component/ModuleVisualFlow";
import { ModuleFeatureGrid } from "../_component/ModuleFeatureGrid";
import { ModuleUseCase } from "../_component/ModuleUseCase";
import { ModuleBenefitList } from "../_component/ModuleBenefitList";
import BackHomeButton from "@/components/BackHomeButton";

const PurchasingModulePage = () => {
  const features = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Purchase Requests",
      description:
        "Team members can create PRs that route through approval workflows automatically.",
    },
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: "Vendor Comparison",
      description:
        "Evaluate vendors by pricing, delivery time, and past performance before issuing POs.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Purchase Orders",
      description:
        "Generate POs directly from approved requests with built-in budget validation.",
    },
    {
      icon: <Warehouse className="h-6 w-6" />,
      title: "Receiving & Reconciliation",
      description:
        "Match goods received with POs and invoices automatically, flagging discrepancies.",
    },
  ];

  const benefits = [
    "Reduces unauthorized or duplicate purchases",
    "Centralizes procurement data and vendor history",
    "Auto-updates inventory and accounting records",
    "Improves negotiation with vendor performance tracking",
    "Ensures audit-compliant purchasing workflows",
  ];

  const locale = useCurrentLocale();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <ModuleHeader
          icon={<ShoppingCart className="h-8 w-8 text-white" />}
          title="Purchasing Module"
          subtitle="Gain control and visibility over every business purchase"
          backgroundColor="bg-indigo-700"
        />

        {/* Summary */}
        <ModuleSummary
          title="Streamline All Procurement Activities"
          description="The Purchasing Module ensures that every purchase made is tracked, approved, and reconciled with your accounting system. From purchase requests to vendor evaluation and goods receipt, your team can eliminate delays, minimize errors, and optimize cash flow."
        />

        {/* Visual Workflow */}
        <ModuleVisualFlow title="Connected Procurement Workflow">
          <ModuleVisualFlow.Before>
            <ModuleVisualFlow.Item
              icon={<ClipboardList className="h-8 w-8" />}
              title="Purchase Request"
              description="Submitted by Department"
            />
            <ModuleVisualFlow.Item
              icon={<CheckCircle className="h-8 w-8" />}
              title="Approval Workflow"
              description="Manager or Finance"
            />
          </ModuleVisualFlow.Before>

          <ModuleVisualFlow.Center
            icon={<ShoppingCart className="h-6 w-6" />}
            title="Purchasing Module"
            description="Central Hub for PO & Vendor"
            cardBorderColor="border-indigo-200"
            cardBackgroundColor="bg-indigo-50"
            iconBackgroundColor="bg-indigo-700"
            iconColor="text-white"
          />

          <ModuleVisualFlow.After>
            <ModuleVisualFlow.Item
              icon={<Package className="h-8 w-8" />}
              title="Inventory Update"
              description="Goods Received & Stored"
            />
            <ModuleVisualFlow.Item
              icon={<Calculator className="h-8 w-8" />}
              title="Accounting Module"
              description="Invoice & Payment Processed"
            />
          </ModuleVisualFlow.After>
        </ModuleVisualFlow>

        {/* Feature Grid */}
        <ModuleFeatureGrid
          title="Key Capabilities for Efficient Procurement"
          features={features}
          iconBackgroundColor="bg-indigo-100"
          iconColor="text-indigo-700"
        />

        {/* Use Case */}
        <ModuleUseCase
          title="Real Example: PR to PO to Payment"
          description="A department requests 200 office chairs. The PR is auto-routed to the procurement manager, who compares vendor quotes. After approval, a PO is issued. When the goods arrive, they're marked as received in Inventory, and the invoice is matched automatically by the Accounting Module — all tracked in one place."
          gradientFrom="from-indigo-600"
          gradientTo="to-indigo-700"
        />

        {/* Benefits */}
        <ModuleBenefitList
          title="Bring Clarity and Control to Your Spending"
          benefits={benefits}
        />

        {/* Back Home Button */}
        <BackHomeButton locale={locale} />
      </div>
    </div>
  );
};

export default PurchasingModulePage;
