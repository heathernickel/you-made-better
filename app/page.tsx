import type { ReactNode } from 'react'

const navy = '#0b3554'
const blue = '#1b7fae'
const ink = '#20394d'
const softBlue = '#eef5f8'

function Icon({ children }: { children: ReactNode }) {
  return <div className="icon">{children}</div>
}

function WorkbookCard({ icon, title, lines }: { icon: ReactNode; title: string; lines: string[] }) {
  return (
    <div className="workbook-card">
      <Icon>{icon}</Icon>
      <h3>{title}</h3>
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
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
        main {
          background: white;
          color: ${ink};
          font-family: Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }

        .nav {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 86px;
          background: ${navy};
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 28px;
          color: white;
          z-index: 5;
        }

        .logo {
          font-weight: 900;
          line-height: 1.05;
          font-size: 18px;
        }

        .hero {
          min-height: 92vh;
          background: ${navy};
          color: white;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 130px 24px 90px;
        }

        .hero-content {
          max-width: 900px;
        }

        .hero-mark {
          width: 104px;
          height: 104px;
          margin: 0 auto 28px;
        }

        h1 {
          font-size: clamp(44px, 9vw, 84px);
          line-height: 1.02;
          margin: 0 0 28px;
          font-weight: 900;
          letter-spacing: -.04em;
        }

        .hero p {
          font-size: clamp(22px, 4vw, 34px);
          line-height: 1.4;
          margin: 0 auto 40px;
          max-width: 780px;
          color: rgba(255,255,255,.92);
          font-weight: 300;
        }

        .cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 72px;
          width: min(100%, 720px);
          border-radius: 999px;
          background: ${blue};
          color: white;
          text-decoration: none;
          font-size: clamp(18px, 3.8vw, 27px);
          font-weight: 900;
          padding: 22px 28px;
        }

        .section {
          padding: 96px 24px;
          text-align: center;
        }

        .soft {
          background: ${softBlue};
        }

        .navy {
          background: ${navy};
          color: white;
        }

        .inner {
          max-width: 1020px;
          margin: 0 auto;
        }

        .kicker {
          font-size: 16px;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: ${blue};
          font-weight: 900;
          margin-bottom: 20px;
        }

        h2 {
          font-size: clamp(38px, 8vw, 68px);
          line-height: 1.08;
          margin: 0 0 28px;
          color: ${navy};
          letter-spacing: -.04em;
        }

        .navy h2 {
          color: white;
        }

        .lead {
          font-size: clamp(21px, 4vw, 32px);
          line-height: 1.5;
          margin: 0 auto;
          max-width: 920px;
          font-weight: 300;
        }

        .overview-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          margin-top: 50px;
        }

        .workbook-card {
          background: white;
          border-radius: 28px;
          padding: 48px 28px;
          box-shadow: 0 18px 46px rgba(11,53,84,.12);
          border-top: 8px solid ${navy};
        }

        .icon {
          width: 110px;
          height: 110px;
          color: ${navy};
          margin: 0 auto 28px;
        }

        .icon svg {
          width: 100%;
          height: 100%;
        }

        .workbook-card h3 {
          font-size: clamp(30px, 6vw, 46px);
          margin: 0 0 20px;
          color: ${navy};
        }

        .workbook-card p {
          font-size: clamp(20px, 3.8vw, 28px);
          line-height: 1.45;
          margin: 12px 0 0;
        }

        @media (min-width: 800px) {
          .overview-grid {
            grid-template-columns: repeat(2,1fr);
          }
        }
      `}</style>

      <section className="hero">
        <header className="nav">
          <div className="logo">YOU<br/>MADE BETTER</div>
          <div style={{ fontSize: 34 }}>☰</div>
        </header>

        <div className="hero-content">
          <div className="hero-mark">{CompassIcon}</div>

          <h1>Build a life you actually mean to live.</h1>

          <p>
            Most people drift through life reacting to pressure, distraction, and competing priorities. You Made Better is a guided process designed to help people live with greater clarity, direction, purpose, and intentionality.
          </p>

          <a className="cta" href="#overview">
            START YOUR JOURNEY
          </a>
        </div>
      </section>

      <section className="section" id="overview">
        <div className="inner">
          <p className="kicker">Planning For A Meaningful Life</p>

          <h2>Better does not happen accidentally.</h2>

          <p className="lead">
            A meaningful life is built intentionally through reflection, alignment, courage, honest self-awareness, and practical action. The workbook supports that journey.
          </p>

          <div className="overview-grid">
            <WorkbookCard
              icon={PersonIcon}
              title="Foundation"
              lines={[
                'Who you want to be',
                'What matters most',
                'Purpose • Mission • Vision'
              ]}
            />

            <WorkbookCard
              icon={SwotIcon}
              title="Position"
              lines={[
                'Honest self-awareness',
                'Where you are today',
                'Strengths and challenges'
              ]}
            />

            <WorkbookCard
              icon={ActionIcon}
              title="Direction"
              lines={[
                'Intentional priorities',
                'Practical action',
                'Clear direction forward'
              ]}
            />

            <WorkbookCard
              icon={CompassIcon}
              title="Whole Person"
              lines={[
                'Body',
                'Mind',
                'Heart',
                'Soul'
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="inner">
          <p className="kicker">The Philosophy</p>

          <h2>Many people are busy but disconnected.</h2>

          <p className="lead">
            They are successful on paper but unclear about what actually matters. They feel stretched across responsibilities, distracted by urgency, and unsure if their life reflects who they want to become.
            <br /><br />
            You Made Better helps people step back, think deeply, and intentionally design the kind of life they want to build.
          </p>
        </div>
      </section>

      <section className="section navy">
        <div className="inner">
          <p className="kicker" style={{ color: '#8fd1ec' }}>
            Whole Person Framework
          </p>

          <h2>Body. Mind. Heart. Soul.</h2>

          <p className="lead" style={{ color: 'rgba(255,255,255,.9)' }}>
            Physical, mental, emotional, and spiritual health are deeply connected. When one area is neglected, the others are affected. When they are aligned, people experience strength, clarity, connection, and meaning.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="inner">
          <p className="kicker">The Process</p>

          <h2>A practical roadmap for intentional living.</h2>

          <p className="lead">
            The process helps participants clarify who they are, honestly assess where they are, and create a practical direction forward.
          </p>
        </div>
      </section>
    </main>
  )
}
