import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BachelorPro Lernbegleiter',
  description: 'Lernplattform für den Bachelor Professional in Versicherungen und Finanzanlagen.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
