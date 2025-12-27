import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [particles, setParticles] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  const modalRef = useRef();

  // Advanced scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['home', 'services', 'leadership', 'features', 'pricing', 'careers', 'about', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top < 100 && rect.bottom > 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Quantum particle system - Enterprise grade
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(p => {
        const updated = p.map(particle => ({
          ...particle,
          x: particle.x + particle.vx + (scrollY * 0.0005),
          y: particle.y + particle.vy + (Math.sin(Date.now() * 0.001 + particle.id) * 0.5),
          opacity: Math.max(0.05, particle.opacity - 0.0003),
          hue: (particle.hue + 0.3) % 360,
          scale: 1 + Math.sin(Date.now() * 0.002 + particle.id) * 0.2
        })).filter(p => p.opacity > 0.05);

        if (updated.length < 120) {
          updated.push({
            id: Date.now() + Math.random(),
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight * 2,
            vx: (Math.random() - 0.5) * 1.2,
            vy: Math.random() * 0.8 - 0.4,
            size: Math.random() * 5 + 2,
            opacity: Math.random() * 0.8 + 0.2,
            hue: Math.random() * 60 + 220,
            scale: 1
          });
        }
        return updated;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [scrollY]);

  const scrollToSection = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    { id: 1, title: "Quantum AI Core Engine", desc: "Self-evolving neural networks with quantum entanglement simulation delivering 1000x inference acceleration", image: "/quantum-core.png" },
    { id: 2, title: "Zero-Trust Security Fabric", desc: "Post-quantum cryptography, homomorphic encryption, continuous behavioral biometrics", image: "/security-matrix.png" },
    { id: 3, title: "Hyper-Scale Infrastructure", desc: "Distributed quantum orchestration across 50+ global cloud regions with 0ms failover", image: "/hyper-scale.png" },
    { id: 4, title: "ThreatShield Autonomous AI", desc: "Real-time threat hunting with 99.9999% zero-day detection accuracy", image: "/threatshield.png" },
    { id: 5, title: "AIOps Predictive Command", desc: "Prevents 98% of incidents before occurrence through quantum predictive analytics", image: "/aiops.png" },
    { id: 6, title: "Global Mesh Network", desc: "Decentralized AI fabric spanning 200+ edge locations worldwide", image: "/global-mesh.png" }
  ];

  const leadership = [
    { 
      name: "Dayanidhi S", 
      title: "Founder & CEO", 
      desc: "15+ years in enterprise IT leadership, quantum AI pioneer, architect of Fortune 500 transformations",
      image: "/founder-dayanidhi.png",
      linkedin: "#"
    }
  ];

  const coreValues = [
    "Quantum Security First",
    "Enterprise Scale Innovation", 
    "Zero-Trust Architecture",
    "Global AI Democratization",
    "Sustainable Quantum Computing"
  ];

  return (
    <div style={{
      background: `
        radial-gradient(circle at 15% 85%, rgba(59,130,246,0.15) 0%, transparent 40%),
        radial-gradient(circle at 85% 25%, rgba(6,182,212,0.12) 0%, transparent 40%),
        radial-gradient(circle at 35% 45%, rgba(139,92,246,0.1) 0%, transparent 40%),
        linear-gradient(135deg, #0a0f1e 0%, #020617 35%, #000000 100%)
      `,
      minHeight: "100vh",
      color: "#f8fafc",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      lineHeight: 1.6,
      overflowX: "hidden",
      position: "relative"
    }}>
      
      {/* QUANTUM PARTICLE FIELD */}
      {particles.map(p => (
        <div key={p.id} style={{
          position: "fixed",
          left: `${p.x}px`,
          top: `${p.y}px`,
          width: p.size,
          height: p.size,
          background: `hsla(${p.hue}, 75%, 65%, ${p.opacity})`,
          borderRadius: "50%",
          backdropFilter: "blur(1.5px)",
          zIndex: 1,
          boxShadow: `0 0 ${p.size * 4}px hsla(${p.hue}, 75%, 65%, ${p.opacity * 0.7})`,
          transform: `scale(${p.scale}) translateZ(0)`
        }} />
      ))}

      {/* ENTERPRISE HEADER */}
      <header style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        backdropFilter: "blur(60px) saturate(200%)",
        background: "rgba(10, 15, 30, 0.98)",
        borderBottom: "3px solid rgba(59, 130, 246, 0.7)",
        padding: "24px 80px",
        boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.1)"
      }}>
        <div style={{ 
          maxWidth: "1800px", 
          margin: "0 auto", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between" 
        }}>
          <a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection('home');}} style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "28px", 
            textDecoration: "none"
          }}>
            <div style={{
              position: "relative",
              width: 90,
              height: 90,
              borderRadius: "28px",
              background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%)",
              overflow: "hidden",
              boxShadow: `
                0 0 50px rgba(59, 130, 246, 0.8),
                0 0 100px rgba(59, 130, 246, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `,
              border: "3px solid rgba(255, 255, 255, 0.2)"
            }}>
              <Image 
                src="/autonomiq-logo.png" 
                alt="🧬 AUTONOMIQ QUANTUM AI" 
                fill 
                style={{ objectFit: "contain", filter: "brightness(1.3) contrast(1.3)" }}
                priority 
              />
              <div style={{
                position: "absolute",
                inset: 3,
                background: "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.2) 180deg, transparent 360deg)",
                borderRadius: "22px",
                animation: "spin 3s linear infinite"
              }} />
            </div>
            <div>
              <div style={{ 
                fontSize: "1.6rem", 
                fontWeight: 900, 
                background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.02em"
              }}>
                AUTONOMIQ
              </div>
              <div style={{ 
                fontSize: "0.85rem", 
                color: "#94a3b8", 
                fontWeight: 600,
                letterSpacing: "0.08em"
              }}>
                🔐 QUANTUM AI SYSTEMS
              </div>
            </div>
          </a>

          <nav style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            {[
              { label: "What We Do", href: "#services" },
              { label: "What We Think", href: "#features" },
              { label: "About", href: "#about" },
              { label: "Leadership", href: "#leadership" },
              { label: "Careers", href: "#careers" },
              { label: "Contact", href: "#contact" }
            ].map(item => (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href.slice(1)); }}
                style={{ 
                  color: activeSection === item.href.slice(1) ? "#3b82f6" : "#cbd5e1", 
                  textDecoration: "none", 
                  padding: "18px 32px",
                  borderRadius: "20px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  background: activeSection === item.href.slice(1) ? "rgba(59, 130, 246, 0.2)" : "transparent",
                  border: `2px solid ${activeSection === item.href.slice(1) ? "rgba(59, 130, 246, 0.5)" : "rgba(255,255,255,0.1)"}`,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {item.label}
              </a>
            ))}
            <div 
              style={{
                padding: "18px 36px",
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                color: "white",
                borderRadius: "20px",
                fontWeight: 800,
                cursor: "pointer",
                boxShadow: "0 15px 40px rgba(59, 130, 246, 0.5)",
                transition: "all 0.4s ease",
                position: "relative"
              }}
              onClick={() => scrollToSection('contact')}
            >
              🚀 GET STARTED
            </div>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1800px",
        margin: "0 auto",
        padding: "220px 100px 150px",
        position: "relative",
        zIndex: 10
      }}>
        <div style={{ flex: 1, maxWidth: "700px" }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(6,182,212,0.25))",
            padding: "24px 40px",
            borderRadius: "24px",
            border: "2px solid rgba(59,130,246,0.6)",
            display: "inline-block",
            marginBottom: "48px",
            fontSize: "1rem",
            fontWeight: 700,
            color: "#60a5fa",
            letterSpacing: "0.08em"
          }}>
            🧬 QUANTUM AI SYSTEMS | EST. 2025 | 99.9999% UPTIME | GLOBAL ENTERPRISES
          </div>
          <h1 style={{
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: "40px",
            background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #3b82f6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Quantum-Secure AI Infrastructure
            <br />
            <span style={{ color: "#3b82f6" }}>Enterprise Scale</span>
          </h1>
          <p style={{
            fontSize: "1.3rem",
            lineHeight: 1.7,
            color: "#cbd5e1",
            marginBottom: "60px",
            maxWidth: "650px",
            fontWeight: 400
          }}>
            Deploy unbreakable AI systems with quantum-grade encryption, zero-trust architecture, 
            and self-healing infrastructure across 50+ global regions. Trusted by Fortune 500 leaders.
          </p>
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            <a href="#services" onClick={(e) => {e.preventDefault(); scrollToSection('services');}} style={{
              padding: "24px 52px",
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              color: "white",
              textDecoration: "none",
              borderRadius: "24px",
              fontWeight: 800,
              fontSize: "1.1rem",
              boxShadow: "0 25px 50px -15px rgba(59, 130, 246, 0.6)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            }}>
              🧬 EXPLORE QUANTUM AI
            </a>
            <a href="#leadership" onClick={(e) => {e.preventDefault(); scrollToSection('leadership');}} style={{
              padding: "24px 52px",
              background: "rgba(255,255,255,0.12)",
              color: "#f8fafc",
              textDecoration: "none",
              borderRadius: "24px",
              fontWeight: 700,
              border: "2px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(25px)",
              fontSize: "1.1rem",
              transition: "all 0.4s ease"
            }}>
              👨‍💼 MEET LEADERSHIP
            </a>
          </div>
        </div>

        <div style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          height: "600px",
          zIndex: 20
        }}>
          <div style={{
            position: "relative",
            width: 550,
            height: 550,
            borderRadius: "50%",
            background: `
              radial-gradient(circle at 30% 30%, rgba(59,130,246,0.4) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(6,182,212,0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 20%, rgba(139,92,246,0.25) 0%, transparent 50%)
            `,
            boxShadow: `
              0 0 120px rgba(59,130,246,0.6),
              0 0 240px rgba(6,182,212,0.4),
              inset 0 0 120px rgba(255,255,255,0.15)
            `,
            animation: "quantumPulse 4s ease-in-out infinite"
          }}>
            <Image 
              src="/quantum-core.png" 
              alt="Quantum AI Core" 
              width={450} 
              height={450}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                filter: "drop-shadow(0 0 40px rgba(59,130,246,0.9))"
              }}
              priority
            />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" style={{
        padding: "180px 100px",
        maxWidth: "1800px",
        margin: "0 auto",
        position: "relative"
      }}>
        <div style={{ textAlign: "center", marginBottom: "140px" }}>
          <h2 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900,
            marginBottom: "28px",
            background: "linear-gradient(135deg, #f8fafc 0%, #3b82f6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            What We Do - Quantum Capabilities
          </h2>
          <p style={{ 
            fontSize: "1.25rem", 
            color: "#94a3b8", 
            maxWidth: "850px", 
            margin: "0 auto",
            lineHeight: 1.7
          }}>
            End-to-end enterprise AI infrastructure with military-grade quantum security and global scalability
          </p>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", 
          gap: "70px" 
        }}>
          {services.map((service) => (
            <div key={service.id} style={{
              background: "rgba(255,255,255,0.035)",
              backdropFilter: "blur(30px) saturate(200%)",
              borderRadius: "36px",
              padding: "72px 56px",
              border: "2px solid rgba(59,130,246,0.2)",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              height: "100%"
            }}
            onClick={() => {
              setModalContent(service.desc);
              setShowModal(true);
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px)";
              e.currentTarget.style.boxShadow = "0 35px 80px rgba(59,130,246,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "5px",
                background: "linear-gradient(90deg, #3b82f6, #06b6d4, #3b82f6)",
                animation: "gradientShift 3s ease-in-out infinite"
              }} />
              
              <Image 
                src={service.image || "/quantum-core.png"} 
                alt={service.title}
                width={120}
                height={120}
                style={{
                  marginBottom: "36px",
                  filter: "drop-shadow(0 0 25px rgba(59,130,246,0.6))",
                  borderRadius: "20px"
                }}
              />
              
              <h3 style={{ 
                fontSize: "1.9rem", 
                fontWeight: 800, 
                marginBottom: "24px",
                color: "#f8fafc"
              }}>
                {service.title}
              </h3>
              
              <p style={{ 
                color: "#cbd5e1", 
                lineHeight: "1.8", 
                fontSize: "1.1rem",
                marginBottom: "40px"
              }}>
                {service.desc}
              </p>
              
              <div style={{
                padding: "16px 28px",
                background: "rgba(59,130,246,0.2)",
                color: "#3b82f6",
                borderRadius: "24px",
                fontSize: "0.95rem",
                fontWeight: 700,
                display: "inline-block",
                border: "1px solid rgba(59,130,246,0.4)"
              }}>
                EXPLORE FEATURES →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section id="leadership" style={{
        padding: "180px 100px",
        background: "linear-gradient(180deg, rgba(10,15,30,0.95) 0%, rgba(2,6,23,1) 100%)",
        maxWidth: "1800px",
        margin: "0 auto"
      }}>
        <div style={{ textAlign: "center", marginBottom: "140px" }}>
          <h2 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900,
            background: "linear-gradient(135deg, #f8fafc 0%, #10b981 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Leadership Team
          </h2>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", 
          gap: "80px",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          {leadership.map((leader, index) => (
            <div key={index} style={{
              display: "flex",
              gap: "60px",
              alignItems: "center",
              background: "rgba(255,255,255,0.025)",
              backdropFilter: "blur(30px)",
              borderRadius: "40px",
              padding: "80px",
              border: "2px solid rgba(255,255,255,0.1)"
            }}>
              <div style={{ flex: "0 0 300px" }}>
                <Image 
                  src={leader.image} 
                  alt={leader.name}
                  width={300}
                  height={380}
                  style={{
                    borderRadius: "28px",
                    boxShadow: "0 35px 80px rgba(0,0,0,0.6)",
                    objectFit: "cover"
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontSize: "2.8rem", 
                  fontWeight: 900, 
                  marginBottom: "20px",
                  color: "#f8fafc"
                }}>
                  {leader.name}
                </h3>
                <div style={{
                  fontSize: "1.3rem",
                  color: "#10b981",
                  fontWeight: 700,
                  marginBottom: "24px",
                  padding: "12px 24px",
                  background: "rgba(16,185,129,0.15)",
                  borderRadius: "20px",
                  display: "inline-block",
                  border: "1px solid rgba(16,185,129,0.4)"
                }}>
                  {leader.title}
                </div>
                <p style={{ 
                  color: "#cbd5e1", 
                  lineHeight: "1.8", 
                  fontSize: "1.15rem",
                  marginBottom: "32px"
                }}>
                  {leader.desc}
                </p>
                <a href={leader.linkedin} style={{
                  padding: "16px 32px",
                  background: "linear-gradient(135deg, #10b981, #059669)",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "24px",
                  fontWeight: 700,
                  display: "inline-block"
                }}>
                  💼 CONNECT ON LINKEDIN
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES / WHAT WE THINK */}
      <section id="features" style={{
        padding: "180px 100px",
        maxWidth: "1800px",
        margin: "0 auto"
      }}>
        <div style={{ textAlign: "center", marginBottom: "140px" }}>
          <h2 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900,
            background: "linear-gradient(135deg, #f8fafc 0%, #ec4899 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            What We Think - Core Values
          </h2>
        </div>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "40px" 
        }}>
          {coreValues.map((value, index) => (
            <div key={index} style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              borderRadius: "28px",
              padding: "64px 40px",
              border: "2px solid rgba(59,130,246,0.2)",
              textAlign: "center",
              transition: "all 0.4s ease"
            }}>
              <div style={{
                fontSize: "3.5rem",
                marginBottom: "32px",
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                0{index + 1}
              </div>
              <h3 style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                marginBottom: "24px",
                color: "#f8fafc"
              }}>
                {value}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{
        padding: "180px 100px",
        background: "linear-gradient(180deg, rgba(10,15,30,0.95) 0%, rgba(2,6,23,1) 100%)",
        maxWidth: "1800px",
        margin: "0 auto"
      }}>
        <div style={{ textAlign: "center", marginBottom: "140px" }}>
          <h2 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900,
            background: "linear-gradient(135deg, #f8fafc 0%, #f59e0b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Enterprise Pricing
          </h2>
        </div>
        {/* Pricing cards here */}
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={{
        padding: "180px 100px",
        background: "rgba(0,0,0,0.95)",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 900,
          background: "linear-gradient(135deg, #f8fafc 0%, #3b82f6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "40px"
        }}>
          Ready to Transform?
        </h2>
        <p style={{ fontSize: "1.3rem", color: "#94a3b8", maxWidth: "700px", margin: "0 auto 60px" }}>
          Contact us for quantum AI enterprise solutions
        </p>
        <button style={{
          padding: "24px 60px",
          background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
          color: "white",
          border: "none",
          borderRadius: "28px",
          fontSize: "1.2rem",
          fontWeight: 800,
          cursor: "pointer"
        }}>
          📧 SCHEDULE CONSULTATION
        </button>
      </section>

      {/* MODAL */}
      {showModal && (
        <div ref={modalRef} style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(20px)",
          zIndex: 100000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px"
        }}
        onClick={(e) => {
          if (e.target === modalRef.current) setShowModal(false);
        }}>
          <div style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(40px)",
            borderRadius: "32px",
            padding: "80px",
            maxWidth: "900px",
            maxHeight: "80vh",
            overflowY: "auto",
            border: "2px solid rgba(59,130,246,0.4)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
              <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "#f8fafc", margin: 0 }}>Feature Details</h3>
              <button onClick={() => setShowModal(false)} style={{
                background: "none",
                border: "none",
                fontSize: "2rem",
                color: "#94a3b8",
                cursor: "pointer"
              }}>
                ×
              </button>
            </div>
            <p style={{ fontSize: "1.2rem", color: "#cbd5e1", lineHeight: 1.8 }}>
              {modalContent}
            </p>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes quantumPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        @keyframes gradientShift {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        html { scroll-behavior: smooth; scroll-padding-top: 140px; }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
