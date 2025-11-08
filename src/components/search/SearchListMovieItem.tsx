'use client';

import { IMAGE_BASE_URL } from '@/api/tmdb';
import PlayCircleIcon from '@/components/search/icons/PlayCircleIcon';
import { SearchListSkeleton } from '@/components/search/skeletons/SearchListSkeleton';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface MovieItemProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
  };
}

const MovieItem = ({ movie }: MovieItemProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="bg-gray-2 flex h-[76px] w-full">
        <div className="relative h-full w-[146px] flex-shrink-0">
          {!imageLoaded && <SearchListSkeleton />}
          <Image
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt=""
            width={146}
            height={76}
            className={`h-[76px] object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
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
};

export default MovieItem;
