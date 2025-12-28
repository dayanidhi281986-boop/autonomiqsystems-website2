import Image from "next/image";

export default function Page() {
  return (
    <main style={{
      background: "linear-gradient(180deg,#020617,#020617)",
      color: "#e5e7eb",
      fontFamily: "Inter, system-ui, -apple-system",
      lineHeight: 1.75
    }}>

{/* ====================== HERO ====================== */}
<section style={{padding:"180px 120px 140px",maxWidth:"1800px",margin:"0 auto"}}>
<h1 style={{fontSize:"5.5rem",fontWeight:900,maxWidth:"1200px"}}>
Autonomous Enterprise AI Infrastructure
</h1>
<p style={{fontSize:"1.6rem",maxWidth:"1000px",marginTop:"40px",color:"#cbd5e1"}}>
AutonomIQ Systems Pvt. Ltd. designs and operates fully autonomous, AI-driven enterprise technology platforms that eliminate manual IT operations, human-dependent decision chains, and fragmented systems while maintaining the highest standards of security, governance, and compliance.
</p>
</section>

{/* ====================== ABOUT ====================== */}
<section style={{padding:"140px 120px",background:"#020617"}}>
<h2 style={{fontSize:"3.5rem",fontWeight:800}}>About AutonomIQ Systems</h2>
<p style={{maxWidth:"1200px",marginTop:"30px"}}>
AutonomIQ Systems is an AI-native enterprise technology company founded to address the structural limitations of traditional IT service models. Modern enterprises operate at a scale where human-driven operations introduce latency, inconsistency, risk, and escalating cost. Our platforms replace these limitations with autonomous intelligence layers that continuously operate, learn, secure, and optimize enterprise environments without manual intervention.
</p>
<p style={{maxWidth:"1200px",marginTop:"20px"}}>
We are not a staffing company, a conventional IT services firm, or a point-solution AI vendor. AutonomIQ Systems builds foundational AI operating platforms that sit at the core of enterprise infrastructure and decision systems.
</p>
</section>

{/* ====================== CORE AI PLATFORM ====================== */}
<section style={{padding:"140px 120px"}}>
<h2 style={{fontSize:"3.5rem",fontWeight:800}}>AutonomIQ AI Core Platform</h2>
<p style={{maxWidth:"1300px",marginTop:"30px"}}>
The AutonomIQ AI Core Platform is a unified autonomous intelligence layer that governs enterprise IT operations, business processes, security controls, and infrastructure systems. It functions as a continuously operating decision engine that observes enterprise signals, predicts outcomes, executes actions, and validates results without human dependency.
</p>

<h3 style={{fontSize:"2.4rem",marginTop:"60px"}}>Autonomous Decision Intelligence</h3>
<p>
The platform ingests real-time telemetry from applications, infrastructure, security systems, and business workflows. Using reinforcement learning and probabilistic modeling, it evaluates thousands of potential decision paths and executes optimal actions aligned with enterprise policies and risk thresholds.
</p>

<h3 style={{fontSize:"2.4rem",marginTop:"60px"}}>Explainable AI Governance</h3>
<p>
Every AI-executed decision is fully traceable. The system records decision inputs, confidence levels, reasoning paths, execution outcomes, and post-execution validation results. This enables regulatory compliance, audit readiness, and executive transparency.
</p>

<h3 style={{fontSize:"2.4rem",marginTop:"60px"}}>Self-Healing Infrastructure</h3>
<p>
The AI Core predicts failure patterns before service degradation occurs. It automatically reallocates workloads, isolates faulty components, restores system health, and verifies stability — eliminating downtime and human escalation chains.
</p>
</section>

{/* ====================== SECURITY ====================== */}
<section style={{padding:"140px 120px",background:"#020617"}}>
<h2 style={{fontSize:"3.5rem",fontWeight:800}}>Zero-Trust AI Security Fabric</h2>
<p style={{maxWidth:"1200px",marginTop:"30px"}}>
Security within autonomous systems requires a fundamentally different architecture. AutonomIQ implements a Zero-Trust AI Security Fabric where every action, identity, and execution path is continuously verified.
</p>

<ul style={{maxWidth:"1200px",marginTop:"40px"}}>
<li>AI-Identity-based access control</li>
<li>Continuous behavioral anomaly detection</li>
<li>Encrypted computation and data isolation</li>
<li>Enterprise audit logging and forensic traceability</li>
<li>Regulatory-aligned governance controls</li>
</ul>
</section>

{/* ====================== CLOUD & SCALE ====================== */}
<section style={{padding:"140px 120px"}}>
<h2 style={{fontSize:"3.5rem",fontWeight:800}}>Global Cloud & Infrastructure Engineering</h2>
<p style={{maxWidth:"1200px",marginTop:"30px"}}>
AutonomIQ platforms operate across AWS, Azure, Google Cloud, hybrid, and on-prem environments. The system dynamically orchestrates workloads across regions, optimizes costs, and enforces availability targets without manual intervention.
</p>

<p style={{marginTop:"20px"}}>
Infrastructure is treated as an intelligent, adaptive system rather than static resources.
</p>
</section>

{/* ====================== INDUSTRIES ====================== */}
<section style={{padding:"140px 120px",background:"#020617"}}>
<h2 style={{fontSize:"3.5rem",fontWeight:800}}>Industries We Serve</h2>
<p style={{maxWidth:"1200px",marginTop:"30px"}}>
Our platforms are designed for complex, regulated, high-availability enterprise environments including Banking & Financial Services, Healthcare & Life Sciences, Manufacturing, Telecom, Technology Enterprises, and Large-Scale IT Operations.
</p>
</section>

{/* ====================== LEADERSHIP ====================== */}
<section style={{padding:"140px 120px"}}>
<h2 style={{fontSize:"3.5rem",fontWeight:800}}>Leadership</h2>
<h3 style={{fontSize:"2.4rem",marginTop:"40px"}}>Dayanidhi Dondapati — Founder & CEO</h3>
<p style={{maxWidth:"1200px",marginTop:"20px"}}>
Dayanidhi Dondapati brings over 15 years of enterprise IT and technology leadership experience, specializing in large-scale systems architecture, AI-driven automation, cloud infrastructure engineering, and secure platform design. His work spans mission-critical environments where reliability, governance, and scale are non-negotiable.
</p>
</section>

{/* ====================== CAREERS ====================== */}
<section style={{padding:"140px 120px",background:"#020617"}}>
<h2 style={{fontSize:"3.5rem",fontWeight:800}}>Careers</h2>
<p style={{maxWidth:"1200px",marginTop:"30px"}}>
AutonomIQ Systems is building the next generation of autonomous enterprise platforms. We seek engineers, architects, and researchers who think in systems, long-term architectures, and operational integrity. This is not staff augmentation. This is platform engineering at global scale.
</p>
</section>

{/* ====================== POLICIES ====================== */}
<section style={{padding:"140px 120px"}}>
<h2 style={{fontSize:"3.5rem",fontWeight:800}}>Privacy, Terms & Governance</h2>
<p>
AutonomIQ Systems adheres to strict data privacy principles, enterprise security standards, and regulatory compliance requirements. We do not monetize customer data, sell information, or compromise governance controls.
</p>
<p style={{marginTop:"20px"}}>
All intellectual property, platforms, and architectures are protected under applicable laws and enterprise agreements.
</p>
</section>

{/* ====================== FOOTER ====================== */}
<footer style={{padding:"80px",textAlign:"center",background:"#000"}}>
<p>© 2025 AutonomIQ Systems Pvt. Ltd. All Rights Reserved.</p>
</footer>

</main>
  );
}
