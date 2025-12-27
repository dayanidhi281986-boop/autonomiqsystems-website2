import { useState, useEffect } from 'react';

export default function Home() {
  const [activeNav, setActiveNav] = useState('home');
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach(section => {
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
      setParticles(p => {
        const updated = p.map(particle => ({
          ...particle,
          y: particle.y + particle.vy,
          opacity: Math.max(0.1, particle.opacity - 0.001)
        })).filter(p => p.opacity > 0.1);

        if (updated.length < 100) {
          updated.push({
            x: Math.random() * 100,
            y: 100,
            vx: (Math.random() - 0.5) * 0.5,
            vy: Math.random() * 0.5 + 0.2,
            opacity: 0.8,
            size: Math.random() * 3 + 1
          });
        }
        return updated;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
          background: linear-gradient(135deg, #0a0e1f 0%, #0a2540 50%, #1e3a8a 100%);
          color: white; 
          overflow-x: hidden;
        }
        .glass { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; }
        .hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 100px 20px; position: relative; }
        .h1-hero { font-size: clamp(4rem, 12vw, 9rem); font-weight: 900; background: linear-gradient(135deg, #fff 0%, #ff6b35 50%, #ffd700 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 24px; }
        .hero-subtitle { font-size: clamp(1.3rem, 3vw, 2.5rem); max-width: 800px; margin: 0 auto 48px; line-height: 1.4; opacity: 0.95; }
        .cta-primary { background: linear-gradient(135deg, #ff6b35 0%, #f97316 100%); color: white; padding: 20px 48px; font-size: 1.3rem; font-weight: 600; border: none; border-radius: 50px; cursor: pointer; display: inline-flex; align-items: center; gap: 12px; box-shadow: 0 20px 40px rgba(255,107,53,0.4); transition: all 0.4s; text-decoration: none; }
        .cta-primary:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 30px 60px rgba(255,107,53,0.5); }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px; margin: 80px 0; padding: 60px 0; background: rgba(0,0,0,0.2); }
        .stat-number { font-size: clamp(2.5rem, 8vw, 5rem); font-weight: 900; background: linear-gradient(135deg, #ff6b35, #ffd700); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .section { padding: 120px 0; }
        .section-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 800; text-align: center; margin-bottom: 16px; background: linear-gradient(135deg, #fff 0%, #e2e8f0 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .core-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 48px; max-width: 1400px; margin: 0 auto; padding: 0 20px; }
        .core-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 48px; text-align: center; transition: transform 0.5s; position: relative; overflow: hidden; }
        .core-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #ff6b35, #ffd700); transform: scaleX(0); transition: transform 0.4s; }
        .core-card:hover::before { transform: scaleX(1); }
        .core-card:hover { transform: translateY(-12px); }
        .leadership { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); }
        .founder-img { width: 280px; height: 280px; border-radius: 50%; object-fit: cover; margin: 0 auto 32px; border: 8px solid rgba(255,107,53,0.3); box-shadow: 0 40px 80px rgba(0,0,0,0.5); animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        footer { background: linear-gradient(135deg, #000 0%, #0a0e1f 100%); color: rgba(255,255,255,0.7); padding: 80px 20px 40px; text-align: center; }
        .particles { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; }
        .particle { position: absolute; background: radial-gradient(circle, rgba(255,107,53,0.6) 0%, transparent 70%); border-radius: 50%; animation: particleFloat 20s infinite linear; }
        @keyframes particleFloat { 0% { transform: translateY(100vh) rotate(0deg); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; } }
        @media (max-width: 768px) { .hero { padding: 80px 20px; } .h1-hero { font-size: 3.5rem; } }
      `}</style>

      <div className="particles" id="particles" />

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass px-8 py-4 rounded-2xl backdrop-blur-xl border border-white/10">
        <div className="flex space-x-8 text-sm font-medium">
          {['home', 'quantum', 'leadership'].map(item => (
            <a key={item} href={`#${item}`} className={`hover:text-orange-400 transition-all ${activeNav === item ? 'text-orange-400 border-b-2 border-orange-400 pb-1' : ''}`}>
              {item === 'home' ? 'Home' : item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="text-center z-10 relative max-w-4xl mx-auto">
          <h1 className="h1-hero">AutonomIQ Systems</h1>
          <p className="hero-subtitle">Quantum-Enhanced AI Operations Platform. Autonomous Infrastructure Intelligence with Real-Time Neural Optimization.</p>
          <div>
            <a href="#quantum" className="cta-primary">🚀 Launch Quantum Demo</a>
            <a href="#leadership" className="cta-primary" style={{background: 'transparent', border: '2px solid rgba(255,255,255,0.3)'}}>Meet Founder</a>
          </div>
        </div>
      </section>

      <section className="stats glass max-w-6xl mx-auto p-12 rounded-3xl mx-6 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="stat"><div className="stat-number">99.999%</div><div>Uptime SLA</div></div>
          <div className="stat"><div className="stat-number">450ms</div><div>Neural Latency</div></div>
          <div className="stat"><div className="stat-number">120x</div><div>Faster Predictions</div></div>
          <div className="stat"><div className="stat-number">0-Human</div><div>Autonomous Ops</div></div>
        </div>
      </section>

      <section id="quantum" className="section">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title mb-12">Quantum AI Core Engine</h2>
          <div className="core-grid">
            <div className="core-card">
              <div className="core-icon" style={{fontSize: '3rem'}}>⚛️</div>
              <h3>Quantum State Prediction</h3>
              <p>Real-time quantum simulation of infrastructure states with 100x faster convergence.</p>
            </div>
            <div className="core-card">
              <div className="core-icon" style={{fontSize: '3rem'}}>🧠</div>
              <h3>Neural Architecture Search</h3>
              <p>Automated discovery of optimal deep learning architectures. 47% accuracy improvement.</p>
            </div>
            <div className="core-card">
              <div className="core-icon" style={{fontSize: '3rem'}}>🌐</div>
              <h3>Multi-Cloud Quantum Fabric</h3>
              <p>Seamless orchestration across Azure Quantum, GCP Bristlecone, and AWS OQC.</p>
            </div>
            <div className="core-card">
              <div className="core-icon" style={{fontSize: '3rem'}}>⚡</div>
              <h3>Zero-Touch Remediation</h3>
              <p>93% first-contact resolution rate, 8.2x MTTR reduction with quantum decision trees.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="leadership section" id="leadership">
        <div className="text-center max-w-4xl mx-auto">
          <img src="/founder-dayanidhi.png" alt="DAYANIDHI DONDAPATI" className="founder-img block mx-auto" />
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">DAYANIDHI DONDAPATI</h2>
          <p className="text-2xl font-semibold text-orange-400 mb-8">Founder & CEO | Quantum AI Pioneer</p>
          <p className="text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">15+ years enterprise IT leadership. Patented Neural Architecture Search algorithms deployed at petabyte scale. Kubernetes | AIOps | Quantum Computing expert.</p>
        </div>
      </section>

      <footer>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6">© 2025 AutonomIQ Systems. All Quantum Rights Reserved.</p>
          <p className="opacity-75">Rasapūḍipalem, Andhra Pradesh, India | Patents Pending: US2025QAI001-47</p>
        </div>
      </footer>
    </>
  );
}
