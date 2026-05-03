import Link from 'next/link'
import Header from '../../../src/components/Header'
import Footer from '../../../src/components/Footer'

export const metadata = {
  title: 'U7777 Game Bonus — 50% Welcome Offer Pakistan 2026',
  description: 'U7777 Game bonus offers in Pakistan. 50% welcome bonus on first deposit, daily bonuses, referral rewards and VIP loyalty program. Claim today.',
  alternates: { canonical: 'https://u7777.net.pk/en-PK/bonus' },
}

export default function BonusPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  const currentMonth = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container">
        <div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> Bonus</div>
      </div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero">
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>U7777 Game Bonus — All Offers for Pakistan {currentMonth}</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Claim your 50% welcome bonus plus daily rewards, referral bonuses and VIP loyalty perks.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Claim Bonus Now</Link>
            <Link href="/en-PK/promo" className="btn btn-outline">Promo Codes</Link>
          </div>
        </div>
        <div className="page-content">
          <div className="bonus-box">
            <div className="bonus-amount">50%</div>
            <div className="bonus-label">Welcome Bonus on First Deposit — {currentMonth}</div>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>Automatically credited when you make your first deposit. No code needed.</p>
            <Link href="/go" className="btn btn-primary">Claim Now</Link>
          </div>
          <h2>All U7777 Bonuses in Pakistan</h2>
          <div className="cards-grid" style={{ marginTop: '24px' }}>
            {[
              { icon: '🎁', title: 'Welcome Bonus — 50%', desc: 'New players get 50% extra on their very first deposit. Deposit PKR 100 play with PKR 150. Deposit PKR 1000 play with PKR 1500. Credited automatically.' },
              { icon: '📅', title: 'Daily Login Bonus', desc: 'Log in every day to collect daily bonus coins. The longer your streak the bigger the reward. Missing a day resets your streak so log in daily.' },
              { icon: '👥', title: 'Referral Bonus — PKR 100', desc: 'Invite friends to join U7777 using your referral link. Earn PKR 100 for every friend who registers and makes their first deposit.' },
              { icon: '⭐', title: 'VIP Loyalty Rewards', desc: 'Regular players earn VIP points with every game. Higher VIP levels unlock bigger bonuses, faster withdrawals, and exclusive promotions.' },
              { icon: '💰', title: 'Deposit Bonus', desc: 'Special deposit bonuses run regularly on U7777. Check the promotions section inside the app for current offers which change monthly.' },
              { icon: '🏆', title: 'Tournament Prizes', desc: 'U7777 runs regular slot and card game tournaments with real PKR prize pools. Top players win cash distributed directly to their wallets.' },
            ].map((item, i) => (
              <div className="card" key={i}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <h2>How to Claim Your Welcome Bonus</h2>
          <p>The welcome bonus is automatic — you do not need a promo code. Simply register a new account and make your first deposit via JazzCash or EasyPaisa. The 50% bonus is added to your wallet instantly.</p>
          <div className="success-box">✅ Example: Deposit PKR 500 via JazzCash → U7777 adds PKR 250 bonus → You play with PKR 750 total.</div>
          <h2>Bonus Terms You Should Know</h2>
          <ul>
            <li>Welcome bonus applies to first deposit only</li>
            <li>Bonus funds may have wagering requirements before withdrawal</li>
            <li>One account per player — multiple accounts will be banned</li>
            <li>Bonuses cannot be transferred between accounts</li>
            <li>U7777 reserves the right to modify bonus terms at any time</li>
          </ul>
          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Claim Bonus</Link>
            <Link href="/en-PK/deposit" className="btn btn-outline">How to Deposit</Link>
          </div>
          <div className="related-pages" style={{ marginTop: '48px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '14px', textTransform: 'uppercase' }}>Related Pages</h3>
            <div className="related-grid">
              {[['Promo Codes', '/en-PK/promo'], ['Referral Program', '/en-PK/referral'], ['Deposit', '/en-PK/deposit'], ['How to Play', '/en-PK/how-to-play'], ['VIP Review', '/en-PK/review'], ['FAQ', '/en-PK/faq']].map(([label, href]) => (
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
