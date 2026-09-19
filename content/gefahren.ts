export type PerilLesson = {
  id: string;
  title: string;
  duration: string;
  summary: string;
  learningGoals: string[];
  sections: { heading: string; body: string; bullets?: string[] }[];
  keyTakeaway: string;
};

export type PerilQuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const perilLessons: PerilLesson[] = [
  {
    id: 'deckungslogik',
    title: 'Deckungslogik sicher anwenden',
    duration: '8 Min.',
    summary: 'Du lernst, wie Versicherungsschutz aus Gefahr, Sache, Interesse, Ort und Vertrag entsteht.',
    learningGoals: ['Die Bausteine einer Deckungsprüfung benennen', 'Benannte Gefahren und All-Risk-Deckungen unterscheiden', 'Vertragliche Ausschlüsse richtig einordnen'],
    sections: [
      { heading: 'Versicherungsschutz ist immer konkret', body: 'Ob ein Schaden versichert ist, ergibt sich nie allein aus dem Namen einer Sparte. Entscheidend ist das Zusammenspiel aus versicherter Sache oder versichertem Interesse, versicherter Gefahr, Versicherungsort, Versicherungssumme, Ausschlüssen und vereinbarten Klauseln.' },
      { heading: 'Benannte Gefahr oder All Risk?', body: 'Bei einer Benannte-Gefahren-Deckung ist die Schadenursache nur versichert, wenn sie ausdrücklich vereinbart wurde. Bei einer All-Risk-Deckung ist der Ausgangspunkt umgekehrt: Versichert ist grundsätzlich, was nicht ausdrücklich ausgeschlossen ist. Auch eine All-Risk-Deckung ist daher keine lückenlose Garantie gegen jeden Schaden.' },
      { heading: 'Die Prüfungsreihenfolge', body: 'Eine strukturierte Prüfung verhindert vorschnelle Ergebnisse.', bullets: ['Was wurde beschädigt und welches Interesse besteht daran?', 'Ist der Schadenort vom Vertrag erfasst?', 'Welche Ursache beziehungsweise Gefahr hat den Schaden ausgelöst?', 'Ist diese Gefahr versichert oder über eine Klausel eingeschlossen?', 'Greift ein Ausschluss, eine Begrenzung oder ein Selbstbehalt?', 'Welche Kosten sind zusätzlich versichert?'] },
    ],
    keyTakeaway: 'Nicht die Produktbezeichnung entscheidet, sondern die konkrete Deckungsprüfung aus Sache, Gefahr, Ort, Ausschluss und Klausel.',
  },
  {
    id: 'gefahren',
    title: 'Standardgefahren und Zusatzgefahren',
    duration: '10 Min.',
    summary: 'Du unterscheidest typische Grundgefahren von optionalen Erweiterungen in der Sachversicherung.',
    learningGoals: ['Typische Sachgefahren benennen', 'Elementargefahren als Zusatzdeckung einordnen', 'Spartenspezifische Begriffe wie FLEXA verstehen'],
    sections: [
      { heading: 'Typische Grundgefahren', body: 'In privaten sowie gewerblichen Sachversicherungen bilden häufig Feuer, Leitungswasser, Sturm/Hagel und Einbruchdiebstahl beziehungsweise Vandalismus nach Einbruch den Kern der Deckung. Der genaue Umfang variiert jedoch je nach Vertrag und Sparte.' },
      { heading: 'Feuer und FLEXA', body: 'Im industriellen Kontext wird häufig von FLEXA gesprochen: Fire, Lightning, Explosion, Aircraft. Ein Brand ist grundsätzlich ein Feuer, das ohne bestimmungsgemäßen Herd entstanden ist oder diesen verlassen hat und sich aus eigener Kraft auszubreiten vermag. Einzelheiten und Ausschlüsse stehen im jeweiligen Bedingungswerk.' },
      { heading: 'Elementargefahren sind oft nicht automatisch enthalten', body: 'Zusätzliche Naturgefahren wie Überschwemmung, Rückstau, Erdbeben, Erdsenkung, Erdrutsch, Schneedruck, Lawinen oder Vulkanausbruch müssen häufig ausdrücklich eingeschlossen werden. Grundwasser und Sturmflut sind typische Beispiele, die nicht mit einer allgemeinen Elementardeckung gleichgesetzt werden dürfen.' },
      { heading: 'Weitere Erweiterungen', body: 'Je nach Sparte und Risiko können beispielsweise Fahrzeuganprall, Rauch, Überschalldruckwellen, Wasserlöschanlagen-Leckage, böswillige Beschädigung, Streik oder Aussperrung vereinbart werden. Die konkrete Klausel und ihre Voraussetzungen bleiben maßgeblich.' },
    ],
    keyTakeaway: 'Zusatzgefahren sind keine Selbstverständlichkeit: Prüfe immer, ob sie ausdrücklich im Vertrag oder über Klauseln eingeschlossen sind.',
  },
  {
    id: 'sachen-interessen-kosten',
    title: 'Sachen, Interessen und Kosten abgrenzen',
    duration: '10 Min.',
    summary: 'Du erkennst, was versichert sein kann und warum Sache, Interesse, Eigentum und Kosten getrennt geprüft werden.',
    learningGoals: ['Gebäude, Inhalt und Zubehör unterscheiden', 'Versicherte Interessen erklären', 'Sachschaden und Kostenpositionen trennen'],
    sections: [
      { heading: 'Sache und Interesse', body: 'In der Schadenversicherung wird rechtlich nicht nur eine Sache betrachtet, sondern das Interesse an ihrer Unversehrtheit. Dieses Interesse kann etwa einem Eigentümer, Mieter, Pächter, Nutzer oder Sicherungsnehmer zustehen. Deshalb sind Eigentumsverhältnisse und die Deklaration im Vertrag wichtig.' },
      { heading: 'Typische Abgrenzungen', body: 'In der Gebäudeversicherung geht es regelmäßig um das Gebäude und fest damit verbundene Bestandteile. Die Inhaltsversicherung betrifft typischerweise bewegliche Betriebseinrichtung und Vorräte. Welche Gegenstände dazugehören, richtet sich nach Bedingungen, Deklaration und dem versicherten Interesse.' },
      { heading: 'Nicht automatisch versicherte Gegenstände', body: 'Bestimmte Gruppen sind häufig ausgeschlossen oder nur nach besonderer Vereinbarung versicherbar.', bullets: ['Bargeld, Wertsachen, Urkunden, Edelmetalle und vergleichbare Werte', 'Zulassungspflichtige Kraftfahrzeuge und Anhänger', 'Daten, Datenträger und Programme, soweit die Bedingungen sie nicht besonders erfassen', 'Prototypen, Ausstellungsstücke, Automaten oder andere besondere Gegenstände', 'Sachen außerhalb des vereinbarten Versicherungsortes'] },
      { heading: 'Kosten folgen dem Sachschaden', body: 'Neben der Entschädigung für die beschädigte Sache können Schadenabwendungs-, Schadenminderungs- oder Schadenfeststellungskosten relevant sein. Weitere Kosten – zum Beispiel Aufräumungs-, Abbruch-, Bewegungs- oder Schutzkosten – sind oft nur bei entsprechender Vereinbarung und innerhalb ihrer Grenzen versichert. Regelmäßig setzt der Kostenschutz einen versicherten Substanzschaden voraus.' },
    ],
    keyTakeaway: 'Prüfe immer getrennt: Was ist beschädigt, welches Interesse ist betroffen und welche Kosten sind zusätzlich gedeckt?',
  },
  {
    id: 'ausschluesse-fallpruefung',
    title: 'Ausschlüsse und Fallprüfung',
    duration: '9 Min.',
    summary: 'Du erkennst typische Ausschlüsse und begründest eine Deckungsentscheidung nachvollziehbar.',
    learningGoals: ['Grundlegende Ausschlüsse nennen', 'Gefahr und Schadenursache sauber unterscheiden', 'Einen Sachschaden strukturiert bewerten'],
    sections: [
      { heading: 'Grundlegende Ausschlüsse', body: 'Viele Sachbedingungen enthalten unabhängig von der vereinbarten Gefahr grundlegende Ausschlüsse, zum Beispiel für Krieg, innere Unruhen und Kernenergie. Daneben gibt es zahlreich spartenspezifische Ausschlüsse und Einschränkungen.' },
      { heading: 'Typische Abgrenzungsfälle', body: 'Bei Leitungswasser ist nicht jedes Wasserereignis automatisch Leitungswasser. Beispielsweise können Regenwasser aus Fallrohren, Grundwasser oder Überschwemmung gesondert behandelt werden. Bei Sturm kann es auf die vertragliche Definition, die Ursache des Eindringens und den Zustand des Gebäudes ankommen.' },
      { heading: 'Verhalten und Prävention', body: 'Sicherheitsvorschriften, Wartung und Schadenverhütung sind Teil einer professionellen Risikobetrachtung. Sie können vertraglich als Obliegenheiten ausgestaltet sein. Im Schadenfall ist außerdem die Schadenminderung wichtig. Rechtsfolgen ergeben sich nicht automatisch, sondern aus Vertrag, Gesetz und Einzelfall.' },
      { heading: 'Prüfung in einem Satz begründen', body: 'Eine gute Lösung nennt nicht nur „versichert“ oder „nicht versichert“. Sie erklärt: Welche Sache oder welches Interesse betroffen ist, welche Gefahr verwirklicht wurde, welche Bedingung oder Klausel gilt und ob ein Ausschluss oder eine Begrenzung eingreift.' },
    ],
    keyTakeaway: 'Ausschlüsse sind kein Randthema: Sie gehören nach der positiven Deckungsprüfung immer sichtbar in die Falllösung.',
  },
];

