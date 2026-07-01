export interface Run {
  id: string;
  date: string;
  distance: number;
  duration: number;
  pace: number;
  effort: 'easy' | 'moderate' | 'hard' | 'race';
  notes: string;
  course: string;
  conditions: string;
  isPR?: boolean;
}

export interface PersonalRecord {
  event: string;
  time: number;
  date: string;
  course: string;
}

export const personalRecords: PersonalRecord[] = [
  { event: '1 Mile', time: 5 * 60 + 42, date: '2025-09-20', course: 'Maple Grove Invitational' },
  { event: '3K', time: 10 * 60 + 18, date: '2025-10-04', course: 'Forest Park Course' },
  { event: '5K', time: 18 * 60 + 33, date: '2025-10-18', course: 'State Qualifier' },
  { event: '8K', time: 28 * 60 + 55, date: '2025-11-01', course: 'Regional Championships' },
];

export const runs: Run[] = [
  { id: '1', date: '2026-06-13', distance: 2, duration: 979, pace: 490, effort: 'easy', notes: 'First run of the season', course: 'Neighborhood Loop', conditions: 'Sunny, 76°F' },
  { id: '2', date: '2026-06-14', distance: 2, duration: 916, pace: 457, effort: 'easy', notes: 'Pretty chill', course: 'Neighborhood Loop', conditions: 'Sunny, 64°F' },
  { id: '3', date: '2026-06-15', distance: 3, duration: 1408, pace: 466, effort: 'moderate', notes: 'Felt harder', course: 'Neighborhood Loop', conditions: 'Sunny, 63°F' },
  { id: '4', date: '2026-06-16', distance: 3, duration: 1351, pace: 450, effort: 'moderate', notes: 'Tired from gym', course: 'Run to Activity', conditions: 'Sunny, 75°F' },
  { id: '5', date: '2026-06-17', distance: 3, duration: 1374, pace: 457, effort: 'easy', notes: 'Enjoyable', course: 'Neighborhood Loop', conditions: 'Rain, 61°F' },
  { id: '6', date: '2026-06-18', distance: 3, duration: 1321, pace: 439, effort: 'easy', notes: 'Satisfying after work', course: 'Neighborhood Loop', conditions: 'Sunny, 71°F' },
  { id: '7', date: '2026-06-20', distance: 4, duration: 1807, pace: 451, effort: 'moderate', notes: 'Bored/hot', course: 'Amundsen', conditions: 'Sunny, 73°F' },
  { id: '8', date: '2026-06-22', distance: 4, duration: 1780, pace: 445, effort: 'easy', notes: 'Standard', course: 'Neighborhood Loop', conditions: 'Sunny, 64°F' },
  { id: '9', date: '2026-06-23', distance: 6, duration: 2640, pace: 440, effort: 'easy', notes: 'Great runners high', course: 'Neighborhood Loop', conditions: 'Sunny, 71°F' },
  { id: '10', date: '2026-06-24', distance: 3, duration: 1320, pace: 440, effort: 'moderate', notes: 'Running home from PB', course: 'Run to Activity', conditions: 'Rain, 72°F' },
  { id: '11', date: '2026-06-26', distance: 4.4, duration: 1900, pace: 433, effort: 'easy', notes: 'Quick', course: 'Neighborhood Loop', conditions: 'Rain, 69°F' },
  { id: '12', date: '2026-06-27', distance: 5.75, duration: 2501, pace: 435, effort: 'hard', notes: 'Felt awful / very hot', course: 'Neighborhood Loop', conditions: 'Cloudy, 77°F' },
  { id: '13', date: '2026-06-30', distance: 5, duration: 2255, pace: 451, effort: 'moderate', notes: 'PF has bad AC', course: 'Treadmill', conditions: 'N/A' },
];

export interface WeeklyStats {
  week: string;
  miles: number;
  runs: number;
}

export const weeklyMileage: WeeklyStats[] = [
  { week: 'Jun W2', miles: 10, runs: 5 },
  { week: 'Jun W3', miles: 14, runs: 4 },
  { week: 'Jun W4', miles: 15.15, runs: 4 },
];