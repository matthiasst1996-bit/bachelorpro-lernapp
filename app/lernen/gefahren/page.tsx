import { perilLessons, perilCaseStudy, perilQuiz } from '@/content/gefahren';

export default function GefahrenPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Gefahren</h1>
        <p className="text-gray-600">Versicherte und ausgeschlossene Gefahren in der Sachversicherung</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Lektionen</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {perilLessons.map((lesson) => (
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
            </div>
          ))}
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
            <h4 className="font-medium">MusterlÃ¶sung:</h4>
            <p className="text-gray-700">{perilCaseStudy.solution}</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Quiz</h2>
        <div className="space-y-6">
          {perilQuiz.map((q) => (
            <div key={q.id} className="border rounded-lg p-4">
              <p className="font-medium mb-3">{q.question}</p>
              <div className="space-y-2">
                {q.options.map((option, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded border ${
                      i === q.correctIndex ? 'bg-green-50 border-green-300' : 'bg-white'
                    }`}
                  >
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name={q.id}
                        className="accent-blue-600"
                      />
                      <span>{option}</span>
                    </label>
                  </div>
                ))}
              </div>
              <details className="mt-3">
                <summary className="text-sm text-blue-600 cursor-pointer font-medium">ErklÃ¤rung anzeigen</summary>
                <p className="text-sm text-gray-700 mt-2">{q.explanation}</p>
              </details>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}