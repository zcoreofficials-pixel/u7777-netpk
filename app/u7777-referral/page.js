import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
export const metadata = {
  title: 'U7777 Referral Program — Earn PKR 100 Per Friend Pakistan',
  description: 'U7777 Game referral program Pakistan. Earn PKR 100 for every friend you invite. How to share your link, track referrals and maximize earnings.',
  alternates: { canonical: 'https://u7777.net.pk/u7777-referral' },
}
export default function ReferralPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container"><div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> Referral Program</div></div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero">
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>U7777 Referral Program — Earn PKR 100 Per Friend</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Invite friends to U7777 and earn PKR 100 for every friend who joins and deposits.</p>
          <Link href="/go" className="btn btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>Get Your Referral Link</Link>
        </div>
        <div className="page-content">
          <div className="bonus-box">
            <div className="bonus-amount">PKR 100</div>
            <div className="bonus-label">Per Successful Referral — No Limit on How Many Friends You Invite</div>
          </div>
          <h2>How the Referral Program Works</h2>
          <div className="cards-grid" style={{ gridTemplateColumns: '1fr', gap: '16px', marginTop: '24px' }}>
            {[
              { step: '1', title: 'Get Your Referral Link', desc: 'Open U7777 app, go to your Profile, find the Referral or Invite section, and copy your unique referral link.' },
              { step: '2', title: 'Share With Friends', desc: 'Send your link via WhatsApp, Facebook, or any messaging app. When someone downloads U7777 using your link they become your referral.' },
              { step: '3', title: 'Friend Registers and Deposits', desc: 'Your friend registers using your link and makes their first deposit of any amount via JazzCash or EasyPaisa.' },
              { step: '4', title: 'You Earn PKR 100', desc: 'As soon as your friend makes their qualifying deposit PKR 100 is credited to your U7777 wallet automatically.' },
            ].map((item) => (
              <div className="card" key={item.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="step-number" style={{ flexShrink: 0 }}>{item.step}</div>
                <div><h3 style={{ marginTop: 0 }}>{item.title}</h3><p style={{ marginBottom: 0 }}>{item.desc}</p></div>
              </div>
            ))}
          </div>
          <h2>How to Maximize Referral Earnings</h2>
          <ul>
            <li>Share in relevant WhatsApp groups — gaming groups, friends who enjoy card games</li>
            <li>Post on your Facebook with a description of U7777 and your link</li>
            <li>There is no limit on referrals — invite 100 friends and earn PKR 10,000</li>
            <li>Your friend also benefits — they get the 50% welcome bonus when they join</li>
          </ul>
          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Get Referral Link</Link>
            <Link href="/u7777-bonus" className="btn btn-outline">All Bonuses</Link>
          </div>
        </div>
      </div>
      <Footer lang="en-PK" />
    </>
  )
}
