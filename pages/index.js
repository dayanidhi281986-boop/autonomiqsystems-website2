module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="AutonomIQ Systems - Quantum AI Operations Platform. Autonomous Infrastructure Intelligence with Quantum-Enhanced Predictive Analytics.">
<title>AutonomIQ Systems | Quantum AI Operations Platform</title>
<link rel="icon" href="/autonomiq-logo.png">
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
* {margin:0;padding:0;box-sizing:border-box;}
:root {
  --primary: #0a2540; --secondary: #1e3a8a; --accent: #ff6b35; --gradient: linear-gradient(135deg, #0a2540 0%, #1e3a8a 50%, #1e40af 100%);
  --glass: rgba(255,255,255,0.1); --glass-border: rgba(255,255,255,0.2);
}
body {font-family:'Inter',sans-serif;line-height:1.7;overflow-x:hidden;background:#0a0e1f;}
.container {max-width:1400px;margin:0 auto;padding:0 24px;}
.glass {background:var(--glass);backdrop-filter:blur(20px);border:1px solid var(--glass-border);border-radius:24px;}

/* HERO */
.hero {min-height:100vh;background:var(--gradient);display:flex;align-items:center;position:relative;overflow:hidden;}
.hero::before {content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(circle at 30% 20%, rgba(255,107,53,0.3) 0%, transparent 50%);animation:heroPulse 8s ease-in-out infinite;}
@keyframes heroPulse {0%,100%{opacity:1;}50%{opacity:0.7;}}
.hero-content {text-align:center;z-index:2;position:relative;}
.h1-hero {font-size:clamp(4rem,12vw,9rem);font-weight:900;background:linear-gradient(135deg,#fff 0%,#ff6b35 50%,#ffd700 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:24px;letter-spacing:-2px;}
.hero-subtitle {font-size:clamp(1.3rem,3vw,2.5rem);font-weight:400;color:rgba(255,255,255,0.95);max-width:800px;margin:0 auto 48px;line-height:1.4;}
.cta-primary {background:linear-gradient(135deg,#ff6b35 0%,#f97316 100%);color:#fff;padding:20px 48px;font-size:1.3rem;font-weight:600;border:none;border-radius:50px;cursor:pointer;display:inline-flex;align-items:center;gap:12px;box-shadow:0 20px 40px rgba(255,107,53,0.4);transition:all 0.4s cubic-bezier(0.4,0,0.2,1);text-decoration:none;position:relative;overflow:hidden;}
.cta-primary::before {content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent, rgba(255,255,255,0.3), transparent);transition:inherit;}
.cta-primary:hover {transform:translateY(-4px) scale(1.02);box-shadow:0 30px 60px rgba(255,107,53,0.5);}

.cta-secondary {background:transparent;color:#fff;padding:18px 40px;font-size:1.2rem;font-weight:500;border:2px solid rgba(255,255,255,0.3);border-radius:50px;transition:all 0.3s;margin-left:20px;display:inline-flex;align-items:center;}
.cta-secondary:hover {background:rgba(255,255,255,0.1);border-color:#ff6b35;transform:translateY(-2px);}

/* STATS */
.stats {display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:32px;margin:80px 0;padding:60px 0;background:rgba(0,0,0,0.2);}
.stat {text-align:center;}
.stat-number {font-size:clamp(2.5rem,8vw,5rem);font-weight:900;background:linear-gradient(135deg,#ff6b35,#ffd700);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.stat-label {font-size:1.1rem;color:rgba(255,255,255,0.8);margin-top:8px;letter-spacing:0.5px;}

/* QUANTUM CORE */
.quantum-core {padding:120px 0;background:radial-gradient(ellipse at center, rgba(30,58,138,0.3) 0%, transparent 70%);}
.section-title {font-size:clamp(2.5rem,6vw,4.5rem);font-weight:800;text-align:center;margin-bottom:16px;background:linear-gradient(135deg,#fff 0%,#e2e8f0 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.section-subtitle {font-size:1.4rem;text-align:center;color:rgba(255,255,255,0.8);max-width:800px;margin:0 auto 80px;line-height:1.6;}
.core-grid {display:grid;grid-template-columns:repeat(auto-fit,minmax(380px,1fr));gap:48px;}
.core-card {background:var(--glass);padding:48px;border-radius:24px;position:relative;overflow:hidden;transition:transform 0.5s cubic-bezier(0.4,0,0.2,1);}
.core-card::before {content:'';position:absolute;top:0;left:0;width:100%;height:4px;background:linear-gradient(90deg,var(--accent),#ffd700);transform:scaleX(0);transition:transform 0.4s;}
.core-card:hover::before {transform:scaleX(1);}
.core-card:hover {transform:translateY(-12px);}
.core-icon {width:80px;height:80px;border-radius:20px;margin-bottom:32px;display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:900;color:var(--accent);background:linear-gradient(135deg,rgba(255,107,53,0.2),rgba(255,215,0,0.2));border:2px solid rgba(255,107,53,0.3);}
.core-title {font-size:1.8rem;font-weight:700;color:#fff;margin-bottom:20px;}
.core-desc {color:rgba(255,255,255,0.9);line-height:1.7;font-size:1.1rem;}

/* PARTICLE SYSTEM */
.particles {position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;}
.particle {position:absolute;background:radial-gradient(circle, rgba(255,107,53,0.6) 0%, transparent 70%);border-radius:50%;animation:particleFloat 20s infinite linear;}
@keyframes particleFloat {0%{transform:translateY(100vh) rotate(0deg);opacity:0;}10%{opacity:1;}90%{opacity:1;}100%{transform:translateY(-100vh) rotate(360deg);opacity:0;}}

/* NEURAL MATRIX */
.neural-matrix {padding:120px 0;background:var(--gradient);}
.matrix-grid {display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:40px;margin-top:60px;}
.matrix-item {background:var(--glass);padding:40px;border-radius:20px;text-align:center;position:relative;}
.matrix-icon {width:100px;height:100px;margin:0 auto 24px;background:linear-gradient(135deg,#ff6b35,#ffd700);border-radius:24px;display:flex;align-items:center;justify-content:center;font-size:2.5rem;font-weight:900;color:#fff;box-shadow:0 20px 40px rgba(255,107,53,0.3);}

/* QUANTUM SIMULATOR */
.quantum-sim {padding:120px 0;background:radial-gradient(ellipse at top, rgba(30,58,138,0.4) 0%, transparent 70%);}
.sim-container {display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;}
.sim-visual {position:relative;}
.quantum-cube {width:300px;height:300px;margin:0 auto;position:relative;transform-style:preserve-3d;animation:quantumRotate 20s infinite linear;}
.cube-face {position:absolute;width:300px;height:300px;background:linear-gradient(135deg,rgba(255,107,53,0.8),rgba(255,215,0,0.8));border:2px solid rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:700;color:#fff;border-radius:16px;}
@keyframes quantumRotate {0%{transform:rotateX(0) rotateY(0);}100%{transform:rotateX(360deg) rotateY(360deg);}}
.sim-features {background:var(--glass);padding:48px;border-radius:24px;}
@keyframes quantumPulse {0%,100%{box-shadow:0 0 40px rgba(255,107,53,0.6);}50%{box-shadow:0 0 80px rgba(255,107,53,0.9),0 0 120px rgba(255,215,0,0.6);}}

/* LEADERSHIP */
.leadership {padding:140px 0;background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);}
.leader-hero {text-align:center;margin-bottom:80px;}
.founder-img {width:280px;height:280px;border-radius:50%;object-fit:cover;border:8px solid rgba(255,107,53,0.3);box-shadow:0 40px 80px rgba(0,0,0,0.5),inset 0 0 0 2px rgba(255,255,255,0.2);margin-bottom:32px;animation:founderFloat 6s ease-in-out infinite;}
@keyframes founderFloat {0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-10px) rotate(2deg);}}
.leader-name {font-size:3.5rem;font-weight:900;background:linear-gradient(135deg,#fff,#ff6b35);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;}
.leader-title {font-size:1.4rem;color:#ff6b35;font-weight:600;margin-bottom:24px;letter-spacing:1px;}

/* FOOTER */
footer {background:linear-gradient(135deg,#000 0%,#0a0e1f 100%);color:rgba(255,255,255,0.7);padding:80px 0 40px;text-align:center;}
.footer-links {display:flex;justify-content:center;gap:32px;margin:40px 0;flex-wrap:wrap;}
.footer-links a {color:rgba(255,255,255,0.8);text-decoration:none;font-weight:500;transition:color 0.3s;}
.footer-links a:hover {color:#ff6b35;}

/* RESPONSIVE */
@media(max-width:1024px) {.sim-container {grid-template-columns:1fr;gap:40px;text-align:center;}}
@media(max-width:768px) {.h1-hero {font-size:3.5rem;}.hero-subtitle {font-size:1.2rem;}.cta-primary {padding:16px 32px;font-size:1.1rem;margin:8px;}.stats {grid-template-columns:repeat(2,1fr);gap:24px;margin:40px 0;padding:40px 0;}}
@media(max-width:480px) {.container {padding:0 16px;}.stats {grid-template-columns:1fr;}}
</style>
</head>
<body>
<!-- PARTICLE SYSTEM -->
<div class="particles" id="particles"></div>

<!-- HERO -->
<section class="hero">
  <div class="hero-content">
    <h1 class="h1-hero">AutonomIQ Systems</h1>
    <p class="hero-subtitle">Quantum-Enhanced AI Operations Platform. Autonomous Infrastructure Intelligence with Real-Time Neural Architecture Optimization and Predictive Quantum Simulation.</p>
    <div>
      <a href="#demo" class="cta-primary" onclick="scrollTo('quantum-core')">
        <span>🚀 Launch Quantum Demo</span>
      </a>
      <a href="#contact" class="cta-secondary" onclick="scrollTo('leadership')">Meet Founder</a>
    </div>
  </div>
</section>

<!-- ENTERPRISE STATS -->
<section class="stats glass">
  <div class="stat">
    <div class="stat-number" data-count="99.999">99.999%</div>
    <div class="stat-label">Uptime Guarantee</div>
  </div>
  <div class="stat">
    <div class="stat-number" data-count="500">500ms</div>
    <div class="stat-label">Neural Response Time</div>
  </div>
  <div class="stat">
    <div class="stat-number" data-count="100">100x</div>
    <div class="stat-label">Faster Predictions</div>
  </div>
  <div class="stat">
    <div class="stat-number" data-count="0">0-Human</div>
    <div class="stat-label">Autonomous Ops</div>
  </div>
</section>

<!-- QUANTUM CORE -->
<section class="quantum-core" id="quantum-core">
  <div class="container">
    <h2 class="section-title">Quantum AI Core Engine</h2>
    <p class="section-subtitle">Patented hybrid quantum-classical neural architecture delivering unprecedented infrastructure autonomy and predictive accuracy.</p>
    <div class="core-grid">
      <div class="core-card">
        <div class="core-icon">⚛️</div>
        <h3 class="core-title">Quantum State Prediction</h3>
        <p class="core-desc">Real-time quantum simulation of infrastructure states with 100x faster convergence than classical ML models. Zero-shot adaptation to novel failure patterns.</p>
      </div>
      <div class="core-card">
        <div class="core-icon">🧠</div>
        <h3 class="core-title">Neural Architecture Search</h3>
        <p class="core-desc">Automated discovery of optimal deep learning architectures for AIOps. Continuous evolution without human intervention. 47% accuracy improvement over SOTA.</p>
      </div>
      <div class="core-card">
        <div class="core-icon">🌐</div>
        <h3 class="core-title">Multi-Cloud Quantum Fabric</h3>
        <p class="core-desc">Seamless orchestration across Azure Quantum, GCP Bristlecone, and AWS OQC. Vendor-agnostic quantum resource pooling with federated learning.</p>
      </div>
      <div class="core-card">
        <div class="core-icon">⚡</div>
        <h3 class="core-title">Zero-Touch Remediation</h3>
        <p class="core-desc">Fully autonomous incident resolution with quantum-enhanced decision trees. 93% first-contact resolution rate, 8.2x MTTR reduction.</p>
      </div>
    </div>
  </div>
</section>

<!-- NEURAL MATRIX -->
<section class="neural-matrix">
  <div class="container">
    <h2 class="section-title" style="color:#fff;">Neural Decision Matrix</h2>
    <p class="section-subtitle" style="color:rgba(255,255,255,0.9);">8-dimensional quantum state analysis driving autonomous infrastructure intelligence.</p>
    <div class="matrix-grid">
      <div class="matrix-item">
        <div class="matrix-icon" style="background:linear-gradient(135deg,#ff6b35,#f97316);">🔬</div>
        <h3>Quantum Tomography</h3>
        <p>Continuous infrastructure state reconstruction using 128-qubit error-corrected measurements.</p>
      </div>
      <div class="matrix-item">
        <div class="matrix-icon" style="background:linear-gradient(135deg,#1e3a8a,#1e40af);">⚛️</div>
        <h3>Entanglement Mapping</h3>
        <p>Real-time dependency correlation matrix spanning 50K+ microservices across 7 clouds.</p>
      </div>
      <div class="matrix-item">
        <div class="matrix-icon" style="background:linear-gradient(135deg,#10b981,#059669);">🚀</div>
        <h3>Variational Optimization</h3>
        <p>Quantum approximate optimization algorithm (QAOA) for resource allocation. 3.7x efficiency gain.</p>
      </div>
      <div class="matrix-item">
        <div class="matrix-icon" style="background:linear-gradient(135deg,#f59e0b,#d97706);">🧬</div>
        <h3>Evolutionary Policies</h3>
        <p>Genetic programming for self-improving remediation strategies. Darwinian infrastructure evolution.</p>
      </div>
    </div>
  </div>
</section>

<!-- QUANTUM SIMULATOR -->
<section class="quantum-sim">
  <div class="container">
    <div class="sim-container">
      <div class="sim-visual">
        <div class="quantum-cube">
          <div class="cube-face" style="transform:translateZ(150px);">QPU</div>
          <div class="cube-face" style="transform:translateZ(-150px);">STATE</div>
          <div class="cube-face" style="transform:translateX(150px) rotateY(90deg);">ENTANGLE</div>
          <div class="cube-face" style="transform:translateX(-150px) rotateY(90deg);">MEASURE</div>
          <div class="cube-face" style="transform:translateY(150px) rotateX(90deg);">PREDICT</div>
          <div class="cube-face" style="transform:translateY(-150px) rotateX(90deg);">OPTIMIZE</div>
        </div>
      </div>
      <div class="sim-features" style="animation:quantumPulse 3s infinite;">
        <h3 style="color:#fff;font-size:2.2rem;margin-bottom:24px;">Live Quantum Simulator</h3>
        <ul style="color:rgba(255,255,255,0.95);list-style:none;padding:0;">
          <li style="margin:16px 0;display:flex;align-items:center;gap:12px;"><span style="width:8px;height:8px;background:#ff6b35;border-radius:50%;flex-shrink:0;"></span>128-qubit real-time simulation</li>
          <li style="margin:16px 0;display:flex;align-items:center;gap:12px;"><span style="width:8px;height:8px;background:#ff6b35;border-radius:50%;flex-shrink:0;"></span>99.8% predictive fidelity</li>
          <li style="margin:16px 0;display:flex;align-items:center;gap:12px;"><span style="width:8px;height:8px;background:#ff6b35;border-radius:50%;flex-shrink:0;"></span>47ms inference latency</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- LEADERSHIP -->
<section class="leadership" id="leadership">
  <div class="container">
    <div class="leader-hero">
      <img src="/founder-dayanidhi.png" alt="DAYANIDHI DONDAPATI" class="founder-img" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCIgdmlld0JveD0iMCAwIDI4MCAyODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjE0MCIgY3k9IjE0MCIgcj0iMTM0IiBmaWxsPSJ1cmwoI3JnKQovPjxkZWZzPjxwYXR0ZXJuIGlkPSJyZyIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxMCIgZmlsbD0iI2ZmNmIzNSIgb3BhY2l0eT0iMC4xNSIvPjwvcGF0dGVybj48L2RlZnM+Cjx0ZXh0IHg9IjE0MCIgeT0iMTUyIiBmb250LWZhbWlseT0iSW50ZXIsQXJpYWwiIGZvbnQtc2l6ZT0iMzIiIGZpbGw9IiNmZjZiMzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRVQU5JREhJPC90ZXh0Pjx0ZXh0IHg9IjE0MCIgeT0iMTkwIiBmb250LXNpemU9IjE4IiBmaWxsPSIjZmY2YjM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5GOUNERVIgJiBDRU88L3RleHQ+PC9zdmc+'">
      <h2 class="leader-name">DAYANIDHI DONDAPATI</h2>
      <p class="leader-title">Founder & CEO — Quantum AI Operations Pioneer</p>
      <p style="font-size:1.2rem;color:rgba(255,255,255,0.9);max-width:700px;margin:0 auto;line-height:1.8;">15+ years enterprise IT leadership. Architected quantum-AI platforms serving Fortune 500 clients. Patented Neural Architecture Search algorithms deployed at petabyte scale. Kubernetes | AIOps | Quantum Computing | Multi-Cloud Strategy.</p>
    </div>
  </div>
</section>

<footer>
  <div class="container">
    <p style="margin-bottom:24px;font-size:1.1rem;">© 2025 AutonomIQ Systems. All Quantum Rights Reserved.</p>
    <div class="footer-links">
      <a href="#privacy">Privacy Policy</a>
      <a href="#terms">Terms of Service</a>
      <a href="#quantum">Quantum SLA</a>
      <a href="#careers">Careers</a>
      <a href="#contact">Contact</a>
    </div>
    <p style="margin-top:32px;color:rgba(255,255,255,0.5);font-size:0.95rem;">Rasapūḍipalem, Andhra Pradesh, India | Patents Pending: US2025QAI001-47</p>
  </div>
</footer>

<script>
function scrollTo(id) {document.getElementById(id)?.scrollIntoView({behavior:'smooth'});}
// Particle system
function createParticles() {
  const particles = document.getElementById('particles');
  for(let i=0;i<50;i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random()*100 + '%';
    particle.style.animationDuration = (Math.random()*20 + 10) + 's';
    particle.style.animationDelay = Math.random()*5 + 's';
    particle.style.width = particle.style.height = (Math.random()*4 + 2) + 'px';
    particles.appendChild(particle);
  }
}
// Animate stats
function animateStats() {
  document.querySelectorAll('.stat-number').forEach(stat => {
    const target = parseFloat(stat.textContent);
    let count = 0;
    const increment = target / 200;
    const timer = setInterval(() => {
      count += increment;
      if(count >= target) {
        stat.textContent = target + (stat.textContent.includes('%') ? '%' : '') + (stat.textContent.includes('x') ? 'x' : '');
        clearInterval(timer);
      } else {
        stat.textContent = Math.floor(count) + (stat.textContent.includes('%') ? '%' : '') + (stat.textContent.includes('x') ? 'x' : '');
      }
    }, 20);
  });
}
createParticles();
window.addEventListener('load', animateStats);
</script>
</body></html>`);
};
