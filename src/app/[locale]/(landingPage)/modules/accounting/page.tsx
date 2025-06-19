import React from "react";
import {
  Calculator,
  TrendingUp,
  FileText,
  CheckCircle,
  ArrowRight,
  PieChart,
  Receipt,
  CreditCard,
  Building2,
} from "lucide-react";

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
      icon: <Calculator className="h-6 w-6" />,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Accounting Module
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Streamline your financial operations with intelligent automation
          </p>
        </div>

        {/* Summary Section */}
        <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            What Our Accounting Module Does
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Our Accounting Module automates bookkeeping, invoicing, and
            financial reporting so you can focus on growing your business. By
            seamlessly integrating with your sales, inventory, and operations
            data, it eliminates manual data entry while ensuring 100% accuracy
            in your financial records. From transaction recording to tax
            compliance, everything happens automatically in the background.
          </p>
        </div>

        {/* Visual System Flow */}
        <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-semibold text-gray-900">
            How It All Connects
          </h2>

          <div className="flex flex-col items-center justify-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
            {/* Sales Module */}
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Sales Module</h3>
              <p className="text-center text-sm text-gray-600">
                Creates invoices
              </p>
            </div>

            <ArrowRight className="h-6 w-6 rotate-90 text-gray-400 lg:rotate-0" />

            {/* Inventory Module */}
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                <FileText className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Inventory Module</h3>
              <p className="text-center text-sm text-gray-600">Purchase data</p>
            </div>

            <ArrowRight className="h-6 w-6 rotate-90 text-gray-400 lg:rotate-0" />

            {/* Accounting Module - Center */}
            <div className="flex flex-col items-center rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
              <div className="mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-blue-600">
                <Calculator className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Accounting Module
              </h3>
              <p className="text-center text-sm font-medium text-blue-600">
                Central Hub
              </p>
            </div>

            <ArrowRight className="h-6 w-6 rotate-90 text-gray-400 lg:rotate-180" />

            {/* Expenses Module */}
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
                <CreditCard className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Expenses Module</h3>
              <p className="text-center text-sm text-gray-600">From Ops/HR</p>
            </div>

            <ArrowRight className="h-6 w-6 rotate-90 text-gray-400 lg:rotate-180" />

            {/* Reports Output */}
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
                <PieChart className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Financial Reports</h3>
              <p className="text-center text-sm text-gray-600">
                Auto-generated
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Features Section */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-900">
            Powerful Features That Work For You
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <div className="text-blue-600">{feature.icon}</div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-Life Use Case */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold">
            See It In Action: A Real Day at Your Business
          </h2>
          <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-lg leading-relaxed">
              Picture this: Your sales team just closed a $15,000 deal with a
              new client. The moment they hit "confirm" in the Sales Module, an
              invoice is automatically generated and sent to the client. Behind
              the scenes, our Accounting Module logs this transaction,
              calculates the applicable taxes based on your location and the
              client's, and updates your accounts receivable. When your client
              pays, the payment is automatically matched to the invoice,
              updating your cash flow in real-time. At month-end, your P&L
              statement already includes this transaction with zero manual input
              from you. That's the power of true integration.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-semibold text-gray-900">
            Transform Your Financial Operations
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 rounded-lg bg-green-50 p-4"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="font-medium text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="inline-flex items-center space-x-2 rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700">
              <span>Get Started Today</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountingModulePage;
