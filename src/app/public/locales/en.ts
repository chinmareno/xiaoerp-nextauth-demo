import type { Locales } from "./client";

export default {
  login: "login",
  logo: "Xiao ERP",
  hero1: "Streamline Your Business with",
  hero2: "Smart ERP Solution",
  hero3:
    "Integrate accounting, inventory, purchasing, and sales in one powerful platform. Built for small businesses, designed for growth.",
  herotrial: "Start Free Trial",
  herodemo: "Watch Demo",
  herocardtitle1: "Secure & Reliable",
  herocarddesc1:
    "Enterprise-grade security for your business data in indo and chinese",
  herocardtitle2: "Ultra Fast",
  herocarddesc2: "Optimized performance for seamless workflows",
  herocardtitle3: "Team Collaboration",
  herocarddesc3: "Built for teams to work together efficiently",
  moduleoverviewtitle: "Complete ERP Modules",
  moduleoverviewdesc:
    "Everything your business needs in one integrated platform. Each module works seamlessly together.",
  modulesoverviewcards: {
    accounting: {
      title: "Accounting",
      desc: "Complete financial management with automated bookkeeping, invoicing, and reporting.",
      features: {
        1: "General Ledger",
        2: "Accounts Payable/Receivable",
        3: "Financial Reports",
        4: "Tax Management",
      },
    },
    inventory: {
      title: "Inventory",
      desc: "Real-time inventory tracking with automated stock alerts and warehouse management.",
      features: {
        1: "Stock Tracking",
        2: "Warehouse Management",
        3: "Low Stock Alerts",
        4: "Product Catalog",
      },
    },
    purchasing: {
      title: "Purchasing",
      desc: "Streamlined procurement process from vendor management to purchase orders.",
      features: {
        1: "Vendor Management",
        2: "Purchase Orders",
        3: "Supplier Evaluation",
        4: "Cost Analysis",
      },
    },
    sales: {
      title: "Sales",
      desc: "Complete sales pipeline management with CRM integration and performance analytics.",
      features: {
        1: "Lead Management",
        2: "Quote Generation",
        3: "Sales Analytics",
        4: "Customer Portal",
      },
    },
  },
} satisfies Locales;
