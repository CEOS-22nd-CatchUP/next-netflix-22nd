'use client';

import { IMAGE_BASE_URL } from '@/api/tmdb';
import PlayCircleIcon from '@/components/search/icons/PlayCircleIcon';
import { SearchListFirstRenderSkeleton } from '@/components/search/skeletons/SearchListFirstRenderSkeleton';
import { SearchListSkeleton } from '@/components/search/skeletons/SearchListSkeleton';
import { useSearchStore } from '@/store/useSearchStore';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const SearchList = () => {
  const { results, isLoading, query, loadMore, hasMore, initialLoad } = useSearchStore();
  const observerTarget = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initialLoad();
  }, [initialLoad]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  }, [query]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 1.0 },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, loadMore, hasMore, isLoading]);

  return (
    <div className="flex flex-col gap-1" ref={scrollContainerRef}>
      {isLoading && results.length === 0 ? (
        <SearchListFirstRenderSkeleton /> // 초기 Skeleton (useSearchStore 변수들이랑 겹쳐지면서 loading.tsx로 자동 적용 X)
      ) : (
        results.map((movie: any) => {
          if (!movie.poster_path) return null;

          return (
            <Link key={movie.id} href={`/movie/${movie.id}`}>
              <div className="bg-gray-2 flex h-[76px] w-full">
                <div className="relative h-full w-[146px] flex-shrink-0">
                  {isLoading ? (
                    <SearchListSkeleton />
                  ) : (
                    <Image
                      src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                      alt=""
                      width={146}
                      height={76}
                      className="h-[76px] object-cover"
                    />
                  )}
                </div>
                <div className="mx-4 flex flex-1 items-center justify-between">
                  <div className="text-text4-sb mr-2 flex h-[55px] items-center overflow-hidden leading-5 text-white">
                    <span>{movie.title}</span>
                  </div>
                  <div className="text-gray-0 cursor-pointer hover:text-white">
                    <PlayCircleIcon />
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      )}
      {!isLoading && hasMore && <div ref={observerTarget} className="h-4 w-full" />}
      {!isLoading && results.length === 0 && query.trim() && (
        <div className="p-4 text-center text-gray-400">검색 결과가 없습니다.</div>
      )}
    </div>
  );
};

export default SearchList;
