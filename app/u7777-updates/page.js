import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
export const metadata = {
  title: `U7777 Game Update — Latest Version Pakistan ${new Date().toLocaleDateString('en-PK', { month: 'long', year: 'numeric' })}`,
  description: 'U7777 Game latest update Pakistan. New features, bug fixes, version history and how to update your U7777 app to the latest version.',
  alternates: { canonical: 'https://u7777.net.pk/u7777-updates' },
}
export default function UpdatesPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  const currentMonth = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container"><div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> Latest Update</div></div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero">
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>U7777 Game Latest Update — {currentMonth}</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Stay up to date with the latest U7777 app version, new features and improvements for Pakistani players.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-download">Download Latest Version</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>Latest U7777 Version — {currentMonth}</h2>
          <div className="info-box">
            <strong>Current Version:</strong> 2026 Latest Build<br />
            <strong>Release Date:</strong> {lastUpdated}<br />
            <strong>Size:</strong> ~45MB<br />
            <strong>Platform:</strong> Android 5.0+
          </div>
          <h2>What is New in the Latest Update</h2>
          <ul>
            <li>Improved JazzCash and EasyPaisa deposit processing speed</li>
            <li>New slot games added from JILI and FunTa providers</li>
            <li>Better performance on budget Android phones</li>
            <li>Fixed login issues some users were experiencing</li>
            <li>Updated sports betting odds for cricket matches</li>
            <li>Improved withdrawal verification process</li>
            <li>UI improvements for easier navigation</li>
          </ul>
          <h2>How to Update U7777</h2>
          <div className="cards-grid" style={{ gridTemplateColumns: '1fr', gap: '12px', marginTop: '16px' }}>
            {[
              { step: '1', title: 'Check Current Version', desc: 'Open U7777 app, go to Profile > About to see your current version number.' },
              { step: '2', title: 'Download Latest APK', desc: 'Come back to this page and download the latest APK using the button above.' },
              { step: '3', title: 'Install Over Existing App', desc: 'Install the new APK without uninstalling the old one. Your account data and balance will be preserved.' },
              { step: '4', title: 'Login Again', desc: 'After update you may need to login again. Your account and balance remain exactly as they were.' },
            ].map((item) => (
              <div className="card" key={item.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="step-number" style={{ flexShrink: 0 }}>{item.step}</div>
                <div><h3 style={{ marginTop: 0 }}>{item.title}</h3><p style={{ marginBottom: 0 }}>{item.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="success-box" style={{ marginTop: '24px' }}>✅ Always update to the latest version for the best performance and newest games. Updates are free and your account balance is never affected.</div>
          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-download">Download Latest APK</Link>
            <Link href="/u7777-download" className="btn btn-outline">App Download Guide</Link>
          </div>
          <div className="related-pages" style={{ marginTop: '48px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '14px', textTransform: 'uppercase' }}>Related Pages</h3>
            <div className="related-grid">
              {[['App Download', '/u7777-download'], ['APK Guide', '/u7777-apk'], ['Troubleshooting', '/u7777-troubleshooting'], ['How to Play', '/u7777-how-to-play'], ['FAQ', '/u7777-faq'], ['Casino Games', '/u7777-casino']].map(([label, href]) => (
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
