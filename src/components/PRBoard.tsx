import { Trophy } from 'lucide-react';
import { personalRecords } from '../data/mockData';

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function PRBoard() {
  return (
    <div className="stat-card p-5">
      <div className="flex items-center gap-2 mb-4">
        <Trophy size={14} color="#d9932a" />
        <div className="section-label">Personal Records</div>
      </div>
      <div className="space-y-3">
        {personalRecords.map((pr) => (
          <div key={pr.event} className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid #1e293b' }}>
            <div>
              <div style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '1.1rem', letterSpacing: '0.05em', color: '#f1f5f9' }}>{pr.event}</div>
              <div style={{ fontSize: '0.65rem', color: '#475569', fontFamily: 'JetBrains Mono' }}>{pr.course}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '1rem', fontWeight: 500, color: '#22c55e' }}>{formatTime(pr.time)}</div>
              <div style={{ fontSize: '0.65rem', color: '#475569' }}>{new Date(pr.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
