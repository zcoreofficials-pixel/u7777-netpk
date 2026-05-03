'use client'
import { useEffect } from 'react'

export default function PlayPage() {
  useEffect(() => {
    window.location.href = 'https://d3q39670qsiozy.cloudfront.net/?dl=5umrac'
  }, [])

  return (
    <div style={{ background: '#0a0e1a', color: '#e5e7eb', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', margin: 0, flexDirection: 'column', gap: '16px', padding: '20px', textAlign: 'center' }}>
      <div style={{ fontSize: '48px' }}>🎮</div>
      <h1 style={{ fontSize: '24px', color: '#f59e0b' }}>Taking you to U7777...</h1>
      <p style={{ color: '#9ca3af', maxWidth: '400px' }}>Please wait while we redirect you to the official U7777 game.</p>
      <a href="https://d3q39670qsiozy.cloudfront.net/?dl=5umrac" style={{ background: '#f59e0b', color: '#000', padding: '12px 28px', borderRadius: '6px', fontWeight: '700', textDecoration: 'none', marginTop: '8px' }}>
        Click here if not redirected
      </a>
    </div>
  )
}
