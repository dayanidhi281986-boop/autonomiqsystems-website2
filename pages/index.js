export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-black text-white">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            AutonomIQ Systems
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-blue-400">Services</a>
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl font-bold">Free Assessment</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-32 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center bg-green-500/20 border border-green-500/50 px-6 py-3 rounded-full mb-12 mx-auto">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-lg font-medium">LIVE • 100% Autonomous AI</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent mb-8">
          AI-Only IT Services
        </h1>
        
        <p className="text-2xl text-zinc-300 max-w-3xl mx-auto mb-12">
          Fully autonomous consulting, operations & development. 
          <span className="font-bold text-blue-400 block">No humans. India GST compliant.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <a href="/contact" className="bg-blue-600 hover:bg-blue-700 px-12 py-6 text-xl font-bold rounded-xl">
            🚀 Start Free Assessment
          </a>
          <a href="#services" className="border border-zinc-700 hover:bg-zinc-800 px-12 py-6 rounded-xl text-xl font-bold">
            View Services
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-8"><div className="text-4xl font-bold text-blue-400 mb-2">100%</div><div>Autonomous</div></div>
          <div className="text-center p-8"><div className="text-4xl font-bold text-green-400 mb-2">₹25L</div><div>MRR Target</div></div>
          <div className="text-center p-8"><div className="text-4xl font-bold text-red-400 mb-2">0 Humans</div><div>Operations</div></div>
          <div className="text-center p-8"><div className="text-4xl font-bold text-yellow-400 mb-2">&lt;24h</div><div>Response</div></div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Enterprise AI Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-800/50 border border-zinc-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">AI Consulting</h3>
              <div>• Cloud architecture</div><div>• ₹50k-2L/month</div>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-green-400 mb-4">AIOps</h3>
              <div>• 24x7 monitoring</div><div>• ₹1L+/month</div>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">AI Development</h3>
              <div>• Custom apps</div><div>• ₹3L-15L/projects</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
