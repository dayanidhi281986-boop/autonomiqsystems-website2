export default function Home() {
  return (
    <div style={{
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0a0a23 0%, #1a1a2e 50%, #16213e 100%)', 
      color: '#e2e8f0', 
      fontFamily: '"Inter", "SF Pro Display", system-ui, -apple-system, sans-serif',
      lineHeight: 1.7,
      overflowX: 'hidden'
    }}>
      
      {/* MNC Navigation - Minimal */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', 
        background: 'rgba(10,10,35,0.98)', backdropFilter: 'blur(24px)', 
        zIndex: 1000, padding: '1.5rem 0', boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
      }}>
        <div style={{maxWidth: '1440px', margin: '0 auto', padding: '0 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '2.5rem'}}>
            {/* Logo Placeholder */}
            <div style={{
              width: '48px', height: '48px', 
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
              borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.5rem', fontWeight: 900, color: 'white'
            }}>AQ</div>
            <div style={{display: 'flex', gap: '3rem'}}>
              <a href="#enterprise" style={{color: '#94a3b8', fontWeight: 500, fontSize: '1rem', textDecoration: 'none', letterSpacing: '-0.025em'}}>Enterprise Intelligence</a>
              <a href="#operations" style={{color: '#94a3b8', fontWeight: 500, fontSize: '1rem', textDecoration: 'none', letterSpacing: '-0.025em'}}>Autonomous Operations</a>
              <a href="#engineering" style={{color: '#94a3b8', fontWeight: 500, fontSize: '1rem', textDecoration: 'none', letterSpacing: '-0.025em'}}>Engineering</a>
              <a href="#leadership" style={{color: '#94a3b8', fontWeight: 500, fontSize: '1rem', textDecoration: 'none', letterSpacing: '-0.025em'}}>Leadership</a>
            </div>
          </div>
          <a href="#contact" style={{
            background: 'linear-gradient(135deg, #1e40af, #1e3a8a)', color: 'white', 
            padding: '1rem 2.5rem', borderRadius: '12px', fontWeight: 600, 
            fontSize: '0.95rem', textDecoration: 'none', letterSpacing: '-0.025em'
          }}>Contact</a>
        </div>
      </nav>

      {/* Hero - Enterprise Authority */}
      <section style={{padding: '220px 3rem 140px', maxWidth: '1440px', margin: '0 auto', textAlign: 'center'}}>
        <h1 style={{
          fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', fontWeight: 800, 
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          margin: '0 0 2.5rem 0', lineHeight: 1.1, letterSpacing: '-0.03em'
        }}>
          Super Quantum AI Systems
        </h1>
        <p style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.875rem)', maxWidth: '800px', margin: '0 auto 5rem',
          color: '#94a3b8', lineHeight: 1.6, fontWeight: 400
        }}>
          Unified enterprise platform delivering quantum-secure AI intelligence, autonomous operations, and self-healing infrastructure at Fortune 500 scale.
        </p>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem'}}>
          <a href="#contact" style={{
            background: 'linear-gradient(135deg, #1e40af, #1e3a8a)', color: 'white',
            padding: '1.5rem 4rem', borderRadius: '16px', fontSize: '1.125rem', 
            fontWeight: 600, textDecoration: 'none', letterSpacing: '-0.025em',
            boxShadow: '0 20px 40px rgba(30,64,175,0.3)'
          }}>
            Deploy Quantum AI Platform
          </a>
        </div>
      </section>

      {/* 1. Enterprise Intelligence */}
      <section id="enterprise" style={{padding: '140px 3rem', background: 'rgba(15,23,42,0.6)', maxWidth: '1440px', margin: '0 auto'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{
            fontSize: 'clamp(2.75rem, 6vw, 4.5rem)', fontWeight: 800, textAlign: 'center',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', marginBottom: '6rem', letterSpacing: '-0.02em'
          }}>
            Enterprise Intelligence
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem'}}>
            <div>
              <h3 style={{fontSize: '2.25rem', fontWeight: 700, color: '#3b82f6', marginBottom: '2rem', letterSpacing: '-0.025em'}}>
                AI Strategy & Governance
              </h3>
              <ul style={{fontSize: '1.125rem', color: '#cbd5e1', lineHeight: 1.8, listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '1.5rem'}}>• Quantum-secure AI governance frameworks (NIST PQC)</li>
                <li style={{marginBottom: '1.5rem'}}>• Enterprise AI risk assessment & compliance automation</li>
                <li style={{marginBottom: '1.5rem'}}>• Responsible AI policy deployment across 50+ regions</li>
                <li>• DPDP Act 2023 / GDPR quantum-compliant audit trails</li>
              </ul>
            </div>
            <div>
              <h3 style={{fontSize: '2.25rem', fontWeight: 700, color: '#8b5cf6', marginBottom: '2rem', letterSpacing: '-0.025em'}}>
                Responsible AI Framework
              </h3>
              <ul style={{fontSize: '1.125rem', color: '#cbd5e1', lineHeight: 1.8, listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '1.5rem'}}>• Bias detection at quantum scale (10M+ inference/sec)</li>
                <li style={{marginBottom: '1.5rem'}}>• Explainable AI with quantum circuit visualization</li>
                <li style={{marginBottom: '1.5rem'}}>• Automated ethical AI guardrails deployment</li>
                <li>• Continuous model fairness monitoring (24/7)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Autonomous Operations */}
      <section id="operations" style={{padding: '140px 3rem', maxWidth: '1440px', margin: '0 auto'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{
            fontSize: 'clamp(2.75rem, 6vw, 4.5rem)', fontWeight: 800, textAlign: 'center',
            background: 'linear-gradient(135deg, #10b981, #34d399)', WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', marginBottom: '6rem', letterSpacing: '-0.02em'
          }}>
            Autonomous Operations
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem'}}>
            <div>
              <h3 style={{fontSize: '2.25rem', fontWeight: 700, color: '#10b981', marginBottom: '2rem'}}>
                AIOps
              </h3>
              <ul style={{fontSize: '1.125rem', color: '#cbd5e1'}}>
                <li>• Predictive incident management (99.99% accuracy)</li>
                <li>• Quantum-accelerated root cause analysis (sub-second)</li>
                <li>• Self-healing infrastructure (0 human intervention)</li>
                <li>• Multi-cloud cost optimization (30-50% savings)</li>
              </ul>
            </div>
            <div>
              <h3 style={{fontSize: '2.25rem', fontWeight: 700, color: '#059669', marginBottom: '2rem'}}>
                Infrastructure Intelligence
              </h3>
              <ul style={{fontSize: '1.125rem', color: '#cbd5e1'}}>
                <li>• Quantum-secure observability (50+ regions)</li>
                <li>• AI-driven capacity planning (zero overprovisioning)</li>
                <li>• Automated compliance drift detection</li>
                <li>• Self-orchestrating Kubernetes (200+ clusters)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engineering Excellence */}
      <section id="engineering" style={{padding: '140px 3rem', background: 'rgba(15,23,42,0.6)', maxWidth: '1440px', margin: '0 auto'}}>
        <h2 style={{
          fontSize: 'clamp(2.75rem, 6vw, 4.5rem)', fontWeight: 800, textAlign: 'center',
          background: 'linear-gradient(135deg, #ec4899, #f472b6)', WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', marginBottom: '6rem'
        }}>
          Engineering
        </h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '4rem'}}>
          <div style={{padding: '3rem', background: 'rgba(236,72,153,0.1)', borderRadius: '24px', border: '1px solid rgba(236,72,153,0.2)'}}>
            <h3 style={{fontSize: '2rem', fontWeight: 700, color: '#ec4899', marginBottom: '1.5rem'}}>Intelligent Software Development</h3>
            <ul style={{fontSize: '1.125rem', color: '#cbd5e1'}}>
              <li>Quantum-accelerated CI/CD (1000x faster builds)</li>
              <li>AI code generation (95% defect-free first pass)</li>
              <li>Self-documenting microservices (zero tech debt)</li>
              <li>Quantum-secure supply chain (SBOM + PQC)</li>
            </ul>
          </div>
          <div style={{padding: '3rem', background: 'rgba(168,85,247,0.1)', borderRadius: '24px', border: '1px solid rgba(168,85,247,0.2)'}}>
            <h3 style={{fontSize: '2rem', fontWeight: 700, color: '#8b5cf6', marginBottom: '1.5rem'}}>Secure Architecture Design</h3>
            <ul style={{fontSize: '1.125rem', color: '#cbd5e1'}}>
              <li>Post-quantum cryptography (Kyber/Dilithium)</li>
              <li>Zero-trust service mesh (Istio + quantum certs)</li>
              <li>Homomorphic encryption for encrypted analytics</li>
              <li>Self-healing architecture patterns</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" style={{padding: '140px 3rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800,
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', marginBottom: '4rem'
        }}>
          Leadership
        </h2>
        <div style={{
          background: 'rgba(15,23,42,0.8)', padding: '5rem 4rem', borderRadius: '32px',
          border: '1px solid rgba(59,130,246,0.3)', maxWidth: '800px', margin: '0 auto'
        }}>
          {/* Founder Photo Placeholder */}
          <div style={{
            width: '200px', height: '200px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            borderRadius: '50%', margin: '0 auto 2.5rem', border: '4px solid rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem'
          }}>👨‍💼</div>
          <h3 style={{fontSize: '3rem', fontWeight: 800, color: '#3b82f6', marginBottom: '1rem'}}>
            DAYANIDHI DONDAPATI
          </h3>
          <p style={{fontSize: '1.5rem', color: '#94a3b8', marginBottom: '2rem'}}>Founder & CEO</p>
          <p style={{fontSize: '1.25rem', color: '#e2e8f0', lineHeight: 1.7}}>
            15+ years enterprise IT leadership. Architected India's first quantum-secure AI platform.
            Built Fortune 500-scale infrastructure serving 50+ global regions with 99.9999% uptime.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{padding: '140px 3rem 100px', background: 'rgba(15,23,42,0.8)', maxWidth: '1000px', margin: '0 auto'}}>
        <h2 style={{
          fontSize: 'clamp(2.75rem, 6vw, 4.5rem)', fontWeight: 800, textAlign: 'center',
          background: 'linear-gradient(135deg, #10b981, #34d399)', WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', marginBottom: '5rem'
        }}>
          Deploy Quantum AI Today
        </h2>
        <form action="https://formsubmit.co/contact@autonomiqsystems.com" method="POST" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '1000px', margin: '0 auto'
        }}>
          <input type="hidden" name="_subject" value="Quantum AI Enterprise Deployment" />
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <input type="text" name="company" placeholder="Organization" style={{
              padding: '1.5rem 2rem', background: 'rgba(30,41,59,0.8)', border: '1px solid #475569',
              borderRadius: '12px', color: 'white', fontSize: '1.125rem', fontWeight: 400
            }} required />
            <input type="text" name="role" placeholder="Role" style={{
              padding: '1.5rem 2rem', background: 'rgba(30,41,59,0.8)', border: '1px solid #475569',
              borderRadius: '12px', color: 'white', fontSize: '1.125rem', fontWeight: 400
            }} required />
            <input type="email" name="email" placeholder="Email" style={{
              padding: '1.5rem 2rem', background: 'rgba(30,41,59,0.8)', border: '1px solid #475569',
              borderRadius: '12px', color: 'white', fontSize: '1.125rem', fontWeight: 400
            }} required />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <textarea name="requirements" rows="5" placeholder="Technical Requirements" style={{
              padding: '1.5rem 2rem', background: 'rgba(30,41,59,0.8)', border: '1px solid #475569',
              borderRadius: '12px', color: 'white', fontSize: '1.125rem', resize: 'vertical'
            }} required></textarea>
            <button type="submit" style={{
              background: 'linear-gradient(135deg, #1e40af, #1e3a8a)', color: 'white',
              padding: '1.75rem 3rem', borderRadius: '16px', fontSize: '1.125rem',
              fontWeight: 600, border: 'none', cursor: 'pointer', letterSpacing: '-0.025em',
              boxShadow: '0 20px 40px rgba(30,64,175,0.3)'
            }}>
              Deploy Production Platform
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer style={{padding: '4rem 3rem 2rem', background: 'rgba(5,5,25,0.95)', textAlign: 'center', borderTop: '1px solid rgba(59,130,246,0.2)'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <p style={{fontSize: '1rem', color: '#64748b', marginBottom: '2rem'}}>
            © 2025 AutonomIQ Systems Pvt. Ltd. All rights reserved. DPDP Act 2023 compliant.
          </p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
            <a href="#" style={{color: '#64748b', textDecoration: 'none', fontSize: '0.9rem'}}>Privacy</a>
            <a href="#" style={{color: '#64748b', textDecoration: 'none', fontSize: '0.9rem'}}>Terms</a>
            <a href="#" style={{color: '#64748b', textDecoration: 'none', fontSize: '0.9rem'}}>Legal</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
