export default function Home() {
  return (
    <main style={{fontFamily:'Arial, sans-serif', background:'#f7f4ee', color:'#1d2d35'}}>
      <section style={{padding:'100px 20px', maxWidth:'1200px', margin:'0 auto'}}>
        <p style={{letterSpacing:'2px', textTransform:'uppercase', color:'#8a6b3f'}}>You Made Better</p>
        <h1 style={{fontSize:'72px', lineHeight:'1.05', maxWidth:'900px', marginBottom:'24px'}}>
          Plan For A Meaningful Life.
        </h1>
        <p style={{fontSize:'22px', maxWidth:'700px', lineHeight:'1.6', color:'#4b5b63'}}>
          A coaching and planning framework designed to help people discover purpose,
          build clarity, and create intentional direction across body, mind, heart, and soul.
        </p>
        <div style={{marginTop:'40px', display:'flex', gap:'16px'}}>
          <button style={{background:'#1d2d35', color:'white', padding:'16px 28px', borderRadius:'4px', border:'none'}}>Start Your Plan</button>
          <button style={{background:'transparent', border:'1px solid #1d2d35', padding:'16px 28px', borderRadius:'4px'}}>View Framework</button>
        </div>
      </section>

      <section style={{background:'#1d2d35', color:'white', padding:'80px 20px'}}>
        <div style={{maxWidth:'1200px', margin:'0 auto'}}>
          <h2 style={{fontSize:'48px', marginBottom:'24px'}}>The Whole Person Framework</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'24px'}}>
            <div><h3>Body</h3><p>Eat, sleep, move, breathe, and recover intentionally.</p></div>
            <div><h3>Mind</h3><p>Grow awareness, sharpen focus, and continue learning.</p></div>
            <div><h3>Heart</h3><p>Build connection, gratitude, generosity, and strong relationships.</p></div>
            <div><h3>Soul</h3><p>Anchor your life in purpose, meaning, faith, and reflection.</p></div>
          </div>
        </div>
      </section>

      <section style={{padding:'80px 20px', maxWidth:'1200px', margin:'0 auto'}}>
        <h2 style={{fontSize:'48px'}}>The 3-Part Planning Process</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'30px', marginTop:'40px'}}>
          <div style={{background:'white', padding:'32px', borderRadius:'8px'}}>
            <h3>01 Foundation</h3>
            <p>Clarify your purpose, mission, vision, temperament, values, and roles.</p>
          </div>
          <div style={{background:'white', padding:'32px', borderRadius:'8px'}}>
            <h3>02 Position</h3>
            <p>Conduct an honest SWOT assessment to understand where you are today.</p>
          </div>
          <div style={{background:'white', padding:'32px', borderRadius:'8px'}}>
            <h3>03 Direction</h3>
            <p>Create objectives, goals, strategies, and measurable action plans.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
