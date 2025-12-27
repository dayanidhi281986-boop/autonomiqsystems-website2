export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-black text-white">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            AutonomIQ Systems
          </a>
          <a href="/" className="hover:text-blue-400">Home</a>
        </div>
      </nav>

      <section className="pt-32 pb-32 px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
          Free AI Assessment
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">AI analyzes your IT in 60s</h2>
            <ul className="space-y-4 text-xl text-zinc-300">
              <li>✅ Cloud cost savings</li>
              <li>✅ Incident prediction</li>
              <li>✅ Automation gaps</li>
              <li>✅ Custom pricing</li>
            </ul>
          </div>
          
          <div className="bg-zinc-900/50 border border-zinc-700 p-12 rounded-2xl">
            <form action="https://formsubmit.co/contact@autonomiqsystems.com" method="POST">
              <input type="hidden" name="_subject" value="AI Assessment Lead" />
              <input type="hidden" name="_next" value="https://autonomiqsystems-website2.vercel.app" />
              
              <div className="mb-6">
                <label className="block text-zinc-300 mb-2">Company *</label>
                <input type="text" name="company" className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded-xl text-white" required />
              </div>
              
              <div className="mb-6">
                <label className="block text-zinc-300 mb-2">Role *</label>
                <input type="text" name="role" className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded-xl text-white" required />
              </div>
              
              <div className="mb-6">
                <label className="block text-zinc-300 mb-2">Email *</label>
                <input type="email" name="email" className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded-xl text-white" required />
              </div>
              
              <div className="mb-8">
                <label className="block text-zinc-300 mb-2">Challenge *</label>
                <textarea name="challenge" rows="4" className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded-xl text-white" required></textarea>
              </div>
              
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded-xl text-xl">
                🚀 Get AI Report
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
