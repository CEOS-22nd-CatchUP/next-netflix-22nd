export function PreviewsSkeleton() {
  return (
    <div className="mt-7">
      <div className="ml-4 h-7 w-[111px] animate-pulse rounded bg-gray-700" />

      <div className="mt-5 ml-4 flex gap-2 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="shrink-0 animate-pulse">
            <div className="h-[103px] w-[103px] rounded-full bg-gray-800" />
          </div>
        ))}
      </div>
    </div>
  );
}
