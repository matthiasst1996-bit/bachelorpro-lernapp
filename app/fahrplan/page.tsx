'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Phase {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  tasks: {
    id: number;
    label: string;
    completed: boolean;
  }[];
}

const initialPhases: Phase[] = [
  {
    id: 1,
    title: 'Themenfindung',
    description: 'Finde ein relevantes und machbares Thema für deine Bachelorarbeit.',
    icon: '💡',
    color: 'from-blue-500 to-cyan-500',
    tasks: [
      { id: 1, label: 'Interessengebiete identifizieren', completed: false },
      { id: 2, label: 'Erste Literaturrecherche durchführen', completed: false },
      { id: 3, label: 'Thema mit Betreuer:in abstimmen', completed: false },
      { id: 4, label: 'Forschungsfrage formulieren', completed: false },
    ],
  },
  {
    id: 2,
    title: 'Exposé',
    description: 'Erstelle einen strukturierten Plan für deine Arbeit.',
    icon: '📋',
    color: 'from-indigo-500 to-purple-500',
    tasks: [
      { id: 1, label: 'Einleitung und Problemstellung verfassen', completed: false },
      { id: 2, label: 'Forschungsstand zusammenfassen', completed: false },
      { id: 3, label: 'Methodik skizzieren', completed: false },
      { id: 4, label: 'Zeitplan erstellen', completed: false },
      { id: 5, label: 'Exposé mit Betreuer:in besprechen', completed: false },
    ],
  },
  {
    id: 3,
    title: 'Literaturrecherche',
    description: 'Sammle und strukturiere relevante wissenschaftliche Quellen.',
    icon: '📚',
    color: 'from-emerald-500 to-teal-500',
    tasks: [
      { id: 1, label: 'Datenbanken durchsuchen (Google Scholar, PubMed, etc.)', completed: false },
      { id: 2, label: 'Literaturverwaltung einrichten (Zotero, Citavi, etc.)', completed: false },
      { id: 3, label: 'Quellen sichten und exzerpieren', completed: false },
      { id: 4, label: 'Vorläufige Literaturliste erstellen', completed: false },
    ],
  },
  {
    id: 4,
    title: 'Methodik & Datenerhebung',
    description: 'Entwickle deine Forschungsmethode und sammle Daten.',
    icon: '🔬',
    color: 'from-amber-500 to-orange-500',
    tasks: [
      { id: 1, label: 'Forschungsdesign finalisieren', completed: false },
      { id: 2, label: 'Erhebungsinstrumente entwickeln (Fragebogen, Interviewleitfaden, etc.)', completed: false },
      { id: 3, label: 'Ethikvotum einholen (falls erforderlich)', completed: false },
      { id: 4, label: 'Daten erheben', completed: false },
      { id: 5, label: 'Daten aufbereiten und bereinigen', completed: false },
    ],
  },
  {
    id: 5,
    title: 'Schreiben & Analyse',
    description: 'Analysiere deine Daten und verfasse die Arbeit.',
    icon: '✍️',
    color: 'from-rose-500 to-pink-500',
    tasks: [
      { id: 1, label: 'Daten analysieren (statistisch/qualitativ)', completed: false },
      { id: 2, label: 'Ergebnisse interpretieren', completed: false },
      { id: 3, label: 'Kapitel verfassen (Einleitung, Methode, Ergebnisse, Diskussion)', completed: false },
      { id: 4, label: 'Zwischenfeedback einholen', completed: false },
      { id: 5, label: 'Revision und Überarbeitung', completed: false },
    ],
  },
  {
    id: 6,
    title: 'Finalisierung & Abgabe',
    description: 'Bringe deine Arbeit in die finale Form und reiche sie ein.',
    icon: '🎯',
    color: 'from-violet-500 to-fuchsia-500',
    tasks: [
      { id: 1, label: 'Formatierung prüfen (Richtlinien der Hochschule)', completed: false },
      { id: 2, label: 'Literaturverzeichnis finalisieren', completed: false },
      { id: 3, label: 'Anhang erstellen (falls erforderlich)', completed: false },
      { id: 4, label: 'Plagiatscheck durchführen', completed: false },
      { id: 5, label: 'Arbeit abgeben', completed: false },
    ],
  },
];

export default function FahrplanPage() {
  const router = useRouter();
  const [phases, setPhases] = useState<Phase[]>(initialPhases);

  const toggleTask = (phaseId: number, taskId: number) => {
    setPhases((prev) =>
      prev.map((phase) =>
        phase.id === phaseId
          ? {
              ...phase,
              tasks: phase.tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
              ),
            }
          : phase
      )
    );
  };

  const totalTasks = phases.reduce((sum, phase) => sum + phase.tasks.length, 0);
  const completedTasks = phases.reduce(
    (sum, phase) => sum + phase.tasks.filter((task) => task.completed).length,
    0
  );
  const progressPercent = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white border-b shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <button
            onClick={() => router.push('/onboarding')}
            className="text-gray-600 transition-colors hover:text-gray-900"
          >
            ← Zurück
          </button>
          <h1 className="text-xl font-bold text-gray-900">Dein Bachelor-Fahrplan</h1>
          <div className="w-16" />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <section className="mb-8 rounded-2xl bg-white p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Dein Fortschritt</h2>
            <span className="text-3xl font-bold text-indigo-600">{progressPercent}%</span>
          </div>
          <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="mt-3 text-gray-600">
            {completedTasks} von {totalTasks} Aufgaben abgeschlossen
          </p>
        </section>

        <section className="space-y-6">
          {phases.map((phase) => {
            const phaseCompleted = phase.tasks.filter((task) => task.completed).length;
            const phaseTotal = phase.tasks.length;
            const phaseProgress = Math.round((phaseCompleted / phaseTotal) * 100);

            return (
              <article
                key={phase.id}
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className={`bg-gradient-to-r ${phase.color} p-6 text-white`}>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl" aria-hidden="true">{phase.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold">{phase.title}</h3>
                      <p className="mt-1 text-white/90">{phase.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{phaseProgress}%</div>
                      <div className="text-sm text-white/80">
                        {phaseCompleted}/{phaseTotal} Aufgaben
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-3">
                    {phase.tasks.map((task) => (
                      <label
                        key={task.id}
                        className="flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
                      >
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => toggleTask(phase.id, task.id)}
                          className="mt-1 h-5 w-5 rounded text-indigo-600 focus:ring-2 focus:ring-indigo-500"
                        />
                        <span
                          className={`flex-1 ${
                            task.completed ? 'text-gray-400 line-through' : 'text-gray-700'
                          }`}
                        >
                          {task.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <aside className="mt-8 text-center text-sm text-gray-500">
          <p>💡 Tipp: Arbeite die Phasen nacheinander ab und kehre jederzeit zu deinem Fortschritt zurück.</p>
          <p className="mt-2">Der Fortschritt bleibt aktuell nur aktiv, solange diese Seite geöffnet ist. Persistenz ist der nächste Schritt.</p>
        </aside>
      </main>
    </div>
  );
}
