export type Lesson = {
  id: string;
  title: string;
  duration: string;
  summary: string;
  learningGoals: string[];
  sections: { heading: string; body: string; bullets?: string[] }[];
  keyTakeaway: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const kraftfahrtLessons: Lesson[] = [
  {
    id: 'grundschutz',
    title: 'Haftpflicht: der unverzichtbare Grundschutz',
    duration: '8 Min.',
    summary: 'Du verstehst, warum die Kfz-Haftpflicht Pflicht ist und welche Schäden sie übernimmt.',
    learningGoals: [
      'Die Aufgabe der Kfz-Haftpflicht erklären',
      'Personen-, Sach- und Vermögensschäden unterscheiden',
      'Die Rolle der Schadenprüfung einordnen',
    ],
    sections: [
      {
        heading: 'Worum geht es?',
        body: 'Mit einem Kraftfahrzeug kannst du anderen versehentlich einen Schaden zufügen. Die Kfz-Haftpflicht schützt dich vor den finanziellen Folgen berechtigter Ansprüche geschädigter Dritter. Sie gehört zum gesetzlichen Grundschutz, weil ein Fahrzeug nur mit bestehendem Haftpflichtschutz im Straßenverkehr eingesetzt werden darf.',
      },
      {
        heading: 'Welche Schäden können betroffen sein?',
        body: 'Im Schadenfall prüft der Versicherer zunächst, ob und in welcher Höhe ein Anspruch besteht. Berechtigte Ansprüche werden im Rahmen des Vertrags reguliert. Unberechtigte Forderungen werden abgewehrt.',
        bullets: [
          'Personenschäden: etwa Behandlungskosten, Verdienstausfall oder Schmerzensgeld',
          'Sachschäden: etwa Reparatur oder Ersatz eines beschädigten Fahrzeugs',
          'Vermögensschäden: finanzielle Nachteile, die aus einem Schaden entstehen können',
        ],
      },
      {
        heading: 'Wichtig für die Prüfung',
        body: 'Die Haftpflicht schützt nicht den eigenen Fahrzeugschaden. Dafür können Kaskobausteine sinnvoll sein. Merke dir die Grundfrage: Wer wurde geschädigt – du selbst oder ein Dritter?',
      },
    ],
    keyTakeaway: 'Haftpflicht = Schutz vor Ansprüchen anderer. Eigene Fahrzeugschäden sind nicht ihr Kernbereich.',
  },
  {
    id: 'teilkasko',
    title: 'Teilkasko: Schutz bei ausgewählten Ereignissen',
    duration: '9 Min.',
    summary: 'Du ordnest typische Teilkasko-Ereignisse richtig ein und erkennst ihre Grenzen.',
    learningGoals: [
      'Typische Teilkasko-Schäden benennen',
      'Teilkasko von Haftpflicht abgrenzen',
      'Den Einfluss von Vertrag und Selbstbeteiligung erklären',
    ],
    sections: [
      {
        heading: 'Der Gedanke der Teilkasko',
        body: 'Die Teilkasko ergänzt die Haftpflicht um Schutz für das eigene Fahrzeug bei bestimmten, im Vertrag vereinbarten Ereignissen. Sie richtet sich deshalb vor allem an Schäden, die nicht durch einen selbst verschuldeten Unfall mit einem anderen Verkehrsteilnehmer entstehen müssen.',
      },
      {
        heading: 'Typische Fallgruppen',
        body: 'Welche Ereignisse konkret versichert sind, ergibt sich immer aus dem individuellen Vertrag. Häufig spielen insbesondere diese Konstellationen eine Rolle:',
        bullets: [
          'Diebstahl oder unbefugte Entwendung',
          'Glasbruch',
          'Zusammenstoß mit bestimmten Tieren',
          'Elementarereignisse wie Sturm, Hagel, Blitz oder Überschwemmung',
          'Brand oder Explosion',
        ],
      },
      {
        heading: 'Nicht nur das Ereignis zählt',
        body: 'Prüfe im Fallbeispiel immer: Was ist passiert, welcher Baustein greift, welche Voraussetzungen gelten und ob eine Selbstbeteiligung vereinbart wurde? Die konkrete Leistung richtet sich nicht allein nach der Überschrift „Teilkasko“, sondern nach dem Vertrag.',
      },
    ],
    keyTakeaway: 'Teilkasko schützt das eigene Fahrzeug bei fest definierten Ereignissen – der Vertrag entscheidet über den genauen Umfang.',
  },
  {
    id: 'vollkasko',
    title: 'Vollkasko: erweiterter Eigenschutz',
    duration: '9 Min.',
    summary: 'Du erkennst, wann Vollkasko gegenüber Teilkasko einen zusätzlichen Nutzen bietet.',
    learningGoals: [
      'Den Mehrwert der Vollkasko beschreiben',
      'Selbst verursachte Unfälle einordnen',
      'Vandalismus als typisches Thema erkennen',
    ],
    sections: [
      {
        heading: 'Was erweitert die Vollkasko?',
        body: 'Die Vollkasko umfasst in der Regel den Schutz der Teilkasko und ergänzt ihn um weitere Schäden am eigenen Fahrzeug. Besonders wichtig ist sie bei einem selbst verursachten Unfall, wenn kein anderer Schädiger für den eigenen Fahrzeugschaden eintritt.',
      },
      {
        heading: 'Typische Zusatzsituationen',
        body: 'Die Vollkasko kann insbesondere relevant sein, wenn das eigene Fahrzeug durch ein selbst verschuldetes Unfallereignis beschädigt wird oder wenn mutwillige Beschädigungen vorliegen. Auch hier gelten die konkreten Bedingungen des Vertrags.',
      },
      {
        heading: 'Beratungslogik',
        body: 'Ob Vollkasko sinnvoll ist, hängt nicht nur vom Fahrzeugalter ab. Wert, Finanzierung, individuelle Risikoneigung, Nutzung und die Fähigkeit, einen größeren Eigenschaden selbst zu tragen, gehören in eine gute Bedarfsanalyse.',
      },
    ],
    keyTakeaway: 'Vollkasko erweitert den Schutz für das eigene Fahrzeug – besonders bei selbst verursachten Schäden.',
  },
  {
    id: 'schadenfall',
    title: 'Obliegenheiten und Schadenfall',
    duration: '10 Min.',
    summary: 'Du lernst die wichtigsten Schritte nach einem Unfall und die Bedeutung von Obliegenheiten kennen.',
    learningGoals: [
      'Die richtigen ersten Schritte im Schadenfall nennen',
      'Obliegenheiten verständlich erklären',
      'Risiken bei Pflichtverletzungen erkennen',
    ],
    sections: [
      {
        heading: 'Sicherheit zuerst',
        body: 'Nach einem Unfall stehen Menschen und Sicherheit an erster Stelle. Sichere die Unfallstelle ab, leiste bei Bedarf Erste Hilfe und verständige bei erforderlichen Situationen Rettungskräfte oder Polizei. Anschließend sollten die relevanten Informationen sachlich dokumentiert werden.',
      },
      {
        heading: 'Was sind Obliegenheiten?',
        body: 'Obliegenheiten sind Verhaltensanforderungen, die Versicherungsnehmende beachten müssen. Sie helfen dabei, den Schaden richtig aufzuklären und eine angemessene Regulierung zu ermöglichen. Dazu gehören beispielsweise wahrheitsgemäße Angaben und die unverzügliche Meldung eines Schadenfalls.',
        bullets: [
          'Unfallstelle sichern und Schaden begrenzen, soweit zumutbar',
          'Daten, Fotos und den Ablauf dokumentieren',
          'Schaden zeitnah melden',
          'Bei der Aufklärung mitwirken und Informationen wahrheitsgemäß angeben',
          'Keine vorschnellen Schuldanerkenntnisse abgeben',
        ],
      },
      {
        heading: 'Folgen von Pflichtverletzungen',
        body: 'Wer Pflichten verletzt, kann den Versicherungsschutz gefährden. Welche Folgen eintreten, hängt von der konkreten Pflicht, dem Verschulden und den Vertrags- sowie Rechtsgrundlagen ab. Deshalb lautet die sichere Praxis: Schaden melden, Unterlagen sichern und aktiv bei der Aufklärung mitwirken.',
      },
    ],
    keyTakeaway: 'Im Schadenfall: Sicherheit, Dokumentation, unverzügliche Meldung und ehrliche Mitwirkung.',
  },
];

export const kraftfahrtCaseStudy = {
  title: 'Fallbeispiel: Rückwärts aus der Parklücke',
  situation: 'Lea fährt rückwärts aus einer Parklücke und übersieht ein stehendes Fahrzeug. Das andere Fahrzeug wird beschädigt; an Leas eigenem Auto entsteht ebenfalls ein erheblicher Schaden.',
  questions: [
    'Welcher Baustein ist grundsätzlich für den Schaden am anderen Fahrzeug relevant?',
    'Welcher Schutz kann für Leas eigenen Fahrzeugschaden relevant werden?',
    'Welche Informationen sollte Lea für die Schadenmeldung sichern?',
  ],
  solution: 'Der Schaden des anderen Fahrzeugs ist ein typischer Haftpflichtfall. Für Leas eigenen Fahrzeugschaden kommt – abhängig vom vereinbarten Vertrag – Vollkasko in Betracht. Sie sollte die Unfallstelle absichern, Fotos und Kontaktdaten sichern, den Ablauf dokumentieren und den Schaden zeitnah melden.',
};

export const kraftfahrtQuiz: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Wofür ist die Kfz-Haftpflicht in erster Linie da?',
    options: [
      'Für Schäden am eigenen Fahrzeug nach jedem Unfall',
      'Für berechtigte Ansprüche geschädigter Dritter',
      'Nur für Glasschäden am eigenen Fahrzeug',
      'Ausschließlich für Schäden durch Unwetter',
    ],
    correctIndex: 1,
    explanation: 'Die Kfz-Haftpflicht schützt vor berechtigten Ansprüchen Dritter. Eigene Fahrzeugschäden sind nicht ihr Kernbereich.',
  },
  {
    id: 'q2',
    question: 'Welche Aussage beschreibt Teilkasko am besten?',
    options: [
      'Sie ersetzt immer die gesetzliche Haftpflicht.',
      'Sie schützt nur andere Verkehrsteilnehmende.',
      'Sie schützt das eigene Fahrzeug bei vereinbarten Ereignissen.',
      'Sie greift ausschließlich bei selbst verschuldeten Unfällen.',
    ],
    correctIndex: 2,
    explanation: 'Teilkasko ist Eigenschutz für bestimmte vertraglich vereinbarte Ereignisse, etwa Glasbruch oder Naturereignisse.',
  },
  {
    id: 'q3',
    question: 'Welche Situation ist typischerweise ein Argument für Vollkasko?',
    options: [
      'Ein selbst verursachter Unfall mit Schaden am eigenen Fahrzeug',
      'Eine Forderung eines geschädigten Dritten',
      'Die Zulassung eines Fahrzeugs ohne Haftpflichtschutz',
      'Eine reine Beratung ohne Fahrzeugbezug',
    ],
    correctIndex: 0,
    explanation: 'Vollkasko erweitert den Eigenschutz und kann insbesondere bei selbst verursachten Schäden am eigenen Fahrzeug relevant sein.',
  },
  {
    id: 'q4',
    question: 'Was gehört nach einem Unfall zu einer sinnvollen Vorgehensweise?',
    options: [
      'Den Schaden erst Wochen später ohne Unterlagen melden',
      'Die Unfallstelle sichern und den Ablauf dokumentieren',
      'Sofort verbindlich die gesamte Schuld anerkennen',
      'Keine Angaben machen, um Zeit zu sparen',
    ],
    correctIndex: 1,
    explanation: 'Sicherheit, Dokumentation, zeitnahe Meldung und Mitwirkung bei der Aufklärung sind zentrale Schritte.',
  },
];
