export default function Services() {
  return (
    <div style={{minHeight:'100vh', background:'linear-gradient(135deg, #000 0%, #1e3a8a 50%, #000 100%)', color:'white'}}>
      {/* SAME NAV AS CONTACT */}
      <nav style={{position:'fixed', top:0, width:'100%', background:'rgba(0,0,0,0.9)', backdropFilter:'blur(20px)', zIndex:50, padding:'1rem 2rem'}}>
        <div style={{maxWidth:'1280px', margin:'0 auto', display:'flex', justifyContent:'space-between'}}>
          <a href="/" style={{fontSize:'2rem', fontWeight:'bold', background:'linear-gradient(45deg,#60a5fa,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>AutonomIQ Systems</a>
          <div><a href="/" style={{color:'#d1d5db', marginRight:'2rem'}}>Home</a><a href="/contact" style={{color:'#d1d5db'}}>Contact</a></div>
        </div>
      </nav>
      <section style={{paddingTop:'8rem', maxWidth:'1200px', margin:'0 auto'}}>
        <h1 style={{fontSize:'clamp(3rem,8vw,5rem)', fontWeight:900, background:'linear-gradient(45deg,#60a5fa,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', textAlign:'center', marginBottom:'4rem'}}>AI IT Services</h1>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(350px,1fr))', gap:'2rem'}}>
          <div style={{background:'rgba(31,41,55,0.5)', padding:'2rem', borderRadius:'1rem', border:'1px solid #4b5563'}}>
            <h2 style={{fontSize:'2rem', color:'#60a5fa', marginBottom:'1rem'}}>AI IT Consulting</h2>
            <ul style={{fontSize:'1.1rem'}}>
              <li>✅ Cloud architecture optimization</li>
              <li>✅ IT strategy roadmaps</li>
              <li>✅ Security assessments</li>
            </ul>
          </div>
          <div style={{background:'rgba(31,41,55,0.5)', padding:'2rem', borderRadius:'1rem', border:'1px solid #4b5563'}}>
            <h2 style={{fontSize:'2rem', color:'#60a5fa', marginBottom:'1rem'}}>AIOps & Monitoring</h2>
            <ul style={{fontSize:'1.1rem'}}>
              <li>✅ 95% incident prediction</li>
              <li>✅ 20-40% cost savings</li>
              <li>✅ 98% uptime SLA</li>
            </ul>
          </div>
          <div style={{background:'rgba(31,41,55,0.5)', padding:'2rem', borderRadius:'1rem', border:'1px solid #4b5563'}}>
            <h2 style={{fontSize:'2rem', color:'#60a5fa', marginBottom:'1rem'}}>AI Development</h2>
            <ul style={{fontSize:'1.1rem'}}>
              <li>✅ Custom AI applications</li>
              <li>✅ API development</li>
              <li>✅ Automated testing</li>
            </ul>
          </div>
        </div>
        <div style={{textAlign:'center', marginTop:'4rem'}}>
          <a href="/contact" style={{background:'linear-gradient(45deg, #60a5fa, #a78bfa)', color:'white', padding:'1.5rem 3rem', borderRadius:'1rem', fontSize:'1.25rem', fontWeight:'bold', textDecoration:'none'}}>Start Free Assessment →</a>
        </div>
      </section>
      {/* SAME FOOTER */}
    </div>
  );
}
