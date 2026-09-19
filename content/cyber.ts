export type CyberLesson = {
  id: string;
  title: string;
  duration: string;
  summary: string;
  learningGoals: string[];
  sections: { heading: string; body: string; bullets?: string[] }[];
  keyTakeaway: string;
};

export type CyberQuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const cyberLessons: CyberLesson[] = [
  {
    id: 'risiken',
    title: 'Cyberrisiken verstehen',
    duration: '8 Min.',
    summary: 'Du erkennst typische Angriffsszenarien und ihre möglichen Folgen für Unternehmen.',
    learningGoals: ['Typische Cyberangriffe benennen', 'Direkte und indirekte Schäden unterscheiden', 'Cyberrisiko als Unternehmensrisiko einordnen'],
    sections: [
      { heading: 'Was ist ein Cyberrisiko?', body: 'Ein Cyberrisiko entsteht, wenn digitale Systeme, Daten oder Geschäftsprozesse durch Angriffe, Fehlbedienung oder technische Störungen beeinträchtigt werden. Besonders kritisch wird es, wenn ein Vorfall den Betrieb unterbricht oder vertrauliche Daten betroffen sind.' },
      { heading: 'Typische Angriffsszenarien', body: 'Angreifer nutzen unterschiedliche Wege, um Zugang zu Systemen zu erhalten oder Abläufe zu stören.', bullets: ['Phishing: Täuschende Nachrichten sollen Zugangsdaten oder Zahlungen auslösen', 'Ransomware: Daten oder Systeme werden verschlüsselt und der Betrieb wird blockiert', 'Schadsoftware: Programme verändern, löschen oder überwachen Daten', 'Angriffe auf Dienstleister oder Zugangskonten: Ein schwacher Zugang kann mehrere Systeme gefährden'] },
      { heading: 'Warum betrifft das das gesamte Unternehmen?', body: 'Ein Cybervorfall ist nicht nur ein IT-Problem. Vertrieb, Kundenservice, Produktion, Buchhaltung und Kommunikation können gleichzeitig betroffen sein. Deshalb gehören Prävention, Notfallplanung und Versicherungsschutz in eine gemeinsame Risikobetrachtung.' },
    ],
    keyTakeaway: 'Cyberrisiken treffen Systeme, Daten und Geschäftsprozesse – ihre Folgen reichen weit über die IT hinaus.',
  },
  {
    id: 'eigenschaden',
    title: 'Eigenschäden und Betriebsunterbrechung',
    duration: '9 Min.',
    summary: 'Du lernst, welche eigenen Kosten nach einem Cybervorfall entstehen können.',
    learningGoals: ['Typische Eigenschäden einordnen', 'Betriebsunterbrechung erklären', 'Wiederherstellungskosten erkennen'],
    sections: [
      { heading: 'Eigenschäden im Blick', body: 'Eigenschäden sind finanzielle Belastungen, die das betroffene Unternehmen selbst trägt. Bei einem Cybervorfall können sie schon entstehen, bevor Ansprüche anderer Personen oder Unternehmen geltend gemacht werden.', bullets: ['Kosten für IT-Forensik, Ursachenanalyse und technische Sofortmaßnahmen', 'Wiederherstellung von Daten, Systemen und Arbeitsfähigkeit', 'Mehrkosten für externe Spezialisten oder Ersatzprozesse', 'Ertragsausfälle während einer versicherten Betriebsunterbrechung'] },
      { heading: 'Betriebsunterbrechung', body: 'Wenn zentrale Systeme nicht verfügbar sind, können Aufträge nicht bearbeitet, Rechnungen nicht erstellt oder Kunden nicht versorgt werden. Der wirtschaftliche Schaden besteht dann nicht nur aus Reparaturkosten, sondern häufig auch aus ausbleibendem Ertrag und fortlaufenden Fixkosten.' },
      { heading: 'Vertrag entscheidet über den Umfang', body: 'Welche Kosten konkret versichert sind, ergibt sich aus dem vereinbarten Vertrag. In der Praxis werden unter anderem Wartezeiten, Selbstbehalte, Entschädigungsgrenzen und Sicherheitsanforderungen geprüft.' },
    ],
    keyTakeaway: 'Eigenschäden umfassen mehr als IT-Reparaturen: Auch Ausfallzeiten und Wiederanlaufkosten können entscheidend sein.',
  },
  {
    id: 'drittschaden',
    title: 'Drittschäden und Verantwortung',
    duration: '8 Min.',
    summary: 'Du unterscheidest Schäden des Unternehmens von möglichen Ansprüchen Dritter.',
    learningGoals: ['Drittschäden definieren', 'Haftungsrisiken erkennen', 'Datenschutz und Kommunikation einordnen'],
    sections: [
      { heading: 'Wann entstehen Drittschäden?', body: 'Drittschäden können entstehen, wenn ein Cybervorfall bei Kunden, Geschäftspartnern oder anderen Betroffenen finanzielle Nachteile auslöst. Beispielsweise können vertrauliche Informationen betroffen sein oder vereinbarte Leistungen nicht erbracht werden.' },
      { heading: 'Prüfen statt vorschnell zahlen', body: 'Wie bei anderen Haftpflichtfragen muss zunächst geklärt werden, ob ein Anspruch besteht, wer verantwortlich ist und welcher Schaden nachweisbar ist. Eine Cyberversicherung kann – abhängig vom Vertrag – bei der Prüfung, Abwehr unberechtigter Forderungen oder Regulierung berechtigter Ansprüche unterstützen.' },
      { heading: 'Krisenkommunikation', body: 'Neben der rechtlichen und technischen Bewertung ist die Kommunikation entscheidend. Betroffene Stellen müssen intern abgestimmt, sachlich und fristgerecht informiert werden. Unklare oder verspätete Kommunikation kann die wirtschaftlichen Folgen eines Vorfalls verstärken.' },
    ],
    keyTakeaway: 'Drittschäden betreffen mögliche Ansprüche anderer – sie verlangen eine sorgfältige Prüfung und abgestimmte Kommunikation.',
  },
  {
    id: 'response',
    title: 'Incident Response, Prävention und Obliegenheiten',
    duration: '10 Min.',
    summary: 'Du lernst die richtige Reihenfolge im Ernstfall und wichtige Präventionsmaßnahmen.',
    learningGoals: ['Erste Schritte nach einem Vorfall strukturieren', 'Prävention als Risikofaktor erklären', 'Obliegenheiten im Cybervertrag verstehen'],
    sections: [
      { heading: 'Incident Response: strukturiert handeln', body: 'Nach einem Cybervorfall kommt es auf Geschwindigkeit und Struktur an. Das Ziel ist, Schäden zu begrenzen, den Betrieb kontrolliert wiederherzustellen und die Ursache aufzuklären.', bullets: ['Vorfall erkennen, dokumentieren und intern eskalieren', 'Betroffene Systeme absichern und weitere Ausbreitung begrenzen', 'Fachleute für Forensik, IT-Wiederherstellung und Kommunikation einbinden', 'Versicherer und gegebenenfalls weitere zuständige Stellen zeitnah informieren', 'Wiederanlauf planen, Erkenntnisse sichern und Schutzmaßnahmen verbessern'] },
      { heading: 'Prävention bleibt unverzichtbar', body: 'Versicherung ersetzt keine Informationssicherheit. Starke Passwörter, Mehrfaktor-Authentifizierung, aktuelle Systeme, regelmäßige Backups, Rollen- und Berechtigungskonzepte sowie Schulungen gegen Phishing reduzieren die Eintrittswahrscheinlichkeit und den Schadenumfang.' },
      { heading: 'Obliegenheiten beachten', body: 'Versicherungsnehmende müssen vereinbarte Sicherheits- und Mitwirkungspflichten beachten. Dazu können wahrheitsgemäße Angaben, eine zeitnahe Schadenmeldung und Unterstützung bei der Aufklärung gehören. Welche Folgen eine Verletzung hat, hängt stets von Vertrag, Verschulden und Einzelfall ab.' },
    ],
    keyTakeaway: 'Guter Cyber-Schutz kombiniert Prävention, einen geübten Notfallprozess und vertragstreues Handeln.',
  },
];

