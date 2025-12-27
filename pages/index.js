const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  // Serve static files first (images, CSS, etc.)
  const staticExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.css', '.js'];
  const url = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(process.cwd(), 'public' + url);
  
  if (staticExtensions.some(ext => url.endsWith(ext))) {
    try {
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath);
        const contentType = getContentType(url);
        res.setHeader('Content-Type', contentType);
        res.status(200).send(fileContent);
        return;
      }
    } catch (e) {
      // Fall through to HTML
    }
  }

  // Serve main HTML page
  const htmlPath = path.join(process.cwd(), 'public/index.html');
  let htmlContent;
  
  if (fs.existsSync(htmlPath)) {
    htmlContent = fs.readFileSync(htmlPath, 'utf8');
  } else {
    // Fallback complete high-end AutonomIQ HTML if no index.html
    htmlContent = getAutonomIQHTML();
  }
  
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(htmlContent);
};

function getContentType(url) {
  if (url.endsWith('.png')) return 'image/png';
  if (url.endsWith('.jpg') || url.endsWith('.jpeg')) return 'image/jpeg';
  if (url.endsWith('.gif')) return 'image/gif';
  if (url.endsWith('.svg')) return 'image/svg+xml';
  if (url.endsWith('.css')) return 'text/css';
  if (url.endsWith('.js')) return 'application/javascript';
  return 'application/octet-stream';
}

function getAutonomIQHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AutonomIQ Systems | AI-Powered IT Excellence</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
    .hero { background: linear-gradient(135deg, #0a2540 0%, #1e3a8a 100%); color: white; padding: 100px 20px; text-align: center; }
    .hero h1 { font-size: 3.5rem; margin-bottom: 20px; font-weight: 700; }
    .hero p { font-size: 1.3rem; margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto; }
    .cta { background: #ff6b35; color: white; padding: 15px 40px; font-size: 1.2rem; border: none; border-radius: 50px; cursor: pointer; text-decoration: none; transition: transform 0.3s; }
    .cta:hover { transform: scale(1.05); }
    .section { padding: 80px 20px; max-width: 1200px; margin: 0 auto; }
    .features { background: #f8fafc; }
    .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; margin-top: 60px; }
    .feature { text-align: center; }
    .feature img { width: 80px; height: 80px; margin-bottom: 20px; }
    .leadership { background: white; }
    .founder-img { width: 200px; height: 200px; border-radius: 50%; object-fit: cover; margin: 0 auto 30px; border: 5px solid #ff6b35; }
    footer { background: #0a2540; color: white; text-align: center; padding: 40px 20px; }
  </style>
</head>
<body>
  <section class="hero">
    <h1>AutonomIQ Systems</h1>
    <p>Revolutionizing IT Operations with Autonomous AI Intelligence. Enterprise-grade AIOps, Cloud Automation & Quantum-Ready Infrastructure.</p>
    <a href="#contact" class="cta">Start Your AI Transformation</a>
  </section>
  
  <section class="section features">
    <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 20px;">AI-Powered Capabilities</h2>
    <div class="feature-grid">
      <div class="feature">
        <img src="/autonomiq-logo.png" alt="AI Ops" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiMwYTQyNDAiLz4KPHRleHQgeD0iNDAiIHk9IjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BSUw8L3RleHQ+Cjwvc3ZnPgo='">
        <h3>Autonomous Operations</h3>
        <p>Self-healing infrastructure with predictive AIOps.</p>
      </div>
      <div class="feature">
        <img src="/founder-dayanidhi.png" alt="Cloud" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiMxZTNhOGEiLz4KPHRleHQgeD0iNDAiIHk9IjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DbG91ZDwvdGV4dD4KPC9zdmc+Cg=='">
        <h3>Multi-Cloud Mastery</h3>
        <p>Azure, GCP, AWS orchestration with zero vendor lock-in.</p>
      </div>
      <div class="feature">
        <img src="/autonomiq-logo.png" alt="Quantum" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiNmZjZiMzUiLz4KPHRleHQgeD0iNDAiIHk9IjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RdWFudHVtPC90ZXh0Pgo8L3N2Zz4K'">
        <h3>Quantum-Ready</h3>
        <p>Future-proof infrastructure for next-gen computing.</p>
      </div>
    </div>
  </section>
  
  <section class="section leadership">
    <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 40px;">Leadership</h2>
    <div style="text-align: center;">
      <img src="/founder-dayanidhi.png" alt="DAYANIDHI DONDAPATI, Founder" class="founder-img" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iOTUiIGZpbGw9IiMwYTQyNDAiLz4KPHRleHQgeD0iMTAwIiB5PSIxMDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRheWFuaWRoaTwvdGV4dD4KPC9zdmc+Cg=='">
      <h3>DAYANIDHI DONDAPATI</h3>
      <p style="font-size: 1.1rem; color: #666; max-width: 500px; margin: 0 auto;">Founder & CEO | 15+ Years IT Leadership | Cloud Architect | AIOps Pioneer</p>
    </div>
  </section>
  
  <footer>
    <p>&copy; 2025 AutonomIQ Systems. All rights reserved. | Rasapūḍipalem, Andhra Pradesh | <a href="#privacy" style="color: #ff6b35;">Privacy</a> | <a href="#contact" style="color: #ff6b35;">Contact</a></p>
  </footer>
</body>
</html>`;
}
