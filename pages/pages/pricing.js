export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-black text-white">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">AutonomIQ Systems</a>
          <div className="space-x-6">
            <a href="/" className="hover:text-blue-400">Home</a>
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl font-bold">Free Assessment</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-32 px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">Transparent Pricing</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/50 border border-zinc-700 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">AI Consulting</h2>
            <div className="text-5xl font-black text-white mb-8">₹50k-₹2L</div>
            <div className="text-xl text-zinc-300 mb-8">/month retainer</div>
            <ul className="space-y-2 text-zinc-400">
              <li>• Strategy & Architecture</li>
              <li>• 20-40 hrs/month</li>
              <li>• Unlimited revisions</li>
            </ul>
          </div>
          
          <div className="bg-zinc-900/50 border border-zinc-700 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-green-400 mb-4">AIOps Operations</h2>
            <div className="text-5xl font-black text-white mb-8">₹1L+</div>
            <div className="text-xl text-zinc-300 mb-8">/month managed</div>
            <ul className="space-y-2 text-zinc-400">
              <li>• 24x7 monitoring</li>
              <li>• 98% uptime SLA</li>
              <li>• Cost optimization</li>
            </ul>
          </div>
          
          <div className="bg-zinc-900/50 border border-zinc-700 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">AI Development</h2>
            <div className="text-5xl font-black text-white mb-8">₹3L-₹15L</div>
            <div className="text-xl text-zinc-300 mb-8">/project</div>
            <ul className="space-y-2 text-zinc-400">
              <li>• 2-week sprints</li>
              <li>• Enterprise-grade</li>
              <li>• Full source code</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
