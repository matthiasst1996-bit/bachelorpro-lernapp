import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AppShell } from '@/components/app-shell';

const options = [
  ['Ich starte gerade', 'Ich möchte den Aufbau verstehen und Schritt für Schritt beginnen.'],
  ['Ich habe bereits begonnen', 'Ich steige anhand meines aktuellen Lernstands wieder ein.'],
  ['Ich will ein konkretes Thema lernen', 'Ich springe direkt zu einem Fachbereich, Lernziel oder einer Prüfungsvorbereitung.']
];

export default function OnboardingPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Schritt 1 von 2</p>
        <h1 className="mt-2 text-3xl font-bold text-ink">Wo stehst du gerade?</h1>
        <p className="mt-3 text-slate-600">
          Du kannst deinen Lernweg jederzeit anpassen. Wir nutzen deine Auswahl nur, um dir den sinnvollsten nächsten Schritt zu zeigen.
        </p>
        <div className="mt-8 space-y-4">
          {options.map(([title, description]) => (
            <Link
              key={title}
              href="/fahrplan"
              className="card flex items-start gap-4 p-5 transition hover:border-blue-200 hover:shadow-lg"
            >
              <CheckCircle2 className="mt-0.5 text-brand" size={22} />
              <span>
                <strong className="block text-lg text-ink">{title}</strong>
                <span className="mt-1 block text-sm leading-6 text-slate-500">{description}</span>
              </span>
              <ArrowRight className="ml-auto mt-1 text-slate-400" size={20} />
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
