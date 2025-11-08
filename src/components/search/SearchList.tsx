'use client';

import { IMAGE_BASE_URL } from '@/api/tmdb';
import PlayCircleIcon from '@/components/search/icons/PlayCircleIcon';
import { useSearchStore } from '@/store/useSearchStore';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

//검색결과 없을 때 화면하고, 로딩 추가해야함

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

  // if (isLoading) {
  //   return <div className="p-4 text-white">로딩중임 스켈레톤 어캐하지</div>;
  // }

  return (
    <div className="flex flex-col gap-1" ref={scrollContainerRef}>
      {results.map((movie: any) => {
        if (!movie.poster_path) return null;
        return (
          <Link key={movie.id} href={`/movie/${movie.id}`} className="">
            <div className="bg-gray-2 flex h-[76px] w-full">
              <div className="relative h-full w-[146px] flex-shrink-0">
                <Image
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt=""
                  width={146}
                  height={76}
                  className="h-[76px] object-cover"
                />
              </div>
              <div className="mx-4 flex flex-1 items-center justify-between">
                <div className="text-text4-sb flex h-[55px] items-center overflow-hidden text-white">
                  <span>{movie.title}</span>
                </div>
                <div className="hover:color-white cursor-pointer">
                  <PlayCircleIcon />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
      {!isLoading && hasMore && <div ref={observerTarget} className="h-4 w-full" />}
      {!isLoading && results.length === 0 && <div className="p-4 text-center text-gray-400">검색 결과가 없습니다.</div>}

      {/* {isLoading && <div className="p-4 text-center text-gray-400">Loading more...</div>} */}
    </div>
  );
};

export default SearchList;
