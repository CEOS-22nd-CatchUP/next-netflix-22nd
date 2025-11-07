export function SearchListSkeleton() {
  return (
    <div className="flex flex-col gap-1">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="bg-gray-2 flex h-19 w-full flex-shrink-0">
          <div className="w-[146px] animate-pulse bg-gray-800"></div>
          <div className="mx-4 flex flex-1 items-center justify-between">
            <div className="h-5 w-32 animate-pulse rounded bg-gray-700"></div>
            <div className="h-8 w-8 animate-pulse rounded-full bg-gray-700"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
