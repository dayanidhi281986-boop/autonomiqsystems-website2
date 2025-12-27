import Image from "next/image";
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [activeNav, setActiveNav] = useState('home');
  const [openModal, setOpenModal] = useState(null);
  const [particles, setParticles] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.id;
        }
      });
      setActiveNav(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 150+ Quantum Particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(p => {
        const updated = p.map(particle => ({
          ...particle,
          x: particle.x + particle.vx + (scrollY * 0.0003),
          y: particle.y + particle.vy,
          opacity: Math.max(0.03, particle.opacity - 0.0002),
          hue: (particle.hue + 0.4) % 360
        })).filter(p => p.opacity > 0.03);

        if (updated.length < 150) {
          for (let i = 0; i < 3; i++) {
            updated.push({
              id: Date.now() + Math.random(),
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              vx: (Math.random() - 0.5) * 1.5,
              vy: Math.random() * 0.6 - 0.3,
              size: Math.random() * 6 + 1.5,
              opacity: Math.random() * 0.9 + 0.3,
              hue: Math.random() * 60 + 200
            });
          }
        }
        return updated.slice(0, 150);
      });
    }, 30);
    return () => clearInterval(interval);
  }, [scrollY]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const enterpriseServices = [
    {
      title: "Quantum AI Core Engine",
      desc: "Self-evolving neural networks with quantum entanglement simulation. 1000x inference acceleration with zero data leakage.",
      image: "/quantum-core.png",
      stats: "99.9999% Accuracy"
    },
    {
      title: "Zero-Trust Security Fabric", 
      desc: "Post-quantum cryptography + homomorphic encryption + continuous behavioral biometrics across 50+ regions.",
      image: "/security-matrix.png",
      stats: "0 Breaches"
    },
    {
      title: "Hyper-Scale Infrastructure",
      desc: "Distributed quantum orchestration with 0ms failover across AWS, Azure, GCP in 200+ edge locations worldwide.",
      image: "/hyper-scale.png", 
      stats: "50+ Regions"
    }
  ];

  const leadershipTeam = [
    {
      name: "Dayanidhi S",
      title: "Founder & CEO",
      experience: "15+ Years Enterprise IT | Quantum AI Pioneer | Fortune 500 Architect",
      image: "/founder-dayanidhi.png"
    }
  ];

  const closeModal = (e) => {
    if (e.target === modalRef.current) setOpenModal(null);
  };

  return (
    <div style={{
      background: `
        radial-gradient(circle at 10% 90%, hsla(220, 70%, 50%, 0.2) 0%, transparent 45%),
        radial-gradient(circle at 90% 15%, hsla(200, 70%, 55%, 0.18) 0%, transparent 45%),
        radial-gradient(circle at 40% 60%, hsla(260, 70%, 60%, 0.15) 0%, transparent 45%),
        radial-gradient(circle at 70% 30%, hsla(180, 70%, 65%, 0.12) 0%, transparent 45%),
        linear-gradient(145deg, #0a0f1e 0%, #020617 40%, #00040a 100%)
      `,
      minHeight: "100vh",
      color: "#f8fafc",
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
      overflowX: "hidden"
    }}>

      {/* QUANTUM FIELD */}
      {particles.map(p => (
        <div key={p.id} style={{
          position: 'fixed',
          left: `${p.x}px`,
          top: `${p.y}px`,
          width: p.size,
          height: p.size,
          background: `hsla(${p.hue}, 80%, 65%, ${p.opacity})`,
          borderRadius: '50%',
          backdropFilter: 'blur(2px)',
          zIndex: 1,
          boxShadow: `0 0 ${p.size * 5}px hsla(${p.hue}, 80%, 65%, ${p.opacity * 0.8})`
        }}/>
      ))}

      {/* GLOBAL ENTERPRISE HEADER */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        backdropFilter: 'blur(80px) saturate(220%) brightness(1.1)',
        background: 'rgba(10,15,30,0.98)',
        borderBottom: '3px solid rgba(59,130,246,0.8)',
        padding: '28px 100px',
        boxShadow: '0 30px 80px -20px rgba(0,0,0,0.85)'
      }}>
        <div style={{
          maxWidth: '2000px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <a href="#home" onClick={e => {e.preventDefault(); scrollTo('home');}} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            textDecoration: 'none'
          }}>
            <div style={{
              position: 'relative',
              width: 100,
              height: 100,
              borderRadius: '32px',
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 40%, #06b6d4 70%, #1e3a8a 100%)',
              overflow: 'hidden',
              boxShadow: `
                0 0 60px rgba(59,130,246,0.9),
                0 0 120px rgba(59,130,246,0.5),
                inset 0 1px 0 rgba(255,255,255,0.4)
              `,
              border: '3px solid rgba(255,255,255,0.25)'
            }}>
              <Image src="/autonomiq-logo.png" alt="AUTONOMIQ" fill style={{objectFit: 'contain'}} priority/>
              <div style={{
                position: 'absolute',
                inset: 4,
                background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.25) 200deg, transparent 360deg)',
                borderRadius: '24px',
                animation: 'spin 2.5s linear infinite'
              }}/>
            </div>
            <div>
              <div style={{
                fontSize: '1.8rem',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>AUTONOMIQ</div>
              <div style={{
                fontSize: '0.9rem',
                color: '#94a3b8',
                fontWeight: 700,
                letterSpacing: '0.1em'
              }}>QUANTUM AI SYSTEMS</div>
            </div>
          </a>

          {/* ENTERPRISE NAV */}
          <nav style={{display: 'flex', gap: '16px'}}>
            {[
              {label: 'What We Do', id: 'services'},
              {label: 'What We Think', id: 'insights'},
              {label: 'Leadership', id: 'leadership'},
              {label: 'Careers', id: 'careers'},
              {label: 'Contact', id: 'contact'}
            ].map(item => (
              <a key={item.id} href={`#${item.id}`} onClick={e => {
                e.preventDefault();
                scrollTo(item.id);
              }} style={{
                color: activeNav === item.id ? '#3b82f6' : '#cbd5e1',
                textDecoration: 'none',
                padding: '20px 36px',
                borderRadius: '24px',
                fontWeight: 700,
                background: activeNav === item.id ? 'rgba(59,130,246,0.25)' : 'transparent',
                border: `2px solid ${activeNav === item.id ? 'rgba(59,130,246,0.6)' : 'rgba(255,255,255,0.15)'}`,
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)'
              }}>
                {item.label}
              </a>
            ))}
            <div onClick={() => scrollTo('contact')} style={{
              padding: '20px 40px',
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
              color: 'white',
              borderRadius: '24px',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 20px 50px rgba(59,130,246,0.5)'
            }}>
              🚀 START PROJECT
            </div>
          </nav>
        </div>
      </header>

      {/* HERO - ENTERPRISE LEVEL */}
      <section id="home" style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '2000px',
        margin: '0 auto',
        padding: '0 120px'
      }}>
        <div style={{flex: 1, maxWidth: '750px'}}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(6,182,212,0.3))',
            padding: '28px 44px',
            borderRadius: '28px',
            border: '2px solid rgba(59,130,246,0.7)',
            display: 'inline-block',
            marginBottom: '56px',
            fontSize: '1.1rem',
            fontWeight: 700,
            color: '#60a5fa',
            letterSpacing: '0.1em'
          }}>
            🧬 QUANTUM AI SYSTEMS | EST. 2025 | 99.9999% UPTIME | FORTUNE 500 TRUSTED
          </div>
          <h1 style={{
            fontSize: 'clamp(4rem, 9vw, 7rem)',
            fontWeight: 900,
            lineHeight: 1.12,
            marginBottom: '48px',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Quantum-Secure AI 
            <br/>
            <span style={{color: '#3b82f6'}}>Infrastructure</span>
          </h1>
          <p style={{
            fontSize: '1.4rem',
            lineHeight: 1.75,
            color: '#cbd5e1',
            marginBottom: '72px',
            maxWidth: '700px'
          }}>
            Deploy unbreakable enterprise AI with quantum-grade encryption, zero-trust security, 
            and self-healing infrastructure across 50+ global cloud regions.
          </p>
          <div style={{display: 'flex', gap: '36px'}}>
            <a href="#services" onClick={e => {e.preventDefault(); scrollTo('services');}} style={{
              padding: '28px 56px',
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '28px',
              fontWeight: 800,
              fontSize: '1.15rem',
              boxShadow: '0 30px 60px -20px rgba(59,130,246,0.6)'
            }}>
              🧬 LAUNCH QUANTUM AI
            </a>
            <a href="#leadership" onClick={e => {e.preventDefault(); scrollTo('leadership');}} style={{
              padding: '28px 56px',
              background: 'rgba(255,255,255,0.12)',
              color: '#f8fafc',
              textDecoration: 'none',
              borderRadius: '28px',
              border: '2px solid rgba(255,255,255,0.3)',
              backdropFilter: 'blur(30px)',
              fontWeight: 700,
              fontSize: '1.1rem'
            }}>
              👨‍💼 MEET LEADERSHIP
            </a>
          </div>
        </div>

        <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
          <div style={{
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: `
              radial-gradient(circle at 25% 25%, rgba(59,130,246,0.45) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(6,182,212,0.35) 0%, transparent 50%),
              inset 0 0 120px rgba(255,255,255,0.2)
            `,
            boxShadow: `
              0 0 150px rgba(59,130,246,0.7),
              0 0 300px rgba(6,182,212,0.5)
            `,
            animation: 'quantumFloat 6s ease-in-out infinite'
          }}>
            <Image 
              src="/quantum-core.png" 
              alt="Quantum Core" 
              width={500} 
              height={500}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                filter: 'drop-shadow(0 0 50px rgba(59,130,246,1))'
              }}
              priority
            />
          </div>
        </div>
      </section>

      {/* WHAT WE DO - SERVICES */}
      <section id="services" style={{padding: '200px 120px', maxWidth: '2000px', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: '160px'}}>
          <h2 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 900,
            marginBottom: '32px',
            background: 'linear-gradient(135deg, #f8fafc 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            What We Do
          </h2>
          <p style={{fontSize: '1.35rem', color: '#94a3b8', maxWidth: '900px', margin: '0 auto'}}>
            Enterprise-grade quantum AI infrastructure for Fortune 500 transformations
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '80px'}}>
          {enterpriseServices.map((service, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(40px)',
              borderRadius: '40px',
              padding: '88px 72px',
              border: '2px solid rgba(59,130,246,0.25)',
              cursor: 'pointer',
              transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onClick={() => setOpenModal(service)}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-16px)';
              e.currentTarget.style.boxShadow = '0 50px 100px rgba(59,130,246,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '6px',
                background: 'linear-gradient(90deg, #3b82f6, #06b6d4, #ec4899)',
                animation: 'gradientShift 2s ease-in-out infinite'
              }}/>
              
              <Image 
                src={service.image} 
                alt={service.title}
                width={140}
                height={140}
                style={{
                  marginBottom: '44px',
                  filter: 'drop-shadow(0 0 30px rgba(59,130,246,0.8))',
                  borderRadius: '24px'
                }}
              />
              
              <h3 style={{
                fontSize: '2.2rem',
                fontWeight: 900,
                marginBottom: '28px',
                color: '#f8fafc'
              }}>
                {service.title}
              </h3>
              
              <p style={{
                color: '#cbd5e1',
                lineHeight: 1.85,
                fontSize: '1.2rem',
                marginBottom: '44px'
              }}>
                {service.desc}
              </p>
              
              <div style={{
                padding: '20px 36px',
                background: 'rgba(59,130,246,0.25)',
                color: '#3b82f6',
                borderRadius: '28px',
                fontSize: '1rem',
                fontWeight: 800,
                border: '2px solid rgba(59,130,246,0.5)',
                display: 'inline-block'
              }}>
                {service.stats} →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" style={{
        padding: '200px 120px',
        background: 'linear-gradient(180deg, rgba(10,15,30,0.98) 0%, rgba(2,6,23,1) 100%)',
        maxWidth: '2000px',
        margin: '0 auto'
      }}>
        <div style={{textAlign: 'center', marginBottom: '160px'}}>
          <h2 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #f8fafc 0%, #10b981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Leadership
          </h2>
        </div>
        
        <div style={{display: 'flex', gap: '100px', maxWidth: '1600px', margin: '0 auto'}}>
          {leadershipTeam.map((leader, i) => (
            <div key={i} style={{
              flex: 1,
              textAlign: 'center',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(40px)',
              borderRadius: '44px',
              padding: '100px 60px',
              border: '2px solid rgba(255,255,255,0.15)'
            }}>
              <Image 
                src={leader.image}
                alt={leader.name}
                width={320}
                height={400}
                style={{
                  borderRadius: '32px',
                  boxShadow: '0 40px 100px rgba(0,0,0,0.7)',
                  marginBottom: '48px',
                  objectFit: 'cover'
                }}
              />
              <h3 style={{
                fontSize: '3rem',
                fontWeight: 900,
                marginBottom: '24px',
                color: '#f8fafc'
              }}>
                {leader.name}
              </h3>
              <div style={{
                fontSize: '1.4rem',
                color: '#10b981',
                fontWeight: 800,
                marginBottom: '32px',
                padding: '16px 32px',
                background: 'rgba(16,185,129,0.2)',
                borderRadius: '24px',
                display: 'inline-block',
                border: '2px solid rgba(16,185,129,0.5)'
              }}>
                {leader.title}
              </div>
              <p style={{
                color: '#cbd5e1',
                fontSize: '1.2rem',
                lineHeight: 1.8
              }}>
                {leader.experience}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '120px 120px 60px',
        background: 'rgba(0,0,0,0.95)',
        borderTop: '3px solid rgba(59,130,246,0.5)',
        textAlign: 'center'
      }}>
        <div style={{maxWidth: '1400px', margin: '0 auto 60px'}}>
          <div style={{
            fontSize: '1.3rem',
            marginBottom: '48px',
            opacity: 0.9,
            fontWeight: 600
          }}>
            © 2025 Autonomiq Systems - All Rights Reserved
            <br/>
            <span style={{color: '#3b82f6'}}>Powered by Quantum AI</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '60px',
            fontSize: '1.1rem',
            flexWrap: 'wrap'
          }}>
            <a href="#privacy" style={{color: '#94a3b8', textDecoration: 'none'}}>Privacy</a>
            <a href="#terms" style={{color: '#94a3b8', textDecoration: 'none'}}>Terms</a>
            <a href="#careers" style={{color: '#94a3b8', textDecoration: 'none'}}>Careers</a>
            <a href="#api" style={{color: '#94a3b8', textDecoration: 'none'}}>API Docs</a>
          </div>
        </div>
      </footer>

      {/* ENTERPRISE MODAL */}
      {openModal && (
        <div ref={modalRef} style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.92)',
          backdropFilter: 'blur(25px)',
          zIndex: 100000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px'
        }} onClick={closeModal}>
          <div style={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(50px)',
            borderRadius: '40px',
            padding: '100px',
            maxWidth: '1000px',
            maxHeight: '85vh',
            overflowY: 'auto',
            border: '3px solid rgba(59,130,246,0.6)',
            boxShadow: '0 50px 120px rgba(0,0,0,0.9)'
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px'}}>
              <h2 style={{
                fontSize: '2.8rem',
                fontWeight: 900,
                color: '#f8fafc',
                margin: 0
              }}>
                {openModal.title}
              </h2>
              <button onClick={() => setOpenModal(null)} style={{
                background: 'none',
                border: 'none',
                fontSize: '2.5rem',
                color: '#94a3b8',
                cursor: 'pointer',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={e => e.target.style.background = 'transparent'}
              >
                ×
              </button>
            </div>
            <div style={{fontSize: '1.3rem', color: '#cbd5e1', lineHeight: 1.85}}>
              {openModal.desc}
            </div>
            <div style={{
              marginTop: '60px',
              padding: '24px 44px',
              background: 'rgba(59,130,246,0.2)',
              borderRadius: '28px',
              textAlign: 'center',
              border: '2px solid rgba(59,130,246,0.5)'
            }}>
              <strong style={{color: '#3b82f6', fontSize: '1.4rem'}}>
                {openModal.stats}
              </strong>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes quantumFloat {
          0%, 100% { transform: scale(1) rotate(0deg); }
          33% { transform: scale(1.02) rotate(120deg); }
          66% { transform: scale(1.02) rotate(240deg); }
        }
        @keyframes gradientShift {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        html { scroll-behavior: smooth; scroll-padding-top: 160px; }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
