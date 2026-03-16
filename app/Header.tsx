import Logo from "./Logo";

type HeaderProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <div className="w-full flex items-center justify-between mb-8 gap-4">
      <Logo />
      {/* Botón para cerrar/abrir sidebar */}
      <div className="ml-2 flex items-center md:hidden">
        {sidebarOpen ? (
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition shadow"
            onClick={() => setSidebarOpen(false)}
            aria-label="Cerrar sidebar"
          >
            <span className="material-icons text-xl">arrow_back</span>
          </button>
        ) : (
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition shadow"
            onClick={() => setSidebarOpen(true)}
            aria-label="Abrir sidebar"
          >
            <span className="material-icons text-xl">menu</span>
          </button>
        )}
      </div>
      {/* Barra de búsqueda visual */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-full max-w-md">
          <span className="material-icons absolute left-3 top-2 text-gray-400 text-xl">search</span>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 text-base shadow"
            disabled
          />
        </div>
      </div>
      {/* Panel balance y usuario */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-2 shadow">
          <span className="material-icons text-green-500 text-xl">account_balance_wallet</span>
          <span className="text-xs text-gray-500">Your Balance</span>
          <span className="text-base font-bold text-[#6C63FF]">$5,456</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-icons text-3xl bg-gray-200 rounded-full p-2 text-[#6C63FF]">person</span>
          <span className="font-semibold text-gray-900">Hi, Lay</span>
        </div>
      </div>
    </div>
  );
}
// ...existing code...
