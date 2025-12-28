export default function Home() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a0a23 0%, #1a0033 50%, #0f0f4f 100%)',
      minHeight: '100vh', color: 'white', padding: '120px 2rem 4rem', fontFamily: 'system-ui, sans-serif'
    }}>
      
      {/* NAV */}
      <nav style={{position: 'fixed', top: 0, width: '100%', background: 'rgba(10,10,35,0.95)', 
                   backdropFilter: 'blur(20px)', zIndex: 1000, padding: '1rem 0'}}>
        <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <div style={{width: '48px', height: '48px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
                        borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.5rem', fontWeight: 'bold', color: 'white'}}>🧬</div>
            <div>
              <div style={{fontWeight: 'bold', fontSize: '1.1rem'}}>AUTONOMIQ SYSTEMS</div>
              <div style={{fontSize: '0.75rem', color: '#94a3b8'}}>Quantum AI Enterprise</div>
            </div>
          </div>
          <div style={{display: 'flex', gap: '2rem'}}>
            <a href="#enterprise" style={{color: '#94a3b8', textDecoration: 'none'}}>Enterprise</a>
            <a href="#operations" style={{color: '#94a3b8', textDecoration: 'none'}}>Operations</a>
            <a href="#leadership" style={{color: '#94a3b8', textDecoration: 'none'}}>Leadership</a>
            <a href="#contact" style={{
              background: '#3b82f6', color: 'white', padding: '0.75rem 2rem', borderRadius: '999px',
              fontWeight: 'bold', textDecoration: 'none'
            }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div style={{maxWidth: '1400px', margin: '0 auto', textAlign: 'center'}}>
        <div style={{display: 'inline-flex', alignItems: 'center', background: 'rgba(59,130,246,0.2)', 
                     border: '1px solid rgba(59,130,246,0.5)', padding: '1rem 2rem', borderRadius: '50px', 
                     marginBottom: '3rem', maxWidth: 'max-content'}}>
          <span style={{width: '12px', height: '12px', background: '#22c55e', borderRadius: '50%', marginRight: '1rem'}}></span>
          <span style={{fontSize: '1rem', fontWeight: 'bold'}}>QUANTUM AI | EST. 2025 | 99.9999% UPTIME</span>
        </div>
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 900,
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', marginBottom: '2rem'
        }}>
          Super Quantum AI Platform
        </h1>
        <p style={{fontSize: '1.5rem', color: '#cbd5e1', maxWidth: '40rem', margin: '0 auto 3rem'}}>
          Post-quantum cryptography + self-healing AI + zero-trust security across 200+ global regions
        </p>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem'}}>
          <a href="#contact" style={{
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', color: 'white',
            padding: '1.25rem 3rem', borderRadius: '50px', fontWeight: 'bold', fontSize: '1.1rem',
            textDecoration: 'none', boxShadow: '0 15px 35px rgba(59,130,246,0.4)'
          }}>
            🧬 DEPLOY QUANTUM AI
          </a>
        </div>
      </div>

      {/* FOUNDER */}
      <section id="leadership" style={{padding: '8rem 2rem', background: 'rgba(15,23,42,0.7)', marginTop: '8rem'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
          <div style={{
            width: '160px', height: '160px', borderRadius: '50%', margin: '0 auto 2rem',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', border: '4px solid rgba(255,255,255,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem'
          }}>👨‍💼</div>
          <h2 style={{fontSize: '3rem', fontWeight: 900, color: '#3b82f6', marginBottom: '1rem'}}>
            DAYANIDHI DONDAPATI
          </h2>
          <p style={{fontSize: '1.25rem', color: '#94a3b8', marginBottom: '1.5rem'}}>Founder & CEO</p>
          <p style={{fontSize: '1.25rem', color: '#e2e8f0', maxWidth: '40rem', margin: '0 auto'}}>
            15+ years enterprise IT | Quantum AI pioneer | Built India's first quantum-secure platform
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="enterprise" style={{padding: '8rem 2rem'}}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <h2 style={{fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, textAlign: 'center', marginBottom: '4rem',
                      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'}}>
            Enterprise Services
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))', gap: '2rem'}}>
            <div style={{padding: '3rem', background: 'rgba(59,130,246,0.1)', borderRadius: '20px', border: '1px solid rgba(59,130,246,0.3)'}}>
              <h3 style={{fontSize: '1.75rem', color: '#3b82f6', marginBottom: '1rem'}}>Quantum AI Consulting</h3>
              <p style={{color: '#e2e8f0'}}>PQC migration • AI governance • Zero-trust architecture</p>
            </div>
            <div style={{padding: '3rem', background: 'rgba(16,185,129,0.1)', borderRadius: '20px', border: '1px solid rgba(16,185,129,0.3)'}}>
              <h3 style={{fontSize: '1.75rem', color: '#10b981', marginBottom: '1rem'}}>AIOps Operations</h3>
              <p style={{color: '#e2e8f0'}}>Predictive monitoring • Auto-remediation • Cost optimization</p>
            </div>
            <div style={{padding: '3rem', background: 'rgba(168,85,247,0.1)', borderRadius: '20px', border: '1px solid rgba(168,85,247,0.3)'}}>
              <h3 style={{fontSize: '1.75rem', color: '#8b5cf6', marginBottom: '1rem'}}>Quantum Development</h3>
              <p style={{color: '#e2e8f0'}}>Self-healing apps • PQC APIs • AI agents</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{padding: '8rem 2rem 6rem', background: 'rgba(15,23,42,0.8)'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, marginBottom: '3rem',
                      background: 'linear-gradient(135deg, #10b981, #34d399)', WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'}}>
            Deploy Now
          </h2>
          <form action="https://formsubmit.co/contact@autonomiqsystems.com" method="POST" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px', margin: '0 auto'}}>
            <input type="hidden" name="_subject" value="Quantum AI Deployment"/>
            <input type="text" name="company" placeholder="Company" style={{padding: '1.25rem', background: 'rgba(30,41,59,0.8)', border: '1px solid #475569', borderRadius: '12px', color: 'white'}} required/>
            <input type="email" name="email" placeholder="Email" style={{padding: '1.25rem', background: 'rgba(30,41,59,0.8)', border: '1px solid #475569', borderRadius: '12px', color: 'white'}} required/>
            <textarea name="challenge" rows="4" placeholder="Challenge" style={{padding: '1.25rem', background: 'rgba(30,41,59,0.8)', border: '1px solid #475569', borderRadius: '12px', color: 'white', resize: 'vertical'}} required/>
            <button type="submit" style={{
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', color: 'white',
              padding: '1.5rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1.1rem',
              border: 'none', cursor: 'pointer'
            }}>
              🚀 GET QUANTUM ASSESSMENT
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{padding: '4rem 2rem 2rem', background: 'rgba(10,10,35,0.95)', textAlign: 'center', borderTop: '1px solid rgba(59,130,246,0.3)'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <p style={{color: '#94a3b8', marginBottom: '1.5rem'}}>© 2025 AutonomIQ Systems Pvt. Ltd. - DPDP Compliant - GST Registered</p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
            <a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Privacy</a>
            <a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Terms</a>
            <a href="#" style={{color: '#94a3b8', textDecoration: 'none'}}>Security</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
