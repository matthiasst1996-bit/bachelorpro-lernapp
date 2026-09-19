import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type SectionCardProps = {
  title: string;
  description: string;
  progress: number;
  color: string;
  href: string;
};

export function SectionCard({ title, description, progress, color, href }: SectionCardProps) {
  return (
    <Link href={href} className="card group block p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="mb-5 flex items-start justify-between">
        <span
          className="grid h-11 w-11 place-items-center rounded-2xl text-sm font-bold"
          style={{ backgroundColor: `${color}18`, color }}
        >
          {progress}%
        </span>
        <ArrowRight size={19} className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-brand" />
      </div>
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full" style={{ backgroundColor: color, width: `${progress}%` }} />
      </div>
    </Link>
  );
}
