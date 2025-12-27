'use client'
export default function Contact() {
  return (
    <div className="min-h-screen py-32 px-6 max-w-2xl mx-auto">
      <h1 className="text-6xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Free AI Assessment
      </h1>
      <form className="space-y-6 bg-zinc-950 p-12 rounded-2xl border border-zinc-800">
        <input type="text" placeholder="Company Name" className="w-full p-5 bg-zinc-900 border border-zinc-700 rounded-xl text-white text-xl" />
        <input type="email" placeholder="Email" className="w-full p-5 bg-zinc-900 border border-zinc-700 rounded-xl text-white text-xl" />
        <textarea rows={6} placeholder="Your IT Challenge (Cloud costs? Downtime? Dev speed?)" className="w-full p-5 bg-zinc-900 border border-zinc-700 rounded-xl text-white text-xl" />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-6 text-2xl font-bold rounded-xl">
          Send to hello@autonomiqsystems.com →
        </button>
      </form>
      <p className="text-center mt-12 text-zinc-500 text-sm">
        ⚠️ AI-operated company. Recommendations only. DPDP Act 2023 compliant.
      </p>
    </div>
  )
}
