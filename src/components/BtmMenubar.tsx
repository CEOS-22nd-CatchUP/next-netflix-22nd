'use client';

import { useState } from 'react';
import { BTM_MENU_ITEMS } from '@/constants/menuItems';

const BtmMenubar = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-gray-3 text-nav3-sm absolute bottom-0 flex w-[375px] items-center justify-center gap-[7px] py-3">
      {BTM_MENU_ITEMS.map((item, index) => {
        const Icon = item.icon;
        const isActive = index === active;

        return (
          <div key={item.label} className="h-10 w-[63.8px] items-center" onClick={() => setActive(index)}>
            <div className={`flex flex-col items-center ${item.adjustTop ? '-mt-px' : ''}`}>
              <div className="cursor-pointer">
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
