import type { ReactNode } from 'react'

const navy = '#10283b'
const black = '#1f1f1f'
const blue = '#2478a3'
const gold = '#f4c12b'
const gray = '#a7a7a7'
const ink = '#1e3446'
const soft = '#eef1ee'

function Icon({ children }: { children: ReactNode }) {
  return <div className="icon">{children}</div>
}

function WorkbookCard({ icon, title, lines }: { icon: ReactNode; title: string; lines: string[] }) {
  return (
    <div className="workbook-card">
      <Icon>{icon}</Icon>
      <h3>{title}</h3>
      {lines.map((line) => <p key={line}>{line}</p>)}
    </div>
  )
}

const CompassIcon = (
  <svg viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="37" stroke="currentColor" strokeWidth="6" />
    <path d="M50 15V26M50 74V85M15 50H26M74 50H85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M65 29L54 56L32 69L45 43L65 29Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
  </svg>
)

const PersonIcon = (
  <svg viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="29" r="16" stroke="currentColor" strokeWidth="6" />
    <path d="M22 82C25 61 35 51 50 51C65 51 75 61 78 82" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
  </svg>
)

const SwotIcon = (
  <svg viewBox="0 0 100 100" fill="none">
    <rect x="16" y="16" width="68" height="68" rx="6" stroke="currentColor" strokeWidth="6" />
    <path d="M50 16V84M16 50H84" stroke="currentColor" strokeWidth="6" />
  </svg>
)

const ActionIcon = (
  <svg viewBox="0 0 100 100" fill="none">
    <rect x="18" y="18" width="64" height="64" rx="8" stroke="currentColor" strokeWidth="6" />
    <path d="M33 38H67M33 52H60M33 66H51" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
  </svg>
)

