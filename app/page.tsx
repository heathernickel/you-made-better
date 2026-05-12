import type { ReactNode } from 'react'

const navy = '#0b3554'
const blue = '#1b7fae'
const ink = '#20394d'
const softBlue = '#eef5f8'
const line = '#c6d2da'

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

function ProcessBlock({ label, title, body, dark }: { label: string; title: string; body: string; dark?: boolean }) {
  return (
    <div className={dark ? 'process-block dark-block' : 'process-block'}>
      <p className="eyebrow">{label}</p>
      <div className="rule" />
      <h3>{title}</h3>
      <p className="body-copy">{body}</p>
    </div>
  )
}

const CompassIcon = (
  <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <circle cx="50" cy="50" r="37" stroke="currentColor" strokeWidth="6" />
    <path d="M50 15V26M50 74V85M15 50H26M74 50H85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M65 29L54 56L32 69L45 43L65 29Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
  </svg>
)

const PersonIcon = (
  <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <circle cx="50" cy="29" r="16" stroke="currentColor" strokeWidth="6" />
    <path d="M22 82C25 61 35 51 50 51C65 51 75 61 78 82" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M50 6V14M50 44V50M28 29H20M80 29H72" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
  </svg>
)

const SwotIcon = (
  <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <rect x="16" y="16" width="68" height="68" rx="6" stroke="currentColor" strokeWidth="6" />
    <path d="M50 16V84M16 50H84" stroke="currentColor" strokeWidth="6" />
    <path d="M28 36H39M61 36H72M28 65H39M61 65H72" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
  </svg>
)

const ActionIcon = (
  <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <rect x="18" y="18" width="64" height="64" rx="8" stroke="currentColor" strokeWidth="6" />
    <path d="M33 38H67M33 52H60M33 66H51" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M68 18V8M50 18V8M32 18V8" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
  </svg>
)

const WeekIcon = (
  <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <rect x="14" y="23" width="72" height="58" rx="8" stroke="currentColor" strokeWidth="6" />
    <path d="M14 41H86M30 16V29M70 16V29" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M29 56H36M47 56H54M65 56H72M29 68H36M47 68H54" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
  </svg>
)

