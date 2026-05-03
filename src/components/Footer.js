import Link from 'next/link'

export default function Footer({ lang = 'en-PK' }) {
  const base = `/${lang}`
  const year = new Date().getFullYear()

  const footerLinks = [
    {
      category: 'Download & Access',
      links: [
        { label: 'U7777 APK Download', href: `${base}/U7777-game-download` },
        { label: 'U7777 Login', href: `${base}/U7777-Login` },
        { label: 'U7777 Register', href: `${base}/register` },
        { label: 'Forgot Password', href: `${base}/forgot-password` },
        { label: 'Account Verification', href: `${base}/verification` },
        { label: 'APK Guide', href: `${base}/apk` },
        { label: 'iPhone Guide', href: `${base}/ios` },
        { label: 'PC Guide', href: `${base}/pc` },
      ]
    },
    {
      category: 'Payments & Bonuses',
      links: [
        { label: 'U7777 Deposit', href: `${base}/deposit` },
        { label: 'U7777 Withdrawal', href: `${base}/withdrawal` },
        { label: 'U7777 Bonus', href: `${base}/bonus` },
        { label: 'Promo Codes', href: `${base}/promo` },
        { label: 'Referral Program', href: `${base}/referral` },
      ]
    },
    {
      category: 'Games & Guides',
      links: [
        { label: 'How to Play U7777', href: `${base}/how-to-play` },
        { label: 'Casino Games', href: `${base}/casino` },
        { label: 'Tips & Tricks', href: `${base}/tricks` },
        { label: 'Latest Update', href: `${base}/updates` },
        { label: 'Alternatives', href: `${base}/alternatives` },
      ]
    },
    {
      category: 'Trust & Support',
      links: [
        { label: 'U7777 Review', href: `${base}/review` },
        { label: 'Is U7777 Legit?', href: `${base}/legit` },
        { label: 'FAQ', href: `${base}/faq` },
        { label: 'Troubleshooting', href: `${base}/troubleshooting` },
        { label: 'About U7777', href: `${base}/about` },
        { label: 'Contact Support', href: `${base}/contact` },
      ]
    },
  ]

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '40px', marginBottom: '40px' }}>
          
          {/* Brand Column */}
          <div>
            <div className="footer-logo">U<span>7777</span> Game</div>
            <p className="footer-desc" style={{ marginTop: '12px' }}>Pakistan's most popular real money gaming platform. Play slots, Teen Patti, Dragon Tiger and 500+ games. Deposit and withdraw via JazzCash and EasyPaisa instantly.</p>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>💳 JazzCash · 💚 EasyPaisa · 🏦 Bank Transfer</div>
              <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Min Deposit: PKR 100 · Min Withdrawal: PKR 310</div>
            </div>
          </div>

          {/* Link Categories */}
          {footerLinks.map((section) => (
            <div key={section.category}>
              <h4 style={{ color: 'var(--color-accent)', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>{section.category}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {section.links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} style={{ color: 'var(--color-text-muted)', fontSize: '13px', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = 'var(--color-text)'}
                      onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}
                    >{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '24px', borderTop: '1px solid var(--color-border)' }}>
          <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Copyright © {year} U7777 Game Pakistan. All rights reserved.</p>
          <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', maxWidth: '500px', textAlign: 'right' }}>U7777 is an entertainment platform. Play responsibly. We are not responsible for any financial losses.</p>
        </div>
      </div>
    </footer>
  )
}
