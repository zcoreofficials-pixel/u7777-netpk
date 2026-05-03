import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'U7777 Game — Official Pakistan Earning App 2026',
  description: 'Download U7777 Game APK for Pakistan. Play slots, cards, fishing games and earn real money via JazzCash and EasyPaisa. Get 50% welcome bonus today.',
  alternates: {
    canonical: 'https://u7777.net.pk/en-PK',
    languages: {
      'en-PK': 'https://u7777.net.pk/en-PK',
      'ur-PK': 'https://u7777.net.pk/ur-PK',
      'x-default': 'https://u7777.net.pk/en-PK',
    },
  },
}

function getRotatingContent(segments) {
  const segment = Math.floor(new Date().getHours() / 4) % segments.length
  return segments[segment]
}

export default function HomePage() {
  const heroHeadline = getRotatingContent([
    "Pakistan's #1 Real Money Gaming App",
    'Earn Real Cash Playing Your Favourite Games',
    'Download U7777 — Pakistan Top Earning App',
    'Play Win and Withdraw via JazzCash Instantly',
  ])

  const heroDesc = getRotatingContent([
    'U7777 gives Pakistani players a simple way to earn real money from their phone. Deposit as little as PKR 100 via JazzCash or EasyPaisa and start playing slots, cards, and live games today.',
    'Thousands of players across Pakistan are already earning daily with U7777. The app is free to download, supports JazzCash and EasyPaisa, and gives new players a 50% welcome bonus.',
    'Looking for a trusted earning game in Pakistan? U7777 has 500+ games including Teen Patti, Dragon Tiger, slots, and live dealers — all in one easy app.',
    'U7777 is built for Pakistani players — Urdu support, local payment methods, and games everyone loves like Teen Patti, Ludo, and cricket sports betting.',
  ])

  const ctaText = getRotatingContent([
    'Join Now — Get 50% Bonus',
    'Download Free and Start Earning',
    'Play Today — PKR 100 Min Deposit',
    'Claim Your Welcome Bonus',
  ])

  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  const currentMonth = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long' })

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://u7777.net.pk/en-PK",
    "name": "U7777 Game — Official Pakistan Earning App 2026",
    "description": "Download U7777 Game APK for Pakistan. Earn real money via JazzCash and EasyPaisa.",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-PK",
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do I download U7777 Game in Pakistan?", "acceptedAnswer": { "@type": "Answer", "text": "Visit u7777.net.pk, click the Download APK button, enable unknown sources in your Android settings, and install the APK file. The process takes under 5 minutes." } },
      { "@type": "Question", "name": "Can I deposit via JazzCash in U7777?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. U7777 fully supports JazzCash deposits with a minimum of PKR 100." } },
      { "@type": "Question", "name": "What is the welcome bonus in U7777?", "acceptedAnswer": { "@type": "Answer", "text": "New players get a 50% welcome bonus on their first deposit. Deposit PKR 100 and get PKR 50 extra." } },
      { "@type": "Question", "name": "Is U7777 safe to play in Pakistan?", "acceptedAnswer": { "@type": "Answer", "text": "U7777 uses encrypted transactions and secure login. Always download from the official website u7777.net.pk." } },
      { "@type": "Question", "name": "How long does withdrawal take in U7777?", "acceptedAnswer": { "@type": "Answer", "text": "Withdrawals to JazzCash and EasyPaisa are processed within minutes. Minimum withdrawal is PKR 310." } },
    ]
  }

  const faqs = [
    { q: 'How do I download U7777 Game in Pakistan?', a: 'Click the Download APK button on this page. Go to Settings, enable Unknown Sources, open the downloaded file and install. Takes under 5 minutes.' },
    { q: 'Can I deposit via JazzCash in U7777?', a: 'Yes. JazzCash is the most popular deposit method. Minimum deposit is PKR 100. Go to Wallet, tap Deposit, select JazzCash, send money and enter Transaction ID.' },
    { q: 'What is the U7777 welcome bonus?', a: 'New players get 50% extra on their first deposit. Deposit PKR 100 and get PKR 50 free. Deposit PKR 1000 and get PKR 500 free. Credited automatically.' },
    { q: 'How long does withdrawal take?', a: 'JazzCash and EasyPaisa withdrawals complete within 5-10 minutes. Minimum withdrawal amount is PKR 310.' },
    { q: 'Is U7777 safe to use in Pakistan?', a: 'U7777 uses encrypted transactions and OTP verification. Always download from official website u7777.net.pk to avoid fake versions.' },
    { q: 'What games are available on U7777?', a: 'U7777 has 500+ games including slots, Teen Patti, Dragon Tiger, Ludo, fishing games, Rummy, Aviator, and live sports betting on cricket and football.' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header lang="en-PK" />

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="update-badge">🟢 Updated: {lastUpdated}</div>
            <div className="hero-badge"><span className="pulse"></span> #1 Earning App in Pakistan {new Date().getFullYear()}</div>
            <h1 className="hero-title"><span>{heroHeadline}</span></h1>
            <p className="hero-desc">{heroDesc}</p>
            <div className="hero-btns">
              <Link href="/go" className="btn btn-primary">{ctaText}</Link>
              <Link href="/en-PK/app" className="btn btn-download">📱 Download APK</Link>
              <Link href="/en-PK/login" className="btn btn-login">Login</Link>
            </div>
            <div className="hero-stats">
              <div><div className="hero-stat-label">Active Players</div><div className="hero-stat-value">50,000+</div></div>
              <div><div className="hero-stat-label">Min Deposit</div><div className="hero-stat-value">PKR 100</div></div>
              <div><div className="hero-stat-label">Welcome Bonus</div><div className="hero-stat-value">50%</div></div>
              <div><div className="hero-stat-label">Total Games</div><div className="hero-stat-value">500+</div></div>
            </div>
          </div>
          <div className="hero-img-wrap">
            <img src="/images/hero.webp" alt="U7777 Game Pakistan — Real Money Earning App on Android with JazzCash and EasyPaisa" title="U7777 Game — Pakistan Top Earning App" width="500" height="500" />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="payment-bar">
          <span className="payment-label">Payments:</span>
          <div className="payment-badges">
            <span className="payment-badge jazzcash">💳 JazzCash</span>
            <span className="payment-badge easypaisa">💚 EasyPaisa</span>
            <span className="payment-badge bank">🏦 Bank Transfer</span>
          </div>
          <span style={{ marginLeft: 'auto', fontSize: '13px', color: 'var(--color-text-muted)' }}>Min Deposit: PKR 100 · Min Withdrawal: PKR 310</span>
        </div>
      </div>

      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <h2>How to Start Earning with U7777 in Pakistan</h2>
            <p>Getting started takes less than 10 minutes. Follow these three steps and you will be playing with your 50% welcome bonus right away.</p>
          </div>
          <div className="cards-grid">
            {[
              { step: '1', title: 'Download the U7777 APK', desc: 'Click the Download APK button on this page to get the latest official U7777 app. Since it is not on Google Play Store, you install it directly — we walk you through it step by step.', link: '/en-PK/app', label: 'Full Download Guide' },
              { step: '2', title: 'Create Your Account', desc: 'Registration takes 2 minutes. Enter your phone number, set a password, verify with OTP, and your account is ready. New accounts automatically get the 50% welcome bonus on first deposit.', link: '/en-PK/register', label: 'Registration Guide' },
              { step: '3', title: 'Deposit via JazzCash or EasyPaisa', desc: 'Add as little as PKR 100 to your wallet using JazzCash or EasyPaisa. Your balance updates instantly. Then pick any game and start playing.', link: '/en-PK/deposit', label: 'Deposit Guide' },
            ].map((item) => (
              <div className="card" key={item.step}>
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link href={item.link} style={{ color: 'var(--color-accent)', fontSize: '14px', fontWeight: '600' }}>{item.label} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="bonus-box">
            <div className="bonus-amount">50%</div>
            <div className="bonus-label">Welcome Bonus on Your First Deposit — {currentMonth}</div>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px' }}>Deposit PKR 100 and play with PKR 150. Deposit PKR 1000 and play with PKR 1500. Claimed automatically on your first deposit.</p>
            <Link href="/go" className="btn btn-primary">Claim Bonus Now</Link>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <h2>Top Games on U7777 Pakistan</h2>
            <p>Over 500 games in one app. Here are the most popular ones Pakistani players love.</p>
          </div>
          <div className="cards-grid">
            {[
              { icon: '🃏', title: 'Teen Patti', desc: 'The most popular card game in Pakistan. Fast rounds, simple rules, and big wins. Perfect if you enjoy traditional card games with a competitive twist.' },
              { icon: '🐉', title: 'Dragon Tiger', desc: 'Pick Dragon or Tiger, place your bet, and win in seconds. The fastest casino game on U7777 — ideal for quick sessions between breaks.' },
              { icon: '🎰', title: 'Slot Games', desc: 'Over 200 slot machines from top providers like JILI and FunTa. Spin and win with jackpots that can multiply your stake many times over.' },
              { icon: '🎣', title: 'Fishing Games', desc: 'Shoot fish to earn coins. Colourful, fast-paced, and very popular among Pakistani players. Great for casual sessions.' },
              { icon: '♟️', title: 'Ludo King', desc: 'The classic board game you grew up playing, now with real money stakes. Challenge other players online and earn real PKR.' },
              { icon: '🏏', title: 'Sports Betting', desc: 'Bet on cricket, football, and more. Live odds and real-time updates for PSL and international matches.' },
            ].map((game, i) => (
              <div className="card" key={i}>
                <div className="card-icon">{game.icon}</div>
                <h3>{game.title}</h3>
                <p>{game.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/en-PK/casino" className="btn btn-outline">View All 500+ Games</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Pakistani Players Choose U7777</h2>
            <p>There are dozens of earning apps in Pakistan. Here is what makes U7777 different.</p>
          </div>
          <div className="cards-grid">
            {[
              { icon: '⚡', title: 'Instant JazzCash Withdrawals', desc: 'Withdraw your winnings directly to your JazzCash or EasyPaisa wallet. Most withdrawals complete within minutes.' },
              { icon: '🔒', title: 'Secure and Encrypted', desc: 'Your money and personal data are protected with bank-level encryption. All transactions go through secure payment gateways with OTP verification.' },
              { icon: '🎁', title: '50% Welcome Bonus', desc: 'New players get a guaranteed 50% bonus on their first deposit. Plus daily bonuses, referral rewards, and VIP loyalty rewards.' },
              { icon: '📱', title: 'Works on Any Android', desc: 'The U7777 APK is lightweight and runs smoothly even on budget Android phones. If your phone runs WhatsApp, it runs U7777.' },
              { icon: '🇵🇰', title: 'Built for Pakistan', desc: 'Urdu language support, local payment methods, Pakistani sports betting, and games popular in Pakistan like Teen Patti and Ludo.' },
              { icon: '🎮', title: '500+ Games', desc: 'From classic card games to live dealer tables to crash games and sports betting — more variety than any other earning app in Pakistan.' },
            ].map((item, i) => (
              <div className="card" key={i}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about U7777 Game in Pakistan.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '40px' }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', overflow: 'hidden' }}>
                <summary style={{ padding: '18px 22px', cursor: 'pointer', fontWeight: '600', color: 'var(--color-white)', fontSize: '16px', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {faq.q}
                  <span style={{ color: 'var(--color-accent)', fontSize: '22px', marginLeft: '16px', flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ padding: '0 22px 18px', color: 'var(--color-text-muted)' }}>{faq.a}</div>
              </details>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/en-PK/faq" className="btn btn-outline">View All FAQs</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Start Earning with U7777?</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '500px', margin: '0 auto 32px' }}>Join 50,000+ Pakistani players already earning daily. Download free, deposit PKR 100, and claim your 50% welcome bonus right now.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Join Now — Free</Link>
            <Link href="/en-PK/app" className="btn btn-download">📱 Download APK</Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: '48px' }}>
        <div className="related-pages">
          <h3 style={{ marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>All U7777 Pages</h3>
          <div className="related-grid">
            {[
              ['App Download', '/en-PK/app'], ['Login', '/en-PK/login'], ['Register', '/en-PK/register'],
              ['Deposit', '/en-PK/deposit'], ['Withdrawal', '/en-PK/withdrawal'], ['Bonus', '/en-PK/bonus'],
              ['Promo Codes', '/en-PK/promo'], ['Referral', '/en-PK/referral'], ['How to Play', '/en-PK/how-to-play'],
              ['Casino Games', '/en-PK/casino'], ['Tips & Tricks', '/en-PK/tricks'], ['Review', '/en-PK/review'],
              ['Is It Legit?', '/en-PK/legit'], ['FAQ', '/en-PK/faq'], ['Troubleshooting', '/en-PK/troubleshooting'],
              ['Alternatives', '/en-PK/alternatives'], ['Latest Update', '/en-PK/updates'], ['APK Guide', '/en-PK/apk'],
              ['iOS Guide', '/en-PK/ios'], ['PC Guide', '/en-PK/pc'], ['Verification', '/en-PK/verification'],
              ['About', '/en-PK/about'], ['Contact', '/en-PK/contact'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="related-link">{label}</Link>
            ))}
          </div>
        </div>
      </div>

      <Footer lang="en-PK" />
    </>
  )
}
