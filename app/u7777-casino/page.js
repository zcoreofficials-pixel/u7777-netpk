import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
export const metadata = {
  title: 'U7777 Casino Games — Full Game List Pakistan',
  description: 'All U7777 casino games in Pakistan. Slots, Teen Patti, Dragon Tiger, fishing games, live dealers, sports betting and 500+ more. Full game guide.',
  alternates: { canonical: 'https://u7777.net.pk/u7777-casino' },
}
export default function CasinoPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container"><div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> Casino Games</div></div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero">
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>U7777 Casino Games — 500+ Games for Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Every game available on U7777 explained. Find your favourite and start earning.</p>
          <Link href="/go" className="btn btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>Play Now</Link>
        </div>
        <div className="page-content" style={{ maxWidth: '100%' }}>
          {[
            { category: '🃏 Card Games', desc: 'Traditional card games Pakistani players love most.', games: [{ name: 'Teen Patti', desc: 'Three card game similar to poker. Most popular game on U7777 among Pakistani players.' }, { name: 'Rummy', desc: 'Form sets and sequences with your cards. Calm strategic game with good earning potential.' }, { name: 'Andar Bahar', desc: 'Simple card prediction game. Pick Andar or Bahar and win if your card appears first.' }, { name: 'Blackjack', desc: 'Classic 21 card game. Beat the dealer without going over 21.' }] },
            { category: '🎰 Slot Games', desc: 'Over 200 slot machines from top providers.', games: [{ name: 'Fortune Gems', desc: 'JILI gem-themed slot with high RTP and frequent small wins. Great for beginners.' }, { name: 'Crazy 777', desc: 'Classic three reel slot with traditional symbols. Simple fast rounds.' }, { name: 'Golden Empire', desc: 'Ancient theme slot with free spins and multiplier features.' }, { name: 'Money Coming', desc: 'Popular slot with fishing theme and bonus buy feature.' }] },
            { category: '🐉 Live Games', desc: 'Real dealers, real time action.', games: [{ name: 'Dragon Tiger', desc: 'Fastest live game. Pick Dragon or Tiger. One card each. Highest card wins.' }, { name: 'Baccarat', desc: 'Bet on Player or Banker. Closest to 9 wins. Popular among high stakes players.' }, { name: 'Roulette', desc: 'Bet on numbers or colours on a spinning wheel. Multiple betting options.' }, { name: 'Sic Bo', desc: 'Dice prediction game. Predict the outcome of three dice rolls.' }] },
            { category: '🎣 Fishing Games', desc: 'Shoot fish to earn coins — uniquely popular in Pakistan.', games: [{ name: 'Jackpot Fishing', desc: 'High value fish game with progressive jackpot. Popular with Pakistani players.' }, { name: 'Royal Fishing', desc: 'Underwater adventure with special weapons and boss fish for big rewards.' }, { name: 'All Star Fishing', desc: 'Celebrity fish themed game with special character bonuses.' }] },
            { category: '🏏 Sports Betting', desc: 'Live and pre match betting on major sports.', games: [{ name: 'Cricket Betting', desc: 'Live odds on PSL, international matches, and world tournaments. Most popular sports category in Pakistan.' }, { name: 'Football Betting', desc: 'International leagues including Premier League, La Liga, and Champions League.' }, { name: 'Kabaddi', desc: 'Bet on kabaddi matches. Uniquely relevant for Pakistani and South Asian sports fans.' }] },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: '48px' }}>
              <h2>{section.category}</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>{section.desc}</p>
              <div className="cards-grid">
                {section.games.map((game, j) => (
                  <div className="card" key={j}><h3>{game.name}</h3><p>{game.desc}</p></div>
                ))}
              </div>
            </div>
          ))}
          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Play All Games</Link>
            <Link href="/u7777-how-to-play" className="btn btn-outline">How to Play Guide</Link>
          </div>
        </div>
      </div>
      <Footer lang="en-PK" />
    </>
  )
}
