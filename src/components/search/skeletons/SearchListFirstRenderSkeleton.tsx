export function SearchListFirstRenderSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="bg-gray-2 flex h-[76px] w-full">
          <div className="w-[146px] flex-shrink-0 animate-pulse rounded bg-gray-800" />

          <div className="mx-4 flex flex-1 items-center justify-between">
            <div className="h-5 w-3/4 animate-pulse rounded bg-gray-700" />
            <div className="h-8 w-8 animate-pulse rounded-full bg-gray-700" />
          </div>
        </div>
      ))}
    </div>
  );
}
