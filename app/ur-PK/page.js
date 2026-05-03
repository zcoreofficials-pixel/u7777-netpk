import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'U7777 گیم — پاکستان کی نمبر 1 کمائی ایپ 2026',
  description: 'U7777 گیم ڈاؤنلوڈ کریں۔ جاز کیش اور ایزی پیسہ سے پیسے کمائیں۔ 50% ویلکم بونس۔ Teen Patti، سلاٹس اور مزید گیمز۔',
  alternates: {
    canonical: 'https://u7777.net.pk/ur-PK',
    languages: {
      'en-PK': 'https://u7777.net.pk/en-PK',
      'ur-PK': 'https://u7777.net.pk/ur-PK',
      'x-default': 'https://u7777.net.pk/en-PK',
    },
  },
}

export default function UrduHomePage() {
  const lastUpdated = new Date().toLocaleDateString('ur-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Header lang="ur-PK" />
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="update-badge">🟢 اپڈیٹ: {lastUpdated}</div>
            <div className="hero-badge"><span className="pulse"></span> پاکستان کی نمبر 1 کمائی ایپ</div>
            <h1 className="hero-title" style={{ direction: 'rtl' }}>U7777 گیم — <span>جاز کیش سے کمائیں</span></h1>
            <p className="hero-desc" style={{ direction: 'rtl' }}>U7777 پاکستانی کھلاڑیوں کے لیے بہترین آن لائن گیمنگ پلیٹ فارم ہے۔ صرف 100 روپے سے شروع کریں اور جاز کیش یا ایزی پیسہ سے فوری نکاسی کریں۔</p>
            <div className="hero-btns">
              <Link href="/go" className="btn btn-primary">ابھی جوائن کریں — 50% بونس</Link>
              <Link href="/en-PK/app" className="btn btn-download">📱 APK ڈاؤنلوڈ</Link>
            </div>
            <div className="hero-stats">
              <div><div className="hero-stat-label">فعال کھلاڑی</div><div className="hero-stat-value">50,000+</div></div>
              <div><div className="hero-stat-label">کم از کم جمع</div><div className="hero-stat-value">PKR 100</div></div>
              <div><div className="hero-stat-label">ویلکم بونس</div><div className="hero-stat-value">50%</div></div>
            </div>
          </div>
          <div className="hero-img-wrap">
            <img src="/images/hero.webp" alt="U7777 گیم پاکستان — جاز کیش اور ایزی پیسہ سے کمائی" width="500" height="500" />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="payment-bar">
          <span className="payment-label">ادائیگی:</span>
          <div className="payment-badges">
            <span className="payment-badge jazzcash">💳 جاز کیش</span>
            <span className="payment-badge easypaisa">💚 ایزی پیسہ</span>
            <span className="payment-badge bank">🏦 بینک ٹرانسفر</span>
          </div>
        </div>
      </div>

      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <h2 style={{ direction: 'rtl' }}>U7777 سے کمائی کیسے شروع کریں؟</h2>
            <p style={{ direction: 'rtl' }}>صرف تین آسان قدم اور آپ کھیلنا شروع کر سکتے ہیں</p>
          </div>
          <div className="cards-grid">
            {[
              { step: '1', title: 'APK ڈاؤنلوڈ کریں', desc: 'اس ویب سائٹ سے U7777 APK ڈاؤنلوڈ کریں اور اپنے Android فون پر انسٹال کریں۔' },
              { step: '2', title: 'اکاؤنٹ بنائیں', desc: 'اپنا موبائل نمبر درج کریں، پاس ورڈ بنائیں اور OTP سے تصدیق کریں۔' },
              { step: '3', title: 'جاز کیش سے جمع کریں', desc: 'صرف PKR 100 جمع کریں اور 50% بونس کے ساتھ کھیلنا شروع کریں۔' },
            ].map((item) => (
              <div className="card" key={item.step} style={{ direction: 'rtl' }}>
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="bonus-box">
            <div className="bonus-amount">50%</div>
            <div className="bonus-label" style={{ direction: 'rtl' }}>پہلے جمع پر ویلکم بونس</div>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px', direction: 'rtl' }}>100 روپے جمع کریں اور 150 روپے سے کھیلیں۔ بونس خودکار ملتا ہے۔</p>
            <Link href="/go" className="btn btn-primary">بونس حاصل کریں</Link>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <h2 style={{ direction: 'rtl' }}>U7777 پر مشہور گیمز</h2>
          </div>
          <div className="cards-grid">
            {[
              { icon: '🃏', title: 'ٹین پتی', desc: 'پاکستان میں سب سے زیادہ کھیلا جانے والا کارڈ گیم۔' },
              { icon: '🐉', title: 'ڈریگن ٹائیگر', desc: 'سب سے آسان لائیو گیم۔ ڈریگن یا ٹائیگر چنیں اور جیتیں۔' },
              { icon: '🎰', title: 'سلاٹ گیمز', desc: '200 سے زیادہ سلاٹ مشینیں۔ گھمائیں اور جیتیں۔' },
              { icon: '🏏', title: 'کرکٹ بیٹنگ', desc: 'PSL اور بین الاقوامی میچز پر لائیو بیٹنگ کریں۔' },
              { icon: '🎣', title: 'فشنگ گیمز', desc: 'مچھلیاں پکڑیں اور سکے کمائیں۔' },
              { icon: '♟️', title: 'لوڈو کنگ', desc: 'اپنا پسندیدہ بورڈ گیم اب حقیقی پیسوں کے ساتھ۔' },
            ].map((game, i) => (
              <div className="card" key={i} style={{ direction: 'rtl' }}>
                <div className="card-icon">{game.icon}</div>
                <h3>{game.title}</h3>
                <p>{game.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ direction: 'rtl' }}>U7777 کھیلنے کے لیے تیار ہیں؟</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '500px', margin: '0 auto 32px', direction: 'rtl' }}>50,000 سے زیادہ پاکستانی کھلاڑیوں میں شامل ہوں۔ مفت ڈاؤنلوڈ کریں اور آج ہی کمانا شروع کریں۔</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">ابھی جوائن کریں</Link>
            <Link href="/en-PK/app" className="btn btn-download">📱 APK ڈاؤنلوڈ</Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: '48px' }}>
        <div className="related-pages">
          <h3 style={{ marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '14px' }}>تمام صفحات</h3>
          <div className="related-grid">
            {[
              ['English Version', '/en-PK'], ['App Download', '/en-PK/app'], ['Login', '/en-PK/login'],
              ['Register', '/en-PK/register'], ['Deposit', '/en-PK/deposit'], ['Withdrawal', '/en-PK/withdrawal'],
              ['Bonus', '/en-PK/bonus'], ['FAQ', '/en-PK/faq'], ['How to Play', '/en-PK/how-to-play'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="related-link">{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <Footer lang="ur-PK" />
    </>
  )
}
