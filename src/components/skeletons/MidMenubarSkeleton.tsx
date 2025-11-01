export function MidMenubarSkeleton() {
  return (
    <div className="mt-2 flex h-[45px] w-[259px] animate-pulse items-center justify-between">
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="h-6 w-6 rounded-full bg-gray-700" />
        <div className="h-3 w-12 rounded bg-gray-700" />
      </div>

      <div className="flex h-[45px] w-[110px] items-center justify-center gap-2 rounded-[5px] bg-gray-700">
        <div className="h-5 w-5 rounded-full bg-gray-600" />
        <div className="h-4 w-8 rounded bg-gray-600" />
      </div>

      <div className="flex flex-col items-center justify-center gap-1">
        <div className="h-6 w-6 rounded-full bg-gray-700" />
        <div className="h-3 w-8 rounded bg-gray-700" />
      </div>
    </div>
  );
}
