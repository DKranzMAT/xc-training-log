interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  accent?: 'gold' | 'green' | 'default';
}

export function StatCard({ label, value, sub, accent = 'default' }: StatCardProps) {
  const accentColor = accent === 'gold' ? 'var(--accent-gold)' : accent === 'green' ? 'var(--accent-green)' : 'var(--text-primary)';
  return (
    <div className="stat-card p-5">
      <div className="section-label mb-2">{label}</div>
      <div className="text-3xl font-bold" style={{ fontFamily: 'Bebas Neue, cursive', color: accentColor, letterSpacing: '0.02em' }}>
        {value}
      </div>
      {sub && <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{sub}</div>}
    </div>
  );
}