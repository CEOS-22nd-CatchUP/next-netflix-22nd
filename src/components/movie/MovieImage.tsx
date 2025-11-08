'use client';
import Image from 'next/image';
import { useState } from 'react';
import { BIG_IMAGE_BASE_URL } from '@/libs/tmdb';
import { MovieImageSkeleton } from '@/components/movie/skeletons/MovieImageSkeleton';

interface MovieImageProps {
  backdrop_path: string;
  title: string;
  height?: number;
}

export default function MovieImage({ backdrop_path, title, height = 415 }: MovieImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative flex w-full items-end justify-center bg-black" style={{ height }}>
      {isLoading && <MovieImageSkeleton />}
      <Image
        src={`${BIG_IMAGE_BASE_URL}${backdrop_path}`}
        alt={title}
        width={1920}
        height={height}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoadingComplete={() => setIsLoading(false)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
    </div>
  );
}
