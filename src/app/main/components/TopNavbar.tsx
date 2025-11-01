'use client';

import { useEffect, useState } from 'react';
import Logo from '@/svgs/logo/smallLogo.svg';
import Image from 'next/image';

const TopNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 395) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div
      className={`mt-4 flex h-[57px] w-full items-center transition-colors duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'}`}
    >
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

export default TopNavbar;
