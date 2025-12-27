// pages/index.js - 100% VERCEL DEPLOYMENT READY
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [particles, setParticles] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticles = prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy + scrollY * 0.1,
          opacity: Math.max(0.1, p.opacity - 0.001)
        })).filter(p => p.x > -50 && p.x < window.innerWidth + 50);
        
        if (newParticles.length < 50) {
          newParticles.push({
            id: Date.now(),
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.2
          });
        }
        return newParticles;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [scrollY]);

  return (
    <div style={{
      background: `radial-gradient(circle at 20% 80%, rgba(120,119,198,0.3) 0%, transparent 50%),
                   radial-gradient(circle at 80% 20%, rgba(255,119,198,0.3) 0%, transparent 50%),
                   linear-gradient(135deg, #0a0f1e 0%, #020617 50%, #000000 100%)`,
      minHeight: "100vh",
      color: "#f8fafc",
      fontFamily: "'Inter', system-ui, sans-serif",
      overflowX: "hidden",
      position: "relative"
    }}>
      
      {/* PARTICLES */}
      {particles.map(p => (
        <div 
          key={p.id}
          style={{
            position: "fixed",
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: p.size,
            height: p.size,
            background: `hsla(${200 + p.id % 60}, 70%, 60%, ${p.opacity})`,
            borderRadius: "50%",
            zIndex: 1,
            boxShadow: `0 0 10px hsla(200, 70%, 60%, ${p.opacity * 0.5})`
          }}
        />
      ))}

      {/* FIXED HEADER */}
      <header style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 10000,
        backdropFilter: "blur(50px)",
        background: "rgba(10,15,30,0.98)",
        borderBottom: "2px solid rgba(59,130,246,0.6)",
        padding: "20px 40px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)"
      }}>
        <div style={{ 
          maxWidth: "1600px", 
          margin: "0 auto", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between" 
        }}>
          <a href="#" style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "20px", 
            textDecoration: "none" 
          }}>
            <div style={{
              position: "relative",
              width: 72,
              height: 72,
              borderRadius: "20px",
              background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%)",
              overflow: "hidden",
              boxShadow: "0 0 40px rgba(59,130,246,0.7)",
              border: "2px solid rgba(255,255,255,0.2)"
            }}>
              <Image 
                src="/autonomiq-logo.png" 
                alt="AUTONOMIQ" 
                fill 
                style={{ objectFit: "contain" }}
                priority 
              />
            </div>
            <div>
              <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "#f8fafc" }}>
                AUTONOMIQ
              </div>
              <div style={{ fontSize: "0.8rem", color: "#94a3b8", fontWeight: 500 }}>
                QUANTUM AI SYSTEMS
              </div>
            </div>
          </a>
          
          <nav style={{ display: "flex", gap: "32px" }}>
            {['SERVICES', 'INDUSTRIES', 'PRICING'].map(item => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{ 
                  color: "#cbd5e1", 
                  textDecoration: "none", 
                  padding: "12px 24px",
                  borderRadius: "12px",
                  fontWeight: 600
                }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1600px",
        margin: "0 auto",
        padding: "160px 60px 100px"
      }}>
        <div style={{ flex: 1 }}>
          <div style={{
            background: "rgba(59,130,246,0.2)",
            padding: "20px 32px",
            borderRadius: "20px",
            border: "1px solid rgba(59,130,246,0.5)",
            display: "inline-block",
            marginBottom: "32px",
            fontSize: "0.9rem",
            color: "#60a5fa"
          }}>
            🧬 QUANTUM AI SYSTEMS | 99.999% UPTIME
          </div>
          <h1 style={{
            fontSize: "clamp(3.5rem, 8vw, 6rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "32px",
            background: "linear-gradient(135deg, #f8fafc 0%, #3b82f6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Quantum-Secure AI 
            <br />
            <span style={{ color: "#3b82f6" }}>Infrastructure</span>
          </h1>
          <p style={{
            fontSize: "1.4rem",
            lineHeight: 1.6,
            color: "#cbd5e1",
            marginBottom: "48px",
            maxWidth: "600px"
          }}>
            Deploy unbreakable AI systems with quantum-grade encryption and self-healing infrastructure.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#demo" style={{
              padding: "20px 40px",
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              color: "white",
              textDecoration: "none",
              borderRadius: "16px",
              fontWeight: 700,
              fontSize: "1.1rem"
            }}>
              🚀 LAUNCH QUANTUM AI
            </a>
            <a href="#features" style={{
              padding: "20px 40px",
              background: "rgba(255,255,255,0.1)",
              color: "#f8fafc",
              textDecoration: "none",
              borderRadius: "16px",
              border: "2px solid rgba(255,255,255,0.2)",
              fontWeight: 600
            }}>
              🔍 VIEW CAPABILITIES
            </a>
          </div>
        </div>

        <div style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          height: "500px"
        }}>
          <div style={{
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
            boxShadow: "0 0 100px rgba(59,130,246,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}>
            <Image 
              src="/autonomiq-logo.png" 
              alt="Quantum Core" 
              width={300} 
              height={300}
              style={{ filter: "drop-shadow(0 0 30px rgba(59,130,246,0.8))" }}
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{
        padding: "150px 60px",
        maxWidth: "1600px",
        margin: "0 auto"
      }}>
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <h2 style={{
            fontSize: "4rem",
            fontWeight: 900,
            background: "linear-gradient(135deg, #f8fafc, #3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "24px"
          }}>
            Quantum AI Capabilities
          </h2>
        </div>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
          gap: "40px" 
        }}>
          {[
            { icon: "🧬", title: "Quantum AI Core", desc: "Self-evolving neural networks" },
            { icon: "🔐", title: "Zero-Trust Security", desc: "Post-quantum cryptography" },
            { icon: "⚡", title: "Hyper-Scale Infra", desc: "Global orchestration" },
            { icon: "🛡️", title: "ThreatShield AI", desc: "Autonomous threat hunting" },
            { icon: "📊", title: "AIOps Command", desc: "Predictive analytics" },
            { icon: "🌐", title: "Global Mesh", desc: "Decentralized AI fabric" }
          ].map((service, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "48px 32px",
              border: "1px solid rgba(59,130,246,0.2)"
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "24px" }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "16px" }}>
                {service.title}
              </h3>
              <p style={{ color: "#cbd5e1" }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "80px 60px 40px",
        background: "rgba(0,0,0,0.8)",
        textAlign: "center",
        borderTop: "1px solid rgba(59,130,246,0.3)"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          © 2025 AUTONOMIQ Quantum AI Systems. All rights reserved.
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
