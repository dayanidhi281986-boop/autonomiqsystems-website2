export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-black text-white">
      {/* Navigation - ALL PAGES */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            AutonomIQ Systems
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-blue-400 font-medium">Services</a>
            <a href="/pricing" className="hover:text-blue-400 font-medium">Pricing</a>
            <a href="/about" className="hover:text-blue-400 font-medium">About</a>
            <a href="/security" className="hover:text-blue-400 font-medium">Security</a>
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl font-bold text-sm transition-all duration-300">
              Free Assessment
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-32 px-6 max-w-7xl mx-auto text-center min-h-screen flex flex-col justify-center">
        <div className="inline-flex items-center bg-green-500/20 border-2 border-green-500/50 px-8 py-4 rounded-full mb-12 max-w-max mx-auto shadow-2xl">
          <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
          <span className="text-xl font-semibold tracking-wide">🔴 LIVE • 100% Autonomous AI Operations</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent mb-8 leading-tight">
          AI-Only IT Services
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-zinc-300 max-w-4xl mx-auto mb-16 leading-relaxed px-4">
          Fully autonomous consulting, AIOps operations & AI development for enterprises. 
          <span className="font-black text-blue-400 block mt-4 text-2xl">
            No humans. No delays. Infinite scale. India GST + DPDP compliant.
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
          <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-2 border-blue-600/50 px-12 py-8 text-xl font-black rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-blue-500/50 hover:scale-105">
            🚀 Start Free AI Assessment (2 mins)
          </a>
          <a href="#services" className="border-2 border-zinc-700/50 hover:border-blue-500/70 hover:bg-zinc-800/50 px-12 py-8 rounded-2xl text-xl font-bold transition-all duration-300 backdrop-blur-sm">
            Explore Services
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
          <div className="text-center p-12 bg-zinc-900/30 backdrop-blur-sm rounded-2xl border border-zinc-700/50 hover:border-blue-500/50 transition-all">
            <div className="text-5xl font-black text-blue-400 mb-4">100%</div>
            <div className="text-2xl font-semibold text-zinc-300">Autonomous</div>
            <div className="text-zinc-500 mt-2">AI-only operations</div>
          </div>
          <div className="text-center p-12 bg-zinc-900/30 backdrop-blur-sm rounded-2xl border border-zinc-700/50 hover:border-green-500/50 transition-all">
            <div className="text-5xl font-black text-green-400 mb-4">₹25L</div>
            <div className="text-2xl font-semibold text-zinc-300">MRR Target</div>
            <div className="text-zinc-500 mt-2">Month 3 goal</div>
          </div>
          <div className="text-center p-12 bg-zinc-900/30 backdrop-blur-sm rounded-2xl border border-zinc-700/50 hover:border-red-500/50 transition-all">
            <div className="text-5xl font-black text-red-400 mb-4">0 Humans</div>
            <div className="text-2xl font-semibold text-zinc-300">Operations</div>
            <div className="text-zinc-500 mt-2">Pure AI delivery</div>
          </div>
          <div className="text-center p-12 bg-zinc-900/30 backdrop-blur-sm rounded-2xl border border-zinc-700/50 hover:border-yellow-500/50 transition-all">
            <div className="text-5xl font-black text-yellow-400 mb-4">&lt;24h</div>
            <div className="text-2xl font-semibold text-zinc-300">Response</div>
            <div className="text-zinc-500 mt-2">AI SLA guarantee</div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-32 px-6 bg-gradient-to-b from-zinc-900/50 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              Enterprise AI Services
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
              Production-grade delivery for Fortune 500 + Indian enterprises
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Consulting */}
            <div className="group bg-zinc-900/50 border border-zinc-700/50 p-12 rounded-3xl hover:border-blue-500/70 hover:bg-blue-500/5 transition-all duration-500 hover:scale-105 backdrop-blur-xl">
              <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500/40 transition-all">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-4xl font-black text-blue-400 mb-6 group-hover:text-blue-300">AI IT Consulting</h3>
              <div className="space-y-4 text-xl text-zinc-300 mb-8">
                <div>• Cloud-native architecture design</div>
                <div>• Digital transformation strategy</div>
                <div>• Security & compliance roadmaps</div>
                <div>• Vendor-neutral recommendations</div>
              </div>
              <div className="text-2xl font-bold text-green-400 mb-4">₹50k-₹2L/month</div>
              <a href="/pricing" className="inline-block text-blue-400 hover:text-blue-300 font-bold text-lg underline">View Pricing →</a>
            </div>

            {/* AIOps Operations */}
            <div className="group bg-zinc-900/50 border border-zinc-700/50 p-12 rounded-3xl hover:border-green-500/70 hover:bg-green-500/5 transition-all duration-500 hover:scale-105 backdrop-blur-xl">
              <div className="w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-500/40 transition-all">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-4xl font-black text-green-400 mb-6 group-hover:text-green-300">AIOps Operations</h3>
              <div className="space-y-4 text-xl text-zinc-300 mb-8">
                <div>• Predictive incident management</div>
                <div>• 24x7 automated monitoring</div>
                <div>• Intelligent cost optimization</div>
                <div>• Zero-downtime deployments</div>
              </div>
              <div className="text-2xl font-bold text-green-400 mb-4">₹1L+/month</div>
              <a href="/pricing" className="inline-block text-green-400 hover:text-green-300 font-bold text-lg underline">View Pricing →</a>
            </div>

            {/* AI Development */}
            <div className="group bg-zinc-900/50 border border-zinc-700/50 p-12 rounded-3xl hover:border-purple-500/70 hover:bg-purple-500/5 transition-all duration-500 hover:scale-105 backdrop-blur-xl">
              <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex
