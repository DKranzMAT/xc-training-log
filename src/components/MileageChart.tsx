import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { weeklyMileage } from '../data/mockData';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#1a2332', border: '1px solid #2d3f55', borderRadius: 8, padding: '10px 14px' }}>
        <div className="section-label mb-1">{label}</div>
        <div style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '1.4rem', color: '#d9932a' }}>
          {payload[0].value} mi
        </div>
        <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{payload[0].payload.runs} runs</div>
      </div>
    );
  }
  return null;
};

export function MileageChart() {
  return (
    <div className="stat-card p-5">
      <div className="section-label mb-4">Weekly Mileage</div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={weeklyMileage} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="mileageGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#d9932a" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#d9932a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="week" tick={{ fontSize: 9, fill: '#475569', fontFamily: 'JetBrains Mono' }} tickLine={false} axisLine={false} interval={3} />
          <YAxis tick={{ fontSize: 9, fill: '#475569', fontFamily: 'JetBrains Mono' }} tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="miles" stroke="#d9932a" strokeWidth={2} fill="url(#mileageGrad)" dot={false} activeDot={{ r: 4, fill: '#d9932a', strokeWidth: 0 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
