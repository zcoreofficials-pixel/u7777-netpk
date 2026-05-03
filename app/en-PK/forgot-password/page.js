import Link from 'next/link'
import Header from '../../../src/components/Header'
import Footer from '../../../src/components/Footer'
export const metadata = {
  title: 'U7777 Password Reset — Account Recovery Pakistan',
  description: 'Forgot your U7777 Game password? Complete password reset guide for Pakistan. OTP verification, new password setup and account recovery steps.',
  alternates: { canonical: 'https://u7777.net.pk/en-PK/forgot-password' },
}
export default function ForgotPasswordPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container"><div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> <Link href="/en-PK/U7777-Login">Login</Link> <span>›</span> Forgot Password</div></div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero">
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>U7777 Password Reset — Account Recovery Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Forgot your U7777 password? Recover your account in 2 minutes using your phone number.</p>
          <Link href="/go" className="btn btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>Reset Password Now</Link>
        </div>
        <div className="page-content">
          <h2>How to Reset Your U7777 Password</h2>
          <div className="cards-grid" style={{ gridTemplateColumns: '1fr', gap: '16px', marginTop: '16px' }}>
            {[
              { step: '1', title: 'Open U7777 Login Screen', desc: 'Launch the U7777 app and go to the login screen. Do not enter any details yet.' },
              { step: '2', title: 'Tap Forgot Password', desc: 'Below the login form find and tap the Forgot Password link.' },
              { step: '3', title: 'Enter Your Phone Number', desc: 'Enter the mobile number you used when registering in 03XXXXXXXXX format.' },
              { step: '4', title: 'Receive OTP', desc: 'U7777 sends a 6 digit OTP to your registered phone number via SMS. Check your messages.' },
              { step: '5', title: 'Enter OTP', desc: 'Type the OTP in the verification field within 60 seconds. If it expires tap Resend OTP.' },
              { step: '6', title: 'Set New Password', desc: 'Create a new password with at least 8 characters. Confirm it and tap Save. You can now login with your new password.' },
            ].map((item) => (
              <div className="card" key={item.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="step-number" style={{ flexShrink: 0 }}>{item.step}</div>
                <div><h3 style={{ marginTop: 0 }}>{item.title}</h3><p style={{ marginBottom: 0 }}>{item.desc}</p></div>
              </div>
            ))}
          </div>
          <h2>OTP Not Received?</h2>
          <div className="info-box">Check your phone signal. OTP SMS requires active network. Wait 60 seconds then tap Resend. If still not received try switching between WiFi and mobile data then request again.</div>
          <h2>Cannot Recover Account?</h2>
          <p>If you no longer have access to your registered phone number contact U7777 support directly via live chat in the app or email support@u7777.net.pk with proof of account ownership.</p>
          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Go to Login</Link>
            <Link href="/en-PK/contact" className="btn btn-outline">Contact Support</Link>
          </div>
        </div>
      </div>
      <Footer lang="en-PK" />
    </>
  )
}
