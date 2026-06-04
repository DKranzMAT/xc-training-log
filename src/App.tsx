import './index.css';
import { useState, useEffect } from 'react';
import { runs, weeklyMileage } from './data/mockData';
import { StatCard } from './components/StatCard';
import { MileageChart } from './components/MileageChart';
import { PRBoard } from './components/PRBoard';
import { RunLog } from './components/RunLog';
import { Activity, Sun, Moon } from 'lucide-react';

function formatPace(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}/mi`;
}

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const totalMiles = runs.reduce((sum, r) => sum + r.distance, 0).toFixed(1);
  const avgPace = Math.round(runs.reduce((sum, r) => sum + r.pace, 0) / runs.length);
  const thisWeekMiles = weeklyMileage[weeklyMileage.length - 1].miles;
  const prCount = runs.filter(r => r.isPR).length;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid var(--border)', padding: '0 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Activity size={18} color="var(--accent-gold)" />
            <span style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '1.5rem', letterSpacing: '0.08em', color: 'var(--text-primary)' }}>
              XC TRAINING LOG
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--text-muted)' }}>2026 SUMMER TRAINING</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: '6px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }} className="main-content">
        {/* Athlete name */}
      <div style={{ marginBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div className="section-label mb-1">Athlete</div>
          <h1 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '3rem', letterSpacing: '0.05em', color: 'var(--text-primary)', margin: 0, lineHeight: 1 }}>
            Jakub Kranz
          </h1>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 4 }}>
            Cross Country · Distance Runner · Downers Grove, IL
          </div>
        </div>
        <img src="/xc-training-log/south-logo.png" alt="Downers Grove South" className="school-logo athlete-logo" style={{ height: 48, opacity: 0.85 }} />
      </div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }} className="stats-grid">
          <StatCard label="Total Miles" value={totalMiles} sub="logged this season" accent="gold" />
          <StatCard label="This Week" value={`${thisWeekMiles} mi`} sub="current week" accent="default" />
          <StatCard label="Avg Pace" value={formatPace(avgPace)} sub="across all runs" accent="default" />
          <StatCard label="PRs Set" value={`${prCount}`} sub="this season" accent="green" />
        </div>

        {/* Chart + PRs */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12, marginBottom: 20 }} className="chart-pr-grid">
          <MileageChart />
          <PRBoard />
        </div>

        {/* Run log */}
        <RunLog />
      </main>
    </div>
  );
}

export default App;