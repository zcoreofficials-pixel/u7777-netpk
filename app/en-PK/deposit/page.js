import Link from 'next/link'
import Header from '../../../src/components/Header'
import Footer from '../../../src/components/Footer'

export const metadata = {
  title: 'U7777 Game Deposit — JazzCash & EasyPaisa Guide Pakistan',
  description: 'How to deposit money in U7777 Game Pakistan via JazzCash and EasyPaisa. Minimum PKR 100 deposit. Step by step guide with troubleshooting tips.',
  alternates: { canonical: 'https://u7777.net.pk/en-PK/deposit' },
}

export default function DepositPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container">
        <div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> Deposit</div>
      </div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero">
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>U7777 Deposit — Add Money via JazzCash & EasyPaisa</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Deposit as little as PKR 100 and start playing instantly. JazzCash and EasyPaisa supported.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Deposit Now</Link>
            <Link href="/en-PK/withdrawal" className="btn btn-outline">Withdrawal Guide</Link>
          </div>
        </div>
        <div className="page-content">
          <div className="payment-bar" style={{ marginBottom: '32px' }}>
            <span className="payment-label">Methods:</span>
            <div className="payment-badges">
              <span className="payment-badge jazzcash">💳 JazzCash</span>
              <span className="payment-badge easypaisa">💚 EasyPaisa</span>
              <span className="payment-badge bank">🏦 Bank Transfer</span>
            </div>
          </div>
          <h2>How to Deposit via JazzCash</h2>
          <p>JazzCash is the most popular deposit method for U7777 players in Pakistan. Here is the complete step by step process.</p>
          <div className="cards-grid" style={{ gridTemplateColumns: '1fr', gap: '16px', marginTop: '16px' }}>
            {[
              { step: '1', title: 'Login to U7777', desc: 'Open the U7777 app and login to your account.' },
              { step: '2', title: 'Go to Wallet', desc: 'Tap the Wallet or Balance section from the main menu.' },
              { step: '3', title: 'Select Deposit', desc: 'Tap Deposit then choose JazzCash as your payment method.' },
              { step: '4', title: 'Note the Merchant Number', desc: 'U7777 shows you a JazzCash merchant number. Copy or note it down carefully.' },
              { step: '5', title: 'Send Money via JazzCash', desc: 'Open your JazzCash app, go to Send Money, enter the merchant number and the amount you want to deposit (minimum PKR 100).' },
              { step: '6', title: 'Enter Transaction ID', desc: 'After sending, JazzCash gives you a Transaction ID. Go back to U7777 and enter this ID to confirm your deposit. Balance updates instantly.' },
            ].map((item) => (
              <div className="card" key={item.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="step-number" style={{ flexShrink: 0 }}>{item.step}</div>
                <div><h3 style={{ marginTop: 0 }}>{item.title}</h3><p style={{ marginBottom: 0 }}>{item.desc}</p></div>
              </div>
            ))}
          </div>
          <h2>How to Deposit via EasyPaisa</h2>
          <p>EasyPaisa deposits work the same way as JazzCash. Select EasyPaisa in the deposit section, get the merchant number, send money from your EasyPaisa app, and enter the Transaction ID in U7777.</p>
          <h2>Deposit Limits</h2>
          <div className="info-box">
            <strong>Minimum Deposit:</strong> PKR 100<br />
            <strong>Maximum Deposit:</strong> PKR 50,000 per transaction<br />
            <strong>Processing Time:</strong> Instant after Transaction ID entry<br />
            <strong>Daily Limit:</strong> No daily limit on deposits
          </div>
          <h2>Deposit Not Showing? Fix It</h2>
          <div className="warning-box">⚠️ If your deposit does not show after 10 minutes, contact U7777 support with your Transaction ID, amount, time of deposit, and your registered phone number. Keep your JazzCash receipt as proof.</div>
          <h2>First Deposit Bonus</h2>
          <p>Your very first deposit on U7777 automatically gets a 50% bonus. Deposit PKR 100 and play with PKR 150. This bonus is credited within seconds of your first deposit.</p>
          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Deposit Now</Link>
            <Link href="/en-PK/bonus" className="btn btn-outline">View All Bonuses</Link>
          </div>
          <div className="related-pages" style={{ marginTop: '48px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '14px', textTransform: 'uppercase' }}>Related Pages</h3>
            <div className="related-grid">
              {[['Withdrawal', '/en-PK/withdrawal'], ['Bonus', '/en-PK/bonus'], ['Promo Codes', '/en-PK/promo'], ['Referral', '/en-PK/referral'], ['Troubleshooting', '/en-PK/troubleshooting'], ['FAQ', '/en-PK/faq']].map(([label, href]) => (
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
