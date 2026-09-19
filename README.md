# BachelorPro Lernapp

Interaktive Lernplattform für das Bachelorstudium im Versicherungswesen. Die App bietet einen strukturierten Fahrplan, interaktive Lernmodule mit Kapiteln, Fallbeispielen und Quizzen sowie eine automatische Fortschrittsspeicherung im Browser.

## Features

- **Fahrplan**: Zentrale Übersicht aller Themen mit Fortschrittsanzeige
- **Lernmodule**: Interaktive Seiten mit Kapiteln, Lernzielen, Fallbeispielen und Quizzen
- **Fortschrittsspeicherung**: Automatische Speicherung im Browser (localStorage)
- **Responsive Design**: Optimiert für Desktop und Mobile mit Tailwind CSS
- **Next.js App Router**: Modernes Routing mit Server- und Client-Komponenten

## Projektstruktur

```
bachelorpro-lernapp/
├── app/
│   ├── fahrplan/          # Fahrplan-Seite mit Themen-Ü¨bersicht
│   ├── lernen/            # Lernmodule (kraftfahrt/, cyber/, ...)
│   ├── onboarding/        # Onboarding-Seite
│   ├── globals.css        # Globale Styles (Tailwind)
│   ├── layout.tsx         # Root-Layout
│   └── page.tsx           # Startseite
├── content/               # Lerninhalte als TypeScript-Dateien
│   ├── kraftfahrt.ts      # Kraftfahrt-Lernmodul
│   └── cyber.ts           # Cyber-Lernmodul
├── public/                # Statische Assets
├── tailwind.config.ts     # Tailwind-Konfiguration
├── tsconfig.json          # TypeScript-Konfiguration
└── README.md              # Diese Datei
```

## Routing

- `/` – Startseite mit Landing-Page
- `/onboarding` – Onboarding-Seite
- `/fahrplan` – Fahrplan mit allen Themen und Fortschritt
- `/lernen/kraftfahrt` – Kraftfahrt-Lernmodul
- `/lernen/cyber` – Cyber-Lernmodul

## Lernmodul-Struktur

Jedes Lernmodul besteht aus:

1. **Content-Datei** (`content/<modul>.ts`)
   - Definiert Typen für Lektionen und Quizfragen
   - Exportiert Arrays mit Lektionen (`<modul>Lessons`)
   - Exportiert ein Fallbeispiel (`<modul>CaseStudy`)
   - Exportiert ein Quiz (`<modul>Quiz`)

2. **Lernseite** (`app/lernen/<modul>/page.tsx`)
   - Client-Komponente (`'use client'`)
   - Liest Content aus der zugehö¨¨¨rigen `content/<modul>.ts`
   - Zeigt Kapitel-Navigation, Lerninhalte, Fallbeispiel und Quiz
   - Speichert abgeschlossene Lektionen im localStorage

### Beispiel: Neues Modul "Haftpflicht" anlegen

**Schritt 1: Content-Datei erstellen**

`content/haftpflicht.ts`:
```ts
export type HaftpflichtLesson = { /* ... */ };
export const haftpflichtLessons: HaftpflichtLesson[] = [ /* ... */ ];
export const haftpflichtCaseStudy = { /* ... */ };
export const haftpflichtQuiz = [ /* ... */ ];
```

**Schritt 2: Lernseite erstellen**

`app/lernen/haftpflicht/page.tsx`:
```tsx
'use client';
import { haftpflichtLessons, haftpflichtCaseStudy, haftpflichtQuiz } from '../../../content/haftpflicht';
// ... Komponente wie bei cyber/kraftfahrt
```

**Schritt 3: Fahrplan aktualisieren**

In `app/fahrplan/page.tsx` beim entsprechenden Thema `href: '/lernen/haftpflicht'` hinzufügen.

## Fortschrittsspeicherung

Der Fahrplan und die Lernmodule speichern den Fortschritt im `localStorage`:

- **Fahrplan**: `bachelorpro-fahrplan-progress` (JSON mit Themen-Status)
- **Cyber-Modul**: `bachelorpro-cyber-completed-lessons` (Array mit Lektions-IDs)
- **Kraftfahrt-Modul**: Analog (je nach Implementierung)

## Styling

Die App verwendet **Tailwind CSS** für das Styling. Wichtige Hinweise:

- Farbschema: Cyan/Blue/Slate als Primä¨¨rfarben
- Komponenten: Rounded-2xl/3xl, shadow-lg, Gradient-Backgrounds
- Typografie: font-black für Überschriften, font-bold für Buttons
- Responsive: Mobile-first mit `md:`-Breakpoints

Anpassungen in `app/globals.css` oder `tailwind.config.ts` möglich.

## Deployment

Die App basiert auf **Next.js 14+** mit App Router und kann einfach部署 werden:

### Vercel (empfohlen)

1. Repository auf GitHub pushen
2. In Vercel importieren
3. Build-Einstellungen automatisch erkennen lassen
4. Deploy

### Lokale Entwicklung

```bash
npm install
npm run dev
```

Ö¨ffne `http://localhost:3000` im Browser.

## Technologie-Stack

- **Next.js 14+** (App Router)
- **React 18+**
- **TypeScript**
- **Tailwind CSS**
- **localStorage** für Fortschritt

## Lizenz

Privates Lernprojekt – alle Rechte vorbehalten.
