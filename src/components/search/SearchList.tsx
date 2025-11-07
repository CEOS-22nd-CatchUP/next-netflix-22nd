import PlayCircleIcon from '@/components/search/icons/PlayCircleIcon';

const SearchList = () => {
  const items = Array.from({ length: 10 }, (_, i) => i); // 15개 아이템 생성

  return (
    <div className="flex flex-col gap-1">
      {items.map((item) => (
        <div key={item} className="bg-gray-2 flex h-19 w-full">
          <div className="w-[146px] bg-white"></div>
          <div className="mx-4 flex flex-1 items-center justify-between">
            <div className="text-text4-sb text-white">제목</div>
            <div className="hover:color-white cursor-pointer">
              <PlayCircleIcon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
