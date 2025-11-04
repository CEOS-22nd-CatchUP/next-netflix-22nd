'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { BTM_MENU_ITEMS } from '@/constants/btmNavItems';
import { useMenuStore } from '@/store/useMenuStore';

const BtmNavbar = () => {
  const active = useMenuStore((s) => s.active);
  const setActive = useMenuStore((s) => s.setActive);
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (index: number, path?: string) => {
    setActive(index);
    if (path) {
      router.push(path);
    }
  };

  useEffect(() => {
    const idx = BTM_MENU_ITEMS.findIndex((item) => item.path === pathname);
    if (idx >= 0) setActive(idx);
  }, [pathname, setActive]);

  return (
    <div className="bg-gray-3 text-nav3-sm absolute bottom-0 flex w-[375px] items-center justify-between gap-[7px] px-7 py-3">
      {BTM_MENU_ITEMS.map((item, index) => {
        const Icon = item.icon;
        const isActive = index === active;

        return (
          <button key={item.label} className="flex h-10 gap-5" onClick={() => handleClick(index, item.path)}>
            <div
              className={clsx('flex flex-col items-center', {
                '-mt-[1.5px]': item.adjustTextTop,
                '-mx-2': item.adjustPx,
              })}
            >
              <div className={clsx('cursor-pointer', { '-mt-px': item.adjustIconTop })}>
                <Icon color={isActive ? '#ffffff' : '#8C8787'} />
              </div>
              <p className={clsx('cursor-pointer', item.mtClass, { 'text-white': isActive, 'text-gray-1': !isActive })}>
                {item.label}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default BtmNavbar;
