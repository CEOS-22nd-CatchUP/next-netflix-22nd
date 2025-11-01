export function CurrentPlayingSkeleton() {
  return (
    <div className="relative flex h-[415px] w-full flex-col items-center justify-between">
      <div className="absolute inset-0 animate-pulse bg-gray-800" />

      <div className="relative z-10 mt-auto mb-4 flex animate-pulse items-center gap-1">
        <div className="h-6 w-6 rounded bg-gray-700" />
        <div className="h-5 w-32 rounded bg-gray-700" />
      </div>
    </div>
  );
}
