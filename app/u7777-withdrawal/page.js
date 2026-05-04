import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'U7777 Game Withdrawal — How to Cash Out Pakistan',
  description: 'How to withdraw money from U7777 Game in Pakistan. JazzCash and EasyPaisa withdrawal guide, minimum PKR 310, processing time and troubleshooting.',
  alternates: { canonical: 'https://u7777.net.pk/u7777-withdrawal' },
}

export default function WithdrawalPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container">
        <div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> Withdrawal</div>
      </div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero">
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>U7777 Withdrawal — Cash Out to JazzCash & EasyPaisa</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Withdraw your U7777 winnings directly to JazzCash, EasyPaisa or bank account. Minimum PKR 310.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Withdraw Now</Link>
            <Link href="/u7777-deposit" className="btn btn-outline">Deposit Guide</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>How to Withdraw from U7777</h2>
          <p>Cashing out your U7777 winnings is simple. The money goes directly to your JazzCash or EasyPaisa wallet within minutes.</p>
          <div className="cards-grid" style={{ gridTemplateColumns: '1fr', gap: '16px', marginTop: '16px' }}>
            {[
              { step: '1', title: 'Open U7777 and Go to Wallet', desc: 'Login to your account and tap the Wallet section from the main navigation.' },
              { step: '2', title: 'Tap Withdraw', desc: 'Select Withdraw from the wallet menu options.' },
              { step: '3', title: 'Choose Payment Method', desc: 'Select JazzCash, EasyPaisa, or Bank Transfer as your withdrawal destination.' },
              { step: '4', title: 'Enter Your Account Details', desc: 'Enter your JazzCash or EasyPaisa phone number. Make sure it matches the name on your U7777 account.' },
              { step: '5', title: 'Enter Withdrawal Amount', desc: 'Type the amount you want to withdraw. Minimum is PKR 310 and maximum is PKR 49,500 per transaction.' },
              { step: '6', title: 'Confirm with Password', desc: 'Enter your withdrawal password or set one if you have not already. Tap Confirm Withdraw and money arrives in minutes.' },
            ].map((item) => (
              <div className="card" key={item.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="step-number" style={{ flexShrink: 0 }}>{item.step}</div>
                <div><h3 style={{ marginTop: 0 }}>{item.title}</h3><p style={{ marginBottom: 0 }}>{item.desc}</p></div>
              </div>
            ))}
          </div>
          <h2>Withdrawal Limits</h2>
          <div className="info-box">
            <strong>Minimum Withdrawal:</strong> PKR 310<br />
            <strong>Maximum Per Transaction:</strong> PKR 49,500<br />
            <strong>Processing Time:</strong> 5-10 minutes for JazzCash/EasyPaisa<br />
            <strong>Bank Transfer:</strong> Up to 24 hours
          </div>
          <h2>Withdrawal Not Received?</h2>
          <p>If your withdrawal has not arrived after 30 minutes contact U7777 support with your withdrawal ID, amount, destination number, and time of request.</p>
          <div className="warning-box">⚠️ Make sure your JazzCash or EasyPaisa number is active and can receive money. Inactive wallets will cause withdrawal failures.</div>
          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Withdraw Now</Link>
            <Link href="/u7777-troubleshooting" className="btn btn-outline">Fix Withdrawal Issues</Link>
          </div>
          <div className="related-pages" style={{ marginTop: '48px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '14px', textTransform: 'uppercase' }}>Related Pages</h3>
            <div className="related-grid">
              {[['Deposit', '/u7777-deposit'], ['Bonus', '/u7777-bonus'], ['Verification', '/u7777-verification'], ['Troubleshooting', '/u7777-troubleshooting'], ['FAQ', '/u7777-faq'], ['Contact', '/u7777-contact']].map(([label, href]) => (
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
