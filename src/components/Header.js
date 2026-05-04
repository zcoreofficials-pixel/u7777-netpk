'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/u7777-download', label: 'Download' },
    { href: '/u7777-register', label: 'Register' },
    { href: '/u7777-deposit', label: 'Deposit' },
    { href: '/u7777-bonus', label: 'Bonus' },
    { href: '/u7777-how-to-play', label: 'How to Play' },
    { href: '/u7777-faq', label: 'FAQ' },
  ]

  return (
    <header style={{ background: 'rgba(10,14,26,0.97)', borderBottom: '1px solid #1f2d40', position: 'sticky', top: 0, zIndex: 100, width: '100%' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px', padding: '0 16px', gap: '8px' }}>
        <Link href="/" style={{ fontSize: '20px', fontWeight: '900', color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
          U<span style={{ color: '#f59e0b' }}>7777</span>
        </Link>
        <nav style={{ flex: 1, display: 'none' }} id="desktop-nav">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2px', justifyContent: 'center' }}>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} style={{ color: '#9ca3af', fontSize: '13px', fontWeight: '500', padding: '6px 8px', borderRadius: '6px', display: 'block', textDecoration: 'none' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          <Link href="/u7777-login" style={{ background: '#1a2235', color: '#fff', border: '1px solid #1f2d40', padding: '6px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', textDecoration: 'none', whiteSpace: 'nowrap' }}>Login</Link>
          <Link href="/u7777-register" style={{ background: '#f59e0b', color: '#000', padding: '6px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap' }}>Join Now</Link>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px', flexShrink: 0 }} aria-label="Menu">
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#e5e7eb', borderRadius: '2px' }}></span>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#e5e7eb', borderRadius: '2px' }}></span>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#e5e7eb', borderRadius: '2px' }}></span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div style={{ background: '#111827', borderTop: '1px solid #1f2d40', padding: '12px 16px' }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', color: '#9ca3af', fontSize: '15px', padding: '10px 12px', borderRadius: '6px', textDecoration: 'none', borderBottom: '1px solid #1f2d40' }}>
              {link.label}
            </Link>
          ))}
          <Link href="/u7777-login" onClick={() => setMenuOpen(false)} style={{ display: 'block', color: '#f59e0b', fontSize: '15px', padding: '10px 12px', borderRadius: '6px', textDecoration: 'none', marginTop: '8px', fontWeight: '600' }}>
            Login to U7777
          </Link>
        </div>
      )}
    </header>
  )
}
