import React from "react";

export default function Sidebar({ setActiveSection, activeSection }) {
  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg p-6 flex flex-col">
      <div className="mb-8">
        <span className="text-xs text-gray-400 mb-2 block">Menu</span>
        <nav className="flex flex-col gap-2">
          <button
            className={`flex items-center gap-3 rounded-xl py-3 px-4 font-semibold shadow-md ${activeSection === "dashboard" ? "bg-[#6C63FF] text-white" : "text-gray-700 hover:bg-gray-100"}`}
            onClick={() => setActiveSection("dashboard")}
          >
            <span className="material-icons">home</span>
            Dashboard
          </button>
          <button
            className={`flex items-center gap-3 rounded-xl py-3 px-4 ${activeSection === "orders" ? "bg-[#6C63FF] text-white" : "text-gray-700 hover:bg-gray-100"}`}
            onClick={() => setActiveSection("orders")}
          >
            <span className="material-icons">shopping_bag</span>
            Orders
            <span className="material-icons ml-auto text-xs text-gray-400">expand_more</span>
          </button>
          <button
            className={`flex items-center gap-3 rounded-xl py-3 px-4 ${activeSection === "products" ? "bg-[#6C63FF] text-white" : "text-gray-700 hover:bg-gray-100"}`}
            onClick={() => setActiveSection("products")}
          >
            <span className="material-icons">storefront</span>
            Products
            <span className="material-icons ml-auto text-xs text-gray-400">expand_more</span>
          </button>
          <button
            className={`flex items-center gap-3 rounded-xl py-3 px-4 ${activeSection === "analytics" ? "bg-[#6C63FF] text-white" : "text-gray-700 hover:bg-gray-100"}`}
            onClick={() => setActiveSection("analytics")}
          >
            <span className="material-icons">bar_chart</span>
            Analytics
          </button>
          <button
            className={`flex items-center gap-3 rounded-xl py-3 px-4 ${activeSection === "marketing" ? "bg-[#6C63FF] text-white" : "text-gray-700 hover:bg-gray-100"}`}
            onClick={() => setActiveSection("marketing")}
          >
            <span className="material-icons">campaign</span>
            Marketing
            <span className="material-icons ml-auto text-xs text-gray-400">expand_more</span>
          </button>
          <button
            className={`flex items-center gap-3 rounded-xl py-3 px-4 relative ${activeSection === "messages" ? "bg-[#6C63FF] text-white" : "text-gray-700 hover:bg-gray-100"}`}
            onClick={() => setActiveSection("messages")}
          >
            <span className="material-icons">chat</span>
            Messages
            <span className="absolute right-4 bg-green-500 text-white text-xs rounded-full px-2 py-0.5">25</span>
          </button>
        </nav>
      </div>
      <div className="mb-8">
        <span className="text-xs text-gray-400 mb-2 block">Integrations</span>
        <nav className="flex flex-col gap-2">
          <button className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 rounded-xl py-3 px-4">
            <span className="material-icons">diamond</span>
            Jira
          </button>
          <button className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 rounded-xl py-3 px-4">
            <span className="material-icons">chat</span>
            Slack
          </button>
          <button className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 rounded-xl py-3 px-4">
            <span className="material-icons">apps</span>
            Intercom
          </button>
        </nav>
      </div>
      <button className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 rounded-xl py-3 px-4 mt-auto">
        <span className="material-icons">logout</span>
        Logout
      </button>
    </aside>
  );
}
