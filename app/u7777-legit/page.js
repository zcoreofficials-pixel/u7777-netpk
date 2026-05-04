import Link from 'next/link'
import Header from '../../../src/components/Header'
import Footer from '../../../src/components/Footer'
export const metadata = {
  title: 'Is U7777 Game Legit? Safe & Trusted Pakistan 2026',
  description: 'Is U7777 Game legit and safe in Pakistan? Honest answer covering payment security, game fairness, user reviews and how to protect yourself.',
  alternates: { canonical: 'https://u7777.net.pk/u7777-legit' },
}
export default function LegitPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container"><div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> Is It Legit?</div></div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero">
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>Is U7777 Game Legit? — Honest Answer for Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>We looked into U7777 thoroughly. Here is the straightforward answer Pakistani players deserve.</p>
        </div>
        <div className="page-content">
          <div className="success-box" style={{ marginBottom: '32px' }}>✅ U7777 is a real platform that processes actual payments via JazzCash and EasyPaisa. Thousands of Pakistani players use it daily and report successful withdrawals.</div>
          <h2>What Makes U7777 Trustworthy</h2>
          <ul>
            <li><strong>Real JazzCash and EasyPaisa transactions</strong> — money actually moves in and out</li>
            <li><strong>Encrypted connections</strong> — your data is protected during all transactions</li>
            <li><strong>OTP verification</strong> — prevents unauthorized access to your account</li>
            <li><strong>Thousands of active users</strong> — large user base with regular withdrawal reports</li>
            <li><strong>Games from certified providers</strong> — JILI, Evolution, and other known game companies</li>
          </ul>
          <h2>How to Stay Safe on U7777</h2>
          <div className="cards-grid" style={{ marginTop: '16px' }}>
            {[
              { icon: '🔒', title: 'Download from Official Site Only', desc: 'Always get the U7777 APK from u7777.net.pk. Fake versions on Telegram or other sites can steal your money.' },
              { icon: '🔑', title: 'Use a Strong Password', desc: 'Create a unique password for U7777. Do not use the same password you use for JazzCash or banking.' },
              { icon: '💰', title: 'Start Small', desc: 'Test the platform with a minimum PKR 100 deposit before putting in larger amounts.' },
              { icon: '📞', title: 'Never Share OTP', desc: 'U7777 support will never ask for your OTP or password. Anyone who does is a scammer.' },
            ].map((item, i) => (
              <div className="card" key={i}><div className="card-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.desc}</p></div>
            ))}
          </div>
          <h2>Important Disclaimer</h2>
          <div className="warning-box">⚠️ Online casino gaming involves real financial risk. Never deposit money you cannot afford to lose. Set strict limits on your time and spending. U7777 is for entertainment — treat it that way.</div>
          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Try U7777</Link>
            <Link href="/u7777-review" className="btn btn-outline">Read Full Review</Link>
          </div>
          <div className="related-pages" style={{ marginTop: '48px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '14px', textTransform: 'uppercase' }}>Related Pages</h3>
            <div className="related-grid">
              {[['Review', '/u7777-review'], ['FAQ', '/u7777-faq'], ['Alternatives', '/u7777-alternatives'], ['Contact', '/u7777-contact'], ['Troubleshooting', '/u7777-troubleshooting'], ['About', '/u7777-about']].map(([label, href]) => (
                <Link key={href} href={href} className="related-link">{label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer lang="en-PK" />
    </>
  )
}
