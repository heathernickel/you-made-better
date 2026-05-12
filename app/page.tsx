const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  border: '1px solid #d7d2c8',
  borderRadius: '2px',
  fontSize: '15px',
  boxSizing: 'border-box' as const,
}

const section = {
  maxWidth: '1180px',
  margin: '0 auto',
  padding: '86px 22px',
}

export default function Home() {
  return (
    <main style={{ fontFamily: 'Georgia, Times New Roman, serif', background: '#f5f0e7', color: '#172f3d' }}>
      <header style={{ background: '#fffaf2', borderBottom: '1px solid #e4dccd' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 800, letterSpacing: '1px', fontSize: '20px' }}>YOU MADE BETTER</div>
          <nav style={{ display: 'flex', gap: '24px', fontFamily: 'Arial, sans-serif', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
            <a style={{ color: '#172f3d', textDecoration: 'none' }} href="#process">Process</a>
            <a style={{ color: '#172f3d', textDecoration: 'none' }} href="#framework">Framework</a>
            <a style={{ color: '#172f3d', textDecoration: 'none' }} href="#apply">Apply</a>
          </nav>
        </div>
      </header>

      <section style={{ background: '#fffaf2' }}>
        <div style={{ ...section, display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: '44px', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: 'Arial, sans-serif', color: '#a66f2a', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>A Guided Life Planning Program</p>
            <h1 style={{ fontSize: '64px', lineHeight: '1.02', margin: '18px 0 24px' }}>For people ready to live with purpose, direction, and follow-through.</h1>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '19px', lineHeight: '1.7', color: '#52636b', maxWidth: '640px' }}>
              You Made Better helps participants clarify who they are, honestly assess where they are, and build a practical action plan for a more meaningful life.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '34px', fontFamily: 'Arial, sans-serif' }}>
              <a href="#apply" style={{ background: '#a66f2a', color: 'white', padding: '15px 24px', textDecoration: 'none', fontWeight: 700 }}>INTRODUCE YOURSELF</a>
              <a href="#process" style={{ color: '#172f3d', padding: '14px 0', fontWeight: 700 }}>SEE THE PROCESS</a>
            </div>
          </div>

          <form id="apply" style={{ background: 'white', padding: '32px', boxShadow: '0 24px 70px rgba(23,47,61,.14)', borderTop: '6px solid #a66f2a', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ margin: '0 0 6px', fontFamily: 'Georgia, Times New Roman, serif', fontSize: '30px' }}>Let’s get started</h2>
            <p style={{ color: '#5c6a70', lineHeight: '1.5', marginBottom: '22px' }}>Want to learn more about You Made Better and how it can support your next season?</p>
            <div style={{ display: 'grid', gap: '12px' }}>
              <input style={inputStyle} placeholder="First Name" />
              <input style={inputStyle} placeholder="Last Name" />
              <input style={inputStyle} placeholder="Email" />
              <input style={inputStyle} placeholder="Phone Number" />
              <select style={inputStyle}><option>Service of Interest</option><option>You Made Better Program</option><option>Business Made Better</option><option>Coaching</option></select>
              <button style={{ background: '#172f3d', color: 'white', border: 'none', padding: '15px', fontWeight: 800, letterSpacing: '1px' }}>SUBMIT</button>
            </div>
          </form>
        </div>
      </section>

      <section style={{ background: '#172f3d', color: 'white' }}>
        <div style={{ ...section, paddingTop: '42px', paddingBottom: '42px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '28px', fontFamily: 'Arial, sans-serif' }}>
          <div><h3 style={{ margin: '0 0 8px', fontSize: '22px' }}>Whole Person</h3><p style={{ margin: 0, color: '#d8e0e3' }}>Body, mind, heart, and soul working together.</p></div>
          <div><h3 style={{ margin: '0 0 8px', fontSize: '22px' }}>Practical Process</h3><p style={{ margin: 0, color: '#d8e0e3' }}>A guided path from reflection to action.</p></div>
          <div><h3 style={{ margin: '0 0 8px', fontSize: '22px' }}>Measurable Direction</h3><p style={{ margin: 0, color: '#d8e0e3' }}>Goals, strategies, and accountability.</p></div>
        </div>
      </section>

      <section id="process" style={section}>
        <p style={{ fontFamily: 'Arial, sans-serif', color: '#a66f2a', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>The methodology you’ll use</p>
        <h2 style={{ fontSize: '50px', lineHeight: '1.1', maxWidth: '760px', marginTop: 0 }}>A simple process for building a meaningful life plan.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', marginTop: '34px' }}>
          {[
            ['01', 'Foundation', 'Define your purpose, mission, values, temperament, roles, and long-term vision.'],
            ['02', 'Position', 'Use a personal SWOT to make an honest assessment of where you are right now.'],
            ['03', 'Direction', 'Build 3-year objectives, 1-year goals, 6-month strategies, and results to measure.'],
          ].map(([num, title, text]) => (
            <div key={title} style={{ background: 'white', padding: '34px', borderBottom: '5px solid #a66f2a', minHeight: '220px' }}>
              <div style={{ fontFamily: 'Arial, sans-serif', color: '#a66f2a', fontWeight: 800 }}>{num}</div>
              <h3 style={{ fontSize: '29px', margin: '16px 0 12px' }}>{title}</h3>
              <p style={{ fontFamily: 'Arial, sans-serif', color: '#52636b', lineHeight: '1.65' }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="framework" style={{ background: '#fffaf2' }}>
        <div style={section}>
          <div style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: 'Arial, sans-serif', color: '#a66f2a', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>Body · Mind · Heart · Soul</p>
              <h2 style={{ fontSize: '50px', lineHeight: '1.1', marginTop: 0 }}>Better starts with alignment.</h2>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', lineHeight: '1.7', color: '#52636b' }}>
                When one area of life is neglected, the rest is affected. The program helps participants renew what matters most and turn insight into a weekly rhythm.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', fontFamily: 'Arial, sans-serif' }}>
              {['Body: eat, sleep, move, recover', 'Mind: focus, awareness, growth', 'Heart: connection, love, gratitude', 'Soul: purpose, meaning, prayer'].map((item) => (
                <div key={item} style={{ background: '#172f3d', color: 'white', padding: '26px', minHeight: '110px', display: 'flex', alignItems: 'end' }}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={section}>
        <h2 style={{ fontSize: '46px', textAlign: 'center', marginTop: 0 }}>What happens next?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '22px', marginTop: '34px', fontFamily: 'Arial, sans-serif' }}>
          <div style={{ textAlign: 'center', padding: '25px' }}><h3>Connect</h3><p>Speak with a program lead and decide whether the process fits your next season.</p></div>
          <div style={{ textAlign: 'center', padding: '25px' }}><h3>Join</h3><p>Work through the guided workbook with coaching, reflection, and practical tools.</p></div>
          <div style={{ textAlign: 'center', padding: '25px' }}><h3>Follow Through</h3><p>Leave with a plan, an ideal week, and accountability to keep moving toward better.</p></div>
        </div>
      </section>

      <footer style={{ background: '#172f3d', color: 'white', padding: '50px 22px', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', gap: '30px' }}>
          <div><strong>YOU MADE BETTER</strong><p style={{ color: '#d8e0e3' }}>Planning for a meaningful life.</p></div>
          <div><strong>Contact</strong><p style={{ color: '#d8e0e3' }}>hello@madebettercoaching.ca</p></div>
        </div>
      </footer>
    </main>
  )
}
