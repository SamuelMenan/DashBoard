import Image from "next/image";
import Logo from "./Logo";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-[#f5f6fa] font-sans flex items-center justify-center p-6">
      <div className="min-h-[90vh] w-full max-w-[1300px] bg-white rounded-2xl shadow-xl p-8 flex flex-col">
        <div className="flex items-center mb-8">
          <Logo />
        </div>
        {/* Aquí irá el contenido del dashboard */}
      </div>
    </div>
  );
}
