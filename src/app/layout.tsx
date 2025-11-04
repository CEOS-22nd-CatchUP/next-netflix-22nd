import type { Metadata } from 'next';
import '@/style/globals.css';
import BtmNavbarWrapper from '@/components/BtmNavbarWrapper';

export const metadata: Metadata = {
  title: 'Netflix',
  description: 'Netflix clone-coding',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <BtmNavbarWrapper />
      </body>
    </html>
  );
}
