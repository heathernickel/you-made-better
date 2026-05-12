const navy = '#0B2341'
const blue = '#2E6F9E'
const gold = '#E2B534'
const charcoal = '#1F1F1F'
const soft = '#F1F3F1'

function WorkbookImage({ src, alt, plain = false }: { src: string; alt: string; plain?: boolean }) {
  return (
    <div className={plain ? 'image-frame plain-image' : 'image-frame'}>
      <img src={src} alt={alt} />
    </div>
  )
}

function PillarCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pillar-card">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        main {
          background: white;
          color: ${navy};
          font-family: Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }
        .hero {
          min-height: 92vh;
          background: ${navy};
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 96px 24px 78px;
        }
        .hero-inner { width: 100%; max-width: 980px; }
        .brand { display: inline-flex; flex-direction: column; align-items: center; gap: 18px; margin-bottom: 56px; }
        .brand-mark {
          width: 84px;
          height: 84px;
          border-radius: 12px;
          background: white;
          position: relative;
          overflow: hidden;
        }
        .brand-mark:before,
        .brand-mark:after {
          content: '';
          position: absolute;
          width: 120px;
          height: 22px;
          background: ${navy};
          left: -16px;
        }
        .brand-mark:before { top: 26px; transform: rotate(38deg); }
        .brand-mark:after { bottom: 18px; transform: rotate(-38deg); }
        .brand-name {
          font-size: clamp(34px, 8vw, 72px);
          line-height: .92;
          font-weight: 900;
          letter-spacing: -.03em;
        }
        h1 {
          font-size: clamp(44px, 9vw, 88px);
          line-height: 1.02;
          margin: 0 0 28px;
          font-weight: 900;
          letter-spacing: -.045em;
        }
        .hero p {
          font-size: clamp(22px, 4.5vw, 34px);
          line-height: 1.38;
          max-width: 820px;
          margin: 0 auto 42px;
          color: rgba(255,255,255,.9);
          font-weight: 300;
        }
        .cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 72px;
          width: min(100%, 680px);
          border-radius: 999px;
          background: ${gold};
          color: ${navy};
          text-decoration: none;
          font-size: clamp(18px, 3.6vw, 26px);
          font-weight: 900;
          padding: 20px 28px;
          letter-spacing: .02em;
        }
        .section { padding: 94px 24px; text-align: center; }
        .section.soft { background: ${soft}; }
        .section.gold { background: ${gold}; }
        .section.navy { background: ${navy}; color: white; }
        .section.charcoal { background: ${charcoal}; color: white; }
        .inner { max-width: 1120px; margin: 0 auto; }
        .kicker {
          margin: 0 0 20px;
          color: ${blue};
          font-size: 15px;
          font-weight: 900;
          letter-spacing: .16em;
          text-transform: uppercase;
        }
        .gold .kicker,
        .navy .kicker,
        .charcoal .kicker { color: ${gold}; }
        h2 {
          color: ${navy};
          font-size: clamp(38px, 8vw, 72px);
          line-height: 1.05;
          letter-spacing: -.045em;
          margin: 0 0 28px;
          font-weight: 900;
        }
        .navy h2,
        .charcoal h2 { color: white; }
        .lead {
          max-width: 920px;
          margin: 0 auto;
          font-size: clamp(21px, 4vw, 32px);
          line-height: 1.5;
          font-weight: 300;
          color: ${navy};
        }
        .navy .lead,
        .charcoal .lead { color: rgba(255,255,255,.88); }
        .image-frame {
          margin: 54px auto 0;
          max-width: 980px;
          border-radius: 28px;
          overflow: hidden;
          background: white;
          box-shadow: 0 22px 54px rgba(11,35,65,.16);
        }
        .image-frame img { display: block; width: 100%; height: auto; }
        .plain-image { box-shadow: none; border-radius: 0; background: transparent; }
        .grid { display: grid; grid-template-columns: 1fr; gap: 24px; margin-top: 48px; }
        .pillar-card {
          background: white;
          border-radius: 24px;
          padding: 36px 28px;
          text-align: left;
          border-top: 8px solid ${gold};
          box-shadow: 0 16px 42px rgba(11,35,65,.1);
        }
        .pillar-card h3 {
          color: ${navy};
          font-size: clamp(28px, 5.6vw, 44px);
          line-height: 1.08;
          margin: 0 0 16px;
          letter-spacing: -.03em;
        }
        .pillar-card p {
          color: ${navy};
          margin: 0;
          font-size: clamp(19px, 3.8vw, 27px);
          line-height: 1.45;
        }
        .final { padding-bottom: 110px; }
        @media (min-width: 820px) {
          .hero { padding-top: 110px; }
          .grid { grid-template-columns: repeat(3, 1fr); }
          .two-grid { grid-template-columns: repeat(2, 1fr); }
          .pillar-card { padding: 42px 34px; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-inner">
          <div className="brand">
            <span className="brand-mark" />
            <div className="brand-name">YOU MADE<br />BETTER</div>
          </div>
          <h1>A meaningful life is built intentionally.</h1>
          <p>
            You Made Better provides a practical structure for reflection, alignment, growth, and purposeful living.
          </p>
          <a className="cta" href="#overview">START YOUR JOURNEY</a>
        </div>
      </section>

      <section className="section" id="overview">
        <div className="inner">
          <p className="kicker">Planning For A Meaningful Life</p>
          <h2>Better does not happen accidentally.</h2>
          <p className="lead">
            A meaningful life is built intentionally through reflection, alignment, courage, honest self-awareness, and practical action. The workbook gives structure to that journey.
          </p>
          <WorkbookImage src="/images/IMG_0431.jpeg" alt="You Made Better planning model with Foundation, Position and Direction" plain />
        </div>
      </section>

      <section className="section gold">
        <div className="inner">
          <p className="kicker" style={{ color: navy }}>The Planning Model</p>
          <h2>Foundation. Position. Direction.</h2>
          <p className="lead">
            The process gives people a simple way to understand who they are, where they are today, and where they are going.
          </p>
          <div className="grid">
            <PillarCard title="Foundation">Clarify what matters most, who you want to become, and the values, roles, purpose, mission, and vision that shape your life.</PillarCard>
            <PillarCard title="Position">Step back and assess your current reality with honesty. Self-awareness creates the starting point for meaningful change.</PillarCard>
            <PillarCard title="Direction">Turn reflection into priorities, goals, strategies, and measurable results that help you move forward with confidence.</PillarCard>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="inner">
          <p className="kicker">How The Plan Builds</p>
          <h2>A practical structure for a meaningful life.</h2>
          <p className="lead">
            Your direction is stronger when it rests on a clear foundation and an honest view of your current position.
          </p>
          <WorkbookImage src="/images/IMG_0429.jpeg" alt="You Made Better structure showing foundation, position and direction" />
        </div>
      </section>

      <section className="section navy">
        <div className="inner">
          <p className="kicker">Whole Person Framework</p>
          <h2>Body. Mind. Heart. Soul.</h2>
          <p className="lead">
            Physical, mental, emotional, and spiritual health are deeply connected. When one area is neglected, the others are affected. When they are aligned, people experience strength, clarity, connection, and meaning.
          </p>
        </div>
      </section>

      <section className="section soft">
        <div className="inner">
          <WorkbookImage src="/images/IMG_0430.jpeg" alt="Body Mind Heart Soul whole person framework" />
        </div>
      </section>

      <section className="section charcoal final">
        <div className="inner">
          <p className="kicker">Start Building Intentionally</p>
          <h2>Clarity changes direction.</h2>
          <p className="lead">
            When people understand who they are, what matters most, and where they are going, life becomes more aligned and decisions become more intentional.
          </p>
          <p className="lead" style={{ marginTop: 28 }}>
            You Made Better provides a practical structure for reflection, growth, accountability, and meaningful progress.
          </p>
          <p className="lead" style={{ marginTop: 28 }}>
            Not just productivity. Not just motivation. A better direction forward.
          </p>
          <div style={{ marginTop: 52 }}>
            <a className="cta" href="mailto:hello@madebettercoaching.ca">BEGIN THE JOURNEY</a>
          </div>
        </div>
      </section>
    </main>
  )
}