export const perilCaseStudy = {
  title: 'Fallbeispiel: Wasser im Lager',
  situation: 'Nach starkem Regen dringt Wasser in das Lager eines Handelsbetriebs ein. Vorräte werden beschädigt. Der Betrieb besitzt eine gewerbliche Sachversicherung mit Leitungswasser- und Sturm/Hagel-Baustein. Eine Elementargefahrendeckung ist in den Unterlagen nicht genannt.',
  questions: ['Welche Schadenursache muss zuerst präzise geklärt werden?', 'Warum reicht die Bezeichnung „Wasserschaden“ nicht für die Deckungsentscheidung?', 'Welche Vertragsbestandteile prüfst du nach der Ursache?'],
  solution: 'Zuerst muss geklärt werden, ob Wasser etwa bestimmungswidrig aus einer versicherten Leitung ausgetreten ist, durch Sturm in das Gebäude gelangte oder ob eine Überschwemmung beziehungsweise ein Rückstau vorliegt. „Wasserschaden“ beschreibt nur das Ergebnis, nicht die versicherte Gefahr. Danach werden Versicherungsort, betroffene Sachen beziehungsweise Interesse, eingeschlossene Gefahren oder Elementarklauseln, Ausschlüsse, Entschädigungsgrenzen und mögliche Kosten geprüft.',
};

