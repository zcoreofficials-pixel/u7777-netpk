import './globals.css'

export const metadata = {
  metadataBase: new URL('https://u7777.net.pk'),
  title: {
    default: 'U7777 Game — Official Pakistan Earning App 2026',
    template: '%s | U7777 Game Pakistan',
  },
  description: 'Download U7777 Game APK for Pakistan. Play slots, cards, fishing games and earn real money via JazzCash and EasyPaisa. 50% welcome bonus for new players.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-PK">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "U7777 Game Pakistan",
              "url": "https://u7777.net.pk",
              "logo": "https://u7777.net.pk/images/hero.webp",
              "description": "Pakistan's most popular real money gaming app",
              "address": { "@type": "PostalAddress", "addressCountry": "PK" },
              "contactPoint": { "@type": "ContactPoint", "contactType": "customer support", "email": "support@u7777.net.pk" }
            })
          }}
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif", background: '#0a0e1a', color: '#e5e7eb', margin: 0 }}>
        {children}
      </body>
    </html>
  )
}
