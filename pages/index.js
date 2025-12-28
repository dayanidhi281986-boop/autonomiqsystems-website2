export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: `
        linear-gradient(135deg, #0a0f1e 0%, #020617 30%, #000428 70%, #000000 100%),
        radial-gradient(circle at 20% 80%, rgba(59,130,246,0.4) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(16,185,129,0.3) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(168,85,247,0.25) 0%, transparent 50%)
      `,
      color: '#f8fafc',
      fontFamily: 'Inter, SF Pro Display, -apple-system, sans-serif',
      lineHeight: 1.65,
      overflowX: 'hidden'
    }}>

      {/* GLOBAL NAVIGATION - FIXED SCROLL */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 10000,
        backdropFilter: 'blur(40px) saturate(180%)', background: 'rgba(10,15,30,0.98)',
        borderBottom: '1px solid rgba(59,130,246,0.3)', padding: '1rem 0'
      }}>
        <div style={{maxWidth: '1440px', margin: '0 auto', padding: '0 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          
          {/* ENTERPRISE LOGO */}
          <a href="#" style={{display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none'}}>
            <div style={{
              width: '3rem', height: '3rem', background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
              borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.25rem', fontWeight: 'bold', color: 'white', boxShadow: '0 0 25px rgba(59,130,246,0.6)'
            }}>🧬</div>
            <div>
              <div style={{fontSize: '1.1rem', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.025em'}}>AUTONOMIQ</div>
              <div style={{fontSize: '0.7rem', color: '#94a3b8', fontWeight: 500, letterSpacing: '0.05em'}}>QUANTUM AI SYSTEMS</div>
            </div>
          </a>

          {/* MNC NAV */}
          <div style={{display: 'flex', gap: '2rem'}}>
            <a href="#enterprise" style={{color: '#94a3b8', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none'}}>Enterprise Intelligence</a>
            <a href="#operations" style={{color: '#94a3b8', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none'}}>Autonomous Operations</a>
            <a href="#engineering" style={{color: '#94a3b8', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none'}}>Engineering</a>
            <a href="#leadership" style={{color: '#94a3b8', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none'}}>Leadership</a>
            <a href="#careers" style={{color: '#94a3b8', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none'}}>Careers</a>
            <a href="#contact" style={{
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', color: 'white',
              padding: '0.75rem 2rem', borderRadius: '999px', fontWeight: 600, fontSize: '0.9rem',
              textDecoration: 'none', boxShadow: '0 10px 30px rgba(59,130,246,0.4)'
            }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO - DELOTTE LEVEL */}
      <section style={{padding: '12rem 2.5rem 8rem', maxWidth: '1440px', margin: '0 auto'}}>
        <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '6rem', alignItems: 'start'}}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', background: 'rgba(59,130,246,0.15)',
              border: '1px solid rgba(59,130,246,0.4)', padding: '1rem 1.5rem', borderRadius: '50px',
              marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, maxWidth: 'max-content'
            }}>
              <span style={{width: '0.5rem', height: '0.5rem', background: '#22c55e', borderRadius: '50%', marginRight: '0.75rem', boxShadow: '0 0 15px #22c55e'}}></span>
              QUANTUM AI SYSTEMS | EST. 2025 | 99.9999% UPTIME | FORTUNE 500 READY
            </div>
            <h1 style={{
              fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1.05,
              background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '2rem'
            }}>
              Super Quantum AI Infrastructure
            </h1>
            <p style={{fontSize: '1.375rem', color: '#cbd5e1', maxWidth: '28rem', marginBottom: '3rem', lineHeight: 1.6}}>
              Deploy unbreakable enterprise AI with NIST PQC cryptography, self-healing infrastructure, 
              and zero-trust security across 200+ global edge locations.
            </p>
            <div style={{display: 'flex', gap: '1.5rem', flexWrap: 'wrap'}}>
              <a href="#contact" style={{
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', color: 'white',
                padding: '1.25rem 3rem', borderRadius: '50px', fontWeight: 700, fontSize: '1.1rem',
                textDecoration: 'none', boxShadow: '0 20px 40px rgba(59,130,246,0.4)'
              }}>
                🧬 LAUNCH QUANTUM AI
              </a>
              <a href="#leadership" style={{
                background: 'rgba(255,255,255,0.1)', color: '#f8fafc', border: '2px solid rgba(255,255,255,0.2)',
                padding: '1.25rem 2.5rem', borderRadius: '50px', fontWeight: 600, fontSize: '1rem',
                textDecoration: 'none', backdropFilter: 'blur(20px)'
              }}>
                Meet Leadership
              </a>
            </div>
          </div>

          {/* FOUNDER CARD */}
          <div id="leadership" style={{
            background: 'rgba(15,23,42,0.95)', padding: '3rem 2rem', borderRadius: '24px',
            border: '1px solid rgba(59,130,246,0.4)', position: 'relative', boxShadow: '0 40px 120px rgba(0,0,0,0.6)'
          }}>
            <div style={{
              width: '10rem', height: '10rem', borderRadius: '50%', margin: '0 auto 1.5rem',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #10b981 100%)',
              border: '4px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '3.5rem'
            }}>
              👨‍💼
            </div>
            <h3 style={{fontSize: '2rem', fontWeight: 800, color: '#3b82f6', marginBottom: '0.75rem', textAlign: 'center'}}>
              DAYANIDHI DONDAPATI
            </h3>
            <p style={{fontSize: '1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '1.5rem'}}>
              Founder & CEO
            </p>
            <p style={{fontSize: '1rem', color: '#e2e8f0', textAlign: 'center', lineHeight: 1.6}}>
              15+ years enterprise IT | Quantum AI pioneer | Architected India's first 
              quantum-secure infrastructure platform serving 50+ global regions.
            </p>
          </div>
        </div>
      </section>

      {/* ENTERPRISE INTELLIGENCE */}
      <section id="enterprise" style={{padding: '10rem 2.5rem 8rem', background: 'rgba(15,23,42,0.6)', maxWidth: '1440px', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: '6rem'}}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800,
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', marginBottom: '1.5rem'
          }}>
            Enterprise Intelligence
          </h2>
          <p style={{fontSize: '1.25rem', color: '#94a3b8', maxWidth: '40rem', margin: '0 auto'}}>
            No MNC offers quantum cryptography + self-evolving AI at Fortune 500 scale
          </p>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(22rem, 1fr))', gap: '3rem'}}>
          <div style={{padding: '3rem 2rem', background: 'rgba(59,130,246,0.1)', borderRadius: '20px', border: '1px solid rgba(59,130,246,0.3)'}}>
            <div style={{fontSize: '2.5rem', color: '#3b82f6', marginBottom: '1.5rem'}}>🧠</div>
            <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#3b82f6', marginBottom: '1rem'}}>Quantum AI Core</h3>
            <ul style={{fontSize: '1rem', color: '#e2e8f0', lineHeight: 1.7}}>
              <li>• NIST PQC certified (Kyber-1024/Dilithium-5)</li>
              <li>• 1000x inference acceleration</li>
              <li>• Self-evolving neural networks</li>
              <li>• Zero-shot enterprise learning</li>
            </ul>
          </div>
          <div style={{padding: '3rem 2rem', background: 'rgba(16,185,129,0.1)', borderRadius: '20px', border: '1px solid rgba(16,185,129,0.3)'}}>
            <div style={{fontSize: '2.5rem', color: '#10b981', marginBottom: '1.5rem'}}>🔒</div>
            <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#10b981', marginBottom: '1rem'}}>Zero-Trust Security</h3>
            <ul style={{fontSize: '1rem', color: '#e2e8f0', lineHeight: 1.7}}>
              <li>• Homomorphic encryption compute</li>
              <li>• Behavioral biometrics auth</li>
              <li>• Quantum-secure service mesh</li>
              <li>• 0 breaches • 200+ regions</li>
            </ul>
          </div>
          <div style={{padding: '3rem 2rem', background: 'rgba(168,85,247,0.1)', borderRadius: '20px', border: '1px solid rgba(168,85,247,0.3)'}}>
            <div style={{fontSize: '2.5rem', color: '#8b5cf6', marginBottom: '1.5rem'}}>🌐</div>
            <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#8b5cf6', marginBottom: '1rem'}}>Hyper-Scale Infra</h3>
            <ul style={{fontSize: '1rem', color: '#e2e8f0', lineHeight: 1.7}}>
              <li>• 0ms quantum failover</li>
              <li>• 200+ edge locations</li>
              <li>• Predictive auto-scaling</li>
              <li>• Multi-cloud orchestration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AUTONOMOUS OPERATIONS */}
      <section id="operations" style={{padding: '10rem 2.5rem 8rem', maxWidth: '1440px', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: '6rem'}}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800,
            background: 'linear-gradient(135deg, #10b981, #34d399)', WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', marginBottom: '1.5rem'
          }}>
            Autonomous Operations
          </h2>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '80rem', margin: '0 auto'}}>
          <div>
            <h3 style={{fontSize: '2rem', fontWeight: 700, color: '#10b981', marginBottom: '1.5rem'}}>AIOps War Room</h3>
            <ul style={{fontSize: '1.125rem', color: '#e2e8f0', lineHeight: 1.8}}>
              <li>• 72hr predictive failure detection (99.99% accuracy)</li>
              <li>• Sub-30s auto-remediation (100K+ assets)</li>
              <li>• Quantum RCA (200ms root cause)</li>
              <li>• 45% multi-cloud cost optimization</li>
            </ul>
          </div>
          <div>
            <h3 style={{fontSize: '2rem', fontWeight: 700, color: '#059669', marginBottom: '1.5rem'}}>Infrastructure Intelligence</h3>
            <ul style={{fontSize: '1.125rem', color: '#e2e8f0', lineHeight: 1.8}}>
              <li>• Quantum observability (50+ regions)</li>
              <li>• Zero overprovisioning capacity</li>
              <li>• Auto compliance drift correction</li>
              <li>• Self-orchestrating Kubernetes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ENGINEERING */}
      <section id="engineering" style={{padding: '10rem 2.5rem 8rem', background: 'rgba(15,23,42,0.6)', maxWidth: '1440px', margin: '0 auto'}}>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, textAlign: 'center',
          background: 'linear-gradient(135deg, #ec4899, #f472b6)', WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', marginBottom: '6rem'
        }}>
          Engineering Excellence
        </h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))', gap: '2.5rem'}}>
          <div style={{padding: '2.5rem', background: 'rgba(236,72,153,0.1)', borderRadius: '20px', border: '1px solid rgba(236,72,153,0.3)'}}>
            <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#ec4899', marginBottom: '1rem'}}>Intelligent Development</h3>
            <p style={{fontSize: '1rem', color: '#e2e8f0'}}>Quantum CI/CD • 95% defect-free code • Self-documenting services</p>
          </div>
          <div style={{padding: '2.5rem', background: 'rgba(168,85,247,0.1)', borderRadius: '20px', border: '1px solid rgba(168,85,247,0.3)'}}>
            <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#8b5cf6', marginBottom: '1rem'}}>Secure Architecture</h3>
            <p style={{fontSize: '1rem', color: '#e2e8f0'}}>PQC crypto • Zero-trust mesh • Homomorphic analytics</p>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" style={{padding: '10rem 2.5rem 8rem', maxWidth: '1440px', margin: '0 auto'}}>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, textAlign: 'center',
          background: 'linear-gradient(135deg, #10b981, #34d399)', WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', marginBottom: '6rem'
        }}>
          Careers
        </h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(22rem, 1fr))', gap: '3rem'}}>
          <div style={{textAlign: 'center', padding: '3rem'}}>
            <h3 style={{fontSize: '1.75rem', fontWeight: 700, color: '#3b82f6', marginBottom: '1rem'}}>Quantum AI Engineers</h3>
            <p style={{fontSize: '1rem', color: '#e2e8f0'}}>PQC crypto • Self-healing infra • 500+ clusters</p>
          </div>
          <div style={{textAlign: 'center', padding: '3rem'}}>
            <h3 style={{fontSize: '1.75rem', fontWeight: 700, color: '#10b981', marginBottom: '1rem'}}>AIOps Architects</h3>
            <p style={{fontSize: '1rem', color: '#e2e8f0'}}>Predictive ops • Multi-cloud • Zero-trust</p>
          </div>
          <div style={{textAlign: 'center', padding: '3rem'}}>
            <h3 style={{fontSize: '1.75rem', fontWeight:
