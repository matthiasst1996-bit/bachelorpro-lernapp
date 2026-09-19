export type LegalLesson = {
  id: string;
  title: string;
  duration: string;
  summary: string;
  learningGoals: string[];
  sections: { heading: string; body: string; bullets?: string[] }[];
  keyTakeaway: string;
};

export type LegalQuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const legalLessons: LegalLesson[] = [
  {
    id: 'rechtsquellen',
    title: 'Rechtsquellen im Versicherungswesen',
    duration: '8 Min.',
    summary: 'Du ordnest das Privatversicherungsrecht ein und erkennst die wichtigsten Rechtsquellen.',
    learningGoals: ['Öffentliches Recht, Strafrecht und Privatrecht unterscheiden', 'Wichtige Rechtsquellen des Privatversicherungsrechts benennen', 'Die Rolle von VVG, BGB, PflVG und Versicherungsbedingungen erklären'],
    sections: [
      { heading: 'Privatversicherungsrecht einordnen', body: 'Das Privatversicherungsrecht regelt vor allem das Verhältnis zwischen Versicherungsunternehmen und Versicherungsnehmer. Es gehört zum Privatrecht: Die Vertragsparteien stehen sich grundsätzlich gleichgeordnet gegenüber. Davon zu unterscheiden sind etwa öffentliches Recht mit einem Über- und Unterordnungsverhältnis zum Staat sowie Strafrecht.' },
      { heading: 'Wichtige Rechtsquellen', body: 'Der Versicherungsvertrag steht nicht für sich allein. Seine Auslegung und Durchführung beruhen auf mehreren Ebenen.', bullets: ['Grundgesetz und Europarecht als übergeordneter Rahmen', 'Versicherungsvertragsgesetz (VVG) als zentrale Grundlage des Privatversicherungsrechts', 'Bürgerliches Gesetzbuch (BGB), insbesondere für Vertragsschluss und AGB-Recht', 'PflVG und KfzPflVV für die Pflichtversicherung im Kraftfahrtbereich', 'Individuelle Vereinbarungen, Versicherungsschein und Allgemeine Versicherungsbedingungen (AVB)'] },
      { heading: 'Warum ist die Reihenfolge wichtig?', body: 'Einzelfallfragen lassen sich nicht nur mit einem Blick in die Police lösen. Zuerst ist zu prüfen, welche gesetzliche Regelung gilt. Danach folgen die individuelle Vereinbarung und die Bedingungen. Individualabreden haben gegenüber Allgemeinen Versicherungsbedingungen grundsätzlich Vorrang.' },
    ],
    keyTakeaway: 'Versicherungsrecht entsteht aus Gesetz, Vertrag und Bedingungen – für die Falllösung musst du diese Ebenen sauber auseinanderhalten.',
  },
  {
    id: 'vertragsschluss',
    title: 'Vertragsschluss, Beratung und Widerruf',
    duration: '10 Min.',
    summary: 'Du verstehst, wie ein Versicherungsvertrag zustande kommt und welche Informations- und Beratungsrechte bestehen.',
    learningGoals: ['Angebot und Annahme beim Vertragsschluss erklären', 'Antrags-, Invitatio- und Policenmodell unterscheiden', 'Beratung, Dokumentation und Widerruf einordnen'],
    sections: [
      { heading: 'Angebot und Annahme', body: 'Ein Vertrag kommt durch zwei übereinstimmende Willenserklärungen zustande: Angebot und Annahme. Im typischen Antragsmodell stellt der Kunde den Antrag; der Versicherer nimmt ihn beispielsweise durch Zusendung des Versicherungsscheins an.' },
      { heading: 'Modelle in der Praxis', body: 'Je nach Vertriebsweg kann die rechtliche Einordnung abweichen.', bullets: ['Antragsmodell: Der Antrag des Kunden ist das Angebot; der Versicherer erklärt die Annahme.', 'Invitatiomodell: Eine Darstellung oder Anfrage ist zunächst nur die Einladung, ein Angebot abzugeben.', 'Policenmodell: Der Versicherungsschein kann vom Antrag abweichen; für die Billigungsklausel gelten besondere Voraussetzungen und Fristen.', 'Stellvertretung: Ein Bevollmächtigter, etwa ein Makler oder Fuhrparkleiter, kann innerhalb seiner Vollmacht Erklärungen abgeben.'] },
      { heading: 'Beratung und Dokumentation', body: 'Versicherer und Vermittler haben im jeweiligen Anwendungsbereich Beratungs- und Dokumentationspflichten. Der Bedarf des Kunden, der erteilte Rat und die Gründe dafür müssen nachvollziehbar werden. Bei Pflichtverletzungen können Schadensersatzansprüche entstehen.' },
      { heading: 'Widerruf', body: 'Versicherungsnehmer können ihre Vertragserklärung unter den gesetzlichen Voraussetzungen widerrufen. Entscheidend sind insbesondere die ordnungsgemäße Belehrung und der Zugang der erforderlichen Vertragsunterlagen. Die konkrete Frist richtet sich nach Vertrag und gesetzlicher Regelung.' },
    ],
    keyTakeaway: 'Vertragsschluss ist mehr als eine Unterschrift: Modell, Vollmacht, Information, Beratung und Fristen können entscheidend sein.',
  },
  {
    id: 'vertrag-avb',
    title: 'Vertragsinhalt und Versicherungsbedingungen',
    duration: '9 Min.',
    summary: 'Du liest einen Versicherungsvertrag strukturiert und erkennst die Rolle von AVB, Klauseln und Deckungsbausteinen.',
    learningGoals: ['Hauptleistungspflichten erklären', 'AVB als AGB einordnen', 'Typischen Aufbau von Bedingungen auf einen Fall anwenden'],
    sections: [
      { heading: 'Die Hauptleistungspflichten', body: 'Der Versicherer übernimmt gegen Prämienzahlung ein bestimmtes Risiko und verspricht eine Leistung für den vereinbarten Versicherungsfall. Der Versicherungsnehmer schuldet im Gegenzug die vereinbarte Prämie. Welche Gefahr getragen wird, bestimmt sich aus Vertrag und Bedingungen.' },
      { heading: 'AVB richtig lesen', body: 'Allgemeine Versicherungsbedingungen sind Allgemeine Geschäftsbedingungen. Sie werden aus Sicht eines durchschnittlichen, verständigen Versicherungsnehmers ausgelegt. Ausgangspunkt sind Wortlaut, erkennbarer Zweck und Sinnzusammenhang. Individuelle Vereinbarungen gehen den AVB vor.' },
      { heading: 'Typischer Bedingungsaufbau', body: 'Viele Bedingungswerke trennen produktspezifische Regelungen von allgemeinen Vertragsbestimmungen.', bullets: ['Abschnitt A: zum Beispiel versicherte Sachen, Gefahren und Schäden, Interessen, Versicherungsort, Versicherungswert, Versicherungssumme und Entschädigung.', 'Abschnitt B: zum Beispiel Anzeige- und Obliegenheitspflichten, Beginn und Ende des Schutzes, Prämie und Versicherungsperiode.', 'Klauseln: ergänzen oder verändern den Grundvertrag und müssen immer im Zusammenhang mit ihrer Bezugsregelung gelesen werden.'] },
    ],
    keyTakeaway: 'Prüfe den Versicherungsschutz nie nur über eine Überschrift: Lies versicherte Gefahr, Ausschlüsse, Begrenzungen und Klauseln zusammen.',
  },
  {
    id: 'obliegenheiten-schaden',
    title: 'Obliegenheiten, Gefahrerhöhung und Schadenfall',
    duration: '11 Min.',
    summary: 'Du strukturierst typische Rechtsfolgen bei Pflichtverletzungen, Gefahrerhöhung und Versicherungsfällen.',
    learningGoals: ['Vorvertragliche und vertragliche Obliegenheiten unterscheiden', 'Gefahrerhöhung und Schadenminderung einordnen', 'Über-, Unter- und Mehrfachversicherung erkennen'],
    sections: [
      { heading: 'Obliegenheiten sind keine Hauptleistungspflichten', body: 'Obliegenheiten sind Verhaltensanforderungen, die insbesondere der Risikoprüfung, Schadenverhütung und Aufklärung dienen. Sie können vor Vertragsschluss, während der Vertragslaufzeit oder nach einem Schaden relevant sein. Welche Rechtsfolge eintritt, hängt vom konkreten Gesetz, Vertrag, Verschuldensgrad und weiteren Voraussetzungen ab.' },
      { heading: 'Typische Prüfungsreihenfolge', body: 'Bei einer möglichen Pflichtverletzung wird nicht vorschnell auf Leistungsfreiheit geschlossen.', bullets: ['Welche Obliegenheit oder gesetzliche Pflicht war vereinbart beziehungsweise einschlägig?', 'Liegt objektiv eine Verletzung vor?', 'Welches Verschulden und welche weiteren gesetzlichen Voraussetzungen liegen vor?', 'Welche Rechtsfolge kommt konkret in Betracht, etwa Kündigung, Rücktritt, Prämienanpassung oder eine Leistungskürzung?', 'Besteht ein Zusammenhang zwischen Verletzung und Schaden, soweit die Regelung dies verlangt?'] },
      { heading: 'Gefahrerhöhung und Schadenminderung', body: 'Eine Gefahrerhöhung kann entstehen, wenn sich Umstände nach Vertragsschluss so verändern, dass der Eintritt eines Versicherungsfalls oder die Schadenhöhe wahrscheinlicher wird. Nach Eintritt eines Schadens müssen Versicherungsnehmer im Rahmen der einschlägigen Regeln zur Abwendung und Minderung des Schadens beitragen.' },
      { heading: 'Versicherungswert und mehrere Verträge', body: 'In der Sachversicherung sind Versicherungswert und Versicherungssumme zentral. Eine Unterversicherung kann die Entschädigung beeinflussen; eine Überversicherung führt nicht zu einem Gewinn aus dem Schaden. Bei mehreren Versicherungen für dasselbe Interesse und dieselbe Gefahr muss außerdem Mehrfachversicherung geprüft werden.' },
    ],
    keyTakeaway: 'Bei Obliegenheiten zählt die genaue Prüfung: Pflicht, Verletzung, Verschulden, Kausalität und Rechtsfolge gehören in diese Reihenfolge.',
  },
];

