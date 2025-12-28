export default function Home() {
  return (
    <div style={{
      minHeight: '100vh', 
      background: `
        radial-gradient(circle at 20% 80%, rgba(59,130,246,0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(16,185,129,0.25) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(168,85,247,0.2) 0%, transparent 50%),
        linear-gradient(135deg, #0a0f1e 0%, #020617 50%, #000000 100%)
      `,
      color: '#f8fafc', 
      fontFamily: '"Inter", "SF Pro Display", system-ui, sans-serif',
      lineHeight: 1.6,
      overflowX: 'hidden',
      position: 'relative'
    }}>
      
      {/* MAC-LEVEL HEADER */}
      <header style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        backdropFilter: 'blur(30px) saturate(180%)',
        background: 'rgba(10,15,30,0.95)',
        borderBottom: '1px solid rgba(59,130,246,0.3)',
        padding: '16px 0'
      }}>
        <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          {/* QUANTUM LOGO */}
          <a href="#" style={{display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none'}}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '16px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.5rem', fontWeight: 900, color: 'white',
              boxShadow: '0 0 30px rgba(59,130,246,0.4)'
            }}>AQ</div>
            <div>
              <div style={{fontWeight: 700, fontSize: '1rem', color: '#f8fafc', letterSpacing: '-0.025em'}}>AUTONOMIQ SYSTEMS</div>
              <div style={{fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase'}}>Quantum AI Enterprise</div>
            </div>
          </a>

          {/* MINIMAL NAV */}
          <nav style={{display: 'flex', gap: '2rem'}}>
            <a href="#enterprise" style={{color: '#94a3b8', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none'}}>Enterprise</a>
            <a href="#operations" style={{color: '#94a3b8', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none'}}>Operations</a>
            <a href="#engineering" style={{color: '#94a3b8', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none'}}>Engineering</a>
            <a href="#leadership" style={{color: '#94a3b8', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none'}}>Leadership</a>
            <a href="#contact" style={{
              background: 'linear-gradient(135deg, #1e40af, #1e3a8a)', color: 'white',
              padding: '12px 28px', borderRadius: '999px', fontWeight: 600, fontSize: '0.9rem',
              textDecoration: 'none', boxShadow: '0 10px 30px rgba(30,64,175,0.4)'
            }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO - FIXED FONT SIZE */}
      <section style={{padding: '220px 40px 140px', maxWidth: '1400px', margin: '0 auto'}}>
        <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '80px', alignItems: 'center'}}>
          
          {/* LEFT - HERO CONTENT */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '12px 24px',
              background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.4)',
              borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '32px'
            }}>
              <div style={{width: '10px', height: '10px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 15px #22c55e'}}></div>
              <span>🧬 QUANTUM AI SYSTEMS | EST. 2025 | 99.9999% UPTIME</span>
            </div>
            <h1 style={{
              fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1,
              background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: '32px', letterSpacing: '-0.02em'
            }}>
              Super Quantum AI Infrastructure
            </h1>
            <p style={{fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '600px', marginBottom: '40px', lineHeight: 1.6}}>
              Post-quantum cryptography + self-evolving neural networks + zero-trust security fabric. 
              Deploy unbreakable enterprise AI across 200+ global edge locations.
            </p>
            <div style={{display: 'flex', gap: '24px', flexWrap: 'wrap'}}>
              <a href="#contact" style={{
                padding: '18px 40px', background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                color: 'white', borderRadius: '999px', fontWeight: 600, fontSize: '1rem',
                textDecoration: 'none', boxShadow: '0 20px 40px rgba(59,130,246,0.4)'
              }}>
                🧬 ACTIVATE QUANTUM AI
              </a>
            </div>
          </div>

          {/* RIGHT - FOUNDER */}
          <div style={{
            background: 'rgba(15,23,42,0.95)', padding: '40px', borderRadius: '24px',
            border: '1px solid rgba(59,130,246,0.3)', boxShadow: '0 40px 120px rgba(15,23,42,0.8)'
          }}>
            <div style={{
              width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 24px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', border: '3px solid rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem'
            }}>
              👨‍💼
            </div>
            <h3 style={{fontSize: '1.75rem', fontWeight: 700, color: '#3b82f6', marginBottom: '12px', textAlign: 'center'}}>
              DAYANIDHI DONDAPATI
            </h3>
            <p style={{fontSize: '0.95rem', color: '#94a3b8', textAlign: 'center', marginBottom: '16px'}}>
              Founder & CEO
            </p>
            <p style={{fontSize: '1rem', color: '#e2e8f0', textAlign: 'center', lineHeight: 1.5}}>
              15+ years enterprise IT | Quantum AI pioneer | Built India's first quantum-secure platform
            </p>
          </div>
        </div>
      </section>

      {/* ENTERPRISE INTELLIGENCE - CORE LEVEL */}
      <section id="enterprise" style={{padding: '140px 40px', background: 'rgba(15,23,42,0.6)', maxWidth: '1400px', margin: '0 auto'}}>
        <h2 style={{
          fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 700, textAlign: 'center',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', marginBottom: '80px'
        }}>
          Enterprise Intelligence
        </h2>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px'}}>
          <div>
            <h3 style={{fontSize: '1.875rem', fontWeight: 700, color: '#3b82f6', marginBottom: '24px'}}>
              AI Strategy & Governance
            </h3>
            <ul style={{fontSize: '1.125rem', color: '#e2e8f0', lineHeight: 1.8}}>
              <li>• NIST PQC (Kyber-1024/Dilithium-5) certified governance</li>
              <li>• Quantum-safe AI risk frameworks (500+ compliance checks)</li>
              <li>• Automated DPDP/GDPR audit trails (zero manual reporting)</li>
              <li>• Self-auditing AI agents with immutable decision logs</li>
            </ul>
          </div>
          <div>
            <h3 style={{fontSize: '1.875rem', fontWeight: 700, color: '#8b5cf6', marginBottom: '24px'}}>
              Responsible AI Framework
            </h3>
            <ul style={{fontSize: '1.125rem', color: '#e2e8f0', lineHeight: 1.8}}>
              <li>• Quantum-scale bias detection (10M+ inferences/sec)</li>
              <li>• Adversarial robustness testing (99.99% attack resistance)</li>
              <li>• Explainable quantum circuits for regulatory approval</li>
              <li>• Continuous fairness monitoring (24/7 model drift detection)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AUTONOMOUS OPERATIONS */}
      <section id="operations" style={{padding: '140px 40px', maxWidth: '1400px', margin: '0 auto'}}>
        <h2 style={{
          fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 700, textAlign: 'center',
          background: 'linear-gradient(135deg, #10b981, #34d399)', WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', marginBottom: '80px'
        }}>
          Autonomous Operations
        </h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px'}}>
          <div style={{
            padding: '40px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
            borderRadius: '20px'
          }}>
            <h3 style={{fontSize: '1.75rem', fontWeight: 700, color: '#10b981', marginBottom: '20px'}}>
              AIOps War Room
            </h3>
            <ul style={{fontSize: '1.125rem', color: '#e2e8f0'}}>
              <li>• 72hr failure prediction (99.99% accuracy)</li>
              <li>• Sub-30s auto-remediation across 100K+ assets</li>
              <li>• Quantum-accelerated RCA (root cause in 200ms)</li>
              <li>• Multi-cloud cost optimization (45% savings)</li>
            </ul>
          </div>
          <div style={{
            padding: '40px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
            borderRadius: '20px'
          }}>
            <h3 style={{fontSize: '1.75rem', fontWeight: 700, color: '#059669', marginBottom: '20px'}}>
              Infrastructure Intelligence
            </h3>
            <ul style={{fontSize: '1.125rem', color: '#e2e8f0'}}>
              <li>• Quantum-secure observability (50+ regions)</li>
              <li>• Predictive capacity planning (zero overprovisioning)</li>
              <li>• Automated compliance drift correction</li>
              <li>• Self-orchestrating K8s (500+ clusters)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ENGINEERING */}
      <section id="engineering" style={{padding: '140px 40px', background: 'rgba(15,23,42,0.6)', maxWidth: '1400px', margin: '0 auto'}}>
        <h2 style={{
          fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 700, textAlign: 'center',
          background: 'linear-gradient(135deg, #ec4899, #f472b6)', WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', marginBottom: '80px'
        }}>
          Engineering Excellence
        </h2>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px'}}>
          <div>
            <h3 style={{fontSize: '1.875rem', fontWeight: 700, color: '#ec4899', marginBottom: '24px'}}>
              Intelligent Software Development
            </h3>
            <p style={{fontSize: '1.125rem', color: '#e2e8f0', marginBottom: '24px'}}>
              Quantum-accelerated CI/CD pipelines with 1000x faster builds and 95% defect-free code generation.
            </p>
            <ul style={{fontSize: '1rem', color: '#cbd5e1'}}>
              <li>• Self-documenting microservices (zero tech debt)</li>
              <li>• Quantum-secure supply chain (SBOM+PQC)</li>
              <li>• AI agents = 500-dev team velocity</li>
            </ul>
          </div>
          <div>
            <h3 style={{fontSize: '1.875rem', fontWeight: 700, color: '#8b5cf6', marginBottom: '24px'}}>
              Secure Architecture Design
            </h3>
            <p style={{fontSize: '1.125rem', color: '#e2e8f0', marginBottom: '24px'}}>
              Post-quantum cryptography + zero-trust service mesh with homomorphic encryption.
            </p>
            <ul style={{fontSize: '1rem', color: '#cbd5e1'}}>
              <li>• Kyber-1024/Dilithium-5 encryption</li>
              <li>• Istio + quantum certs service mesh</li>
              <li>• Encrypted analytics (FHE)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{padding: '140px 40px 100px', background: 'rgba(15,23,42,0.8)', maxWidth: '1000px', margin: '0 auto'}}>
        <h2 style={{
          fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 700, textAlign: 'center',
          background: 'linear-gradient(135deg, #10b981, #34d399)', WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', marginBottom: '60px'
        }}>
          Deploy Production Platform
        </h2>
        <form action="https://formsubmit.co/contact@autonomiqsystems.com" method="POST" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '1000px', margin: '0 auto'
        }}>
          <input type="hidden" name="_subject" value="Quantum AI Enterprise Deployment" />
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <input type="text" name="company" placeholder="Organization *" style={{
              padding: '20px 24px', background: 'rgba(30,41,59,0.8)', border: '1px solid #475569',
              borderRadius: '16px', color: 'white', fontSize: '1.125rem'
            }} required />
            <input type="email" name="email" placeholder="Email *" style={{
              padding: '20px 24px', background: 'rgba(30,41,59,0.8)', border: '1px solid #475569',
              borderRadius: '16px', color: 'white', fontSize: '1.125rem'
            }} required />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <textarea name="requirements" rows="6" placeholder="Technical Requirements (Cloud infra? AIOps? Quantum security?)" style={{
              padding: '20px 24px', background: 'rgba(30,41,59,0.8)', border: '1px solid #475569',
              borderRadius: '16px', color: 'white', fontSize: '1.125rem', resize: 'vertical'
            }} required></textarea>
            <button type="submit" style={{
              background: 'linear-gradient(135deg, #1e40af, #1e3a8a)', color: 'white',
              padding: '24px', borderRadius: '16px', fontSize: '1.125rem', fontWeight: 600,
              border: 'none', cursor: 'pointer', boxShadow: '0 20px 40px rgba(30,64,175,0.4)'
            }}>
              🚀 DEPLOY QUANTUM AI ASSESSMENT
            </button>
          </div>
        </form>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '60px 40px 40px', background: 'rgba(5,5,20,0.95)',
        borderTop: '1px solid rgba(59,130,246,0.2)', textAlign: 'center'
      }}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <p style={{fontSize: '1rem', color: '#64748b', marginBottom: '24px'}}>
            © 2025 AutonomIQ Systems Pvt. Ltd. | DPDP Act 2023 Compliant | GST Registered | Quantum AI Operated
          </p>
        </div>
      </footer>

    </div>
  );
}
