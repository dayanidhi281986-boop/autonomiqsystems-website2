export default function Home() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a0a23 0%, #1a0033 30%, #0f0f4f 70%, #000 100%)',
      minHeight: '100vh',
      color: '#e0e7ff',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      overflowX: 'hidden'
    }}>
      
      {/* COSMIC HERO - 2025 AI GRADIENT [web:195] */}
      <section style={{
        height: '100vh',
        background: `
          radial-gradient(circle at 20% 80%, rgba(120,119,198,0.4) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120,219,255,0.3) 0%, transparent 50%),
          linear-gradient(135deg, #0a0a23 0%, #1a0033 50%, #0f0f4f 100%)
        `,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* FLOATING PARTICLES */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, #eee, transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 90px 40px, #fff, transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
            radial-gradient(circle, rgba(255,255,255,0.2) 0px, transparent 40px)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          animation: 'float 20s ease-in-out infinite',
          opacity: 0.5
        }} />
        
        <div style={{textAlign: 'center', zIndex: 2, maxWidth: '900px', padding: '0 20px'}}>
          <div style={{
            background: 'linear-gradient(45deg, #8b5cf6, #06b6d4, #10b981, #f59e0b)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 800,
            letterSpacing: '-0.05em',
            marginBottom: '20px',
            animation: 'glow 3s ease-in-out infinite alternate'
          }}>
            AutonomIQ Systems Pvt. Ltd.
          </div>
          
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            background: 'linear-gradient(135deg, #e0e7ff, #c7d2fe)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '40px',
            opacity: 0.95
          }}>
            The World's First AI-Only Enterprise IT Firm
          </h2>
          
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            lineHeight: 1.7,
            marginBottom: '50px',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            No humans. No delays. Infinite scale. Autonomous AI agents deliver consulting, 
            AIOps, and development for enterprise clients 24/7.
          </p>
          
          <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <button style={{
              padding: '20px 50px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.2rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>
              🚀 Start AI Consultation
            </button>
            
            <button style={{
              padding: '20px 40px',
              background: 'transparent',
              color: '#e0e7ff',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              backdropFilter: 'blur(20px)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.1)';
              e.target.style.borderColor = '#8b5cf6';
              e.target.style.color = '#8b5cf6';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = 'rgba(255,255,255,0.3)';
              e.target.style.color = '#e0e7ff';
            }}>
              View Portfolio →
            </button>
          </div>
          
          <div style={{
            marginTop: '60px',
            paddingTop: '30px',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            fontSize: '1.1rem',
            opacity: 0.8
          }}>
            Dayanidhi Dondapati | Founder & AI Governor
          </div>
        </div>
      </section>

      {/* SERVICES MATRIX - NEON GRID */}
      <section style={{
        padding: '120px 40px',
        background: 'linear-gradient(180deg, #0a0a23 0%, #0f0f4f 100%)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
        
        <div style={{textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 2}}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            background: 'linear-gradient(45deg, #8b5cf6, #06b6d4, #10b981)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}>
            AI-Powered Enterprise Capabilities
          </h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '40px',
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          {/* SERVICE 1 */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            padding: '40px',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 30px 60px rgba(139,92,246,0.3)';
            e.currentTarget.style.borderColor = '#8b5cf6';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                marginRight: '20px'
              }}>🧠</div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0
              }}>
                AI IT Consulting
              </h3>
            </div>
            <ul style={{color: '#cbd5e1', lineHeight: 1.8, fontSize: '1.1rem'}}>
              <li>⚡ Autonomous cloud architecture design</li>
              <li>📈 Digital transformation roadmaps</li>
              <li>🛡️ AI-driven cybersecurity strategy</li>
              <li>🚀 <strong>80% faster</strong> than human teams</li>
            </ul>
          </div>

          {/* SERVICE 2 */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            padding: '40px',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 30px 60px rgba(6,182,212,0.3)';
            e.currentTarget.style.borderColor = '#06b6d4';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #06b6d4, #10b981)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                marginRight: '20px'
              }}>⚙️</div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #06b6d4, #10b981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0
              }}>
                AIOps Operations
              </h3>
            </div>
            <ul style={{color: '#cbd5e1', lineHeight: 1.8, fontSize: '1.1rem'}}>
              <li>🔮 Predictive incident resolution</li>
              <li>🩹 Self-healing infrastructure</li>
              <li>🤖 Zero human intervention</li>
              <li>⚡ <strong>95% MTTR reduction</strong></li>
            </ul>
          </div>

          {/* SERVICE 3 */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            padding: '40px',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 30px 60px rgba(16,185,129,0.3)';
            e.currentTarget.style.borderColor = '#10b981';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.
