export default function Services() {
  return (
    <div style={{minHeight:'100vh', background:'#000', color:'white'}}>
      <nav style={{position:'fixed', top:0, width:'100%', background:'rgba(0,0,0,0.9)', zIndex:50}}>...</nav>
      <section style={{paddingTop:'8rem'}}>
        <h1 style={{fontSize:'4rem', textAlign:'center'}}>AI IT Services</h1>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px,1fr))', gap:'2rem'}}>
          <div>AI IT Consulting</div>
          <div>AIOps & Monitoring</div>
          <div>AI Development</div>
          <div>Enterprise Automation</div>
        </div>
      </section>
    </div>
  );
}
