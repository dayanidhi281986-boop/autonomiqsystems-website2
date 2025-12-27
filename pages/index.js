import Image from "next/image";
import { useState, useEffect, useCallback } from 'react';

export default function Home() {
  const [particles, setParticles] = useState([]);
  const [hoveredNav, setHoveredNav] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [stats, setStats] = useState({ clients: 247, uptime: 99.999, speed: 12.4, breaches: 0 });

  // Parallax scroll handler
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Quantum particle system
  useEffect(() => {
    const animateParticles = () => {
      setParticles(particles => {
        const updated = particles.map(particle => ({
          ...particle,
          x: particle.x + particle.vx + (scrollY * 0.001),
          y: particle.y + particle.vy + (scrollY * 0.0005),
          opacity: Math.max(0.1, particle.opacity - 0.0005),
          hue: (particle.hue + 0.2) % 360
        })).filter(p => p.opacity > 0.1);

        if (updated.length < 80) {
          updated.push({
            id: Date.now() + Math.random(),
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            size: Math.random() * 4 + 1,
            opacity: Math.random() * 0.6 + 0.4,
            hue: Math.random() * 60 + 180
          });
        }
        return updated;
      });
    };

    const interval = setInterval(animateParticles, 33);
    return () => clearInterval(interval);
  }, [scrollY]);

  // Animate stats counter
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animateCount = (target) => {
            let start = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                start = target;
                clearInterval(timer);
              }
              setStats({
                clients: Math.floor(start),
                uptime: 99.999,
                speed: 12.4,
                breaches: 0
              });
            }, 20);
          };
          animateCount(247);
        }
      });
    });

    const statsEl = document.querySelector('#stats');
    if (statsEl) observer.observe(statsEl);

    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: "🧬", title: "Quantum AI Core", desc: "Self-evolving neural networks with quantum entanglement simulation", color: "#3b82f6" },
    { icon: "🔐", title: "Zero-Trust Security", desc: "Post-quantum cryptography & homomorphic encryption", color: "#10b981" },
    { icon: "⚡", title: "Hyper-Scale Infra", desc: "Distributed orchestration across 50+ cloud regions", color: "#f59e0b" },
    { icon: "🛡️", title: "ThreatShield AI", desc: "Real-time autonomous threat hunting 99.9999% accuracy", color: "#ef4444" },
    { icon: "📊", title: "AIOps Command", desc: "Predictive analytics preventing 98% incidents", color: "#8b5cf6" },
    { icon: "🌐", title: "Global Mesh Network", desc: "Decentralized AI fabric spanning 200+ edge locations", color: "#06b6d4" },
    { icon: "🚀", title: "Quantum Inference", desc: "1000x faster inference with quantum-inspired algorithms", color: "#ec4899" },
    { icon: "🧠", title: "Cognitive Automation", desc: "Human-level reasoning with continuous learning", color: "#f97316" }
  ];

  const pricing = [
    { name: "Quantum Starter", price: "$49K/yr", users: "50+", features: ["Quantum AI Core", "Zero-Trust Security", "Global CDN", "24/7 Support"], popular: false },
    { name: "Enterprise Pro", price: "$199K/yr", users: "500+", features: ["All Starter +", "AIOps Command", "ThreatShield AI", "Custom SLA"], popular: true },
    { name: "Quantum Elite", price: "CUSTOM", users: "∞", features: ["Full Suite", "On-Prem Deployment", "SOC2/ISO27001", "Dedicated Team"], popular: false }
  ];

  return (
    <div style={{
      background: `
        radial-gradient(circle at 20% 80%, rgba(120,119,198,0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255,119,198,0.15) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(120,219,255,0.1) 0%, transparent 50%),
        linear-gradient(135deg, #0a0f1e 0%, #020617 50%, #000000 100%)
      `,
      minHeight: "100vh",
      color: "#f8fafc",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif",
      overflowX: "hidden",
      position: "relative"
    }}>
      
      {/* QUANTUM PARTICLE SYSTEM */}
      {particles.map(p => (
        <div key={p.id} style={{
          position: "fixed",
          left: p.x,
          top: p.y,
          width: p.size,
          height: p.size,
          background: `hsla(${p.hue}, 70%, 60%, ${p.opacity})`,
          borderRadius: "50%",
          backdropFilter: "blur(2px)",
          zIndex: 1,
          boxShadow: `0 0 ${p.size * 3}px hsla(${p.hue}, 70%, 60%, ${p.opacity * 0.6})`,
          transform: `translateZ(0)`
        }} />
      ))}

      {/* ENHANCED HEADER */}
      <header style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        backdropFilter: "blur(50px) saturate(180%)",
        background: "rgba(10, 15, 30, 0.98)",
        borderBottom: "2px solid rgba(59, 130, 246, 0.6)",
        padding: "24px 60px",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)"
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
            gap: "24px", 
            textDecoration: "none",
            transition: "all 0.3s ease"
          }}>
            <div style={{
              position: "relative",
              width: 80,
              height: 80,
              borderRadius: "24px",
              background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%)",
              overflow: "hidden",
              boxShadow: `
                0 0 40px rgba(59, 130, 246, 0.6),
                0 0 80px rgba(59, 130, 246, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
              `,
              border: "2px solid rgba(255, 255, 255, 0.15)"
            }}>
              <Image 
                src="/autonomiq-logo.png" 
                alt="🧬 AUTONOMIQ" 
                fill 
                style={{ 
                  objectFit: "contain",
                  filter: "brightness(1.2) contrast(1.2)"
                }}
                priority 
              />
              <div style={{
                position: "absolute",
                inset: 2,
                background: "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.15) 90deg, transparent 360deg)",
                borderRadius: "20px",
                animation: "spin 4s linear infinite"
              }} />
            </div>
            <div>
              <div style={{ 
                fontSize: "1.5rem", 
                fontWeight: 900, 
                background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                AUTONOMIQ
              </div>
              <div style={{ 
                fontSize: "0.85rem", 
                color: "#94a3b8", 
                fontWeight: 600,
                letterSpacing: "0.05em"
              }}>
                🔐 QUANTUM AI SYSTEMS
              </div>
            </div>
          </a>

          <nav style={{ display: "flex", gap: "8px" }}>
            {['SERVICES', 'QUANTUM AI', 'INDUSTRIES', 'SECURITY', 'PRICING'].map(item => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                style={{ 
                  color: hoveredNav === item ? "#3b82f6" : "#cbd5e1", 
                  textDecoration: "none", 
                  padding: "16px 28px",
                  borderRadius: "16px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  background: hoveredNav === item ? "rgba(59, 130, 246, 0.15)" : "transparent",
                  border: `1px solid ${hoveredNav === item ? "rgba(59, 130, 246, 0.4)" : "transparent"}`,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative"
                }}
                onMouseEnter={() => setHoveredNav(item)}
                onMouseLeave={() => setHoveredNav('')}
              >
                {item}
              </a>
            ))}
            <div style={{
              padding: "16px 32px",
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              color: "white",
              borderRadius: "16px",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
              transition: "all 0.3s ease"
            }}>
              🚀 START TRIAL
            </div>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1600px",
        margin: "0 auto",
        padding: "200px 80px 120px",
        textAlign: "center",
        position: "relative"
      }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))",
          padding: "24px 40px",
          borderRadius: "24px",
          border: "1px solid rgba(59,130,246,0.5)",
          display: "inline-block",
          marginBottom: "48px",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#60a5fa",
          letterSpacing: "0.05em"
        }}>
          🧬 QUANTUM AI SYSTEMS | EST. 2025 | 99.999% UPTIME GUARANTEED
        </div>
        
        <h1 style={{
          fontSize: "clamp(4rem, 10vw, 8rem)",
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: "48px",
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #3b82f6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.02em"
        }}>
          Quantum-Secure AI 
          <br />
          <span style={{ color: "#3b82f6", fontSize: "0.9em" }}>Infrastructure</span>
        </h1>

        <p style={{
          fontSize: "1.5rem",
          lineHeight: 1.7,
          color: "#cbd5e1",
          marginBottom: "64px",
          maxWidth: "800px",
          fontWeight: 300
        }}>
          Deploy <strong>unbreakable AI systems</strong> with quantum-grade encryption, zero-trust 
          architecture, and self-healing infrastructure. Trusted by Fortune 500 enterprises.
        </p>

        <div style={{ display: "flex", gap: "32px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#demo" style={{
            padding: "24px 48px",
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            color: "white",
            textDecoration: "none",
            borderRadius: "20px",
            fontWeight: 800,
            fontSize: "1.2rem",
            boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            position: "relative",
            overflow: "hidden"
          }}>
            🧬 LAUNCH QUANTUM AI
          </a>
          <a href="#features" style={{
            padding: "24px 48px",
            background: "rgba(255,255,255,0.08)",
            color: "#f8fafc",
            textDecoration: "none",
            borderRadius: "20px",
            fontWeight: 700,
            fontSize: "1.1rem",
            border: "2px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(20px)",
            transition: "all 0.4s ease"
          }}>
            🔍 EXPLORE CAPABILITIES
          </a>
        </div>

        {/* LIVE STATS */}
        <div id="stats" style={{ 
          marginTop: "120px", 
          display: "flex", 
          gap: "64px", 
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3.5rem", fontWeight: 900, color: "#3b82f6" }}>
              {stats.clients.toLocaleString()}+
            </div>
            <div style={{ color: "#94a3b8", fontSize: "1rem", marginTop: "8px" }}>ENTERPRISES</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3.5rem", fontWeight: 900, color: "#10b981" }}>
              {stats.uptime}%
            </div>
            <div style={{ color: "#94a3b8", fontSize: "1rem", marginTop: "8px" }}>UPTIME</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3.5rem", fontWeight: 900, color: "#f59e0b" }}>
              {stats.speed}x
            </div>
            <div style={{ color: "#94a3b8", fontSize: "1rem", marginTop: "8px" }}>FASTER</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3.5rem", fontWeight: 900, color: "#ef4444" }}>
              {stats.breaches}
            </div>
            <div style={{ color: "#94a3b8", fontSize: "1rem", marginTop: "8px" }}>BREACHES</div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" style={{
        padding: "200px 80px",
        maxWidth: "1800px",
        margin: "0 auto",
        position: "relative"
      }}>
        <div style={{ textAlign: "center", marginBottom: "140px" }}>
          <h2 style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: 900,
            marginBottom: "32px",
            background: "linear-gradient(135deg, #f8fafc 0%, #3b82f6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Quantum AI Capabilities
          </h2>
          <p style={{ 
            fontSize: "1.4rem", 
            color: "#94a3b8", 
            maxWidth: "800px", 
            margin: "0 auto",
            lineHeight: 1.7
          }}>
            End-to-end AI infrastructure with military-grade security and quantum-resistant encryption
          </p>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", 
          gap: "60px" 
        }}>
          {services.map((service, index) => (
            <div key={service.title} style={{
              background: "rgba(255,255,255,0.025)",
              backdropFilter: "blur(25px) saturate(180%)",
              borderRadius: "32px",
              padding: "64px 48px",
              border: "1px solid rgba(59,130,246,0.15)",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer"
            }}>
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: `linear-gradient(90deg, ${service.color}, transparent)`,
                opacity: 0.7
              }} />
              
              <div style={{ 
                fontSize: "4rem", 
                marginBottom: "32px",
                background: service.color,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 20px rgba(59,130,246,0.3))"
              }}>
                {service.icon}
              </div>
              
              <h3 style={{ 
                fontSize: "2.2rem", 
                fontWeight: 800, 
                marginBottom: "20px",
                color: "#f8fafc"
              }}>
                {service.title}
              </h3>
              
              <p style={{ 
                color: "#cbd5e1", 
                lineHeight: "1.8", 
                fontSize: "1.15rem",
                marginBottom: "32px"
              }}>
                {service.desc}
              </p>
              
              <div style={{
                padding: "12px 24px",
                background: "rgba(59,130,246,0.15)",
                color: service.color,
                borderRadius: "20px",
                fontSize: "0.9rem",
                fontWeight: 600,
                display: "inline-block"
              }}>
                LEARN MORE →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{
        padding: "200px 80px",
        background: "linear-gradient(180deg, rgba(10,15,30,0.9) 0%, rgba(2,6,23,1) 100%)",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ textAlign: "center", marginBottom: "140px" }}>
          <h2 style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: 900,
            background: "linear-gradient(135deg, #f8fafc 0%, #10b981 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Enterprise Quantum Pricing
          </h2>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", 
          gap: "60px", 
          maxWidth: "1600px",
          margin: "0 auto"
        }}>
          {pricing.map((plan, index) => (
            <div key={plan.name} style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(30px)",
              borderRadius: "32px",
              padding: "72px 56px",
              border: plan.popular ? "3px solid #10b981" : "2px solid rgba(255,255,255,0.1)",
              position: "relative",
              transition: "all 0.4s ease",
              boxShadow: plan.popular ? "0 0 0 4px rgba(16,185,129,0.3)" : "none"
            }}>
              {plan.popular && (
                <div style={{
                  position: "absolute",
                  top: -15,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#10b981",
                  color: "white",
                  padding: "12px 32px",
                  borderRadius: "24px",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  boxShadow: "0 10px 25px rgba(16,185,129,0.4)"
                }}>
                  ⭐ MOST POPULAR
                </div>
              )}
              
              <h3 style={{ 
                fontSize: "2.3rem", 
                fontWeight: 800, 
                marginBottom: "24px",
                color: "#f8fafc"
              }}>
                {plan.name}
              </h3>
              
              <div style={{ 
                fontSize: "4.5rem", 
                fontWeight: 900, 
                color: plan.popular ? "#10b981" : "#f8fafc",
                marginBottom: "24px",
                lineHeight: 1
              }}>
                {plan.price}
              </div>
              
              <div style={{ 
                color: "#94a3b8", 
                marginBottom: "48px", 
                fontSize: "1.1rem",
                fontWeight: 500
              }}>
                {plan.users} concurrent users
              </div>
              
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "56px" }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ 
                    padding: "16px 0", 
                    color: "#cbd5e1", 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "16px",
                    fontSize: "1rem"
                  }}>
                    <div style={{
                      width: 24,
                      height: 24,
                      background: "#10b981",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      flexShrink: 0
                    }}>
                      ✓
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" style={{
                width: "100%",
                padding: "24px",
                background: plan.popular 
                  ? "linear-gradient(135deg, #10b981, #059669)" 
                  : "linear-gradient(135deg, #3b82f6, #06b6d4)",
                color: "white",
                textAlign: "center",
                textDecoration: "none",
                borderRadius: "20px",
                fontWeight: 800,
                fontSize: "1.1rem",
                display: "block",
                boxShadow: "0 20px 40px rgba(16,185,129,0.4)"
              }}>
                {plan.popular ? "⚡ CHOOSE ELITE PLAN" : "GET STARTED"}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "100px 80px 60px",
        background: "rgba(0,0,0,0.9)",
        borderTop: "2px solid rgba(59,130,246,0.4)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ 
            fontSize: "1.2rem", 
            marginBottom: "40px", 
            opacity: 0.8,
            fontWeight: 500
          }}>
            © 2025 AUTONOMIQ Quantum AI Systems. All rights reserved. 
            <br />
            Built with <span style={{ color: "#3b82f6" }}>Quantum Security™</span>
          </div>
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "48px", 
            fontSize: "1rem", 
            flexWrap: "wrap" 
          }}>
            <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>Privacy Policy</a>
            <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>Security</a>
            <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>Compliance</a>
            <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>Careers</a>
            <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>API Docs</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 120px;
        }
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}
