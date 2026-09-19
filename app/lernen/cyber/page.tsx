'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { cyberCaseStudy, cyberLessons, cyberQuiz } from '../../../content/cyber';

const PROGRESS_KEY = 'bachelorpro-cyber-completed-lessons';
type Answers = Record<string, number>;

export default function CyberLearningPage() {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [activeLessonId, setActiveLessonId] = useState(cyberLessons[0].id);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(PROGRESS_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setCompletedLessons(parsed);
      } catch {
        localStorage.removeItem(PROGRESS_KEY);
      }
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(PROGRESS_KEY, JSON.stringify(completedLessons));
  }, [completedLessons, loaded]);

  const activeLesson = cyberLessons.find((lesson) => lesson.id === activeLessonId) ?? cyberLessons[0];
  const progress = Math.round((completedLessons.length / cyberLessons.length) * 100);
  const score = useMemo(() => cyberQuiz.filter((question) => answers[question.id] === question.correctIndex).length, [answers]);
  const markLessonComplete = () => setCompletedLessons((current) => current.includes(activeLesson.id) ? current : [...current, activeLesson.id]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur"><div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4"><Link href="/fahrplan" className="text-sm font-semibold text-slate-600 transition hover:text-cyan-700">← Zum Fahrplan</Link><span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700">Lernmodul</span></div></header>
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <section className="mb-8 rounded-3xl bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 p-7 text-white shadow-xl md:p-10"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">Sach- und Vermögensschutz</p><h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Cyberrisikoversicherung</h1><p className="mt-4 max-w-2xl text-base leading-7 text-cyan-50 md:text-lg">Verstehe digitale Risiken, Eigenschäden, Drittschäden und die richtigen Schritte im Ernstfall.</p><div className="mt-7 max-w-xl"><div className="mb-2 flex items-center justify-between text-sm font-semibold text-cyan-50"><span>Dein Modulfortschritt</span><span>{completedLessons.length}/{cyberLessons.length} Kapitel · {progress}%</span></div><div className="h-3 overflow-hidden rounded-full bg-white/25"><div className="h-full rounded-full bg-white transition-all duration-500" style={{ width: `${progress}%` }} /></div></div></section>
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-2xl bg-white p-4 shadow-lg lg:sticky lg:top-6"><h2 className="px-2 pb-3 text-sm font-black uppercase tracking-wider text-slate-500">Kapitel</h2><div className="space-y-2">{cyberLessons.map((lesson, index) => { const complete = completedLessons.includes(lesson.id); const active = activeLesson.id === lesson.id; return <button key={lesson.id} onClick={() => setActiveLessonId(lesson.id)} className={`w-full rounded-xl p-3 text-left transition ${active ? 'bg-cyan-700 text-white shadow-md' : 'bg-slate-50 text-slate-700 hover:bg-cyan-50'}`}><div className="flex gap-3"><span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${active ? 'bg-white text-cyan-700' : complete ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'}`}>{complete ? '✓' : index + 1}</span><span><span className="block text-sm font-bold leading-5">{lesson.title}</span><span className={`mt-1 block text-xs ${active ? 'text-cyan-100' : 'text-slate-500'}`}>{lesson.duration}</span></span></div></button>; })}</div></aside>
          <section className="space-y-8">
            <article className="rounded-2xl bg-white p-6 shadow-lg md:p-8"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-sm font-bold text-cyan-700">{activeLesson.duration} Lernzeit</p><h2 className="mt-1 text-3xl font-black tracking-tight text-slate-900">{activeLesson.title}</h2><p className="mt-3 max-w-3xl text-lg leading-7 text-slate-600">{activeLesson.summary}</p></div>{completedLessons.includes(activeLesson.id) && <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">Erledigt ✓</span>}</div><div className="mt-7 rounded-2xl border border-cyan-100 bg-cyan-50 p-5"><h3 className="font-black text-cyan-950">Nach diesem Kapitel kannst du …</h3><ul className="mt-3 space-y-2 text-sm leading-6 text-cyan-900">{activeLesson.learningGoals.map((goal) => <li key={goal}>✓ {goal}</li>)}</ul></div><div className="mt-8 space-y-7">{activeLesson.sections.map((section) => <section key={section.heading}><h3 className="text-xl font-black text-slate-900">{section.heading}</h3><p className="mt-2 leading-7 text-slate-700">{section.body}</p>{section.bullets && <ul className="mt-4 space-y-2 rounded-xl bg-slate-50 p-4 text-slate-700">{section.bullets.map((bullet) => <li key={bullet} className="leading-6">• {bullet}</li>)}</ul>}</section>)}</div><div className="mt-8 rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-5"><p className="text-xs font-black uppercase tracking-wider text-amber-700">Merksatz</p><p className="mt-1 text-lg font-bold leading-7 text-amber-950">{activeLesson.keyTakeaway}</p></div><button onClick={markLessonComplete} className="mt-8 rounded-xl bg-cyan-700 px-5 py-3 font-bold text-white shadow-sm transition hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-200">{completedLessons.includes(activeLesson.id) ? 'Kapitel als erledigt markiert' : 'Kapitel abschließen'}</button></article>
            <article className="rounded-2xl bg-white p-6 shadow-lg md:p-8"><p className="text-sm font-bold text-indigo-700">Praxistransfer</p><h2 className="mt-1 text-2xl font-black">{cyberCaseStudy.title}</h2><p className="mt-4 leading-7 text-slate-700">{cyberCaseStudy.situation}</p><ol className="mt-5 space-y-3 rounded-xl bg-indigo-50 p-5 text-indigo-950">{cyberCaseStudy.questions.map((question, index) => <li key={question}><span className="font-black">{index + 1}.</span> {question}</li>)}</ol><details className="mt-5 rounded-xl border border-slate-200 p-4"><summary className="cursor-pointer font-bold text-slate-800">Lösung anzeigen</summary><p className="mt-3 leading-7 text-slate-700">{cyberCaseStudy.solution}</p></details></article>
            <article className="rounded-2xl bg-white p-6 shadow-lg md:p-8"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-sm font-bold text-violet-700">Selbsttest</p><h2 className="mt-1 text-2xl font-black">Teste dein Wissen</h2></div>{submitted && <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-bold text-violet-800">{score}/{cyberQuiz.length} richtig</span>}</div><div className="mt-6 space-y-7">{cyberQuiz.map((question, questionIndex) => <fieldset key={question.id} className="rounded-xl border border-slate-200 p-5"><legend className="px-1 font-bold text-slate-900">{questionIndex + 1}. {question.question}</legend><div className="mt-4 space-y-3">{question.options.map((option, optionIndex) => { const selected = answers[question.id] === optionIndex; const correct = question.correctIndex === optionIndex; const state = submitted ? (correct ? 'border-emerald-300 bg-emerald-50 text-emerald-950' : selected ? 'border-rose-300 bg-rose-50 text-rose-950' : 'border-slate-200 bg-white text-slate-700') : (selected ? 'border-cyan-400 bg-cyan-50 text-cyan-950' : 'border-slate-200 bg-white text-slate-700 hover:border-cyan-200'); return <label key={option} className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition ${state}`}><input type="radio" name={question.id} checked={selected} disabled={submitted} onChange={() => setAnswers((current) => ({ ...current, [question.id]: optionIndex }))} className="mt-1 h-4 w-4 accent-cyan-700" /><span className="text-sm leading-6">{option}</span></label>; })}</div>{submitted && <p className="mt-4 text-sm leading-6 text-slate-600"><span className="font-bold">Einordnung:</span> {question.explanation}</p>}</fieldset>)}</div>{!submitted ? <button onClick={() => setSubmitted(true)} disabled={Object.keys(answers).length !== cyberQuiz.length} className="mt-7 rounded-xl bg-violet-600 px-5 py-3 font-bold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-slate-300">Antworten auswerten</button> : <button onClick={() => { setAnswers({}); setSubmitted(false); }} className="mt-7 rounded-xl border border-violet-300 px-5 py-3 font-bold text-violet-700 transition hover:bg-violet-50">Quiz erneut starten</button>}</article>
          </section>
        </div>
      </div>
    </main>
  );
}
