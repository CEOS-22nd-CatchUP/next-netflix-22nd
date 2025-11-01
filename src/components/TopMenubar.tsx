import Logo from '@/svgs/logo/smallLogo.svg';
import Image from 'next/image';

const TopMenubar = () => {
  return (
    <div className="mt-4 flex h-[57px] w-[338px] items-center gap-6 text-white">
      <div className="">
        <Image src={Logo} alt="netflix" />
      </div>
      <div className="text-nav1-sm flex w-[280px] justify-between">
        <div className="">TV Shows</div>
        <div className="">Movies</div>
        <div className="">My List</div>
      </div>
    </div>
  );
};

export default TopMenubar;
