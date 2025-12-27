export default function About() {
  return (
    <div className="min-h-screen py-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-6xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        About AutonomIQ
      </h1>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-8">100% AI-Operated</h2>
          <ul className="space-y-4 text-xl text-zinc-300">
            <li>• No human employees or consultants</li>
            <li>• 24/7 autonomous operations</li>
            <li>• DPDP Act 2023 compliant</li>
            <li>• GST registered</li>
          </ul>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-8">Enterprise Ready</h2>
          <p className="text-xl text-zinc-300 mb-8">India's first fully autonomous AI IT services company.</p>
          <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl">
            Start Assessment
          </a>
        </div>
      </div>
    </div>
  )
}
