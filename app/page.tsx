import Link from 'next/link';
import { ArrowRight, BrainCircuit, Clock3, Sparkles } from 'lucide-react';
import { AppShell } from '@/components/app-shell';
import { SectionCard } from '@/components/section-card';

const sections = [
  {
    title: 'Sach- und Vermögensschutz',
    description: 'Versicherungsprodukte, Vertragsgrundlagen und Schadenfälle verständlich aufbauen.',
    progress: 0,
    color: '#0E4DA4',
    href: '/fahrplan/sach-vermoegensschutz'
  },
  {
    title: 'Kernprozesse gestalten',
    description: 'Kundenkommunikation, Services und Produktentwicklung trainieren.',
    progress: 0,
    color: '#0F9D8A',
    href: '/fahrplan/kernprozesse'
  },
  {
    title: 'Steuerung, Zusammenarbeit und Leadership',
    description: 'Berufsausbildung, Führung sowie den praxisbezogenen Prüfungsteil meistern.',
    progress: 0,
    color: '#D97706',
    href: '/fahrplan/leadership'
  }
];

export default function HomePage() {
  return (
    <AppShell>
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="eyebrow">Dein Lern-Dashboard</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Bereit für deinen nächsten Schritt?</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Starte strukturiert in den Bachelor Professional oder springe direkt zu dem Thema, das du jetzt brauchst.
          </p>
        </div>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
        >
          Lernweg festlegen <ArrowRight size={17} />
        </Link>
      </header>

      <section className="mt-8 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-3xl bg-brand p-6 text-white shadow-card sm:p-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-100">
            <Sparkles size={17} /> Empfohlener Start
          </div>
          <h2 className="mt-4 max-w-xl text-2xl font-bold sm:text-3xl">Lerne die Grundlagen, bevor du in Detailfragen einsteigst.</h2>
          <p className="mt-3 max-w-xl text-blue-100">
            Beginne mit dem geführten Einstieg und baue dein Wissen vom Praxisfall über die Kernidee bis zur Prüfungsfrage auf.
          </p>
          <Link href="/onboarding" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-brand">
            Jetzt starten <ArrowRight size={17} />
          </Link>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-50 text-amber-600">
              <Clock3 size={20} />
            </span>
            <div>
              <p className="font-bold text-ink">Dein Tagesziel</p>
              <p className="text-sm text-slate-500">15 Minuten Lernzeit</p>
            </div>
          </div>
          <div className="mt-6 flex items-end justify-between">
            <strong className="text-4xl text-ink">
              0 <span className="text-base font-medium text-slate-500">/ 15 Min.</span>
            </strong>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">Neu</span>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-0 rounded-full bg-mint" />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Dein Bachelor-Fahrplan</p>
            <h2 className="mt-1 text-2xl font-bold text-ink">Wähle deinen Studienabschnitt</h2>
          </div>
          <Link href="/fahrplan" className="hidden text-sm font-semibold text-brand sm:block">
            Alle Bereiche ansehen
          </Link>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {sections.map((section) => (
            <SectionCard key={section.title} {...section} />
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Link href="/ueben" className="card flex items-center gap-4 p-5 transition hover:shadow-lg">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-mint">
            <BrainCircuit size={24} />
          </span>
          <span>
            <strong className="block text-ink">Schnelltest starten</strong>
            <span className="mt-1 block text-sm text-slate-500">Prüfe deinen Lernstand mit kurzen Fragen.</span>
          </span>
          <ArrowRight className="ml-auto text-slate-400" size={20} />
        </Link>

        <Link href="/lerncoach" className="card flex items-center gap-4 p-5 transition hover:shadow-lg">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-50 text-violet-600">
            <Sparkles size={24} />
          </span>
          <span>
            <strong className="block text-ink">Frag den Lerncoach</strong>
            <span className="mt-1 block text-sm text-slate-500">Erklärungen und Übungsimpulse auf Basis deiner Unterlagen.</span>
          </span>
          <ArrowRight className="ml-auto text-slate-400" size={20} />
        </Link>
      </section>
    </AppShell>
  );
}
