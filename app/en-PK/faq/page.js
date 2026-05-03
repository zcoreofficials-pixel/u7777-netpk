import Link from 'next/link'
import Header from '../../../src/components/Header'
import Footer from '../../../src/components/Footer'

export const metadata = {
  title: 'U7777 Game FAQ — All Questions Answered Pakistan',
  description: 'Complete FAQ for U7777 Game Pakistan. Answers about download, login, JazzCash deposit, EasyPaisa withdrawal, bonuses and games.',
  alternates: { canonical: 'https://u7777.net.pk/en-PK/faq' },
}

export default function FAQPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container">
        <div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> FAQ</div>
      </div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero">
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>U7777 Game FAQ — All Questions Answered</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Complete answers to every question Pakistani players ask about U7777 Game.</p>
        </div>
        <div className="page-content" style={{ maxWidth: '100%' }}>
          <h2>Download and App</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
            <details style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '18px 22px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: '600', color: 'var(--color-white)' }}>How do I download U7777 Game in Pakistan?</summary>
              <p style={{ marginTop: '12px', color: 'var(--color-text-muted)' }}>Visit u7777.net.pk and tap the Download APK button. Enable Unknown Sources in your Android settings then install the APK file. Takes under 5 minutes.</p>
            </details>
            <details style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '18px 22px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: '600', color: 'var(--color-white)' }}>Why is U7777 not on Google Play Store?</summary>
              <p style={{ marginTop: '12px', color: 'var(--color-text-muted)' }}>Earning and casino apps are not allowed on Google Play Store in Pakistan. The official APK from u7777.net.pk is completely safe to install directly.</p>
            </details>
            <details style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '18px 22px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: '600', color: 'var(--color-white)' }}>Which Android version does U7777 support?</summary>
              <p style={{ marginTop: '12px', color: 'var(--color-text-muted)' }}>U7777 works on Android 5.0 and higher. This covers almost all Android phones sold in Pakistan.</p>
            </details>
          </div>
          <h2>Account</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
            <details style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '18px 22px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: '600', color: 'var(--color-white)' }}>How do I create a U7777 account?</summary>
              <p style={{ marginTop: '12px', color: 'var(--color-text-muted)' }}>Download the app, tap Register, enter your Pakistani mobile number, create a password, verify with OTP, and your account is ready in 2 minutes.</p>
            </details>
            <details style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '18px 22px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: '600', color: 'var(--color-white)' }}>I forgot my U7777 password. What do I do?</summary>
              <p style={{ marginTop: '12px', color: 'var(--color-text-muted)' }}>On the login screen tap Forgot Password. Enter your registered phone number, receive an OTP, enter it, and create a new password.</p>
            </details>
            <details style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '18px 22px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: '600', color: 'var(--color-white)' }}>Can I have two U7777 accounts?</summary>
              <p style={{ marginTop: '12px', color: 'var(--color-text-muted)' }}>No. U7777 allows only one account per person. Multiple accounts result in permanent ban and loss of all funds.</p>
            </details>
          </div>
          <h2>Payments</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
            <details style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '18px 22px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: '600', color: 'var(--color-white)' }}>What is the minimum deposit in U7777?</summary>
              <p style={{ marginTop: '12px', color: 'var(--color-text-muted)' }}>The minimum deposit is PKR 100 via JazzCash or EasyPaisa.</p>
            </details>
            <details style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '18px 22px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: '600', color: 'var(--color-white)' }}>What is the minimum withdrawal in U7777?</summary>
              <p style={{ marginTop: '12px', color: 'var(--color-text-muted)' }}>The minimum withdrawal amount is PKR 310. You can withdraw up to PKR 49,500 per transaction.</p>
            </details>
            <details style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '18px 22px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: '600', color: 'var(--color-white)' }}>How long does JazzCash withdrawal take?</summary>
              <p style={{ marginTop: '12px', color: 'var(--color-text-muted)' }}>JazzCash withdrawals typically complete within 5 to 10 minutes.</p>
            </details>
            <details style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '18px 22px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: '600', color: 'var(--color-white)' }}>My deposit is not showing in U7777. What should I do?</summary>
              <p style={{ marginTop: '12px', color: 'var(--color-text-muted)' }}>Wait 10 minutes first. If still not showing contact support with your JazzCash Transaction ID, amount, time of transfer, and your registered phone number.</p>
            </details>
          </div>
          <h2>Bonus and Games</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
            <details style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '18px 22px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: '600', color: 'var(--color-white)' }}>What is the U7777 welcome bonus?</summary>
              <p style={{ marginTop: '12px', color: 'var(--color-text-muted)' }}>New players get 50% extra on their first deposit. Deposit PKR 100 get PKR 50 free. Credited automatically — no promo code needed.</p>
            </details>
            <details style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '18px 22px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: '600', color: 'var(--color-white)' }}>What games are available on U7777?</summary>
              <p style={{ marginTop: '12px', color: 'var(--color-text-muted)' }}>U7777 has 500+ games including Teen Patti, Dragon Tiger, slots, fishing games, Ludo, Rummy, Blackjack, Aviator, and live sports betting on cricket and football.</p>
            </details>
            <details style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '18px 22px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: '600', color: 'var(--color-white)' }}>Is U7777 safe to use in Pakistan?</summary>
              <p style={{ marginTop: '12px', color: 'var(--color-text-muted)' }}>U7777 uses encrypted transactions and OTP verification. Always download from the official u7777.net.pk website only to avoid fake versions.</p>
            </details>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Join U7777 Now</Link>
            <Link href="/en-PK/contact" className="btn btn-outline">Contact Support</Link>
          </div>
          <div className="related-pages" style={{ marginTop: '48px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '14px', textTransform: 'uppercase' }}>Related Pages</h3>
            <div className="related-grid">
              {[['Troubleshooting', '/en-PK/troubleshooting'], ['Contact', '/en-PK/contact'], ['App Download', '/en-PK/app'], ['Deposit', '/en-PK/deposit'], ['Withdrawal', '/en-PK/withdrawal'], ['Bonus', '/en-PK/bonus']].map(([label, href]) => (
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
