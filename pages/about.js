export default function About() {
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
        <h1 className="text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About</h1>
        <div className="prose prose-lg max-w-none text-zinc-300">
          <p className="text-2xl mb-12">India's first <strong>100% AI-only IT services company</strong>. No human consultants. Enterprise-grade delivery through specialized AI agents.</p>
          <h2 className="text-4xl font-bold text-white mb-8">AI Operating Model</h2>
          <ul className="grid md:grid-cols-2 gap-8 text-xl mb-16">
            <li>• AI IT Consulting (Cloud, Strategy)</li>
            <li>• AIOps Operations (24x7 monitoring)</li>
            <li>• AI Development (Apps, APIs)</li>
            <li>• Managed AI Services (Security)</li>
          </ul>
          <div className="bg-zinc-900/50 border border-zinc-700 p-8 rounded-2xl">
            <h3 className="text-3xl font-bold mb-6">India Compliance</h3>
            <ul className="grid md:grid-cols-2 gap-6 text-xl">
              <li>✅ DPDP Act 2023</li>
              <li>✅ GST SAC 998314</li>
              <li>✅ ISO 27001 aligned</li>
              <li>✅ India data residency</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
