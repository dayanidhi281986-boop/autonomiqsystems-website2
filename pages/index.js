export default function Home() {
  return (
    <div style={{minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a23 0%, #1a0033 50%, #0f0f4f 100%)', color: '#e0e7ff', fontFamily: 'system-ui, -apple-system', lineHeight: 1.6}}>
      
      {/* Deloitte-Style Global Navigation */}
      <nav style={{position: 'fixed', top: 0, width: '100%', background: 'rgba(10,10,35,0.98)', backdropFilter: 'blur(20px)', zIndex: 1000, padding: '1rem 0', boxShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>
        <div style={{maxWidth: '1600px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
            <h1 style={{fontSize: '2.25rem', fontWeight: 900, background: 'linear-gradient(135deg, #93c5fd, #a78bfa, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0}}>AUTONOMIQ SYSTEMS</h1>
            <div style={{display: 'flex', gap: '2rem'}}>
              <a href="#about" style={{color: '#94a3b8', fontWeight: 500, textDecoration: 'none', fontSize: '1.1rem'}}>About</a>
              <a href="#services" style={{color: '#94a3b8', fontWeight: 500, textDecoration: 'none', fontSize: '1.1rem'}}>Services</a>
              <a href="#platform" style={{color: '#94a3b8', fontWeight: 500, textDecoration: 'none', fontSize: '1.1rem'}}>Platform</a>
              <a href="#careers" style={{color: '#94a3b8', fontWeight: 500, textDecoration: 'none', fontSize: '1.1rem'}}>Careers</a>
            </div>
          </div>
          <a href="#contact" style={{background: 'linear-gradient(135deg, #1e40af, #3730a3)', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 'bold', fontSize: '1.125rem', textDecoration: 'none', boxShadow: '0 10px 30px rgba(30,64,175,0.4)'}}>🚀 START PROJECT</a>
        </div>
      </nav>

      {/* Hero - Quantum AI Leader */}
      <section style={{padding: '180px 2rem 100px', maxWidth: '1600px', margin: '0 auto', textAlign: 'center'}}>
        <div style={{display: 'inline-flex', alignItems: 'center', background: 'rgba(34,197,94,0.15)', border: '2px solid rgba(34,197,94,0.4)', padding: '1.25rem 2rem', borderRadius: '50px', marginBottom: '3rem', maxWidth: 'max-content', marginLeft: 'auto', marginRight: 'auto', boxShadow: '0 10px 40px rgba(34,197,94,0.2)'}}>
          <span style={{width: '16px', height: '16px', background: 'linear-gradient(45deg, #22c55e, #86efac)', borderRadius: '50%', marginRight: '1rem', boxShadow: '0 0 20px #22c55e'}}></span>
          <span style={{fontSize: '1.25rem', fontWeight: 700}}>🧬 QUANTUM AI SYSTEMS | EST. 2025 | 99.9999% UPTIME | FORTUNE 500 TRUSTED</span>
        </div>
        <h1 style={{fontSize: 'clamp(4rem, 12vw, 8rem)', fontWeight: 900, background: 'linear-gradient(135deg, #93c5fd 0%, #a78bfa 40%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '0 0 2rem', letterSpacing: '-0.02em'}}>
          Quantum-Secure AI Infrastructure
        </h1>
        <p style={{fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', maxWidth: '1000px', margin: '0 auto 4rem', lineHeight: 1.4, color: '#cbd5e1'}}>
          Deploy unbreakable enterprise AI with quantum-grade encryption, zero-trust security, and self-healing infrastructure across 50+ global cloud regions.
        </p>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem'}}>
          <a href="#services" style={{background: 'linear-gradient(135deg, #1e40af, #3730a3, #1e3a8a)', color: 'white', padding: '1.75rem 4rem', borderRadius: '50px', fontSize: '1.5rem', fontWeight: 800, textDecoration: 'none', boxShadow: '0 25px 50px rgba(30,64,175,0.4)', transition: 'all 0.4s ease'}}>
            🧬 LAUNCH QUANTUM AI
          </a>
          <div style={{display: 'flex', gap: '2rem', fontSize: '1.25rem', color: '#94a3b8'}}>
            <a href="#leadership" style={{color: '#94a3b8', textDecoration: 'none'}}>👨‍💼 MEET LEADERSHIP</a>
            <span>|</span>
            <a href="#careers" style={{color: '#94a3b8', textDecoration: 'none'}}>💼 JOIN TEAM</a>
          </div>
        </div>
      </section>

      {/* 1. About Us */}
      <section id="about" style={{padding: '120px 2rem', background: 'rgba(15,23,42,0.6)', maxWidth: '1600px', margin: '0 auto'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, textAlign: 'center', background: 'linear-gradient(135deg, #93c5fd, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '4rem'}}>
            About AutonomIQ Systems
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center'}}>
            <div>
              <h3 style={{fontSize: '2.5rem', fontWeight: 800, color: '#93c5fd', marginBottom: '2rem'}}>India's First Quantum AI Enterprise</h3>
              <p style={{fontSize: '1.375rem', lineHeight: 1.7, color: '#e0e7ff', marginBottom: '2rem'}}>
                Founded by <strong style={{color: '#a78bfa'}}>DAYANIDHI DONDAPATI</strong> - 15+ years enterprise IT leader. 
                First company to unify quantum cryptography, AI self-healing infrastructure, and zero-trust security into a single platform.
              </p>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{fontSize: '1.25rem', marginBottom: '1.5rem', color: '#cbd5e1'}}>• <strong>Quantum-Resistant Encryption</strong> - NIST PQC certified</li>
                <li style={{fontSize: '1.25rem', marginBottom: '1.5rem', color: '#cbd5e1'}}>• <strong>AI Self-Healing Infra</strong> - 99.9999% uptime SLA</li>
                <li style={{fontSize: '1.25rem', marginBottom: '1.5rem', color: '#cbd5e1'}}>• <strong>50+ Global Regions</strong> - AWS/Azure/GCP edge</li>
                <li style={{fontSize: '1.25rem', color: '#cbd5e1'}}>• <strong>DPDP/GST Compliant</strong> - India-first enterprise</li>
              </ul>
            </div>
            <div style={{background: 'linear-gradient(135deg, rgba(147,197,253,0.2), rgba(167,139,250,0.2))', padding: '4rem', borderRadius: '32px', border: '1px solid rgba(147,197,253,0.3)', textAlign: 'center'}}>
              <div style={{fontSize: '6rem', lineHeight: 1}}>🧬</div>
              <h4 style={{fontSize: '2rem', fontWeight: 700, color: '#93c5fd', marginBottom: '1rem'}}>Super Quantum AI Platform</h4>
              <p style={{fontSize: '1.25rem', color: '#94a3b8'}}>All tools unified in one platform - deploy, secure, scale, self-heal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What We Build - Super Quantum AI Platform */}
      <section id="platform" style={{padding: '120px 2rem', maxWidth: '1600px', margin: '0 auto'}}>
        <h2 style={{fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, textAlign: 'center', background: 'linear-gradient(135deg, #22c55e, #86efac)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '6rem'}}>
          Super Quantum AI - Unified Platform
        </h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem'}}>
          
          {/* Quantum AI Core */}
          <div style={{background: 'rgba(147,197,253,0.15)', border: '1px solid rgba(147,197,253,0.3)', padding: '4rem 3rem', borderRadius: '32px', transition: 'all 0.4s ease'}}>
            <div style={{fontSize: '4rem', color: '#93c5fd', marginBottom: '2rem'}}>🧠</div>
            <h3 style={{fontSize: '2.25rem', fontWeight: 800, color: '#93c5fd', marginBottom: '1.5rem'}}>Quantum AI Core Engine</h3>
            <ul style={{fontSize: '1.25rem', color: '#e0e7ff', lineHeight: 1.7}}>
              <li>• Self-evolving neural networks with quantum entanglement simulation</li>
              <li>• 1000x inference acceleration vs classical AI</li>
              <li>• Zero-shot learning across 500+ enterprise domains</li>
              <li>• Continuous model optimization (24/7 evolution)</li>
            </ul>
            <div style={{fontSize: '3rem', fontWeight: 900, color: '#22c55e', marginTop: '2rem'}}>99.9999% Accuracy</div>
          </div>

          {/* Zero-Trust Security */}
          <div style={{background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', padding: '4rem 3rem', borderRadius: '32px', transition: 'all 0.4s ease'}}>
            <div style={{fontSize: '4rem', color: '#22c55e', marginBottom: '2rem'}}>🔒</div>
            <h3 style={{fontSize: '2.25rem', fontWeight: 800, color: '#22c55e', marginBottom: '1.5rem'}}>Zero-Trust Security Fabric</h3>
            <ul style={{fontSize: '1.25rem', color: '#e0e7ff', lineHeight: 1.7}}>
              <li>• NIST Post-Quantum Cryptography (Kyber/Dilithium)</li>
              <li>• Homomorphic encryption for encrypted compute</li>
              <li>• Continuous behavioral biometrics (zero passwords)</li>
              <li>• Self-healing security across 50+ regions</li>
            </ul>
            <div style={{fontSize: '3rem', fontWeight: 900, color: '#ef4444', marginTop: '2rem'}}>0 Breaches</div>
          </div>

          {/* Hyper-Scale Infrastructure */}
          <div style={{background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.3)', padding: '4rem 3rem', borderRadius: '32px', transition: 'all 0.4s ease'}}>
            <div style={{fontSize: '4rem', color: '#a78bfa', marginBottom: '2rem'}}>🌐</div>
            <h3 style={{fontSize: '2.25rem', fontWeight: 800, color: '#a78bfa', marginBottom: '1.5rem'}}>Hyper-Scale Infrastructure</h3>
            <ul style={{fontSize: '1.25rem', color: '#e0e7ff', lineHeight: 1.7}}>
              <li>• Distributed quantum orchestration (0ms failover)</li>
              <li>• 200+ edge locations worldwide (AWS/Azure/GCP)</li>
              <li>• AI-driven auto-scaling (predictive capacity)</li>
              <li>• Multi-cloud quantum entanglement networking</li>
            </ul>
            <div style={{fontSize: '3rem', fontWeight: 900, color: '#eab308', marginTop: '2rem'}}>50+ Regions</div>
          </div>
        </div>
      </section>

      {/* 3. Our Services */}
      <section id="services" style={{padding: '120px 2rem', background: 'rgba(15,23,42,0.6)', maxWidth: '1600px', margin: '0 auto'}}>
        <h2 style={{fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, textAlign: 'center', background: 'linear-gradient(135deg, #ec4899, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '6rem'}}>
          Enterprise Services
        </h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem'}}>
          <div style={{background: 'rgba(30,58,138,0.3)', border: '1px solid rgba(147,197,253,0.4)', padding: '4rem', borderRadius: '24px'}}>
            <h3 style={{fontSize: '2.5rem', fontWeight: 800, color: '#93c5fd', marginBottom: '2rem'}}>Quantum AI Consulting</h3>
            <p style={{fontSize: '1.25rem', color: '#e0e7ff', marginBottom: '2rem'}}>Enterprise quantum AI transformation roadmaps, architecture design, zero-trust migration.</p>
            <div style={{fontSize: '3rem', fontWeight: 900, color: '#22c55e'}}>₹2L-10L/month</div>
          </div>
          <div style={{background: 'rgba(34,197,94,0.3)', border: '1px solid rgba(34,197,94,0.4)', padding: '4rem', borderRadius: '24px'}}>
            <h3 style={{fontSize: '2.5rem', fontWeight: 800, color: '#22c55e', marginBottom: '2rem'}}>AIOps Operations</h3>
            <p style={{fontSize: '1.25rem', color: '#e0e7ff', marginBottom: '2rem'}}>Predictive monitoring, auto-remediation, quantum-secure operations across multi-cloud.</p>
            <div style={{fontSize: '3rem', fontWeight: 900, color: '#22c55e'}}>₹5L+/month</div>
          </div>
          <div style={{background: 'rgba(167,139,250,0.3)', border: '1px solid rgba(167,139,250,0.4)', padding: '4rem', borderRadius: '24px'}}>
            <h3 style={{fontSize: '2.5rem', fontWeight: 800, color: '#a78bfa', marginBottom: '2rem'}}>Quantum Development</h3>
            <p style={{fontSize: '1.25rem', color: '#e0e7ff', marginBottom: '2rem'}}>Custom quantum AI applications, PQC-secured APIs, self-healing microservices.</p>
            <div style={{fontSize: '3rem', fontWeight: 900, color: '#a78bfa'}}>₹10L-50L/project</div>
          </div>
        </div>
      </section>

      {/* 4. Leadership */}
      <section id="leadership" style={{padding: '120px 2rem', maxWidth: '1400px', margin: '0 auto', textAlign: 'center'}}>
        <h2 style={{fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, background: 'linear-gradient(135deg, #93c5fd, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '4rem'}}>
          Leadership
        </h2>
        <div style={{maxWidth: '800px', margin: '0 auto', background: 'rgba(15,23,42,0.8)', padding: '4rem 3rem', borderRadius: '32px', border: '1px solid rgba(147,197,253,0.3)'}}>
          <div style={{fontSize: '5rem', marginBottom: '2rem'}}>👨‍💼</div>
          <h3 style={{fontSize: '3rem', fontWeight: 900, color: '#93c5fd', marginBottom: '1.5rem'}}>DAYANIDHI DONDAPATI</h3>
          <p style={{fontSize: '1.5rem', color: '#94a3b8', marginBottom: '2rem'}}>Founder & CEO</p>
          <p style={{fontSize: '1.375rem', color: '#e0e7ff', lineHeight: 1.7}}>
            15+ years enterprise IT leadership | Quantum AI pioneer | Fortune 500 architect | Built India's first quantum-secure AI infrastructure platform.
          </p>
        </div>
      </section>

      {/* 5. Careers */}
      <section id="careers" style={{padding: '120px 2rem', background: 'rgba(15,23,42,0.6)', maxWidth: '1600px', margin: '0 auto'}}>
        <h2 style={{fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, textAlign: 'center', background: 'linear-gradient(135deg, #22c55e, #86efac)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '4rem'}}>
          Careers
        </h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', textAlign: 'center'}}>
          <div>
            <h3 style={{fontSize: '2.5rem', fontWeight: 800, color: '#93c5fd', marginBottom: '1.5rem'}}>Quantum AI Engineers</h3>
            <p style={{fontSize: '1.25rem', color: '#e0e7ff'}}>Build next-gen quantum-secure AI systems. PQC, homomorphic encryption, self-healing infra.</p>
          </div>
          <div>
            <h3 style={{fontSize: '2.5rem', fontWeight: 800, color: '#22c55e', marginBottom: '1.5rem'}}>AIOps Architects</h3>
            <p style={{fontSize: '1.25rem', color: '#e0e7ff'}}>Design predictive operations for Fortune 500. Multi-cloud, zero-trust, quantum networking.</p>
          </div>
          <div>
            <h3 style={{fontSize: '2.5rem', fontWeight: 800, color: '#a78bfa', marginBottom: '1.5rem'}}>Security Researchers</h3>
            <p style={{fontSize: '1.25rem', color: '#e0e7ff'}}>Break quantum cryptography. NIST PQC certified team. Zero-trust behavioral biometrics.</p>
          </div>
        </div>
      </section>

      {/* 6. Contact */}
      <section id="contact" style={{padding: '120px 2rem 80px', maxWidth: '1000px', margin: '0 auto'}}>
        <h2 style={{fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, textAlign: 'center', background: 'linear-gradient(135deg, #ec4899, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '4rem'}}>
          Start Your Quantum AI Journey
        </h2>
        <form action="https://formsubmit.co/contact@autonomiqsystems.com" method="POST" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '1000px', margin: '0 auto'}}>
          <input type="hidden" name="_subject" value="Quantum AI Enterprise Lead" />
          <input type="hidden" name="_next" value="https://autonomiqsystems.com/#thankyou" />
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <input type="text" name="company" placeholder="Company Name *" style={{padding: '1.5rem 2rem', background: 'rgba(30,41,59,0.8)', border: '1px solid #475569', borderRadius: '16px', color: 'white', fontSize: '1.25rem'}} required />
            <input type="text" name="role" placeholder="Your Role (CTO/IT Head/Founder) *" style={{padding: '1.5rem 2rem', background: 'rgba(30,41,59,0.8)', border: '1px solid #475569', borderRadius: '16px', color: 'white', fontSize: '1.25rem'}} required />
            <input type="email" name="email" placeholder="Email Address *" style={{padding: '1.5rem 2rem', background: 'rgba(30,41,59,0.8)', border: '1px solid #475569', borderRadius: '16px', color: 'white', fontSize: '1.25rem'}} required />
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <textarea name="challenge" rows="6" placeholder="Your Enterprise Challenge&#10;Quantum migration? Zero-trust security? AI infra scaling?" style={{padding: '1.5rem 2rem', background: 'rgba(30,41,59,0.8)', border: '1px solid #475569', borderRadius: '16px', color: 'white', fontSize: '1.25rem', resize: 'vertical'}} required></textarea>
            <button type="submit" style={{background: 'linear-gradient(135deg, #1e40af, #3730a3)', color: 'white', padding: '2rem 3rem', borderRadius: '24px', fontSize: '1.5rem', fontWeight: 800, border: 'none', cursor: 'pointer', boxShadow: '0 25px 50px rgba(30,64,175,0.4)', transition: 'all 0.4s ease'}}>
              🚀 GET QUANTUM AI ASSESSMENT REPORT
            </button>
          </div>
        </form>
        <p style={{textAlign: 'center', marginTop: '4rem', color: '#64748b', fontSize: '1rem'}}>
          DPDP Act 2023 compliant • Data encrypted at rest/transit • India GST registered
        </p>
      </section>

      {/* Footer */}
      <footer style={{padding: '4rem 2rem 2rem', background: 'rgba(10,10,35,0.95)', textAlign: 'center', borderTop: '1px solid rgba(147,197,253,0.2)'}}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <div style={{fontSize: '1.25rem', color: '#94a3b8', marginBottom: '2rem'}}>
            © 2025 AutonomIQ Systems Pvt. Ltd. - All Rights Reserved | Powered by Super Quantum AI
          </div>
          <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
            <a href="#privacy" style={{color: '#94a3b8', textDecoration: 'none'}}>Privacy</a>
            <a href="#terms" style={{color: '#94a3b8', textDecoration: 'none'}}>Terms</a>
            <a href="#careers" style={{color: '#94a3b8', textDecoration: 'none'}}>Careers</a>
            <a href="#api" style={{color: '#94a3b8', textDecoration: 'none'}}>API Docs</a>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div style={{position: 'fixed', bottom: '2rem', right: '2rem', background: 'linear-gradient(135deg, #1e40af, #3730a3)', color: 'white', padding: '1.5rem 2.5rem', borderRadius: '50px', fontWeight: 800, fontSize: '1.125rem', boxShadow: '0 20px 40px rgba(30,64,175,0.5)', cursor: 'pointer', zIndex: 2000}}>
        💬 AI CHAT → START PROJECT
      </div>

    </div>
  );
}
