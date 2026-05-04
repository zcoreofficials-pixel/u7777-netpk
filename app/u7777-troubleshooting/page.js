import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
export const metadata = {
  title: 'U7777 Game Problems — Fix Common Issues Pakistan',
  description: 'Fix U7777 Game problems in Pakistan. App not opening, login failed, deposit not showing, withdrawal delayed, OTP not received — solutions for all issues.',
  alternates: { canonical: 'https://u7777.net.pk/u7777-troubleshooting' },
}
export default function TroubleshootingPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  const issues = [
    { title: 'App Not Opening or Crashing', fix: 'Force close the app completely and reopen it. If still crashing clear the app cache from Settings > Apps > U7777 > Clear Cache. If the problem continues uninstall and download the latest APK from u7777.net.pk.' },
    { title: 'Login Failed — Wrong Password', fix: 'Make sure Caps Lock is off and you are entering the correct password. Passwords are case sensitive. If you forgot your password use the Forgot Password option on the login screen to reset via OTP.' },
    { title: 'OTP Not Received', fix: 'Check your network signal — poor signal delays SMS delivery. Wait 60 seconds then tap Resend OTP. If still not received check if your number has SMS service active. Try switching between WiFi and mobile data.' },
    { title: 'Deposit Not Showing in Wallet', fix: 'Wait 10 minutes after sending. If balance still not updated contact U7777 support immediately with your JazzCash or EasyPaisa Transaction ID, the exact amount sent, time of transfer, and your registered phone number.' },
    { title: 'Withdrawal Not Received', fix: 'JazzCash and EasyPaisa withdrawals take 5-30 minutes. If not received after 1 hour contact support with your withdrawal ID, amount, destination number, and time of request. Bank transfers can take up to 24 hours.' },
    { title: 'APK Not Installing', fix: 'You need to enable Unknown Sources. Go to Settings > Security > Unknown Sources and turn it ON. Then try installing the APK again. If it still fails download the APK again as the file may be corrupted.' },
    { title: 'Game Freezing or Not Loading', fix: 'Check your internet connection first. Switch to a stronger WiFi or 4G connection. Close other apps running in the background. If the specific game keeps freezing try a different game to see if it is a general issue.' },
    { title: 'Cannot Withdraw — Account Not Verified', fix: 'Some withdrawal levels require account verification. Go to your profile, find the Verification section, and submit the required documents. Approval usually takes 24 hours.' },
    { title: 'Bonus Not Credited', fix: 'Welcome bonus is only for first deposit. If your first deposit bonus did not arrive within 5 minutes contact support with proof of deposit. Daily bonuses are claimed manually from the promotions section.' },
    { title: 'Forgot Withdrawal Password', fix: 'Go to Profile > Security > Withdrawal Password. You can reset it using your account login password and OTP verification. Set a new withdrawal password and save it somewhere safe.' },
  ]
  return (
    <>
      <Header lang="en-PK" />
      <div className="container"><div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> Troubleshooting</div></div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero">
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>U7777 Game Problems — Fix All Issues Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Solutions for every common U7777 problem Pakistani players face.</p>
        </div>
        <div className="page-content" style={{ maxWidth: '100%' }}>
          <div className="cards-grid" style={{ gridTemplateColumns: '1fr', gap: '16px', marginTop: '16px' }}>
            {issues.map((issue, i) => (
              <div className="card" key={i}>
                <h3>🔧 {issue.title}</h3>
                <p style={{ marginBottom: 0 }}>{issue.fix}</p>
              </div>
            ))}
          </div>
          <div className="info-box" style={{ marginTop: '32px' }}>
            <strong>Still Not Fixed?</strong> Contact U7777 support directly via live chat inside the app or email support@u7777.net.pk. Have your registered phone number, transaction IDs, and screenshots ready to speed up resolution.
          </div>
          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/u7777-contact" className="btn btn-primary">Contact Support</Link>
            <Link href="/u7777-faq" className="btn btn-outline">View FAQ</Link>
          </div>
          <div className="related-pages" style={{ marginTop: '48px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '14px', textTransform: 'uppercase' }}>Related Pages</h3>
            <div className="related-grid">
              {[['FAQ', '/u7777-faq'], ['Contact', '/u7777-contact'], ['Login', '/u7777-login'], ['Deposit', '/u7777-deposit'], ['Withdrawal', '/u7777-withdrawal'], ['App Download', '/u7777-download']].map(([label, href]) => (
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
