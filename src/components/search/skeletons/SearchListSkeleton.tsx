export function SearchListSkeleton() {
  return (
    <div className="flex flex-col gap-1">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="relative flex h-19 w-full flex-shrink-0 overflow-hidden bg-gray-800">
          <div className="absolute inset-0 animate-pulse bg-gray-800" />

          <div className="relative z-10 w-[146px] bg-gray-700"></div>
          <div className="relative z-10 mx-4 flex flex-1 items-center justify-between">
            <div className="h-5 w-32 rounded bg-gray-700"></div>
            <div className="h-8 w-8 rounded-full bg-gray-700"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
