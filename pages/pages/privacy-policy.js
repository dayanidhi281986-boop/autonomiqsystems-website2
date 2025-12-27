export default function Privacy() {
  return (
    <div style={{minHeight:'100vh', background:'linear-gradient(135deg, #000 0%, #1e3a8a 50%, #000 100%)', color:'white', padding:'8rem 2rem 4rem'}}>
      {/* SAME NAV AS CONTACT */}
      <nav style={{position:'fixed', top:0, width:'100%', background:'rgba(0,0,0,0.9)', backdropFilter:'blur(20px)', zIndex:50, padding:'1rem 2rem'}}>
        <div style={{maxWidth:'1280px', margin:'0 auto', display:'flex', justifyContent:'space-between'}}>
          <a href="/" style={{fontSize:'2rem', fontWeight:'bold', background:'linear-gradient(45deg,#60a5fa,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>AutonomIQ Systems</a>
          <div><a href="/" style={{color:'#d1d5db', marginRight:'2rem'}}>Home</a><a href="/services" style={{color:'#d1d5db', marginRight:'2rem'}}>Services</a><a href="/contact" style={{color:'#60a5fa'}}>Contact</a></div>
        </div>
      </nav>
      <section style={{maxWidth:'800px', margin:'0 auto'}}>
        <h1 style={{fontSize:'3rem', textAlign:'center', marginBottom:'2rem'}}>Privacy Policy</h1>
        <p style={{fontSize:'1.1rem', lineHeight:'1.8'}}>AutonomIQ Systems complies with India's <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>.</p>
        <ul style={{fontSize:'1.1rem', lineHeight:'1.8', marginTop:'2rem'}}>
          <li>• Minimal data collection: Name, email, company, role (form submissions only)</li>
          <li>• Purpose: AI IT assessment delivery and follow-up</li>
          <li>• No data selling or sharing with third parties</li>
          <li>• Data processed by FormSubmit.co (US-based, GDPR-compliant)</li>
          <li>• Retention: 30 days post-assessment or client request</li>
          <li>• Rights: Access, correction, deletion (email contact@autonomiqsystems.com)</li>
        </ul>
      </section>
    </div>
  );
}
