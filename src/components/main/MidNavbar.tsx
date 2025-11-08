import AddBtn from '@/assets/svgs/previewBar/addButton.svg?url';
import PlayBtn from '@/assets/svgs/previewBar/playButton.svg?url';
import InfoBtn from '@/assets/svgs/previewBar/infoButton.svg?url';
import Image from 'next/image';

const MidMenubar = () => {
  return (
    <div className="mt-[8] flex h-[45px] w-[259px] items-center justify-between">
      <div className="text-nav2-sm flex cursor-pointer flex-col items-center justify-center text-white">
        <Image src={AddBtn} alt="add my list" />
        <p>My List</p>
      </div>
      <div className="bg-gray-0 text-title1-sb flex h-[45px] w-[110px] cursor-pointer items-center justify-between rounded-[5px] text-black hover:bg-white">
        <Image src={PlayBtn} alt="play" className="ml-[19px]" />
        <p className="mr-[19px]">Play</p>
      </div>
      <div className="text-nav2-sm flex cursor-pointer flex-col items-center justify-center text-white">
        <Image src={InfoBtn} alt="info" />
        <p>Info</p>
      </div>
    </div>
  );
};

export default MidMenubar;
