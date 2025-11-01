'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { BTM_MENU_ITEMS } from '@/constants/menuItems';
import { useMenuStore } from '@/store/useMenuStore';

const BtmMenubar = () => {
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
          <div key={item.label} className="flex h-10 gap-5" onClick={() => handleClick(index, item.path)}>
            <div
              className={`flex flex-col items-center ${item.adjustTextTop ? '-mt-[1.5px]' : ''} ${item.adjustPx ? '-mx-2' : ''}`}
            >
              <div className={`cursor-pointer ${item.adjustIconTop ? '-mt-px' : ''}`}>
                <Icon color={isActive ? '#ffffff' : '#8C8787'} />
              </div>
              <p className={`${item.mtClass} ${isActive ? 'text-white' : 'text-gray-1'} cursor-pointer`}>
                {item.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BtmMenubar;
