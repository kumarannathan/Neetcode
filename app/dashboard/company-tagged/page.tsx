import Link from 'next/link';

const companyTagged = [
  { company: 'Google', count: 42 },
  { company: 'Meta', count: 39 },
  { company: 'Amazon', count: 55 },
  { company: 'Microsoft', count: 31 },
  { company: 'Netflix', count: 18 },
];

export default function CompanyTaggedPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-8 text-white">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between rounded-[12px] bg-[#1a1a1a] p-4">
          <h1 className="text-2xl font-semibold">Company Tagged</h1>
          <Link href="/dashboard" className="rounded-[10px] bg-[#111111] px-3 py-2 text-sm text-white/80 hover:text-white">
            Back to Dashboard
          </Link>
        </div>
        <section className="rounded-[12px] bg-[#1a1a1a] p-4">
          <div className="grid grid-cols-[1fr_140px] border-b border-white/10 pb-2 text-sm text-white/55">
            <span>Company</span>
            <span className="text-right">Problems</span>
          </div>
          <div className="mt-2 space-y-2">
            {companyTagged.map((item) => (
              <div key={item.company} className="grid grid-cols-[1fr_140px] rounded-[10px] bg-[#222222] px-3 py-2.5">
                <span>{item.company}</span>
                <span className="text-right text-white/70">{item.count}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
