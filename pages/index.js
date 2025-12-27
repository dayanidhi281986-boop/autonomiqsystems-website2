module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<title>AutonomIQ Systems | Quantum AI Platform</title>
<style>
* {margin:0;padding:0;box-sizing:border-box;}
:root {--primary:#0a2540;--accent:#ff6b35;--gradient:linear-gradient(135deg,#0a2540 0%,#1e3a8a 100%);}
body {font-family:'Segoe UI',sans-serif;background:#0a0e1f;color:#fff;line-height:1.7;overflow-x:hidden;}
.container {max-width:1400px;margin:0 auto;padding:0 20px;}
.glass {background:rgba(255,255,255,0.1);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.2);border-radius:20px;padding:40px;}
.hero {background:var(--gradient);padding:120px 20px;text-align:center;}
.h1-hero {font-size:clamp(4rem,10vw,8rem);font-weight:900;background:linear-gradient(135deg,#fff,#ff6b35);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:20px;}
.hero-p {font-size:clamp(1.2rem,3vw,2rem);max-width:700px;margin:0 auto 40px 0;line-height:1.4;}
.cta {background:linear-gradient(135deg,#ff6b35,#f97316);color:#fff;padding:18px 40px;font-size:1.2rem;border:none;border-radius:50px;cursor:pointer;display:inline-block;text-decoration:none;margin:10px;box-shadow:0 15px 30px rgba(255,107,53,0.4);transition:all 0.3s;}
.cta:hover {transform:translateY(-3px);box-shadow:0 25px 50px rgba(255,107,53,0.6);}
.stats {display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:30px;margin:60px 0;padding:50px 0;background:rgba(0,0,0,0.3);}
.stat-number {font-size:clamp(2rem,6vw,4rem);font-weight:900;background:linear-gradient(135deg,#ff6b35,#ffd700);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.stat-label {font-size:1rem;color:rgba(255,255,255,0.8);margin-top:5px;}
.section {padding:100px 0;}
.section-title {font-size:clamp(2.5rem,6vw,4rem);font-weight:800;text-align:center;margin-bottom:20px;background:linear-gradient(135deg,#fff,#e2e8f0);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.core-grid {display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:40px;margin-top:50px;}
.core-card {background:var(--glass);padding:40px;border-radius:20px;text-align:center;transition:transform 0.4s;}
.core-card:hover {transform:translateY(-10px);}
.core-icon {width:70px;height:70px;margin:0 auto 20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.8rem;font-weight:900;background:linear-gradient(135deg,rgba(255,107,53,0.2),rgba(255,215,0,0.2));border:2px solid rgba(255,107,53,0.4);}
.core-title {font-size:1.6rem;font-weight:700;margin-bottom:15px;}
.neural-grid {display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:30px;margin-top:40px;}
.neural-item {background:var(--glass);padding:30px;border-radius:16px;text-align:center;}
.neural-icon {width:80px;height:80px;margin:0 auto 15px;border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:2rem;background:linear-gradient(135deg,#ff6b35,#f97316);color:#fff;}
.quantum-sim {background:radial-gradient(ellipse at center,rgba(30,58,138,0.3) 0%,transparent 70%);padding:100px 0;}
.cube {width:250px;height:250px;margin:40px auto;background:linear-gradient(135deg,rgba(255,107,53,0.8),rgba(255,215,0,0.8));border-radius:20px;border:2px solid rgba(255,255,255,0.3);animation:rotate 15s linear infinite;display:flex;align-items:center;justify-content:center;font-size:1.3rem;font-weight:700;}
@keyframes rotate {0%{transform:rotateY(0deg);}100%{transform:rotateY(360deg);}}
.leadership {background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);padding:120px 0;}
.founder-img {width:240px;height:240px;border-radius:50%;object-fit:cover;margin:0 auto 25px;border:6px solid rgba(255,107,53,0.4);box-shadow:0 30px 60px rgba(0,0,0,0.5);}
.leader-name {font-size:2.8rem;font-weight:900;background:linear-gradient(135deg,#fff,#ff6b35);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:12px;text-align:center;}
footer {background:#000;color:rgba(255,255,255,0.7);padding:60px 0 30px;text-align:center;}
@media(max-width:768px){.container{padding:0 15px;}.stats{grid-template-columns:repeat(2,1fr);gap:20px;}.core-grid{grid-template-columns:1fr;}}
</style>
</head>
<body>
<div class="container">
<section class="hero">
  <h1 class="h1-hero">AutonomIQ Systems</h1>
  <p class="hero-p">Quantum-Enhanced AI Operations Platform. Autonomous Infrastructure Intelligence with Real-Time Neural Optimization.</p>
  <a href="#quantum" class="cta">🚀 Launch Quantum Demo</a>
  <a href="#leadership" class="cta" style="background:transparent;border:2px solid #ff6b35;">Meet Founder</a>
</section>

<section class="stats">
  <div class="stat"><div class="stat-number">99.999%</div><div class="stat-label">Uptime SLA</div></div>
  <div class="stat"><div class="stat-number">450ms</div><div class="stat-label">Neural Latency</div></div>
  <div class="stat"><div class="stat-number">120x</div><div class="stat-label">Faster Predictions</div></div>
  <div class="stat"><div class="stat-number">0-Human</div><div class="stat-label">Autonomous Ops</div></div>
</section>

<section class="section" id="quantum">
  <h2 class="section-title">Quantum AI Core</h2>
  <div class="core-grid">
    <div class="core-card">
      <div class="core-icon">⚛️</div>
      <h3 class="core-title">Quantum State Prediction</h3>
      <p>Real-time quantum simulation of infrastructure states. 100x faster convergence than classical ML.</p>
    </div>
    <div class="core-card">
      <div class="core-icon">🧠</div>
      <h3 class="core-title">Neural Architecture Search</h3>
      <p>Automated discovery of optimal deep learning architectures. 47% accuracy improvement.</p>
    </div>
    <div class="core-card">
      <div class="core-icon">🌐</div>
      <h3 class="core-title">Multi-Cloud Quantum Fabric</h3>
      <p>Azure Quantum, GCP Bristlecone, AWS OQC orchestration. Vendor-agnostic quantum pooling.</p>
    </div>
    <div class="core-card">
      <div class="core-icon">⚡</div>
      <h3 class="core-title">Zero-Touch Remediation</h3>
      <p>93% first-contact resolution. 8.2x MTTR reduction with quantum decision trees.</p>
    </div>
  </div>
</section>

<section class="section neural-matrix">
  <h2 class="section-title">Neural Decision Matrix</h2>
  <div class="neural-grid">
    <div class="neural-item">
      <div class="neural-icon">🔬</div>
      <h3>Quantum Tomography</h3>
      <p>128-qubit infrastructure state reconstruction</p>
    </div>
    <div class="neural-item">
      <div class="neural-icon">⚛️</div>
      <h3>Entanglement Mapping</h3>
      <p>50K+ microservices dependency correlation</p>
    </div>
    <div class="neural-item">
      <div class="neural-icon">🚀</div>
      <h3>QAOA Optimization</h3>
      <p>3.7x resource allocation efficiency</p>
    </div>
    <div class="neural-item">
      <div class="neural-icon">🧬</div>
      <h3>Evolutionary Policies</h3>
      <p>Darwinian infrastructure evolution</p>
    </div>
  </div>
</section>

<section class="quantum-sim">
  <div class="container">
    <h2 class="section-title" style="color:#fff;">Live Quantum Simulator</h2>
    <div class="cube">QPU<br>STATE<br>ENTANGLE<br>MEASURE<br>PREDICT<br>OPTIMIZE</div>
    <div style="text-align:center;margin-top:30px;">
      <p style="font-size:1.3rem;margin-bottom:20px;">128-qubit simulation • 99.8% fidelity • 47ms latency</p>
    </div>
  </div>
</section>

<section class="leadership" id="leadership">
  <div style="text-align:center;">
    <img src="/founder-dayanidhi.png" alt="DAYANIDHI DONDAPATI" class="founder-img">
    <h2 class="leader-name">DAYANIDHI DONDAPATI</h2>
    <p style="font-size:1.3rem;color:#ff6b35;font-weight:600;margin-bottom:20px;">Founder & CEO | Quantum AI Pioneer</p>
    <p style="max-width:600px;margin:0 auto;font-size:1.1rem;color:rgba(255,255,255,0.9);">15+ years enterprise IT leadership. Patented Neural Architecture Search at petabyte scale. Kubernetes | AIOps | Quantum Computing expert.</p>
  </div>
</section>

<footer>
  <p style="margin-bottom:20px;">© 2025 AutonomIQ Systems. All Quantum Rights Reserved.</p>
  <p>Rasapūḍipalem, Andhra Pradesh, India | Patents Pending: US2025QAI001-47</p>
</footer>
</div>
<script>
function smoothScroll(id){document.querySelector(id)?.scrollIntoView({behavior:'smooth'});}
</script>
</body>
</html>`);
};
