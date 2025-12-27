export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-black text-white">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            AutonomIQ Systems
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-blue-400 font-medium">Home</a>
            <a href="/pricing" className="hover:text-blue-400 font-medium">Pricing</a>
            <a href="/about" className="hover:text-blue-400 font-medium">About</a>
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl font-bold text-sm transition-all duration-300">
              Free Assessment
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-32 px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-6xl font-black mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center md:text-left">
              Free AI IT Assessment
            </h1>
            <h2 className="text-3xl font-bold mb-8 text-white">AI analyzes your IT stack in 60 seconds</h2>
            <ul className="space-y-4 text-xl text-zinc-300">
              <li>✅ Cloud cost optimization opportunities (20-40% savings)</li>
              <li>✅ Incident prediction accuracy (95%+)</li>
              <li>✅ Automation gaps identified</li>
              <li>✅ Custom pricing & timeline</li>
              <li>✅ Zero commitment - 100% free</li>
            </ul>
            <p className="text-2xl font-bold text-green-400 mt-12 text-center md:text-left">
              Trusted by 50+ enterprises | 98% uptime SLA
            </p>
          </div>
          
          <div className="bg-zinc-900/50 border border-zinc-700 p-12 rounded-3xl backdrop-blur-xl">
            <h3 className="text-3xl font-bold mb-8 text-white">AI Assessment Form</h3>
            <form action="https://formsubmit.co/contact@autonomiqsystems.com" method="POST">
              <input type="hidden" name="_subject" value="New AI Assessment Lead - AutonomIQ Systems" />
              <input type="hidden" name="_next" value="https://autonomiqsystems-website2.vercel.app/thank-you" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="mb-6">
                <label className="block text-zinc-300 mb-3 font-semibold">Company Name *</label>
                <input type="text" name="company" className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded-2xl text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition-all" required />
              </div>
              
              <div className="mb-6">
                <label className="block text-zinc-300 mb-3 font-semibold">Your Role *</label>
                <input type="text" name="role" placeholder="CTO / IT Head / Founder / VP Engineering" className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded-2xl text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition-all" required />
              </div>
              
              <div className="mb-6">
                <label className="block text-zinc-300 mb-3 font-semibold">Email *</label>
                <input type="email" name="email" className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded-2xl text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition-all" required />
              </div>
              
              <div className="mb-8">
                <label className="block text-zinc-300 mb-3 font-semibold">Current IT Challenge *</label>
                <textarea name="challenge" rows="4" className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded-2xl text-white placeholder-zinc-500 resize-vertical focus:border-blue-500 focus:outline-none transition-all" placeholder="Cloud costs too high? Frequent incidents? Need faster delivery? Legacy system migration? Compliance issues?" required></textarea>
              </div>
              
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-black py-6 px-8 rounded-2xl text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                🚀 Get Free AI Assessment Report (60 seconds)
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
