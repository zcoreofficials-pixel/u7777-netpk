import Link from 'next/link'
import Header from '../../../src/components/Header'
import Footer from '../../../src/components/Footer'
export const metadata = {
  title: 'U7777 Account Verification — KYC Guide Pakistan',
  description: 'U7777 Game account verification guide for Pakistan. KYC process, required documents, verification time and what happens after approval.',
  alternates: { canonical: 'https://u7777.net.pk/en-PK/verification' },
}
export default function VerificationPage() {
  const lastUpdated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Header lang="en-PK" />
      <div className="container"><div className="breadcrumb"><Link href="/en-PK">Home</Link> <span>›</span> Verification</div></div>
      <div className="container" style={{ paddingBottom: '72px' }}>
        <div className="page-hero">
          <div className="update-badge">🟢 Updated: {lastUpdated}</div>
          <h1>U7777 Account Verification — KYC Guide Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '12px' }}>Verify your U7777 account to unlock higher withdrawal limits and full platform access.</p>
        </div>
        <div className="page-content">
          <h2>Why Verify Your Account?</h2>
          <ul>
            <li>Unlock higher withdrawal limits</li>
            <li>Protect your account from unauthorized access</li>
            <li>Required for VIP program participation</li>
            <li>Faster withdrawal processing for verified accounts</li>
          </ul>
          <h2>How to Verify Your U7777 Account</h2>
          <div className="cards-grid" style={{ gridTemplateColumns: '1fr', gap: '16px', marginTop: '16px' }}>
            {[
              { step: '1', title: 'Go to Profile', desc: 'Open U7777 app and tap your Profile icon in the top corner of the home screen.' },
              { step: '2', title: 'Find Verification Section', desc: 'Look for Identity Verification or KYC section in your profile settings.' },
              { step: '3', title: 'Submit Documents', desc: 'Upload a clear photo of your Pakistani CNIC (front and back). Make sure all text is readable.' },
              { step: '4', title: 'Wait for Approval', desc: 'Verification usually takes 24 hours. You will receive a notification when approved.' },
            ].map((item) => (
              <div className="card" key={item.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="step-number" style={{ flexShrink: 0 }}>{item.step}</div>
                <div><h3 style={{ marginTop: 0 }}>{item.title}</h3><p style={{ marginBottom: 0 }}>{item.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="info-box" style={{ marginTop: '24px' }}><strong>Documents Required:</strong> Pakistani CNIC (front and back). Photos must be clear and all four corners visible. Blurry or cropped photos will be rejected.</div>
          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Verify Account</Link>
            <Link href="/en-PK/withdrawal" className="btn btn-outline">Withdrawal Guide</Link>
          </div>
        </div>
      </div>
      <Footer lang="en-PK" />
    </>
  )
}
