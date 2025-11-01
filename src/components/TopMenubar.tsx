import Logo from '@/svgs/logo/smallLogo.svg';
import Image from 'next/image';

const TopMenubar = () => {
  return (
    <div className="mt-4 flex h-[57px] items-center">
      <div className="mr-5 -ml-6">
        <Image src={Logo} alt="netflix" />
      </div>
      <div className="text-nav1-sm flex justify-center gap-8 text-white">
        <div className="">TV Shows</div>
        <div className="">Movies</div>
        <div className="">My List</div>
      </div>
    </div>
  );
};

export default TopMenubar;
