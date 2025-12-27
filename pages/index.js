export default function Home() {
  return (
    <div style={{background: 'linear-gradient(135deg, #0b0f1a 0%, #1e3a8a 100%)', minHeight: '100vh', color: 'white'}}>
      
      {/* HERO - FOUNDER LEVEL */}
      <section style={{padding: '100px 20px', textAlign: 'center'}}>
        <h1 style={{fontSize: '4rem', color: '#93c5fd', marginBottom: '20px'}}>
          AutonomIQ Systems Pvt. Ltd.
        </h1>
        <h2 style={{fontSize: '2rem', marginBottom: '30px'}}>
          AI-Only IT Consulting • AIOps • Development
        </h2>
        <p style={{fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto 40px'}}>
          No humans. No delays. Infinite scale. Enterprise IT powered by autonomous AI agents.
        </p>
        <p style={{fontSize: '1.1rem', opacity: 0.9, marginBottom: '40px'}}>
          Dayanidhi Dondapati - Founder & AI Governor
        </p>
        <button style={{padding: '20px 40px', background: '#1e40af', color: 'white', border: 'none', borderRadius: '10px', fontSize: '1.2rem'}}>
          Start AI Consultation →
        </button>
      </section>

      {/* SERVICES PORTFOLIO */}
      <section style={{padding: '80px 20px', background: '#0f172a'}}>
        <h2 style={{textAlign: 'center', color: '#93c5fd', fontSize: '2.5rem', marginBottom: '60px'}}>
          Enterprise AI Services Portfolio
        </h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto'}}>
          
          <div style={{background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px', border: '1px solid #334155'}}>
            <h3 style={{color: '#60a5fa', fontSize: '1.6rem', marginBottom: '15px'}}>AI IT Consulting</h3>
            <ul style={{color: '#e2e8f0', lineHeight: '1.8', fontSize: '1rem'}}>
              <li>☑️ Cloud architecture optimization</li>
              <li>☑️ Digital transformation roadmaps</li>
              <li>☑️ AI cybersecurity strategy</li>
              <li>⚡ <strong>80% faster</strong> than humans</li>
            </ul>
          </div>

          <div style={{background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px', border: '1px solid #334155'}}>
            <h3 style={{color: '#60a5fa', fontSize: '1.6rem', marginBottom: '15px'}}>AIOps Operations</h3>
            <ul style={{color: '#e2e8f0', lineHeight: '1.8', fontSize: '1rem'}}>
              <li>☑️ Predictive incident resolution</li>
              <li>☑️ Self-healing infrastructure</li>
              <li>☑️ Zero human intervention</li>
              <li>⚡ <strong>95% MTTR reduction</strong></li>
            </ul>
          </div>

          <div style={{background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px', border: '1px solid #334155'}}>
            <h3 style={{color: '#60a5fa', fontSize: '1.6rem', marginBottom: '15px'}}>AI Development</h3>
            <ul style={{color: '#e2e8f0', lineHeight: '1.8', fontSize: '1rem'}}>
              <li>☑️ Autonomous code generation</li>
              <li>☑️ Self-testing deployment</li>
              <li>☑️ Continuous optimization</li>
              <li>☑️ Enterprise-grade applications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FUTURE VISION */}
      <section style={{padding: '80px 20px', textAlign: 'center', background: '#1e293b'}}>
        <h2 style={{color: '#93c5fd', fontSize: '2.5rem', marginBottom: '20px'}}>
          Post-Human IT Roadmap
        </h2>
        <div style={{display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', maxWidth: '800px', margin: '0 auto'}}>
          <div>
            <div style={{fontSize: '2.5rem', color: '#60a5fa', fontWeight: 'bold'}}>Q1 2026</div>
            <div style={{color: 'white'}}>Self-Healing Infrastructure</div>
          </div>
          <div>
            <div style={{fontSize: '2.5rem', color: '#60a5fa', fontWeight: 'bold'}}>Q2 2026</div>
            <div style={{color: 'white'}}>Autonomous Onboarding</div>
          </div>
          <div>
            <div style={{fontSize: '2.5rem', color: '#60a5fa', fontWeight: 'bold'}}>2027</div>
            <div style={{color: 'white'}}>Global AI Network</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background: '#020617', padding: '40px 20px', textAlign: 'center', color: '#94a3b8'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <p style={{marginBottom: '20px'}}>
            <strong>AutonomIQ Systems Pvt. Ltd.</strong> | AI-Operated IT Services
          </p>
          <p style={{fontSize: '0.9rem'}}>
            India DPDP 2023 compliant | AI-generated recommendations only | 
            Clients retain full decision authority
          </p>
          <div style={{marginTop: '20px'}}>
            <a href="/services" style={{color: '#60a5fa', margin: '0 15px', textDecoration: 'none'}}>Services</a>
            <a href="/privacy-policy" style={{color: '#60a5fa', margin: '0 15px', textDecoration: 'none'}}>Privacy</a>
            <a href="/contact" style={{color: '#60a5fa', margin: '0 15px', textDecoration: 'none'}}>Contact AI</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