const PartnerIcon = (
  <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <circle cx="35" cy="31" r="13" stroke="currentColor" strokeWidth="6" />
    <circle cx="65" cy="31" r="13" stroke="currentColor" strokeWidth="6" />
    <path d="M14 80C17 61 25 52 35 52C45 52 51 62 52 80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M48 80C49 62 55 52 65 52C75 52 83 61 86 80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
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
        .logo { font-weight: 900; line-height: 1.05; letter-spacing: .02em; font-size: 18px; text-align: left; }
        .menu { font-size: 34px; line-height: 1; font-weight: 800; }
        .hero { min-height: 90vh; background: ${navy}; color: white; text-align: center; position: relative; display: flex; align-items: center; justify-content: center; padding: 130px 24px 88px; }
        .hero::after { content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 72px; background: white; border-radius: 50% 50% 0 0 / 100% 100% 0 0; transform: translateY(42px); }
        .hero-content { max-width: 880px; position: relative; z-index: 2; }
        .hero-mark { width: 104px; height: 104px; margin: 0 auto 28px; color: white; opacity: .95; }
        h1 { font-size: clamp(44px, 9vw, 82px); line-height: 1.02; margin: 0 0 28px; letter-spacing: -.04em; font-weight: 900; }
        .hero p { font-size: clamp(22px, 4.3vw, 34px); line-height: 1.38; margin: 0 auto 38px; max-width: 790px; color: rgba(255,255,255,.92); font-weight: 300; }
        .cta { display: inline-flex; justify-content: center; align-items: center; min-height: 72px; width: min(100%, 720px); border: 0; border-radius: 999px; background: ${blue}; color: white; font-size: clamp(18px, 3.8vw, 27px); letter-spacing: .03em; font-weight: 900; text-decoration: none; padding: 22px 28px; text-align: center; box-shadow: 0 12px 26px rgba(27,127,174,.22); }
        .section { padding: 92px 24px; text-align: center; }
        .section.soft { background: ${softBlue}; }
        .section.navy { background: ${navy}; color: white; }
        .inner { max-width: 1020px; margin: 0 auto; }
        .kicker { font-size: 17px; text-transform: uppercase; letter-spacing: .14em; color: ${blue}; font-weight: 900; margin: 0 0 20px; }
        .section.navy .kicker { color: #8fd1ec; }
        h2 { font-size: clamp(38px, 8vw, 68px); line-height: 1.08; letter-spacing: -.04em; margin: 0 0 28px; color: ${navy}; }
        .section.navy h2 { color: white; }
        .lead { font-size: clamp(21px, 4vw, 32px); line-height: 1.48; margin: 0 auto; max-width: 930px; font-weight: 300; color: ${ink}; }
        .section.navy .lead { color: rgba(255,255,255,.9); }
        .overview-grid { display: grid; grid-template-columns: 1fr; gap: 28px; max-width: 930px; margin: 48px auto 0; }
        .workbook-card { background: white; border-radius: 26px; padding: 48px 28px; box-shadow: 0 18px 46px rgba(11,53,84,.13); text-align: center; border-top: 8px solid ${navy}; }
        .workbook-card.blue-top { border-top-color: ${blue}; }
        .icon { color: ${navy}; width: 112px; height: 112px; margin: 0 auto 28px; }
        .icon svg { width: 100%; height: 100%; display: block; }
        .workbook-card h3 { font-size: clamp(30px, 6vw, 46px); line-height: 1.1; margin: 0 0 22px; letter-spacing: -.035em; color: ${navy}; }
        .workbook-card p { font-size: clamp(20px, 3.8vw, 29px); line-height: 1.42; margin: 13px 0 0; color: #111; }
        .process-stack { display: grid; grid-template-columns: 1fr; gap: 28px; max-width: 960px; margin: 50px auto 0; }
        .process-block { background: white; border-radius: 0 0 28px 28px; padding: 54px 28px 62px; text-align: center; box-shadow: 0 16px 40px rgba(11,53,84,.1); }
        .dark-block { background: ${navy}; color: white; }
        .eyebrow { font-size: clamp(30px, 6vw, 46px); font-weight: 900; margin: 0 0 26px; letter-spacing: -.035em; color: inherit; }
        .rule { height: 2px; background: ${line}; max-width: 720px; margin: 0 auto 36px; }
        .dark-block .rule { background: rgba(255,255,255,.45); }
        .process-block h3 { font-size: clamp(34px, 7vw, 58px); margin: 0 0 26px; letter-spacing: -.04em; color: inherit; }
        .body-copy { font-size: clamp(21px, 4vw, 31px); line-height: 1.45; max-width: 780px; margin: 0 auto; color: inherit; }
        .circle-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; max-width: 720px; margin: 50px auto 0; }
        .circle { aspect-ratio: 1; border-radius: 999px; background: ${navy}; color: white; display: flex; align-items: center; justify-content: center; padding: 22px; font-size: clamp(21px, 5vw, 34px); font-weight: 900; letter-spacing: -.03em; box-shadow: 0 14px 34px rgba(11,53,84,.18); }
        .circle:nth-child(even) { background: ${blue}; }
        .summary { background: white; border-radius: 28px; padding: 42px 26px; box-shadow: 0 20px 60px rgba(11,53,84,.13); margin-top: 48px; border: 2px solid ${line}; }
        .summary-title { color: ${navy}; font-size: clamp(42px, 8vw, 70px); line-height: .98; font-weight: 900; letter-spacing: -.05em; margin-bottom: 20px; }
        .summary p { font-size: clamp(20px, 4vw, 30px); line-height: 1.45; margin: 0; }
        @media (min-width: 800px) {
          .nav { padding: 0 70px; height: 96px; }
          .hero { min-height: 820px; padding-top: 150px; }
          .overview-grid { grid-template-columns: repeat(2, 1fr); }
          .workbook-card { padding: 58px 34px; }
          .circle-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>

      <section className="hero">
        <header className="nav">
          <div className="logo">YOU<br />MADE BETTER</div>
          <div className="menu">☰</div>
        </header>
        <div className="hero-content">
          <div className="hero-mark">{CompassIcon}</div>
          <h1>Planning For A Meaningful Life.</h1>
          <p>
            A guided journey toward intentional living. Discover who you want to be, what you want to do, and where you want to go.
          </p>
          <a className="cta" href="#overview">START YOUR JOURNEY</a>
        </div>
      </section>

      <section className="section" id="overview">
        <div className="inner">
          <p className="kicker">Your Journey Starts Here</p>
          <h2>Three Steps To The You Made Better Planning Process</h2>
          <p className="lead">
            You Made Better uses a 3-part model, whole person framework, and principle-based approach to help you create a roadmap for your life.
          </p>
          <div className="overview-grid">
            <WorkbookCard icon={PersonIcon} title="Foundation" lines={["Who you want to be", "What you want to do", "Purpose • Mission • Vision"]} />
            <WorkbookCard icon={SwotIcon} title="Position" lines={["Honest assessment", "Where you are right now", "Strengths • Weaknesses • Opportunities • Threats"]} />
            <WorkbookCard icon={ActionIcon} title="Direction" lines={["Building your plan", "Goals • Strategies", "Results to measure"]} />
            <WorkbookCard icon={CompassIcon} title="Your Roadmap" lines={["Clear sense of direction", "Strategic action plan", "Confidence to pursue a meaningful life"]} />
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="inner">
          <p className="kicker">Part 1</p>
          <h2>Foundation</h2>
          <p className="lead">
            Begin by exploring your purpose, mission, and 10-year vision. This foundation gives meaning to every decision that follows.
          </p>
          <div className="process-stack">
            <ProcessBlock label="01" title="Purpose" body="Why am I here? Define who you are through temperament, values, roles, and virtues." />
            <ProcessBlock label="02" title="Mission" body="What am I going to do? Clarify the direction of your life and how you will live out your purpose." dark />
            <ProcessBlock label="03" title="Vision" body="Where do I want to go? Articulate your preferred future and who you are becoming." />
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="inner">
          <p className="kicker">Whole Person Framework</p>
          <h2>Body. Mind. Heart. Soul.</h2>
          <p className="lead">
            Physical, mental, emotional, and spiritual health are distinct yet deeply integrated. When they are aligned, you experience strength, clarity, connection, and meaning.
          </p>
          <div className="circle-grid">
            <div className="circle">Body</div>
            <div className="circle">Mind</div>
            <div className="circle">Heart</div>
            <div className="circle">Soul</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="inner">
          <p className="kicker">Part 2</p>
          <h2>Position</h2>
          <p className="lead">
            From time to time, a valuable practice is to step back and conduct an honest self-appraisal. A personal SWOT builds self-awareness and anchors your plan in reality.
          </p>
          <div className="overview-grid">
            <WorkbookCard icon={SwotIcon} title="Strengths" lines={["What do I do well?", "Where do I feel confident?", "What do others appreciate?"]} />
            <WorkbookCard icon={SwotIcon} title="Weaknesses" lines={["Where am I avoidant?", "What habits hold me back?", "What gaps limit progress?"]} />
            <WorkbookCard icon={SwotIcon} title="Opportunities" lines={["What could help me grow?", "What relationships matter?", "What strengths can I leverage?"]} />
            <WorkbookCard icon={SwotIcon} title="Threats" lines={["What could slow progress?", "What patterns may return?", "What can cause lost focus?"]} />
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="inner">
          <p className="kicker">Part 3</p>
          <h2>Direction</h2>
          <p className="lead">
            Reduce emotional decision-making, create personal accountability, and increase your confidence with a clear set of goals and strategies.
          </p>
          <div className="process-stack">
            <ProcessBlock label="3 Year Objectives" title="Lift Your Eyes" body="Objectives are far enough out to lift your eyes above today’s noise, but close enough to feel real and achievable." dark />
            <ProcessBlock label="1 Year Goals" title="Set Priorities" body="Translate your objectives into goals that can be accomplished in the next 12 months." />
            <ProcessBlock label="6 Month Strategies" title="Choose Focused Action" body="Prioritize specific tasks that lead to the results you want." dark />
            <ProcessBlock label="Results to Measure" title="Keep Yourself Honest" body="Choose simple results that give you feedback on the strategies you are implementing." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="inner">
          <p className="kicker">Action Plan</p>
          <h2>Automate What You Can. Schedule What Matters.</h2>
          <p className="lead">
            Build an ideal week, define morning and evening routines, choose habits, and set up accountability so your priorities stay visible.
          </p>
          <div className="overview-grid">
            <WorkbookCard icon={WeekIcon} title="Ideal Week" lines={["Morning routine", "Evening routine", "Other habits", "Scheduled priorities"]} />
            <WorkbookCard icon={PartnerIcon} title="Accountability Partner" lines={["Weekly or monthly check-ins", "Tools to keep you on track", "Support when motivation fluctuates"]} />
          </div>
          <div className="summary">
            <div className="summary-title">YMB<br />SUMMARY</div>
            <p>
              Your completed summary brings together your purpose, mission, roles, 10-year vision, 3-year objectives, 1-year goals, 6-month strategies, and results to measure.
            </p>
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="inner">
          <h2>Find your voice and inspire others to find theirs.</h2>
          <p className="lead">
            This journey is not meant to be a solo endeavor. As you gain traction and momentum, bring others with you.
          </p>
          <div style={{ marginTop: 42 }}>
            <a className="cta" href="mailto:hello@madebettercoaching.ca">SPEAK WITH AN ADVISOR</a>
          </div>
        </div>
      </section>
    </main>
  )
}
