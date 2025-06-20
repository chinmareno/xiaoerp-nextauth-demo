"use client";

import {
  Handshake,
  DollarSign,
  FileText,
  Boxes,
  ClipboardList,
  CheckCircle,
  TrendingUp,
  Package,
  Calculator,
} from "lucide-react";

import { ModuleHeader } from "../_component/ModuleHeader";
import { ModuleSummary } from "../_component/ModuleSummary";
import { ModuleVisualFlow } from "../_component/ModuleVisualFlow";
import { ModuleFeatureGrid } from "../_component/ModuleFeatureGrid";
import { ModuleUseCase } from "../_component/ModuleUseCase";
import { ModuleBenefitList } from "../_component/ModuleBenefitList";
import BackHomeButton from "@/components/BackHomeButton";
import { useCurrentLocale } from "@/app/public/locales/client";

const SalesModulePage = () => {
  const features = [
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Customer Management",
      description:
        "Track leads, manage customer relationships, and maintain a centralized database with interaction history.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Quotation & Invoicing",
      description:
        "Generate professional quotes and invoices instantly with auto-filled customer, pricing, and tax details.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Sales Orders",
      description:
        "Convert approved quotations into sales orders with real-time product availability checks.",
    },
    {
      icon: <Boxes className="h-6 w-6" />,
      title: "Order Fulfillment",
      description:
        "Track the order lifecycle from placement to delivery, integrated with inventory and logistics.",
    },
  ];

  const benefits = [
    "Accelerates the sales cycle with automation",
    "Reduces manual errors in quotes and invoices",
    "Provides visibility into lead-to-cash pipeline",
    "Integrates seamlessly with Inventory and Accounting",
    "Improves customer satisfaction with timely follow-ups",
  ];

  const locale = useCurrentLocale();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <ModuleHeader
          icon={<TrendingUp className="h-8 w-8 text-white" />}
          title="Sales Module"
          subtitle="Manage the entire sales lifecycle from lead to revenue—intuitively and efficiently"
          backgroundColor="bg-teal-600"
        />

        {/* Summary */}
        <ModuleSummary
          title="What Our Sales Module Delivers"
          description="The Sales Module simplifies everything from lead generation and quote creation to final delivery and invoicing. By automating key touchpoints and integrating tightly with inventory and accounting, it eliminates redundant processes and lets your team focus on closing deals faster."
        />

        {/* Visual Workflow */}
        <ModuleVisualFlow title="From Lead to Ledger">
          <ModuleVisualFlow.Before>
            <ModuleVisualFlow.Item
              icon={<ClipboardList className="h-8 w-8" />}
              title="CRM"
              description="Lead & Contact"
            />
            <ModuleVisualFlow.Item
              icon={<CheckCircle className="h-8 w-8" />}
              title="Qualification"
              description="Needs & Budget"
            />
          </ModuleVisualFlow.Before>

          <ModuleVisualFlow.Center
            icon={<TrendingUp className="h-6 w-6" />}
            title="Sales Module"
            description="Quoting & Orders"
            cardBorderColor="border-teal-200"
            cardBackgroundColor="bg-teal-50"
            iconBackgroundColor="bg-teal-600"
            iconColor="text-white"
          />

          <ModuleVisualFlow.After>
            <ModuleVisualFlow.Item
              icon={<Package className="h-8 w-8" />}
              title="Inventory Module"
              description="Stock allocation"
            />
            <ModuleVisualFlow.Item
              icon={<Calculator className="h-8 w-8" />}
              title="Accounting Module"
              description="Invoice, revenue"
            />
          </ModuleVisualFlow.After>
        </ModuleVisualFlow>

        {/* Feature Grid */}
        <ModuleFeatureGrid
          title="Core Features That Drive Sales"
          features={features}
          iconBackgroundColor="bg-teal-100"
          iconColor="text-teal-600"
        />

        {/* Use Case */}
        <ModuleUseCase
          title="See It Live: Closing Deals, Effortlessly"
          description="A new customer inquires through your CRM. Within minutes, your sales rep creates a tailored quote and emails it with a single click. The customer accepts, and the system converts it to a Sales Order. Inventory updates in real-time, the invoice is auto-generated, and your Accounting Module logs the revenue. Zero delays. Just streamlined selling."
          gradientFrom="from-teal-600"
          gradientTo="to-teal-700"
        />

        {/* Benefits */}
        <ModuleBenefitList
          title="Benefits You Can Count On"
          benefits={benefits}
        />

        {/* Back Home */}
        <BackHomeButton locale={locale} />
      </div>
    </div>
  );
};

export default SalesModulePage;
