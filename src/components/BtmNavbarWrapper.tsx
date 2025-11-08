'use client';

import { usePathname } from 'next/navigation';
import BtmNavbar from '@/components/BtmNavbar';

const BtmNavbarWrapper = () => {
  const pathname = usePathname();
  const showBtmNavbar = ['/main', '/search', '/comingSoon', '/downloads', '/more', '/movie'].some((p) =>
    pathname.startsWith(p),
  );

  if (!showBtmNavbar) return null;

  return (
    <div className="flex justify-center">
      <BtmNavbar />
    </div>
  );
};

export default BtmNavbarWrapper;
