export default function Home() {
  return (
    <div style={{background:'linear-gradient(135deg, #0b0f1a 0%, #1e3a8a 100%)', minHeight:'100vh'}}>
      {/* HERO */}
      <section style={{padding:'100px 20px', textAlign:'center', color:'white'}}>
        <h1 style={{fontSize:'4rem', color:'#93c5fd', marginBottom:'20px'}}>
          AutonomIQ Systems Pvt. Ltd.
        </h1>
        <h2 style={{fontSize:'2rem', marginBottom:'30px'}}>
          AI-Only IT Consulting • AIOps • Development
        </h2>
        <p style={{fontSize:'1.3rem', maxWidth:'800px', margin:'0 auto 40px'}}>
          No humans. No delays. Infinite scale. Enterprise IT powered by autonomous AI agents.
        </p>
        <div style={{display:'flex', gap:'20px', justifyContent:'center', flexWrap:'wrap'}}>
          <button style={{padding:'20px 40px', background:'#1e40af', color:'white', border:'none', borderRadius:'10px', fontSize:'1.2rem'}}>
            Start AI Consultation →
          </button>
          <button style={{padding:'20px 40px', background:'transparent', color:'#93c5fd', border:'2px solid #93c5fd', borderRadius:'10px'}}>
            View Portfolio
          </button>
        </div>
        <p style={{marginTop:'50px', fontSize:'1.1rem', opacity:0.9}}>
          Dayanidhi Dondapati - Founder & AI Governor
        </p>
      </section>

      {/* SERVICES PORTFOLIO */}
      <section style={{padding:'100px 20px', background:'#0f172a'}}>
        <h2 style={{textAlign:'center', color:'#93c5fd', fontSize:'3rem', marginBottom:'80px'}}>
          AI-Powered Enterprise Services
        </h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(350px, 1fr))', gap:'40px', maxWidth:'1200px', margin:'0 auto'}}>
          <div style={{background:'rgba(255,255,255,0.05)', padding:'40px', borderRadius:'20px', border:'1px solid #334155'}}>
            <h3 style={{color:'#60a5fa', fontSize:'1.8rem', marginBottom:'20px'}}>AI IT Consulting</h3>
            <ul style={{color:'white', lineHeight:'1.8'}}>
              <li>Cloud architecture optimization</li>
              <li>Digital transformation roadmaps</li>
              <li>Cybersecurity strategy (AI-driven)</li>
              <li>80% faster than human consultants[web:175]</li>
            </ul>
          </div>
          <div style={{background:'rgba(255,255,255,0.05)', padding:'40px', borderRadius:'20px', border:'1px solid #334155'}}>
            <h3 style={{color:'#60a5fa', fontSize:'1.8rem', marginBottom:'20px'}}>AIOps Operations</h3>
            <ul style={{color:'white', lineHeight:'1.8'}}>
              <li>Predictive incident resolution</li>
              <li>Self-healing infrastructure</li>
              <li>95% MTTR reduction[web:179]</li>
              <li>Zero human intervention</li>
            </ul>
          </div>
          <div style={{background:'rgba(255,255,255,0.05)', padding:'40px', borderRadius:'20px', border:'1px solid #334155'}}>
            <h3 style={{color:'#60a5fa', fontSize:'1.8rem', marginBottom:'20px'}}>AI Development</h3>
            <ul style={{color:'white', lineHeight:'1.8'}}>
              <li>Autonomous code generation</li>
              <li>Self-testing deployment</li>
              <li>Continuous optimization</li>
              <li>Enterprise-grade applications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FUTURE VISION */}
      <section style={{padding:'100px 20px', textAlign:'center', background:'linear-gradient(135deg, #1e293b 0%, #0b0f1a 100%)'}}>
        <h2 style={{color
