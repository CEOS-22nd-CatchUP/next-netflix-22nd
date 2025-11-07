import SearchIcon from '@/assets/svgs/search/searchIcon.svg?url';
import XIcon from '@/components/search/icons/XIcon';
import Image from 'next/image';

const InputSearch = () => {
  return (
    <>
      <div className="bg-gray-2 flex h-[52px] w-full">
        <div className="mx-4 flex w-full flex-row items-center justify-between">
          <Image src={SearchIcon} alt="검색" />
          <input
            placeholder="Search for a show, movie, genre, e.t.c"
            className="placeholder-gray-0 text-text3-sb mx-2 flex-1 text-white caret-white focus:outline-none"
          />
          <XIcon className="text-gray-0 cursor-pointer hover:text-white" />
        </div>
      </div>
    </>
  );
};

export default InputSearch;
