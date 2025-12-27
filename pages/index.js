export default function Home() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #000428 0%, #004e92 50%, #000428 100%)',
      minHeight: '100vh',
      color: '#f8fafc',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      lineHeight: 1.6,
      overflowX: 'hidden'
    }}>
      
      {/* GLOBAL HERO - MCKINSEY LEVEL */}
      <section style={{
        minHeight: '100vh',
        background: `
          radial-gradient(circle at 20% 80%, rgba(59,130,246,0.4) 0%, transparent 50%),
          radial-gradient(circle at 80% 10%, rgba(139,92,246,0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(16,185,129,0.2) 0%, transparent 50%)
        `,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 40px'
      }}>
        <div style={{maxWidth: '1400px', width: '100%', textAlign: 'center'}}>
          <div style={{
            display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '32px', flexWrap: 'wrap'
          }}>
            <span style={{
              background: 'linear-gradient(90deg, #059669, #10b981)', padding: '8px 20px',
              borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600', color: 'white'
            }}>
              🚀 AI-Only Operations
            </span>
            <span style={{
              background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', padding: '8px 20px',
              borderRadius: '50px', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.2)'
            }}>
              ISO-Aligned • DPDP 2023 Compliant
            </span>
          </div>
          
          <h1 style={{
            fontSize: 'clamp(4rem, 10vw, 7rem)', fontWeight: 800, lineHeight: 1.1,
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            marginBottom: '32px', letterSpacing: '-0.02em'
          }}>
            AutonomIQ Systems Pvt. Ltd.
          </h1>
          
          <h2 style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', color: '#e2e8f0', 
            marginBottom: '48px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto'
          }}>
            World's First <strong>AI-Only</strong> Enterprise IT Services - 
            Consulting • AIOps • Infrastructure • BPO • Development
          </h2>
          
          <div style={{display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px'}}>
            <button style={{
              padding: '22px 56px', background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              color: 'white', border: 'none', borderRadius: '50px', fontSize: '1.2rem',
              fontWeight: 700, cursor: 'pointer', boxShadow: '0 25px 50px -12px rgba(59,130,246,0.5)',
              position: 'relative', overflow: 'hidden'
            }}>
              Start Free AI Assessment →
            </button>
            <button style={{
              padding: '22px 48px', background: 'rgba(255,255,255,0.1)', color: '#f8fafc',
              border: '2px solid rgba(255,255,255,0.3)', borderRadius: '50px', fontSize: '1.1rem',
              fontWeight: 600, cursor: 'pointer', backdropFilter: 'blur(20px)'
            }}>
              View Pricing Models
            </button>
          </div>
          
          <div style={{
            fontSize: '1.2rem', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '32px', maxWidth: '600px', margin: '0 auto'
          }}>
            Dayanidhi Dondapati | Founder & AI Governor | Serving Global Enterprises
          </div>
        </div>
      </section>

      {/* ENTERPRISE SERVICES GRID - ACCENTURE STYLE [web:213] */}
      <section style={{padding: '140px 40px', background: '#0f172a'}}>
        <div style={{maxWidth: '1600px', margin: '0 auto'}}>
          <div style={{textAlign: 'center', marginBottom: '100px'}}>
            <h2 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#60a5fa', fontWeight: 700,
              marginBottom: '24px'
            }}>
              Complete Enterprise IT Ecosystem
            </h2>
            <p style={{fontSize: '1.3rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto'}}>
              One AI platform replaces 10+ traditional vendors. 70-85% cost savings vs MNCs.
            </p>
          </div>
          
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px', marginBottom: '80px'
          }}>
            {[
              {icon: '🧠', title: 'AI IT Consulting', desc: 'Strategy • Architecture • Digital Transformation', savings: '80% faster'},
              {icon: '⚙️', title: 'AIOps Operations', desc: 'Predictive monitoring • Self-healing infra', savings: '95% MTTR'},
              {icon: '💻', title: 'AI Development', desc: 'Autonomous code • Zero-touch deployment', savings: 'Zero QA cost'},
              {icon: '🔄', title: 'Infrastructure', desc: 'Cloud migration • Multi-cloud ops', savings: '60% infra cost'},
              {icon: '📞', title: 'AI BPO Services', desc: '24/7 autonomous operations', savings: '90% staffing cost'},
              {icon: '📊', title: 'Marketing Automation', desc: 'AI campaigns • Lead scoring', savings: '75% CAC reduction'}
            ].map((service, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px', padding: '40px 32px', textAlign: 'center',
                transition: 'all 0.3s ease', cursor: 'pointer'
              }}>
                <div style={{
                  width: '72px', height: '72px', background: `hsl(${200 + i*30}, 70%, 50%)`,
                  borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px', fontSize: '2rem'
                }}>
                  {service.icon}
                </div>
                <h3 style={{fontSize: '1.5rem', color: '#f8fafc', marginBottom: '16px'}}>
                  {service.title}
                </h3>
                <p style={{color: '#94a3b8', marginBottom: '20px'}}>{service.desc}</p>
                <span style={{
                  background: 'rgba(16,185,129,0.2)', color: '#10b981', padding: '8px 20px',
                  borderRadius: '20px', fontSize: '0.95rem', fontWeight: 600
                }}>
                  {service.savings} vs Traditional MNCs
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING - DELOTTE STYLE [web:214] */}
      <section style={{
        padding: '140px 40px', background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
      }}>
        <div style={{maxWidth: '1600px', margin: '0 auto'}}>
          <div style={{textAlign: 'center', marginBottom: '100px'}}>
            <h2 style={{fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#10b981', marginBottom: '24px'}}>
              Transparent AI Pricing - Vs MNC Benchmarks
            </h2>
            <p style={{fontSize: '1.3rem', color: '#94a3b8'}}>
              Pay for outcomes, not hours. 70-85% savings vs Accenture/Deloitte/IBM.
            </p>
          </div>
          
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px', marginBottom: '60px'
          }}>
            {[
              {name: 'AI Health Check', price: '₹0', desc: '30-day AIOps pilot', features: ['Full IT assessment', 'Cost optimization report', 'Migration roadmap']},
              {name: 'AIOps Essential', price: '₹99,000/mo', desc: 'Core operations', features: ['Predictive monitoring', 'Incident automation', 'Basic BPO']},
              {name: 'Enterprise Complete', price: '₹4.99L/mo', desc: 'Full stack AI IT', features: ['All services', 'Custom AI agents', 'Global compliance']},
              {name: 'Custom Global', price: 'Contact', desc: 'Fortune 500 scale', features: ['Multi-cloud', 'Global BPO', 'C-level AI governance']}
            ].map((plan, i) => (
              <div key={i} style={{
                background: i === 2 ? 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(34,197,94,0.1))' : 'rgba(255,255,255,0.03)',
                border: i === 2 ? '2px solid #10b981' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '24px', padding: '48px 32px', textAlign: 'center',
                position: 'relative'
              }}>
                {i === 2 && (
                  <div style={{
                    position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)',
                    background: '#10b981', color: 'white', padding: '8px 24px', borderRadius: '20px',
                    fontSize: '0.85rem', fontWeight: 700
                  }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{fontSize: '1.6rem', color: '#f8fafc', marginBottom: '16px'}}>
                  {plan.name}
                </h3>
                <div style={{fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 800, color: '#10b981', marginBottom: '8px'}}>
                  {plan.price === 'Contact' ? 'Custom' : plan.price}
                </div>
                <p style={{color: '#94a3b8', marginBottom: '32px'}}>{plan.desc}</p>
                <ul style={{textAlign: 'left', marginBottom: '32px'}}>
                  {plan.features.map((feature, j) => (
                    <li key={j} style={{color: '#cbd5e1', marginBottom: '12px', paddingLeft: '24px', position: 'relative'}}>
                      <span style={{position: 'absolute', left: 0, color: '#10b981'}}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button style={{
                  width: '100%', padding: '18px', background: i === 2 ? '#10b981' : 'rgba(255,255,255,0.1)',
                  color: 'white', border: 'none', borderRadius: '16px', fontSize: '1.1rem', fontWeight: 600,
                  cursor: 'pointer'
                }}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
          
          <div style={{textAlign: 'center', padding: '60px 40px', background: 'rgba(255,255,255,0.02)', borderRadius: '24px'}}>
            <h3 style={{fontSize: '2rem', color: '#f8fafc', marginBottom: '20px'}}>
              Vs MNC Benchmarks
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', maxWidth: '1000px', margin: '0 auto'}}>
              {[
                {metric: 'Consulting Speed', ours: '3 weeks', mnc: '12-16 weeks', savings: '75%'},
                {metric: 'Ops Cost', ours: '₹4.99L/mo', mnc: '₹25-40L/mo', savings: '80%'},
                {metric: 'Staffing Cost', ours: 'Zero', mnc: '₹15L+/mo', savings: '100%'}
              ].map((comparison, i) => (
                <div key={i}>
                  <div style={{fontSize: '3rem', color: '#10b981', fontWeight: 800}}>{comparison.savings}</div>
                  <div style={{color: '#94a3b8', fontSize: '0.9rem'}}>{comparison.metric}</div>
                  <div style={{fontSize: '1.1rem', color: '#cbd5e1'}}>AutonomIQ: {comparison.ours}</div>
                  <div style={{fontSize: '0.95rem', color: '#64748b'}}>MNC: {comparison.mnc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE FOOTER - GLOBAL COMPLIANCE */}
      <footer style={{
        background: '#000428', padding: '80px 40px 40px', borderTop: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div style={{maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px'}}>
          <div>
            <h3 style={{fontSize: '1.8rem', color: '#f8fafc', marginBottom: '24px'}}>
              AutonomIQ Systems Pvt. Ltd.
            </h3>
            <p style={{color: '#94a3b8', lineHeight: 1.7}}>
              AI-Operated Enterprise IT Services • No human dependency • 
              ISO-aligned controls • India DPDP 2023 compliant
            </p>
          </div>
          <div>
            <h4 style={{color: '#e2e8f0', marginBottom: '20px', fontSize: '1.1rem'}}>Services</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <a href="/consulting" style={{color: '#94a3b8', textDecoration: 'none'}}>AI Consulting</a>
              <a href="/aiops" style={{color: '#94a3b8', textDecoration: 'none'}}>AIOps Operations</a>
              <a href="/development" style={{color: '#94a3b8', textDecoration: 'none'}}>AI Development</a>
              <a href="/infrastructure" style={{color: '#94a3b8', textDecoration: 'none'}}>Infrastructure</a>
            </div>
          </div>
          <div>
            <h4 style={{color: '#e2e8f0', marginBottom: '20px', fontSize: '1.1rem'}}>Company</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <a href="/about" style={{color: '#94a3b8', textDecoration: 'none'}}>About AI</a>
              <a href="/careers" style={{color: '#94a3b8', textDecoration: 'none'}}>Careers (AI)</a>
              <a href="/partners" style={{color: '#94a3b8', textDecoration: 'none'}}>Technology Partners</a>
            </div>
          </div>
          <div>
            <h4 style={{color: '#e2e8f0', marginBottom: '20px', fontSize: '1.1rem'}}>Legal</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <a href="/privacy" style={{color: '#94a3b8', textDecoration: 'none'}}>Privacy Policy</a>
              <a href="/terms" style={{color: '#94a3b8', textDecoration: 'none'}}>Terms of Service</a>
              <a href="/dpa" style={{color: '#94a3b8', textDecoration: 'none'}}>Data Processing</a>
            </div>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '60px', paddingTop: '40px',
          textAlign: 'center', fontSize: '0.9rem', color: '#64748b'
        }}>
          © 2025 AutonomIQ Systems Pvt. Ltd. | AI-Operated Services | 
          All outputs are recommendations only. Clients retain full responsibility.
        </div>
      </footer>
    </div>
  );
}
