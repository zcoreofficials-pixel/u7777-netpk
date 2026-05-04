import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'U7777 Game App Download — Android APK Pakistan 2026',
  description: 'Download U7777 Game APK for Android in Pakistan. Free official download, step by step install guide, enable unknown sources, and start earning via JazzCash.',
  alternates: { canonical: 'https://u7777.net.pk/u7777-download' },
}

export default function AppPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container">
        <div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> App Download</div>
      </div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero"><img src="/images/banner1.webp" alt="U7777 Game APK Download Pakistan — Free Android App JazzCash EasyPaisa Real Money" title="U7777 Game Download Pakistan" width="800" height="200" style={{ width: "100%", borderRadius: "12px", marginBottom: "24px", objectFit: "cover" }} />
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>U7777 Game App Download — Android APK Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Free official APK download for all Android phones in Pakistan. Works on Android 5.0 or higher.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <Link href="/play" className="btn btn-download">📱 Download APK Now</Link>
            <Link href="/u7777-register" className="btn btn-primary">Create Account</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>How to Download U7777 on Android</h2>
          <p>U7777 Game is not available on Google Play Store — this is normal for earning apps in Pakistan. You download it directly as an APK file from this official page. The process is simple and takes under 5 minutes.</p>
          <div className="info-box"><strong>📱 App Details</strong><br />Version: Latest 2026 · Size: ~45MB · Android: 5.0+ · Language: English and Urdu</div>
          <h2>Step by Step Installation Guide</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
            {[
              { step: '1', title: 'Download the APK File', desc: 'Tap the Download APK button on this page. Your browser will download the U7777 APK file directly to your phone.' },
              { step: '2', title: 'Enable Unknown Sources', desc: 'Go to Settings > Security > enable Unknown Sources. This is a one time setting that allows APK installation.' },
              { step: '3', title: 'Find the Downloaded File', desc: 'Open your notification panel or File Manager and find the downloaded APK file.' },
              { step: '4', title: 'Install the App', desc: 'Tap Install on the installation screen. The installation takes about 30 seconds.' },
              { step: '5', title: 'Open U7777 and Register', desc: 'Tap Open, tap Register, enter your mobile number, create a password, verify with OTP and start playing.' },
            ].map((item) => (
              <div className="card" key={item.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="step-number" style={{ flexShrink: 0 }}>{item.step}</div>
                <div><h3 style={{ marginTop: 0 }}>{item.title}</h3><p style={{ marginBottom: 0 }}>{item.desc}</p></div>
              </div>
            ))}
          </div>
          <h2>Minimum Requirements</h2>
          <div className="info-box">
            <strong>Android Version:</strong> 5.0 or higher<br />
            <strong>Storage Space:</strong> 50MB free space<br />
            <strong>RAM:</strong> 1GB minimum<br />
            <strong>Internet:</strong> 3G, 4G, or WiFi<br />
            <strong>Compatible:</strong> Samsung, Oppo, Vivo, Infinix, Tecno, Huawei, Xiaomi
          </div>
          <div className="success-box">✅ Always download from the official U7777 website only. Never install from unknown Telegram links.</div>
          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/play" className="btn btn-download">📱 Download APK</Link>
            <Link href="/u7777-register" className="btn btn-primary">Register Now</Link>
          </div>
          <div className="related-pages" style={{ marginTop: '48px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '14px', textTransform: 'uppercase' }}>Related Pages</h3>
            <div className="related-grid">
              {[['APK Guide', '/u7777-apk'], ['iOS Guide', '/u7777-ios'], ['PC Guide', '/u7777-pc'], ['How to Play', '/u7777-how-to-play'], ['Login', '/u7777-login'], ['Register', '/u7777-register']].map(([label, href]) => (
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
