export default function Services() {
  return (
    <div className="min-h-screen py-32 px-6">
      <h1 className="text-6xl font-bold text-center mb-24 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        AI Services
      </h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-12 border border-zinc-800 rounded-2xl hover:border-blue-500 hover:bg-zinc-950 transition-all">
          <h3 className="text-3xl font-bold mb-6 text-blue-400">AI IT Consulting</h3>
          <ul className="space-y-3 mb-8 text-zinc-400">
            <li>• Strategy roadmaps</li>
            <li>• Cloud architecture</li>
            <li>• Security design</li>
          </ul>
          <div className="text-2xl font-bold text-blue-400">₹50k+</div>
        </div>
        <div className="p-12 border border-zinc-800 rounded-2xl hover:border-blue-500 hover:bg-zinc-950 transition-all">
          <h3 className="text-3xl font-bold mb-6 text-blue-400">AIOps Operations</h3>
          <ul className="space-y-3 mb-8 text-zinc-400">
            <li>• Predictive monitoring</li>
            <li>• Auto-remediation</li>
            <li>• Cost optimization</li>
          </ul>
          <div className="text-2xl font-bold text-blue-400">₹1L/month</div>
        </div>
        <div className="p-12 border border-zinc-800 rounded-2xl hover:border-blue-500 hover:bg-zinc-950 transition-all">
          <h3 className="text-3xl font-bold mb-6 text-blue-400">AI Development</h3>
          <ul className="space-y-3 mb-8 text-zinc-400">
            <li>• Web apps & APIs</li>
            <li>• Enterprise tools</li>
            <li>• Automation</li>
          </ul>
          <div className="text-2xl font-bold text-blue-400">₹3L/sprint</div>
        </div>
      </div>
    </div>
  )
}
