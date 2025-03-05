import { Outlet } from "react-router-dom";
import DashboardNavigation from "../../components/dashboard/navigation";
import { useState } from "react";

function MainDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <div
        className={`w-64 h-screen bg-[#1D4ED8] text-white shadow-lg fixed md:relative ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 flex flex-col`}
        style={{ backgroundColor: "#1D4ED8", minHeight: "100vh" }} // Ensure Full Color Coverage
      >
        <DashboardNavigation />
      </div>

      {/* Toggle Button (Mobile Only) */}
      <button
        className="absolute top-4 left-4 md:hidden bg-[#1D4ED8] text-white p-2 rounded z-50"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>

      {/* Main Content */}
      <div className="flex-1 bg-white flex flex-col items-start justify-start p-6 md:p-1 md:ml-64">
        <Outlet />
      </div>
    </div>
  );
}

export default MainDashboard;
