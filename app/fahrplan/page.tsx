'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Topic {
  id: number;
  label: string;
  completed: boolean;
}

interface Section {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  topics: Topic[];
}

const defaultSections: Section[] = [
  {
    id: 1,
    title: 'Sach- und Vermögensschutz',
    description: 'Versicherungsprodukte, Vertragsgrundlagen und SchadenfÃ¤lle verstÃ¤ndlich aufbauen.',
    icon: '🛡️',
    color: 'from-blue-500 to-cyan-500',
    topics: [
      { id: 1, label: 'Kraftfahrtversicherung (Haftpflicht & Kasko)', completed: false },
      { id: 2, label: 'Cyberrisikoversicherung (Dritt-/Eigenschaden)', completed: false },
      { id: 3, label: 'Rechts- und Vertragsgrundlagen (VVG, PflVG)', completed: false },
      { id: 4, label: 'Versicherte und nicht versicherte Gefahren', completed: false },
      { id: 5, label: 'Obliegenheiten und Schadenfall', completed: false },
      { id: 6, label: 'Versicherungsbetrug erkennen', completed: false },
    ],
  },
  {
    id: 2,
    title: 'Kernprozesse gestalten',
    description: 'Kundenkommunikation, Services und Produktentwicklung trainieren.',
    icon: '⚙️',
    color: 'from-emerald-500 to-teal-500',
    topics: [
      { id: 1, label: 'Kommunikations- und Serviceprozesse', completed: false },
      { id: 2, label: 'Kommunikationsmodelle (Sender-EmpfÃ¤nger, Eisberg, 4-Seiten)', completed: false },
      { id: 3, label: 'Service- und UnterstÃ¼tzungsleistungen konzipieren', completed: false },
      { id: 4, label: 'Neukunden vs. Bestandskunden', completed: false },
      { id: 5, label: 'Produktentwicklungsprozess', completed: false },
      { id: 6, label: 'Produktcontrolling & KPIs', completed: false },
    ],
  },
  {
    id: 3,
    title: 'Steuerung, Zusammenarbeit und Leadership',
    description: 'Berufsausbildung, FÃ¼hrung sowie den praxisbezogenen PrÃ¼fungsteil meistern.',
    icon: '🎯',
    color: 'from-amber-500 to-orange-500',
    topics: [
      { id: 1, label: 'Berufsausbildung (BBiG, duales System)', completed: false },
      { id: 2, label: 'Betrieblicher Ausbildungsplan & Lernortkooperation', completed: false },
      { id: 3, label: 'LernfÃ¶rderliche Bedingungen & Feedback', completed: false },
      { id: 4, label: 'PrÃ¤sentation & FachgesprÃ¤ch (Praxistransferarbeit)', completed: false },
      { id: 5, label: 'Vorbereitung auf PrÃ¼fungen (GAP Teil 1 & 2)', completed: false },
      { id: 6, label: 'FÃ¼hrungsstile & Motivation', completed: false },
    ],
  },
];

const STORAGE_KEY = 'bachelorpro-fahrplan-progress';

export default function FahrplanPage() {
  const router = useRouter();
  const [sections, setSections] = useState<Section[]>(defaultSections);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const merged = defaultSections.map((defaultSection) => {
          const savedSection = parsed.find((s: Section) => s.id === defaultSection.id);
          if (!savedSection) return defaultSection;
          return {
            ...defaultSection,
            topics: defaultSection.topics.map((defaultTopic) => {
              const savedTopic = savedSection.topics.find((t: Topic) => t.id === defaultTopic.id);
              return savedTopic || defaultTopic;
            }),
          };
        });
        setSections(merged);
      }
    } catch (e) {
      console.error('Fehler beim Laden des Fortschritts:', e);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sections));
    } catch (e) {
      console.error('Fehler beim Speichern des Fortschritts:', e);
    }
  }, [sections, isLoaded]);

  const toggleTopic = (sectionId: number, topicId: number) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              topics: section.topics.map((topic) =>
                topic.id === topicId ? { ...topic, completed: !topic.completed } : topic
              ),
            }
          : section
      )
    );
  };

  const totalTopics = sections.reduce((sum, section) => sum + section.topics.length, 0);
  const completedTopics = sections.reduce(
    (sum, section) => sum + section.topics.filter((t) => t.completed).length,
    0
  );
  const progressPercent = totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100);

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
            {completedTopics} von {totalTopics} Themen abgeschlossen
          </p>
          <p className="mt-2 text-sm text-gray-500">
            💡 Der Fortschritt wird automatisch in deinem Browser gespeichert.
          </p>
        </section>

        <section className="space-y-6">
          {sections.map((section) => {
            const sectionCompleted = section.topics.filter((t) => t.completed).length;
            const sectionTotal = section.topics.length;
            const sectionProgress = Math.round((sectionCompleted / sectionTotal) * 100);

            return (
              <article
                key={section.id}
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className={`bg-gradient-to-r ${section.color} p-6 text-white`}>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl" aria-hidden="true">{section.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold">{section.title}</h3>
                      <p className="mt-1 text-white/90">{section.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{sectionProgress}%</div>
                      <div className="text-sm text-white/80">
                        {sectionCompleted}/{sectionTotal} Themen
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-3">
                    {section.topics.map((topic) => (
                      <label
                        key={topic.id}
                        className="flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
                      >
                        <input
                          type="checkbox"
                          checked={topic.completed}
                          onChange={() => toggleTopic(section.id, topic.id)}
                          className="mt-1 h-5 w-5 rounded text-indigo-600 focus:ring-2 focus:ring-indigo-500"
                        />
                        <span
                          className={`flex-1 ${
                            topic.completed ? 'text-gray-400 line-through' : 'text-gray-700'
                          }`}
                        >
                          {topic.label}
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
          <p>📚 Basierend auf dem offiziellen IHK-Qualifikationsrahmen für den Bachelor Professional.</p>
          <p className="mt-2">🎯 Alle Inhalte stammen aus den BWV/DVA Schulungsmaterialien.</p>
        </aside>
      </main>
    </div>
  );
}
