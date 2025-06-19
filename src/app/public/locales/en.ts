import type { Locales } from "./client";

export default {
  login: "Login",
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
      features:
        "General Ledger||Accounts Payable/Receivable||Financial Reports||Tax Management",
    },
    inventory: {
      title: "Inventory",
      desc: "Real-time inventory tracking with automated stock alerts and warehouse management.",
      features:
        "Stock Tracking||Warehouse Management||Low Stock Alerts||Product Catalog",
    },
    purchasing: {
      title: "Purchasing",
      desc: "Streamlined procurement process from vendor management to purchase orders.",
      features:
        "Vendor Management||Purchase Orders||Supplier Evaluation||Cost Analysis",
    },
    sales: {
      title: "Sales",
      desc: "Complete sales pipeline management with CRM integration and performance analytics.",
      features:
        "Lead Management||Quote Generation||Sales Analytics||Customer Portal",
    },
  },
} satisfies Locales;
