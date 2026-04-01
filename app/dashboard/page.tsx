'use client';

import { useEffect, useMemo, useState } from 'react';

import { MobileDock } from '@/components/ui/MobileDock';

type Level = 'Easy' | 'Medium' | 'Hard';
type View = 'home' | 'coding-interviews' | 'roadmap' | 'problems' | 'company-tagged' | 'system-design' | 'solver';
type Problem = { id: string; title: string; difficulty: Level };

const interviewProblems: Problem[] = [
  { id: '301', title: 'Design Dynamic Array (Resizable Array)', difficulty: 'Easy' },
  { id: '302', title: 'Design Singly Linked List', difficulty: 'Easy' },
  { id: '303', title: 'Design Double-ended Queue', difficulty: 'Easy' },
  { id: '304', title: 'Design Binary Search Tree', difficulty: 'Medium' },
  { id: '305', title: 'Design Hash Table', difficulty: 'Medium' },
  { id: '306', title: 'Design Heap', difficulty: 'Medium' },
  { id: '307', title: 'Design Graph', difficulty: 'Hard' },
  { id: '308', title: 'Design Disjoint Set (Union-Find)', difficulty: 'Hard' },
  { id: '309', title: 'Design Segment Tree', difficulty: 'Hard' },
];

const sortingProblems: Problem[] = [
  { id: '401', title: 'Insertion Sort', difficulty: 'Easy' },
  { id: '402', title: 'Merge Sort', difficulty: 'Medium' },
  { id: '403', title: 'Quick Sort', difficulty: 'Medium' },
];

const graphProblems: Problem[] = [
  { id: '501', title: 'Matrix Depth-First Search', difficulty: 'Medium' },
  { id: '502', title: 'Matrix Breadth-First Search', difficulty: 'Medium' },
  { id: '503', title: "Dijkstra's Algorithm", difficulty: 'Hard' },
  { id: '504', title: "Prim's Algorithm", difficulty: 'Hard' },
  { id: '505', title: "Kruskal's Algorithm", difficulty: 'Hard' },
  { id: '506', title: 'Topological Sort', difficulty: 'Medium' },
];

const dpProblems: Problem[] = [
  { id: '601', title: '0 / 1 Knapsack', difficulty: 'Hard' },
  { id: '602', title: 'Unbounded Knapsack', difficulty: 'Hard' },
];

const companyProblems: Problem[] = [{ id: '001', title: 'Two Sum', difficulty: 'Easy' }];

const companyRanks = [
  ['Google', 500],
  ['Amazon', 465],
  ['Meta', 428],
  ['Microsoft', 397],
  ['Bloomberg', 360],
  ['Apple', 211],
  ['Tiktok', 202],
  ['Oracle', 179],
  ['Uber', 171],
  ['Goldman Sachs', 138],
  ['Adobe', 132],
  ['TCS', 106],
  ['LinkedIn', 97],
  ['Zoho', 92],
  ['Walmart Labs', 89],
] as const;

const infoCardPalettes = [
  { bg: 'linear-gradient(165deg,#e5d7ff 0%,#d4c0ff 100%)', text: '#18191f' },
  { bg: 'linear-gradient(165deg,#6152ff 0%,#6d5dff 100%)', text: '#ffffff' },
  { bg: 'linear-gradient(165deg,#ffd95f 0%,#ffd15a 100%)', text: '#171717' },
  { bg: 'linear-gradient(165deg,#9de7ca 0%,#7fddb8 100%)', text: '#171717' },
  { bg: 'linear-gradient(165deg,#ffc2cf 0%,#ffacc0 100%)', text: '#18191f' },
];

