'use client';

import AddBtn from '@/components/main/icons/midNavbar/AddBtn';
import PlayBtn from '@/components/main/icons/midNavbar/PlayBtn';
import InfoBtn from '@/components/main/icons/midNavbar/InfoBtn';

const MidNavbar = () => {
  return (
    <div className="mt-2 flex h-[45px] w-[259px] items-center justify-between">
      <div className="text-nav2-sm flex cursor-pointer flex-col items-center justify-center text-white">
        <AddBtn />
        <p>Add</p>
      </div>
      <div className="bg-gray-0 text-title1-sb flex h-[45px] w-[110px] cursor-pointer items-center justify-between rounded-[5px] text-black hover:bg-white">
        <PlayBtn className="ml-[19px]" />
        <p className="mr-[19px]">Play</p>
      </div>
      <div className="text-nav2-sm flex cursor-pointer flex-col items-center justify-center text-white">
        <InfoBtn />
        <p>Info</p>
      </div>
    </div>
  );
};

export default MidNavbar;
