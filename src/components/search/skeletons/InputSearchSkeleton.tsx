export function InputSearchSkeleton() {
  return (
    <div className="bg-gray-2 flex h-[52px] w-full">
      <div className="mx-4 flex w-full flex-row items-center justify-between">
        <div className="h-6 w-6 animate-pulse rounded bg-gray-700"></div>
        <div className="mx-2 h-5 flex-1 animate-pulse rounded bg-gray-700"></div>
        <div className="h-6 w-6 animate-pulse rounded bg-gray-700"></div>
      </div>
    </div>
  );
}
