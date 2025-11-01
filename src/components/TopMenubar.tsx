import Logo from '@/svgs/logo/smallLogo.svg';
import Image from 'next/image';

const TopMenubar = () => {
  return (
    <div className="mt-4 flex h-[57px] items-center">
      <div className="mr-5 -ml-5 cursor-pointer">
        <Image src={Logo} alt="netflix" />
      </div>
      <div className="text-nav1-sm flex justify-center gap-6 text-white">
        <div className="cursor-pointer">TV Shows</div>
        <div className="cursor-pointer">Movies</div>
        <div className="cursor-pointer">My List</div>
      </div>
    </div>
  );
};

export default TopMenubar;
