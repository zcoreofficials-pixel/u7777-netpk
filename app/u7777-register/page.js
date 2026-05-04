import Link from 'next/link'
import Header from '../../../src/components/Header'
import Footer from '../../../src/components/Footer'

export const metadata = {
  title: 'U7777 Game Register — Create Account Pakistan 2026',
  description: 'Create your U7777 Game account in Pakistan. Free registration, phone number signup, OTP verification and claim your 50% welcome bonus instantly.',
  alternates: { canonical: 'https://u7777.net.pk/u7777-register' },
}

export default function RegisterPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container">
        <div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> Register</div>
      </div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero"><img src="/images/banner3.webp" alt="U7777 Game Register Pakistan — Create Account Free 50% Welcome Bonus JazzCash EasyPaisa" title="U7777 Register Pakistan" width="800" height="200" style={{ width: "100%", borderRadius: "12px", marginBottom: "24px", objectFit: "cover" }} />
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>U7777 Game Register — Create Your Account</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Sign up in 2 minutes and claim your 50% welcome bonus on first deposit.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <Link href="/play" className="btn btn-primary">Register & Play Now</Link>
            <Link href="/u7777-login" className="btn btn-outline">Already Have Account?</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>How to Register on U7777</h2>
          <p>Creating a U7777 account is completely free and takes about 2 minutes. You only need a Pakistani mobile number to get started.</p>
          <div className="cards-grid" style={{ gridTemplateColumns: '1fr', gap: '16px', marginTop: '24px' }}>
            {[
              { step: '1', title: 'Download the App', desc: 'First download the U7777 APK from this website. Open the app after installation.' },
              { step: '2', title: 'Tap Register', desc: 'On the welcome screen tap Register or Sign Up button to open the registration form.' },
              { step: '3', title: 'Enter Phone Number', desc: 'Enter your Pakistani mobile number in 03XXXXXXXXX format. This will be your username.' },
              { step: '4', title: 'Set a Password', desc: 'Create a strong password with at least 8 characters mixing letters and numbers. Remember it or save it safely.' },
              { step: '5', title: 'Verify with OTP', desc: 'U7777 sends a 6 digit OTP to your phone. Enter it within 60 seconds to verify your number.' },
              { step: '6', title: 'Claim Welcome Bonus', desc: 'Make your first deposit via JazzCash or EasyPaisa and your 50% welcome bonus is credited automatically.' },
            ].map((item) => (
              <div className="card" key={item.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="step-number" style={{ flexShrink: 0 }}>{item.step}</div>
                <div><h3 style={{ marginTop: 0 }}>{item.title}</h3><p style={{ marginBottom: 0 }}>{item.desc}</p></div>
              </div>
            ))}
          </div>
          <h2>What You Need to Register</h2>
          <ul>
            <li>A Pakistani mobile number (Jazz, Zong, Telenor, Ufone, or Warid)</li>
            <li>A working internet connection (3G, 4G, or WiFi)</li>
            <li>Android phone with U7777 app installed</li>
            <li>Age 18 or above</li>
          </ul>
          <h2>Registration Problems and Fixes</h2>
          <div className="info-box"><strong>OTP Not Received?</strong> Wait 60 seconds then tap Resend OTP. Make sure your phone has signal and SMS is not blocked.</div>
          <div className="info-box"><strong>Number Already Registered?</strong> Your number may already have an account. Try the Login page or use Forgot Password to recover it.</div>
          <div className="info-box"><strong>App Crashes During Registration?</strong> Clear the app cache, restart it, and try again. Make sure you have the latest version.</div>
          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Register Now</Link>
            <Link href="/u7777-download" className="btn btn-download">Download App First</Link>
          </div>
          <div className="related-pages" style={{ marginTop: '48px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '14px', textTransform: 'uppercase' }}>Related Pages</h3>
            <div className="related-grid">
              {[['Login', '/u7777-login'], ['App Download', '/u7777-download'], ['Deposit', '/u7777-deposit'], ['Bonus', '/u7777-bonus'], ['Verification', '/u7777-verification'], ['FAQ', '/u7777-faq']].map(([label, href]) => (
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
