# BachelorPro Lernbegleiter

Mobile-first Lernplattform für den Bachelor Professional in Versicherungen und Finanzanlagen.

## MVP-Stack

- Next.js 15 mit App Router und TypeScript
- Tailwind CSS
- Supabase für Authentifizierung, PostgreSQL, RLS und Lernfortschritt
- Vercel für Git-basiertes Deployment
- Google Drive als geschützte Quellbasis der Lernunterlagen

## Lokaler Start

1. `cp .env.example .env.local`
2. Supabase-URL und Publishable Key eintragen
3. `npm install`
4. `npm run dev`

## Sicherheitsprinzip

Keine Zugangsdaten, Service-Role-Keys oder kopierten Originalunterlagen committen. Lerninhalte werden erst nach Quellenprüfung und fachlicher Freigabe veröffentlicht.

## Nächste Schritte

1. Studienabschnitte und Fachbereiche in Supabase importieren.
2. Google-Drive-Quellen als Dokumentregister hinterlegen.
3. Authentifizierung und Lernfortschritt mit echten Daten verbinden.
4. Die erste inhaltlich geprüfte Lerneinheit veröffentlichen.
5. GitHub mit Vercel verbinden und ein Preview-Deployment erstellen.
