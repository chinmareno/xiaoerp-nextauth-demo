import type { Locales } from "./client";

const en: Locales = {
  logo: "Xiao ERP",
  landingPage: {
    navbar: {
      login: "Login",
      signup: "Signup",
    },
    footer: {
      xiaoErp: {
        title: "Xiao ERP",
        desc: "Comprehensive ERP solution designed for small businesses to streamline operations and drive growth.",
      },
      modules: {
        title: "Modules",
        accounting: "Accounting",
        inventory: "Inventory",
        purchasing: "Purchasing",
        sales: "Sales",
      },
      support: {
        title: "Support",
        documentation: "Documentation",
        help: "Help Center",
        contactUs: "Contact Us",
      },
      company: {
        title: "Company",
        aboutUs: "About Us",
        pricing: "Pricing",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
      },
      allRightReserved: "All rights reserved.",
      availableIn: "Available in",
    },
    rootPath: {
      hero: {
        title: "Streamline Your Business with",
        title2: "Smart ERP Solution",
        desc: "Integrate accounting, inventory, purchasing, and sales in one powerful platform. Built for small businesses, designed for growth.",
        trialButton: "Start Free Trial",
        demoButton: "Watch Demo",
        card1: {
          title: "Secure & Reliable",
          desc: "Enterprise-grade security for your business data in Indonesia and China.",
        },
        card2: {
          title: "Ultra Fast",
          desc: "Optimized performance for seamless workflows and low-latency operations.",
        },
        card3: {
          title: "Team Collaboration",
          desc: "Built for teams to collaborate efficiently with shared access and task tracking.",
        },
      },
      moduleOverview: {
        title: "Complete ERP Modules",
        desc: "Everything your business needs in one integrated platform. Each module works seamlessly together.",
        learnMoreButton: "Learn more",
        accounting: {
          title: "Accounting Module",
          desc: "Complete financial management with automated bookkeeping, invoicing, and reporting.",
          features:
            "General Ledger||Accounts Payable/Receivable||Financial Reports||Tax Management",
        },
        inventory: {
          title: "Inventory Module",
          desc: "Real-time inventory tracking with automated stock alerts and warehouse management.",
          features:
            "Stock Tracking||Warehouse Management||Low Stock Alerts||Product Catalog",
        },
        purchasing: {
          title: "Purchasing Module",
          desc: "Streamlined procurement process from vendor management to purchase orders.",
          features:
            "Vendor Management||Purchase Orders||Supplier Evaluation||Cost Analysis",
        },
        sales: {
          title: "Sales Module",
          desc: "Complete sales pipeline management with CRM integration and performance analytics.",
          features:
            "Lead Management||Quote Generation||Sales Analytics||Customer Portal",
        },
        lastCard: {
          title: "Built to Scale With You",
          desc: "Whether you're just starting or growing fast, Xiao ERP evolves with your business — one module at a time, seamlessly.",
        },
      },
    },
    modulesPath: {
      visualFlowTitle: "Seamless Integration Across Departments",
      backHome: "Back Home",
      accounting: {
        header: {
          title: "Accounting Module",
          desc: "Streamline your financial operations with intelligent automation",
        },
        summary: {
          title: "What Our Accounting Module Does",
          desc: "Our Accounting Module automates bookkeeping, invoicing, and financial reporting so you can focus on growing your business. By seamlessly integrating with your sales, inventory, and operations data, it eliminates manual data entry while ensuring 100% accuracy in your financial records. From transaction recording to tax compliance, everything happens automatically in the background.",
        },
        visualFlow: {
          before1: {
            title: "Sales Module",
            desc: "Generates invoices and updates receivables",
          },
          before2: {
            title: "Inventory Module",
            desc: "Provides cost of goods and stock updates",
          },
          center: {
            title: "Accounting Module",
            desc: "Centralized financial control",
          },
          after1: {
            title: "Expenses Module",
            desc: "Sends cost data from HR/Ops",
          },
          after2: {
            title: "Reports Module",
            desc: "Auto-generated from accounting data",
          },
        },
        featureGridTitle: "Key Accounting Features",
        useCase: {
          title: "Real-World Example",
          desc: "Imagine your sales team closes a $15,000 deal. As soon as they hit 'confirm' in the Sales Module, an invoice is automatically created and sent to the customer. Behind the scenes, the Accounting Module logs the transaction, applies the correct tax rules, and updates your receivables. Once payment is received, it’s matched to the invoice and reflected instantly in your cash flow. At month-end, your financial reports already include this transaction — no manual work required. That’s how true integration saves time and eliminates errors.",
        },
        benefitListTitle: "Transform Your Financial Operations",
        features: {
          generalLedger: {
            title: "General Ledger",
            desc: "Comprehensive tracking of every financial transaction with automated categorization and real-time balance updates.",
          },
          accountsPayableOrReceivable: {
            title: "Accounts Payable/Receivable",
            desc: "Streamlined management of bills and invoices with automated payment reminders and aging reports.",
          },
          financialReport: {
            title: "Financial Reports",
            desc: "Auto-generated balance sheets, P&L statements, and cash flow reports with customizable date ranges and formats.",
          },
          taxManagement: {
            title: "Tax Management",
            desc: "Automated tax calculations, compliance tracking, and seamless integration with popular tax software.",
          },
        },
        benefits:
          "Eliminates manual data entry and reduces human error||" +
          "Maintains audit-ready bookkeeping with complete transaction trails||" +
          "Real-time synchronization with sales and inventory modules||" +
          "Ensures local tax compliance with automatic updates||" +
          "One-click report export to Excel, PDF, or accounting software",
      },

      inventory: {
        header: {
          title: "Inventory Module",
          desc: "Manage stock effortlessly with automation and accuracy",
        },
        summary: {
          title: "What Our Inventory Module Does",
          desc: "The Inventory Module keeps your warehouse in sync with your sales and purchasing teams. With real-time updates, low-stock alerts, and a clear overview of your items, you can confidently fulfill orders without worrying about stock discrepancies.",
        },
        visualFlow: {
          before1: {
            title: "Sales Module",
            desc: "Triggers stock movement",
          },
          before2: {
            title: "Purchase Module",
            desc: "Feeds in purchase order data",
          },
          center: {
            title: "Inventory Module",
            desc: "Stock Brain",
          },
          after1: {
            title: "Accounting Module",
            desc: "Tracks financial impact",
          },
          after2: {
            title: "Reports Module",
            desc: "Generates audit and stock reports",
          },
        },
        featureGridTitle: "Key Inventory Features",
        useCase: {
          title: "Real-World Example",
          desc: "Imagine your sales team finalizes a bulk order of 500 units. Instantly, the Inventory Module updates stock levels and flags a low-stock warning. Meanwhile, a purchase order is auto-generated for the procurement team, who can then confirm restocking with one click. As items arrive and are logged in, stock levels sync across sales and accounting — all without spreadsheets or manual entries. That’s automation working where it matters most.",
        },
        benefitListTitle: "Why Inventory Management Matters",
        features: {
          stockManagement: {
            title: "Stock Management",
            desc: "Track inventory levels in real time across locations with automated updates from all stock movements.",
          },
          purchaseOrders: {
            title: "Purchase Orders Sync",
            desc: "Automatically update inventory quantities when new stock is received via approved purchase orders.",
          },
          salesSync: {
            title: "Sales Sync",
            desc: "Deduct inventory as sales are made, ensuring accurate availability across all channels.",
          },
          stockAudits: {
            title: "Stock Audits",
            desc: "Perform regular stock counts and reconcile discrepancies with audit logs for full accountability.",
          },
        },
        benefits:
          "Prevents stockouts and overstock with real-time insights||" +
          "Improves warehouse efficiency and reduces picking errors||" +
          "Supports multi-location inventory and batch tracking||" +
          "Integrates with sales and purchasing for seamless updates||" +
          "Provides historical data for smarter reordering decisions",
      },
      purchasing: {
        header: {
          title: "Purchasing Module",
          desc: "Gain control and visibility over every business purchase",
        },
        summary: {
          title: "Streamline All Procurement Activities",
          desc: "The Purchasing Module ensures that every purchase made is tracked, approved, and reconciled with your accounting system. From purchase requests to vendor evaluation and goods receipt, your team can eliminate delays, minimize errors, and optimize cash flow.",
        },
        visualFlow: {
          before1: {
            title: "Purchase Request",
            desc: "Submitted by Department",
          },
          before2: {
            title: "Approval Workflow",
            desc: "Manager or Finance",
          },
          center: {
            title: "Purchasing Module",
            desc: "Central Hub for PO & Vendor",
          },
          after1: {
            title: "Inventory Update",
            desc: "Goods Received & Stored",
          },
          after2: {
            title: "Accounting Module",
            desc: "Invoice & Payment Processed",
          },
        },
        featureGridTitle: "Key Capabilities for Efficient Procurement",
        useCase: {
          title: "Real Example: PR to PO to Payment",
          desc: "A department requests 200 office chairs. The PR is auto-routed to the procurement manager, who compares vendor quotes. After approval, a PO is issued. When the goods arrive, they're marked as received in Inventory, and the invoice is matched automatically by the Accounting Module — all tracked in one place.",
        },
        benefitListTitle: "Bring Clarity and Control to Your Spending",
        features: {
          purchaseRequests: {
            title: "Purchase Requests",
            desc: "Team members can create PRs that route through approval workflows automatically.",
          },
          vendorComparison: {
            title: "Vendor Comparison",
            desc: "Evaluate vendors by pricing, delivery time, and past performance before issuing POs.",
          },
          purchaseOrders: {
            title: "Purchase Orders",
            desc: "Generate POs directly from approved requests with built-in budget validation.",
          },
          receivingAndReconciliation: {
            title: "Receiving & Reconciliation",
            desc: "Match goods received with POs and invoices automatically, flagging discrepancies.",
          },
        },
        benefits:
          "Reduces unauthorized or duplicate purchases||" +
          "Centralizes procurement data and vendor history||" +
          "Auto-updates inventory and accounting records||" +
          "Improves negotiation with vendor performance tracking||" +
          "Ensures audit-compliant purchasing workflows",
      },

      sales: {
        header: {
          title: "Sales Module",
          desc: "Manage the entire sales lifecycle from lead to revenue—intuitively and efficiently",
        },
        summary: {
          title: "What Our Sales Module Delivers",
          desc: "The Sales Module simplifies everything from lead generation and quote creation to final delivery and invoicing. By automating key touchpoints and integrating tightly with inventory and accounting, it eliminates redundant processes and lets your team focus on closing deals faster.",
        },
        visualFlow: {
          before1: {
            title: "CRM",
            desc: "Lead & Contact",
          },
          before2: {
            title: "Qualification",
            desc: "Needs & Budget",
          },
          center: {
            title: "Sales Module",
            desc: "Quoting & Orders",
          },
          after1: {
            title: "Inventory Module",
            desc: "Stock allocation",
          },
          after2: {
            title: "Accounting Module",
            desc: "Invoice, revenue",
          },
        },
        featureGridTitle: "Core Features That Drive Sales",
        useCase: {
          title: "See It Live: Closing Deals, Effortlessly",
          desc: "A new customer inquires through your CRM. Within minutes, your sales rep creates a tailored quote and emails it with a single click. The customer accepts, and the system converts it to a Sales Order. Inventory updates in real-time, the invoice is auto-generated, and your Accounting Module logs the revenue. Zero delays. Just streamlined selling.",
        },
        benefitListTitle: "Benefits You Can Count On",
        features: {
          customerManagement: {
            title: "Customer Management",
            desc: "Track leads, manage customer relationships, and maintain a centralized database with interaction history.",
          },
          quotationInvoicing: {
            title: "Quotation & Invoicing",
            desc: "Generate professional quotes and invoices instantly with auto-filled customer, pricing, and tax details.",
          },
          salesOrders: {
            title: "Sales Orders",
            desc: "Convert approved quotations into sales orders with real-time product availability checks.",
          },
          orderFulfillment: {
            title: "Order Fulfillment",
            desc: "Track the order lifecycle from placement to delivery, integrated with inventory and logistics.",
          },
        },
        benefits:
          "Accelerates the sales cycle with automation||" +
          "Reduces manual errors in quotes and invoices||" +
          "Provides visibility into lead-to-cash pipeline||" +
          "Integrates seamlessly with Inventory and Accounting||" +
          "Improves customer satisfaction with timely follow-ups",
      },
    },
  },
};

export default en;