export const cyberCaseStudy = {
  title: 'Fallbeispiel: Verschlüsselte Kundendaten',
  situation: 'Ein mittelständisches Unternehmen kann nach einem Angriff nicht mehr auf sein Auftrags- und Kundensystem zugreifen. Die Mitarbeitenden können keine Bestellungen bearbeiten; gleichzeitig besteht der Verdacht, dass Daten abgeflossen sind.',
  questions: ['Welche unmittelbaren Eigenschäden können entstehen?', 'Warum können zusätzlich Drittschäden relevant werden?', 'Welche drei Schritte haben in den ersten Stunden Priorität?'],
  solution: 'Möglich sind Kosten für Forensik, Wiederherstellung, externe Unterstützung und ein Ertragsausfall durch die Unterbrechung. Drittschäden können entstehen, wenn Betroffene oder Geschäftspartner durch den Vorfall Nachteile erleiden. Priorität haben die Eindämmung, die strukturierte Dokumentation und Eskalation sowie die Einbindung der vorgesehenen Fachstellen und des Versicherers.',
};

export const cyberQuiz: CyberQuizQuestion[] = [
  { id: 'cyber-q1', question: 'Welche Situation beschreibt einen typischen Eigenschaden nach einem Cybervorfall?', options: ['Ein Kunde fordert Ersatz wegen eines eigenen finanziellen Nachteils', 'Kosten für die Wiederherstellung der eigenen Systeme', 'Ein Wettbewerber ändert seine Preise', 'Eine neue Marketingkampagne wird geplant'], correctIndex: 1, explanation: 'Wiederherstellung, Forensik und Betriebsunterbrechung können typische Eigenschäden des betroffenen Unternehmens sein.' },
  { id: 'cyber-q2', question: 'Was ist ein sinnvoller erster Grundsatz bei einem Cybervorfall?', options: ['Den Vorfall möglichst lange geheim halten', 'Betroffene Systeme sichern, den Vorfall dokumentieren und eskalieren', 'Alle Systeme ohne Prüfung sofort löschen', 'Erst nach Abschluss aller Reparaturen informieren'], correctIndex: 1, explanation: 'Ein strukturierter Incident-Response-Prozess beginnt mit Eindämmung, Dokumentation und der Einbindung der zuständigen Stellen.' },
  { id: 'cyber-q3', question: 'Welche Maßnahme ist Prävention und nicht erst Schadenregulierung?', options: ['Regelmäßige Backups und Mehrfaktor-Authentifizierung', 'Eine nachträgliche Rechnungskorrektur', 'Die Auszahlung einer Entschädigung', 'Die Bewertung eines bereits eingetretenen Schadens'], correctIndex: 0, explanation: 'Backups und Mehrfaktor-Authentifizierung senken das Risiko und helfen, Schäden zu begrenzen.' },
  { id: 'cyber-q4', question: 'Was kennzeichnet einen möglichen Drittschaden?', options: ['Kosten für eine interne IT-Analyse', 'Ein Ausfall der eigenen Produktion', 'Ein Anspruch eines Geschäftspartners wegen eines erlittenen Nachteils', 'Die Planung einer Mitarbeiterschulung'], correctIndex: 2, explanation: 'Drittschäden beziehen sich auf mögliche Nachteile und Ansprüche anderer Betroffener, etwa Kunden oder Geschäftspartner.' },
];
