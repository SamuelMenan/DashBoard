"use client";
import Image from "next/image";
import Logo from "./Logo";
import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen w-screen bg-[#f5f6fa] font-sans flex items-center justify-center p-6">
      <div className="min-h-[90vh] w-full max-w-[1300px] bg-white rounded-2xl shadow-xl p-8 flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <Logo />
          <button
            className="ml-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition"
            onClick={() => setSidebarOpen(false)}
            aria-label="Cerrar sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Aquí irá el contenido del dashboard */}
      </div>
    </div>
  );
}
