import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  const footerLinks = [
    {
      category: 'Download & Access',
      links: [
        { label: 'U7777 APK Download', href: '/u7777-download' },
        { label: 'U7777 Login', href: '/u7777-login' },
        { label: 'U7777 Register', href: '/u7777-register' },
        { label: 'Forgot Password', href: '/u7777-forgot-password' },
        { label: 'Account Verification', href: '/u7777-verification' },
        { label: 'APK Guide', href: '/u7777-apk' },
        { label: 'iPhone Guide', href: '/u7777-ios' },
        { label: 'PC Guide', href: '/u7777-pc' },
      ]
    },
    {
      category: 'Payments & Bonuses',
      links: [
        { label: 'U7777 Deposit', href: '/u7777-deposit' },
        { label: 'U7777 Withdrawal', href: '/u7777-withdrawal' },
        { label: 'U7777 Bonus', href: '/u7777-bonus' },
        { label: 'Promo Codes', href: '/u7777-promo' },
        { label: 'Referral Program', href: '/u7777-referral' },
      ]
    },
    {
      category: 'Games & Guides',
      links: [
        { label: 'How to Play U7777', href: '/u7777-how-to-play' },
        { label: 'Casino Games', href: '/u7777-casino' },
        { label: 'Tips & Tricks', href: '/u7777-tricks' },
        { label: 'Latest Update', href: '/u7777-updates' },
        { label: 'Alternatives', href: '/u7777-alternatives' },
      ]
    },
    {
      category: 'Trust & Support',
      links: [
        { label: 'U7777 Review', href: '/u7777-review' },
        { label: 'Is U7777 Legit?', href: '/u7777-legit' },
        { label: 'FAQ', href: '/u7777-faq' },
        { label: 'Troubleshooting', href: '/u7777-troubleshooting' },
        { label: 'About U7777', href: '/u7777-about' },
        { label: 'Contact Support', href: '/u7777-contact' },
      ]
    },
  ]

  return (
    <footer style={{ background: '#060a14', borderTop: '1px solid #1f2d40', padding: '40px 16px 24px' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '32px', marginBottom: '40px' }}>
          <div>
            <div style={{ fontSize: '20px', fontWeight: '900', color: '#fff' }}>U<span style={{ color: '#f59e0b' }}>7777</span> Game</div>
            <p style={{ color: '#9ca3af', fontSize: '13px', marginTop: '10px', lineHeight: '1.6' }}>Pakistan's most popular real money gaming platform. Play slots, Teen Patti, Dragon Tiger and 500+ games. Deposit via JazzCash and EasyPaisa.</p>
            <div style={{ marginTop: '16px', fontSize: '12px', color: '#9ca3af' }}>
              <div>💳 JazzCash · 💚 EasyPaisa · 🏦 Bank</div>
              <div style={{ marginTop: '4px' }}>Min Deposit: PKR 100</div>
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.category}>
              <h4 style={{ color: '#f59e0b', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>{section.category}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {section.links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} style={{ color: '#9ca3af', fontSize: '13px', textDecoration: 'none' }}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '24px', borderTop: '1px solid #1f2d40' }}>
          <p style={{ fontSize: '12px', color: '#9ca3af' }}>Copyright © {year} U7777 Game Pakistan. All rights reserved.</p>
          <p style={{ fontSize: '12px', color: '#9ca3af', maxWidth: '400px', textAlign: 'right' }}>U7777 is an entertainment platform. Play responsibly. We are not responsible for any financial losses.</p>
        </div>
      </div>
    </footer>
  )
}
