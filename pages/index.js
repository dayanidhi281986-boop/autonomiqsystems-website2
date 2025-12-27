const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=3600');
  
  // Serve static files from public/
  const urlPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(process.cwd(), 'public' + urlPath);
  
  if (fs.existsSync(filePath)) {
    const ext = path.extname(filePath).toLowerCase();
    const content = fs.readFileSync(filePath);
    
    const mimeTypes = {
      '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
      '.gif': 'image/gif', '.svg': 'image/svg+xml', 
      '.css': 'text/css', '.js': 'application/javascript',
      '.html': 'text/html', '.ico': 'image/x-icon'
    };
    
    res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
    return res.status(200).end(content);
  }
  
  // Main HTML page
  res.status(200).setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>AutonomIQ Systems | AI IT Excellence</title>
<style>
* {margin:0;padding:0;box-sizing:border-box;}
body {font-family:'Segoe UI',Tahoma,sans-serif;line-height:1.6;color:#333;background:#f8fafc;}
.hero {background:linear-gradient(135deg,#0a2540 0%,#1e3a8a 100%);color:#fff;padding:120px 20px;text-align:center;}
.hero h1 {font-size:clamp(2.5rem,8vw,4rem);margin-bottom:20px;font-weight:700;}
.hero p {font-size:1.2rem;max-width:700px;margin:0 auto 40px;opacity:0.95;}
.cta {background:#ff6b35;color:#fff;padding:18px 50px;font-size:1.2rem;border:none;border-radius:50px;cursor:pointer;text-decoration:none;display:inline-block;transition:all .3s;}
.cta:hover {transform:translateY(-3px);box-shadow:0 10px 25px rgba(255,107,53,0.4);}
.container {max-width:1200px;margin:0 auto;padding:0 20px;}
.section {padding:90px 0;}
.features {background:#fff;}
.feature-grid {display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:50px;margin-top:60px;}
.feature {text-align:center;}
.feature img {width:90px;height:90px;margin-bottom:25px;border-radius:50%;border:4px solid #ff6b35;}
.leadership {background:linear-gradient(135deg,#f8fafc 0%,#e2e8f0 100%);}
.founder-img {width:220px;height:220px;border-radius:50%;object-fit:cover;margin:0 auto 30px;border:6px solid #ff6b35;box-shadow:0 20px 40px rgba(0,0,0,0.1);}
footer {background:#0a2540;color:#fff;text-align:center;padding:50px 20px;}
@media(max-width:768px) {.hero{padding:80px 20px;}}
</style>
</head>
<body>
<section class="hero">
  <h1>AutonomIQ Systems</h1>
  <p>Enterprise AI Operations | Autonomous Infrastructure | Multi-Cloud Mastery | Quantum-Ready IT</p>
  <a href="#contact" class="cta">Launch AI Transformation</a>
</section>

<section class="section features">
  <div class="container">
    <h2 style="text-align:center;font-size:2.8rem;margin-bottom:20px;color:#0a2540;">AI-Powered IT Solutions</h2>
    <div class="feature-grid">
      <div class="feature">
        <img src="/autonomiq-logo.png" alt="AIOps" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHZpZXdCb3g9IjAgMCA5MCA5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI0NSIgY3k9IjQ1IiByPSI0NSIgZmlsbD0iI2ZmNmIzNSIvPjx0ZXh0IHg9IjQ1IiB5PSI1MSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QUlPcHM8L3RleHQ+PC9zdmc+'">
        <h3>Autonomous Operations</h3>
        <p>Self-healing infrastructure with predictive analytics and zero-downtime automation.</p>
      </div>
      <div class="feature">
        <img src="/founder-dayanidhi.png" alt="Cloud" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHZpZXdCb3g9IjAgMCA5MCA5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI0NSIgY3k9IjQ1IiByPSI0NSIgZmlsbD0iIzFlM2E4YSIvPjx0ZXh0IHg9IjQ1IiB5PSI1MSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TW11bHRpLUNsb3VkPC90ZXh0Pjwvc3ZnPg=='">
        <h3>Multi-Cloud Orchestration</h3>
        <p>Seamless Azure, GCP, AWS management with unified governance and cost optimization.</p>
      </div>
      <div class="feature">
        <img src="/autonomiq-logo.png" alt="Quantum" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHZpZXdCb3g9IjAgMCA5MCA5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI0NSIgY3k9IjQ1IiByPSI0NSIgZmlsbD0iIzBhMjU0MCIvPjx0ZXh0IHg9IjQ1IiB5PSI1MSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UXVhbnR1bS1SZWFkeTwvdGV4dD48L3N2Zz4K'">
        <h3>Quantum-Ready Infrastructure</h3>
        <p>Future-proof architecture prepared for next-generation quantum computing workloads.</p>
      </div>
    </div>
  </div>
</section>

<section class="section leadership">
  <div class="container">
    <h2 style="text-align:center;font-size:2.8rem;margin-bottom:50px;color:#0a2540;">Leadership</h2>
    <div style="text-align:center;">
      <img src="/founder-dayanidhi.png" alt="DAYANIDHI DONDAPATI" class="founder-img" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIwIiBoZWlnaHQ9IjIyMCIgdmlld0JveD0iMCAwIDIyMCAyMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTEwIiBjeT0iMTEwIiByPSIxMDAiIGZpbGw9IiNmZjZiMzUiLz48dGV4dCB4PSIxMTAiIHk9IjExNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RGF5YW5pZGhpPC90ZXh0Pjx0ZXh0IHg9IjExMCIgeT0iMTM1IiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Rk9VTkRFUiAmIENTPC90ZXh0Pjwvc3ZnPg=='">
      <h3 style="font-size:2rem;color:#0a2540;margin-bottom:15px;">DAYANIDHI DONDAPATI</h3>
      <p style="font-size:1.2rem;color:#666;max-width:600px;margin:0 auto;line-height:1.7;">Founder & CEO | 15+ Years Enterprise IT Leadership | Cloud Architect | AIOps Pioneer | Kubernetes Expert</p>
    </div>
  </div>
</section>

<footer>
  <p>&copy; 2025 AutonomIQ Systems. All rights reserved. | Rasapūḍipalem, Andhra Pradesh, India | <a href="#privacy" style="color:#ff6b35;">Privacy Policy</a> | <a href="#contact" style="color:#ff6b35;">Contact Us</a></p>
</footer>
`);
};
