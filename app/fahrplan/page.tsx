'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Topic { id: number; label: string; completed: boolean; href?: string; }
interface Section { id: number; title: string; description: string; icon: string; color: string; topics: Topic[]; }

const defaultSections: Section[] = [
  { id: 1, title: 'Sach- und Vermögensschutz', description: 'Versicherungsprodukte, Vertragsgrundlagen und Schadenfalle verständlich aufbauen.', icon: '🛡️', color: 'from-blue-500 to-cyan-500', topics: [
    { id: 1, label: 'Kraftfahrtversicherung (Haftpflicht & Kasko)', completed: false, href: '/lernen/kraftfahrt' },
    { id: 2, label: 'Cyberrisikoversicherung (Dritt-/Eigenschaden)', completed: false, href: '/lernen/cyber' },
    { id: 3, label: 'Rechts- und Vertragsgrundlagen (VVG, PflVG)', completed: false, href: '/lernen/rechtsgrundlagen' },
    { id: 4, label: 'Versicherte und nicht versicherte Gefahren', completed: false, href: '/lernen/gefahren' },
    { id: 5, label: 'Obliegenheiten und Schadenfall', completed: false },
    { id: 6, label: 'Versicherungsbetrug erkennen', completed: false },
  ] },
  { id: 2, title: 'Kernprozesse gestalten', description: 'Kundenkommunikation, Services und Produktentwicklung trainieren.', icon: '⚙️', color: 'from-emerald-500 to-teal-500', topics: [
    { id: 1, label: 'Kommunikations- und Serviceprozesse', completed: false },
    { id: 2, label: 'Kommunikationsmodelle (Sender-Empfanger, Eisberg, 4-Seiten)', completed: false },
    { id: 3, label: 'Service- und Unterstutzungsleistungen konzipieren', completed: false },
    { id: 4, label: 'Neukunden vs. Bestandskunden', completed: false },
    { id: 5, label: 'Produktentwicklungsprozess', completed: false },
    { id: 6, label: 'Produktcontrolling & KPIs', completed: false },
  ] },
  { id: 3, title: 'Steuerung, Zusammenarbeit und Leadership', description: 'Berufsausbildung, Fuhrung sowie den praxisbezogenen Prufungsteil meistern.', icon: '🎯', color: 'from-amber-500 to-orange-500', topics: [
    { id: 1, label: 'Berufsausbildung (BBiG, duales System)', completed: false },
    { id: 2, label: 'Betrieblicher Ausbildungsplan & Lernortkooperation', completed: false },
    { id: 3, label: 'Lernforderliche Bedingungen & Feedback', completed: false },
    { id: 4, label: 'Prasentation & Fachgesprach (Praxistransferarbeit)', completed: false },
    { id: 5, label: 'Vorbereitung auf Prufungen (GAP Teil 1 & 2)', completed: false },
    { id: 6, label: 'Fuhrungsstile & Motivation', completed: false },
  ] },
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
          const savedSection = parsed.find((section: Section) => section.id === defaultSection.id);
          if (!savedSection) return defaultSection;
          return { ...defaultSection, topics: defaultSection.topics.map((defaultTopic) => {
            const savedTopic = savedSection.topics.find((topic: Topic) => topic.id === defaultTopic.id);
            return savedTopic ? { ...defaultTopic, completed: savedTopic.completed } : defaultTopic;
          }) };
        });
        setSections(merged);
      }
    } catch (error) { console.error('Fehler beim Laden des Fortschritts:', error); }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(sections)); } catch (error) { console.error('Fehler beim Speichern des Fortschritts:', error); }
  }, [sections, isLoaded]);

  const toggleTopic = (sectionId: number, topicId: number) => setSections((previous) => previous.map((section) => section.id === sectionId ? { ...section, topics: section.topics.map((topic) => topic.id === topicId ? { ...topic, completed: !topic.completed } : topic) } : section));
  const totalTopics = sections.reduce((sum, section) => sum + section.topics.length, 0);
  const completedTopics = sections.reduce((sum, section) => sum + section.topics.filter((topic) => topic.completed).length, 0);
  const progressPercent = totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100);

  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"><header className="border-b bg-white shadow-sm"><div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4"><button onClick={() => router.push('/onboarding')} className="text-gray-600 transition-colors hover:text-gray-900">← Zurück</button><h1 className="text-xl font-bold text-gray-900">Dein Bachelor-Fahrplan</h1><div className="w-16" /></div></header><main className="mx-auto max-w-6xl px-4 py-8"><section className="mb-8 rounded-2xl bg-white p-6 shadow-lg"><div className="mb-4 flex items-center justify-between"><h2 className="text-2xl font-bold text-gray-900">Dein Fortschritt</h2><span className="text-3xl font-bold text-indigo-600">{progressPercent}%</span></div><div className="h-4 w-full overflow-hidden rounded-full bg-gray-200"><div className="h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500" style={{ width: `${progressPercent}%` }} /></div><p className="mt-3 text-gray-600">{completedTopics} von {totalTopics} Themen abgeschlossen</p><p className="mt-2 text-sm text-gray-500">💡 Der Fortschritt wird automatisch in deinem Browser gespeichert.</p></section><section className="space-y-6">{sections.map((section) => { const sectionCompleted = section.topics.filter((topic) => topic.completed).length; const sectionProgress = Math.round((sectionCompleted / section.topics.length) * 100); return <article key={section.id} className="overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"><div className={`bg-gradient-to-r ${section.color} p-6 text-white`}><div className="flex items-center gap-4"><span className="text-4xl" aria-hidden="true">{section.icon}</span><div className="flex-1"><h3 className="text-2xl font-bold">{section.title}</h3><p className="mt-1 text-white/90">{section.description}</p></div><div className="text-right"><div className="text-2xl font-bold">{sectionProgress}%</div><div className="text-sm text-white/80">{sectionCompleted}/{section.topics.length} Themen</div></div></div></div><div className="p-6"><div className="space-y-3">{section.topics.map((topic) => <div key={topic.id} className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"><input type="checkbox" checked={topic.completed} onChange={() => toggleTopic(section.id, topic.id)} className="mt-1 h-5 w-5 shrink-0 rounded text-indigo-600 focus:ring-2 focus:ring-indigo-500" aria-label={`${topic.label} als abgeschlossen markieren`} />{topic.href ? <button onClick={() => router.push(topic.href!)} className={`flex-1 text-left font-medium underline-offset-4 hover:text-indigo-700 hover:underline ${topic.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{topic.label} <span className="ml-1 text-sm no-underline">→ Lernen</span></button> : <span className={`flex-1 ${topic.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{topic.label}</span>}</div>)}</div></div></article>; })}</section><aside className="mt-8 text-center text-sm text-gray-500"><p>📚 Dein Lernweg bUndelt die fUr dich aufbereiteten Inhalte zu den Studienabschnitten.</p><p className="mt-2">🎯 Arbeite die Kapitel in deinem Tempo durch und nutze die Ubungen zur Selbstkontrolle.</p></aside></main></div>;
}