export const legalCaseStudy = {
  title: 'Fallbeispiel: Die unvollständige Betriebsangabe',
  situation: 'Ein Gewerbekunde beantragt eine Sachversicherung. Im Antrag wird eine wesentliche Änderung im Betriebsablauf nicht angegeben. Monate später tritt ein Schaden ein. Der Versicherer prüft, ob die fehlende Angabe für seine Risikoentscheidung und die Regulierung Bedeutung hat.',
  questions: ['Welche Phase des Versicherungsverhältnisses ist hier zuerst zu prüfen?', 'Warum darf nicht sofort von einer Leistungsfreiheit ausgegangen werden?', 'Welche Punkte gehören in eine strukturierte rechtliche Prüfung?'],
  solution: 'Zuerst ist zu prüfen, ob eine vorvertragliche Anzeigeobliegenheit oder eine andere einschlägige Pflicht betroffen ist. Danach müssen die konkreten Voraussetzungen der jeweiligen Regelung geprüft werden; insbesondere Art der Pflicht, Verletzung, Verschulden, Fristen, mögliche Kausalität und die daraus folgende Rechtsfolge. Die Folgen ergeben sich nicht pauschal, sondern aus Gesetz, Vertrag und Einzelfall.',
};

export const legalQuiz: LegalQuizQuestion[] = [
  { id: 'legal-q1', question: 'Welche Rechtsquelle ist die zentrale gesetzliche Grundlage des Privatversicherungsrechts?', options: ['VVG', 'StVG', 'SGB', 'StPO'], correctIndex: 0, explanation: 'Das Versicherungsvertragsgesetz (VVG) enthält die zentralen Vorschriften für private Versicherungsverträge.' },
  { id: 'legal-q2', question: 'Was beschreibt das typische Antragsmodell?', options: ['Der Versicherer stellt den Antrag und der Kunde nimmt ihn an', 'Der Kunde stellt den Antrag und der Versicherer erklärt die Annahme', 'Der Vertrag entsteht immer automatisch durch Werbung', 'Der Vertrag braucht niemals eine Annahmeerklärung'], correctIndex: 1, explanation: 'Im Antragsmodell ist der Antrag des Kunden das Angebot; der Versicherer kann dieses annehmen.' },
  { id: 'legal-q3', question: 'Wie sind Allgemeine Versicherungsbedingungen rechtlich einzuordnen?', options: ['Als Strafvorschriften', 'Als Allgemeine Geschäftsbedingungen', 'Als individuelle Gesetze', 'Als Verwaltungsvorschriften'], correctIndex: 1, explanation: 'AVB sind Allgemeine Geschäftsbedingungen und unterliegen daher unter anderem den Regeln des AGB-Rechts.' },
  { id: 'legal-q4', question: 'Was hat bei einem Widerspruch Vorrang?', options: ['Eine Individualabrede vor den AVB', 'AVB vor jeder Individualabrede', 'Eine Werbeanzeige vor dem Versicherungsschein', 'Eine interne Arbeitsanweisung vor dem Vertrag'], correctIndex: 0, explanation: 'Eine individuelle Vereinbarung zwischen den Vertragsparteien hat grundsätzlich Vorrang vor Allgemeinen Versicherungsbedingungen.' },
  { id: 'legal-q5', question: 'Welche Reihenfolge ist bei einer möglichen Obliegenheitsverletzung sinnvoll?', options: ['Sofort Leistungsfreiheit annehmen', 'Erst Schaden auszahlen, dann Vertrag lesen', 'Pflicht, Verletzung, Voraussetzungen und Rechtsfolge prüfen', 'Nur die Höhe der Prämie vergleichen'], correctIndex: 2, explanation: 'Die Rechtsfolgen hängen von der konkreten Pflicht, der Verletzung, dem Verschulden sowie gesetzlichen und vertraglichen Voraussetzungen ab.' },
];
