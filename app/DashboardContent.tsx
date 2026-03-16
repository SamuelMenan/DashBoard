import React from "react";
import { useState } from "react";

export default function DashboardContent() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header Dashboard */}
      <div className="flex items-center gap-3 mb-6">
        <span className="material-icons text-4xl bg-[#6C63FF] text-white rounded-full p-3 shadow">home</span>
        <span className="text-3xl font-bold text-gray-900">Dashboard</span>
        <div className="ml-auto flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium shadow">
            <span className="material-icons text-base">calendar_today</span>
            This Month
            <span className="material-icons text-xs">expand_more</span>
          </button>
          <button className="px-6 py-2 bg-green-500 text-white rounded-lg font-semibold shadow-lg hover:bg-green-600 transition">Download Report</button>
        </div>
      </div>
      {/* Cards superiores */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-[#f7f8fa] rounded-xl p-6 flex flex-col items-center shadow-lg">
          <span className="material-icons text-4xl bg-[#6C63FF] text-white rounded-full p-3 mb-2 shadow">shopping_cart</span>
          <span className="text-lg text-gray-500">Total Sales</span>
          <span className="text-3xl font-bold text-gray-900">263k</span>
          <span className="text-green-500 font-semibold flex items-center gap-1">
            <span className="material-icons text-sm">arrow_upward</span>15.6%
          </span>
        </div>
        <div className="bg-[#f7f8fa] rounded-xl p-6 flex flex-col items-center shadow-lg">
          <span className="material-icons text-4xl bg-[#6C63FF] text-white rounded-full p-3 mb-2 shadow">groups</span>
          <span className="text-lg text-gray-500">Total Visitors</span>
          <span className="text-3xl font-bold text-gray-900">35k</span>
          <span className="text-red-500 font-semibold flex items-center gap-1">
            <span className="material-icons text-sm">arrow_downward</span>6.2%
          </span>
        </div>
        <div className="bg-[#f7f8fa] rounded-xl p-6 flex flex-col items-center shadow-lg">
          <span className="material-icons text-4xl bg-[#6C63FF] text-white rounded-full p-3 mb-2 shadow">local_shipping</span>
          <span className="text-lg text-gray-500">Total Orders</span>
          <span className="text-3xl font-bold text-gray-900">165k</span>
          <span className="text-green-500 font-semibold flex items-center gap-1">
            <span className="material-icons text-sm">arrow_upward</span>3.5%
          </span>
        </div>
      </div>
      {/* Parte inferior: grid de 2 columnas */}
      <div className="grid grid-cols-2 gap-6">
        {/* Columna izquierda: sesiones y gráfica */}
        <div className="flex flex-col gap-6 h-full">
          <div className="bg-[#f7f8fa] rounded-xl p-6 shadow-lg flex flex-col h-full">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="material-icons text-3xl bg-[#6C63FF] text-white rounded-full p-2 shadow">groups</span>
                <span className="font-semibold text-gray-900 text-lg">Online Store Sessions</span>
              </div>
              <button className="px-4 py-1 bg-gray-100 rounded-lg text-gray-700 font-medium text-sm shadow">View Report</button>
            </div>
            <div className="flex items-center gap-6 mb-4">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-[#6C63FF]">68</span>
                <span className="text-green-500 text-sm font-semibold flex items-center gap-1">
                  <span className="material-icons text-xs">arrow_upward</span>15.6%
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-[#6C63FF]">26</span>
                <span className="text-red-500 text-sm font-semibold flex items-center gap-1">
                  <span className="material-icons text-xs">arrow_downward</span>1.6%
                </span>
              </div>
            </div>
            {/* Gráfica mejorada */}
            <div className="bg-white rounded-lg p-4 mt-2 shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500 text-sm">Sessions Over Time</span>
                <button className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-gray-700 text-xs shadow">
                  <span className="material-icons text-xs">calendar_today</span>
                  February
                  <span className="material-icons text-xs">expand_more</span>
                </button>
              </div>
              {/* Gráfica curva con eje Y */}
              <svg height="100" width="100%" viewBox="0 0 200 100">
                <polyline fill="none" stroke="#6C63FF" strokeWidth="4" points="0,80 40,60 80,70 120,40 160,90 200,20" />
                {/* Eje Y */}
                <line x1="20" y1="20" x2="20" y2="90" stroke="#E0E0E0" strokeWidth="2" />
                {/* Eje X */}
                <line x1="20" y1="90" x2="200" y2="90" stroke="#E0E0E0" strokeWidth="2" />
              </svg>
              <div className="flex justify-between mt-2">
                <button className="w-8 h-8 bg-[#6C63FF] text-white rounded-full shadow-lg">21</button>
                <span className="text-gray-400 text-xs">22</span>
                <span className="text-gray-400 text-xs">23</span>
                <span className="text-gray-400 text-xs">24</span>
                <span className="text-gray-400 text-xs">25</span>
              </div>
            </div>
          </div>
        </div>
        {/* Columna derecha: panel azul y conversión */}
        <div className="flex flex-col gap-6 h-full">
          {/* Panel azul Need More Stats */}
          <div className="bg-[#3F51B5] rounded-xl p-6 shadow-lg flex flex-col text-white relative overflow-hidden h-full">
            <span className="font-bold text-lg mb-2">Need More Stats?</span>
            <span className="text-sm mb-4">Upgrade to pro for added benefits.</span>
            <button className="bg-green-500 hover:bg-green-600 transition px-6 py-2 rounded-lg font-semibold text-white w-fit shadow-lg">Go Pro Now</button>
            {/* Simulación de ilustración/fondo decorativo */}
            <svg className="absolute right-0 bottom-0" width="120" height="80" viewBox="0 0 120 80">
              <path d="M10,70 Q60,10 110,70" stroke="#fff" strokeWidth="6" fill="none" />
              <circle cx="100" cy="30" r="8" fill="#fff" opacity="0.7" />
              <circle cx="40" cy="50" r="6" fill="#fff" opacity="0.5" />
            </svg>
          </div>
          {/* Panel conversión */}
          <div className="bg-[#f7f8fa] rounded-xl p-6 shadow-lg flex flex-col items-center h-full">
            <span className="font-semibold text-gray-900 mb-2">Conversion</span>
            {/* Gráfico semicircular colorido */}
            <svg width="180" height="90" viewBox="0 0 180 90">
              <path d="M20,80 A70,70 0 0,1 160,80" fill="none" stroke="#6C63FF" strokeWidth="16" />
              <path d="M20,80 A70,70 0 0,1 120,30" fill="none" stroke="#E0E0E0" strokeWidth="16" />
            </svg>
            <span className="text-3xl font-bold text-[#6C63FF] mt-2">58,19%</span>
            <span className="text-green-500 font-semibold flex items-center gap-1">
              <span className="material-icons text-xs">arrow_upward</span>3.5%
            </span>
            <div className="flex justify-between w-full mt-4">
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-400">Income</span>
                <span className="font-semibold text-gray-900">$542,317</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-400">Expenses</span>
                <span className="font-semibold text-gray-900">$497,456</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
