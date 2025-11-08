'use client';

export default function Loading() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-[415px] w-full items-end justify-center bg-black">
        <div className="absolute inset-0 h-[415px] w-full animate-pulse bg-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="flex h-[45px] w-[303px] animate-pulse items-center justify-center gap-3.5 rounded-[5.63px] bg-gray-700">
        <div className="h-5 w-5 rounded-full bg-gray-600" />
        <div className="h-5 w-16 rounded bg-gray-600" />
      </div>

      <div className="mt-8 w-[303px]">
        <div className="h-7 w-3/4 animate-pulse rounded bg-gray-700" />
      </div>

      <div className="mt-5 mb-20 w-[303px] space-y-2">
        <div className="h-4 w-full animate-pulse rounded bg-gray-700" />
        <div className="h-4 w-full animate-pulse rounded bg-gray-700" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-gray-700" />
      </div>
    </div>
  );
}
