export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-black text-white">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AutonomIQ Systems
          </a>
          <div className="space-x-4">
            <a href="/" className="hover:text-blue-400">Home</a>
            <a href="/services" className="hover:text-blue-400">Services</a>
            <a href="/pricing" className="hover:text-blue-400">Pricing</a>
            <a href="/contact" className="bg-blue-600 px-6 py-2 rounded-lg font-bold">Contact</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-32 px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About AutonomIQ Systems
        </h1>
        
        <div className="prose prose-lg max-w-none text-zinc-300">
          <p className="text-2xl mb-12">
            <strong>India's first fully autonomous AI IT services company.</strong> No human consultants. 
            No manual operations. Enterprise-grade delivery through specialized AI agents.
          </p>
          
          <h2 className="text-4xl font-bold text-white mb-8 mt-20">AI-Only Operating Model</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">What We Do</h3>
              <ul className="space-y-2 text-xl">
                <li>• AI IT Consulting (Strategy, Architecture)</li>
                <li>• AIOps & IT Operations (24x7 monitoring)</li>
                <li>• AI Software Development (Web, APIs, Automation)</li>
                <li>• Managed AI Services (Cloud, Security)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">How We Work</h3>
              <ul className="space-y-2 text-xl">
                <li>• Clients → AI Sales Agent</li>
                <li>• Requirements → AI Architect</li>
                <li>• Delivery → AI Developer/AIOps</li>
                <li>• Monitoring → Continuous AI optimization</li>
              </ul>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-700 p-12 rounded-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">India Compliance</h3>
            <ul className="grid md:grid-cols-2 gap-6 text-xl text-zinc-300">
              <li>✅ DPDP Act 2023 compliant</li>
              <li>✅ GST invoicing (SAC 998314)</li>
              <li>✅ ISO 27001 aligned controls</li>
              <li>✅ Data residency: India primary</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
