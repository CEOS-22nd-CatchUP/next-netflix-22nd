import { CurrentPlayingSkeleton } from '@/components/main/skeletons/CurrentPlayingSkeleton';
import { MidNavbarSkeleton } from '@/components/main/skeletons/MidNavbarSkeleton';
import { PreviewsSkeleton } from '@/components/main/skeletons/PreviewSkeleton';
import { TheOthersSkeleton } from '@/components/main/skeletons/TheOthersSkeleton';

export default function Loading() {
  return (
    <div className="flex flex-col bg-black text-white">
      <CurrentPlayingSkeleton />
      <div className="flex justify-center">
        <MidNavbarSkeleton />
      </div>
      <PreviewsSkeleton />
      <TheOthersSkeleton />
      <div className="h-20" />
    </div>
  );
}
