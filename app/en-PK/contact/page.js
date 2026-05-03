import Link from 'next/link'
import Header from '../../../src/components/Header'
import Footer from '../../../src/components/Footer'
export const metadata = {
  title: 'Contact U7777 Game Support — Pakistan Help Center',
  description: 'Contact U7777 Game support in Pakistan. Live chat, email, Telegram and WhatsApp support channels. Get help with deposits, withdrawals and account issues.',
  alternates: { canonical: 'https://u7777.net.pk/en-PK/contact' },
}
export default function ContactPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container"><div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> Contact</div></div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero">
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>Contact U7777 Support — Pakistan Help Center</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Get help from U7777 support team. We are available 24 hours a day 7 days a week.</p>
        </div>
        <div className="page-content">
          <h2>Support Channels</h2>
          <div className="cards-grid" style={{ marginTop: '16px' }}>
            {[
              { icon: '💬', title: 'Live Chat', desc: 'The fastest way to get help. Open the U7777 app, go to your profile, and tap Live Chat. Average response time is under 5 minutes during peak hours.', action: 'Open Live Chat', href: '/go' },
              { icon: '📧', title: 'Email Support', desc: 'For detailed issues send an email to support@u7777.net.pk. Include your registered phone number, transaction IDs and screenshots. Response within 24 hours.', action: 'Send Email', href: 'mailto:support@u7777.net.pk' },
              { icon: '✈️', title: 'Telegram Channel', desc: 'Join the official U7777 Pakistan Telegram channel for announcements, bonus updates and community support from other players.', action: 'Join Telegram', href: 'https://t.me/u7777pakistan' },
            ].map((item, i) => (
              <div className="card" key={i}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link href={item.href} className="btn btn-outline" style={{ marginTop: '8px', padding: '8px 16px', fontSize: '13px' }}>{item.action}</Link>
              </div>
            ))}
          </div>
          <h2>Before Contacting Support</h2>
          <p>Save time by checking these resources first — most common issues are already answered:</p>
          <ul>
            <li><Link href="/en-PK/troubleshooting">Troubleshooting Guide</Link> — fixes for app, login, deposit and withdrawal problems</li>
            <li><Link href="/en-PK/faq">FAQ Page</Link> — answers to all common questions</li>
            <li><Link href="/en-PK/deposit">Deposit Guide</Link> — complete JazzCash and EasyPaisa deposit instructions</li>
            <li><Link href="/en-PK/withdrawal">Withdrawal Guide</Link> — how to cash out your winnings</li>
          </ul>
          <h2>What to Include When Contacting Support</h2>
          <div className="info-box">
            For faster resolution always include:<br /><br />
            ✅ Your registered phone number<br />
            ✅ Transaction ID (for payment issues)<br />
            ✅ Exact amount and time of transaction<br />
            ✅ Screenshot of the issue<br />
            ✅ Device model and Android version
          </div>
          <div className="related-pages" style={{ marginTop: '48px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '14px', textTransform: 'uppercase' }}>Related Pages</h3>
            <div className="related-grid">
              {[['Troubleshooting', '/en-PK/troubleshooting'], ['FAQ', '/en-PK/faq'], ['About', '/en-PK/about'], ['Deposit', '/en-PK/deposit'], ['Withdrawal', '/en-PK/withdrawal'], ['Login', '/en-PK/U7777-Login']].map(([label, href]) => (
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
