"use client";
import Image from "next/image";
import Header from "./Header";
import { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardContent from "./DashboardContent";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="min-h-screen w-screen bg-[#f5f6fa] font-sans flex items-center justify-center p-2 md:p-6">
      <div className="min-h-[90vh] w-full max-w-[1300px] bg-white rounded-2xl shadow-xl p-2 md:p-8 flex flex-col">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex flex-1 mt-2 flex-col md:flex-row">
          {/* Sidebar visible solo si sidebarOpen es true */}
          <div
            className={`md:mr-8 mb-4 md:mb-0 ${sidebarOpen ? 'block' : 'hidden'} md:block`}
          >
            <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
          </div>
          <div className="flex-1">
            {activeSection === "dashboard" && (
              <DashboardContent />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
