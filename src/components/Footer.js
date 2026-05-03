import Link from 'next/link'

export default function Footer({ lang = 'en-PK' }) {
  const base = `/${lang}`
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo">U<span>7777</span> Game</div>
            <p className="footer-desc">Pakistan's most popular real money gaming app. Play slots, cards, fishing games and earn via JazzCash & EasyPaisa.</p>
          </div>
          <nav className="footer-nav">
            <ul>
              <li><Link href={`${base}/app`}>App Download</Link></li>
              <li><Link href={`${base}/login`}>Login</Link></li>
              <li><Link href={`${base}/register`}>Register</Link></li>
              <li><Link href={`${base}/deposit`}>Deposit</Link></li>
              <li><Link href={`${base}/withdrawal`}>Withdrawal</Link></li>
              <li><Link href={`${base}/bonus`}>Bonus</Link></li>
              <li><Link href={`${base}/promo`}>Promo Codes</Link></li>
              <li><Link href={`${base}/referral`}>Referral</Link></li>
              <li><Link href={`${base}/how-to-play`}>How to Play</Link></li>
              <li><Link href={`${base}/casino`}>Casino Games</Link></li>
              <li><Link href={`${base}/tricks`}>Tips & Tricks</Link></li>
              <li><Link href={`${base}/review`}>Review</Link></li>
              <li><Link href={`${base}/legit`}>Is It Legit?</Link></li>
              <li><Link href={`${base}/faq`}>FAQ</Link></li>
              <li><Link href={`${base}/troubleshooting`}>Troubleshooting</Link></li>
              <li><Link href={`${base}/alternatives`}>Alternatives</Link></li>
              <li><Link href={`${base}/updates`}>Latest Update</Link></li>
              <li><Link href={`${base}/apk`}>APK Guide</Link></li>
              <li><Link href={`${base}/ios`}>iOS Guide</Link></li>
              <li><Link href={`${base}/pc`}>PC Guide</Link></li>
              <li><Link href={`${base}/verification`}>Verification</Link></li>
              <li><Link href={`${base}/about`}>About</Link></li>
              <li><Link href={`${base}/contact`}>Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">Copyright © {year} U7777 Game Pakistan. All rights reserved.</p>
          <p className="footer-resp">⚠️ U7777 is for entertainment purposes. Play responsibly. Must be 18+ to play. We are not responsible for any financial losses.</p>
        </div>
      </div>
    </footer>
  )
}
