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
  { id: '1', date: '2026-05-28', distance: 5.2, duration: 2340, pace: 450, effort: 'easy', notes: 'Recovery run, legs felt heavy from Saturday', course: 'Prairie Path Loop', conditions: 'Cloudy, 62°F' },
  { id: '2', date: '2026-05-26', distance: 8.0, duration: 3720, pace: 465, effort: 'moderate', notes: 'Long run, good aerobic base work', course: 'River Trail', conditions: 'Sunny, 68°F' },
  { id: '3', date: '2026-05-24', distance: 3.1, duration: 1113, pace: 359, effort: 'hard', notes: 'Time trial, new 5K PR attempt — felt strong at mile 2', course: 'Track', conditions: 'Clear, 58°F', isPR: true },
  { id: '4', date: '2026-05-22', distance: 6.0, duration: 2820, pace: 470, effort: 'easy', notes: 'Easy shakeout before time trial', course: 'Neighborhood Loop', conditions: 'Overcast, 55°F' },
  { id: '5', date: '2026-05-20', distance: 7.5, duration: 3450, pace: 460, effort: 'moderate', notes: 'Tempo intervals, 3x1 mile at threshold', course: 'Forest Park Course', conditions: 'Windy, 60°F' },
  { id: '6', date: '2026-05-18', distance: 4.0, duration: 1920, pace: 480, effort: 'easy', notes: 'Morning run before school', course: 'Prairie Path Loop', conditions: 'Cool, 50°F' },
  { id: '7', date: '2026-05-15', distance: 9.0, duration: 4230, pace: 470, effort: 'moderate', notes: 'Long run with coach, talked about fall season goals', course: 'River Trail', conditions: 'Perfect, 64°F' },
  { id: '8', date: '2026-05-13', distance: 5.0, duration: 2400, pace: 480, effort: 'easy', notes: 'Easy day', course: 'Neighborhood Loop', conditions: 'Rainy, 57°F' },
  { id: '9', date: '2026-05-11', distance: 6.5, duration: 2925, pace: 450, effort: 'hard', notes: 'Speed workout: 8x400m, fastest split 72 sec', course: 'Track', conditions: 'Sunny, 65°F' },
  { id: '10', date: '2026-05-08', distance: 8.5, duration: 3995, pace: 470, effort: 'moderate', notes: 'Weekend long run, explored new trail section', course: 'Forest Path Extended', conditions: 'Partly cloudy, 60°F' },
  { id: '11', date: '2026-05-06', distance: 4.5, duration: 2160, pace: 480, effort: 'easy', notes: 'Recovery, kept it super easy', course: 'Prairie Path Loop', conditions: 'Warm, 72°F' },
  { id: '12', date: '2026-05-04', distance: 5.5, duration: 2530, pace: 460, effort: 'moderate', notes: 'Fartlek session, fun workout', course: 'River Trail', conditions: 'Clear, 66°F' },
];

export interface WeeklyStats {
  week: string;
  miles: number;
  runs: number;
}

export const weeklyMileage: WeeklyStats[] = [
  { week: 'Jan W1', miles: 18, runs: 4 },
  { week: 'Jan W2', miles: 22, runs: 5 },
  { week: 'Jan W3', miles: 20, runs: 5 },
  { week: 'Jan W4', miles: 25, runs: 6 },
  { week: 'Feb W1', miles: 28, runs: 6 },
  { week: 'Feb W2', miles: 24, runs: 5 },
  { week: 'Feb W3', miles: 30, runs: 6 },
  { week: 'Feb W4', miles: 26, runs: 6 },
  { week: 'Mar W1', miles: 32, runs: 6 },
  { week: 'Mar W2', miles: 28, runs: 5 },
  { week: 'Mar W3', miles: 35, runs: 7 },
  { week: 'Mar W4', miles: 30, runs: 6 },
  { week: 'Apr W1', miles: 38, runs: 7 },
  { week: 'Apr W2', miles: 34, runs: 6 },
  { week: 'Apr W3', miles: 40, runs: 7 },
  { week: 'Apr W4', miles: 36, runs: 7 },
  { week: 'May W1', miles: 42, runs: 7 },
  { week: 'May W2', miles: 38, runs: 7 },
  { week: 'May W3', miles: 28, runs: 6 },
  { week: 'May W4', miles: 13, runs: 3 },
];
