export function Header() {
  return (
    <header className="border-b border-white/5 backdrop-blur-xl bg-black/30">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <div className="text-white font-semibold text-lg tracking-tight">
          OriginFlow
        </div>

        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <a className="hover:text-white transition">Docs</a>
          <a className="hover:text-white transition">Pricing</a>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition">
            Sign In
          </button>
        </div>

      </div>
    </header>
  );
}