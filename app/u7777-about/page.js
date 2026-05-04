import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
export const metadata = {
  title: 'About U7777 Game — Pakistan Earning App Overview',
  description: 'About U7777 Game Pakistan. Learn what U7777 is, who it is for, how it works, and why it is one of the most popular earning apps in Pakistan.',
  alternates: { canonical: 'https://u7777.net.pk/u7777-about' },
}
export default function AboutPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container"><div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> About</div></div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero">
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>About U7777 Game Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Everything you need to know about U7777 — Pakistan's popular real money gaming platform.</p>
        </div>
        <div className="page-content">
          <h2>What is U7777 Game?</h2>
          <p>U7777 is an online gaming and earning platform designed specifically for Pakistani players. It brings together hundreds of casino style games, sports betting, and card games into one easy to use Android app that works seamlessly with JazzCash and EasyPaisa.</p>
          <p>The platform was built with Pakistani users in mind. Everything from the payment methods to the games available — Teen Patti, Ludo, cricket betting — reflects what Pakistani players actually want. You do not need an international credit card or complicated payment process. Just your JazzCash account and PKR 100 to get started.</p>
          <h2>Who is U7777 For?</h2>
          <p>U7777 is for Pakistani adults aged 18 and above who enjoy mobile gaming and want to earn real money while doing so. It is popular among:</p>
          <ul>
            <li>Card game enthusiasts who play Teen Patti and Rummy</li>
            <li>Cricket and football fans who want to bet on live matches</li>
            <li>Casual players who enjoy slots and fishing games</li>
            <li>Players looking for earning opportunities through referral programs</li>
          </ul>
          <h2>How U7777 Works</h2>
          <p>You download the app, create a free account, deposit money via JazzCash or EasyPaisa, play games, win money, and withdraw back to your wallet. The entire cycle can happen within the same day. Deposits are instant and withdrawals take 5 to 30 minutes for JazzCash and EasyPaisa.</p>
          <div className="info-box">
            <strong>Platform Facts:</strong><br />
            Games Available: 500+<br />
            Payment Methods: JazzCash, EasyPaisa, Bank Transfer<br />
            Minimum Deposit: PKR 100<br />
            Minimum Withdrawal: PKR 310<br />
            Support: 24/7 Live Chat
          </div>
          <h2>About This Website</h2>
          <p>u7777.net.pk is an independent information and guide website for U7777 Game in Pakistan. We provide download guides, tutorials, reviews, and answers to help Pakistani players get the most out of the platform. We are not the official U7777 operator but we do provide the official download link.</p>
          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Join U7777</Link>
            <Link href="/u7777-contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </div>
      <Footer lang="en-PK" />
    </>
  )
}
