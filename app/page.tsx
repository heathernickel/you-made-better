export default function Home() {
  return (
    <main style={{ background: '#f3f3f3', color: '#111', fontFamily: 'Arial, sans-serif' }}>
      <section
        style={{
          minHeight: '100vh',
          backgroundImage:
            "linear-gradient(rgba(7,43,39,.72), rgba(7,43,39,.72)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '32px 24px',
          textAlign: 'center',
          color: 'white',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            right: 20,
            background: '#0b4b42',
            borderRadius: 16,
            padding: '18px 22px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 18 }}>YOU MADE BETTER</div>
          <div style={{ fontSize: 28 }}>☰</div>
        </div>

        <div style={{ maxWidth: 760, marginTop: 80 }}>
          <h1
            style={{
              fontSize: 'clamp(42px, 8vw, 76px)',
              lineHeight: 1.05,
              marginBottom: 24,
              fontWeight: 700
            }}
          >
            Build A Meaningful Life With Clarity And Direction.
          </h1>

          <p
            style={{
              fontSize: 'clamp(20px, 3vw, 32px)',
              lineHeight: 1.5,
              color: 'rgba(255,255,255,.92)',
              marginBottom: 36
            }}
          >
            A guided personal growth framework focused on purpose, alignment, relationships, health, and intentional living.
          </p>

          <button
            style={{
              background: '#ff5a1f',
              border: 'none',
              color: 'white',
              padding: '22px 34px',
              borderRadius: 999,
              fontSize: 22,
              fontWeight: 700,
              width: '100%',
              maxWidth: 720
            }}
          >
            START YOUR JOURNEY
          </button>
        </div>
      </section>

      <section style={{ padding: '90px 22px', textAlign: 'center' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(40px, 7vw, 64px)', marginBottom: 26 }}>
            The You Made Better Framework
          </h2>

          <p
            style={{
              fontSize: 'clamp(22px, 3vw, 30px)',
              lineHeight: 1.6,
              color: '#333'
            }}
          >
            Most people drift through life reacting instead of intentionally building. This framework helps you step back, assess where you are, and create a practical vision for where you want to go.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 18px 90px' }}>
        {[
          ['STEP 1', 'Foundation', 'Clarify your purpose, values, temperament, relationships, priorities, and vision for life.'],
          ['STEP 2', 'Position', 'Honestly assess your current reality through strengths, weaknesses, opportunities, and barriers.'],
          ['STEP 3', 'Direction', 'Build a practical action plan for your health, relationships, work, finances, faith, and future.']
        ].map(([step, title, text]) => (
          <div
            key={title}
            style={{
              background: '#ececec',
              borderRadius: 34,
              padding: '60px 28px',
              maxWidth: 980,
              margin: '0 auto 28px',
              textAlign: 'center',
              boxShadow: '0 12px 40px rgba(0,0,0,.06)'
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>{step}</div>
            <h3 style={{ fontSize: 'clamp(36px, 6vw, 56px)', marginBottom: 18 }}>{title}</h3>
            <p style={{ fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.6 }}>{text}</p>
          </div>
        ))}
      </section>

      <section
        style={{
          padding: '100px 22px',
          backgroundImage:
            "linear-gradient(rgba(7,43,39,.78), rgba(7,43,39,.78)), url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          color: 'white'
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(42px, 7vw, 68px)', marginBottom: 20 }}>
            Better doesn’t happen accidentally.
          </h2>

          <p style={{ fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 1.6, marginBottom: 34 }}>
            You Made Better gives people a structured process to stop drifting and start living intentionally.
          </p>

          <button
            style={{
              background: '#ff5a1f',
              border: 'none',
              color: 'white',
              padding: '22px 34px',
              borderRadius: 999,
              fontSize: 22,
              fontWeight: 700,
              width: '100%',
              maxWidth: 720
            }}
          >
            SPEAK WITH AN ADVISOR
          </button>
        </div>
      </section>
    </main>
  )
}
