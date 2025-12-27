export default function Home() {
  return (
    <div style={{minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a23 0%, #1a0033 50%, #0f0f4f 100%)', color: '#e0e7ff', fontFamily: 'system-ui, -apple-system'}}>
      
      <nav style={{position: 'fixed', top: 0, width: '100%', background: 'rgba(10,10,35,0.95)', backdropFilter: 'blur(20px)', zIndex: 100, padding: '1rem 0'}}>
        <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h1 style={{fontSize: '2rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #93c5fd, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0}}>AutonomIQ Systems Pvt. Ltd.</h1>
          <div style={{display: 'flex', gap: '2rem'}}>
            <a href="#services" style={{color: '#94a3b8', fontWeight: 500, textDecoration: 'none'}}>Services</a>
            <a href="/pricing" style={{color: '#94a3b8', fontWeight: 500, textDecoration: 'none'}}>Pricing</a>
            <a href="/about" style={{color: '#94a3b8', fontWeight: 500, textDecoration: 'none'}}>About</a>
            <a href="/contact" style={{background: '#1e40af', color: 'white', padding: '0.75rem 2rem', borderRadius: '12px', fontWeight: 'bold', textDecoration: 'none'}}>Free Assessment</a>
          </div>
        </div>
      </nav>

      <section style={{padding: '160px 2rem 80px', maxWidth: '1400px', margin: '0 auto', textAlign: 'center'}}>
        <div style={{display: 'inline-flex', alignItems: 'center', background: 'rgba(34,197,94,0.2)', border: '1px solid rgba(34,197,94,0.5)', padding: '1rem 1.5rem', borderRadius: '50px', marginBottom: '2rem', maxWidth: 'max-content', marginLeft: 'auto', marginRight: 'auto'}}>
          <span style={{width: '12px', height: '12px', background: '#22c55e', borderRadius: '50%', marginRight: '0.75rem', boxShadow: '0 0 20px rgba(34,197,94,0.5)'}}></span>
          <span style={{fontSize: '1.125rem', fontWeight: 500}}>LIVE • 100% Autonomous AI Operations</span>
        </div>
        <h1 style={{fontSize: 'clamp(3.5rem, 10vw, 6.5rem)', fontWeight: 900, background: 'linear-gradient(135deg, #93c5fd 0%, #a78bfa 50%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '0 0 1.5rem 0', lineHeight: 1.1}}>
          AI-Only IT Services
        </h1>
        <p style={{fontSize: 'clamp(1.25rem, 4vw, 2rem)', maxWidth: '900px', margin: '0 auto 4rem', lineHeight: 1.6, color: '#cbd5e1'}}>
          India's first fully autonomous AI IT consulting, AIOps operations & development firm. <strong style={{color: '#93c5fd'}}>No human consultants. No delays. Infinite scale.</strong>
        </p>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginBottom: '8rem'}}>
          <a href="/contact" style={{background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)', color: 'white', padding: '1.5rem 4rem', borderRadius: '24px', fontSize: '1.25rem', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 20px 40px rgba(30,64,175,0.4)', transition: 'all 0.3s ease'}}>
            Start Free AI Assessment (2 mins)
          </a>
          <a href="#services" style={{border: '2px solid #475569', color: '#94a3b8', padding: '1.25rem 3rem', borderRadius: '24px', fontSize: '1.125rem', fontWeight: 'bold', textDecoration: 'none', transition: 'all 0.3s ease'}}>
            View Services →
          </a>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
          <div style={{textAlign: 'center', padding: '3rem 1.5rem', background: 'rgba(75,85,99,0.2)', borderRadius: '24px', border: '1px solid rgba(148,163,184,0.3)'}}>
            <div style={{fontSize: '4rem', fontWeight: 'bold', color: '#93c5fd', marginBottom: '1rem'}}>100%</div>
            <div style={{fontSize: '1.25rem', color: '#94a3b8'}}>Autonomous Operations</div>
          </div>
          <div style={{textAlign: 'center', padding: '3rem 1.5rem', background: 'rgba(34,197,94,0.2)', borderRadius: '24px', border: '1px solid rgba(34,197,94,0.3)'}}>
            <div style={{fontSize: '4rem', fontWeight: 'bold', color: '#22c55e', marginBottom: '1rem'}}>₹25L</div>
            <div style={{fontSize: '1.25rem', color: '#94a3b8'}}>MRR Target</div>
          </div>
          <div style={{textAlign: 'center', padding: '3rem 1.5rem', background: 'rgba(239,68,68,0.2)', borderRadius: '24px', border: '1px solid rgba(239,68,68,0.3)'}}>
            <div style={{fontSize: '4rem', fontWeight: 'bold', color: '#ef4444', marginBottom: '1rem'}}>0</div>
            <div style={{fontSize: '1.25rem', color: '#94a3b8'}}>Humans</div>
          </div>
          <div style={{textAlign: 'center', padding: '3rem 1.5rem', background: 'rgba(234,179,8,0.2)', borderRadius: '24px', border: '1px solid rgba(234,179,8,0.3)'}}>
            <div style={{fontSize: '4rem', fontWeight: 'bold', color: '#eab308', marginBottom: '1rem'}}>&lt;24h</div>
            <div style={{fontSize: '1.25rem', color: '#94a3b8'}}>Response Time</div>
          </div>
        </div>
      </section>

      <section id="services" style={{padding: '80px 2rem', background: 'rgba(15,15,79,0.5)', maxWidth: '1400px', margin: '0 auto'}}>
        <h2 style={{fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 'bold', textAlign: 'center', background: 'linear-gradient(135deg, #93c5fd, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '4rem'}}>
          Enterprise AI Services
        </h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem'}}>
          <div style={{background: 'rgba(147,197,253,0.15)', border: '1px solid rgba(147,197,253,0.3)', padding: '3rem', borderRadius: '24px'}}>
            <h3 style={{fontSize: '2rem', fontWeight: 'bold', color: '#93c5fd', marginBottom: '1.5rem'}}>AI IT Consulting</h3>
            <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem'}}>
              <li style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#e0e7ff'}}>• Cloud Architecture Design</li>
              <li style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#e0e7ff'}}>• Digital Transformation Strategy</li>
              <li style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#e0e7ff'}}>• Security & Compliance Roadmaps</li>
            </ul>
            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#22c55e'}}>₹50k-2L/month retainers</div>
          </div>
          <div style={{background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', padding: '3rem', borderRadius: '24px'}}>
            <h3 style={{fontSize: '2rem', fontWeight: 'bold', color: '#22c55e', marginBottom: '1.5rem'}}>AIOps Operations</h3>
            <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem'}}>
              <li style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#e0e7ff'}}>• Predictive Incident Management</li>
              <li style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#e0e7ff'}}>• Automated Monitoring</li>
              <li style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#e0e7ff'}}>• Cost Optimization</li>
            </ul>
            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#22c55e'}}>₹1L+/month managed</div>
          </div>
          <div style={{background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)', padding: '3rem', borderRadius: '24px'}}>
            <h3 style={{fontSize: '2rem', fontWeight: 'bold', color: '#a78bfa', marginBottom: '1.5rem'}}>AI Development</h3>
            <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem'}}>
              <li style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#e0e7ff'}}>• Custom AI Applications</li>
              <li style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#e0e7ff'}}>• Microservices & APIs</li>
              <li style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#e0e7ff'}}>• 2-week Sprints</li>
            </ul>
            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#a78bfa'}}>₹3L-15L/project</div>
          </div>
        </div>
      </section>

      <div style={{position: 'fixed', bottom: '2rem', right: '2rem', background: '#1e40af', color: 'white', padding: '1.25rem 2rem', borderRadius: '50px', fontWeight: 'bold', fontSize: '1rem', boxShadow: '0 20px 40px rgba(30,64,175,0.4)', cursor: 'pointer', zIndex: 1000'}}>
        💬 AI Chat → Start Project
      </div>

    </div>
  );
}
