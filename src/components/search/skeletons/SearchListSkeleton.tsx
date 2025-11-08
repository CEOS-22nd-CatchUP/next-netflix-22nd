export function SearchListSkeleton() {
  return (
    <div className="flex flex-col gap-1">
      <div className="bg-gray-2 flex h-19 w-full gap-4">
        <div className="w-[146px] flex-shrink-0 animate-pulse bg-gray-800" />
      </div>
    </div>
  );
}
