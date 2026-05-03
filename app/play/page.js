export const metadata = {
  title: 'Redirecting to U7777 Game...',
  robots: { index: false, follow: false },
}

export default function PlayPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=https://u7777.net.pk/go" />
        <title>Redirecting to U7777...</title>
      </head>
      <body style={{ background: '#0a0e1a', color: '#e5e7eb', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', margin: 0, flexDirection: 'column', gap: '16px' }}>
        <div style={{ fontSize: '48px' }}>🎮</div>
        <h1 style={{ fontSize: '24px', color: '#f59e0b' }}>Taking you to U7777...</h1>
        <p style={{ color: '#9ca3af' }}>Please wait while we redirect you to the official U7777 game.</p>
        <a href="https://u7777official.com" style={{ background: '#f59e0b', color: '#000', padding: '12px 24px', borderRadius: '6px', fontWeight: '700', textDecoration: 'none' }}>Click here if not redirected</a>
      </body>
    </html>
  )
}
