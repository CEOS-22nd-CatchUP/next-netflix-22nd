import Logo from '@/svgs/logo/smallLogo.svg';
import Image from 'next/image';

const TopMenubar = () => {
    return(
        <div className=" flex items-center mt-4 w-[338px] h-[57px] gap-6 text-white">
            <div className="">
                <Image src={Logo} alt='netflix'/>
            </div>
            <div className="flex justify-between w-[280px] text-nav1-sm">
                <div className="">TV Shows</div>
                <div className="">Movies</div>
                <div className="">My List</div>
            </div>
        </div>
    )

}

export default TopMenubar;