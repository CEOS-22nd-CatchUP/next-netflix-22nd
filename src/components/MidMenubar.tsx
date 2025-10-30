import AddBtn from '@/svgs/previewBar/addButton.svg';
import PlayBtn from '@/svgs/previewBar/playButton.svg';
import InfoBtn from '@/svgs/previewBar/info.svg';
import Image from 'next/image';

const MidMenubar = () => {
    return(
        <div className="flex w-[259px] h-[45px] mt-[8] items-center justify-between">
            <div className="flex flex-col justify-center items-center text-nav2-sm text-white">
               <Image src={AddBtn} alt='add my list'/>
                <p>My List</p>
                </div>
            <div className="flex items-center justify-between w-[110px] h-[45px] bg-gray-0 hover:bg-white rounded-[5px] text-title1-sb text-black">
                <Image src={PlayBtn} alt='play' className='ml-[19px]'/>
                <p className='mr-[19px]'>Play</p>
                </div> 
            <div className="flex flex-col justify-center items-center text-nav2-sm text-white">
                <Image src={InfoBtn} alt='info'/>
                <p>Info
                    </p>
                </div>
        </div>
    )

}

export default MidMenubar;