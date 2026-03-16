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
          {/* Botón para cerrar sidebar (Material Icons) */}
          <button
            className="ml-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition"
            onClick={() => setSidebarOpen(false)}
            aria-label="Cerrar sidebar"
          >
            <span className="material-icons">arrow_back</span>
          </button>
          {/* Barra de búsqueda visual */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900"
                disabled
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <span className="material-icons">search</span>
              </span>
            </div>
          </div>
          {/* Botón de notificaciones (Material Icons) */}
          <button
            className="ml-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition relative"
            aria-label="Notificaciones"
          >
            <span className="material-icons">notifications</span>
            <span className="absolute top-0 right-0 block w-3 h-3 bg-purple-500 rounded-full border-2 border-white"></span>
          </button>
          {/* Your Balance */}
          <div className="ml-6 flex flex-col items-start">
            <span className="text-xs text-gray-400">Your Balance</span>
            <span className="text-lg font-semibold text-purple-600">$5.456</span>
          </div>
          {/* Perfil usuario */}
          <div className="ml-6 flex items-center">
            <span className="material-icons text-3xl bg-orange-400 rounded-full p-1 text-white mr-2">person</span>
            <span className="text-base font-semibold text-gray-900">Hi, Lay</span>
          </div>
        </div>
        {/* Aquí irá el contenido del dashboard */}
      </div>
    </div>
  );
}
