'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header({ lang = 'en-PK' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const base = `/${lang}`

  const navLinks = [
    { href: `${base}/U7777-game-download`, label: 'Download' },
    { href: `${base}/register`, label: 'Register' },
    { href: `${base}/deposit`, label: 'Deposit' },
    { href: `${base}/bonus`, label: 'Bonus' },
    { href: `${base}/how-to-play`, label: 'How to Play' },
    { href: `${base}/faq`, label: 'FAQ' },
  ]

  return (
    <header style={{ background: 'rgba(10,14,26,0.97)', borderBottom: '1px solid #1f2d40', position: 'sticky', top: 0, zIndex: 100, width: '100%' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px', padding: '0 16px', gap: '8px' }}>
        
        {/* Logo */}
        <Link href={base} style={{ fontSize: '20px', fontWeight: '900', color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
          U<span style={{ color: '#f59e0b' }}>7777</span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', flex: 1, justifyContent: 'center' }} className="desktop-nav">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '4px' }}>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} style={{ color: '#9ca3af', fontSize: '13px', fontWeight: '500', padding: '6px 10px', borderRadius: '6px', display: 'block', textDecoration: 'none' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          {/* Lang Switcher */}
          <div style={{ display: 'flex', gap: '2px', background: '#1a2235', padding: '3px', borderRadius: '6px' }}>
            <Link href="/en-PK" style={{ color: lang === 'en-PK' ? '#000' : '#9ca3af', background: lang === 'en-PK' ? '#f59e0b' : 'transparent', fontSize: '11px', fontWeight: '600', padding: '2px 6px', borderRadius: '4px', textDecoration: 'none' }}>EN</Link>
            <Link href="/ur-PK" style={{ color: lang === 'ur-PK' ? '#000' : '#9ca3af', background: lang === 'ur-PK' ? '#f59e0b' : 'transparent', fontSize: '11px', fontWeight: '600', padding: '2px 6px', borderRadius: '4px', textDecoration: 'none' }}>اردو</Link>
          </div>

          {/* Login Button */}
          <Link href={`${base}/U7777-Login`} style={{ background: '#1a2235', color: '#fff', border: '1px solid #1f2d40', padding: '6px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Login
          </Link>

          {/* Join Button - hidden on very small screens */}
          <Link href={`${base}/register`} style={{ background: '#f59e0b', color: '#000', padding: '6px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Join Now
          </Link>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px', flexShrink: 0 }} aria-label="Menu">
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#e5e7eb', borderRadius: '2px' }}></span>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#e5e7eb', borderRadius: '2px' }}></span>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#e5e7eb', borderRadius: '2px' }}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: '#111827', borderTop: '1px solid #1f2d40', padding: '12px 16px' }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', color: '#9ca3af', fontSize: '15px', fontWeight: '500', padding: '10px 12px', borderRadius: '6px', textDecoration: 'none', borderBottom: '1px solid #1f2d40' }}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
