export const dynamic = 'force-dynamic';

import Image from 'next/image';
import { BIG_IMAGE_BASE_URL, getPopularMovies } from '@/api/tmdb';

const CurrentPlaying = async () => {
  const movies = await getPopularMovies();

  const top10Movies = movies.slice(0, 10);

  const randomIndex = Math.floor(Math.random() * top10Movies.length);
  const movie = top10Movies[randomIndex];
  const rank = randomIndex + 1;

  return (
    <div className="relative flex h-[415px] w-full items-end justify-center">
      <Image
        src={`${BIG_IMAGE_BASE_URL}${movie.backdrop_path}`}
        alt={movie.title}
        width={1920}
        height={415}
        className="absolute inset-0 h-[415px] w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="text-title2-sb relative z-10 mb-1 flex items-center">
        <div className="mr-1.5 ml-2 flex w-[15px] flex-col items-center justify-center border border-white text-center text-white">
          <div className="text-text1-sb -mb-[3px]">TOP</div>
          <div className="text-text2-sb">10</div>
        </div>
        <span>#{rank} in Korea Today</span>
      </div>
    </div>
  );
};

export default CurrentPlaying;
