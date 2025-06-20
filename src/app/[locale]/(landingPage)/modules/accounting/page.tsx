"use client";

import {
  Calculator,
  TrendingUp,
  PieChart,
  Receipt,
  CreditCard,
  Building2,
  Package,
  DollarSign,
} from "lucide-react";
import { useCurrentLocale } from "@/app/public/locales/client";
import { ModuleHeader } from "../_component/ModuleHeader";
import { ModuleSummary } from "../_component/ModuleSummary";
import { ModuleVisualFlow } from "../_component/ModuleVisualFlow";
import { ModuleFeatureGrid } from "../_component/ModuleFeatureGrid";
import { ModuleUseCase } from "../_component/ModuleUseCase";
import { ModuleBenefitList } from "../_component/ModuleBenefitList";
import BackHomeButton from "@/components/BackHomeButton";

const AccountingModulePage = () => {
  const features = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "General Ledger",
      description:
        "Comprehensive tracking of every financial transaction with automated categorization and real-time balance updates.",
    },
    {
      icon: <Receipt className="h-6 w-6" />,
      title: "Accounts Payable/Receivable",
      description:
        "Streamlined management of bills and invoices with automated payment reminders and aging reports.",
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Financial Reports",
      description:
        "Auto-generated balance sheets, P&L statements, and cash flow reports with customizable date ranges and formats.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Tax Management",
      description:
        "Automated tax calculations, compliance tracking, and seamless integration with popular tax software.",
    },
  ];

  const benefits = [
    "Eliminates manual data entry and reduces human error",
    "Maintains audit-ready bookkeeping with complete transaction trails",
    "Real-time synchronization with sales and inventory modules",
    "Ensures local tax compliance with automatic updates",
    "One-click report export to Excel, PDF, or accounting software",
  ];

  const locale = useCurrentLocale();

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <ModuleHeader
        icon={<Calculator className="h-8 w-8 text-white" />}
        title="Accounting Module"
        subtitle="Streamline your financial operations with intelligent automation"
        backgroundColor="bg-blue-600"
      />

      {/* Summary Section */}
      <ModuleSummary
        title="What Our Accounting Module Does"
        description="Our Accounting Module automates bookkeeping, invoicing, and financial reporting so you can focus on growing your business. By seamlessly integrating with your sales, inventory, and operations data, it eliminates manual data entry while ensuring 100% accuracy in your financial records. From transaction recording to tax compliance, everything happens automatically in the background."
      />

      {/* Visual Work Flow */}
      <ModuleVisualFlow title="Seamless Integration Across Departments">
        <ModuleVisualFlow.Before>
          <ModuleVisualFlow.Item
            icon={<TrendingUp className="h-8 w-8" />}
            title="Sales Module"
            description="Generates invoices and updates receivables"
          />
          <ModuleVisualFlow.Item
            icon={<Package className="h-8 w-8" />}
            title="Inventory Module"
            description="Provides cost of goods and stock updates"
          />
        </ModuleVisualFlow.Before>

        <ModuleVisualFlow.Center
          icon={<Calculator className="h-6 w-6" />}
          title="Accounting Module"
          description="Centralized financial control"
          cardBorderColor="border-blue-200"
          cardBackgroundColor="bg-blue-50"
          iconBackgroundColor="bg-blue-600"
          iconColor="text-white"
        />
        <ModuleVisualFlow.After>
          <ModuleVisualFlow.Item
            icon={<CreditCard className="h-8 w-8" />}
            title="Expenses Module"
            description="Sends cost data from HR/Ops"
          />
          <ModuleVisualFlow.Item
            icon={<PieChart className="h-8 w-8" />}
            title="Reports Module"
            description="Auto-generated from accounting data"
          />
        </ModuleVisualFlow.After>
      </ModuleVisualFlow>

      {/* Feature Highlights */}
      <ModuleFeatureGrid
        title="Key Inventory Features"
        features={features}
        iconBackgroundColor="bg-blue-100"
        iconColor="text-blue-600"
      />
      {/* Use Case Section */}
      <ModuleUseCase
        title="Real-World Example"
        description="Imagine your sales team closes a $15,000 deal. As soon as they hit 'confirm' in the Sales Module, an invoice is automatically created and sent to the customer. Behind the scenes, the Accounting Module logs the transaction, applies the correct tax rules, and updates your receivables. Once payment is received, it’s matched to the invoice and reflected instantly in your cash flow. At month-end, your financial reports already include this transaction — no manual work required. That’s how true integration saves time and eliminates errors."
        gradientFrom="from-blue-600"
        gradientTo="to-indigo-700"
      />

      {/* Benefits Section */}
      <ModuleBenefitList
        title="Transform Your Financial Operations"
        benefits={benefits}
      />

      {/* Back Home Button */}
      <BackHomeButton locale={locale} />
    </div>
  );
};

export default AccountingModulePage;
