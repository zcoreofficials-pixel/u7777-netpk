import Link from 'next/link'
import Header from '../../../src/components/Header'
import Footer from '../../../src/components/Footer'
export const metadata = {
  title: 'U7777 Game PC — Play on Computer Pakistan Guide',
  description: 'How to play U7777 Game on PC or laptop in Pakistan. Browser access and Android emulator guide for desktop players.',
  alternates: { canonical: 'https://u7777.net.pk/u7777-pc' },
}
export default function PcPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container"><div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> PC Guide</div></div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero">
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>U7777 Game on PC — Desktop Guide Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Two ways to play U7777 on your computer or laptop in Pakistan.</p>
          <Link href="/go" className="btn btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>Play U7777 Now</Link>
        </div>
        <div className="page-content">
          <h2>Method 1 — Browser (Easiest)</h2>
          <p>Open any browser on your PC and go to u7777.net.pk. The website works on desktop browsers and gives you access to all games and account features without any installation.</p>
          <div className="success-box">✅ Browser method works on any PC or laptop running Windows, Mac or Linux. No installation needed.</div>
          <h2>Method 2 — Android Emulator</h2>
          <p>For the full app experience on PC you can use an Android emulator like BlueStacks. This runs the U7777 Android app on your computer.</p>
          <div className="cards-grid" style={{ gridTemplateColumns: '1fr', gap: '12px', marginTop: '16px' }}>
            {[
              { step: '1', title: 'Download BlueStacks', desc: 'Go to bluestacks.com and download the free Android emulator for Windows or Mac.' },
              { step: '2', title: 'Install BlueStacks', desc: 'Run the installer and follow the setup process. It takes about 5 minutes.' },
              { step: '3', title: 'Download U7777 APK', desc: 'Download the U7777 APK file from u7777.net.pk on your computer.' },
              { step: '4', title: 'Install APK in BlueStacks', desc: 'Double click the APK file or drag it into BlueStacks to install U7777.' },
              { step: '5', title: 'Login and Play', desc: 'Open U7777 inside BlueStacks, login to your account and play with the larger screen.' },
            ].map((item) => (
              <div className="card" key={item.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="step-number" style={{ flexShrink: 0 }}>{item.step}</div>
                <div><h3 style={{ marginTop: 0 }}>{item.title}</h3><p style={{ marginBottom: 0 }}>{item.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="info-box" style={{ marginTop: '24px' }}>💡 For most Pakistani players the browser method is good enough. Use BlueStacks only if you specifically want the app experience on a larger screen.</div>
        </div>
      </div>
      <Footer lang="en-PK" />
    </>
  )
}
