import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#060a14', borderTop: '1px solid #1f2d40', padding: '48px 16px 24px' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>

        {/* Top Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', marginBottom: '40px' }}>

          {/* Brand */}
          <div>
            <div style={{ fontSize: '22px', fontWeight: '900', color: '#fff' }}>U<span style={{ color: '#f59e0b' }}>7777</span> Game</div>
            <p style={{ color: '#9ca3af', fontSize: '13px', marginTop: '12px', lineHeight: '1.7' }}>
              Pakistan's most popular real money gaming platform. Play slots, Teen Patti, Dragon Tiger and 500+ games. Deposit and withdraw via JazzCash and EasyPaisa.
            </p>
            <div style={{ marginTop: '16px', fontSize: '12px', color: '#9ca3af', lineHeight: '1.8' }}>
              <div>💳 JazzCash &nbsp;·&nbsp; 💚 EasyPaisa &nbsp;·&nbsp; 🏦 Bank</div>
              <div>Min Deposit: PKR 100 &nbsp;·&nbsp; Min Withdrawal: PKR 310</div>
            </div>
          </div>

          {/* Download & Access */}
          <div>
            <h4 style={{ color: '#f59e0b', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Download & Access</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                ['U7777 APK Download', '/u7777-download'],
                ['U7777 Login', '/u7777-login'],
                ['U7777 Register', '/u7777-register'],
                ['Forgot Password', '/u7777-forgot-password'],
                ['Account Verification', '/u7777-verification'],
                ['APK Guide', '/u7777-apk'],
                ['iPhone Guide', '/u7777-ios'],
                ['PC Guide', '/u7777-pc'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} style={{ color: '#9ca3af', fontSize: '13px', textDecoration: 'none' }}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Payments & Bonuses */}
          <div>
            <h4 style={{ color: '#f59e0b', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Payments & Bonuses</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                ['U7777 Deposit', '/u7777-deposit'],
                ['U7777 Withdrawal', '/u7777-withdrawal'],
                ['U7777 Bonus', '/u7777-bonus'],
                ['Promo Codes', '/u7777-promo'],
                ['Referral Program', '/u7777-referral'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} style={{ color: '#9ca3af', fontSize: '13px', textDecoration: 'none' }}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Games & Guides */}
          <div>
            <h4 style={{ color: '#f59e0b', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Games & Guides</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                ['How to Play U7777', '/u7777-how-to-play'],
                ['U7777 Casino Games', '/u7777-casino'],
                ['Tips & Tricks', '/u7777-tricks'],
                ['Latest Update', '/u7777-updates'],
                ['U7777 Alternatives', '/u7777-alternatives'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} style={{ color: '#9ca3af', fontSize: '13px', textDecoration: 'none' }}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Trust & Support */}
          <div>
            <h4 style={{ color: '#f59e0b', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Trust & Support</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                ['U7777 Review', '/u7777-review'],
                ['Is U7777 Legit?', '/u7777-legit'],
                ['U7777 FAQ', '/u7777-faq'],
                ['Troubleshooting', '/u7777-troubleshooting'],
                ['About U7777', '/u7777-about'],
                ['Contact Support', '/u7777-contact'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} style={{ color: '#9ca3af', fontSize: '13px', textDecoration: 'none' }}>{label}</Link></li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '24px', borderTop: '1px solid #1f2d40' }}>
          <p style={{ fontSize: '12px', color: '#6b7280' }}>© {year} U7777 Game Pakistan. All rights reserved.</p>
          <p style={{ fontSize: '12px', color: '#6b7280', maxWidth: '420px', textAlign: 'right' }}>U7777 is an entertainment platform. Play responsibly. We are not responsible for financial losses.</p>
        </div>

      </div>
    </footer>
  )
}
