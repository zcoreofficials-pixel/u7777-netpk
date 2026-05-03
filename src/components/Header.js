'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header({ lang = 'en-PK' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const base = `/${lang}`

  const navLinks = [
    { href: `${base}/app`,          label: 'App Download' },
    { href: `${base}/login`,        label: 'Login' },
    { href: `${base}/register`,     label: 'Register' },
    { href: `${base}/deposit`,      label: 'Deposit' },
    { href: `${base}/bonus`,        label: 'Bonus' },
    { href: `${base}/how-to-play`,  label: 'How to Play' },
    { href: `${base}/faq`,          label: 'FAQ' },
  ]

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href={base} className="site-logo">
          U<span>7777</span>
        </Link>
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <div style={{ display: 'flex', gap: '4px', background: 'var(--color-bg-card)', padding: '4px', borderRadius: '6px' }}>
            <Link href="/en-PK" style={{ color: lang === 'en-PK' ? '#000' : 'var(--color-text-muted)', background: lang === 'en-PK' ? 'var(--color-accent)' : 'transparent', fontSize: '12px', fontWeight: '600', padding: '3px 8px', borderRadius: '4px' }}>EN</Link>
            <Link href="/ur-PK" style={{ color: lang === 'ur-PK' ? '#000' : 'var(--color-text-muted)', background: lang === 'ur-PK' ? 'var(--color-accent)' : 'transparent', fontSize: '12px', fontWeight: '600', padding: '3px 8px', borderRadius: '4px' }}>اردو</Link>
          </div>
          <Link href={`${base}/login`} className="btn btn-login" style={{ padding: '8px 16px', fontSize: '14px' }}>Login</Link>
          <Link href="/go" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>Join Now</Link>
          <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
