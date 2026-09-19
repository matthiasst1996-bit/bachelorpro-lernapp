'use client';

import { useRouter } from 'next/navigation';

export default function OnboardingPage() {
  const router = useRouter();

  const handleStartJustNow = () => {
    router.push('/fahrplan');
  };

  const handleAlreadyStarted = () => {
    router.push('/fahrplan');
  };

  const handleConcreteTopic = () => {
    router.push('/fahrplan');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Willkommen zu deiner Bachelorarbeit
          </h1>
          <p className="text-lg text-gray-600">
            Wir begleiten dich Schritt für Schritt durch den Prozess.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleStartJustNow}
            className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <div className="text-left">
              <div className="font-medium text-lg">Ich starte gerade</div>
              <div className="text-indigo-200 text-sm mt-1">
                Du hast gerade begonnen oder stehst noch am Anfang
              </div>
            </div>
          </button>

          <button
            onClick={handleAlreadyStarted}
            className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <div className="text-left">
              <div className="font-medium text-lg">Ich habe bereits begonnen</div>
              <div className="text-emerald-200 text-sm mt-1">
                Du bist schon mittendrin und brauchst Unterstützung
              </div>
            </div>
          </button>

          <button
            onClick={handleConcreteTopic}
            className="w-full py-4 px-6 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            <div className="text-left">
              <div className="font-medium text-lg">Ich will ein konkretes Thema lernen</div>
              <div className="text-amber-200 text-sm mt-1">
                Du möchtest gezielt ein bestimmtes Thema bearbeiten
              </div>
            </div>
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Alle Optionen führen zunächst zum Bachelor-Fahrplan.</p>
          <p className="mt-1">Es werden keine Zugangsdaten, API-Keys oder Originalunterlagen gespeichert.</p>
        </div>
      </div>
    </div>
  );
}
