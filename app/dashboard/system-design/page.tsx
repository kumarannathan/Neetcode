import Link from 'next/link';

const questions = [
  'Design LeetCode',
  'Design URL Shortener',
  'Design Webhook',
  'Design Google Docs',
  'Design Spotify Top K Songs',
  'Design Yelp',
  'Design Rate Limiter',
  'Design Pastebin',
  'Design Realtime Monitoring System',
  'Design Typeahead System',
  'Design a Comment System',
  'Design Twitter',
  'Design WhatsApp',
  'Design Dropbox',
  'Design YouTube',
  'Design Uber',
  'Design Google Maps',
  'Design TicketMaster',
  'Design Netflix',
];

export default function SystemDesignPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-8 text-white">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between rounded-[12px] bg-[#1a1a1a] p-4">
          <h1 className="text-2xl font-semibold">System Design Questions</h1>
          <Link href="/dashboard" className="rounded-[10px] bg-[#111111] px-3 py-2 text-sm text-white/80 hover:text-white">
            Back to Dashboard
          </Link>
        </div>
        <section className="rounded-[12px] bg-[#1a1a1a] p-4">
          <div className="space-y-2">
            {questions.map((q) => (
              <div key={q} className="rounded-[10px] bg-[#222222] px-3 py-2.5 text-white/90">
                {q}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
