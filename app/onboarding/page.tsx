'use client';

import { useRouter } from 'next/navigation';

export default function OnboardingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <button onClick={() => router.push('/')} className="text-sm font-semibold text-slate-600 transition hover:text-cyan-700">← Zurück</button>
          <h1 className="text-xl font-bold text-slate-900">Onboarding</h1>
          <div className="w-16" />
        </div>
      </header>

      <main className="mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center">
        <span className="mb-4 rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-800">Start</span>
        <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">Willkommen in deiner Lernapp</h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">Hier lernst du versicherungsrelevante Themen strukturiert und praxisnah – mit klarem Fahrplan und interaktiven Modulen.</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button onClick={() => router.push('/fahrplan')} className="rounded-xl bg-cyan-700 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-200">Zum Fahrplan</button>
          <button onClick={() => router.push('/')} className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200">Zur Startseite</button>
        </div>

        <section className="mt-12 w-full text-left">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="font-bold text-slate-900">So funktioniert's</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              <li>• Der Fahrplan zeigt alle Themen und deinen Fortschritt.</li>
              <li>• Lernmodule enthalten Kapitel, Fallbeispiele und Quizze.</li>
              <li>• Dein Fortschritt wird automatisch im Browser gespeichert.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
