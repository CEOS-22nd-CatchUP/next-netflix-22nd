export function InputSearchSkeleton() {
  return (
    <div className="relative flex h-[52px] w-full overflow-hidden bg-gray-800">
      <div className="absolute inset-0 animate-pulse bg-gray-800" />

      <div className="relative z-10 mx-4 flex w-full flex-row items-center justify-between">
        <div className="h-6 w-6 rounded bg-gray-700"></div>
        <div className="mx-2 h-5 flex-1 rounded bg-gray-700"></div>
        <div className="h-6 w-6 rounded bg-gray-700"></div>
      </div>
    </div>
  );
}
