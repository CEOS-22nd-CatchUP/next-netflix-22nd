'use client';

import { SearchListFirstRenderSkeleton } from '@/components/search/skeletons/SearchListFirstRenderSkeleton';
import MovieItem from '@/components/search/SearchListMovieItem';
import { useSearchStore } from '@/store/useSearchStore';
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

  if (isLoading && results.length === 0) {
    return (
      <div className="flex flex-col gap-1" ref={scrollContainerRef}>
        <SearchListFirstRenderSkeleton />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1" ref={scrollContainerRef}>
      {results.map((movie: any) => {
        if (!movie.poster_path) return null;
        return <MovieItem key={movie.id} movie={movie} />;
      })}
      {!isLoading && hasMore && <div ref={observerTarget} className="h-4 w-full" />}
      {!isLoading && results.length === 0 && query.trim() && (
        <div className="p-4 text-center text-gray-400">검색 결과가 없습니다.</div>
      )}
      {isLoading && results.length > 0 && <div className="p-4 text-center text-gray-400">로딩 중...</div>}
    </div>
  );
};

export default SearchList;
