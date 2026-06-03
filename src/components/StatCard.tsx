interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  accent?: 'gold' | 'green' | 'default';
}

export function StatCard({ label, value, sub, accent = 'default' }: StatCardProps) {
  const accentColor = accent === 'gold' ? '#d9932a' : accent === 'green' ? '#22c55e' : '#f1f5f9';
  return (
    <div className="stat-card p-5">
      <div className="section-label mb-2">{label}</div>
      <div className="text-3xl font-bold" style={{ fontFamily: 'Bebas Neue, cursive', color: accentColor, letterSpacing: '0.02em' }}>
        {value}
      </div>
      {sub && <div className="text-xs mt-1" style={{ color: '#64748b' }}>{sub}</div>}
    </div>
  );
}
