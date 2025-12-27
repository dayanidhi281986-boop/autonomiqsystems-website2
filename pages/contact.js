export default function Contact() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000 0%, #1e3a8a 50%, #000 100%)',
      color: 'white',
      fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif'
    }}>
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(20px)',
        zIndex: 50,
        padding: '1rem 2rem'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <a href="/" style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg,#60a5fa,#a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>AutonomIQ Systems</a>
          <div>
            <a href="/" style={{color: '#d1d5db', marginRight: '2rem'}}>Home</a>
            <a href="/services" style={{color: '#d1d5db'}}>Services</a>
            <a href="/contact" style={{color: '#60a5fa', fontWeight: 'bold'}}>Contact</a>
          </div>
        </div>
      </nav>

      <section style={{
        paddingTop: '8rem',
        paddingBottom: '4rem',
        maxWidth: '1024px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: 'clamp(3rem,8vw,5rem)',
          fontWeight: 900,
          background: 'linear-gradient(45deg,#60a5fa,#a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>Free AI IT Assessment</h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start'
        }}>
          <div>
            <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem'}}>
              AI analyzes your stack in 60s
            </h2>
            <ul style={{fontSize: '1.25rem', lineHeight: '1.8'}}>
              <li style={{marginBottom: '1rem'}}>✅ Cloud cost savings (20-40%)</li>
              <li style={{marginBottom: '1rem'}}>✅ Incident prediction (95%+)</li>
              <li style={{marginBottom: '1rem'}}>✅ Automation gaps identified</li>
              <li style={{marginBottom: '1rem'}}>✅ Custom ₹50k-15L pricing</li>
            </ul>
            <p style={{
              fontSize: '1.5rem',
              color: '#10b981',
              fontWeight: 'bold',
              marginTop: '2rem'
            }}>
              Trusted by enterprises | 98% uptime SLA
            </p>
          </div>
          
          <div style={{
            background: 'rgba(31,41,55,0.5)',
            border: '1px solid #4b5563',
            padding: '2rem',
            borderRadius: '1rem'
          }}>
            <form action="https://formsubmit.co/contact@autonomiqsystems.com" 
                  method="POST" 
                  style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              
              {/* ENHANCED FORMSUBMIT FIELDS - PRODUCTION READY */}
              <input type="hidden" name="_subject" value="New AI Assessment Lead - AutonomIQ Systems" />
              <input type="hidden" name="_next" value="https://autonomiqsystems.com/#services" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thank you! Your AI IT assessment will be ready in 24 hours. - AutonomIQ Systems" />
              <input type="hidden" name="_theme" value="dark" />

              <div>
                <label style={{
                  display: 'block',
                  color: '#d1d5db',
                  marginBottom: '0.5rem',
                  fontWeight: 500
                }}>Company Name *</label>
                <input type="text" 
                       name="company" 
                       required 
                       style={{
                         width: '100%',
                         background: '#1f2937',
                         border: '1px solid #4b5563',
                         padding: '1rem',
                         borderRadius: '0.75rem',
                         color: 'white',
                         fontSize: '1rem'
                       }} />
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  color: '#d1d5db',
                  marginBottom: '0.5rem',
                  fontWeight: 500
                }}>Your Role *</label>
                <input type="text" 
                       name="role" 
                       placeholder="CTO / IT Head / Founder" 
                       required 
                       style={{
                         width: '100%',
                         background: '#1f2937',
                         border: '1px solid #4b5563',
                         padding: '1rem',
                         borderRadius: '0.75rem',
                         color: 'white',
                         fontSize: '1rem'
                       }} />
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  color: '#d1d5db',
                  marginBottom: '0.5rem',
                  fontWeight: 500
                }}>Email *</label>
                <input type="email" 
                       name="email" 
                       required 
                       style={{
                         width: '100%',
                         background: '#1f2937',
                         border: '1px solid #4b5563',
                         padding: '1rem',
                         borderRadius: '0.75rem',
                         color: 'white',
                         fontSize: '1rem'
                       }} />
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  color: '#d1d5db',
                  marginBottom: '0.5rem',
                  fontWeight: 500
                }}>Current Challenge</label>
                <textarea name="challenge" 
                          rows="4"
                          placeholder="Cloud costs? Downtime? Automation gaps? Team overload?"
                          style={{
                            width: '100%',
                            background: '#1f2937',
                            border: '1px solid #4b5563',
                            padding: '1rem',
                            borderRadius: '0.75rem',
                            color: 'white',
                            fontSize: '1rem',
                            resize: 'vertical'
                          }}></textarea>
              </div>

              <button type="submit" style={{
                background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
                color: 'white',
                border: 'none',
                padding: '1.25rem 2rem',
                borderRadius: '0.75rem',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                🚀 Get Free AI Assessment Instantly
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer style={{
        background: 'rgba(0,0,0,0.8)',
        padding: '3rem 2rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid #4b5563'
      }}>
        <p style={{color: '#9ca3af', fontSize: '0.875rem'}}>
          © 2025 AutonomIQ Systems Pvt. Ltd. | AI-Only IT Services | 
          <a href="/privacy-policy" style={{color: '#60a5fa', margin: '0 1rem'}}>Privacy</a>
          <a href="/terms" style={{color: '#60a5fa'}}>Terms</a>
        </p>
        <p style={{color: '#6b7280', fontSize: '0.75rem', marginTop: '1rem'}}>
          All services delivered by autonomous AI systems. No human consultants involved. India compliant (DPDP Act 2023).
        </p>
      </footer>
    </div>
  );
}
