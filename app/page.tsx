export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-black text-white">
      <section className="py-32 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center bg-green-500/20 border border-green-500/50 px-6 py-3 rounded-full mb-12">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-lg font-medium">LIVE • 100% Autonomous AI Operations</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent mb-8">
          AI-Only IT Services
        </h1>
        
        <p className="text-2xl md:text-3xl text-zinc-300 max-w-4xl mx-auto mb-12">
          Fully autonomous consulting, operations & development. 
          <span className="font-bold text-blue-400">No humans. No delays. Infinite scale.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="/contact" className="bg-blue-600 hover:bg-blue-700 border-2 border-blue-600 px-12 py-6 text-xl font-bold rounded-xl transition-all duration-300">
            Start Free AI Assessment
          </a>
          <a href="#services" className="border-2 border-zinc-700 hover:bg-zinc-800 px-12 py-6 rounded-xl text-xl font-bold transition-all duration-300">
            View Services
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 max-w-4xl mx-auto">
          <div className="text-center p-8">
            <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-zinc-400">Autonomous</div>
          </div>
          <div className="text-center p-8">
            <div className="text-4xl font-bold text-green-400 mb-2">₹25L</div>
            <div className="text-zinc-400">MRR Target</div>
          </div>
          <div className="text-center p-8">
            <div className="text-4xl font-bold text-red-400 mb-2">0 Humans</div>
            <div className="text-zinc-400">Operations</div>
          </div>
          <div className="text-center p-8">
            <div className="text-4xl font-bold text-yellow-400 mb-2">&lt;24h</div>
            <div className="text-zinc-400">Response</div>
          </div>
        </div>
      </section>
    </div>
  )
}
