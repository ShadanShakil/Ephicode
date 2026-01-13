export default function About(){
  return (
    <section className="w-full px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div
          className="
            relative overflow-hidden
            rounded-[2.5rem] border border-white/50
            bg-white/5
            backdrop-blur-2xl backdrop-saturate-150
            shadow-[0_0_80px_rgba(16,185,129,0.45)]
            px-6 py-12 sm:px-10 sm:py-16 lg:px-24 lg:py-20
            flex items-center justify-center
          "
        >
          {/* Liquid gradient glow background inside the card */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/40 blur-3xl" />
            <div className="absolute bottom-[-20%] left-0 h-80 w-80 rounded-full bg-teal-400/35 blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-10%] h-80 w-80 rounded-full bg-emerald-300/25 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 via-emerald-800/30 to-emerald-900/40 opacity-80" />
          </div>

          {/* Content */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">Coming Soon</h1>
          </div>
        </div>
      </div>
    </section>
  );
    
}