function DifficultyChip({ level }: { level: Level }) {
  const color =
    level === 'Easy'
      ? 'bg-emerald-500/15 text-emerald-300'
      : level === 'Medium'
        ? 'bg-amber-500/15 text-amber-300'
        : 'bg-rose-500/15 text-rose-300';
  return <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${color}`}>{level}</span>;
}

function SolvedGauge({
  easySolved,
  easyTotal,
  medSolved,
  medTotal,
  hardSolved,
  hardTotal,
  compact = false,
}: {
  easySolved: number;
  easyTotal: number;
  medSolved: number;
  medTotal: number;
  hardSolved: number;
  hardTotal: number;
  compact?: boolean;
}) {
  const totalSolved = easySolved + medSolved + hardSolved;
  const total = easyTotal + medTotal + hardTotal;
  const ratio = total === 0 ? 0 : totalSolved / total;
  const radius = 84;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference * ratio;
  const centerX = 110;
  const centerY = 110;
  const easyAngle = 145;
  const medAngle = 40;
  const hardAngle = 15;
  const toXY = (angle: number, r: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: centerX + Math.cos(rad) * r,
      y: centerY + Math.sin(rad) * r,
    };
  };
  const easyPoint = toXY(easyAngle, radius);
  const medPoint = toXY(medAngle, radius);
  const hardPoint = toXY(hardAngle, radius);

  return (
    <div className={`grid gap-5 ${compact ? 'md:grid-cols-[1fr_190px]' : 'md:grid-cols-[1fr_240px]'} md:items-center`}>
      <div className="space-y-2">
        <div className={`flex items-center justify-between ${compact ? 'text-[1.6rem]' : 'text-[2rem]'}`}>
          <span className="text-[#36d48d]">Easy</span>
          <span className="text-white/95">
            {easySolved}/{easyTotal}
          </span>
        </div>
        <div className={`flex items-center justify-between ${compact ? 'text-[1.6rem]' : 'text-[2rem]'}`}>
          <span className="text-[#ffbe2e]">Med</span>
          <span className="text-white/95">
            {medSolved}/{medTotal}
          </span>
        </div>
        <div className={`flex items-center justify-between ${compact ? 'text-[1.6rem]' : 'text-[2rem]'}`}>
          <span className="text-[#ff6b73]">Hard</span>
          <span className="text-white/95">
            {hardSolved}/{hardTotal}
          </span>
        </div>
      </div>
      <div className={`relative mx-auto ${compact ? 'h-[218px] w-[190px]' : 'h-[252px] w-[220px]'}`}>
        <svg className="h-full w-full -rotate-[130deg]" viewBox="0 0 220 220">
          <circle cx="110" cy="110" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="13" />
          <circle
            cx="110"
            cy="110"
            r={radius}
            fill="none"
            stroke="#3f4a45"
            strokeWidth="13"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
          />
          <circle cx={easyPoint.x} cy={easyPoint.y} r="6" fill="#36d48d" />
          <circle cx={medPoint.x} cy={medPoint.y} r="6" fill="#ffbe2e" />
          <circle cx={hardPoint.x} cy={hardPoint.y} r="6" fill="#ff6b73" />
        </svg>
        <div className={`absolute inset-x-0 top-0 grid place-items-center text-center ${compact ? 'h-[186px]' : 'h-[220px]'}`}>
          <div>
            <div className={`${compact ? 'text-[3.2rem]' : 'text-[4.1rem]'} font-bold leading-none text-white`}>
              {totalSolved}
              <span className={`${compact ? 'text-[2.25rem]' : 'text-[3.1rem]'} font-medium text-white/78`}>/{total}</span>
            </div>
          </div>
        </div>
        <div className={`absolute inset-x-0 bottom-0 text-center ${compact ? 'text-[1.45rem]' : 'text-[2rem]'} text-white/45`}>Solved</div>
      </div>
    </div>
  );
}

function ProblemTable({ rows, onOpen }: { rows: Problem[]; onOpen: (p: Problem) => void }) {
  const pageSize = 8;
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * pageSize;
  const visibleRows = rows.slice(pageStart, pageStart + pageSize);

  return (
    <section className="mt-4 overflow-hidden rounded-[10px] border border-white/10 bg-[#181818]">
      <div className="grid grid-cols-[70px_70px_1fr_120px] border-b border-white/10 px-4 py-2 text-sm text-white/60">
        <span>Status</span>
        <span>ID</span>
        <span>Problem</span>
        <span className="text-right">Difficulty</span>
      </div>
      {visibleRows.map((row) => (
        <div key={row.id} className="grid grid-cols-[70px_70px_1fr_120px] items-center border-b border-white/6 px-4 py-2.5 last:border-b-0">
          <input type="checkbox" className="h-4 w-4 accent-[#4c8cff]" aria-label={`Mark ${row.title} solved`} />
          <span className="font-mono text-xs text-white/50">{row.id}</span>
          <button type="button" onClick={() => onOpen(row)} className="w-fit text-left text-sm text-white/90 hover:underline">
            {row.title}
          </button>
          <span className="justify-self-end">
            <DifficultyChip level={row.difficulty} />
          </span>
        </div>
      ))}
      {totalPages > 1 ? (
        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5 text-xs text-white/70">
          <button
            type="button"
            onClick={() => setPage((value) => Math.max(1, value - 1))}
            disabled={currentPage === 1}
            className="rounded bg-[#2a2a2a] px-2.5 py-1 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Prev
          </button>
          <span>
            Page {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            disabled={currentPage === totalPages}
            className="rounded bg-[#2a2a2a] px-2.5 py-1 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      ) : null}
    </section>
  );
}

export default function DashboardPage() {
  const [activeView, setActiveView] = useState<View>('home');
  const [previousView, setPreviousView] = useState<
    'coding-interviews' | 'roadmap' | 'problems' | 'company-tagged' | 'system-design'
  >(
    'coding-interviews',
  );
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [calendarDate, setCalendarDate] = useState(new Date(2026, 3, 1));
  const [selectedDay, setSelectedDay] = useState(1);
  const [secondsLeft, setSecondsLeft] = useState(7046);
  const [companyQuery, setCompanyQuery] = useState('');
  const [companyPage, setCompanyPage] = useState(1);

  useEffect(() => {
    const id = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const cal = useMemo(() => {
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();
    const start = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();
    return { year, month, start, days };
  }, [calendarDate]);

  const timer = `${String(Math.floor(secondsLeft / 3600)).padStart(2, '0')}:${String(
    Math.floor((secondsLeft % 3600) / 60),
  ).padStart(2, '0')}:${String(secondsLeft % 60).padStart(2, '0')}`;

  const openSolver = (
    from: 'coding-interviews' | 'roadmap' | 'problems' | 'company-tagged' | 'system-design',
    row: Problem,
  ) => {
    setPreviousView(from);
    setSelectedProblem(row);
    setActiveView('solver');
  };

  const filteredCompanies = companyRanks.filter(([name]) => name.toLowerCase().includes(companyQuery.toLowerCase()));
  const companyPageSize = 8;
  const companyTotalPages = Math.max(1, Math.ceil(filteredCompanies.length / companyPageSize));
  const currentCompanyPage = Math.min(companyPage, companyTotalPages);
  const companyRows = filteredCompanies.slice((currentCompanyPage - 1) * companyPageSize, currentCompanyPage * companyPageSize);

  return (
    <main className="min-h-screen bg-black text-[#dbe2ef] lg:h-screen lg:overflow-hidden">
      <div className="mx-auto grid h-full max-w-[1560px] gap-4 p-3 lg:grid-cols-[auto_1fr_320px]">
        <aside
          className={`rounded-[16px] border border-white/10 bg-[#141414] p-3 lg:flex lg:h-[calc(100vh-1.5rem)] lg:flex-col lg:overflow-y-auto ${
            sidebarCollapsed ? 'lg:w-[92px]' : 'lg:w-[260px]'
          }`}
        >
          <div className="mb-3 rounded-[12px] bg-[#1c1c1c] p-3">
            <div className="flex items-center justify-between">
              <div className={`text-sm text-[#9ba6b8] ${sidebarCollapsed ? 'hidden' : ''}`}>NeetCode.io Logo</div>
              <button
                type="button"
                onClick={() => setSidebarCollapsed((value) => !value)}
                className="grid h-7 w-7 place-items-center rounded bg-white/5 text-xs text-[#c9d2e0]"
                aria-label="Toggle sidebar"
              >
                {sidebarCollapsed ? '>' : '<'}
              </button>
            </div>
          </div>
          <div className={`mb-2 text-sm font-semibold text-[#dbe2ef] ${sidebarCollapsed ? 'text-center' : ''}`}>Menu</div>
          <div className="space-y-1 text-sm lg:flex-1">
            <button
              type="button"
              onClick={() => setActiveView('home')}
              className={`w-full rounded-[9px] px-3 py-2 ${
                activeView === 'home' ? 'bg-white/12 text-white' : 'text-[#9ba6b8] hover:bg-white/5'
              } ${sidebarCollapsed ? 'text-center' : 'text-left'}`}
            >
              {sidebarCollapsed ? 'H' : (
                <span className="flex items-center justify-between">
                  <span>Home</span>
                  <span className="text-white/50">▾</span>
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveView('coding-interviews')}
              className={`w-full rounded-[9px] px-3 py-2 ${
                activeView === 'coding-interviews' ? 'bg-white/12 text-white' : 'text-[#9ba6b8] hover:bg-white/5'
              } ${sidebarCollapsed ? 'text-center' : 'text-left'}`}
            >
              {sidebarCollapsed ? 'CI' : (
                <span className="flex items-center justify-between">
                  <span>Coding Interviews</span>
                  <span className="text-white/50">▾</span>
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveView('problems')}
              className={`w-full rounded-[9px] px-3 py-2 ${
                activeView === 'problems' || (activeView === 'solver' && previousView === 'problems')
                  ? 'bg-white/12 text-white'
                  : 'text-[#9ba6b8] hover:bg-white/5'
              } ${sidebarCollapsed ? 'text-center' : 'text-left'}`}
            >
              {sidebarCollapsed ? 'P' : (
                <span className="flex items-center justify-between">
                  <span>Problems</span>
                  <span className="text-white/50">▾</span>
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveView('roadmap')}
              className={`w-full rounded-[9px] px-3 py-2 ${
                activeView === 'roadmap' ? 'bg-white/12 text-white' : 'text-[#9ba6b8] hover:bg-white/5'
              } ${sidebarCollapsed ? 'text-center' : 'text-left'}`}
            >
              {sidebarCollapsed ? 'R' : (
                <span className="flex items-center justify-between">
                  <span>Roadmap</span>
                  <span className="text-white/50">▾</span>
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveView('company-tagged')}
              className={`w-full rounded-[9px] px-3 py-2 ${
                activeView === 'company-tagged' || (activeView === 'solver' && previousView === 'company-tagged')
                  ? 'bg-white/12 text-white'
                  : 'text-[#9ba6b8] hover:bg-white/5'
              } ${sidebarCollapsed ? 'text-center' : 'text-left'}`}
            >
              {sidebarCollapsed ? 'CT' : (
                <span className="flex items-center justify-between">
                  <span>Company Tagged</span>
                  <span className="text-white/50">▾</span>
                </span>
              )}
            </button>
            <div className={`w-full rounded-[8px] px-3 py-2 text-[#9ba6b8] ${sidebarCollapsed ? 'text-center' : 'text-left'}`}>
              {sidebarCollapsed ? 'Ch' : (
                <span className="flex items-center justify-between">
                  <span>Cheatsheets</span>
                  <span className="text-white/40">▾</span>
                </span>
              )}
              </div>
            <div className={`w-full rounded-[8px] px-3 py-2 text-[#9ba6b8] ${sidebarCollapsed ? 'text-center' : 'text-left'}`}>
              {sidebarCollapsed ? 'Q' : (
                <span className="flex items-center justify-between">
                  <span>Quizzes</span>
                  <span className="text-white/40">▾</span>
                </span>
              )}
            </div>
                <button
                  type="button"
              onClick={() => setActiveView('system-design')}
              className={`w-full rounded-[9px] px-3 py-2 ${
                activeView === 'system-design' || (activeView === 'solver' && previousView === 'system-design')
                  ? 'bg-white/12 text-white'
                  : 'text-[#9ba6b8] hover:bg-white/5'
              } ${sidebarCollapsed ? 'text-center' : 'text-left'}`}
            >
              {sidebarCollapsed ? 'SD' : (
                <span className="flex items-center justify-between">
                  <span>System Design</span>
                  <span className="text-white/50">▾</span>
                </span>
              )}
            </button>
            <div
              className={`flex items-center rounded-[8px] px-3 py-2 text-[#9ba6b8] ${
                sidebarCollapsed ? 'justify-center' : 'justify-between'
              }`}
            >
              <span>{sidebarCollapsed ? 'ML' : 'Machine Learning'}</span>
              <span className={`rounded bg-[#3b2d17] px-1.5 py-0.5 text-[10px] text-[#ffc76b] ${sidebarCollapsed ? 'hidden' : ''}`}>
                NEW
              </span>
            </div>
            <div className={`w-full rounded-[8px] px-3 py-2 text-[#9ba6b8] ${sidebarCollapsed ? 'text-center' : 'text-left'}`}>
              {sidebarCollapsed ? 'LLD' : (
                <span className="flex items-center justify-between">
                  <span>Low Level Design</span>
                  <span className="text-white/40">▾</span>
                </span>
              )}
            </div>
            <div className={`w-full rounded-[8px] px-3 py-2 text-[#9ba6b8] ${sidebarCollapsed ? 'text-center' : 'text-left'}`}>
              {sidebarCollapsed ? 'DB' : (
                <span className="flex items-center justify-between">
                  <span>Databases</span>
                  <span className="text-white/40">▾</span>
                </span>
              )}
            </div>
          </div>
          <button
            type="button"
            className={`mt-3 w-full rounded-[10px] border border-white/10 bg-[#1c1c1c] px-3 py-2 text-sm text-[#9ba6b8] hover:bg-white/5 ${
              sidebarCollapsed ? 'text-center' : 'text-left'
            }`}
          >
            {sidebarCollapsed ? 'S' : 'Settings'}
          </button>
          </aside>

        <section className="min-h-0 rounded-[16px] border border-white/10 bg-[#141414] p-4 lg:overflow-y-auto">
          <header className="mb-4 flex items-center justify-between rounded-[12px] bg-[#1c1c1c] px-3 py-2.5">
            <div className="text-sm text-[#9ba6b8]">Search or type a command</div>
            <div className="flex items-center gap-2">
              <button type="button" className="grid h-9 w-9 place-items-center rounded-full bg-[#252525] text-[#c9d2e0]">
                  <span className="relative block h-3.5 w-3.5 rounded-full border border-current">
                    <span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-white/75" />
                </span>
              </button>
              <button type="button" className="flex items-center gap-2 rounded-full bg-[#252525] px-2.5 py-1.5">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#2d2d2d] text-xs font-semibold text-white">N</span>
                <span className="pr-1 text-sm text-[#dbe2ef]">Neet User</span>
              </button>
            </div>
          </header>
          {activeView === 'home' ? (
            <>
              <div className="mb-3 rounded-[10px] border border-white/10 bg-[#181818] px-4 py-3">
                <div className="text-sm font-semibold text-white">Home Dashboard</div>
                <div className="text-xs text-white/55">Stats and momentum only</div>
              </div>
              <section className="rounded-[12px] border border-white/10 bg-[#1c1c1c] p-4">
                <h2 className="text-xl font-semibold text-white">Home</h2>
                <p className="mt-1 text-sm text-white/62">Your prep snapshot for today.</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[10px] bg-[#161616] p-3">
                    <div className="text-xs text-white/55">Days checked in</div>
                    <div className="mt-1 flex items-center gap-2 text-2xl font-semibold text-white">
                      <svg viewBox="0 0 20 20" className="h-5 w-5 text-[#62b1ff]" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <circle cx="10" cy="10" r="7" />
                        <path d="M10 5v5l3 2" />
                      </svg>
                      19
                    </div>
                  </div>
                  <div className="rounded-[10px] bg-[#161616] p-3">
                    <div className="text-xs text-white/55">Problems solved</div>
                    <div className="mt-1 flex items-center gap-2 text-2xl font-semibold text-white">
                      <svg viewBox="0 0 20 20" className="h-5 w-5 text-[#62b1ff]" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M4 10l4 4 8-8" />
                        <circle cx="10" cy="10" r="8" />
                      </svg>
                      46
                    </div>
                  </div>
                  <div className="rounded-[10px] bg-[#161616] p-3">
                    <div className="text-xs text-white/55">Study hours</div>
                    <div className="mt-1 flex items-center gap-2 text-2xl font-semibold text-white">
                      <svg viewBox="0 0 20 20" className="h-5 w-5 text-[#62b1ff]" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="3" y="4" width="14" height="12" rx="2" />
                        <path d="M6 8h8M6 11h5" />
                      </svg>
                      3.4
                </div>
                  </div>
                </div>
              </section>

              <section className="mt-4 rounded-[12px] border border-white/10 bg-[#1c1c1c] p-4">
                <div className="text-xs uppercase tracking-[0.12em] text-white/45">Continue Solving</div>
                <h3 className="mt-2 text-lg font-semibold text-white">Product of Array Except Self</h3>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  Continue your Arrays & Hashing progression and keep momentum with one focused block.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                  <span className="rounded-full bg-amber-500/20 px-2.5 py-1 text-amber-300">Medium</span>
                  <span className="rounded-full bg-sky-500/20 px-2.5 py-1 text-sky-300">18 min</span>
              </div>
                <button className="mt-4 rounded-[10px] bg-[#62b1ff] px-4 py-2 text-sm font-semibold text-white hover:bg-[#79beff]">
                  Continue
                </button>
              </section>

              <section className="mt-4 rounded-[12px] border border-white/10 bg-[#1c1c1c] p-4">
                <h3 className="text-[1.45rem] font-semibold tracking-[-0.02em] text-white">Relevant Resources</h3>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  {[
                    { title: 'Python Syntax Features', subtitle: "Recording of Dr. Garrett's lecture" },
                    { title: "Hierarchy of python's built-in exceptions", subtitle: 'John Goldo' },
                    { title: 'Resume of junior developer', subtitle: 'Emma Graceman' },
                  ].map((item, idx) => {
                    const palette = infoCardPalettes[(idx + 1) % infoCardPalettes.length];
                    return (
                      <article
                        key={`home-resource-${item.title}`}
                        className="relative overflow-hidden rounded-[16px] p-3 shadow-[0_10px_24px_rgba(0,0,0,0.2)]"
                        style={{ background: palette.bg, color: palette.text }}
                      >
                        <div className="mb-3 grid h-[110px] place-items-center rounded-[12px] bg-white/35">
                          <div className="h-12 w-12 rounded-full bg-white/65" />
                        </div>
                        <h4 className="text-[1.1rem] font-semibold leading-tight">{item.title}</h4>
                        <p className="mt-1 text-sm opacity-75">{item.subtitle}</p>
                      </article>
                    );
                  })}
              </div>
              </section>
            </>
          ) : null}

          {activeView === 'coding-interviews' ? (
            <>
              <div className="mb-3 rounded-[10px] border border-white/10 bg-[#181818] px-4 py-3">
                <div className="text-sm font-semibold text-white">Coding Interviews Workspace</div>
                <div className="text-xs text-white/55">Problem lists and practice only</div>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {['Algorithms & Data Structures for Beginners', 'Advanced Algorithms', 'Python for Coding Interviews'].map((title, idx) => {
                  const palette = infoCardPalettes[idx % infoCardPalettes.length];
                  return (
                    <article
                      key={title}
                      className="relative overflow-hidden rounded-[18px] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.24)]"
                      style={{ background: palette.bg, color: palette.text }}
                    >
                      <div className="absolute left-4 top-3 h-10 w-10 rounded-full bg-white/45" />
                      <div className="absolute right-4 top-3 h-12 w-12 rounded-full border-[5px] border-white/35" />
                      <div className="relative z-10 mt-8 text-[1.1rem] font-semibold leading-tight tracking-[-0.02em]">{title}</div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-4 rounded-[10px] border border-white/10 bg-[#1c1c1c] p-4">
                <div className="mb-4 flex flex-wrap items-center gap-3 border-b border-white/8 pb-3 text-sm">
                  <span className="rounded bg-violet-500/20 px-2 py-1 text-violet-300">Core Skills</span>
                  <span className="rounded bg-cyan-500/20 px-2 py-1 text-cyan-300">NeetCode 150</span>
            </div>
                <p className="text-sm text-white/72">Implement common data structures and algorithms for coding interviews.</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-fuchsia-500/20 px-3 py-1 text-fuchsia-300">Algorithms</span>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-300">Data Structures</span>
                </div>
                <h3 className="mt-4 text-base font-semibold">Implement Data Structures</h3>
                <ProblemTable rows={interviewProblems} onOpen={(row) => openSolver('coding-interviews', row)} />
                <h3 className="mt-5 text-base font-semibold">Sorting</h3>
                <ProblemTable rows={sortingProblems} onOpen={(row) => openSolver('coding-interviews', row)} />
                <h3 className="mt-5 text-base font-semibold">Graphs</h3>
                <ProblemTable rows={graphProblems} onOpen={(row) => openSolver('coding-interviews', row)} />
                <h3 className="mt-5 text-base font-semibold">Dynamic Programming</h3>
                <ProblemTable rows={dpProblems} onOpen={(row) => openSolver('coding-interviews', row)} />

                <section className="mt-6">
                  <h3 className="text-[1.85rem] font-semibold tracking-[-0.03em] text-white">Relevant Resources</h3>
                  <div className="mt-4 grid gap-4 md:grid-cols-3">
                    {[
                      {
                        title: 'Python Syntax Features',
                        subtitle: "Recording of Dr. Garrett's lecture",
                      },
                      {
                        title: "Hierarchy of python's built-in exceptions",
                        subtitle: 'John Goldo',
                      },
                      {
                        title: 'Resume of junior developer',
                        subtitle: 'Emma Graceman',
                      },
                    ].map((item, idx) => {
                      const palette = infoCardPalettes[(idx + 2) % infoCardPalettes.length];
                      return (
                        <article
                          key={item.title}
                          className="relative overflow-hidden rounded-[20px] p-4 shadow-[0_12px_28px_rgba(0,0,0,0.2)]"
                          style={{ background: palette.bg, color: palette.text }}
                        >
                          <div className="mb-4 grid h-[150px] place-items-center rounded-[16px] bg-white/35">
                            <div
                              className={`h-16 w-16 rounded-full ${
                                idx === 0 ? 'bg-[#ff8c1a]' : idx === 1 ? 'bg-[#ffc722]' : 'bg-[#ffb01d]'
                              }`}
                            />
                          </div>
                          <h4 className="text-[1.65rem] font-semibold leading-tight tracking-[-0.03em]">{item.title}</h4>
                          <p className="mt-1 text-[1rem] opacity-70">{item.subtitle}</p>
                        </article>
                      );
                    })}
                  </div>
                </section>
              </div>
            </>
          ) : null}

          {activeView === 'roadmap' ? (
            <section className="rounded-[12px] border border-white/10 bg-[#1c1c1c] p-4">
              <h2 className="text-xl font-semibold text-white">Roadmap</h2>
              <p className="mt-1 text-sm text-white/62">Track chapter completion across interview patterns.</p>
                <div className="mt-4 space-y-3">
                  {[
                  ['Arrays & Hashing', 76],
                  ['Two Pointers', 70],
                  ['Stack', 62],
                  ['Linked List', 74],
                  ['Sliding Window', 34],
                  ['Binary Search', 68],
                  ['Trees', 58],
                  ['Heap / Priority Queue', 41],
                  ['Backtracking', 92],
                ].map(([title, progress]) => (
                  <article key={title} className="rounded-[10px] border border-white/10 bg-[#181818] p-3">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-white/88">{title}</span>
                      <span className="text-[#62b1ff]">{progress}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-[#62b1ff]" style={{ width: `${progress}%` }} />
                    </div>
                  </article>
                  ))}
                </div>
            </section>
          ) : null}

          {activeView === 'problems' ? (
            <div>
              <h2 className="text-xl font-semibold">Problems</h2>
              <ProblemTable rows={interviewProblems} onOpen={(row) => openSolver('problems', row)} />
            </div>
          ) : null}

          {activeView === 'company-tagged' ? (
                    <div>
              <h2 className="text-xl font-semibold">Company Tagged</h2>
              <input
                value={companyQuery}
                onChange={(e) => setCompanyQuery(e.target.value)}
                placeholder="Search companies..."
                className="mt-3 w-full rounded-[10px] border border-white/10 bg-[#1c1c1c] px-3 py-2.5 text-sm outline-none"
              />
              <h3 className="mt-4 text-sm font-semibold text-white/70">Top Companies</h3>
              <div className="mt-2 grid gap-1">
                {companyRows.map(([name, count]) => (
                  <div key={name} className="flex items-center justify-between rounded-[8px] bg-[#1c1c1c] px-3 py-2 text-sm">
                    <span>{name}</span>
                    <span className="text-white/65">{count}</span>
                  </div>
                ))}
              </div>
              {companyTotalPages > 1 ? (
                <div className="mt-2 flex items-center justify-between text-xs text-white/70">
                  <button
                    type="button"
                    onClick={() => setCompanyPage((value) => Math.max(1, value - 1))}
                    disabled={currentCompanyPage === 1}
                    className="rounded bg-[#2a2a2a] px-2.5 py-1 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Prev
                  </button>
                  <span>
                    Page {currentCompanyPage} / {companyTotalPages}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCompanyPage((value) => Math.min(companyTotalPages, value + 1))}
                    disabled={currentCompanyPage === companyTotalPages}
                    className="rounded bg-[#2a2a2a] px-2.5 py-1 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              ) : null}
              <p className="mt-3 text-sm text-white/60">Problems are sorted by how frequently they appear in interviews.</p>
              <div className="mt-4 rounded-[10px] border border-white/10 bg-[#1c1c1c] p-4">
                <SolvedGauge easySolved={1} easyTotal={1} medSolved={0} medTotal={0} hardSolved={0} hardTotal={0} />
                <h3 className="mt-4 text-base font-semibold">Google Interview Questions</h3>
                <ProblemTable rows={companyProblems} onOpen={(row) => openSolver('company-tagged', row)} />
                <div className="mt-4 rounded-[10px] border border-white/10 bg-[#1c1c1c] p-4 text-sm text-white/72">
                  Join NeetCode Pro for access to all 500 interview questions from Google.
                  <button className="mt-3 block rounded-[8px] bg-[#62b1ff] px-4 py-2 font-semibold text-white hover:bg-[#79beff]">
                    NeetCode Pro
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          {activeView === 'system-design' ? (
            <div>
              <h2 className="text-xl font-semibold">System Design Questions</h2>
              <ProblemTable
                rows={[
                  { id: '801', title: 'Design URL Shortener', difficulty: 'Medium' },
                  { id: '802', title: 'Design Rate Limiter', difficulty: 'Hard' },
                  { id: '803', title: 'Design Twitter', difficulty: 'Hard' },
                ]}
                onOpen={(row) => openSolver('system-design', row)}
              />
            </div>
          ) : null}

          {activeView === 'solver' && selectedProblem ? (
            <div className="rounded-[10px] border border-white/10 bg-[#1c1c1c] p-4">
              <div className="mb-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveView(previousView)}
                  className="rounded bg-[#2b2b2b] px-3 py-1.5 text-sm hover:bg-[#343434]"
                >
                  Back
                </button>
                <div className="text-sm font-semibold">{selectedProblem.id}</div>
              </div>
              <h2 className="text-xl font-semibold">{selectedProblem.title}</h2>
              <div className="mt-3">
                <DifficultyChip level={selectedProblem.difficulty} />
              </div>
              <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_1.1fr]">
                <div className="rounded-[10px] border border-white/10 bg-[#1c1c1c] p-4 text-sm text-white/80">
                  <h3 className="mb-2 font-semibold text-white">Problem</h3>
                  Mock LeetCode-style statement with examples and constraints for {selectedProblem.title}. This is UI only.
                </div>
                <div className="rounded-[10px] border border-white/10 bg-[#171717]">
                  <div className="border-b border-white/10 px-3 py-2 text-xs text-white/55">editor.ts</div>
                  <pre className="h-[380px] overflow-auto p-3 text-xs text-white/70">{`function solve(input) {\n  // write your solution\n  return input;\n}`}</pre>
                  </div>
              </div>
            </div>
          ) : null}
            </section>

        <aside className="min-h-0 rounded-[12px] border border-white/10 bg-[#141414] p-4 lg:overflow-y-auto">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setCalendarDate(new Date(cal.year, cal.month - 1, 1))}
              className="rounded bg-white/5 px-2 py-1 text-xs"
            >
              {'<'}
            </button>
            <h3 className="text-base font-semibold">
              {new Date(cal.year, cal.month, 1).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
            </h3>
            <button
              type="button"
              onClick={() => setCalendarDate(new Date(cal.year, cal.month + 1, 1))}
              className="rounded bg-white/5 px-2 py-1 text-xs"
            >
              {'>'}
            </button>
          </div>
          <div className="mt-3 rounded-[10px] bg-[#1c1c1c] p-3">
            <div className="text-sm font-semibold">Day {selectedDay}</div>
            <div className="text-2xl font-semibold">{timer}</div>
            <div className="text-xs text-white/55">left</div>
          </div>
          <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs text-white/55">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>
          <div className="mt-1 grid grid-cols-7 gap-1">
            {Array.from({ length: cal.start }).map((_, i) => (
              <div key={`sp-${i}`} className="h-8" />
            ))}
            {Array.from({ length: cal.days }, (_, idx) => idx + 1).map((day) => {
              const now = new Date();
              const isCurrentDay = day === now.getDate() && cal.month === now.getMonth() && cal.year === now.getFullYear();
              const isSelected = selectedDay === day;
              return (
              <button
                key={day}
                type="button"
                onClick={() => setSelectedDay(day)}
                className={`h-8 rounded-full text-xs ${
                  isSelected
                    ? 'bg-white/14 text-white'
                    : isCurrentDay
                      ? 'border border-[#62b1ff] bg-[#1d2a3a] text-[#9bcfff]'
                      : 'bg-[#2b2b2b] text-white/70'
                }`}
              >
                {day}
              </button>
            );
            })}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-[10px] bg-[#1c1c1c] p-3">
              <div className="text-xs text-white/60">Current Streak</div>
              <div className="text-xl font-semibold">0</div>
              <div className="text-xs text-white/50">days</div>
            </div>
            <div className="rounded-[10px] bg-[#1c1c1c] p-3">
              <div className="text-xs text-white/60">Best Streak</div>
              <div className="text-xl font-semibold">5</div>
              <div className="text-xs text-white/50">days</div>
            </div>
          </div>
          <div className="mt-3 rounded-[10px] bg-[#1c1c1c] p-3 text-sm">
            <div className="flex items-center justify-between">
              <span>1</span>
              <span className="text-white/70">0/5 to next</span>
            </div>
            <p className="mt-2 text-xs text-white/60">Solve one problem a day to keep your streak</p>
          </div>
          <div className="mt-3 rounded-[10px] bg-[#1c1c1c] p-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-indigo-500/20 px-2.5 py-1 text-xs font-semibold text-indigo-300">Top 10.7%</span>
              <span className="text-white/70">46 solved</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div className="h-2 w-[46%] rounded-full bg-[#7a7a7a]" />
            </div>
            <button className="mt-3 text-xs text-white/60 hover:text-white">How is this calculated?</button>
          </div>
          </aside>
        </div>

      <div className="lg:hidden">
        <MobileDock />
      </div>
    </main>
  );
}
