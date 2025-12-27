import { useState, useEffect } from 'react';

export default function Home() {
  const [activeNav, setActiveNav] = useState('home');
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) current = section.id;
      });
      setActiveNav(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((p) => {
        const updated = p.map((particle) => ({
          ...particle,
          y: particle.y + particle.vy,
          opacity: Math.max(0.03, particle.opacity - 0.0005),
        })).filter((p) => p.opacity > 0.03);
        if (updated.length < 80) {
          updated.push({
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            vx: (Math.random() - 0.5) * 1,
            vy: -(Math.random() * 2 + 1),
            opacity: 0.6,
            size: Math.random() * 4 + 2,
          });
        }
        return updated;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e1f] via-[#0a2540] to-[#1e3a8a] text-white overflow-hidden relative">
      {/* Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              background: `hsla(${Math.random() * 60 + 10}, 70%, 50%, ${p.opacity})`,
              boxShadow: `0 0 10px hsla(${Math.random() * 60 + 10}, 70%, 50%, ${p.opacity * 0.5})`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-12 py-4 shadow-2xl">
        <div className="flex space-x-12 text-lg font-semibold">
          {['home', 'quantum', 'leadership'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`transition-all hover:text-orange-400 pb-2 ${
                activeNav === item ? 'text-orange-400 border-b-4 border-orange-400' : 'text-white/80'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-32 px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black bg-gradient-to-r from-white via-orange-100/80 to-orange-400 bg-clip-text text-transparent mb-12 leading-tight">
            AutonomIQ
            <span className="block text-5xl md:text-7xl lg:text-8xl text-white/90 font-normal">Systems</span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl mb-16 max-w-3xl mx-auto leading-relaxed opacity-95">
            Quantum-Enhanced AI Operations Platform
          </p>
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <a
              href="#quantum"
              className="px-16 py-8 bg-gradient-to-r from-orange-500 to-orange-600 text-2xl font-bold rounded-3xl shadow-2xl hover:shadow-orange-500/50 hover:scale-[1.02] transition-all duration-500 border-4 border-orange-500/50"
            >
              🚀 Launch Demo
            </a>
            <a
              href="#leadership"
              className="px-16 py-8 border-4 border-white/30 text-2xl font-bold rounded-3xl hover:bg-white/10 hover:border-orange-400 transition-all duration-300"
            >
              Meet Founder
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto text-center">
          <div>
            <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4">
              99.999%
            </div>
            <div className="text-xl opacity-90 font-semibold">Uptime SLA</div>
          </div>
          <div>
            <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4">
              450ms
            </div>
            <div className="text-xl opacity-90 font-semibold">Neural Latency</div>
          </div>
          <div>
            <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text
