import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
export const metadata = {
  title: `U7777 Promo Code — Latest Offers Pakistan ${new Date().toLocaleDateString('en-PK', { month: 'long', year: 'numeric' })}`,
  description: 'U7777 Game promo codes for Pakistan. Latest active codes, how to apply them, and all current promotional offers updated monthly.',
  alternates: { canonical: 'https://u7777.net.pk/u7777-promo' },
}
export default function PromoPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  const currentMonth = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container"><div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> Promo Codes</div></div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero">
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>U7777 Promo Code — {currentMonth} Offers Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Latest U7777 promotional codes and offers for Pakistani players this month.</p>
          <Link href="/go" className="btn btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>Claim Offer Now</Link>
        </div>
        <div className="page-content">
          <div className="info-box"><strong>Note:</strong> U7777 welcome bonus is automatic — no promo code needed for the 50% first deposit bonus. Special codes appear in the promotions section inside the app.</div>
          <h2>Where to Find U7777 Promo Codes</h2>
          <ul>
            <li><strong>Inside the app</strong> — Check Promotions section regularly for active codes</li>
            <li><strong>Official Telegram channel</strong> — t.me/u7777pakistan announces special codes</li>
            <li><strong>This page</strong> — We update with latest codes as they are released</li>
            <li><strong>During special events</strong> — PSL season, Eid, and major tournaments often come with bonus codes</li>
          </ul>
          <h2>How to Apply a Promo Code</h2>
          <div className="cards-grid" style={{ gridTemplateColumns: '1fr', gap: '12px', marginTop: '16px' }}>
            {[
              { step: '1', title: 'Login to U7777', desc: 'Open the app and login to your account.' },
              { step: '2', title: 'Go to Promotions', desc: 'Find the Promotions or Bonus section in the main menu.' },
              { step: '3', title: 'Find Promo Code Box', desc: 'Look for an Enter Promo Code field in the promotions page.' },
              { step: '4', title: 'Enter the Code', desc: 'Type or paste the promo code exactly as provided. Codes are case sensitive.' },
              { step: '5', title: 'Claim the Bonus', desc: 'Tap Apply or Claim to activate the promo code bonus.' },
            ].map((item) => (
              <div className="card" key={item.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="step-number" style={{ flexShrink: 0 }}>{item.step}</div>
                <div><h3 style={{ marginTop: 0 }}>{item.title}</h3><p style={{ marginBottom: 0 }}>{item.desc}</p></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Check Current Offers</Link>
            <Link href="/u7777-bonus" className="btn btn-outline">All Bonuses</Link>
          </div>
        </div>
      </div>
      <Footer lang="en-PK" />
    </>
  )
}
