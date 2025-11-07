import { InputSearchSkeleton } from '@/components/search/skeletons/InputSearchSkeleton';
import { SearchListSkeleton } from '@/components/search/skeletons/SearchListSkeleton';

export default function Loading() {
  return (
    <div className="flex h-screen flex-col">
      <div className="top-0 flex-shrink-0">
        <div className="flex w-full justify-center pt-11">
          <InputSearchSkeleton />
        </div>
        <div>
          <div className="text-title3-sb my-[15px] text-white">Top Searches</div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto pb-17">
        <SearchListSkeleton />
      </div>
    </div>
  );
}
