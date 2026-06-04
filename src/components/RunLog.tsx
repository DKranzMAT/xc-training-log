import { runs } from '../data/mockData';
import { MapPin, Wind } from 'lucide-react';

function formatPace(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}/mi`;
}

function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

const effortColors: Record<string, string> = {
  easy: '#3b82f6',
  moderate: '#d9932a',
  hard: '#ef4444',
  race: '#a855f7',
};

export function RunLog() {
  return (
    <div className="stat-card">
      <div className="p-5 pb-3 flex items-center justify-between">
        <div className="section-label">Run Log</div>
        <div className="section-label">{runs.length} runs</div>
      </div>
      <div>
        {runs.map((run) => (
          <div key={run.id} className="run-row px-5 py-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '1.15rem', color: 'var(--text-primary)', letterSpacing: '0.03em' }}>                    {run.distance} mi
                  </span>
                  <span className="pace-badge">{formatPace(run.pace)}</span>
                  {run.isPR && <span className="pr-badge">🏆 PR</span>}
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: effortColors[run.effort], display: 'inline-block', flexShrink: 0 }} title={run.effort} />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: '0.7rem', color: '#475569' }}>
                    <MapPin size={10} />
                    {run.course}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: '0.7rem', color: '#475569' }}>
                    <Wind size={10} />
                    {run.conditions}
                  </span>
                </div>
                {run.notes && (
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontStyle: 'italic' }}>{run.notes}</div>
                )}
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{formatDuration(run.duration)}</div>
                <div style={{ fontSize: '0.65rem', color: '#475569', marginTop: 2 }}>
                  {new Date(run.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
