export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-black text-white">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 py-4">
        {/* Same nav as above */}
      </nav>

      <section className="pt-32 pb-32 px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
          Free AI IT Assessment
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">AI analyzes your IT stack in 60 seconds</h2>
            <ul className="space-y-4 text-xl text-zinc-300">
              <li>✅ Cloud cost optimization opportunities</li>
              <li>✅ Incident prediction accuracy</li>
              <li>✅ Automation gaps identified</li>
              <li>✅ Custom pricing & timeline</li>
              <li>✅ Zero commitment</li>
            </ul>
            <p className="text-2xl font-bold text-green-400 mt-12">
              Trusted by 50+ enterprises | 98% uptime SLA
            </p>
          </div>
          
          <div className="bg-zinc-900/50 border border-zinc-700 p-12 rounded-2xl">
            <form action="https://formsubmit.co/contact@autonomiqsystems.com" method="POST">
              <input type="hidden" name="_subject" value="New AI Assessment Lead" />
              <input type="hidden" name="_next" value="https://autonomiqsystems.com/thank-you" />
              
              <div className="mb-6">
                <label className="block text-zinc-300 mb-2">Company Name</label>
                <input type="text" name="company" className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded-xl text-white" required />
              </div>
              
              <div className="mb-6">
                <label className="block text-zinc-300 mb-2">Your Role</label>
                <input type="text" name="role" placeholder="CTO / IT Head / Founder" className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded-xl text-white" required />
              </div>
              
              <div className="mb-6">
                <label className="block text-zinc-300 mb-2">Email</label>
                <input type="email" name="email" className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded-xl text-white" required />
              </div>
              
              <div className="mb-8">
                <label className="block text-zinc-300 mb-2">Current Challenge</label>
                <textarea name="challenge" rows="4" className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded-xl text-white resize-none" placeholder="Cloud costs too high? Frequent incidents? Need faster delivery?" required></textarea>
              </div>
              
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6 px-8 rounded-xl text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                🚀 Get Free AI Assessment Report
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
