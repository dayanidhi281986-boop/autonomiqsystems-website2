const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const urlPath = req.url === '/' ? '/index.html' : req.url;
    const filePath = path.join(process.cwd(), 'public' + urlPath);
    
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath);
      const ext = path.extname(filePath).toLowerCase();
      const mimeTypes = {
        '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
        '.gif': 'image/gif', '.svg': 'image/svg+xml', '.css': 'text/css',
        '.js': 'application/javascript', '.html': 'text/html'
      };
      res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
      return res.status(200).send(content);
    }
  } catch (e) {}
  
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(getHTML());
};

function getHTML() {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>AutonomIQ Systems</title>
<style>body{font-family:Segoe UI,sans-serif;background:linear-gradient(135deg,#0a2540 0%,#1e3a8a 100%);color:#fff;padding:40px;text-align:center;}
h1{font-size:3em;margin:0 0 20px;}
p{font-size:1.2em;max-width:600px;margin:0 auto 30px;line-height:1.6;}
.cta{background:#ff6b35;color:#fff;padding:15px 40px;text-decoration:none;border-radius:50px;font-size:1.1em;display:inline-block;transition:transform .3s;}
.cta:hover{transform:scale(1.05);}
.features{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:30px;max-width:1200px;margin:60px auto;}
.feature{text-align:center;}
.feature img{width:70px;height:70px;margin-bottom:15px;border-radius:50%;border:3px solid #ff6b35;}
.founder{width:180px;height:180px;border-radius:50%;border:5px solid #ff6b35;margin:0 auto 20px;object-fit:cover;}
footer{background:#0a2540;padding:30px;margin-top:60px;}
@media(max-width:768px){h1{font-size:2.2em;}p{font-size:1em;}}</style>
</head>
<body>
<h1>AutonomIQ Systems</h1>
<p>AI-Powered IT Operations | AIOps | Cloud Automation | Quantum-Ready Infrastructure</p>
<a href="#contact" class="cta">Transform with AI</a>
<div class="features">
<div class="feature">
<img src="/autonomiq-logo.png" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCA3MCA3MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzNSIgY3k9IjM1IiByPSIzNSIgZmlsbD0iI2ZmNmIzNSIvPjx0ZXh0IHg9IjM1IiB5PSIzOCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QUlPPC90ZXh0Pjwvc3ZnPg=='" alt="AI">
<h3>Autonomous Ops</h3><p>Self-healing infrastructure</p>
</div>
<div class="feature">
<img src="/founder-dayanidhi.png" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCA3MCA3MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzNSIgY3k9IjM1IiByPSIzNSIgZmlsbD0iIzFlM2E4YSIvPjx0ZXh0IHg9IjM1IiB5PSIzOCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2xvdWQ8L3RleHQ+PC9zdmc+Pg=='" alt="Founder">
<h3>Multi-Cloud</h3><p>Azure • GCP • AWS</p>
</div>
<div class="feature">
<img src="/autonomiq-logo.png" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCA3MCA3MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzNSIgY3k9IjM1IiByPSIzNSIgZmlsbD0iIzBhMjU0MCIvPjx0ZXh0IHg9IjM1IiB5PSIzOCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UXVhbnR1bTwvdGV4dD48L3N2Zz4K'" alt="Quantum">
<h3>Quantum-Ready</h3><p>Future-proof IT</p>
</div>
</div>
<div style="margin:50px 0;text-align:center;">
<img src="/founder-dayanidhi.png" class="founder" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE4MCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iOTAiIGN5PSI5MCIgcj0iODUiIGZpbGw9IiNmZjZiMzUiLz48dGV4dCB4PSIxMDAiIHk9Ijk1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EQVVOSURISSwgRk9VTkRFUjwvdGV4dD48L3N2Zz4K'" alt="DAYANIDHI DONDAPATI">
<h3>DAYANIDHI DONDAPATI</h3>
<p style="color:#ccc;font-size:1.1em;">Founder & CEO | 15+ Years IT Leadership | AIOps Expert</p>
</div>
<footer>
<p>&copy; 2025 AutonomIQ Systems | Rasapūḍipalem, AP | <a href="#contact" style="color:#ff6b35;">Contact</a></p>
</footer>
</body></html>`;
}
