export function MovieImageSkeleton() {
  return (
    <div className="relative flex h-[415px] w-full items-end justify-center bg-black">
      <div className="absolute inset-0 h-[415px] w-full animate-pulse bg-gray-800" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
    </div>
  );
}
