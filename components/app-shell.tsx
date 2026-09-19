import Link from 'next/link';
import {
  BookOpen,
  BrainCircuit,
  ChartNoAxesCombined,
  ClipboardCheck,
  Compass,
  GraduationCap,
  Home,
  MessageCircleQuestion,
  Settings
} from 'lucide-react';

const navigationItems = [
  { label: 'Start', icon: Home, href: '/' },
  { label: 'Fahrplan', icon: Compass, href: '/fahrplan' },
  { label: 'Lernen', icon: BookOpen, href: '/lernen' },
  { label: 'Üben', icon: BrainCircuit, href: '/ueben' },
  { label: 'Prüfung', icon: ClipboardCheck, href: '/pruefung' },
  { label: 'Lerncoach', icon: MessageCircleQuestion, href: '/lerncoach' },
  { label: 'Fortschritt', icon: ChartNoAxesCombined, href: '/fortschritt' },
  { label: 'Einstellungen', icon: Settings, href: '/einstellungen' }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas">
      <aside className="fixed inset-y-0 hidden w-64 border-r border-slate-200 bg-white px-5 py-6 lg:block">
        <Link href="/" className="mb-10 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand text-white">
            <GraduationCap size={24} />
          </span>
          <span>
            <strong className="block text-base text-ink">BachelorPro</strong>
            <span className="text-sm text-slate-500">Lernbegleiter</span>
          </span>
        </Link>
        <nav className="space-y-1">
          {navigationItems.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-brand"
            >
              <Icon size={18} />
              {label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-6 left-5 right-5 rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-ink">Dein Ziel heute</p>
          <p className="mt-1 text-sm text-slate-500">15 Minuten konzentriert lernen.</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-0 rounded-full bg-mint" />
          </div>
        </div>
      </aside>

      <main className="mx-auto max-w-7xl px-4 py-6 pb-24 sm:px-6 lg:ml-64 lg:px-10 lg:py-10">
        {children}
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-10 flex justify-around border-t border-slate-200 bg-white px-2 py-2 lg:hidden">
        {navigationItems.slice(0, 5).map(({ href, icon: Icon, label }) => (
          <Link key={href} href={href} className="flex flex-col items-center gap-1 px-2 py-1 text-[10px] font-medium text-slate-600">
            <Icon size={19} />
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