export const perilQuiz: PerilQuizQuestion[] = [
  { id: 'peril-q1', question: 'Was ist bei einer Benannte-Gefahren-Deckung grundsätzlich erforderlich?', options: ['Die Schadenursache muss als Gefahr ausdrücklich versichert sein', 'Jeder Schaden ist ohne Ausnahme versichert', 'Nur die Höhe der Versicherungssumme ist relevant', 'Der Versicherungsort spielt keine Rolle'], correctIndex: 0, explanation: 'Bei einer Benannte-Gefahren-Deckung muss die Schadenursache von einer konkret vereinbarten Gefahr erfasst sein.' },
  { id: 'peril-q2', question: 'Welche Aussage zu einer All-Risk-Deckung ist richtig?', options: ['Sie schließt jeden denkbaren Schaden ein', 'Sie deckt grundsätzlich nicht ausgeschlossene Risiken, aber Ausschlüsse und Grenzen bleiben relevant', 'Sie gilt nur für Feuer', 'Sie ersetzt die Prüfung der Bedingungen'], correctIndex: 1, explanation: 'All Risk bedeutet nicht grenzenlos. Ausschlüsse, Sublimits, Selbstbehalte und weitere Bedingungen bleiben entscheidend.' },
  { id: 'peril-q3', question: 'Welche Gefahr ist häufig nur durch eine zusätzliche Elementargefahrendeckung versichert?', options: ['Leitungswasser aus einem geborstenen Heizungsrohr', 'Überschwemmung durch Starkregen', 'Einbruchdiebstahl', 'Blitzschlag'], correctIndex: 1, explanation: 'Überschwemmung durch Starkregen ist typischerweise eine Elementargefahr und muss häufig ausdrücklich eingeschlossen werden.' },
  { id: 'peril-q4', question: 'Was wird in der Schadenversicherung neben der Sache rechtlich betrachtet?', options: ['Nur der Kaufpreis', 'Das versicherte Interesse', 'Nur die Produktionsmenge', 'Ausschließlich der Neuwert'], correctIndex: 1, explanation: 'Versichert ist das wirtschaftliche Interesse an der Unversehrtheit der Sache, etwa als Eigentümer-, Mieter- oder Nutzerinteresse.' },
  { id: 'peril-q5', question: 'Welche Aussage zu Kostenpositionen ist richtig?', options: ['Alle Kosten sind immer unbegrenzt versichert', 'Kosten sind unabhängig von einem Sachschaden versichert', 'Zusätzliche Kosten hängen oft von Vertrag, Grenzen und einem versicherten Substanzschaden ab', 'Kosten haben nie etwas mit Versicherungsbedingungen zu tun'], correctIndex: 2, explanation: 'Kostenpositionen wie Aufräumungs- oder Schutzkosten sind vertraglich geregelt und setzen häufig einen versicherten Sachschaden voraus.' },
];
