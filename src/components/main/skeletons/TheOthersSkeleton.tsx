export function TheOthersSkeleton() {
  return (
    <div className="mt-7">
      <div className="ml-4 h-7 w-[150px] animate-pulse rounded bg-gray-700" />

      <div className="mt-2.5 ml-4 flex gap-2 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="shrink-0 animate-pulse">
            <div className="h-[161px] w-[103px] rounded bg-gray-800" />
          </div>
        ))}
      </div>
    </div>
  );
}
