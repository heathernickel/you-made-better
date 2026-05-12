const green = '#075447'
const orange = '#ff4f1f'
const pale = '#eef2f0'

function Icon({ children }: { children: React.ReactNode }) {
  return <div className="icon">{children}</div>
}

function Card({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) {
  return (
    <div className="overview-card">
      <Icon>{icon}</Icon>
      <h3>{title}</h3>
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  )
}

function Stage({ stage, title, text }: { stage: string; title: string; text: string }) {
  return (
    <div className="stage-card">
      <h4>{stage}</h4>
      <div className="rule" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

const ChartIcon = (
  <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <rect x="18" y="52" width="14" height="30" rx="2" stroke="currentColor" strokeWidth="6" />
    <rect x="43" y="40" width="14" height="42" rx="2" stroke="currentColor" strokeWidth="6" />
    <rect x="68" y="27" width="14" height="55" rx="2" stroke="currentColor" strokeWidth="6" />
    <path d="M22 35L39 25L55 30L77 13" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M78 9L82 17L91 18L84 24L86 33L78 29L70 33L72 24L65 18L74 17L78 9Z" fill="currentColor" />
  </svg>
)

const CompassIcon = (
  <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="6" />
    <path d="M50 15V26M50 74V85M15 50H26M74 50H85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M62 30L53 55L31 68L45 43L62 30Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
  </svg>
)

const HeartIcon = (
  <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d="M50 82S18 61 18 36C18 24 27 17 38 17C45 17 49 21 50 24C51 21 55 17 62 17C73 17 82 24 82 36C82 61 50 82 50 82Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
    <path d="M30 50H43L49 38L57 62L64 50H72" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CheckIcon = (
  <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="6" />
    <path d="M32 51L44 63L69 36" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CalendarIcon = (
  <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <rect x="18" y="24" width="64" height="58" rx="6" stroke="currentColor" strokeWidth="6" />
    <path d="M18 40H82M34 17V30M66 17V30" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M35 56H65M35 68H55" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
  </svg>
)

const PartnerIcon = (
  <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <circle cx="35" cy="32" r="13" stroke="currentColor" strokeWidth="6" />
    <circle cx="65" cy="32" r="13" stroke="currentColor" strokeWidth="6" />
    <path d="M15 78C17 61 25 52 35 52C45 52 51 61 52 78" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M48 78C50 61 56 52 65 52C75 52 83 61 85 78" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
  </svg>
)

export default function Home() {
  return (
    <main>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        main { background: #f5f6f5; color: #101010; font-family: Arial, Helvetica, sans-serif; overflow-x: hidden; }
        .hero { min-height: 92vh; background-image: linear-gradient(rgba(7, 84, 71, .78), rgba(7, 84, 71, .78)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1800&auto=format&fit=crop'); background-size: cover; background-position: center; color: white; text-align: center; position: relative; display: flex; align-items: center; justify-content: center; padding: 120px 24px 90px; }
        .nav { position: absolute; top: 0; left: 0; right: 0; height: 86px; background: rgba(7,84,71,.96); display: flex; justify-content: space-between; align-items: center; padding: 0 28px; }
        .logo { font-weight: 800; line-height: 1.05; letter-spacing: .02em; font-size: 18px; text-align: left; }
        .menu { font-size: 36px; line-height: 1; font-weight: 800; }
        .hero-content { max-width: 820px; }
        h1 { font-size: clamp(44px, 9vw, 82px); line-height: 1.04; margin: 0 0 28px; letter-spacing: -.035em; }
        .hero p { font-size: clamp(23px, 4.5vw, 34px); line-height: 1.35; font-weight: 300; margin: 0 auto 38px; max-width: 760px; color: rgba(255,255,255,.94); }
        .cta { display: inline-flex; justify-content: center; align-items: center; min-height: 76px; width: min(100%, 720px); border: 0; border-radius: 999px; background: ${orange}; color: white; font-size: clamp(19px, 4vw, 28px); letter-spacing: .02em; font-weight: 800; text-decoration: none; padding: 22px 28px; text-align: center; }
        .section { padding: 88px 24px; text-align: center; }
        .section.white { background: white; }
        .section.soft { background: #f0f3f2; }
        .inner { max-width: 980px; margin: 0 auto; }
        h2 { font-size: clamp(38px, 8vw, 66px); line-height: 1.08; letter-spacing: -.035em; margin: 0 0 26px; }
        .lead { font-size: clamp(22px, 4.5vw, 34px); line-height: 1.45; margin: 0 auto; max-width: 930px; font-weight: 300; }
        .overview-grid { display: grid; grid-template-columns: 1fr; gap: 28px; max-width: 900px; margin: 44px auto 0; }
        .overview-card { background: white; border-radius: 28px; padding: 48px 28px; box-shadow: 0 20px 50px rgba(0,0,0,.13); text-align: center; }
        .icon { color: ${green}; width: 118px; height: 118px; margin: 0 auto 28px; }
        .icon svg { width: 100%; height: 100%; display: block; }
        .overview-card h3 { font-size: clamp(32px, 6vw, 48px); line-height: 1.1; margin: 0 0 22px; letter-spacing: -.03em; }
        .overview-card p { font-size: clamp(21px, 4vw, 30px); line-height: 1.45; margin: 14px 0 0; }
        .stages { display: grid; grid-template-columns: 1fr; gap: 28px; max-width: 960px; margin: 48px auto 0; }
        .stage-card { background: ${pale}; border-radius: 0 0 28px 28px; padding: 54px 28px 62px; text-align: center; }
        .stage-card h4 { font-size: clamp(30px, 6vw, 48px); margin: 0 0 26px; letter-spacing: -.03em; }
        .rule { height: 2px; background: #b9bfbd; max-width: 720px; margin: 0 auto 36px; }
        .stage-card h3 { font-size: clamp(34px, 7vw, 56px); margin: 0 0 28px; letter-spacing: -.035em; }
        .stage-card p { font-size: clamp(22px, 4.5vw, 32px); line-height: 1.45; max-width: 760px; margin: 0 auto; }
        .dark { background-image: linear-gradient(rgba(7,84,71,.8), rgba(7,84,71,.8)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop'); background-size: cover; background-position: center; color: white; }
        .check-list { max-width: 820px; margin: 44px auto 0; background: ${pale}; border-radius: 28px; padding: 42px 28px; box-shadow: 0 20px 50px rgba(0,0,0,.12); }
        .check-row { display: grid; grid-template-columns: 58px 1fr; gap: 24px; align-items: center; text-align: left; margin: 28px 0; }
        .check { color: ${green}; font-size: 52px; font-weight: 900; line-height: 1; }
        .check-row p { font-size: clamp(21px, 4vw, 30px); line-height: 1.45; margin: 0; }
        .workbook { background: white; border-radius: 30px; padding: 40px 26px; box-shadow: 0 20px 60px rgba(0,0,0,.12); margin-top: 44px; }
        .workbook-title { color: ${green}; font-size: clamp(42px, 8vw, 70px); line-height: .95; font-weight: 900; letter-spacing: -.05em; margin-bottom: 18px; }
        .workbook p { font-size: clamp(21px, 4vw, 30px); line-height: 1.45; margin: 0; }
        @media (min-width: 800px) {
          .hero { min-height: 860px; padding-top: 140px; }
          .nav { padding: 0 70px; height: 96px; }
          .overview-grid { grid-template-columns: repeat(2, 1fr); }
          .overview-card { padding: 58px 34px; }
          .stages { gap: 34px; }
        }
      `}</style>

      <section className="hero">
        <header className="nav">
          <div className="logo">YOU<br />MADE BETTER</div>
          <div className="menu">☰</div>
        </header>
        <div className="hero-content">
          <h1>Planning For A Meaningful Life.</h1>
          <p>
            A guided journey toward intentional living, deeper self-understanding, clear direction, and a practical plan to pursue a full and abundant life with confidence.
          </p>
          <a className="cta" href="#overview">START YOUR JOURNEY</a>
        </div>
      </section>

      <section className="section white" id="overview">
        <div className="inner">
          <h2>Program Overview</h2>
          <div className="overview-grid">
            <Card icon={ChartIcon} title="3-Part Process" lines={["Foundation", "Position", "Direction"]} />
            <Card icon={CompassIcon} title="Core Questions" lines={["Why am I here?", "What am I going to do?", "Where do I want to go?"]} />
            <Card icon={HeartIcon} title="Whole Person" lines={["Body", "Mind", "Heart", "Soul"]} />
            <Card icon={CheckIcon} title="Practical Outcome" lines={["Purpose", "Mission", "Vision", "Action Plan"]} />
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="inner">
          <h2>Your Journey Starts Here</h2>
          <p className="lead">
            You Made Better uses a 3-part model, whole person framework, and principle-based approach to help you create a roadmap for your life.
          </p>
          <div className="stages">
            <Stage
              stage="Stage 1"
              title="Foundation"
              text="Explore your purpose, mission, and 10-year vision. Define who you want to be and what you want to do."
            />
            <Stage
              stage="Stage 2"
              title="Position"
              text="Step back and conduct an honest self-appraisal using a personal SWOT to understand where you are right now."
            />
            <Stage
              stage="Stage 3"
              title="Direction"
              text="Build 3-year objectives, 1-year goals, 6-month strategies, measurable results, and a clear action plan."
            />
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="inner">
          <h2>The Whole Person Framework</h2>
          <p className="lead">
            When your body, mind, heart, and soul are aligned, you experience strength, clarity, connection, and meaning.
          </p>
          <div className="overview-grid">
            <Card icon={HeartIcon} title="Body" lines={["Eat", "Sleep", "Move", "Breathe and recover"]} />
            <Card icon={CompassIcon} title="Mind" lines={["Focus", "Awareness", "Learn", "Grow"]} />
            <Card icon={PartnerIcon} title="Heart" lines={["Connection", "Love", "Gratitude", "Generosity"]} />
            <Card icon={ChartIcon} title="Soul" lines={["Purpose", "Meaning", "Meditation", "Prayer"]} />
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="inner">
          <h2>One size does NOT fit all.</h2>
          <div className="check-list">
            <div className="check-row"><div className="check">✓</div><p>You want a clear process for understanding yourself and your direction.</p></div>
            <div className="check-row"><div className="check">✓</div><p>You want to align your life around what matters most instead of reacting to pressure.</p></div>
            <div className="check-row"><div className="check">✓</div><p>You want practical goals, measurable strategies, and accountability for follow-through.</p></div>
            <div className="check-row"><div className="check">✓</div><p>You want your body, mind, heart, and soul working together.</p></div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="inner">
          <h2>What You Walk Away With</h2>
          <div className="overview-grid">
            <Card icon={CalendarIcon} title="Ideal Week" lines={["Morning routine", "Evening routine", "Habits", "Scheduled priorities"]} />
            <Card icon={PartnerIcon} title="Accountability" lines={["Check-ins", "Support", "Encouragement", "Follow-through"]} />
          </div>
          <div className="workbook">
            <div className="workbook-title">YMB<br />SUMMARY</div>
            <p>
              Your completed plan brings together your purpose, mission, roles, 10-year vision, 3-year objectives, 1-year goals, 6-month strategies, and results to measure.
            </p>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="inner">
          <h2>Ready to plan for better?</h2>
          <p className="lead">
            Begin the process of discovering your foundation, assessing your position, and setting direction for a more meaningful life.
          </p>
          <div style={{ marginTop: 42 }}>
            <a className="cta" href="mailto:hello@madebettercoaching.ca">SPEAK WITH AN ADVISOR</a>
          </div>
        </div>
      </section>
    </main>
  )
}
