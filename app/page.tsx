'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold text-slate-900">BachelorPro Lernapp</h1>
          <button onClick={() => router.push('/onboarding')} className="text-sm font-semibold text-slate-600 transition hover:text-cyan-700">Onboarding</button>
        </div>
      </header>

      <main className="mx-auto flex max-w-4xl flex-col items-center justify-center px-4 py-16 text-center md:py-24">
        <span className="mb-4 rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-800">Lernplattform</span>
        <h2 className="max-w-2xl text-4xl font-black tracking-tight text-slate-900 md:text-6xl">Dein Weg durch das Bachelorstudium</h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">Strukturierte Lernmodule, interaktive Übungen und ein klarer Fahrplan – alles an einem Ort.</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button onClick={() => router.push('/fahrplan')} className="rounded-xl bg-cyan-700 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-200">Jetzt starten</button>
          <button onClick={() => router.push('/onboarding')} className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200">Zum Onboarding</button>
        </div>

        <section className="mt-16 grid max-w-4xl grid-cols-1 gap-6 text-left sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="text-3xl">🎯</div>
            <h3 className="mt-3 font-bold text-slate-900">Klarer Fahrplan</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Sieh jederzeit, welche Themen du schon abgeschlossen hast und was als Nchstes kommt.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="text-3xl">📚</div>
            <h3 className="mt-3 font-bold text-slate-900">Interaktive Module</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Lerne mit praxisnahen Beispielen, Fallstudien und Quizzen.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="text-3xl">⚙️</div>
            <h3 className="mt-3 font-bold text-slate-900">Prozesse verstehen</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Von Kommunikation bis Leadership – trainiere die Kernkompetenzen.</p>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} BachelorPro Lernapp · Fokus auf Sach- und Vermögensschutz, Kernprozesse und Leadership
        </div>
      </footer>
    </div>
  );
}
