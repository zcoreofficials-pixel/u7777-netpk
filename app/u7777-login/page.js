import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'U7777 Game Login — Fast & Secure Account Access Pakistan',
  description: 'Login to your U7777 Game account in Pakistan. Step by step login guide, forgot password help, and account security tips for Pakistani players.',
  alternates: { canonical: 'https://u7777.net.pk/u7777-login' },
}

export default function LoginPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container">
        <div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> Login</div>
      </div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero"><img src="/images/banner2.webp" alt="U7777 Game Login Pakistan — Secure Account Access JazzCash EasyPaisa" title="U7777 Login Pakistan" width="800" height="200" style={{ width: "100%", borderRadius: "12px", marginBottom: "24px", objectFit: "cover" }} />
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>U7777 Game Login — Account Access Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Access your U7777 account quickly and securely. Works on Android app and mobile browser.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <Link href="/play" className="btn btn-primary">Login to U7777</Link>
            <Link href="/u7777-register" className="btn btn-outline">New? Register Here</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>How to Login to U7777</h2>
          <p>Logging into your U7777 account is straightforward whether you are using the Android app or the website on your browser.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
            {[
              { step: '1', title: 'Open U7777 App or Website', desc: 'Launch the U7777 app from your home screen or open u7777.net.pk in your mobile browser.' },
              { step: '2', title: 'Tap the Login Button', desc: 'On the main screen you will see a Login button at the top right. Tap it to open the login form.' },
              { step: '3', title: 'Enter Phone Number and Password', desc: 'Type your registered Pakistani mobile number in 03XXXXXXXXX format and your password.' },
              { step: '4', title: 'Complete OTP Verification', desc: 'If U7777 asks for OTP verification, check your SMS for a 6 digit code and enter it within 60 seconds.' },
              { step: '5', title: 'You Are In', desc: 'After successful login you will see your wallet balance and game lobby. If login fails double check your phone number and password.' },
            ].map((item) => (
              <div className="card" key={item.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="step-number" style={{ flexShrink: 0 }}>{item.step}</div>
                <div><h3 style={{ marginTop: 0 }}>{item.title}</h3><p style={{ marginBottom: 0 }}>{item.desc}</p></div>
              </div>
            ))}
          </div>
          <h2>Login Not Working? Common Fixes</h2>
          <div className="info-box"><strong>Wrong Password?</strong> Passwords are case sensitive. Use Forgot Password to reset via OTP.</div>
          <div className="info-box"><strong>Wrong Number Format?</strong> Use 03XXXXXXXXX format — not +923XXXXXXXXX.</div>
          <div className="info-box"><strong>App Needs Update?</strong> Download the latest APK from this site and reinstall.</div>
          <div className="warning-box">⚠️ Never share your password or OTP with anyone. U7777 support will never ask for these.</div>
          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/play" className="btn btn-primary">Login Now</Link>
            <Link href="/u7777-forgot-password" className="btn btn-outline">Forgot Password?</Link>
          </div>
          <div className="related-pages" style={{ marginTop: '48px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '14px', textTransform: 'uppercase' }}>Related Pages</h3>
            <div className="related-grid">
              {[['Register', '/u7777-register'], ['Forgot Password', '/u7777-forgot-password'], ['App Download', '/u7777-download-page'], ['Deposit', '/u7777-deposit'], ['Troubleshooting', '/u7777-troubleshooting'], ['FAQ', '/u7777-faq']].map(([label, href]) => (
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
