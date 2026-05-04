import Link from 'next/link'
import Header from '../../../src/components/Header'
import Footer from '../../../src/components/Footer'
export const metadata = {
  title: 'U7777 Game iPhone — How to Play on iOS Pakistan',
  description: 'How to play U7777 Game on iPhone in Pakistan. Browser access guide, add to home screen, iOS limitations and best experience tips.',
  alternates: { canonical: 'https://u7777.net.pk/u7777-ios' },
}
export default function IosPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container"><div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> iOS Guide</div></div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero">
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>U7777 Game on iPhone — iOS Guide Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>iPhone users can play U7777 through Safari browser. Here is the complete guide.</p>
          <Link href="/go" className="btn btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>Open U7777 on iPhone</Link>
        </div>
        <div className="page-content">
          <div className="info-box"><strong>Important:</strong> U7777 does not have an official iOS app on the App Store. iPhone users access it through Safari browser as a web app.</div>
          <h2>How to Use U7777 on iPhone</h2>
          <div className="cards-grid" style={{ gridTemplateColumns: '1fr', gap: '16px', marginTop: '16px' }}>
            {[
              { step: '1', title: 'Open Safari Browser', desc: 'On your iPhone open the Safari browser. Do not use Chrome or other browsers as they have limitations with web apps.' },
              { step: '2', title: 'Go to u7777.net.pk', desc: 'Type u7777.net.pk in the Safari address bar and go to the website. The site is mobile optimised and works well on iPhone screens.' },
              { step: '3', title: 'Add to Home Screen', desc: 'Tap the Share button (the box with an arrow at the bottom of Safari), scroll down and tap Add to Home Screen. Name it U7777 and tap Add.' },
              { step: '4', title: 'Launch Like an App', desc: 'Now U7777 appears on your iPhone home screen like a normal app. Tap it to open directly without typing the URL every time.' },
            ].map((item) => (
              <div className="card" key={item.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="step-number" style={{ flexShrink: 0 }}>{item.step}</div>
                <div><h3 style={{ marginTop: 0 }}>{item.title}</h3><p style={{ marginBottom: 0 }}>{item.desc}</p></div>
              </div>
            ))}
          </div>
          <h2>iOS Limitations vs Android</h2>
          <ul>
            <li>No dedicated app — browser only</li>
            <li>Push notifications may not work</li>
            <li>Some games may load slightly slower than Android app</li>
            <li>Adding to home screen partially mimics app experience</li>
          </ul>
          <p>For the best U7777 experience in Pakistan we recommend using an Android device with the dedicated APK installed.</p>
          <div style={{ marginTop: '40px' }}>
            <Link href="/u7777-download" className="btn btn-download">Android App Guide</Link>
          </div>
        </div>
      </div>
      <Footer lang="en-PK" />
    </>
  )
}
