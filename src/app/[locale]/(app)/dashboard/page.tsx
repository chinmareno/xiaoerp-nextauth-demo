"use client";

const DashboardPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        Welcome to Xiao ERP Dashboard
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="mb-2 text-lg font-semibold text-gray-700">
            Accounting
          </h3>
          <p className="text-gray-600">Manage your financial records</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="mb-2 text-lg font-semibold text-gray-700">
            Inventory
          </h3>
          <p className="text-gray-600">Track your stock levels</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="mb-2 text-lg font-semibold text-gray-700">Sales</h3>
          <p className="text-gray-600">Monitor sales performance</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="mb-2 text-lg font-semibold text-gray-700">
            Purchasing
          </h3>
          <p className="text-gray-600">Manage purchase orders</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