export default function Home() {
  return (
    <main>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        main { background: white; color: ${ink}; font-family: Arial, Helvetica, sans-serif; overflow-x: hidden; }
        .nav { position: absolute; top: 0; left: 0; right: 0; height: 86px; background: ${navy}; display: flex; justify-content: space-between; align-items: center; padding: 0 28px; color: white; z-index: 5; }
        .logo { display: flex; gap: 12px; align-items: center; font-weight: 900; line-height: 1.05; font-size: 18px; }
        .logo-mark { width: 42px; height: 42px; background: white; border-radius: 6px; position: relative; overflow: hidden; }
        .logo-mark:before { content: ''; position: absolute; width: 62px; height: 14px; background: ${navy}; transform: rotate(38deg); top: 12px; left: -8px; }
        .logo-mark:after { content: ''; position: absolute; width: 62px; height: 14px; background: ${navy}; transform: rotate(-38deg); bottom: 9px; left: 6px; }
        .hero { min-height: 92vh; background: ${navy}; color: white; text-align: center; display: flex; align-items: center; justify-content: center; padding: 132px 24px 92px; }
        .hero-content { max-width: 920px; }
        .hero-mark { width: 112px; height: 112px; margin: 0 auto 30px; color: ${gold}; }
        h1 { font-size: clamp(44px, 9vw, 84px); line-height: 1.02; margin: 0 0 28px; font-weight: 900; letter-spacing: -.04em; }
        .hero p { font-size: clamp(22px, 4vw, 34px); line-height: 1.4; margin: 0 auto 40px; max-width: 810px; color: rgba(255,255,255,.92); font-weight: 300; }
        .cta { display: inline-flex; align-items: center; justify-content: center; min-height: 72px; width: min(100%, 720px); border-radius: 999px; background: ${gold}; color: ${navy}; text-decoration: none; font-size: clamp(18px, 3.8vw, 27px); font-weight: 900; padding: 22px 28px; }
        .section { padding: 96px 24px; text-align: center; }
        .soft { background: ${soft}; }
        .gold { background: ${gold}; }
        .navy { background: ${navy}; color: white; }
        .inner { max-width: 1080px; margin: 0 auto; }
        .kicker { font-size: 16px; letter-spacing: .14em; text-transform: uppercase; color: ${blue}; font-weight: 900; margin-bottom: 20px; }
        h2 { font-size: clamp(38px, 8vw, 68px); line-height: 1.08; margin: 0 0 28px; color: ${navy}; letter-spacing: -.04em; }
        .navy h2 { color: white; }
        .lead { font-size: clamp(21px, 4vw, 32px); line-height: 1.5; margin: 0 auto; max-width: 920px; font-weight: 300; }
        .overview-grid { display: grid; grid-template-columns: 1fr; gap: 28px; margin-top: 50px; }
        .workbook-card { background: white; border-radius: 28px; padding: 48px 28px; box-shadow: 0 18px 46px rgba(11,53,84,.12); border-top: 8px solid ${navy}; }
        .icon { width: 110px; height: 110px; color: ${navy}; margin: 0 auto 28px; }
        .icon svg { width: 100%; height: 100%; }
        .workbook-card h3 { font-size: clamp(30px, 6vw, 46px); margin: 0 0 20px; color: ${navy}; }
        .workbook-card p { font-size: clamp(20px, 3.8vw, 28px); line-height: 1.45; margin: 12px 0 0; }
        .cycle-wrap { margin: 54px auto 0; max-width: 720px; position: relative; aspect-ratio: 1; }
        .cycle { position: absolute; inset: 0; border: 4px solid ${navy}; border-radius: 50%; background: white; box-shadow: 0 18px 46px rgba(16,40,59,.18); }
        .cycle-center { position: absolute; inset: 34%; border-radius: 50%; background: ${gold}; color: white; display: flex; align-items: center; justify-content: center; font-size: clamp(32px, 8vw, 64px); font-weight: 900; z-index: 3; box-shadow: 0 12px 30px rgba(0,0,0,.18); }
        .cycle-piece { position: absolute; width: 42%; height: 42%; border-radius: 999px; color: white; display: flex; align-items: center; justify-content: center; font-size: clamp(18px, 4vw, 32px); font-weight: 900; padding: 18px; box-shadow: 0 14px 28px rgba(0,0,0,.16); }
        .foundation { top: 11%; left: 29%; background: ${black}; transform: rotate(-8deg); }
        .position { right: 9%; bottom: 16%; background: ${navy}; transform: rotate(58deg); }
        .direction { left: 8%; bottom: 16%; background: ${blue}; transform: rotate(-68deg); }
        .pyramid { max-width: 860px; margin: 54px auto 0; }
        .pyramid-row { margin: 0 auto 10px; color: white; font-weight: 900; letter-spacing: .04em; font-size: clamp(15px, 3vw, 24px); padding: 18px 10px; box-shadow: 0 8px 16px rgba(0,0,0,.12); }
        .row-results { width: 36%; background: ${gold}; color: white; }
        .row-goals { width: 54%; background: ${blue}; }
        .row-swot { width: 70%; background: ${navy}; }
        .row-purpose { width: 84%; background: ${black}; }
        .row-temperament { width: 100%; background: ${gray}; }
        .pyramid-labels { display: grid; grid-template-columns: 1fr; gap: 14px; margin-top: 30px; }
        .label-card { background: rgba(255,255,255,.55); border-left: 8px solid ${navy}; padding: 20px; text-align: left; font-size: clamp(20px, 4vw, 28px); font-weight: 800; }
        .whole-person { display: grid; grid-template-columns: 1fr; gap: 20px; margin-top: 54px; text-align: left; }
        .wp-card { background: white; border-radius: 22px; padding: 28px; border-left: 12px solid ${navy}; box-shadow: 0 14px 34px rgba(16,40,59,.1); }
        .wp-card:nth-child(1) { border-left-color: ${gold}; }
        .wp-card:nth-child(2) { border-left-color: ${blue}; }
        .wp-card:nth-child(3) { border-left-color: ${navy}; }
        .wp-card:nth-child(4) { border-left-color: ${black}; }
        .wp-card h3 { margin: 0 0 8px; color: ${navy}; font-size: clamp(28px, 5vw, 42px); }
        .wp-card p { margin: 0; font-size: clamp(20px, 4vw, 28px); line-height: 1.45; }
        @media (min-width: 800px) { .overview-grid { grid-template-columns: repeat(2,1fr); } .whole-person { grid-template-columns: repeat(2,1fr); } }
      `}</style>

      <section className="hero">
        <header className="nav">
          <div className="logo"><span className="logo-mark" />YOU<br/>MADE BETTER</div>
          <div style={{ fontSize: 34 }}>☰</div>
        </header>
        <div className="hero-content">
          <div className="hero-mark">{CompassIcon}</div>
          <h1>Build a life you actually mean to live.</h1>
          <p>Most people drift through life reacting to pressure, distraction, and competing priorities. You Made Better helps people live with greater clarity, direction, purpose, and intentionality.</p>
          <a className="cta" href="#overview">START YOUR JOURNEY</a>
        </div>
      </section>

      <section className="section" id="overview">
        <div className="inner">
          <p className="kicker">Planning For A Meaningful Life</p>
          <h2>Better does not happen accidentally.</h2>
          <p className="lead">A meaningful life is built intentionally through reflection, alignment, courage, honest self-awareness, and practical action. The workbook supports that journey.</p>
          <div className="overview-grid">
            <WorkbookCard icon={PersonIcon} title="Foundation" lines={['Who you want to be','What matters most','Purpose • Mission • Vision']} />
            <WorkbookCard icon={SwotIcon} title="Position" lines={['Honest self-awareness','Where you are today','Strengths and challenges']} />
            <WorkbookCard icon={ActionIcon} title="Direction" lines={['Intentional priorities','Practical action','Clear direction forward']} />
            <WorkbookCard icon={CompassIcon} title="Whole Person" lines={['Body','Mind','Heart','Soul']} />
          </div>
        </div>
      </section>

      <section className="section gold">
        <div className="inner">
          <p className="kicker" style={{ color: navy }}>The Planning Model</p>
          <h2>Foundation. Position. Direction.</h2>
          <p className="lead">The You Made Better process gives people a simple way to understand who they are, where they are, and where they are going.</p>
          <div className="cycle-wrap">
            <div className="cycle" />
            <div className="cycle-piece foundation">FOUNDATION</div>
            <div className="cycle-piece position">POSITION</div>
            <div className="cycle-piece direction">DIRECTION</div>
            <div className="cycle-center">YOU</div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="inner">
          <p className="kicker">How The Plan Builds</p>
          <h2>A practical structure for a meaningful life.</h2>
          <div className="pyramid">
            <div className="pyramid-row row-results">RESULTS</div>
            <div className="pyramid-row row-goals">GOALS / STRATEGIES</div>
            <div className="pyramid-row row-swot">S.W.O.T</div>
            <div className="pyramid-row row-purpose">PURPOSE / MISSION / VISION</div>
            <div className="pyramid-row row-temperament">TEMPERAMENT / VALUES / ROLES</div>
          </div>
          <div className="pyramid-labels">
            <div className="label-card">Foundation gives meaning to every decision that follows.</div>
            <div className="label-card">Position anchors your plan in honest self-awareness.</div>
            <div className="label-card">Direction turns reflection into goals, strategies, and measurable results.</div>
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="inner">
          <p className="kicker" style={{ color: gold }}>Whole Person Framework</p>
          <h2>Body. Mind. Heart. Soul.</h2>
          <p className="lead" style={{ color: 'rgba(255,255,255,.9)' }}>Physical, mental, emotional, and spiritual health are deeply connected. When one area is neglected, the others are affected. When they are aligned, people experience strength, clarity, connection, and meaning.</p>
        </div>
      </section>

      <section className="section soft">
        <div className="inner">
          <div className="whole-person">
            <div className="wp-card"><h3>Soul</h3><p>Purpose and meaning. Meditation and prayer.</p></div>
            <div className="wp-card"><h3>Heart</h3><p>Connection and love. Gratitude and generosity.</p></div>
            <div className="wp-card"><h3>Mind</h3><p>Focus and awareness. Learn and grow.</p></div>
            <div className="wp-card"><h3>Body</h3><p>Eat, sleep and move. Breath and recover.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="inner">
          <p className="kicker">The Philosophy</p>
          <h2>Many people are busy but disconnected.</h2>
          <p className="lead">They are successful on paper but unclear about what actually matters. They feel stretched across responsibilities, distracted by urgency, and unsure if their life reflects who they want to become.</p>
        </div>
      </section>
    </main>
  )
}
