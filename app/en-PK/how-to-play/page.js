import Link from 'next/link'
import Header from '../../../src/components/Header'
import Footer from '../../../src/components/Footer'
export const metadata = {
  title: 'How to Play U7777 Game — Complete Beginner Guide Pakistan',
  description: 'Learn how to play U7777 Game in Pakistan. Complete beginner guide covering slots, Teen Patti, Dragon Tiger, fishing games and sports betting.',
  alternates: { canonical: 'https://u7777.net.pk/en-PK/how-to-play' },
}
export default function HowToPlayPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container"><div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> How to Play</div></div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero">
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>How to Play U7777 Game — Beginner Guide Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Everything you need to know to start playing and earning on U7777 in Pakistan.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Start Playing Now</Link>
            <Link href="/en-PK/U7777-game-download" className="btn btn-download">Download App</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>Getting Started on U7777</h2>
          <p>U7777 has over 500 games but you do not need to know them all to start. Pick one game you enjoy and learn it well. Most Pakistani players start with Teen Patti or slots because they are simple to understand.</p>
          <h2>How to Play Teen Patti on U7777</h2>
          <p>Teen Patti is the most popular game on U7777 for Pakistani players. It is a three card game similar to poker but much simpler.</p>
          <ul>
            <li>Each player gets 3 cards dealt face down</li>
            <li>You bet on whether your hand is stronger than the dealer</li>
            <li>Rankings from highest to lowest: Trail, Pure Sequence, Sequence, Color, Pair, High Card</li>
            <li>You can play Blind (without seeing cards) or Seen (after viewing your cards)</li>
            <li>Minimum bet depends on the table you join — start with lowest stakes tables</li>
          </ul>
          <h2>How to Play Slot Games on U7777</h2>
          <p>Slots are the easiest games on U7777. No skill needed — just spin and win.</p>
          <ul>
            <li>Choose a slot game from the Slots category</li>
            <li>Set your bet amount using the plus and minus buttons</li>
            <li>Tap Spin to play one round</li>
            <li>Matching symbols across paylines means you win</li>
            <li>Look for games with free spin features for more chances to win without extra bets</li>
          </ul>
          <h2>How to Play Dragon Tiger</h2>
          <p>Dragon Tiger is the simplest live game on U7777. You just pick Dragon or Tiger and bet on which gets the higher card. That is literally the whole game. Rounds take about 30 seconds each.</p>
          <h2>Beginner Tips for U7777</h2>
          <div className="cards-grid" style={{ marginTop: '16px' }}>
            {[
              { icon: '💡', title: 'Start Small', desc: 'Begin with minimum bets until you understand the game. PKR 100 can last a long time if you bet small.' },
              { icon: '🎯', title: 'Focus on One Game', desc: 'Pick one game and learn it well rather than switching between many games. Consistency builds skill.' },
              { icon: '💰', title: 'Claim All Bonuses', desc: 'Use your welcome bonus and daily login bonuses. Free money is free money.' },
              { icon: '⏰', title: 'Set Time Limits', desc: 'Decide before playing how much time and money you will spend. Stop when you reach your limit.' },
            ].map((item, i) => (
              <div className="card" key={i}><div className="card-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.desc}</p></div>
            ))}
          </div>
          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Start Playing</Link>
            <Link href="/en-PK/tricks" className="btn btn-outline">Tips and Tricks</Link>
          </div>
          <div className="related-pages" style={{ marginTop: '48px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '14px', textTransform: 'uppercase' }}>Related Pages</h3>
            <div className="related-grid">
              {[['Casino Games', '/en-PK/casino'], ['Tips & Tricks', '/en-PK/tricks'], ['Deposit', '/en-PK/deposit'], ['Bonus', '/en-PK/bonus'], ['Review', '/en-PK/review'], ['FAQ', '/en-PK/faq']].map(([label, href]) => (
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
