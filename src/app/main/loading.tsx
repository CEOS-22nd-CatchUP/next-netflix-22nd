import { CurrentPlayingSkeleton } from '@/components/skeletons/CurrentPlayingSkeleton';
import { MidMenubarSkeleton } from '@/components/skeletons/MidMenubarSkeleton';
import { PreviewsSkeleton } from '@/components/skeletons/PreviewSkeleton';
import { TheOthersSkeleton } from '@/components/skeletons/TheOthersSkeleton';

export default function Loading() {
  return (
    <div className="flex flex-col bg-black text-white">
      <CurrentPlayingSkeleton />
      <div className="flex justify-center">
        <MidMenubarSkeleton />
      </div>
      <PreviewsSkeleton />
      <TheOthersSkeleton />
      <div className="h-20" />
    </div>
  );
}
