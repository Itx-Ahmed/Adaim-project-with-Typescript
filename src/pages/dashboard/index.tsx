import { Outlet } from "react-router-dom";
import DashboardNavigation from "../../components/dashboard/navigation";
import { useState } from "react";

function MainDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`w-64 h-screen bg-[#1D4ED8] text-white shadow-lg fixed md:relative transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <DashboardNavigation />
      </div>

      {/* Toggle Button (Mobile Only) */}
      <button
        className="absolute top-4 left-4 md:hidden bg-blue-600 text-white p-2 rounded"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>

      {/* Main Content */}
      <div className="flex-1 w-full flex flex-col items-start justify-start p-6 md:p-1">
        <Outlet />
      </div>
    </div>
  );
}

export default MainDashboard;
