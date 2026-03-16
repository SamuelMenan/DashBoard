import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 flex items-center justify-center" style={{ clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)", backgroundColor: "#FFD600" }}>
        <span className="text-2xl font-bold text-white">R</span>
      </div>
      <span className="text-xl font-semibold text-gray-900">flex</span>
    </div>
  );
}
