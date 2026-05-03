import refreshConfig from '../../refresh.config.json'

export default function LiveStats() {
  const stats = [
    { icon: '👥', label: 'Active Players Right Now', value: refreshConfig.activePlayers, color: '#f59e0b' },
    { icon: '🏆', label: 'Winners Today', value: refreshConfig.todayWinners, color: '#4ade80' },
    { icon: '💰', label: 'Biggest Win Today', value: refreshConfig.biggestWin, color: '#f59e0b' },
    { icon: '🎮', label: 'New Games Added', value: refreshConfig.newGames, color: '#60a5fa' },
    { icon: '💸', label: 'Total Withdrawn Today', value: refreshConfig.totalWithdrawn, color: '#4ade80' },
    { icon: '🎁', label: 'Welcome Bonus', value: refreshConfig.activeBonus, color: '#f59e0b' },
  ]

  const lastUpdated = new Date(refreshConfig.lastRefreshed).toLocaleTimeString('en-PK', { hour: '2-digit', minute: '2-digit' })

  return (
    <section style={{ background: 'var(--color-bg-2)', padding: '40px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <h2 style={{ fontSize: '20px', margin: 0 }}>U7777 Live Stats — Pakistan</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--color-text-muted)' }}>
            <span style={{ width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%', display: 'inline-block', animation: 'pulse 1.5s infinite' }}></span>
            Live · Updated {lastUpdated}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '20px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{stat.icon}</div>
              <div style={{ fontSize: '22px', fontWeight: '800', color: stat.color, marginBottom: '4px' }}>{stat.value}</div>
              <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: '1.3' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
