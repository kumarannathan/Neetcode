'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { DitherHero } from '@/components/backgrounds/DitherHero';

export default function SignInPage() {
  const router = useRouter();
  const [mode, setMode] = useState<'signup' | 'signin'>('signin');

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <DitherHero />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(0,0,0,0.52)_70%,rgba(0,0,0,0.82)_100%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <section className="w-full max-w-[430px] rounded-[28px] border border-white/10 bg-[#121316]/85 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <div className="mb-5 flex items-center justify-between">
            <div className="inline-flex rounded-full border border-white/10 bg-[#0f1014] p-1">
              <button
                type="button"
                onClick={() => setMode('signup')}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${mode === 'signup' ? 'bg-white text-black' : 'text-white/55 hover:text-white'}`}
              >
                Sign up
              </button>
              <button
                type="button"
                onClick={() => setMode('signin')}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${mode === 'signin' ? 'bg-white text-black' : 'text-white/55 hover:text-white'}`}
              >
                Sign in
              </button>
            </div>
            <Link href="/" className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white/70 hover:text-white">
              ×
            </Link>
          </div>

          <h1 className="mb-4 text-3xl font-semibold text-white">{mode === 'signup' ? 'Create an account' : 'Welcome back'}</h1>

          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              router.push('/dashboard');
            }}
          >
            {mode === 'signup' ? (
              <div className="grid grid-cols-2 gap-2">
                <input className="rounded-[10px] border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-white/25 focus:outline-none" placeholder="First name" />
                <input className="rounded-[10px] border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-white/25 focus:outline-none" placeholder="Last name" />
              </div>
            ) : null}
            <input className="w-full rounded-[10px] border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-white/25 focus:outline-none" placeholder="Enter your email" />
            <input className="w-full rounded-[10px] border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-white/25 focus:outline-none" placeholder="Password" type="password" />
            <button type="submit" className="mt-2 w-full rounded-[10px] bg-white px-4 py-2.5 text-sm font-semibold text-black hover:bg-white/90">
              {mode === 'signup' ? 'Create an account' : 'Sign in'}
            </button>
          </form>

          <div className="my-4 flex items-center gap-2 text-xs text-white/40">
            <div className="h-px flex-1 bg-white/10" />
            <span>OR SIGN IN WITH</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button type="button" className="rounded-[10px] border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-semibold text-white/85 hover:bg-white/10">
              Google
            </button>
            <button type="button" className="rounded-[10px] border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-semibold text-white/85 hover:bg-white/10">
              Apple
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-white/45">
            By signing in, you agree to our Terms of Service.
          </p>
        </section>
      </div>
    </main>
  );
}
