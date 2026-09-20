'use client';

import { useEffect, useMemo, useState } from 'react';
import { perilLessons, perilCaseStudy, perilQuiz } from '@/content/gefahren';

const PROGRESS_KEY = 'bachelorpro-gefahren-progress';

type ModuleProgress = {
  completedLessons: string[];
  quizAnswers: Record<string, number>;
  quizSubmitted: boolean;
};

export default function GefahrenPage() {
  const [progress, setProgress] = useState<ModuleProgress>({ completedLessons: [], quizAnswers: {}, quizSubmitted: false });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(PROGRESS_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (typeof parsed === 'object' && parsed !== null) {
          setProgress({
            completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
            quizAnswers: typeof parsed.quizAnswers === 'object' && parsed.quizAnswers !== null ? parsed.quizAnswers : {},
            quizSubmitted: typeof parsed.quizSubmitted === 'boolean' ? parsed.quizSubmitted : false,
          });
        }
      } catch {
        localStorage.removeItem(PROGRESS_KEY);
      }
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  }, [progress, loaded]);

  const score = useMemo(
    () => perilQuiz.filter((q) => progress.quizAnswers[q.id] === q.correctIndex).length,
    [progress.quizAnswers]
  );

  const markComplete = (lessonId: string) => {
    setProgress((p) => ({
      ...p,
      completedLessons: p.completedLessons.includes(lessonId) ? p.completedLessons : [...p.completedLessons, lessonId],
    }));
  };

  const isLessonComplete = (lessonId: string) => progress.completedLessons.includes(lessonId);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Gefahren</h1>
        <p className="text-gray-600">Versicherte und ausgeschlossene Gefahren in der Sachversicherung</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Lektionen</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {perilLessons.map((lesson) => {
            const isComplete = isLessonComplete(lesson.id);
            return (
              <div key={lesson.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{lesson.title}</h3>
                  <span className="text-sm text-gray-500">{lesson.duration}</span>
                </div>
                <p className="text-gray-700 mb-3">{lesson.summary}</p>
                <div className="mb-3">
                  <h4 className="font-medium text-sm mb-1">Lernziele:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {lesson.learningGoals.map((goal, i) => (
                      <li key={i}>{goal}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  {lesson.sections.map((section, i) => (
                    <div key={i} className="mb-3">
                      <h4 className="font-medium text-sm">{section.heading}</h4>
                      <p className="text-gray-700 text-sm">{section.body}</p>
                      {section.bullets && (
                        <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                          {section.bullets.map((bullet, j) => (
                            <li key={j}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-3 p-2 bg-blue-50 rounded">
                  <p className="text-sm font-medium text-blue-800">Key Takeaway:</p>
                  <p className="text-sm text-blue-700">{lesson.keyTakeaway}</p>
                </div>
                <button
                  onClick={() => markComplete(lesson.id)}
                  className={`mt-4 w-full rounded-xl px-4 py-2 font-bold transition focus:outline-none focus:ring-4 ${
                    isComplete
                      ? 'bg-emerald-100 text-emerald-800 focus:ring-emerald-200'
                      : 'bg-indigo-700 text-white hover:bg-indigo-800 focus:ring-indigo-200'
                  }`}
                >
                  {isComplete ? 'Erledigt ✓' : 'Kapitel abschließen'}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Fallbeispiel</h2>
        <div className="border rounded-lg p-6 bg-gray-50">
          <h3 className="font-semibold text-xl mb-3">{perilCaseStudy.title}</h3>
          <div className="mb-4">
            <h4 className="font-medium">Situation:</h4>
            <p className="text-gray-700">{perilCaseStudy.situation}</p>
          </div>
          <div className="mb-4">
            <h4 className="font-medium mb-2">Fragen:</h4>
            <ol className="list-decimal list-inside text-gray-700">
              {perilCaseStudy.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ol>
          </div>
          <div>
            <h4 className="font-medium">Musterlösung:</h4>
            <p className="text-gray-700">{perilCaseStudy.solution}</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Quiz</h2>
        <div className="space-y-6">
          {perilQuiz.map((q, qIndex) => (
            <fieldset key={q.id} className="rounded-xl border border-slate-200 p-5">
              <legend className="px-1 font-bold text-slate-900">
                {qIndex + 1}. {q.question}
              </legend>
              <div className="mt-4 space-y-3">
                {q.options.map((option, oIndex) => {
                  const selected = progress.quizAnswers[q.id] === oIndex;
                  const correct = q.correctIndex === oIndex;
                  const state = progress.quizSubmitted
                    ? correct
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                      : selected
                      ? 'border-rose-300 bg-rose-50 text-rose-950'
                      : 'border-slate-200 bg-white text-slate-700'
                    : selected
                    ? 'border-indigo-400 bg-indigo-50 text-indigo-950'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-200';
                  return (
                    <label
                      key={option}
                      className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition ${state}`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        checked={selected}
                        disabled={progress.quizSubmitted}
                        onChange={() =>
                          setProgress((p) => ({ ...p, quizAnswers: { ...p.quizAnswers, [q.id]: oIndex } }))
                        }
                        className="mt-1 h-4 w-4 accent-indigo-700"
                      />
                      <span className="text-sm leading-6">{option}</span>
                    </label>
                  );
                })}
              </div>
              {progress.quizSubmitted && (
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  <span className="font-bold">Einordnung:</span> {q.explanation}
                </p>
              )}
            </fieldset>
          ))}
        </div>
        {!progress.quizSubmitted ? (
          <button
            onClick={() => setProgress((p) => ({ ...p, quizSubmitted: true }))}
            disabled={Object.keys(progress.quizAnswers).length !== perilQuiz.length}
            className="mt-7 rounded-xl bg-violet-600 px-5 py-3 font-bold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Antworten auswerten
          </button>
        ) : (
          <div className="mt-7 flex items-center gap-4">
            <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-bold text-violet-800">
              {score}/{perilQuiz.length} richtig
            </span>
            <button
              onClick={() => setProgress((p) => ({ ...p, quizAnswers: {}, quizSubmitted: false }))}
              className="rounded-xl border border-violet-300 px-5 py-3 font-bold text-violet-700 transition hover:bg-violet-50"
            >
              Quiz erneut starten
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
