import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import LiveStats from '../../src/components/LiveStats'

export const metadata = {
  title: 'U7777 Game — Download U7777 APK & Earn Real Money in Pakistan 2026',
  description: 'U7777 Game Pakistan — Download U7777 APK free for Android. Play U7777 slots, Teen Patti, Dragon Tiger. Deposit via JazzCash EasyPaisa. 50% welcome bonus. U7777 login & register guide.',
  keywords: 'U7777, U7777 game, U7777 download, U7777 APK, U777 game, U 7777, U7777 Pakistan, U7777 login, U7777 register, U7777 deposit, U7777 withdrawal, U7777 bonus',
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
    "U7777 Game — Pakistan's #1 Real Money Earning App",
    'Download U7777 APK — Earn Real Cash in Pakistan',
    'U7777 Game Download — Play & Win via JazzCash',
    'U 7777 Game Pakistan — 50% Bonus on First Deposit',
  ])

  const heroDesc = getRotatingContent([
    "U7777 Game is Pakistan's most trusted real money gaming platform. Download U7777 APK free, deposit PKR 100 via JazzCash or EasyPaisa, and start earning from slots, Teen Patti, Dragon Tiger and 500+ more games today.",
    'Thousands of Pakistani players earn daily with U7777. The U7777 game download is free, supports JazzCash and EasyPaisa payments, and gives every new player a 50% welcome bonus on their first deposit.',
    'Looking for a trusted U7777 game download in Pakistan? U7777 has 500+ games — slots, Teen Patti, Dragon Tiger, Ludo, cricket betting — all in one easy Android app with instant JazzCash withdrawals.',
    'U 7777 game is built for Pakistani players — Urdu support, JazzCash and EasyPaisa deposits, games like Teen Patti and Ludo, and a 50% welcome bonus. Download U7777 APK free and start earning today.',
  ])

  const ctaText = getRotatingContent([
    'Download U7777 — Get 50% Bonus',
    'Play U7777 Free — Start Earning',
    'U7777 APK Download — PKR 100 Min',
    'Join U7777 — Claim Welcome Bonus',
  ])

  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  const currentMonth = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long' })
  const currentYear = new Date().getFullYear()

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://u7777.net.pk/en-PK",
    "name": "U7777 Game — Download U7777 APK & Earn Real Money in Pakistan 2026",
    "description": "U7777 Game Pakistan — Download U7777 APK free for Android. 50% welcome bonus. JazzCash EasyPaisa deposits.",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-PK",
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do I download U7777 Game APK in Pakistan?", "acceptedAnswer": { "@type": "Answer", "text": "Visit u7777.net.pk, click Download APK, enable Unknown Sources in Android settings, and install. Takes under 5 minutes." } },
      { "@type": "Question", "name": "What is U7777 Game Pakistan?", "acceptedAnswer": { "@type": "Answer", "text": "U7777 is a real money gaming platform for Pakistani players with 500+ games including slots, Teen Patti, Dragon Tiger, and cricket betting. Supports JazzCash and EasyPaisa." } },
      { "@type": "Question", "name": "How to deposit in U7777 via JazzCash?", "acceptedAnswer": { "@type": "Answer", "text": "Login to U7777, go to Wallet, select Deposit, choose JazzCash, send money to the merchant number shown, enter your Transaction ID. Minimum deposit PKR 100." } },
      { "@type": "Question", "name": "What is U7777 welcome bonus?", "acceptedAnswer": { "@type": "Answer", "text": "New U7777 players get 50% bonus on first deposit. Deposit PKR 100 get PKR 50 free. No promo code needed." } },
      { "@type": "Question", "name": "How to login to U7777 Game?", "acceptedAnswer": { "@type": "Answer", "text": "Open U7777 app, tap Login, enter your registered Pakistani mobile number and password, complete OTP verification if asked." } },
      { "@type": "Question", "name": "Is U7777 Game real or fake?", "acceptedAnswer": { "@type": "Answer", "text": "U7777 is a real platform processing actual JazzCash and EasyPaisa payments. Always download from official site u7777.net.pk." } },
    ]
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "U7777 Game",
    "operatingSystem": "Android",
    "applicationCategory": "GameApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PKR" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.5", "ratingCount": "5000" },
    "description": "U7777 Game Pakistan — Real money gaming app with slots, Teen Patti, Dragon Tiger. JazzCash EasyPaisa support."
  }

  const faqs = [
    { q: 'How do I download U7777 Game APK in Pakistan?', a: 'Click the Download APK button on this page. Go to Settings and enable Unknown Sources, open the downloaded APK file and install. The whole process takes under 5 minutes on any Android phone.' },
    { q: 'What is U7777 Game and how does it work?', a: 'U7777 is a real money gaming platform built for Pakistani players. You deposit money via JazzCash or EasyPaisa, play games like slots, Teen Patti, and Dragon Tiger, win money, and withdraw back to your wallet instantly.' },
    { q: 'How to deposit in U7777 via JazzCash?', a: 'Login to U7777, go to Wallet, tap Deposit, choose JazzCash, note the merchant number, send money from your JazzCash app, enter the Transaction ID in U7777. Balance updates instantly. Minimum deposit is PKR 100.' },
    { q: 'What is U7777 welcome bonus?', a: 'New U7777 players automatically get 50% bonus on their first deposit. Deposit PKR 100 play with PKR 150. Deposit PKR 1000 play with PKR 1500. No code needed.' },
    { q: 'How to login to U7777 Game?', a: 'Open the U7777 app or visit u7777.net.pk, tap Login, enter your registered Pakistani mobile number in 03XXXXXXXXX format, enter your password, complete OTP if asked.' },
    { q: 'How long does U7777 withdrawal take?', a: 'JazzCash and EasyPaisa withdrawals from U7777 complete within 5-10 minutes. Minimum withdrawal is PKR 310. Bank transfers take up to 24 hours.' },
  ]

  const games = [
    { icon: '🃏', title: 'U7777 Teen Patti', desc: 'Most played card game on U7777 in Pakistan. Classic three card game with real PKR stakes. Fast rounds, simple rules, big wins.' },
    { icon: '🐉', title: 'U7777 Dragon Tiger', desc: 'Fastest live game on U7777. Pick Dragon or Tiger, one card each, highest wins. Each round takes 30 seconds.' },
    { icon: '🎰', title: 'U7777 Slot Games', desc: 'Over 200 slot machines from JILI, FunTa, and HB. Classic slots, video slots with bonus rounds, progressive jackpots.' },
    { icon: '🎣', title: 'U7777 Fishing Games', desc: 'Shoot fish with different weapons to earn coins. Jackpot Fishing, Royal Fishing are top picks. Colourful and fast.' },
    { icon: '♟️', title: 'U7777 Ludo King', desc: "Pakistan's favourite board game now with real PKR prizes. Challenge other players online and earn real money." },
    { icon: '🏏', title: 'U7777 Cricket Betting', desc: 'PSL, international cricket, and football live odds. Bet on match winner, top scorer, and more.' },
  ]

  const whyUs = [
    { icon: '⚡', title: 'Instant JazzCash Withdrawals', desc: 'Withdrawals to JazzCash arrive within 5-10 minutes — faster than any other earning app in Pakistan.' },
    { icon: '🔒', title: 'U7777 Security', desc: 'Bank-level encryption and OTP verification protect your account and money at all times.' },
    { icon: '🎁', title: 'Best U7777 Bonuses', desc: '50% welcome bonus automatically credited. Plus daily login bonus, PKR 100 referral bonus, and VIP rewards.' },
    { icon: '📱', title: 'Works on Budget Phones', desc: 'U7777 APK runs smoothly on all Android phones — Samsung, Oppo, Vivo, Infinix, Tecno.' },
    { icon: '🇵🇰', title: 'Built for Pakistan', desc: 'Urdu support, JazzCash and EasyPaisa, PSL cricket betting, Teen Patti and Ludo — all Pakistani favourites.' },
    { icon: '🎮', title: '500+ U7777 Games', desc: 'More variety than any other earning app in Pakistan. New games added regularly.' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Header lang="en-PK" />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="update-badge">🟢 Updated: {lastUpdated}</div>
            <div className="hero-badge"><span className="pulse"></span> Pakistan's #1 U7777 Game Guide {currentYear}</div>
            <h1 className="hero-title"><span>{heroHeadline}</span></h1>
            <p className="hero-desc">{heroDesc}</p>
            <div className="hero-btns">
              <Link href="/en-PK/U7777-game-download" className="btn btn-download">📱 U7777 APK Download</Link>
              <Link href="/en-PK/register" className="btn btn-primary">{ctaText}</Link>
            </div>
            <div className="hero-stats">
              <div><div className="hero-stat-label">Active Players</div><div className="hero-stat-value">50,000+</div></div>
              <div><div className="hero-stat-label">Min Deposit</div><div className="hero-stat-value">PKR 100</div></div>
              <div><div className="hero-stat-label">Welcome Bonus</div><div className="hero-stat-value">50%</div></div>
              <div><div className="hero-stat-label">Total Games</div><div className="hero-stat-value">500+</div></div>
            </div>
          </div>
          <div className="hero-img-wrap">
            <img src="/images/hero.webp" alt="U7777 Game Pakistan — Official Real Money Earning App Download for Android with JazzCash and EasyPaisa" title="U7777 Game — Pakistan Number 1 Earning App 2026" width="500" height="400" style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginTop: '8px' }}>
              <img src="/images/banner1.webp" alt="U7777 Game Pakistan Teen Patti Slots Casino Games Earn Real Money via JazzCash" width="160" height="100" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
              <img src="/images/banner2.webp" alt="U7777 APK Download Android Pakistan 50% Welcome Bonus EasyPaisa Deposit" width="160" height="100" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
              <img src="/images/banner3.webp" alt="U7777 Game JazzCash EasyPaisa Withdrawal Pakistan Real Money Dragon Tiger" width="160" height="100" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT BAR */}
      <div className="container">
        <div className="payment-bar">
          <span className="payment-label">U7777 Payments:</span>
          <div className="payment-badges">
            <span className="payment-badge jazzcash">💳 JazzCash</span>
            <span className="payment-badge easypaisa">💚 EasyPaisa</span>
            <span className="payment-badge bank">🏦 Bank Transfer</span>
          </div>
        </div>
      </div>

      {/* LIVE STATS */}
      <LiveStats />

      {/* WHAT IS U7777 */}
      <section className="section">
        <div className="container">
          <h2>What is U7777 Game? — Complete Guide for Pakistan {currentYear}</h2>
          <p>U7777 Game is one of the most popular real money gaming platforms available in Pakistan right now. Built specifically for Pakistani players, the U7777 app combines entertainment with genuine earning opportunities — all accessible from your Android phone with just PKR 100 to start.</p>
          <p>The U 7777 platform brings together over 500 games in a single app. Whether you enjoy card games like Teen Patti and Rummy, fast-paced games like Dragon Tiger and Aviator, colourful fishing games, or classic slot machines — U7777 has everything in one place.</p>
          <p>What separates U7777 from other earning apps in Pakistan is its payment system. The platform fully supports JazzCash and EasyPaisa — the two most-used mobile wallets in Pakistan. Deposits are instant and withdrawals to JazzCash typically complete within 5-10 minutes.</p>
          <p>The U7777 game download is completely free. Visit this page, download the official APK file, install it on your Android phone, and create a free account using your Pakistani mobile number. Make your first deposit and your 50% welcome bonus is credited automatically — no promo code required.</p>

          <div className="card" style={{ marginTop: '24px' }}>
            <h3 style={{ color: 'var(--color-accent)', marginBottom: '16px' }}>U7777 Game — Quick Facts</h3>
            {[
              ['Platform Name', 'U7777 Game'],
              ['Also Known As', 'U 7777, U777 Game, U7777 App'],
              ['Available On', 'Android APK, Mobile Browser'],
              ['Min Deposit', 'PKR 100 via JazzCash'],
              ['Min Withdrawal', 'PKR 310 via JazzCash/EasyPaisa'],
              ['Welcome Bonus', '50% on First Deposit'],
              ['Total Games', '500+ including Slots, Teen Patti'],
              ['Withdrawal Time', '5-10 minutes (JazzCash)'],
              ['Customer Support', '24/7 Live Chat'],
              ['Download', 'Free — No Cost'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--color-border)', fontSize: '14px', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>{k}</span>
                <span style={{ color: 'var(--color-white)', fontWeight: '600' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <h2>How to Download U7777 Game & Start Earning in Pakistan</h2>
            <p>U7777 game download and setup takes under 10 minutes. Follow these three steps.</p>
          </div>
          <div className="cards-grid">
            {[
              { step: '1', title: 'U7777 APK Download — Free for Android', desc: 'Click the Download APK button to get the latest official U7777 app. Not available on Google Play Store — install directly from this official site.', link: '/en-PK/U7777-game-download', label: 'U7777 APK Download Guide →' },
              { step: '2', title: 'U7777 Register — Create Free Account', desc: 'Registration takes 2 minutes. Enter your Pakistani mobile number, create a password, verify with OTP. New accounts automatically qualify for the 50% welcome bonus.', link: '/en-PK/register', label: 'U7777 Register Guide →' },
              { step: '3', title: 'U7777 Deposit via JazzCash or EasyPaisa', desc: 'Add as little as PKR 100 using JazzCash or EasyPaisa. Balance updates instantly. 50% welcome bonus credited automatically on your first deposit.', link: '/en-PK/deposit', label: 'U7777 Deposit Guide →' },
            ].map((item) => (
              <div className="card" key={item.step}>
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link href={item.link} style={{ color: 'var(--color-accent)', fontSize: '14px', fontWeight: '600' }}>{item.label}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS */}
      <section className="section">
        <div className="container">
          <div className="bonus-box">
            <div className="bonus-amount">50%</div>
            <div className="bonus-label">U7777 Welcome Bonus on First Deposit — {currentMonth}</div>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px', maxWidth: '500px', margin: '0 auto 20px', fontSize: '14px' }}>Deposit PKR 100 and play with PKR 150. Deposit PKR 1000 and play with PKR 1500. Credited automatically — no code needed.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/en-PK/register" className="btn btn-primary">Claim U7777 Bonus Now</Link>
              <Link href="/en-PK/bonus" className="btn btn-outline">All U7777 Bonuses</Link>
            </div>
          </div>
        </div>
      </section>

      {/* GAMES */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <h2>U7777 Games — 500+ Games for Pakistani Players</h2>
            <p>From traditional card games to live casino tables to cricket betting — all in one U7777 app.</p>
          </div>
          <div className="cards-grid">
            {games.map((game, i) => (
              <div className="card" key={i}>
                <div className="card-icon">{game.icon}</div>
                <h3>{game.title}</h3>
                <p>{game.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link href="/en-PK/casino" className="btn btn-outline">View All U7777 Games</Link>
          </div>
        </div>
      </section>

      {/* DEPOSIT WITHDRAWAL */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>U7777 Deposit & Withdrawal — JazzCash and EasyPaisa Guide</h2>
            <p>No bank account needed — just your JazzCash or EasyPaisa wallet.</p>
          </div>
          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="card">
              <h3 style={{ color: 'var(--color-accent)' }}>💳 U7777 Deposit Guide</h3>
              <p style={{ fontSize: '14px' }}>Go to Wallet, tap Deposit, choose JazzCash, note the merchant number, send money from your JazzCash app, enter Transaction ID. Balance updates instantly.</p>
              {[['Minimum Deposit', 'PKR 100'], ['Maximum Deposit', 'PKR 50,000'], ['Processing Time', 'Instant'], ['Methods', 'JazzCash, EasyPaisa, Bank']].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid var(--color-border)', fontSize: '13px', gap: '8px' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>{k}</span>
                  <span style={{ color: 'var(--color-white)', fontWeight: '600' }}>{v}</span>
                </div>
              ))}
              <Link href="/en-PK/deposit" className="btn btn-primary" style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>Full Deposit Guide</Link>
            </div>
            <div className="card">
              <h3 style={{ color: '#4ade80' }}>💚 U7777 Withdrawal Guide</h3>
              <p style={{ fontSize: '14px' }}>Go to Wallet, tap Withdraw, choose method, enter wallet number and amount, confirm with withdrawal password. Money arrives in 5-10 minutes.</p>
              {[['Minimum Withdrawal', 'PKR 310'], ['Maximum Per Transaction', 'PKR 49,500'], ['Processing Time', '5-10 minutes'], ['Methods', 'JazzCash, EasyPaisa, Bank']].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid var(--color-border)', fontSize: '13px', gap: '8px' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>{k}</span>
                  <span style={{ color: 'var(--color-white)', fontWeight: '600' }}>{v}</span>
                </div>
              ))}
              <Link href="/en-PK/withdrawal" className="btn btn-download" style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>Full Withdrawal Guide</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY U7777 */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <h2>Why Pakistani Players Choose U7777 Game</h2>
            <p>What makes U7777 stand out from other earning apps in Pakistan.</p>
          </div>
          <div className="cards-grid">
            {whyUs.map((item, i) => (
              <div className="card" key={i}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* U7777 LOGIN */}
      <section className="section">
        <div className="container">
          <h2>U7777 Login — How to Access Your Account</h2>
          <p>U7777 login works on both the Android app and mobile browser. Open the U7777 app, tap Login, enter your registered Pakistani mobile number in 03XXXXXXXXX format, enter your password, and complete OTP verification if prompted.</p>
          <p>If you forget your U7777 login password, use Forgot Password on the login screen. Enter your phone number, receive an OTP, and create a new password in under 2 minutes.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link href="/en-PK/U7777-Login" className="btn btn-primary">U7777 Login Now</Link>
            <Link href="/en-PK/forgot-password" className="btn btn-outline">Forgot Password?</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <h2>U7777 Game FAQ — Common Questions Answered</h2>
            <p>Everything Pakistani players ask about U7777 game, download, login, deposits and bonuses.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', overflow: 'hidden' }}>
                <summary style={{ padding: '16px 18px', cursor: 'pointer', fontWeight: '600', color: 'var(--color-white)', fontSize: '15px', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                  <span>{faq.q}</span>
                  <span style={{ color: 'var(--color-accent)', fontSize: '20px', flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ padding: '0 18px 16px', color: 'var(--color-text-muted)', fontSize: '14px' }}>{faq.a}</div>
              </details>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link href="/en-PK/faq" className="btn btn-outline">View All U7777 FAQs</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Download U7777 Game and Start Earning?</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '500px', margin: '0 auto 24px', fontSize: '15px' }}>Join 50,000+ Pakistani players already earning real money with U7777. Download U7777 APK free, deposit PKR 100 via JazzCash, claim your 50% welcome bonus.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/en-PK/U7777-game-download" className="btn btn-download">📱 Download U7777 APK</Link>
            <Link href="/en-PK/register" className="btn btn-primary">Register & Claim 50% Bonus</Link>
            <Link href="/en-PK/U7777-Login" className="btn btn-login">U7777 Login</Link>
          </div>
        </div>
      </section>

      {/* ALL PAGES */}
      <div className="container" style={{ paddingBottom: '48px' }}>
        <div className="related-pages">
          <h3 style={{ marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Complete U7777 Guide — All Pages</h3>
          <div className="related-grid">
            {[
              ['U7777 APK Download', '/en-PK/U7777-game-download'],
              ['U7777 Login', '/en-PK/U7777-Login'],
              ['U7777 Register', '/en-PK/register'],
              ['U7777 Deposit', '/en-PK/deposit'],
              ['U7777 Withdrawal', '/en-PK/withdrawal'],
              ['U7777 Bonus', '/en-PK/bonus'],
              ['Promo Codes', '/en-PK/promo'],
              ['Referral Program', '/en-PK/referral'],
              ['How to Play', '/en-PK/how-to-play'],
              ['Casino Games', '/en-PK/casino'],
              ['Tips & Tricks', '/en-PK/tricks'],
              ['U7777 Review', '/en-PK/review'],
              ['Is U7777 Legit?', '/en-PK/legit'],
              ['U7777 FAQ', '/en-PK/faq'],
              ['Troubleshooting', '/en-PK/troubleshooting'],
              ['Alternatives', '/en-PK/alternatives'],
              ['Latest Update', '/en-PK/updates'],
              ['APK Guide', '/en-PK/apk'],
              ['iPhone Guide', '/en-PK/ios'],
              ['PC Guide', '/en-PK/pc'],
              ['Verification', '/en-PK/verification'],
              ['About U7777', '/en-PK/about'],
              ['Contact Support', '/en-PK/contact'],
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
