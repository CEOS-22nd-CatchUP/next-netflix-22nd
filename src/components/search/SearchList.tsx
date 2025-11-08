'use client';

import { IMAGE_BASE_URL } from '@/api/tmdb';
import PlayCircleIcon from '@/components/search/icons/PlayCircleIcon';
import { useSearchStore } from '@/store/useSearchStore';
import Image from 'next/image';
import Link from 'next/link';

interface SearchListProps {
  initialMovies: any[];
}

const SearchList = ({ initialMovies }: SearchListProps) => {
  const { results, isLoading, query } = useSearchStore();

  const displayMovies = query ? results : initialMovies;

  if (isLoading) {
    return <div className="p-4 text-white">로딩중임 스켈레톤 어캐하지</div>;
  }

  return (
    <div className="flex flex-col gap-1">
      {displayMovies.map((movie: any) => {
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
    </div>
  );
};

export default SearchList;
