export default function Home() {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #0a0a23 0%, #1a0033 50%, #0f0f4f 100%)', 
      minHeight: '100vh', 
      color: '#e0e7ff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      lineHeight: 1.6
    }}>
      
      {/* HERO SECTION */}
      <section style={{
        padding: '120px 40px 80px',
        textAlign: 'center',
        background: 'radial-gradient(circle at 30% 70%, rgba(139,92,246,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 20%, rgba(6,182,212,0.3) 0%, transparent 50%)'
      }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          background: 'linear-gradient(45deg, #8b5cf6, #06b6d4, #10b981)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '0 0 24px 0',
          fontWeight: 'bold'
        }}>
          AutonomIQ Systems Pvt. Ltd.
        </h1>
        
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          color: '#c7d2fe',
          margin: '0 0 32px 0'
        }}>
          AI-Only Enterprise IT Services
        </h2>
        
        <p style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
          maxWidth: '700px',
          margin: '0 auto 48px',
          opacity: 0.95
        }}>
          No humans. No delays. Infinite scale. Autonomous AI agents delivering 
          consulting, AIOps, and development 24/7 for enterprise clients.
        </p>
        
        <div style={{display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <button style={{
            padding: '18px 48px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 12px 32px rgba(139,92,246,0.4)'
          }}>
            🚀 Start AI Consultation
          </button>
          <button style={{
            padding: '18px 36px',
            background: 'transparent',
            color: '#e0e7ff',
            border: '2px solid rgba(255,255,255,0.3)',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            View Capabilities
          </button>
        </div>
        
        <div style={{
          marginTop: '60px',
          paddingTop: '32px',
          borderTop: '1px solid rgba(255,255,255,0.2)',
          fontSize: '1.1rem',
          color: '#94a3b8'
        }}>
          Dayanidhi Dondapati | Founder & AI Governor
        </div>
      </section>

      {/* SERVICES */}
      <section style={{
        padding: '100px 40px',
        background: '#0f172a'
      }}>
        <div style={{textAlign: 'center', marginBottom: '80px'}}>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            color: '#8b5cf6',
            marginBottom: '20px'
          }}>
            AI-Powered Enterprise Capabilities
          </h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '40px',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
              fontSize: '1.8rem'
            }}>
              🧠
            </div>
            <h3 style={{
              fontSize: '1.6rem',
              color: '#e0e7ff',
              marginBottom: '16px'
            }}>
              AI IT Consulting
            </h3>
            <ul style={{color: '#94a3b8', lineHeight: 1.7}}>
              <li>• Autonomous cloud architecture</li>
              <li>• Digital transformation roadmaps</li>
              <li>• AI cybersecurity strategy</li>
              <li><strong>• 80% faster delivery</strong></li>
            </ul>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '40px',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, #06b6d4, #10b981)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
              fontSize: '1.8rem'
            }}>
              ⚙️
            </div>
            <h3 style={{
              fontSize: '1.6rem',
              color: '#e0e7ff',
              marginBottom: '16px'
            }}>
              AIOps Operations
            </h3>
            <ul style={{color: '#94a3b8', lineHeight: 1.7}}>
              <li>• Predictive incident resolution</li>
              <li>• Self-healing infrastructure</li>
              <li>• Zero human intervention</li>
              <li><strong>• 95% MTTR reduction</strong></li>
            </ul>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '40px',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, #10b981, #f59e0b)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
              fontSize: '1.8rem'
            }}>
              💻
            </div>
            <h3 style={{
              fontSize: '1.6rem',
              color: '#e0e7ff',
              marginBottom: '16px'
            }}>
              AI Development
            </h3>
            <ul style={{color: '#94a3b8', lineHeight: 1.7}}>
              <li>• Autonomous code generation</li>
              <li>• Self-testing deployment</li>
              <li>• Continuous optimization</li>
              <li>• Enterprise-grade applications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: '#020617',
        padding: '60px 40px 40px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <p style={{color: '#94a3b8', marginBottom: '16px'}}>
            <strong>AutonomIQ Systems Pvt. Ltd.</strong> | 
            AI-Operated Enterprise IT Services
          </p>
          <p style={{fontSize: '0.95rem', color: '#64748b'}}>
            India DPDP 2023 compliant | AI recommendations only | 
            Clients retain full decision authority
          </p>
          <div style={{marginTop: '32px'}}>
            <a href="/services" style={{color: '#8b5cf6', margin: '0 20px', textDecoration: 'none'}}>Services</a>
            <a href="/privacy-policy" style={{color: '#94a3b8', margin: '0 20px', textDecoration: 'none'}}>Privacy Policy</a>
            <a href="/contact" style={{color: '#94a3b8', margin: '0 20px', textDecoration: 'none'}}>Contact AI</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes glow {
          0% { filter: drop-shadow(0 0 5px #8b5cf6); }
          100% { filter: drop-shadow(0 0 20px #8b5cf6); }
        }
        button:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 15px 35px rgba(0,0,0,0.4) !important;
        }
      `}</style>
    </div>
  );
}
